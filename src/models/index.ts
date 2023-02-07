
export type Column<T> = {
    title?: string;
    dataKey?: string;
    width?: number;
    render?: (value?: any, record?: T) => any;
}

export type StickyHeaderOptions = {
    top: number;
}