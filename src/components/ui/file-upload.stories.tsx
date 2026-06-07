import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./file-upload";

const meta: Meta<typeof FileUpload> = {
  title: "UI/FileUpload",
  component: FileUpload,
  argTypes: {
    accept: { control: "text" },
    multiple: { control: "boolean" },
    maxSizeMB: { control: "number" },
    disabled: { control: "boolean" },
  },
  args: {
    multiple: true,
    maxSizeMB: 10,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[420px]">
      <FileUpload
        {...args}
        onFilesSelected={(files) => console.log("Files:", files)}
      />
    </div>
  ),
};

export const AcceptImagesOnly: Story = {
  render: () => (
    <div className="w-[420px]">
      <FileUpload
        accept="image/*"
        onFilesSelected={(files) => console.log("Images:", files)}
      />
    </div>
  ),
};

export const SingleFile: Story = {
  render: () => (
    <div className="w-[420px]">
      <FileUpload
        multiple={false}
        onFilesSelected={(files) => console.log("File:", files)}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[420px]">
      <FileUpload disabled />
    </div>
  ),
};
