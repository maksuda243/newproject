import { React, useState } from 'react';
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom'
import { checkCoupon } from '../../api/check_coupon';

const Checkout = () => {
  const { cartTotal, items, emptyCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscounts, setCouponDiscounts] = useState({});
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [usedCoupons, setUsedCoupons] = useState([]);
  const navigate = useNavigate();
  const applyCoupon = async () => {
    const discountPercentage = 10; // 10% discount

    console.log("Coupon code to apply:", couponCode);

    try {
      if (usedCoupons.includes(couponCode)) {
        alert(`Coupon ${couponCode} has already been applied.`);
        return;
      }

      const updatedCouponDiscounts = { ...couponDiscounts };
      updatedCouponDiscounts[couponCode] = cartTotal * (discountPercentage / 100);

      const newTotalDiscount = Object.values(updatedCouponDiscounts).reduce((acc, discount) => acc + discount, 0);

      console.log('Coupon Discounts:', updatedCouponDiscounts);
      console.log('Total Discount Applied:', `$${newTotalDiscount.toFixed(2)}`);

      // Update usedCoupons array
      setUsedCoupons([...usedCoupons, couponCode]);

      console.log("Used coupons after applying:", usedCoupons);

      setCouponDiscounts(updatedCouponDiscounts);
      setTotalDiscount(newTotalDiscount);
    } catch (error) {
      console.error(error.message);
    }
  };



  const discountedTotal = (cartTotal - totalDiscount).toFixed(2);


  const placeOrder = async () => {

    try {
      const orderData = {
        first_name: document.getElementById('firstName').value,
        last_name: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        items: items,
        sub_total: cartTotal.toFixed(2),
        discount: totalDiscount.toFixed(2),
        total: discountedTotal.toFixed(2),
      };
      const response = await fetch(`${global.config.apiUrl}order/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData), // Assuming 'inputs' contains the data you want to send
      });
      const data = await response.json();
      console.log(data);

      if (data.status == 1) {
        // Order was successfully placed
        alert('Order placed successfully!');
        emptyCart();
        navigate('/ordersuccess');
        // You can perform further actions, such as clearing the cart
      } else {
        // Order placement failed
        alert('Failed to place the order. Please try again.');
      }
    } catch (error) {
      // Handle errors here, e.g., network issues or server errors
      console.error(error);
    }
  };



  return (
    <div>
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
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Checkout Section Begin --> */}
      <div className="container-xxl py-1">
        <div className="container">
          {/* Your checkout content goes here */}
          {/* Order Summary */}
          <div className="row">
            <div className="col-md-5">
              <h2 className="text-black mb-4">Order Summary</h2>
              <table className="table">
                <thead>
                  <tr className='text-center'>
                    <th className='text-start'>Product</th>
                    <th>Quantity</th>
                    <th>Coupons</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map through cart items to display each item */}
                  {items.map((item) => (
                    <tr className='text-center' key={item.id}>
                      <td className='text-start'>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.code}</td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Checkout Form */}
            <div className="col-md-5 offset-md-2 mt-1">
              <h2 className="text-black mb-4">Billing Information</h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" required />
                </div>
                {/* Add more input fields for address, city, postal code, etc. */}
              </form>
            </div>

            <div className="col-md-4">
              <label className="text-black h4" htmlFor="coupon">Coupon</label>
              <p>Enter your coupon code if you have one.</p>

              <div className="col-md-8 mb-3 mb-md-0">
                <form onSubmit={(e) => { e.preventDefault(); applyCoupon(); }}>
                  <input className="form-control py-3" type="text" placeholder="Enter your coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />

                  <div onSubmit={(e) => { e.preventDefault(); applyCoupon(); }}>
                    <button className="primary-btn my-2 py-2 px-3 " type='submit'>Apply Coupon</button>
                  </div>
                </form>
              </div>
            </div>
            {/* {Object.keys(couponDiscounts).length > 0 && (
              <div className="col-md-2 mt-5">
                Discount Applied:
                {Object.keys(couponDiscounts).map((couponCode) => (
                  <div key={couponCode}>
                    {usedCoupons.includes(couponCode) ? (
                      `Coupon ${couponCode} has already been applied.`
                    ) : (
                      `Coupon ${couponCode}: $${couponDiscounts[couponCode].toFixed(2)}`
                    )}
                  </div>
                ))}
              </div>
            )} */}

            {Object.keys(couponDiscounts).length > 0 && (
              <div className="col-md-2" id='couponMsg'>
                Discount Applied:
                {Object.keys(couponDiscounts).map((couponCode) => (
                  <div key={couponCode}>
                    Coupon {couponCode}: ${couponDiscounts[couponCode].toFixed(2)}
                  </div>
                ))}
                {/* <div>
                  Total Discount: ${totalDiscount.toFixed(2)}
                </div> */}
              </div>
            )}

            <div className="col-md-3 offset-md-9 ">
              <div className="row">
                <div className="col-md-6">
                  <span className="text-black">Sub Total</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">${cartTotal.toFixed(2)}</strong>
                </div>
                <div className="col-md-6">
                  <span className="text-black">Total Discount</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">${totalDiscount.toFixed(2)}</strong>
                </div>
                <div className="col-md-6">
                  <span className="text-black">Total</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">${discountedTotal}</strong>
                </div>
              </div>

              <button className="primary-btn py-2 mt-4 ms-2" onClick={placeOrder}>Place Order</button>

            </div>
          </div>

        </div>
      </div>

      {/* <!-- Checkout Section End --> */}

      <Footer />

    </div>
  )
}
export default Checkout