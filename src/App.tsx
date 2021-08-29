// prettier-ignore
import { Switch, withWidth } from "@material-ui/core";
import { createTheme, Theme } from "@material-ui/core/styles";
import { WithWidth } from "@material-ui/core/withWidth";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, RouteComponentProps, Router, withRouter } from "react-router-dom";
// config
import { history } from "./redux/configureStore";
import { RootState } from "./redux/rootReducer";
import withRoot from "./withRoot";
// hoc
import PrivateRoute from 'hoc/privateRoute';
// pages
import Login from "modules/Auth/AuthContainer";
import ListingPage from 'modules/Listing/ListingContainer';
import MainPage from "modules/Main/MainContainer";
import { deepOrange, deepPurple, lightBlue, orange, red } from "@material-ui/core/colors";
import { render } from "react-dom";



// function Routes() {
// 	const classes = useStyles();

// 	const [darkState, setDarkState] = React.useState(false);
// 	const palletType = darkState ? "dark" : "light";
// 	const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
// 	const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
// 	const darkTheme = createTheme({
// 		palette: {
// 			type: palletType,
// 			primary: {
// 				main: mainPrimaryColor
// 			},
// 			secondary: {
// 				main: mainSecondaryColor
// 			}
// 		}
// 	});
// 	const handleThemeChange = () => {
// 		setDarkState(!darkState);
// 	};

// 	return (
// 		<>
// 			<Route exact={true} path="/" component={Login} />
// 			<PrivateRoute path='/listing' component={ListingPage} />
// 			<PrivateRoute path='/main' component={MainPage} />
// 		</>
// 	);
// }

function Routes() {
	return (
		<>
			<Route exact={true} path="/" component={Login} />
			<PrivateRoute path='/listing' component={ListingPage} />
			<PrivateRoute path='/main' component={MainPage} />
		</>
	);
}

interface Props extends RouteComponentProps<void>, WithWidth { }

class App extends React.Component<any, any> {

	render() {
		if (!this.props) {
			return null;
		}
		return (
			<BrowserRouter>
				{/* <div className={classes.root}>
				<div className={classes.appFrame}> */}
				<Route exact={true} path="/" component={Login} />
				<PrivateRoute path='/listing' component={ListingPage} />
				<PrivateRoute path='/main' component={MainPage} />
				{/* <Routes /> */}
				{/* < Route exact={true} path="/" component={Login} />
				<PrivateRoute path='/listing' component={ListingPage} />
				<PrivateRoute path='/main' component={MainPage} /> */}
				{/* </div>
			</div> */}
			</BrowserRouter>
		);
	}

}

//export default App
export default App
//export default withRoot(withWidth()(App))
