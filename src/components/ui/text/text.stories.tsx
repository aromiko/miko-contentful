import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["h1", "h2", "h3", "h4", "lead", "p", "blockquote"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    as: "h1",
    variant: "h1",
    children: "Hello, world!",
  },
};

export const Heading2: Story = {
  args: {
    as: "h2",
    variant: "h2",
    children: "Hello, world!",
  },
};

export const Heading3: Story = {
  args: {
    as: "h3",
    variant: "h3",
    children: "Hello, world!",
  },
};

export const Heading4: Story = {
  args: {
    as: "h4",
    variant: "h4",
    children: "Hello, world!",
  },
};

export const Lead: Story = {
  args: {
    as: "p",
    variant: "lead",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati recusandae porro iusto sint, illo repudiandae dolorem sapiente at dolore tempore esse possimus tempora voluptate, impedit cum odit ratione ad soluta!",
  },
};

export const Paragraph: Story = {
  args: {
    as: "p",
    variant: "p",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati recusandae porro iusto sint, illo repudiandae dolorem sapiente at dolore tempore esse possimus tempora voluptate, impedit cum odit ratione ad soluta!",
  },
};

export const Blockquote: Story = {
  args: {
    as: "blockquote",
    variant: "blockquote",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati recusandae porro iusto sint, illo repudiandae dolorem sapiente at dolore tempore esse possimus tempora voluptate, impedit cum odit ratione ad soluta!",
  },
};

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati recusandae porro iusto sint, illo repudiandae dolorem sapiente at dolore tempore esse possimus tempora voluptate, impedit cum odit ratione ad soluta!",
  },
};
