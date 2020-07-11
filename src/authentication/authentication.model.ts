import { User } from '../user/user.model';

export enum AccountType {
  SUPER_ADMINISTRATOR = 'SUPER ADMINISTRATOR',
  ADMINISTRATOR = 'ADMINISTRATOR',
  REVIEWER = 'REVIEWER',
  SALES = 'SALES',
}

export interface AuthenticationProfile {
  id?: number;
  userCode: string;
  emailAddress: string;
  password?: string;
  accountType: string;
  activationToken?: string;
  tokenExpiry?: Date;
  active: boolean;
  createdBy?: string;
  updatedBy?: string;
  createdDate?: Date;
  updatedDate?: Date;
}

export interface LoginRequest {
  emailAddress: string;
  password: string;
}

export interface PasswordCreationRequest {
  token: string;
  password: string;
}

export interface AuthenticationState {
  user?: User;
  token?: string;
  loggedIn: boolean;
}
