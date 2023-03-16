import React, { Fragment, useEffect, useState } from "react";
import { getProductDetails, clearErrors } from "../../action/productAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { addItemToCart } from "../../action/cartActions";
import "./ProductDetails.css"

function ProductDetails() {

    const [quantity, setQuantity] = useState(1)

    const params = useParams();
    const dispatch = useDispatch();

    const { loading, error, product } = useSelector(state => state.productDetails)

    useEffect(() => {
        dispatch(getProductDetails(params.id))



        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, error, params.id])


    function addToCart() {
        dispatch(addItemToCart(params.id, quantity))
        toast.success("Item Added to Cart")
    }

    function increaseQty() {
        const count = document.querySelector(".count")

        if (count.valueAsNumber >= product.stock) return;

        const qty = count.valueAsNumber + 1
        setQuantity(qty)
    }

    function decreaseQty() {
        const count = document.querySelector(".count")

        if (count.valueAsNumber <= 1) return;
        //if count is <1 then stop
        //else
        const qty = count.valueAsNumber - 1
        setQuantity(qty)


    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={product.name} />
                    <div className="row f-flex justify-content-around">
                        <div className="col-12 col-lg-5 img-fluid" id="product_image">
                            <Carousel pause="hover">
                                {product.images && product.images.map(image => (
                                    <Carousel.Item key={image.public_id}>
                                        <img className="d-block w-100" src={image.url} alt={product.title} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>

                        <div className="col-12 col-lg-5 mt-5 productDetails">

                            <div className="productDesc">
                                <p>Run order products</p>
                                <h2>{product.name}</h2>


                                <p>{product.description}</p>

                                <div className="productAvalablity">
                                    <h2>N {product.price}</h2>
                                    <p>Status:  <span id="stock_status" className={product.stock > 0 ? "greenColor" : "redColor"}>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span></p>
                                </div>

                                <h4>Currently Available only at : {product.seller}</h4>

                            </div>

                            <div className="productInput col-lg-6">
                                <span onClick={decreaseQty}>-</span>
                                <input type="number" className="form-control count" value={quantity} readOnly />

                                <span onClick={increaseQty}>+</span>

                            </div>
                            <div className="productButton col-lg-6">
                                <button
                                    disabled={product.stock === 0} onClick={addToCart}
                                ><span ><i class="fa-solid fa-cart-shopping"></i></span>   Add to cart</button>
                            </div>

                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}




export default ProductDetails








// <h3>{product.name}</h3>
// <p id="product_id">Product # {product._id}</p>

// <hr />

// <div className="rating-outer">
//     <div className="rating-inner" style={{ width: `${(product.rating / 5) * 100}%` }}></div>
// </div>
// <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>

// <hr />

// <p id="product_price">N{product.price}</p>
// <div className="stockCounter d-inline">
//     <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

//     <input type="number" className="form-control count d-inline" value={quantity} readOnly />

//     <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
// </div>
// <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4"
//     disabled={product.stock === 0} onClick={addToCart}>Add to Cart</button>

// <hr />

// <p>Status: <span id="stock_status" className={product.stock > 0 ? "greenColor" : "redColor"}>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span></p>

// <hr />

// <h4 className="mt-2">Description:</h4>
// <p>{product.description}</p>
// <hr />
// <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>

// {/* <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
//     Submit Your Review
// </button> */}

// <div className="row mt-2 mb-5">
//     <div className="rating w-50">

//         <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="ratingModalLabel">Submit Review</h5>
//                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">

//                         <ul className="stars" >
//                             <li className="star"><i className="fa fa-star"></i></li>
//                             <li className="star"><i className="fa fa-star"></i></li>
//                             <li className="star"><i className="fa fa-star"></i></li>
//                             <li className="star"><i className="fa fa-star"></i></li>
//                             <li className="star"><i className="fa fa-star"></i></li>
//                         </ul>

//                         <textarea name="review" id="review" className="form-control mt-3">

//                         </textarea>

//                         <button className="btn my-3 float-right review-btn px-4 text-white" data-dismiss="modal" aria-label="Close">Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </div>

// </div>