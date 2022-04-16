import { Balance } from "./balance";

export interface Report {
    year: number;
    month: number;
    balances: Balance[];
}