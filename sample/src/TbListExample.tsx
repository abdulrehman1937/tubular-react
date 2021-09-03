import * as React from 'react';

import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useTbList } from 'tubular-react-common';
import { TbList } from '../../src/TbList/TbList';
import columns from './data/columns';
import localData from './data/localData';

const MyListItem: React.FunctionComponent = ({ rowStyle, selectedIndex, onItemClick, row }: any) => {
    return (
        <ListItem button={true} selected={selectedIndex === 0} onClick={onItemClick} style={rowStyle}>
            <ListItemText primary={`${row.OrderID} - ${row.CustomerName}`} />
        </ListItem>
    );
};

const TbListExample: React.FunctionComponent<any> = () => {
    const [data, setData] = React.useState(localData);
    const tbList = useTbList(columns, 'https://tubular.azurewebsites.net/api/orders/paged');

    const rowClick = (row: any) => {
        console.log('You clicked on a row: ', row);
    };

    const handleAddRow = () => {
        setData([
            ...data,
            {
                Amount: 150.0,
                CustomerName: 'Tiempo Development',
                OrderID: 23,
                ShippedDate: '2016-01-04T18:00:00',
                ShipperCity: 'Monterrey, NL, Mexico',
            },
        ]);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [searchText, setSearchText] = React.useState(tbList.state.searchText);

    const handleChangeSearch = (event: any) => {
        setSearchText(event.target.value);
        tbList.api.search(event.target.value);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    const sortEvent = columnName => tbList.api.sortByColumn(columnName);

    const handleColumnSelect = (colName: string) => (event: any) => {
        sortEvent(colName);
        handleClose();
    };

    return (
        <div className="root" style={{ width: '100%', height: '100%' }}>
            <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Sort by
                </Button>
                <div>
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        margin="normal"
                        variant="outlined"
                        value={searchText || ''}
                        onChange={handleChangeSearch}
                    />
                </div>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted={true}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleColumnSelect('OrderID')}>OrderID</MenuItem>
                    <MenuItem onClick={handleColumnSelect('CustomerName')}>CustomerName</MenuItem>
                    <MenuItem onClick={handleColumnSelect('ShipperCity')}>ShipperCity</MenuItem>
                </Menu>
            </div>
            <div style={{ width: '250px', height: '100%' }}>
                <TbList tbInstance={tbList} listItemComponent={MyListItem} onItemClick={rowClick} />
            </div>
        </div>
    );
};

export default TbListExample;
