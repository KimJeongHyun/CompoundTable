import React from "react";
import { AbstractItemType, TableForm } from "../Table2";
import { Meta, StoryObj } from "@storybook/react";

import { Table2Props } from "../Table2";
import { default2Mocks } from "./TableStoryMocks";
const Default = <T extends AbstractItemType>(storyProps: Table2Props<T>) => {
  return <TableForm {...storyProps} />;
};

const meta = {
  title: "Compound-Table_Concern_Col",
  component: Default,
} satisfies Meta<typeof React.Component<Table2Props<AbstractItemType>>>;

export type Story = StoryObj<typeof meta>;

export const defaultComoundTable: Story = {
  args: default2Mocks,
};

export default meta;
