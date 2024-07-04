export interface LoginI {
    email: string;
    password: string;
    isApiError: boolean;
}

export interface RegisterI extends LoginI {
    username: string;
}