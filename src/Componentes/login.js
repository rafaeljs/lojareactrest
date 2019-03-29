import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Paper from "@material-ui/core/Paper/Paper";
import Avatar from "@material-ui/core/Avatar/Avatar";
import LockIcon from "@material-ui/icons/Lock";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Button from "@material-ui/core/Button/Button";
import Arrowback from "@material-ui/icons/ArrowBack";
import {NavLink} from "react-router-dom";
import Tema from "./Tema";
import {MuiThemeProvider} from '@material-ui/core';
import firebase from '../firebase';


const theme = Tema;
const styles = {
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        color: theme.palette.secondary.main,
    },
};


class login extends React.Component {
    state = {
        error:"",
    };
    handleEmail = event => {this.setState({ email: event.target.value })}
    handlePassword = event => {this.setState({ senha: event.target.value })}

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, senha } = this.state;
        firebase
            .auth
            .signInWithEmailAndPassword(email, senha)
            .then((user) => {
                this.props.history.push('/dashboard');
            })
            .catch((error) => {
                this.setState({ error: error.message });
            });
    };


    render() {
        const { classes } = this.props;



        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />
                    <main className={classes.layout}>
                        <Paper className={classes.paper} >
                            <Avatar className={classes.avatar} >
                                <LockIcon color={"secondary"} />
                            </Avatar>
                            <Typography variant="headline" color={"secondary"}>Logar</Typography>
                            <form className={classes.form}
                                  action={this.props.action}
                                  method={this.props.method}
                                  onSubmit={this.handleSubmit}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Usuario</InputLabel>
                                    <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleEmail} />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Senha</InputLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={this.handlePassword}
                                    />
                                </FormControl>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Lembrar-me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    className={classes.submit}
                                >
                                    Logar
                                </Button>
                            </form>
                            <NavLink to={"/"}>
                                <Avatar className={classes.avatar}>
                                    <Arrowback color={"secondary"}/>
                                </Avatar>
                            </NavLink>
                            {this.state.error}
                        </Paper>
                    </main>
                </React.Fragment>
            </MuiThemeProvider>

        );
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(login);