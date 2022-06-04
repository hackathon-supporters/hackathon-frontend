import {Company} from "./Company";

export interface History{
    position:string,
    company: Company
    startYear: number,
    startMonth: number,
    endYear: number,
    endMonth: number,
}
