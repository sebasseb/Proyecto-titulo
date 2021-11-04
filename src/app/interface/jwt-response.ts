export interface JwtResponseI {
  dataUser: {
    id: number;
    rut: string;
    passwd: string;
    token: string;
    expiresIn: string;
  }
}
