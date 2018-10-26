import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    sublinhado: {
        textDecoration: 'none',
        color: 'black',
    },
};

class Barra extends React.Component {

    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    logout = () =>{
        localStorage.clear();
    }
    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        var loginButton;
        if (localStorage.getItem('user') !== null) {
            loginButton = <NavLink to={"/"} className={classes.sublinhado}  ><MenuItem onClick={this.logout.bind(this)}>Logout</MenuItem></NavLink>;
        } else {
            loginButton = <div><NavLink to={"/login"} className={classes.sublinhado}><MenuItem>Logar</MenuItem></NavLink>
                <NavLink to={"/cadastrar"} className={classes.sublinhado}><MenuItem>Cadastrar</MenuItem></NavLink></div>;

        }

        return (
            <div className={classes.root}>

                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            Shop
                        </Typography>
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    {loginButton}
                                </Menu>
                            </div>
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}

Barra.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Barra);