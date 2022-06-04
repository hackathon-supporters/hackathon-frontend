import {History} from "./History";

export interface Profile {
    id: string,
    name:string,
    avatar:string,
    histories: History[]
}
