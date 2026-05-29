import {
  Clock,
  CalendarDays,
  RefreshCw,
  Satellite,
  StickyNote,
  X,
  Filter,
  Plus,
  Minus,
  RotateCw,
} from "lucide-react";
import { useState, useEffect } from "react";
import { CountdownTimer } from '@/components/common/countdown-timer';

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
  }, [note]);

  const handleSave = () => {
    onSave(noteText);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-lg p-6 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm text-foreground">Edit Note</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Add a note..."
          className="w-full bg-input border border-border rounded px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none mb-4"
          rows={6}
          autoFocus
        />
        <div className="flex gap-2 justify-end">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded border border-border hover:bg-secondary text-foreground text-xs"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-3 py-1.5 rounded bg-primary text-primary-foreground hover:bg-primary/90 text-xs"
          >
            Save
          </button>
        </div>
      </div>
    </div>
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

  const toggleVhr = (vhr: string) => {
    setSelectedVhrs((prev) =>
      prev.includes(vhr)
        ? prev.filter((v) => v !== vhr)
        : [...prev, vhr],
    );
  };

  const adjustTime = (
    time: string,
    minutes: number,
  ): string => {
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

  const handleAdd = () => {
    // Handle reprocess logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-lg p-6 max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base text-foreground">
            {pass.ocCode} · {pass.revolutionId}
          </h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-6">
          {/* Left Side - Form */}
          <div className="flex-1">
            {/* VHR Checkboxes Grid */}
            <div className="bg-muted/30 border border-border rounded-lg p-6 mb-6">
              <div className="grid grid-cols-5 gap-4">
                {vhrOptions.map((vhr) => (
                  <label
                    key={vhr}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedVhrs.includes(vhr)}
                      onChange={() => toggleVhr(vhr)}
                      className="w-4 h-4 rounded border-border bg-input checked:bg-primary checked:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
                    />
                    <span className="text-sm text-foreground">
                      {vhr}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-end gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  sDIRS
                </span>
                <select className="px-3 py-1.5 rounded-md bg-input border border-border hover:bg-muted text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="">Select sdirs...</option>
                  <option value="sdir1">sDIR 1</option>
                  <option value="sdir2">sDIR 2</option>
                  <option value="sdir3">sDIR 3</option>
                  <option value="sdir4">sDIR 4</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  Start
                </span>
                <div className="flex items-center rounded-md bg-input border border-border overflow-hidden">
                  <button
                    onClick={() =>
                      setStartTime((prev) =>
                        adjustTime(prev, -1),
                      )
                    }
                    className="p-1.5 bg-muted/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="text"
                    value={startTime}
                    onChange={(e) =>
                      setStartTime(e.target.value)
                    }
                    placeholder="--:--"
                    className="w-14 px-2 py-1.5 bg-transparent text-xs text-foreground text-center focus:outline-none"
                  />
                  <button
                    onClick={() =>
                      setStartTime((prev) =>
                        adjustTime(prev, 1),
                      )
                    }
                    className="p-1.5 bg-muted/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  End
                </span>
                <div className="flex items-center rounded-md bg-input border border-border overflow-hidden">
                  <button
                    onClick={() =>
                      setEndTime((prev) => adjustTime(prev, -1))
                    }
                    className="p-1.5 bg-muted/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="text"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    placeholder="--:--"
                    className="w-14 px-2 py-1.5 bg-transparent text-xs text-foreground text-center focus:outline-none"
                  />
                  <button
                    onClick={() =>
                      setEndTime((prev) => adjustTime(prev, 1))
                    }
                    className="p-1.5 bg-muted/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">Duration</span>
                <div className="w-32 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-xs text-primary font-medium text-center">
                  {duration}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-end">
              <button
                onClick={handleAdd}
                className="px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
              >
                PULL
              </button>
            </div>
          </div>

          {/* Right Side - History */}
          {pass.reprocessHistory &&
            pass.reprocessHistory.length > 0 && (
              <div className="w-80 border-l border-border pl-6">
                <h4 className="text-xs text-muted-foreground uppercase tracking-wide mb-4">
                  Reprocess History
                </h4>
                <div className="space-y-3">
                  {pass.reprocessHistory.map((entry, index) => (
                    <div
                      key={index}
                      className="bg-muted/20 border border-border rounded p-3"
                    >
                      <div className="text-[10px] text-muted-foreground mb-1.5">
                        {new Date(
                          entry.timestamp,
                        ).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                      <div className="text-xs text-foreground mb-1">
                        <span className="text-muted-foreground">
                          VHRs:
                        </span>{" "}
                        {entry.vhrs.join(", ")}
                      </div>
                      <div className="text-xs text-foreground">
                        <span className="text-muted-foreground">
                          sDIR:
                        </span>{" "}
                        {entry.sdir}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
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
  const [isReprocessModalOpen, setIsReprocessModalOpen] =
    useState(false);

  const handleSaveNote = (note: string) => {
    onUpdateNote(pass.id, note);
  };

  return (
    <>
      <div
        className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
        onClick={() => setIsReprocessModalOpen(true)}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-2">
            <h3 className="text-sm text-foreground">
              {pass.ocCode} | Rev {pass.revolutionId}
            </h3>
          </div>
          <CountdownTimer
            passTime={pass.passTime}
          />
        </div>

        {/* Details */}
        <div className="mb-5">
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <CalendarDays className="w-3 h-3 text-muted-foreground" />
              <div className="text-[10px] text-muted-foreground uppercase tracking-wide">
                Pass Time
              </div>
            </div>
            <div className="text-xs text-foreground">
              {pass.passTime}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-border pt-5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsNoteModalOpen(true);
            }}
            className={`relative p-2 rounded-md transition-colors ${
              pass.note
                ? "bg-primary/10 text-primary hover:bg-primary/20"
                : "bg-muted/50 text-muted-foreground hover:bg-muted"
            }`}
            title={pass.note ? "Edit Note" : "Add Note"}
          >
            <StickyNote className="w-3.5 h-3.5" />
            {pass.note && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full border border-background"></span>
            )}
          </button>
        </div>
      </div>

      <NoteModal
        isOpen={isNoteModalOpen}
        onClose={() => setIsNoteModalOpen(false)}
        note={pass.note || ""}
        onSave={handleSaveNote}
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
  const [passes, setPasses] =
    useState<SatellitePass[]>(initialPasses);
  const [selectedSatellite, setSelectedSatellite] =
    useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [revolutionId, setRevolutionId] = useState("");

  const handleUpdateNote = (id: string, note: string) => {
    setPasses((prev) =>
      prev.map((pass) =>
        pass.id === id ? { ...pass, note } : pass,
      ),
    );
  };

  // Get unique satellite names
  const uniqueSatellites = Array.from(
    new Set(passes.map((pass) => pass.satelliteName)),
  ).sort();

  const filteredPasses = passes.filter((pass) => {
    const matchesSatellite =
      !selectedSatellite ||
      pass.satelliteName === selectedSatellite;
    const matchesRevolution =
      !revolutionId ||
      pass.revolutionId.toString().includes(revolutionId);

    let matchesDateRange = true;
    if (startDate || endDate) {
      const passDate = new Date(pass.passTime);
      if (startDate) {
        const start = new Date(startDate);
        matchesDateRange =
          matchesDateRange && passDate >= start;
      }
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        matchesDateRange = matchesDateRange && passDate <= end;
      }
    }

    return (
      matchesSatellite && matchesRevolution && matchesDateRange
    );
  });

  return (
    <div className="min-h-screen bg-background dark">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Satellite className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h1 className="text-base text-foreground">
                  Satellite Pass Records
                </h1>
                <p className="text-xs text-muted-foreground">
                  Monitor and manage satellite passes
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">
                Current Time (UTC)
              </div>
              <div className="text-sm text-foreground">
                08:23 UTC
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <h2 className="text-sm text-foreground">Filters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-2 block uppercase tracking-wide">
                Satellite
              </label>
              <select
                value={selectedSatellite}
                onChange={(e) =>
                  setSelectedSatellite(e.target.value)
                }
                className="w-full bg-input border border-border rounded px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">All Satellites</option>
                {uniqueSatellites.map((sat) => (
                  <option key={sat} value={sat}>
                    {sat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-2 block uppercase tracking-wide">
                Revolution Number
              </label>
              <input
                type="text"
                value={revolutionId}
                onChange={(e) =>
                  setRevolutionId(e.target.value)
                }
                placeholder="Enter revolution ID"
                className="w-full bg-input border border-border rounded px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-2 block uppercase tracking-wide">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-input border border-border rounded px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-2 block uppercase tracking-wide">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full bg-input border border-border rounded px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          {(selectedSatellite ||
            revolutionId ||
            startDate ||
            endDate) && (
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-xs text-muted-foreground">
                Active filters:
              </span>
              {selectedSatellite && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-primary text-xs">
                  Satellite: {selectedSatellite}
                  <button
                    onClick={() => setSelectedSatellite("")}
                    className="hover:text-primary/80"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {revolutionId && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-primary text-xs">
                  Revolution: {revolutionId}
                  <button
                    onClick={() => setRevolutionId("")}
                    className="hover:text-primary/80"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {startDate && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-primary text-xs">
                  From: {startDate}
                  <button
                    onClick={() => setStartDate("")}
                    className="hover:text-primary/80"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {endDate && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-primary text-xs">
                  To: {endDate}
                  <button
                    onClick={() => setEndDate("")}
                    className="hover:text-primary/80"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedSatellite("");
                  setRevolutionId("");
                  setStartDate("");
                  setEndDate("");
                }}
                className="text-xs text-muted-foreground hover:text-foreground ml-auto"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-0.5">
              Total Passes
            </div>
            <div className="text-xl text-foreground">6</div>
          </div>
          <div className="bg-card border border-emerald-500/20 rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-0.5">
              Completed
            </div>
            <div className="text-xl text-emerald-400">2</div>
          </div>
          <div className="bg-card border border-amber-500/20 rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-0.5">
              Pending
            </div>
            <div className="text-xl text-amber-400">1</div>
          </div>
          <div className="bg-card border border-blue-500/20 rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-0.5">
              Marked
            </div>
            <div className="text-xl text-blue-400">2</div>
          </div>
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
              <p className="text-muted-foreground text-sm">
                No satellite passes found matching your filters.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}