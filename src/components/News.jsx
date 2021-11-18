import React, { Component } from 'react';
import PropTypes from 'prop-types';
import blogImage1 from "../assets/img/blog-img1.jpg";
import blogImage2 from "../assets/img/blog-img2.jpg";
import blogImage3 from "../assets/img/blog-img3.jpg";

export class News extends Component {
    render() {

        // Start News Loop
        const newsdata = this.props.newssData.map((news, index ) =>(
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="single-blog-post">
                    <div className="post-thumbnail">
                        <a href={news.imglink}><img src={news.image} alt="blog-img" /></a>
                    </div>

                    <div className="post-content">
                        <h3><a href={news.titlelink}>{news.title}</a></h3>
                        <a href={news.btnlink} className="read-more">{news.btnname}</a>
                    </div>
                </div>
            </div>
        ));
        // End News Loop

        return (
            <>
                <section id="blog" className="blog-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                            <p>{this.props.sectionContent}</p>
                        </div>

                        <div className="row justify-content-center">
                            {newsdata}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
News.PropsTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    newssData: PropTypes.array,

}
News.defaultProps = {
    sectionTitle: "Our Latest",
    sectionTitleSpan: "News",
    sectionContent: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    newssData:[
        {
            imglink: "#",
            image: blogImage1,
            titlelink: "#",
            title: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            btnlink: "#",
            btnname: "Read more",
        },
        {
            imglink: "#",
            image: blogImage2,
            titlelink: "#",
            title: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            btnlink: "#",
            btnname: "Read more",
        },
        {
            imglink: "#",
            image: blogImage3,
            titlelink: "#",
            title: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            btnlink: "#",
            btnname: "Read more",
        }
    ]
}
export default News
