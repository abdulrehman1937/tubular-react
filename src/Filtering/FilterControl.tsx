import * as React from 'react';
import { ColumnModel, columnHasFilter, ColumnDataType } from 'tubular-common';
import { StandardFilterEditor } from './StandardFilterEditor';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { BooleanFilterEditor } from './BooleanFilterEditor';

export interface FilterControlProps {
    column: ColumnModel;
    onApply: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    expandIcon: {
        color: theme.palette.primary.contrastText,
    },
}));

export const FilterControl: React.FunctionComponent<FilterControlProps> = ({ column, onApply }: FilterControlProps) => {
    const hasFilter = columnHasFilter(column);
    const classes = useStyles();
    const FilterEditor = column.dataType === ColumnDataType.Boolean ? BooleanFilterEditor : StandardFilterEditor;

    return (
        <Accordion>
            <AccordionSummary
                classes={hasFilter ? classes : {}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
            >
                <Typography>{column.label}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FilterEditor column={column} onApply={onApply} />
            </AccordionDetails>
        </Accordion>
    );
};
