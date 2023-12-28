import axios from "axios"
import { useEffect, useState } from "react";
import Nav from "../Layout/Nav";
import Footer from "../Layout/Footer";

export default function Blogs() {
    const [blog, setBlogs] = useState([]);
     const [inputs, setInputs] = useState([]);

    useEffect(() => {
        getDatas();
    }, []);
    function getDatas() {
        axios.get(`${global.config.apiUrl}blog`).then(function (response) {
            setBlogs(response.data.data);
        });
    }


    const deleteUser = (id) => {
        axios.delete(`${global.config.apiUrl}blog/delete/${id}`).then(function (response) {
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
        axios.post(`${global.config.apiUrl}blog/create`, inputs).then(function (response) {
            console.log(response.data)
            getDatas();
            if (response.data.status == 1)
                document.getElementById('modelbutton').click();
        });
    }
    const clearData = () => {  
        setInputs(values => ({ ...values, "id": "", "title": "", "author": "", "image": "", "short_description": "", "description": "",}))
    }


    /* for update */

    function getSingleBlog(tdata) {
            setInputs(tdata);
            setInputs(values => ({ ...values, "image": "" }))
        
    }

    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1><small>Blog List</small></h1>
                        <div className="row">
                            <div className="col-2 offset-sm-10">
                                <button onClick={clearData} id="modelbutton" type="button" className="btn btn-primary btn-sm float-end" data-toggle="modal" data-target="#myModal">
                                    Add Blog
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
                                    <th>Title</th>
                                    <th>Short Description</th>
                                    <th>Long Description</th>
                                    <th>Author</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blog.map((d, key) =>
                                    <tr key={key}>
                                        <td>{d.id}</td>
                                        <td>{d.title}</td>
                                        <td>{d.short_description}</td>
                                        <td>{d.description}</td>
                                        <td>{d.author}</td>
                                        <td><img src={global.config.apiUrl + d.image} alt="" width={50} /></td>
                                        <td>
                                            <a href="javascript:void(0)" className="btn btn-primary me-2"  data-toggle="modal" data-target="#myModal" onClick={() => getSingleBlog(d)} >Edit</a><br/><br/>
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
                                        <h4 className="modal-title">Blog Data</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>


                                    <div className="modal-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Title</label>
                                                        <input value={inputs.title} type="text" className="form-control" name="title" onChange={handleChange} />
                                                        <input value={inputs.id} type="hidden" name="id" />
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
                                                        <textarea className="form-control" name="description" onChange={handleChange} value={inputs.description} ></textarea>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-sm-4">
                                                    <div className="mb-3">
                                                        <label className="form-label">Author</label>
                                                        <input type="text" className="form-control" name="author" value={inputs.author} onChange={handleChange} />
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