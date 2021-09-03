import * as React from 'react';
import { FilterEditorProps } from './utils';
import { CompareOperators } from 'tubular-common';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    label: {
        paddingTop: 5,
    },
});

export const BooleanFilterEditor = ({ column }: FilterEditorProps) => {
    const [selectedOption, setSelectedOption] = React.useState(column.filterText || 'all');
    const classes = useStyles();
    const onChoiceChange = (value: string) => {
        setSelectedOption(value);
        if (value === 'all') {
            column.filterOperator = CompareOperators.None;
            column.filterText = null;
            return;
        }

        column.filterOperator = CompareOperators.Equals;
        column.filterText = value;
    };

    return (
        <div>
            <RadioGroup
                aria-label="quiz"
                name="quiz"
                value={selectedOption}
                onChange={(_event, value) => onChoiceChange(value)}
            >
                <FormControlLabel classes={classes} value="true" control={<Radio />} label={<CheckBoxIcon />} />
                <FormControlLabel
                    classes={classes}
                    value="false"
                    control={<Radio />}
                    label={<CheckBoxOutlineBlankIcon />}
                />
                <FormControlLabel value="all" control={<Radio />} label="All" />
            </RadioGroup>
        </div>
    );
};
