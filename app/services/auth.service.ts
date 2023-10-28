import IUserRole from "../types/role.type";
import IUser from "../types/user.type";
import api from "./api";
import TokenService from "./token.service";

interface ILogin {
  username: string;
  password: string;
}

const AuthService = {
  login: ({ username, password }: ILogin) => {
    return api
      .post(
        `/auth/login`,
        { username, password }
      )
  },

  logout: () => {
    TokenService.remove();
  },

  signup: (user: IUser) => {
    return api.post(
      `/auth/signup`,
      user
    )
  },

  getCurrentUser: () => {
    return TokenService.getUser();
  },

  isAdmin: () => {
    return TokenService.getUser()?.roles?.includes(IUserRole.ADMIN);
  },

  isManager: () => {
    return TokenService.getUser()?.roles?.includes(IUserRole.MANAGER);
  },
  isStaff: () => {
    return TokenService.getUser()?.roles?.includes(IUserRole.STAFF);
  },
}

export default AuthService;
