"use client";

import * as React from "react";
import DOMPurify from "dompurify";

import { cn } from "@/lib/utils";
import { Text, type TextProps } from "./text";

export interface MarkupTextProps extends Omit<TextProps, "children"> {
  html: string;
}

function MarkupText({ html, className, ...props }: MarkupTextProps) {
  // We sanitize the HTML to prevent XSS vulnerabilities, 
  // ensuring we only allow basic styling tags.
  const cleanHtml = React.useMemo(
    () =>
      DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ["b", "i", "em", "strong", "a", "code", "br", "span"],
        ALLOWED_ATTR: ["href", "target", "rel", "class"],
      }),
    [html]
  );

  return (
    <Text
      {...props}
      className={cn(
        "[&_strong]:font-semibold [&_b]:font-semibold [&_em]:italic [&_i]:italic [&_code]:font-mono [&_code]:rounded [&_code]:bg-muted [&_code]:px-[0.3rem] [&_code]:py-[0.2rem] [&_code]:text-sm [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-primary",
        className
      )}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}

export { MarkupText };
