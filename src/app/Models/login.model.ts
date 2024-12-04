export interface LoginRequest{
    Username: string;
    Password: string;
}

export interface RegisterRequest{
    Username: string;
    Password: string;
}

export interface RefreshTokenRequest{
    RefreshToken: string;
}

export interface RecoverPassword{
    Id: number;
    Password: string;
}