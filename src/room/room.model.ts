export interface RoomCategory {
  id?: any;
  categoryCode?: string;
  categoryName: string;
  categoryPrice: number;
  facilities?: string;
  description?: string;
}

export interface Room {
  id?: any;
  roomCode?: string;
  roomNumber: string;
  categoryPrice: number;
  categoryCode: string;
  description?: string;
  occupies: boolean;
  reserved: boolean;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}

export interface RoomReservation {
  roomCode?: string;
  reservationStart: Date;
  reservationEnd: Date;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}

export interface RoomSettings {
  checkOutTime: Date;
}

export interface RoomOcuppancy {
  roomCode?: string;
  occuoancyStart: Date;
  occuoancyEnd: Date;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}
