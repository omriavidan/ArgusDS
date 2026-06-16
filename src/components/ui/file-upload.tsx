"use client";

import * as React from "react";
import { UploadCloud, X, FileIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "./button";

const dropzoneVariants = cva(
  "relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-6 py-10 text-center transition-colors cursor-pointer",
  {
    variants: {
      state: {
        idle: "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50",
        dragOver: "border-primary bg-primary/5",
        disabled:
          "pointer-events-none cursor-not-allowed border-muted-foreground/15 opacity-50",
      },
    },
    defaultVariants: {
      state: "idle",
    },
  },
);

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

export interface FileUploadProps
  extends VariantProps<typeof dropzoneVariants> {
  onFilesSelected?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
  disabled?: boolean;
  className?: string;
}

function FileUpload({
  onFilesSelected,
  accept,
  multiple = true,
  maxSizeMB = 10,
  disabled = false,
  className,
}: FileUploadProps) {
  const [files, setFiles] = React.useState<File[]>([]);
  const [isDragOver, setIsDragOver] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const maxSizeBytes = maxSizeMB * 1024 * 1024;

  const handleFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    setError(null);
    const validFiles: File[] = [];

    for (let i = 0; i < incoming.length; i++) {
      const file = incoming[i];
      if (file.size > maxSizeBytes) {
        setError(
          `"${file.name}" exceeds the ${maxSizeMB}MB limit.`,
        );
        continue;
      }
      validFiles.push(file);
    }

    const newFiles = multiple ? [...files, ...validFiles] : validFiles.slice(0, 1);
    setFiles(newFiles);
    onFilesSelected?.(newFiles);
  };

  const handleRemove = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onFilesSelected?.(updated);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (!disabled) handleFiles(e.dataTransfer.files);
  };

  const state = disabled ? "disabled" : isDragOver ? "dragOver" : "idle";

  return (
    <div data-slot="file-upload" className={cn("space-y-3", className)}>
      <div
        data-slot="file-upload-dropzone"
        className={cn(dropzoneVariants({ state }))}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          className="sr-only"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <UploadCloud className="size-10 text-muted-foreground" />
        <div className="space-y-1">
          <p className="text-sm font-medium">
            Drag & drop files here, or click to browse
          </p>
          <p className="text-xs text-muted-foreground">
            {accept ? `Accepted: ${accept}` : "All file types accepted"} · Max{" "}
            {maxSizeMB}MB
          </p>
        </div>
      </div>

      {error && (
        <p data-slot="file-upload-error" className="text-sm text-destructive">
          {error}
        </p>
      )}

      {files.length > 0 && (
        <ul data-slot="file-upload-list" className="space-y-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center gap-3 rounded-md border bg-muted/30 px-3 py-2 text-sm"
            >
              <FileIcon className="size-4 shrink-0 text-muted-foreground" />
              <span className="flex-1 truncate">{file.name}</span>
              <span className="shrink-0 text-xs text-muted-foreground">
                {formatFileSize(file.size)}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-6"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(index);
                }}
              >
                <X className="size-3" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { FileUpload, dropzoneVariants };
