// prettier-ignore
import { WithWidth } from "@material-ui/core/withWidth";
import * as React from "react";
import { BrowserRouter, Route, RouteComponentProps, Router, withRouter } from "react-router-dom";
// config
// hoc
import PrivateRoute from 'hoc/privateRoute';
// pages
import Login from "modules/Auth/AuthContainer";
import ListingPage from 'modules/Listing/ListingContainer';
import MainPage from "modules/Main/MainContainer";



class App extends React.Component<any, any> {

	render() {
		if (!this.props) {
			return null;
		}
		return (
			<BrowserRouter>
				<Route exact={true} path="/" component={Login} />
				<PrivateRoute path='/listing' component={ListingPage} />
				<PrivateRoute path='/main' component={MainPage} />
			</BrowserRouter>
		);
	}

}

export default App
