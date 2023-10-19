import React from "react";
import { AbstractItemType, TableForm } from "../ColTable";
import { Meta, StoryObj } from "@storybook/react";

import { ColTableProps } from "../ColTable";
import { default2Mocks } from "./TableStoryMocks";
const Default = <T extends AbstractItemType>(storyProps: ColTableProps<T>) => {
  return <TableForm {...storyProps} />;
};

const meta = {
  title: "Compound-Table_Concern_Col",
  component: Default,
} satisfies Meta<typeof React.Component<ColTableProps<AbstractItemType>>>;

export type Story = StoryObj<typeof meta>;

export const defaultComoundTable: Story = {
  args: default2Mocks,
};

export default meta;
