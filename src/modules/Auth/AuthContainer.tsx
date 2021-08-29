import React, { useState, useEffect, useReducer } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

// material ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from '@material-ui/core/styles/createStyles';
// redux
import { RootState } from "../../redux/rootReducer";
import * as AuthActions from "./AuthActions";
import * as AppActions from "modules/App/AppActions";
// elements
import FieldUsername from 'modules/Auth/comp/FieldUsername';
import FieldPassWord from 'modules/Auth/comp/FieldPassword';
import { Theme } from "@material-ui/core/styles/createTheme";
import { Box, Checkbox, FormControlLabel, Grid, Link, makeStyles, Switch, TextField } from "@material-ui/core";
import BaseContainer from "hoc/BaseContainer";


const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

interface Props extends RouteComponentProps<any> {
	classes: any;
	//todoList: Todo[];
	actions: typeof AuthActions;
	appActions: typeof AppActions
	token: string | null;
	darkTheme: boolean
}

const LoginContainer = (props: Props) => {

	const classes = useStyles()


	console.log(props);
	//const { classes } = props;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event: any) => {
		event.preventDefault();
		props.actions.loginUserAction({
			email,
			password
		});
	}

	const handleChange = () => {

		props.appActions.setDarkThemeAction({ darkTheme: !props.darkTheme })
		//dispatch({ type: AppActionsType.SET_DARK_THEME, payload: { darkTheme: !state.darkTheme } })
	}

	useEffect(() => {
		if (props.token) {
			props.history.push('/main');
		}
	})

	console.log('auth container', props)

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div style={{ position: 'absolute', top: 0, right: 0 }}>
					<Switch checked={props.darkTheme} onChange={() => handleChange()} />
				</div>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						IWO OS
					</Typography>
					<form className={classes.form} onSubmit={handleSubmit} noValidate>
						<TextField
							value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(String(e.target.value))}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(String(e.target.value))}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	)
}

const mapStateToProps = (state: RootState) => ({
	token: state.loginForm.token,
	darkTheme: state.app.darkTheme
});

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(AuthActions as any, dispatch),
		appActions: bindActionCreators(AppActions as any, dispatch)
	}
}

const Login = BaseContainer(LoginContainer)
export default connect(mapStateToProps, mapDispatchToProps)(Login)

