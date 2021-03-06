import React from "react";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class SingleService extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, action }) => {
					let index = this.props.match.params.theindex;
					console.log(index);
					return (
						<div className="container m-auto ">
							<div className="row">
								<div className="col-md-6 m-auto">
									<h1>{store.strategyCardContent[index].title}</h1>
									<img
										className="card-img-top"
										src="https://cdn-images-1.medium.com/max/2600/1*K16E0qvbkeekeQMsJjOCVg.png"
										alt="Card image cap"
									/>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6 m-auto">
									{store.strategyCardContent[index].header}

									{store.strategyCardContent[index].info}
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
SingleService.propTypes = {
	match: PropTypes.object
};
