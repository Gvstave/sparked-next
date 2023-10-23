import { Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TschoolTableView } from "./types";

export const schoolTableColumns: ColumnsType<TschoolTableView> = [
  {
    title: "#",
    dataIndex: "index",
    key: "index",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Create By",
    dataIndex: "created_by",
    key: "created_by",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Create At",
    dataIndex: "created_at",
    key: "created_by",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <>
        <Space size="middle">
          <a className={"table-action-item"}>{`Edit `}</a>
        </Space>
        <Space size="middle">
          <a>{` Delete`}</a>
        </Space>
      </>
    ),
  },
];
