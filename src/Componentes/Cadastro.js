import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Paper from "@material-ui/core/Paper/Paper";
import Avatar from "@material-ui/core/Avatar/Avatar";
import LockIcon from "@material-ui/icons/Lock";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
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
        email: '',
        nome:'',
        senha:''
    };
    handleEmail = event => {this.setState({ email: event.target.value })}
    handleName = event => {this.setState({ nome: event.target.value })}
    handlePassword = event => {this.setState({ senha: event.target.value })}




    render() {
        const nome = this.state.nome;
        const email = this.state.email;
        const senha = this.state.senha;

        async function handleSubmit () {
            try{
                await firebase.register(nome,email,senha);

                this.props.history.push('/');
            }
            catch (e) {
                alert(e.message);
            }
        }
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockIcon color={"secondary"} />
                            </Avatar>
                            <Typography variant="headline" color={"secondary"}>Cadastrar</Typography>
                            <form className={classes.form}
                                  action={this.props.action}
                                  method={this.props.method}
                                  onSubmit={() => handleSubmit()}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="nome">Nome</InputLabel>
                                    <Input id="nome" name="nome" autoComplete="nome" autoFocus onChange={this.handleName} />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email</InputLabel>
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
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    className={classes.submit}
                                >
                                    Realizar cadastro
                                </Button>
                            </form>
                            <NavLink to={"/"}>
                            <Avatar className={classes.avatar}>
                                <Arrowback color={"secondary"}/>
                            </Avatar>
                            </NavLink>
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