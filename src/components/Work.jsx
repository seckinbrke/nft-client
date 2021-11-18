import React, { Component } from 'react';
import PropTypes from 'prop-types';
import animationimg1 from "../assets/img/3.png";
import animationimg2 from "../assets/img/4.png";
import animationimg3 from "../assets/img/1.png";

export class Work extends Component {
    render() {
        return (
            <>
                <section className="work-with-us ptb-100">
                    <div className="container">
                        <h3>{this.props.workTitle}</h3>
                        <span>{this.props.worksmallTitle}</span>
                        <a href={this.props.btnlink} className="btn btn-primary">{this.props.btnName}</a>
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

Work.PropsTypes = {
    workTitle: PropTypes.string,
    worksmallTitle: PropTypes.string,
    btnlink: PropTypes.string,
    animationimg1: PropTypes.string,
    animationimg2: PropTypes.string,
    animationimg3: PropTypes.string,
}

Work.defaultProps = {
    workTitle: "Want to work with us?",
    worksmallTitle: "Lets talk about project",
    btnlink: "#",
    btnName: "get Started",
    animationimg1,
    animationimg2,
    animationimg3,
}

export default Work
