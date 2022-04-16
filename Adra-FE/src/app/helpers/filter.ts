export function unique(items: number[]) {
    return [...new Set(items)];
}

export function last(items: any[]) {
    return [...items].pop();
}