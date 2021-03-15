export interface JwtPayload {
    exp: number;
    user_name: string;
    authorities: string[];
    jti: string;
    cliente_id: string;
    scope: string[];
  }
  