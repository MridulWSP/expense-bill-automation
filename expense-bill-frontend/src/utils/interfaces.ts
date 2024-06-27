import { CSSProperties } from "react";

export interface CSSInterface {
  [key: string]: CSSProperties;
}

export interface MinimalTableData {
  key: number;
  [key: string]: any;
  VENDOR_NAME?: string;
  RECEIVER_NAME?: string;
  ORDER_DATE?: string;
  AMOUNT_PAID?: string;
  VENDOR_PHONE?: string;
}
