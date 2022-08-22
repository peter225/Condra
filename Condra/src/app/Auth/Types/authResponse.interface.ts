import { CurrentUserInterface } from "./current-user.interface";

export interface AuthResponseInterface {
    user: {name: string, token: string}
}