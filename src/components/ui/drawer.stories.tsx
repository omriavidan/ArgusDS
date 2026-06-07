import type { Meta, StoryObj } from "@storybook/react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer";
import { Button } from "./button";

const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Satellite Details</DrawerTitle>
            <DrawerDescription>
              View and manage satellite pass information.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Satellite: LANDSAT-8</p>
              <p>Status: Active</p>
              <p>Next Pass: 14:30 UTC</p>
            </div>
          </div>
          <DrawerFooter>
            <Button>Track Pass</Button>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};
