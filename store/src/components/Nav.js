import React from 'react';
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';
import Button from '@material-ui/core/Button';

const Nav = (props) => {
    const { totalQuantities } = useSelector(state => state.CartReducer)
    const userSignin = useSelector(state => state.userReducers);
    //console.log(totalQuantities);
    const dispatch = useDispatch();
    const onClickHandler = (e) => {
        e.preventDefault();
        dispatch(logout());
        dispatch({type:'CLEAR'});
        //props.history.push('/signin');
    }
    return (
        <div className="nav">
            <div className="nav__container">
                <div className="nav__left">
                    <Link to="/"><img src="/images/logo.svg" alt="logo" /> </Link>
                </div>

                    <div className="nav__middle__left">
                        {userSignin?.userInfo ? <div onClick={onClickHandler}><Button style={{paddingLeft:"0px"}} variant="outlined" color="primary">
                            Log out
      </Button></div> : <div><Link to="/signin"><Button variant="outlined" color="primary">
                                Sign In
      </Button></Link></div>}
                    </div>
                <div className="nav__right">
                   
                    <Link to="/cart">
                        <div className="basket">
                            <AddShoppingCartIcon className="cart-icon" />
                            <span>{totalQuantities}</span>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Nav
