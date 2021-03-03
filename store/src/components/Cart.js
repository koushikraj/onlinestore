import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/bs";
import DeleteIcon from '@material-ui/icons/Delete';
import cartImage from "../images/emptycart.png";
const Cart = (props) => {
    const {products,totalQuantities,totalPrice} = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userReducers);
    const checkoutHandler = () => {
        if(userSignin?.userInfo){
            alert("Your Data has been saved!");
           dispatch({type:'CLEAR'});
           props.history.push('/');
        }else{

            props.history.push("/signin?redirect=shipping");
        }
      }
    return (
        <div className="cart">
            <div className="container">
                <h3>Your cart</h3>
                {products.length > 0 ? <>
                <div className="row">
                    <div className="col-9">
                    <div className="cart__heading">
                        <div className="row">
                            <div className="col-2">Picture</div>
                            <div className="col-2">Name</div>
                            <div className="col-2">Price</div>
                            <div className="col-2">Total Price</div>
                            <div className="col-2">Inc/Dec</div>
                            <div className="col-2">Remove</div>
                        </div>
                    </div>
                    {products.map(product => (
                        <div className="row verticalAlign" key={product.id}>
                         <div className="col-2">
                             <div className="cart__image">
                                 <img src={`/images/${product.image}`} alt=""/>
                            </div>   
                         </div>
                         <div className="col-2">
                             <div className="cart__name">
                                 {product.name}
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__price">
                                 {currencyFormatter.format(product.discountPrice, {code: 'INR'})}
                             </div>
                         </div>
                         <div className="col-2">
                         <div className="details__info cart__incDec">
                    <div className="details__incDec">
                    <span className="dec" onClick={() => dispatch({type: 'DEC', payload: product.id})}><BsDash /></span>
    <span className="quantity">{product.quantity}</span>
    <span className="inc" onClick={() => dispatch({type: 'INC', payload: product.id})}><BsPlus/></span>
    </div>
                </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__total text-center">
                                 {currencyFormatter.format(product.discountPrice * product.quantity, {code: 'INR'})}
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__remove" onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>
                                 <DeleteIcon />
                             </div>
                         </div>
                        </div>
                    ))}
                    </div>
                    <div className="col-3 summary-col">
                        <div className="summary">
                            <div className="summary__heading">
                                Summary
                            </div>
                            <div className="summary__details">
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Total Items:
                                    </div>
                    <div className="col-6">{totalQuantities}</div>
                                </div>
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Total Price
                                    </div>
                                    <div className="col-6">
                                        {currencyFormatter.format(totalPrice, {code: 'INR'})}
                                    </div>
                                </div>
                                <button type="button" onClick={checkoutHandler} className="checkout">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
                </> : <div className="row">
                <img className="cart__image" src={cartImage} alt="image "/>
                </div>}
            </div>
        </div>
    )
}

export default Cart
