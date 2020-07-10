export interface BillableItem {}

export interface Invoice {
  id?: any;
  invoiceCode?: string;
  itemName: string;
  total: number;
  discount: number;
  invoiceItems?: InvoiceItem[];
}

export interface InvoiceItem {
  invoiceCode: string;
  itemName: string;
  itemCode: string;
  unitPrice: number;
  quantity: number;
  discount?: number;
  totalPrice: number;
}

export interface Sale {
  saleCode?: string;
  invoiceCode?: string;
  saleDepartment?: string;
  itemName: string;
  total: number;
  discount: number;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}
