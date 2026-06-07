import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
        "blockquote",
        "code",
        "lead",
        "large",
        "small",
        "muted",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const H1: Story = {
  args: {
    variant: "h1",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const H2: Story = {
  args: {
    variant: "h2",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const H3: Story = {
  args: {
    variant: "h3",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const H4: Story = {
  args: {
    variant: "h4",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const Paragraph: Story = {
  args: {
    variant: "p",
    children:
      "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",
  },
};

export const Blockquote: Story = {
  args: {
    variant: "blockquote",
    children:
      "After all, he said, everyone enjoys a good joke, so it's only fair that they should pay for the privilege.",
  },
};

export const Code: Story = {
  args: {
    variant: "code",
    children: "@radix-ui/react-alert-dialog",
  },
};

export const Lead: Story = {
  args: {
    variant: "lead",
    children:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
};

export const Large: Story = {
  args: {
    variant: "large",
    children: "Are you absolutely sure?",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    children: "Email address",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Enter your email address.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Text variant="muted" className="mb-2">h1</Text>
        <Text variant="h1">Taxing Laughter</Text>
      </div>
      <div>
        <Text variant="muted" className="mb-2">h2</Text>
        <Text variant="h2">The People of the Kingdom</Text>
      </div>
      <div>
        <Text variant="muted" className="mb-2">h3</Text>
        <Text variant="h3">The Joke Tax</Text>
      </div>
      <div>
        <Text variant="muted" className="mb-2">h4</Text>
        <Text variant="h4">People stopped telling jokes</Text>
      </div>
      <div>
        <Text variant="muted" className="mb-2">p</Text>
        <Text variant="p">
          The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
        </Text>
      </div>
      <div>
        <Text variant="muted" className="mb-2">blockquote</Text>
        <Text variant="blockquote">
          "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
        </Text>
      </div>
      <div>
        <Text variant="muted" className="mb-2">lead</Text>
        <Text variant="lead">
          A modal dialog that interrupts the user with important content and expects a response.
        </Text>
      </div>
      <div>
        <Text variant="muted" className="mb-2">large</Text>
        <Text variant="large">Are you absolutely sure?</Text>
      </div>
      <div>
        <Text variant="muted" className="mb-2">small</Text>
        <Text variant="small">Email address</Text>
      </div>
      <div>
        <Text variant="muted" className="mb-2">muted</Text>
        <Text variant="muted">Enter your email address.</Text>
      </div>
    </div>
  ),
};
