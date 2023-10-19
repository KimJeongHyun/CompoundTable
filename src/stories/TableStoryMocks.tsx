import React from "react";
import { TableProps } from "src/Table/Table.types";
import { Table2Cols, Table2Props } from "../Table2";

interface MockDataResponse {
  id: number;
  name: string;
  amount: number;
}

const default2Mocks: Table2Props<MockDataResponse> = {
  data: [
    { id: 1, name: "asdf", amount: 5000 },
    { id: 2, name: "qq", amount: 5000 },
    { id: 3, name: "efasd", amount: 5000 },
    { id: 4, name: "vsazxc", amount: 5000 },
    { id: 5, name: "asdfaz", amount: 5000 },
    { id: 6, name: "bbb", amount: 5000 },
    { id: 7, name: "qwe", amount: 5000 },
    { id: 8, name: "ssd", amount: 5000 },
    { id: 9, name: "ffgh", amount: 5000 },
    { id: 10, name: "jhg", amount: 5000 },
    { id: 11, name: "tes", amount: 5000 },
    { id: 12, name: "qwbsd", amount: 5000 },
  ],
  width: 600,
  height: 350,
  children: [
    <Table2Cols<MockDataResponse> dataKey={"id"} label={"순서"} />,
    <Table2Cols<MockDataResponse> dataKey={"name"} label={"이름"} />,
    <Table2Cols<MockDataResponse> dataKey={"amount"} label={"가격"}>
      {(data) => <>{data.toLocaleString()}</>}
    </Table2Cols>,
  ],
  isHeadSticky: true,
};

const defaultMocks: TableProps<MockDataResponse> = {
  data: [
    { id: 1, name: "asdf", amount: 5000 },
    { id: 2, name: "qq", amount: 5000 },
    { id: 3, name: "efasd", amount: 5000 },
    { id: 4, name: "vsazxc", amount: 5000 },
    { id: 5, name: "asdfaz", amount: 5000 },
    { id: 6, name: "bbb", amount: 5000 },
    { id: 7, name: "qwe", amount: 5000 },
    { id: 8, name: "ssd", amount: 5000 },
    { id: 9, name: "ffgh", amount: 5000 },
    { id: 10, name: "jhg", amount: 5000 },
    { id: 11, name: "tes", amount: 5000 },
    { id: 12, name: "qwbsd", amount: 5000 },
  ],
  accessor: [
    {
      label: "순서",
      value: "id",
    },
    {
      label: "이름",
      value: "name",
    },
    {
      label: "금액",
      value: "amount",
      align: "end",
    },
  ],
  width: 600,
  isToggle: true,
};

const sortDescMocks = {
  ...defaultMocks,
  sort: {
    value: "id",
    order: "DESC",
  },
};

const sortAscMocks = {
  ...defaultMocks,
  sort: {
    value: "id",
    order: "ASC",
  },
};

const widthErrorMocks = {
  ...defaultMocks,
  accessor: [
    {
      label: "순서",
      value: "id",
      width: 20,
    },
    {
      label: "이름",
      value: "name",
      width: 100, // width should be 100 in total...
    },
    {
      label: "금액",
      value: "amount",
      align: "end",
    },
  ],
};

export {
  defaultMocks,
  default2Mocks,
  sortAscMocks,
  sortDescMocks,
  widthErrorMocks,
};
