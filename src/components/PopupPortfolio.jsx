import React from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import Icofont from "react-icofont";
import Lightbox from "react-image-lightbox";
import "../assets/css/poup.scss";
import portfolio1 from "../assets/img/portfolio-img1.jpg";
import portfolio2 from "../assets/img/portfolio-img2.jpg";
import portfolio3 from "../assets/img/portfolio-img3.jpg";
import portfolio4 from "../assets/img/portfolio-img4.jpg";
import portfolio5 from "../assets/img/portfolio-img5.jpg";
import portfolio6 from "../assets/img/portfolio-img6.jpg";

const images = [portfolio1,portfolio2,portfolio3,portfolio4,portfolio5,portfolio6]
class LightboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }
  const 

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <MDBContainer>
        <div className="mdb-lightbox no-margin">
          <MDBRow>
          <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work">
                    <figure>
                        <div className="work-image">
                            <img
                            src={portfolio1}
                            alt="Gallery"
                            className="img-fluid"
                            />
                            <span 
                                href= "ll"
                                onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                                className="popup-btn">
                                <Icofont icon="icofont-search-2"/>
                            </span>
                            </div>
                            <h3>BUSINESS CARD DEISGN</h3>
                    </figure>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work">
                    <figure>
                        <div className="work-image">
                            <img
                            src={portfolio2}
                            alt="Gallery"
                            className="img-fluid"
                            />
                            <span 
                                onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                                className="popup-btn">
                                <Icofont icon="icofont-search-2"/>
                            </span>
                            </div>
                            <h3>BUSINESS CARD DEISGN</h3>
                    </figure>
                </div>
            </div>
                        
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work">
                    <figure>
                        <div className="work-image">
                            <img
                            src={portfolio3}
                            alt="Gallery"
                            className="img-fluid"
                            />
                            <span 
                                href= "ll"
                                onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
                                className="popup-btn">
                                <Icofont icon="icofont-search-2"/>
                            </span>
                            </div>
                            <h3>BUSINESS CARD DEISGN</h3>
                    </figure>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work">
                    <figure>
                        <div className="work-image">
                            <img
                            src={portfolio3}
                            alt="Gallery"
                            className="img-fluid"
                            />
                            <span 
                                href= "ll"
                                onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
                                className="popup-btn">
                                <Icofont icon="icofont-search-2"/>
                            </span>
                            </div>
                            <h3>BUSINESS CARD DEISGN</h3>
                    </figure>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work">
                    <figure>
                        <div className="work-image">
                            <img
                            src={portfolio5}
                            alt="Gallery"
                            className="img-fluid"
                            />
                            <span 
                                href= "ll"
                                onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
                                className="popup-btn">
                                <Icofont icon="icofont-search-2"/>
                            </span>
                            </div>
                            <h3>BUSINESS CARD DEISGN</h3>
                    </figure>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work">
                    <figure>
                        <div className="work-image">
                            <img
                            src={portfolio6}
                            alt="Gallery"
                            className="img-fluid"
                            />
                            <span 
                                onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                                className="popup-btn">
                                <Icofont icon="icofont-search-2"/>
                            </span>
                            </div>
                            <h3>BUSINESS CARD DEISGN</h3>
                    </figure>
                </div>
            </div>  
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default LightboxPage;
