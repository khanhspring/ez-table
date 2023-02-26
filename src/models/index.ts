
export type Column<T> = {
    title?: string;
    dataKey?: string;
    width?: number | string;
    render?: (value: any, record: T, index: number) => React.ReactNode;
    cellClassName?: string;
    headerCellClassName?: string;
}

export type StickyHeaderOptions = {
    top: number;
}