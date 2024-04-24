import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";

import { Text } from "../text/text";
import ColorSquares from "./colors";

const meta: Meta = {
  title: "UI/Colors",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

interface CssVariables {
  [key: string]: string;
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ColorSquares />,
};
