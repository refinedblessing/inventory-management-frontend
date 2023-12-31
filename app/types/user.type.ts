import IUserRole from "./userRole.type";
import IStore from "./store.type";

export default interface IUser {
  id?: number;
  email: string;
  firstName: string;
  username: string;
  lastName: string;
  admin?: boolean;
  password?: string;
  roles?: IUserRole[];
  stores?: IStore[];
}
