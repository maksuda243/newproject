import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Blog_detail } from '../../api/blog_detail';
import { Link } from 'react-router-dom'

const Blogdetails = () => {
    const [searchParams] = useSearchParams();
    let id = searchParams.get('id');
    const [blogData, setblogData] = useState([]);
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${global.config.apiUrl}blog_detail/${id}`);
                const data = await response.json();
                setblogData(data.data);
 
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Header />

            {/* <!-- Blog Details Hero Begin --> */}

            <section className="blog-hero spad">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-9 text-center">
                            <div className="blog__hero__text">
                                <h2>{blogData.title}</h2>
                                <ul>
                                    <li>{blogData.author}</li>
                                    <li>February 21, 2019</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Blog Details Hero End --> */}

            {/* <!-- Blog Details Section Begin --> */}

            <section className="blog-details spad">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12">
                            <div className="blog__details__pic">
                                <img src={blogData.image} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="blog__details__content">
                                {/* <div className="blog__details__share">
                                    <span>share</span>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="youtube"><i className="fa fa-youtube-play"></i></a></li>
                                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div> */}
                                <div className="blog__details__text">
                                    <p>{blogData.short_description}</p>
                                  
                                </div>
                               
                                <div className="blog__details__text">
                                    <p>{blogData.description}</p>
                                   
                                </div>
                                <div className="blog__details__option">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog__details__author">
                                                <div className="blog__details__author__pic">
                                                    <img src="assets/img/blog/details/blog-author.jpg" alt=""/>
                                                </div>
                                                <div className="blog__details__author__text">
                                                    <h5>{blogData.author}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog__details__tags">
                                                <a href="#">#Fashion</a>
                                                <a href="#">#Trending</a>
                                                <a href="#">#2020</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Blog Details Section End --> */}

            <Footer />

        </div>
    )
}

export default Blogdetails 