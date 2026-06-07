import {
  CalendarDays,
  Satellite,
  StickyNote,
  X,
  Filter,
  Plus,
  Minus,
} from "lucide-react";
import { useState, useEffect } from "react";
import { format } from "date-fns";

import { CountdownTimer } from "@/components/common/countdown-timer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { HoldButton } from "@/components/ui/hold-button";

interface ReprocessHistoryEntry {
  timestamp: string;
  vhrs: string[];
  sdir: string;
}

interface SatellitePass {
  id: string;
  satelliteName: string;
  ocCode: string;
  revolutionId: number;
  status: "done" | "failed" | "pending" | "available";
  passTime: string;
  downloadTime: string;
  duration: string;
  orbit: string;
  note?: string;
  markedForReprocess?: boolean;
  reprocessHistory?: ReprocessHistoryEntry[];
}

const initialPasses: SatellitePass[] = [
  {
    id: "1",
    satelliteName: "LANDSAT-8",
    ocCode: "OC2",
    revolutionId: 1234,
    status: "done",
    passTime: "2026-05-26T14:30:00Z",
    downloadTime: "10/01/23 08:00",
    duration: "12m 45s",
    orbit: "Ascending",
    note: "",
  },
  {
    id: "2",
    satelliteName: "SENTINEL-2A",
    ocCode: "OC2",
    revolutionId: 5678,
    status: "failed",
    passTime: "2026-05-26T16:45:00Z",
    downloadTime: "10/01/23 08:00",
    duration: "8m 20s",
    orbit: "Descending",
    note: "",
    markedForReprocess: true,
    reprocessHistory: [
      {
        timestamp: "2026-05-26T10:30:00Z",
        vhrs: ["vhr1", "vhr3", "vhr7"],
        sdir: "sDIR 2",
      },
      {
        timestamp: "2026-05-25T14:20:00Z",
        vhrs: ["vhr2", "vhr4"],
        sdir: "sDIR 1",
      },
    ],
  },
  {
    id: "3",
    satelliteName: "TERRA",
    ocCode: "OC3",
    revolutionId: 9012,
    status: "pending",
    passTime: "2026-05-26T18:15:00Z",
    downloadTime: "10/01/23 08:00",
    duration: "15m 30s",
    orbit: "Ascending",
    note: "",
  },
  {
    id: "4",
    satelliteName: "AQUA",
    ocCode: "OC2",
    revolutionId: 3456,
    status: "available",
    passTime: "2026-05-26T20:00:00Z",
    downloadTime: "10/01/23 08:00",
    duration: "11m 15s",
    orbit: "Descending",
    note: "",
    markedForReprocess: true,
    reprocessHistory: [
      {
        timestamp: "2026-05-26T09:15:00Z",
        vhrs: ["vhr1", "vhr2", "vhr5", "vhr8"],
        sdir: "sDIR 3",
      },
    ],
  },
  {
    id: "5",
    satelliteName: "SENTINEL-1B",
    ocCode: "OC4",
    revolutionId: 7890,
    status: "done",
    passTime: "2026-05-27T02:30:00Z",
    downloadTime: "10/01/23 08:00",
    duration: "9m 40s",
    orbit: "Ascending",
    note: "",
  },
  {
    id: "6",
    satelliteName: "LANDSAT-9",
    ocCode: "OC2",
    revolutionId: 2345,
    status: "available",
    passTime: "2026-05-27T04:15:00Z",
    downloadTime: "10/01/23 08:00",
    duration: "13m 25s",
    orbit: "Descending",
    note: "",
  },
];

function NoteModal({
  isOpen,
  onClose,
  note,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  note: string;
  onSave: (note: string) => void;
}) {
  const [noteText, setNoteText] = useState(note);

  useEffect(() => {
    setNoteText(note);
  }, [note, isOpen]);

  const handleSave = () => {
    onSave(noteText);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Note</DialogTitle>
        </DialogHeader>
        <Textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Add a note..."
          className="resize-none h-32 mt-2"
        />
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ReprocessModal({
  isOpen,
  onClose,
  pass,
}: {
  isOpen: boolean;
  onClose: () => void;
  pass: SatellitePass;
}) {
  const vhrOptions = [
    "vhr1",
    "vhr2",
    "vhr3",
    "vhr4",
    "vhr5",
    "vhr6",
    "vhr7",
    "vhr8",
    "vhr9",
  ];
  const [selectedVhrs, setSelectedVhrs] = useState<string[]>([
    "vhr1",
    "vhr2",
    "vhr3",
    "vhr7",
  ]);
  const [startTime, setStartTime] = useState("--:--");
  const [endTime, setEndTime] = useState("--:--");
  const [duration, setDuration] = useState("0h 0m");
  const [sdir, setSdir] = useState("");

  const toggleVhr = (vhr: string) => {
    setSelectedVhrs((prev) =>
      prev.includes(vhr)
        ? prev.filter((v) => v !== vhr)
        : [...prev, vhr],
    );
  };

  const adjustTime = (time: string, minutes: number): string => {
    if (time === "--:--") {
      const now = new Date();
      time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    }
    const [hours, mins] = time.split(":").map(Number);
    const totalMinutes = hours * 60 + mins + minutes;
    const newHours = Math.floor((totalMinutes / 60) % 24);
    const newMins = totalMinutes % 60;
    return `${String(newHours).padStart(2, "0")}:${String(Math.abs(newMins)).padStart(2, "0")}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle className="text-base font-medium">
            {pass.ocCode} · {pass.revolutionId}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row gap-6 mt-4">
          {/* Left Side - Form */}
          <div className="flex-1">
            {/* VHR Checkboxes Grid */}
            <div className="bg-muted/30 border border-border rounded-lg p-6 mb-6">
              <div className="grid grid-cols-5 gap-4">
                {vhrOptions.map((vhr) => (
                  <div key={vhr} className="flex items-center space-x-2">
                    <Checkbox
                      id={`vhr-${vhr}`}
                      checked={selectedVhrs.includes(vhr)}
                      onCheckedChange={() => toggleVhr(vhr)}
                    />
                    <Label htmlFor={`vhr-${vhr}`} className="cursor-pointer font-normal text-sm">
                      {vhr}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-wrap items-end gap-6 mb-6">
              <div className="flex flex-col gap-2 w-40">
                <Label className="text-xs text-muted-foreground uppercase tracking-wide">
                  sDIRS
                </Label>
                <Select value={sdir} onValueChange={setSdir}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sdirs..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sdir1">sDIR 1</SelectItem>
                    <SelectItem value="sdir2">sDIR 2</SelectItem>
                    <SelectItem value="sdir3">sDIR 3</SelectItem>
                    <SelectItem value="sdir4">sDIR 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-xs text-muted-foreground uppercase tracking-wide">
                  Start
                </Label>
                <div className="flex items-center rounded-md border border-input bg-background overflow-hidden h-9">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-full rounded-none px-2"
                    onClick={() => setStartTime((prev) => adjustTime(prev, -1))}
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </Button>
                  <Input
                    type="text"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    placeholder="--:--"
                    className="w-14 h-full border-0 rounded-none px-2 py-1 text-xs text-center focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent shadow-none"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-full rounded-none px-2"
                    onClick={() => setStartTime((prev) => adjustTime(prev, 1))}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-xs text-muted-foreground uppercase tracking-wide">
                  End
                </Label>
                <div className="flex items-center rounded-md border border-input bg-background overflow-hidden h-9">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-full rounded-none px-2"
                    onClick={() => setEndTime((prev) => adjustTime(prev, -1))}
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </Button>
                  <Input
                    type="text"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    placeholder="--:--"
                    className="w-14 h-full border-0 rounded-none px-2 py-1 text-xs text-center focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent shadow-none"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-full rounded-none px-2"
                    onClick={() => setEndTime((prev) => adjustTime(prev, 1))}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-xs text-muted-foreground uppercase tracking-wide">
                  Duration
                </Label>
                <div className="w-32 px-3 flex items-center justify-center h-9 rounded-md bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                  {duration}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-end mt-6">
              <HoldButton onComplete={() => onClose()}>PULL</HoldButton>
            </div>
          </div>

          {/* Right Side - History */}
          {pass.reprocessHistory && pass.reprocessHistory.length > 0 && (
            <div className="md:w-80 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-6">
              <Text variant="small" className="text-muted-foreground uppercase tracking-wide mb-4 block">
                Reprocess History
              </Text>
              <div className="space-y-3">
                {pass.reprocessHistory.map((entry, index) => (
                  <Card key={index} className="bg-muted/20 border-border p-3 shadow-none rounded-sm">
                    <Text variant="muted" className="text-[10px] mb-1.5 block">
                      {new Date(entry.timestamp).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Text>
                    <Text variant="small" className="text-xs mb-1 font-normal block">
                      <span className="text-muted-foreground">VHRs:</span> {entry.vhrs.join(", ")}
                    </Text>
                    <Text variant="small" className="text-xs font-normal block">
                      <span className="text-muted-foreground">sDIR:</span> {entry.sdir}
                    </Text>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function PassCard({
  pass,
  onUpdateNote,
}: {
  pass: SatellitePass;
  onUpdateNote: (id: string, note: string) => void;
}) {
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [isReprocessModalOpen, setIsReprocessModalOpen] = useState(false);

  return (
    <>
      <Card
        className="hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
        onClick={() => setIsReprocessModalOpen(true)}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <Text variant="small" className="text-sm font-medium">
              {pass.ocCode} | Rev {pass.revolutionId}
            </Text>
            <CountdownTimer passTime={pass.passTime} />
          </div>

          {/* Details */}
          <div className="mb-5">
            <div className="flex items-center gap-1.5 mb-0.5">
              <CalendarDays className="w-3 h-3 text-muted-foreground" />
              <Text variant="muted" className="text-[10px] uppercase tracking-wide">
                Pass Time
              </Text>
            </div>
            <Text variant="small" className="text-xs font-normal">
              {pass.passTime}
            </Text>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-border pt-5">
            <Button
              variant={pass.note ? "secondary" : "ghost"}
              size="icon"
              className={pass.note ? "text-primary bg-primary/10 hover:bg-primary/20 relative" : "text-muted-foreground relative"}
              onClick={(e) => {
                e.stopPropagation();
                setIsNoteModalOpen(true);
              }}
              title={pass.note ? "Edit Note" : "Add Note"}
            >
              <StickyNote className="w-4 h-4" />
              {pass.note && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full border border-background"></span>
              )}
            </Button>
          </div>
        </div>
      </Card>

      <NoteModal
        isOpen={isNoteModalOpen}
        onClose={() => setIsNoteModalOpen(false)}
        note={pass.note || ""}
        onSave={(note) => onUpdateNote(pass.id, note)}
      />
      <ReprocessModal
        isOpen={isReprocessModalOpen}
        onClose={() => setIsReprocessModalOpen(false)}
        pass={pass}
      />
    </>
  );
}

export default function App() {
  const [passes, setPasses] = useState<SatellitePass[]>(initialPasses);
  const [selectedSatellite, setSelectedSatellite] = useState<string>("all");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [revolutionId, setRevolutionId] = useState("");

  const handleUpdateNote = (id: string, note: string) => {
    setPasses((prev) =>
      prev.map((pass) => (pass.id === id ? { ...pass, note } : pass)),
    );
  };

  // Get unique satellite names
  const uniqueSatellites = Array.from(
    new Set(passes.map((pass) => pass.satelliteName)),
  ).sort();

  const filteredPasses = passes.filter((pass) => {
    const matchesSatellite = selectedSatellite === "all" || pass.satelliteName === selectedSatellite;
    const matchesRevolution = !revolutionId || pass.revolutionId.toString().includes(revolutionId);

    let matchesDateRange = true;
    if (startDate || endDate) {
      const passDate = new Date(pass.passTime);
      if (startDate) {
        matchesDateRange = matchesDateRange && passDate >= startDate;
      }
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        matchesDateRange = matchesDateRange && passDate <= end;
      }
    }

    return matchesSatellite && matchesRevolution && matchesDateRange;
  });

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Satellite className="w-4 h-4 text-primary" />
              </div>
              <div>
                <Text variant="small" className="text-base font-semibold">
                  Satellite Pass Records
                </Text>
                <Text variant="muted" className="text-xs">
                  Monitor and manage satellite passes
                </Text>
              </div>
            </div>
            <div className="text-right">
              <Text variant="muted" className="text-xs">Current Time (UTC)</Text>
              <Text variant="small" className="text-sm font-medium">08:23 UTC</Text>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Filters */}
        <Card className="mb-6 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <Text variant="small" className="text-sm font-medium">Filters</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground uppercase tracking-wide block">
                Satellite
              </Label>
              <Select value={selectedSatellite} onValueChange={setSelectedSatellite}>
                <SelectTrigger>
                  <SelectValue placeholder="All Satellites" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Satellites</SelectItem>
                  {uniqueSatellites.map((sat) => (
                    <SelectItem key={sat} value={sat}>
                      {sat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground uppercase tracking-wide block">
                Revolution Number
              </Label>
              <Input
                type="text"
                value={revolutionId}
                onChange={(e) => setRevolutionId(e.target.value)}
                placeholder="Enter revolution ID"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <Label className="text-xs text-muted-foreground uppercase tracking-wide block">
                Start Date
              </Label>
              <DatePicker date={startDate} onDateChange={setStartDate} />
            </div>
            <div className="space-y-2 flex flex-col">
              <Label className="text-xs text-muted-foreground uppercase tracking-wide block">
                End Date
              </Label>
              <DatePicker date={endDate} onDateChange={setEndDate} />
            </div>
          </div>
          {(selectedSatellite !== "all" ||
            revolutionId ||
            startDate ||
            endDate) && (
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <Text variant="muted" className="text-xs">Active filters:</Text>
              {selectedSatellite !== "all" && (
                <Badge variant="secondary" className="gap-1 px-2 text-primary bg-primary/10 hover:bg-primary/20 font-normal">
                  Satellite: {selectedSatellite}
                  <X className="w-3 h-3 cursor-pointer hover:text-primary/80" onClick={() => setSelectedSatellite("all")} />
                </Badge>
              )}
              {revolutionId && (
                <Badge variant="secondary" className="gap-1 px-2 text-primary bg-primary/10 hover:bg-primary/20 font-normal">
                  Revolution: {revolutionId}
                  <X className="w-3 h-3 cursor-pointer hover:text-primary/80" onClick={() => setRevolutionId("")} />
                </Badge>
              )}
              {startDate && (
                <Badge variant="secondary" className="gap-1 px-2 text-primary bg-primary/10 hover:bg-primary/20 font-normal">
                  From: {format(startDate, "MMM dd, yyyy")}
                  <X className="w-3 h-3 cursor-pointer hover:text-primary/80" onClick={() => setStartDate(undefined)} />
                </Badge>
              )}
              {endDate && (
                <Badge variant="secondary" className="gap-1 px-2 text-primary bg-primary/10 hover:bg-primary/20 font-normal">
                  To: {format(endDate, "MMM dd, yyyy")}
                  <X className="w-3 h-3 cursor-pointer hover:text-primary/80" onClick={() => setEndDate(undefined)} />
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs ml-auto text-muted-foreground"
                onClick={() => {
                  setSelectedSatellite("all");
                  setRevolutionId("");
                  setStartDate(undefined);
                  setEndDate(undefined);
                }}
              >
                Clear all
              </Button>
            </div>
          )}
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-3 shadow-sm">
            <Text variant="muted" className="text-xs mb-0.5 block">
              Total Passes
            </Text>
            <Text variant="large" className="text-xl font-normal block text-foreground">
              6
            </Text>
          </Card>
          <Card className="p-3 shadow-sm border-emerald-500/20">
            <Text variant="muted" className="text-xs mb-0.5 block">
              Completed
            </Text>
            <Text variant="large" className="text-xl font-normal block text-emerald-400">
              2
            </Text>
          </Card>
          <Card className="p-3 shadow-sm border-amber-500/20">
            <Text variant="muted" className="text-xs mb-0.5 block">
              Pending
            </Text>
            <Text variant="large" className="text-xl font-normal block text-amber-400">
              1
            </Text>
          </Card>
          <Card className="p-3 shadow-sm border-blue-500/20">
            <Text variant="muted" className="text-xs mb-0.5 block">
              Marked
            </Text>
            <Text variant="large" className="text-xl font-normal block text-blue-400">
              2
            </Text>
          </Card>
        </div>

        {/* Pass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPasses.length > 0 ? (
            filteredPasses.map((pass) => (
              <PassCard
                key={pass.id}
                pass={pass}
                onUpdateNote={handleUpdateNote}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Text variant="muted" className="text-sm">
                No satellite passes found matching your filters.
              </Text>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}