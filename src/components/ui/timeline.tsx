"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────── */
/*  Timeline dot variants                                        */
/* ────────────────────────────────────────────────────────────── */

const timelineDotVariants = cva(
  "relative z-10 flex size-3 items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-success",
        destructive: "bg-destructive",
        warning: "bg-warning",
        info: "bg-info",
        outline: "border-2 border-muted-foreground bg-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

/* ────────────────────────────────────────────────────────────── */
/*  Timeline                                                      */
/* ────────────────────────────────────────────────────────────── */

function Timeline({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline"
      className={cn("relative space-y-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  Timeline Item                                                 */
/* ────────────────────────────────────────────────────────────── */

function TimelineItem({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-item"
      className={cn("relative flex gap-3 pb-8 last:pb-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  Timeline Dot                                                  */
/* ────────────────────────────────────────────────────────────── */

function TimelineDot({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof timelineDotVariants>) {
  return (
    <div
      data-slot="timeline-dot"
      className={cn(
        "flex flex-col items-center",
      )}
    >
      <div
        className={cn(timelineDotVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
      {/* Connector is rendered as part of the dot column */}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  Timeline Connector                                            */
/* ────────────────────────────────────────────────────────────── */

function TimelineConnector({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-connector"
      className={cn(
        "absolute left-[5px] top-3 h-[calc(100%-12px)] w-0.5 bg-border",
        className,
      )}
      {...props}
    />
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  Timeline Content                                              */
/* ────────────────────────────────────────────────────────────── */

function TimelineContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-content"
      className={cn("flex-1 pt-0 -mt-0.5", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineDotVariants,
};
