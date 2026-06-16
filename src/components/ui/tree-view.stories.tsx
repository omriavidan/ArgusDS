import type { Meta, StoryObj } from "@storybook/react";
import {
  FileIcon,
  FileJson,
  FileText,
  FolderIcon,
  ImageIcon,
  Settings,
  Code2,
} from "lucide-react";
import { TreeView, TreeItem } from "./tree-view";

const meta: Meta<typeof TreeView> = {
  title: "UI/TreeView",
  component: TreeView,
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const FileExplorer: Story = {
  render: () => (
    <div className="w-[300px] rounded-md border p-2">
      <TreeView>
        <TreeItem label="src" defaultExpanded>
          <TreeItem label="components" defaultExpanded>
            <TreeItem label="ui" defaultExpanded>
              <TreeItem
                label="button.tsx"
                icon={<Code2 className="size-4 text-blue-500" />}
              />
              <TreeItem
                label="input.tsx"
                icon={<Code2 className="size-4 text-blue-500" />}
              />
              <TreeItem
                label="dialog.tsx"
                icon={<Code2 className="size-4 text-blue-500" />}
              />
            </TreeItem>
            <TreeItem label="common">
              <TreeItem
                label="header.tsx"
                icon={<Code2 className="size-4 text-blue-500" />}
              />
            </TreeItem>
          </TreeItem>
          <TreeItem label="styles">
            <TreeItem
              label="globals.css"
              icon={<FileText className="size-4 text-purple-500" />}
            />
            <TreeItem
              label="theme.css"
              icon={<FileText className="size-4 text-purple-500" />}
            />
          </TreeItem>
          <TreeItem label="lib">
            <TreeItem
              label="utils.ts"
              icon={<Code2 className="size-4 text-blue-500" />}
            />
          </TreeItem>
        </TreeItem>
        <TreeItem
          label="package.json"
          icon={<FileJson className="size-4 text-green-500" />}
        />
        <TreeItem
          label="tsconfig.json"
          icon={<FileJson className="size-4 text-green-500" />}
        />
        <TreeItem
          label="README.md"
          icon={<FileText className="size-4 text-muted-foreground" />}
        />
      </TreeView>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="w-[300px] rounded-md border p-2">
      <TreeView>
        <TreeItem
          label="Documents"
          icon={<FolderIcon className="size-4 text-yellow-500" />}
        >
          <TreeItem
            label="Resume.pdf"
            icon={<FileText className="size-4 text-red-500" />}
          />
          <TreeItem
            label="Cover Letter.docx"
            icon={<FileText className="size-4 text-blue-500" />}
          />
        </TreeItem>
        <TreeItem
          label="Images"
          icon={<FolderIcon className="size-4 text-yellow-500" />}
        >
          <TreeItem
            label="photo.jpg"
            icon={<ImageIcon className="size-4 text-green-500" />}
          />
          <TreeItem
            label="screenshot.png"
            icon={<ImageIcon className="size-4 text-green-500" />}
          />
        </TreeItem>
        <TreeItem
          label="Settings"
          icon={<Settings className="size-4 text-muted-foreground" />}
        />
      </TreeView>
    </div>
  ),
};

export const DefaultExpanded: Story = {
  render: () => (
    <div className="w-[300px] rounded-md border p-2">
      <TreeView>
        <TreeItem label="Level 1" defaultExpanded>
          <TreeItem label="Level 2" defaultExpanded>
            <TreeItem label="Level 3" defaultExpanded>
              <TreeItem
                label="Deeply nested item"
                icon={<FileIcon className="size-4 text-muted-foreground" />}
              />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  ),
};

export const SingleLevel: Story = {
  render: () => (
    <div className="w-[300px] rounded-md border p-2">
      <TreeView>
        <TreeItem
          label="File A"
          icon={<FileIcon className="size-4 text-muted-foreground" />}
        />
        <TreeItem
          label="File B"
          icon={<FileIcon className="size-4 text-muted-foreground" />}
        />
        <TreeItem
          label="File C"
          icon={<FileIcon className="size-4 text-muted-foreground" />}
        />
      </TreeView>
    </div>
  ),
};
