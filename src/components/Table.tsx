import React, { FC, useCallback, useMemo } from "react"
import { Column, StickyHeaderOptions } from "../models";
import './table.css';

type Props = {
    columns: Column<any>[];
    data: any[];
    stickyHeader?: StickyHeaderOptions | boolean;
    className?: string;
    headerCellClassName?: string;
    cellClassName?: string;
    onRowClick?: (record: any, index: number) => void;
}

const Table: FC<Props> = ({ columns, data, stickyHeader, className = '', headerCellClassName = '', cellClassName = '', onRowClick }) => {

    const stickyStyle: any = {};
    if (typeof stickyHeader === 'object') {
        stickyStyle['top'] = (stickyHeader as StickyHeaderOptions).top + 'px';
    }

    const widthValue = useCallback((width?: string | number) => {
        if (!width) {
            return {}
        }
        if (typeof width === 'number') {
            return { width: `${width}px` }
        }
        return { width }
    }, []);

    const handleOnRowClick = (record: any, index: number) => {
        onRowClick?.(record, index);
    }

    return (
        <table className={`ez-table ${stickyHeader ? 'ez-table-sticky' : ''} ${className}`}>
            <thead>
                <tr>
                    {
                        columns.map((col, index) => (
                            <th
                                key={index}
                                className={`${headerCellClassName} ${col.headerCellClassName}`}
                                style={{ ...stickyStyle, ...widthValue(col.width) }}
                            >
                                {col.title}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((record, rowIndex) => (
                        <tr key={rowIndex} onClick={() => handleOnRowClick(record, rowIndex)}>
                            {
                                columns.map((col, index) => (
                                    <td key={index} className={`${cellClassName} ${col.cellClassName}`}>
                                        {!col.render && col.dataKey && record[col.dataKey]}
                                        {col.render && col.render(col.dataKey && record[col.dataKey], record, rowIndex)}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Table;