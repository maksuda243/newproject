import React, { useEffect, useState } from "react"
import { useCart } from "react-use-cart";

const Allproducts = () => {
  const [products, setProducts] = useState([])
  const { addItem } = useCart(); 

  const fetchProductsData = () => {
    fetch(`${global.config.apiUrl}product`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setProducts(data.data)
      })
      
  }
  useEffect(() => {
    fetchProductsData()
  }, []);

  return (
    <>
      {products.length > 0 && (
        <div className="row">
          {products.map(p => (
            <div className="col-lg-4 col-md-6 col-sm-6"  key={p.id}>
            <div className="product__item sale">
            <div className="product__item__pic" style={{ backgroundImage: `url('${global.config.apiUrl + p.image}')` }}>
                    <span className="label">Sale</span>
                    <ul className="product__hover">
                        <li><a href="#"><img src="assets/img/icon/heart.png" alt=""/></a></li>
                        <li><a href="#"><img src="assets/img/icon/compare.png" alt=""/> <span>Compare</span></a>
                        </li>
                        <li><a href="#"><img src="assets/img/icon/search.png" alt=""/></a></li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6>{p.name}</h6>
                    <a href="" onClick={() => addItem(p)} className="add-cart" >+ Add To Cart</a>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <h5> BDT {p.price}</h5>
                    <div className="product__color__select">
                        <label for="pc-7">
                            <input type="radio" id="pc-7"/>
                        </label>
                        <label className="active black" for="pc-8">
                            <input type="radio" id="pc-8"/>
                        </label>
                        <label className="grey" for="pc-9">
                            <input type="radio" id="pc-9"/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Allproducts;