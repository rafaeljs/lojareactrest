import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tema from './Tema';
import Produto from './Produto';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const theme = Tema;

const styles = {
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginLeft:100,
        marginRight:100,
        marginTop:50,
        backgroundColor: theme.palette.primary.main,
    },
    celula:{
        borderBottom:0,
        padding:15,
        maxWidth:150,
    }

};

function PaperSheet(props) {
    const { classes } = props;
    var tabela = <TableRow>
        <TableCell className={classes.celula}>
            <Produto/>
        </TableCell>
        <TableCell className={classes.celula}>
            <Produto/>
        </TableCell>
        <TableCell className={classes.celula}>
            <Produto/>
        </TableCell>
        <TableCell className={classes.celula}>
            <Produto/>
        </TableCell>
    </TableRow>;

    return (
        <div>
            <Paper className={classes.root}>
                <Table>
                    <TableBody>
                        {tabela}
                        {tabela}
                        {tabela}
                        {tabela}
                        {tabela}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);