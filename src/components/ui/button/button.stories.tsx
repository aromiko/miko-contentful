import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: [
        "default",
        "outline",
        "destructive",
        "secondary",
        "ghost",
        "link",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "default",
    size: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Click me",
    variant: "secondary",
    size: "default",
  },
};

export const Outline: Story = {
  args: {
    children: "Click me",
    variant: "outline",
    size: "default",
  },
};
