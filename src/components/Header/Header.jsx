// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import "./header.scss";
// import { HiShoppingCart } from "react-icons/hi";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoCloseSharp } from "react-icons/io5";
// import { useDispatch, useSelector } from 'react-redux';
// import { handleCategory } from '../../store/features/filterSlice';
// import LoginPage from './LoginPage';
// // import { FiHome } from "react-icons/fi"; // Import the Home icon

// const Header = () => {
//     const [hamburger, setHamburger] = useState(true);
//     const [nav, setNav] = useState(false);
//     const [showLogin, setShowLogin] = useState(false); 

//     const cart = useSelector((state) => state.cart.cart);
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const getTotalQuantity = () => {
//         let total = 0;
//         cart.forEach((item) => {
//             total += item.quantity;
//         });
//         return total;
//     };
//     const getTotalPrice = () => {
//         let total = 0;
//         cart.forEach((item) => {
//             total += Math.round(item.price) * item.quantity;
//         });
//         return total;
//     };
//     const changeCategory = (category) => {
//         dispatch(handleCategory(category));
//         navigate('/shop')
//     };
//     const closeHamburger = () => {
//         setNav(false);
//         setHamburger(true)
//     };
//     const openHamburger = () => {
//         setNav(true);
//         setHamburger(false)
//     };
//     const toggleLogin = () => {
//         setShowLogin(!showLogin); // Toggle the login form visibility
//     };

//     return (
//         <header className='bg-grey'>
//             <div className="page-container">
//                 <div className="header-content">
//                     <div className="header-left">
//                         <Link to="/">
//                             <button className='clean-button'style={{ marginRight: '30px' }}>
//                                 {/* <FiHome />  Home icon */}
//                                 Home
//                             </button>
//                         </Link>
//                         <button className='clean-button' onClick={() => { changeCategory("All") }}style={{ marginRight: '30px' }}> All Plants</button>
//                         <button className='clean-button' onClick={() => { changeCategory("Flowering") }}style={{ marginRight: '30px' }}>Flowering</button>
//                         <button className='clean-button' onClick={() => { changeCategory("Foliage") }}style={{ marginRight: '30px' }}>Foliage</button>
//                         <button className='clean-button' onClick={() => { changeCategory("Succulents") }}style={{ marginRight: '30px' }}>Succulents</button>
//                         <button className='clean-button' onClick={() => { changeCategory("Cacti") }}style={{ marginRight: '30px' }}>Cacti</button>
//                         <button className='clean-button' onClick={() => { changeCategory("Beautiful Pots") }}>Beautiful Pots</button>
//                     </div>
//                     <div className="header-right">
//                         <p className='price'>₹{getTotalPrice()}.00</p>
//                         <div className='cart'>
//                             <Link to="/cart"></></Link>
//                             <p className='cart-quantity'>{getTotalQuantity()}</p>
//                         </div>
//                         <br></br>
//                         <div><li><Link to="./LoginPage"><button>Login</button></Link></li></div>
//                     </div>
//                 </div>
//             </div>
//             <ul className={nav ? 'mobile-nav open-nav  list-unstyled m-0' : 'mobile-nav list-unstyled m-0'}>
//                 <li><button className='clean-button' onClick={() => { changeCategory("All"); closeHamburger() }}>All Plants</button></li>
//                 <li><button className='clean-button' onClick={() => { changeCategory("Flowering"); closeHamburger() }}>Flowering</button></li>
//                 <li><button className='clean-button' onClick={() => { changeCategory("Foliage"); closeHamburger() }}>Foliage</button></li>
//                 <li><button className='clean-button' onClick={() => { changeCategory("Succulents"); closeHamburger() }}>Succulents</button></li>
//                 <li><button className='clean-button' onClick={() => { changeCategory("Cacti"); closeHamburger() }}>Cacti</button></li>
//                 <li><button className='clean-button' onClick={() => { changeCategory("Beautiful Pots"); closeHamburger() }}>Beautiful Pots</button></li>
//             </ul>
//             <br></br>
//             {showLogin && <LoginPage />}
//         </header>
//     )
// }

// export default Header;

import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./header.scss";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { handleCategory } from '../../store/features/filterSlice';
import LoginPage from './LoginPage';
import { FiHome } from "react-icons/fi"; 
import logo from "../../assets/images/logo.png";

const Header = () => {
    const [hamburger, setHamburger] = useState(true);
    const [nav, setNav] = useState(false);
    const [showLogin, setShowLogin] = useState(false); 

    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += Math.round(item.price) * item.quantity;
        });
        return total;
    };

    const changeCategory = (category) => {
        dispatch(handleCategory(category));
        navigate('/shop')
    };

    const closeHamburger = () => {
        setNav(false);
        setHamburger(true)
    };

    const openHamburger = () => {
        setNav(true);
        setHamburger(false)
    };

    const toggleLogin = () => {
        setShowLogin(!showLogin); // Toggle the login form visibility
    };
    const [user, setUser] = useState(null);

    useEffect(() => {
      // Fetch user details from the server using the JWT token
      const token = localStorage.getItem('token');
      if (token) {
        fetch('/getUserDetails', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setUser(data);
          })
          .catch((error) => {
            console.error('Error fetching user details:', error);
          });
      }
    }, []);
    return (
        <header className='bg-grey'>
            <div className="page-container">
                <div className="header-content">
                    <div className="header-left">
                        <Link to="/">
                            {/* Add the logo */}
                            <img src={logo} alt="Logo" style={{ width:'60px',height:'60px',marginRight:'10px' }} />

                            <button className='clean-button' style={{ marginRight: '5px' }}>
                                {/* <FiHome />  */}
                                
                                Home
                            </button></Link>
                            {/* <button className='clean-button' onClick={() => { changeCategory("All") }} style={{ marginRight: '10px' }}> All Plants</button> */}
                            <button className='clean-button' onClick={() => { changeCategory("Flowering") }} style={{ marginRight: '10px' }}>Flowering</button>
                            <button className='clean-button' onClick={() => { changeCategory("Foliage") }} style={{ marginRight: '10px' }}>Foliage</button>
                            <button className='clean-button' onClick={() => { changeCategory("Succulents") }} style={{ marginRight: '10px' }}>Succulents</button>
                            <button className='clean-button' onClick={() => { changeCategory("Cacti") }} style={{ marginRight: '10px' }}>Cacti</button>
                            <button className='clean-button' onClick={() => { changeCategory("Beautiful Pots") }}>Beautiful Pots</button>
                        
                    </div>
                    <div className="header-right">
                        <p className='price'>₹{getTotalPrice()}.00</p>
                        <div className='cart'>
                            <Link to="/cart"><HiShoppingCart /></Link>
                            <p className='cart-quantity'>{getTotalQuantity()}</p>
                        </div>
                        <br></br>
                        <div><Link to="./LoginPage" ><button>Login</button></Link></div>
                    </div>
                </div>
            </div>
            <ul className={nav ? 'mobile-nav open-nav  list-unstyled m-0' : 'mobile-nav list-unstyled m-0'}>
                {/* <li><button className='clean-button' onClick={() => { changeCategory("All"); closeHamburger() }}>All Plants</button></li> */}
                <li><button className='clean-button' onClick={() => { changeCategory("Flowering"); closeHamburger() }}>Flowering</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("Foliage"); closeHamburger() }}>Foliage</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("Succulents"); closeHamburger() }}>Succulents</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("Cacti"); closeHamburger() }}>Cacti</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("Beautiful Pots"); closeHamburger() }}>Beautiful Pots</button></li>
                <div>
                {user && (
        <div>
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details here */}
        </div>
      )}</div>
            </ul>
            <br></br>
            {showLogin && <LoginPage />}
        </header>
    )
}

export default Header;

