import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import CloudDownload from '@mui/icons-material/CloudDownload';
import Print from '@mui/icons-material/Print';
import * as React from 'react';
import { ColumnModel } from 'tubular-common';
import { exportGrid } from 'tubular-react-common';
import Lang from '../utils/Lang';

export interface ExportButtonProps {
    type: string;
    gridName: string;
    filteredRecordCount: number;
    toolTip?: string;
    exportTo: (allRows: boolean, exportFunc: (payload: any[], columns: ColumnModel[]) => void) => void;
}

export const ExportButton: React.FunctionComponent<ExportButtonProps> = ({
    type,
    gridName,
    toolTip,
    exportTo,
    filteredRecordCount,
}: ExportButtonProps) => {
    const [anchorPrint, setAnchorPrint] = React.useState(null);

    const handlePrintMenu = (event: React.MouseEvent<HTMLElement>): void =>
        setAnchorPrint(event ? event.currentTarget : null);

    const closePrint = () => setAnchorPrint(null);

    const partialExport = (data: [], columns: ColumnModel[]) => {
        exportGrid(type, data, columns, gridName);
        closePrint();
    };

    const printCurrent = () => exportTo(false, partialExport);
    const printAll = () => exportTo(true, partialExport);

    return (
        <React.Fragment>
            <IconButton disabled={filteredRecordCount === 0} onClick={handlePrintMenu}>
                {type === 'print' ? (
                    <Tooltip title={toolTip || Lang.translate('Print')}>
                        <Print />
                    </Tooltip>
                ) : (
                    <Tooltip title={toolTip || Lang.translate('Download')}>
                        <CloudDownload />
                    </Tooltip>
                )}
            </IconButton>
            <Menu anchorEl={anchorPrint} open={Boolean(anchorPrint)} onClose={closePrint}>
                <MenuItem onClick={printCurrent}>{Lang.translate('CurrentRows')}</MenuItem>
                <MenuItem onClick={printAll}>{Lang.translate('AllRows')}</MenuItem>
            </Menu>
        </React.Fragment>
    );
};
