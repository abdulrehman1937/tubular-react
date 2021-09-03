import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { TbSelection } from '../utils/Selection';
import { lighten, Theme } from '@mui/material/styles';
import { createStyles } from '@mui/styles';
import makeStyles from '@mui/styles/makeStyles';
export interface SelectionToolbarProps {
    selection: TbSelection;
    actionsArea?: React.ComponentType<any>;
}

const useToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
        },
        highlight:
            theme.palette.mode === 'light'
                ? {
                      color: theme.palette.secondary.main,
                      backgroundColor: lighten(theme.palette.secondary.light, 0.85),
                  }
                : {
                      color: theme.palette.text.primary,
                      backgroundColor: theme.palette.secondary.dark,
                  },
        title: {
            flex: '1 1 100%',
        },
    }),
);

const spacer: React.CSSProperties = { flex: '1 0' };

export const SelectionToolbar: React.FunctionComponent<SelectionToolbarProps> = ({
    selection,
    actionsArea,
}: SelectionToolbarProps) => {
    const classes = useToolbarStyles();
    const ActionsArea = actionsArea;

    return (
        <Toolbar
            data-testid="selection-toolbar"
            className={clsx(classes.root, {
                [classes.highlight]: selection.getSelectedCount() > 0,
            })}
        >
            <Typography color="inherit" variant="subtitle1" component="div">
                {selection.getSelectedCount()} selected
            </Typography>
            <div style={spacer} />
            {ActionsArea && <ActionsArea selection={selection} />}
        </Toolbar>
    );
};
