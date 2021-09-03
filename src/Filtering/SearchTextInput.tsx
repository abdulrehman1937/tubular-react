import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Close from '@mui/icons-material/Close';
import Search from '@mui/icons-material/Search';

import * as React from 'react';

const styles = {
    formControl: {
        margin: '10px',
        width: 250,
    },
};

export interface SearchTextInputProps {
    searchText: string;
    updateSearchText: (value: string) => void;
}

export const SearchTextInput: React.FunctionComponent<SearchTextInputProps> = ({
    searchText,
    updateSearchText,
}: SearchTextInputProps) => {
    const onChange = (e: any) => updateSearchText(e.target.value);
    const onClear = () => updateSearchText('');

    const adorment = (
        <InputAdornment position="end">
            <Search />
        </InputAdornment>
    );

    return (
        <FormControl style={styles.formControl}>
            <Input
                fullWidth={true}
                type="text"
                value={searchText}
                onChange={onChange}
                startAdornment={adorment}
                endAdornment={
                    searchText !== '' && (
                        <InputAdornment position="end">
                            <IconButton onClick={onClear}>
                                <Close />
                            </IconButton>
                        </InputAdornment>
                    )
                }
            />
        </FormControl>
    );
};
