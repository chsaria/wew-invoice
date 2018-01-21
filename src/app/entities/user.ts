/* Client-model for a user */

export interface User {
    _id: string;
    UserName: string;
    FullName: string;
    Password: string;
    IsAdmin: boolean;
}
