"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const stepDotVariants = cva(
  "relative z-10 flex items-center justify-center rounded-full border-2 transition-colors",
  {
    variants: {
      state: {
        completed: "border-primary bg-primary text-primary-foreground",
        active: "border-primary bg-background",
        upcoming: "border-muted-foreground/30 bg-background",
      },
      size: {
        default: "size-8",
        sm: "size-6",
      },
    },
    defaultVariants: {
      state: "upcoming",
      size: "default",
    },
  },
);

/* ────────────────────────────────────────────────────────────── */
/*  Types                                                        */
/* ────────────────────────────────────────────────────────────── */

export interface Step {
  label: string;
  description?: string;
}

export interface StepperProps {
  steps: Step[];
  currentStep: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                    */
/* ────────────────────────────────────────────────────────────── */

function Stepper({
  steps,
  currentStep,
  orientation = "horizontal",
  className,
}: StepperProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      data-slot="stepper"
      className={cn(
        "flex",
        isHorizontal ? "flex-row items-start" : "flex-col",
        className,
      )}
    >
      {steps.map((step, index) => {
        const state =
          index < currentStep
            ? "completed"
            : index === currentStep
              ? "active"
              : "upcoming";

        const isLast = index === steps.length - 1;

        return (
          <div
            key={index}
            data-slot="stepper-step"
            className={cn(
              "flex",
              isHorizontal
                ? "flex-1 flex-col items-center"
                : "flex-row items-start gap-3",
            )}
          >
            {/* Dot + connector */}
            <div
              className={cn(
                "flex items-center",
                isHorizontal ? "w-full" : "flex-col",
              )}
            >
              {/* Left connector (horizontal) */}
              {isHorizontal && index > 0 && (
                <div
                  data-slot="stepper-connector"
                  className={cn(
                    "h-0.5 flex-1 transition-colors",
                    index <= currentStep
                      ? "bg-primary"
                      : "bg-muted-foreground/20",
                  )}
                />
              )}

              {/* Dot */}
              <div className={cn(stepDotVariants({ state }))}>
                {state === "completed" ? (
                  <Check className="size-4" />
                ) : state === "active" ? (
                  <div className="size-2.5 rounded-full bg-primary" />
                ) : (
                  <div className="size-2.5 rounded-full bg-muted-foreground/30" />
                )}
              </div>

              {/* Right connector (horizontal) */}
              {isHorizontal && !isLast && (
                <div
                  data-slot="stepper-connector"
                  className={cn(
                    "h-0.5 flex-1 transition-colors",
                    index < currentStep
                      ? "bg-primary"
                      : "bg-muted-foreground/20",
                  )}
                />
              )}

              {/* Bottom connector (vertical) */}
              {!isHorizontal && !isLast && (
                <div
                  data-slot="stepper-connector"
                  className={cn(
                    "mt-1 w-0.5 flex-1 min-h-8 transition-colors",
                    index < currentStep
                      ? "bg-primary"
                      : "bg-muted-foreground/20",
                  )}
                />
              )}
            </div>

            {/* Label + description */}
            <div
              className={cn(
                isHorizontal ? "mt-2 text-center" : "pb-8",
                isLast && !isHorizontal && "pb-0",
              )}
            >
              <p
                className={cn(
                  "text-sm font-medium",
                  state === "upcoming" && "text-muted-foreground",
                )}
              >
                {step.label}
              </p>
              {step.description && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { Stepper, stepDotVariants };
