import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Warning from '@mui/icons-material/Warning';
import * as React from 'react';
import { ColumnModel } from 'tubular-common';
import Lang from '../utils/Lang';

export interface NoDataRowProps {
    columns: ColumnModel[];
    styles: any;
}

export const NoDataRow: React.FunctionComponent<NoDataRowProps> = ({ columns, styles }: NoDataRowProps) => (
    <TableRow>
        <TableCell colSpan={columns.filter((col: ColumnModel) => col.visible).length}>
            <Typography style={styles.title} variant="body2" gutterBottom={true}>
                <Warning /> {Lang.translate('NoRecords')}
            </Typography>
        </TableCell>
    </TableRow>
);
