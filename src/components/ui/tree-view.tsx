"use client";

import * as React from "react";
import { ChevronRight, FolderIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

/* ────────────────────────────────────────────────────────────── */
/*  TreeView                                                      */
/* ────────────────────────────────────────────────────────────── */

function TreeView({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="tree-view"
      role="tree"
      className={cn("space-y-0.5", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  TreeItem                                                      */
/* ────────────────────────────────────────────────────────────── */

export interface TreeItemProps {
  label: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  children?: React.ReactNode;
  level?: number;
  className?: string;
}

function TreeItem({
  label,
  icon,
  defaultExpanded = false,
  children,
  level = 0,
  className,
}: TreeItemProps) {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  const hasChildren = React.Children.count(children) > 0;

  return (
    <div data-slot="tree-item" role="treeitem" aria-expanded={hasChildren ? expanded : undefined} className={className}>
      <Button
        type="button"
        variant="ghost"
        className={cn(
          "w-full justify-start gap-1.5 h-auto px-2 py-1 text-sm font-normal",
        )}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={() => hasChildren && setExpanded((e) => !e)}
      >
        {hasChildren ? (
          <ChevronRight
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
              expanded && "rotate-90",
            )}
          />
        ) : (
          <span className="size-4 shrink-0" />
        )}
        {icon ?? (hasChildren ? (
          <FolderIcon className="size-4 shrink-0 text-muted-foreground" />
        ) : null)}
        <span className="truncate">{label}</span>
      </Button>

      {hasChildren && expanded && (
        <div role="group" className="overflow-hidden">
          {React.Children.map(children, (child) => {
            if (React.isValidElement<TreeItemProps>(child)) {
              return React.cloneElement(child, {
                level: level + 1,
              });
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
}

export { TreeView, TreeItem };
