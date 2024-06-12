import { fn } from "@storybook/test";
import { Cube } from "../src/components/Cube";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Cube",
  tags: ["autodocs"],
  render: (args) => Cube(args),
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["top", "bottom", "front", "right", "left"],
    },
  },
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    isOpen: false,
    orientation: "top",
  },
};
