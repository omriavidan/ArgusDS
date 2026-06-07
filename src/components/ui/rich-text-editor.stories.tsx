import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RichTextEditor } from "./rich-text-editor";

const meta: Meta<typeof RichTextEditor> = {
  title: "UI/RichTextEditor",
  component: RichTextEditor,
  argTypes: {
    placeholder: { control: "text" },
    editable: { control: "boolean" },
  },
  args: {
    placeholder: "Start writing…",
    editable: true,
  },
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = {
  render: (args) => {
    const [content, setContent] = useState("");
    return (
      <div className="w-[600px]">
        <RichTextEditor
          {...args}
          content={content}
          onContentChange={setContent}
        />
      </div>
    );
  },
};

const sampleContent = `
<h2>Welcome to the Editor</h2>
<p>This is a <strong>rich text editor</strong> built with <em>Tiptap</em> and the Argus Design System.</p>
<ul>
  <li>Supports <strong>bold</strong>, <em>italic</em>, and <s>strikethrough</s></li>
  <li>Inline <code>code</code> formatting</li>
  <li>Bullet and numbered lists</li>
</ul>
<blockquote>
  <p>Blockquotes are supported too.</p>
</blockquote>
<p>And even code blocks:</p>
<pre><code>const greeting = "Hello, world!";
console.log(greeting);</code></pre>
`;

export const WithContent: Story = {
  render: () => {
    const [content, setContent] = useState(sampleContent);
    return (
      <div className="w-[600px]">
        <RichTextEditor content={content} onContentChange={setContent} />
      </div>
    );
  },
};

export const ReadOnly: Story = {
  render: () => (
    <div className="w-[600px]">
      <RichTextEditor content={sampleContent} editable={false} />
    </div>
  ),
};

export const WithOutputPreview: Story = {
  render: () => {
    const [content, setContent] = useState("");
    return (
      <div className="w-[600px] space-y-4">
        <RichTextEditor
          content={content}
          onContentChange={setContent}
          placeholder="Type something to see the HTML output below…"
        />
        <div className="rounded-md border bg-muted/30 p-4">
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            HTML Output:
          </p>
          <pre className="whitespace-pre-wrap text-xs text-foreground">
            {content || "<p></p>"}
          </pre>
        </div>
      </div>
    );
  },
};
