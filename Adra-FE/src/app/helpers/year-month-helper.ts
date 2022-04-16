import { YearMonth } from "../models";

export function monthsByYear(yearMonths: YearMonth[], year: number): number[] {
    return [...new Set(yearMonths.filter(x => x.year === year).map(y => y.month))];
} 