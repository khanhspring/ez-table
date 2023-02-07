import React, { FC } from "react"
import { Column, StickyHeaderOptions } from "../models";
import './table.css';

type Props = {
    columns: Column<never>[];
    data: any[];
    stickyHeader?: StickyHeaderOptions | boolean;
    className?: string;
    headerCellClassName?: string;
    cellClassName?: string;
}

const Table: FC<Props> = ({ columns, data, stickyHeader, className = '', headerCellClassName = '', cellClassName = '' }) => {

    const stickyStyle: any = {}
    if (typeof stickyHeader === 'object') {
        stickyStyle['top'] = (stickyHeader as StickyHeaderOptions).top + 'px';
    }

    return (
        <table className={`ez-table ${stickyHeader ? 'ez-table-sticky' : ''} ${className}`}>
            <thead>
                <tr>
                    {
                        columns.map((col, index) => (
                            <th
                                key={index}
                                className={headerCellClassName}
                                style={{ ...stickyStyle }}
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
                        <tr key={rowIndex}>
                            {
                                columns.map((col, index) => (
                                    <td key={index} className={cellClassName}>
                                        {!col.render && col.dataKey && record[col.dataKey]}
                                        {col.render && col.render(col.dataKey && record[col.dataKey], record)}
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