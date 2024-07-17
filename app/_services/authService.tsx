import { jwtDecode } from 'jwt-decode';

var token: string | null = '';
var decodedToken: { email: string; roles: string[]; userId: string } = {
  email: '',
  roles: [],
  userId: '',
};

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');

  if (token !== null && token !== undefined)
    decodedToken = jwtDecode(token as string);
}

export const checkRole = (role: string) => {
  if (decodedToken!.roles.includes(role.toLowerCase())) {
    return true;
  }
  return false;
};
