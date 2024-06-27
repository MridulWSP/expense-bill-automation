import { Table, TableProps } from "antd";
import { MinimalTableData } from "../../utils/interfaces";
import { InvoiceDataContainerStyles } from "./InvoiceDataContainerStyles.css";

type InvoiceDataContainerProps = {
  invoicesData: any;
};

export const InvoiceDataContainer = (props: InvoiceDataContainerProps) => {
  const columns: TableProps<MinimalTableData>["columns"] = [
    {
      title: "Vendor Name",
      dataIndex: "VENDOR_NAME",
      key: "VENDOR_NAME",
    },
    {
      title: "Receiver Name",
      dataIndex: "RECEIVER_NAME",
      key: "RECEIVER_NAME",
    },
    {
      title: "Order Date",
      dataIndex: "ORDER_DATE",
      key: "ORDER_DATE",
    },
    {
      title: "Amount Paid",
      dataIndex: "AMOUNT_PAID",
      key: "AMOUNT_PAID",
    },
    {
      title: "Vendor Phone",
      dataIndex: "VENDOR_PHONE",
      key: "VENDOR_PHONE",
    },
  ];

  const data: MinimalTableData[] = [];

  props.invoicesData.data.ExpenseDocuments.forEach(
    (expenseDocument: any, index: any) => {
      const minimalTableDataObject: MinimalTableData = {
        key: index,
        AMOUNT_PAID: "",
        ORDER_DATE: "",
        RECEIVER_NAME: "",
        VENDOR_NAME: "",
        VENDOR_PHONE: "",
      };
      expenseDocument.SummaryFields.forEach((summaryField: any) => {
        if (minimalTableDataObject.hasOwnProperty(summaryField.Type.Text)) {
          minimalTableDataObject[summaryField.Type.Text] =
            summaryField.ValueDetection.Text;
        }
      });
      data.push(minimalTableDataObject);
    }
  );
  return (
    <Table
      columns={columns}
      dataSource={data}
      style={InvoiceDataContainerStyles.invoiceDataMinimalTable}
    />
  );
};
