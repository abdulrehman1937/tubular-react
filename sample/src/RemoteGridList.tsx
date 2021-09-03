import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import GridList from '@mui/material/GridList';
import GridListTile from '@mui/material/GridListTile';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { formatDate, LocalStorage } from 'tubular-common';
import { Paginator, SearchTextInput } from '../../src';
import CustomHttpClient from './CustomHttpClient';
import columns from './data/columns';
import { useTbTable } from 'tubular-react-common';

const styles: any = {
    progress: {
        height: '20px',
    },
    search: {
        margin: '15px 10px 10px 10px',
        textAlign: 'right',
    },
};

const RemoteGridList: React.FunctionComponent = () => {
    const [getErrorMessage, setErrorMessage] = React.useState(null as string);

    const tbTableInstance = useTbTable(columns, 'https://tubular.azurewebsites.net/api/orders/paged', {
        storage: new LocalStorage(),
        componentName: 'RemoteGridList',
    });

    console.log(tbTableInstance);
    return (
        <Paper>
            <div style={styles.search}>
                <SearchTextInput
                    searchText={tbTableInstance.state.searchText}
                    updateSearchText={tbTableInstance.api.updateSearchText}
                />
            </div>
            <div style={styles.progress}>{tbTableInstance.state.isLoading && <LinearProgress />}</div>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <ImageList cellHeight={180} cols={5}>
                                {tbTableInstance.state.data &&
                                    tbTableInstance.state.data.map((row) => (
                                        <ImageListItem key={row.OrderID}>
                                            <Card>
                                                <CardContent>
                                                    <Typography gutterBottom={true} variant="h5" component="h2">
                                                        {row.OrderID} - {row.CustomerName}
                                                    </Typography>
                                                    <Typography component="p">{row.ShipperCity}</Typography>
                                                    <Typography component="p">
                                                        {formatDate(row.ShippedDate, 'M/d/yyyy h:mm a')}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                        Learn More
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </ImageListItem>
                                    ))}
                            </ImageList>
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <Paginator tbTableInstance={tbTableInstance} />
                    </TableRow>
                </TableFooter>
            </Table>
        </Paper>
    );
};

export default RemoteGridList;
