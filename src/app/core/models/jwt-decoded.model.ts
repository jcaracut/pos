export interface IJWTDecoded {
    nameid: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unique_name: string;
    role: string[];
    nbf: number;
    exp: number;
    iat: number;
    iss: string;
    aud: string;
}
