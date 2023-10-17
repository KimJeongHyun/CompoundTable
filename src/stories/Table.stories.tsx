import React from "react";
import { Table } from "../Table";
import { Meta, StoryObj } from "@storybook/react";

import { AbstractItemType, TableProps } from "../Table/Table.types";
import {
  defaultMocks,
  sortDescMocks,
  sortAscMocks,
  widthErrorMocks,
} from "./TableStoryMocks";

const Default = <T extends AbstractItemType>(storyProps: TableProps<T>) => {
  return <Table {...storyProps} />;
};

const meta = {
  title: "Compound-Table",
  component: Default,
} satisfies Meta<typeof Table>;

export type Story = StoryObj<typeof meta>;

export const defaultCompoundTable: Story = {
  args: { ...defaultMocks },
};

export const sortDescByIdTable: Story = {
  args: { ...sortDescMocks },
};

export const sortAscByIdTable: Story = {
  args: { ...sortAscMocks },
};

export const widthErrorTable: Story = {
  args: { ...widthErrorMocks },
};

export default meta;
