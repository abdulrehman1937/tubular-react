import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { ColumnModel } from 'tubular-common';
import { ITbTableInstance } from 'tubular-react-common';
import { GridHeaderCell } from './GridHeaderCell';
import Checkbox from '@mui/material/Checkbox';
import { TbSelection } from '../utils/Selection';
import DetailComponentProps from '../BareBones/DetailComponentProps';

export interface GridHeaderProps {
    tbTableInstance: ITbTableInstance;
    detailComponent?: React.FunctionComponent<DetailComponentProps>;
    rowSelectionEnabled: boolean;
    selection?: TbSelection;
}

export const GridHeader: React.FunctionComponent<GridHeaderProps> = ({
    tbTableInstance,
    detailComponent,
    rowSelectionEnabled,
    selection,
}: GridHeaderProps) => {
    const { api, state } = tbTableInstance;

    return (
        <TableRow>
            {detailComponent && <TableCell key="Detail" padding="normal" />}
            {rowSelectionEnabled && (
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={selection.isIndeterminateSelection()}
                        checked={selection.getUnSelectedCount() === 0 && tbTableInstance.state.data.length > 0}
                        onChange={selection.toggleAllRowsSelection}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
            )}
            {state.columns
                .filter((col: ColumnModel) => col.visible)
                .map((column: ColumnModel) => (
                    <GridHeaderCell key={column.name} column={column} sortColumn={api.sortColumn} />
                ))}
        </TableRow>
    );
};
