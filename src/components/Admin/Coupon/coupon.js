import { useState, useEffect, React } from "react";
import axios from "axios";
import Nav from "../Layout/Nav";
import Footer from "../Layout/Footer";

function Coupon() {
  const [coupon, setCoupon] = useState([]);
  const [inputs, setInputs] = useState({
    code: '',
    discount_percentage: '',
    expiration_date: '',
  });
  useEffect(() => {
    getDatas();
  }, []);
  function getDatas() {
    axios.get(`${global.config.apiUrl}coupons`).then(function (response) {
      setCoupon(response.data.data);
    });
  }
  const deleteItems = (id) => {
    axios.delete(`${global.config.apiUrl}coupons/delete/${id}`).then(function () {
      getDatas();
    });
  }
  const clearData = () => {
    setInputs(values => ({ ...values, "id": "", "code": "", "discount_percentage": "", "expiration_date": "" }))
  }
  /* for update */

  function getCoupon(d) {
    setInputs(d);
    // setInputs(values => ({ ...values, }))
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${global.config.apiUrl}coupons/create`, inputs).then(function (response) {
      console.log(response.data)
      getDatas();
      if (response.data.status === 1)
        document.getElementById('modelbutton').click();
    });
  }
  return (
    <div>
    <Nav />
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1><small>Coupon List</small></h1>
                <div className="row">
                    <div className="col-2 offset-sm-10">
                        <button onClick={clearData} id="modelbutton" type="button" className="btn btn-primary btn-sm float-end" data-toggle="modal" data-target="#myModal">
                            Add Coupon
                        </button>
                    </div>
                </div>
            </div>
        </div><br/>
        <div className="row">
            <div className="col-12">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Coupon Code</th>
                            <th>Discount Percentage</th>
                            <th>Expiration Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupon.map((d, key) =>
                            <tr key={key}>
                                <td>{d.id}</td>
                                <td>{d.code}</td>
                                <td>{d.discount_percentage}</td>
                                <td>{d.expiration_date}</td>
                                <td>
                                    <a href="javascript:void(0)" className="btn btn-primary me-2" data-toggle="modal" data-target="#myModal" onClick={() => getCoupon(d)} >Edit</a><br/><br/>
                                    <a href="javascript:void(0)" className="btn btn-danger btn-xs" onClick={() => deleteItems(d.id)}>Delete</a>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>


                <div className="modal" id="myModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Coupon Data</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>


                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-3">
                                                <label className="form-label">Coupon Code</label>
                                                <input value={inputs.code} type="text" className="form-control" name="code" onChange={handleChange} placeholder=" Coupon Code"  />
                                                <input value={inputs.id} type="hidden" name="id" />
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="col-sm-4">
                                            <div className="mb-3">
                                                <label className="form-label">Discount Percentage</label>
                                                <input type="text" className="form-control" name="discount_percentage" value={inputs.discount_percentage} onChange={handleChange} placeholder="Discount Percentage" />
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="mb-3">
                                                <label className="form-label">Expiration Date</label>
                                                <input type="date" className="form-control" name="expiration_date" value={inputs.expiration_date} onChange={handleChange}  placeholder="Expiration Date" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 offset-sm-3">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</div>
  )
}

export default Coupon;
