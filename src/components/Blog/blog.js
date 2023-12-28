import React, {useState, useEffect} from 'react';
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { Link } from 'react-router-dom'
import { Blogs } from '../../api/blog';

const Blog = () => {
    const [blogData, setBlogData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${global.config.apiUrl}blog`);
          const data = await response.json();
          setBlogData(data.data);
        } catch (error) {
          console.error(error.message);
        }
      };
  
      fetchData();
    }, []);

    return (
        <div>
            <Header />
            {/* <!-- Breadcrumb Section Begin --> */}
            <section className="breadcrumb-blog" style={{ backgroundImage: 'url("assets/img/breadcrumb-bg.jpg")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Our Blog</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Section End --> */}

            {/* <!-- Blog Section Begin --> */}
            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        {blogData.map((blog, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6"  key={index}>
                            <div className="blog__item">
                            <div className="blog__item__pic" style={{ backgroundImage: `url('${global.config.apiUrl+ blog.image}')` }}></div>
                                <div className="blog__item__text">
                                    <span><img src="img/icon/calendar.png" alt="" /> 16 February 2020</span>
                                    <h5>{blog.title}</h5>
                                    <a href={`/blogdetails?id=${blog.id}`}>Read More</a>

                                </div>
                            </div>
                        </div>
                        ))}
                        
                        
                        
                    </div>
                    
                </div>
            </section>
            {/* <!-- Blog Section End --> */}
            <Footer />
        </div>
    )
}

export default Blog