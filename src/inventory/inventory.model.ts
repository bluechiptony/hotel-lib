export enum SaleDepartment {
  FRONT_DESK = 'FRONT DESK',
  KITCHEN = 'KITCHEN',
  LAUNDRY = 'LAUNDRY',
}

export interface SaleItem {
  id?: any;
  itemCode?: string;
  itemName: string;
  itemDepartment: string;
  costPrice?: number;
  unitSellingPrice?: number;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}

export interface ItemStock {
  id?: any;
  itemCode: string;
  quantity: number;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}
