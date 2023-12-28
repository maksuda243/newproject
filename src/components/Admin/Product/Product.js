import axios from "axios"
import { useEffect, useState } from "react";
import Nav from "../Layout/Nav";
import Footer from "../Layout/Footer";

export default function Product() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    // const [coupons, setCoupons] = useState([]);
    const [inputs, setInputs] = useState([]);

    useEffect(() => {
        getDatas();
    }, []);
    function getDatas() {
        axios.get(`${global.config.apiUrl}product`).then(function (response) {
            setProducts(response.data.data);
        });
    }
    function getCategories() {
        axios.get(`${global.config.apiUrl}category`).then(function (response) {
            setCategories(response.data.data);
        });
    }
    function getBrand() {
        axios.get(`${global.config.apiUrl}brand`).then(function (response) {
            setBrands(response.data.data);
        });
    }
    // function getCoupons() {
    //     axios.get(`${global.config.apiUrl}coupon`).then(function (response) {
    //         setCoupons(response.data.data);
    //     });
    // }
    const deleteUser = (id) => {
        axios.delete(`${global.config.apiUrl}product/delete/${id}`).then(function (response) {
            getDatas();
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const onFileChange = (e) => {
        let files = e.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);

        fileReader.onload = (event) => {
            const name = "image";
            const value = event.target.result
            setInputs(values => ({ ...values, [name]: value }));
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${global.config.apiUrl}product/create`, inputs).then(function (response) {
            console.log(response.data)
            getDatas();
            if (response.data.status === 1)
                document.getElementById('modelbutton').click();
        });
    }
    const clearData = () => {
        getCategories();
        getBrand();
        setInputs(values => ({ ...values, "id": "", "discount": "", "price": "", "specification": "", "name": "", "image": "", "short_description": "", "long_description": "", "brand_id": "", "category_id": "" }))
    }


    /* for update */

    function getSingleProduct(d) {
        document.getElementById('modelbutton').click();
        
            setInputs(d);
            setInputs(values => ({ ...values, "image": "" }))
    
    }

    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1><small>Product List</small></h1>
                        <div className="row">
                            <div className="col-2 offset-sm-10">
                                <button onClick={clearData} id="modelbutton" type="button" className="btn btn-primary btn-sm float-end" data-toggle="modal" data-target="#myModal">
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((d, key) =>
                                    <tr key={key}>
                                        <td>{d.id}</td>
                                        <td>{d.name}</td>
                                        <td>{d.cname}</td>
                                        <td>{d.bname}</td>
                                        <td>{d.price}</td>
                                        <td><img src={global.config.apiUrl + d.image} alt="" width={50} /></td>
                                        <td>
                                            <a href="javascript:void(0)" className="btn btn-primary me-2" onClick={() => getSingleProduct(d)} >Edit</a>
                                            <a href="javascript:void(0)" className="btn btn-danger btn-xs" onClick={() => deleteUser(d.id)}>Delete</a>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>


                        <div className="modal" id="myModal">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Product Data</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>


                                    <div className="modal-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Name</label>
                                                        <input value={inputs.name} type="text" className="form-control" name="name" onChange={handleChange} />
                                                        <input value={inputs.id} type="hidden" name="id" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="mb-3">
                                                        <label className="form-label">Category</label>
                                                        <select className="form-control" name="category_id" onChange={handleChange}>
                                                            <option value="" key="">Select Category</option>
                                                            {categories.map((d, key) =>
                                                                <option selected={d.id === inputs.category_id} value={d.id} key={key}>{d.name}</option>
                                                            )}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="mb-3">
                                                        <label className="form-label">Brand</label>
                                                        <select className="form-control" name="brand_id" onChange={handleChange}>
                                                            <option value="" key="">Select Brand</option>
                                                            {brands.map((d, key) =>
                                                                <option selected={d.id === inputs.brand_id} value={d.id} key={key}>{d.name}</option>
                                                            )}
                                                        </select>
                                                    </div>
                                                </div>
                                            
                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Short Description</label>
                                                        <textarea className="form-control" name="short_description" onChange={handleChange} value={inputs.short_description}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Long Description</label>
                                                        <textarea className="form-control" name="long_description" onChange={handleChange} value={inputs.long_description} ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Specification</label>
                                                        <textarea className="form-control" name="specification" onChange={handleChange} value={inputs.specification} ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="mb-3">
                                                        <label className="form-label">Price</label>
                                                        <input type="text" className="form-control" name="price" value={inputs.price} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="mb-3">
                                                        <label className="form-label">Discount (%)</label>
                                                        <input type="text" className="form-control" name="discount" value={inputs.discount} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="mb-3">
                                                        <label className="form-label">Image</label>
                                                        <input type="file" className="form-control" name="image" onChange={onFileChange} />
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