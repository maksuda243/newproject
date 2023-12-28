import { React } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';

const Order = () => {

  return (
    
    <div className="container-xxl bg-white p-0">
      <Header />

      
            {/* <!-- Breadcrumb Section Begin --> */}

            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Check Out</h4>
                                <div className="breadcrumb__links">
                                    <a href="./home">Home</a>
                                    <a href="./shop">Shop</a>
                                    <span>Check Out</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     
      
      {/* Order Confirmation Content */}
      <div className="container-xxl py-1">
        <div className="container text-center">
          <div className="mb-5">
            <img src="assets/img/order.jpg" className="orderImg img-fluid" alt="Order Confirmation" />
            <h5>Thank You For Ordering</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lobortis lacus.</p>
            <div className="mb-5">
            <Link to="/view-order" className="btn btn-primary mx-2">View Order</Link>
            <Link to="/menu" className="btn btn-secondary mx-2">Continue Shopping</Link>
          </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
