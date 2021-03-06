import React, { Component } from "react";
import PropTypes from "prop-types";
import featuresImage from "../assets/img/features-img.jpg";
import animationimg1 from "../assets/img/3.png";
import animationimg2 from "../assets/img/4.png";
import animationimg3 from "../assets/img/1.png";

export class Features extends Component {
	render() {
		//Start Features Loop
		const featuresdata = this.props.featuresData.map((features, index) => (
			<div className="single-features" key={index}>
				<div className="icon">
				<i className={features.icon} />
				</div>
				<h3>{features.title}</h3>
				<p>{features.content}</p>
			</div>
		));
		//End Features Loop

		return (
			<>
				<section className="features-area ptb-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="features-img">
									<img src={this.props.featuresImage} alt="features" />
								</div>
							</div>

							<div className="col-lg-6 col-md-12 col-sm-12">{featuresdata}</div>
						</div>
					</div>

					<div className="animation-box1">
						<img src={this.props.animationimg1} alt="animateimage" />
					</div>

					<div className="animation-box2">
						<img src={this.props.animationimg2} alt="animateimage" />
					</div>

					<div className="animation-box3">
						<img src={this.props.animationimg3} alt="animateimage" />
					</div>
				</section>
			</>
		);
  	}
}

Features.PropsTypes = {
	animationimg1: PropTypes.string,
	animationimg2: PropTypes.string,
	animationimg3: PropTypes.string,
	featuresImage: PropTypes.string,
	featuresData: PropTypes.array
};

Features.defaultProps = {
	featuresImage,
	animationimg1,
	animationimg2,
	animationimg3,
	featuresData: [
		{
			icon: "icofont-dashboard-web",
			title: "Fully Responsive",
			content:
				"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
			},
		{
			icon: "icofont-chart-bar-graph",
			title: "Digital Marketing",
			content:
				"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
			},
		{
			icon: "icofont-anchor",
			title: "Clean & Unique Design",
			content:
				"Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
		}
	]
};
export default Features;
