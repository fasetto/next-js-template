import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    appearance: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    appearance: "secondary",
    children: "Button",
  },
};
