import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import { Still } from "./views/aboutStill";

import { Portfolio } from "./views/portfolio";
import { Services } from "./views/services";
import { SingleService } from "./views/singleService";
import { SinglePortfolioPage } from "./views/singlePortfolioPage";
import { Login } from "./views/login";
import { Dashboard } from "./views/dashboard";
import { Register } from "./views/register";
import { ALaCartPreScheduler } from "./views/aLaCartPreScheduler";
import { Scheduler } from "./views/scheduler";

import { Footer } from "./component/footer";
import { Contact } from "./views/contact";
import { Terms } from "./views/termsConditions";
import { Checkout } from "./views/checkout";
import { Cart } from "./views/cart";
import { Confirmation } from "./views/confirmation";

// import { Single } from "./views/single";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Still} />

							<Route exact path="/portfolio" component={Portfolio} />
							<Route exact path="/services" component={Services} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/register" component={Register} />
							<Route exact path="/footer" component={Footer} />
							<Route exact path="/single-service/:theindex" component={SingleService} />
							<Route
								exact
								path="/single-portfoliopage/strategy/:theindex"
								component={SinglePortfolioPage}
							/>
							<Route exact path="/contact" component={Contact} />
							<Route exact path="/terms" component={Terms} />
							<Route exact path="/prescheduler" component={ALaCartPreScheduler} />
							<Route exact path="/scheduler" component={Scheduler} />
							<Route exact path="/checkout" component={Checkout} />
							<Route exact path="/cart" component={Cart} />
							<Route exact path="/confirmation" component={Confirmation} />
							<Route exact path="/dashboard" component={Dashboard} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
