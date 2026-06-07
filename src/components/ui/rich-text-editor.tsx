"use client";

import * as React from "react";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Heading1,
  Heading2,
  Heading3,
  Minus,
  Code2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Toggle } from "./toggle";
import { Separator } from "./separator";

interface ToolbarProps {
  editor: Editor | null;
}

function RichTextEditorToolbar({ editor }: ToolbarProps) {
  if (!editor) return null;

  const toolbarGroups = [
    [
      {
        icon: Heading1,
        label: "Heading 1",
        action: () =>
          editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: editor.isActive("heading", { level: 1 }),
      },
      {
        icon: Heading2,
        label: "Heading 2",
        action: () =>
          editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: editor.isActive("heading", { level: 2 }),
      },
      {
        icon: Heading3,
        label: "Heading 3",
        action: () =>
          editor.chain().focus().toggleHeading({ level: 3 }).run(),
        isActive: editor.isActive("heading", { level: 3 }),
      },
    ],
    [
      {
        icon: Bold,
        label: "Bold",
        action: () => editor.chain().focus().toggleBold().run(),
        isActive: editor.isActive("bold"),
      },
      {
        icon: Italic,
        label: "Italic",
        action: () => editor.chain().focus().toggleItalic().run(),
        isActive: editor.isActive("italic"),
      },
      {
        icon: Strikethrough,
        label: "Strikethrough",
        action: () => editor.chain().focus().toggleStrike().run(),
        isActive: editor.isActive("strike"),
      },
      {
        icon: Code,
        label: "Inline Code",
        action: () => editor.chain().focus().toggleCode().run(),
        isActive: editor.isActive("code"),
      },
    ],
    [
      {
        icon: List,
        label: "Bullet List",
        action: () => editor.chain().focus().toggleBulletList().run(),
        isActive: editor.isActive("bulletList"),
      },
      {
        icon: ListOrdered,
        label: "Ordered List",
        action: () => editor.chain().focus().toggleOrderedList().run(),
        isActive: editor.isActive("orderedList"),
      },
      {
        icon: Quote,
        label: "Blockquote",
        action: () => editor.chain().focus().toggleBlockquote().run(),
        isActive: editor.isActive("blockquote"),
      },
      {
        icon: Code2,
        label: "Code Block",
        action: () => editor.chain().focus().toggleCodeBlock().run(),
        isActive: editor.isActive("codeBlock"),
      },
      {
        icon: Minus,
        label: "Horizontal Rule",
        action: () => editor.chain().focus().setHorizontalRule().run(),
        isActive: false,
      },
    ],
    [
      {
        icon: Undo,
        label: "Undo",
        action: () => editor.chain().focus().undo().run(),
        isActive: false,
        disabled: !editor.can().undo(),
      },
      {
        icon: Redo,
        label: "Redo",
        action: () => editor.chain().focus().redo().run(),
        isActive: false,
        disabled: !editor.can().redo(),
      },
    ],
  ];

  return (
    <div
      data-slot="rich-text-editor-toolbar"
      className="flex flex-wrap items-center gap-1 border-b px-2 py-1"
    >
      {toolbarGroups.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          {groupIndex > 0 && (
            <Separator orientation="vertical" className="mx-1 h-6" />
          )}
          {group.map((item) => (
            <Toggle
              key={item.label}
              size="sm"
              pressed={item.isActive}
              onPressedChange={() => item.action()}
              disabled={"disabled" in item ? item.disabled : false}
              aria-label={item.label}
              className="size-8 p-0"
            >
              <item.icon className="size-4" />
            </Toggle>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  Editor                                                        */
/* ────────────────────────────────────────────────────────────── */

export interface RichTextEditorProps {
  content?: string;
  onContentChange?: (html: string) => void;
  placeholder?: string;
  editable?: boolean;
  className?: string;
}

function RichTextEditor({
  content = "",
  onContentChange,
  placeholder = "Start writing…",
  editable = true,
  className,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    editable,
    onUpdate: ({ editor: e }) => {
      onContentChange?.(e.getHTML());
    },
    editorProps: {
      attributes: {
        class: cn(
          "prose prose-sm dark:prose-invert max-w-none px-4 py-3 min-h-[150px] outline-none",
          "[&_.tiptap.ProseMirror-focused]:outline-none",
          "[&_p.is-editor-empty:first-child::before]:text-muted-foreground [&_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)] [&_p.is-editor-empty:first-child::before]:float-left [&_p.is-editor-empty:first-child::before]:h-0 [&_p.is-editor-empty:first-child::before]:pointer-events-none",
        ),
      },
    },
  });

  return (
    <div
      data-slot="rich-text-editor"
      className={cn(
        "rounded-md border bg-background transition-shadow focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
        !editable && "opacity-50 pointer-events-none",
        className,
      )}
    >
      {editable && <RichTextEditorToolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}

export { RichTextEditor, RichTextEditorToolbar };
