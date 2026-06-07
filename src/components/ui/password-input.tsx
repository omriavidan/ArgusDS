"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Button } from "./button";

export interface PasswordInputProps
  extends Omit<React.ComponentProps<"input">, "type"> {}

function PasswordInput({ className, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div data-slot="password-input" className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-10", className)}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 h-full w-9 px-3 py-2 hover:bg-transparent"
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <EyeOff className="size-4 text-muted-foreground" />
        ) : (
          <Eye className="size-4 text-muted-foreground" />
        )}
      </Button>
    </div>
  );
}

export { PasswordInput };
