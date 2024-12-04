export interface ReturnModel<T>{
    isValid: boolean,
    Message: string, 
    Value: T,
}

export interface TokenReturnModel{
    token: string,
    refreshToken: string
}

export interface GeneralReturnModel{
    isValid: boolean,
    message: string
}