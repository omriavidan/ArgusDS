import type { Meta, StoryObj } from "@storybook/react";
import {
  GitCommit,
  GitPullRequest,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "./timeline";
import { Text } from "./text";

const meta: Meta<typeof Timeline> = {
  title: "UI/Timeline",
  component: Timeline,
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: () => (
    <Timeline className="max-w-md">
      <TimelineItem>
        <TimelineDot />
        <TimelineConnector />
        <TimelineContent>
          <Text variant="small">Project created</Text>
          <Text variant="muted" className="text-xs">2 hours ago</Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot />
        <TimelineConnector />
        <TimelineContent>
          <Text variant="small">Initial commit pushed</Text>
          <Text variant="muted" className="text-xs">1 hour ago</Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot />
        <TimelineContent>
          <Text variant="small">Deployed to staging</Text>
          <Text variant="muted" className="text-xs">30 minutes ago</Text>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Timeline className="max-w-md">
      <TimelineItem>
        <TimelineDot variant="info" className="size-6">
          <GitCommit className="size-3 text-white" />
        </TimelineDot>
        <TimelineConnector className="left-[11px]" />
        <TimelineContent>
          <Text variant="small">Commit abc1234</Text>
          <Text variant="muted" className="text-xs">
            feat: add authentication module
          </Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot variant="success" className="size-6">
          <GitPullRequest className="size-3 text-white" />
        </TimelineDot>
        <TimelineConnector className="left-[11px]" />
        <TimelineContent>
          <Text variant="small">PR #42 merged</Text>
          <Text variant="muted" className="text-xs">
            Add user authentication flow
          </Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot variant="default" className="size-6">
          <CheckCircle2 className="size-3 text-white" />
        </TimelineDot>
        <TimelineContent>
          <Text variant="small">Deployed to production</Text>
          <Text variant="muted" className="text-xs">v1.2.0</Text>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

export const WithVariants: Story = {
  render: () => (
    <Timeline className="max-w-md">
      <TimelineItem>
        <TimelineDot variant="success" />
        <TimelineConnector />
        <TimelineContent>
          <Text variant="small">Build succeeded</Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot variant="warning" />
        <TimelineConnector />
        <TimelineContent>
          <Text variant="small">3 warnings detected</Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot variant="destructive" />
        <TimelineConnector />
        <TimelineContent>
          <Text variant="small">Deployment failed</Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot variant="info" />
        <TimelineConnector />
        <TimelineContent>
          <Text variant="small">Rollback initiated</Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot variant="outline" />
        <TimelineContent>
          <Text variant="small">Investigating…</Text>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

export const ActivityFeed: Story = {
  render: () => (
    <Timeline className="max-w-lg">
      <TimelineItem>
        <TimelineDot variant="default" />
        <TimelineConnector />
        <TimelineContent>
          <div className="flex items-center justify-between">
            <Text variant="small">Alice commented</Text>
            <Text variant="muted" className="text-xs">5m ago</Text>
          </div>
          <div className="mt-1 rounded-md border bg-muted/30 p-3 text-sm">
            Looks great! Let's ship it. 🚀
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot variant="success" />
        <TimelineConnector />
        <TimelineContent>
          <div className="flex items-center justify-between">
            <Text variant="small">Bob approved the PR</Text>
            <Text variant="muted" className="text-xs">12m ago</Text>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot variant="info" />
        <TimelineContent>
          <div className="flex items-center justify-between">
            <Text variant="small">Carol requested review</Text>
            <Text variant="muted" className="text-xs">1h ago</Text>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};
