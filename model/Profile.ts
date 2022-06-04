import {Company} from "./Company";

export interface Profile {
    name:string,
    avatar:string,
}

export interface History{
    company: Company
    start: string,
    end: string
}
