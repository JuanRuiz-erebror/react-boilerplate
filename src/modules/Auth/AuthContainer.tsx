import React, { useState, useEffect } from "react";
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
// elements
import FieldUsername from 'modules/Auth/comp/FieldUsername';
import FieldPassWord from 'modules/Auth/comp/FieldPassword';
import { Theme } from "@material-ui/core/styles/createTheme";

const styles = (theme: Theme) => createStyles({
	main: {
		width: "auto",
		display: "block", // Fix IE 11 issue.
		marginLeft: '2rem',
		marginRight: '2rem',
		[theme.breakpoints.up(600)]: {
			width: 400,
			marginLeft: "auto",
			marginRight: "auto"
		}
	},
	paper: {
		marginTop: '2rem',
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: `${3}px ${5}px ${5}px`
	},
	avatar: {
		margin: '0.5rem',
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: '0.5rem',
	},
	submit: {
		marginTop: '0.5rem'
	}
});


interface Props extends RouteComponentProps<any> {
	classes: any;
	//todoList: Todo[];
	actions: typeof AuthActions;
	token: string | null;
}

function Login(props: Props) {

	console.log(props);
	const { classes } = props;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event: any) => {
		event.preventDefault();
		props.actions.loginUserAction({
			email,
			password
		});
	};
	useEffect(() => {
		if (props.token) {
			props.history.push('/main');
		}
	});
	return (
		<main className={classes.main}>
			<CssBaseline />
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					IWO OS
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<FieldUsername value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(String(e.target.value))} />
					<FieldPassWord value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(String(e.target.value))} />
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign in
					</Button>
				</form>
			</Paper>
		</main>
	);
}

const mapStateToProps = (state: RootState) => ({
	token: state.loginForm.token,
});

function mapDispatchToProps(dispatch: any) {
	return {
		actions: bindActionCreators(AuthActions as any, dispatch),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Login));
