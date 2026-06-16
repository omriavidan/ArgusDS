import type { Meta, StoryObj } from "@storybook/react";
import { MarkupText } from "./markup-text";

const meta: Meta<typeof MarkupText> = {
  title: "UI/MarkupText",
  component: MarkupText,
  argTypes: {
    html: { control: "text" },
    variant: {
      control: "select",
      options: [
        "default",
        "p",
        "lead",
        "small",
        "muted",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MarkupText>;

export const Default: Story = {
  args: {
    variant: "p",
    html: "This is some <strong>bold</strong> text, some <em>italic</em> text, and a <a href='#'>link</a>.",
  },
};

export const Formatting: Story = {
  render: () => (
    <div className="space-y-4 max-w-xl">
      <MarkupText 
        variant="p" 
        html="We support <b>bold (b)</b>, <strong>strong</strong>, <i>italic (i)</i>, and <em>em</em> tags." 
      />
      <MarkupText 
        variant="p" 
        html="We also support inline <code>code blocks</code> and <a href='https://example.com' target='_blank'>hyperlinks</a>." 
      />
      <MarkupText 
        variant="p" 
        html="And of course,<br/>line breaks work too." 
      />
    </div>
  ),
};

export const Sanitization: Story = {
  render: () => (
    <div className="space-y-4 max-w-xl">
      <MarkupText 
        variant="p" 
        html="This text tries to run a script: <script>alert('xss')</script> but it is safely stripped out by DOMPurify." 
      />
      <MarkupText 
        variant="p" 
        html="This text tries to include an image with an onerror handler: <img src='x' onerror='alert(1)' /> but it is also stripped." 
      />
    </div>
  ),
};
