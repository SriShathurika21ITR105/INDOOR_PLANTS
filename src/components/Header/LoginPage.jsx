// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './LoginPage.scss';
// import backgroundImage from "../../assets/images/backgroundImage.jpg"; // Import your background image

// class LoginPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: '',
//     };
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     // Your login logic can go here

//     // Show the alert box
//     alert('Successfully logged in'); // Changed the alert message

//     console.log('Login data:', this.state);
//   };

//   render() {
//     return (
//       <div className='cont' style={{ backgroundImage: `url(${backgroundImage})` }}>
//         <div className="login-container">
//           <h2 className="login-heading">Log In</h2>
//           <form onSubmit={this.handleSubmit} className="login-form">
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.handleInputChange}
//                 required
//                 className="input-field"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.handleInputChange}
//                 required
//                 className="input-field"
//               />
//             </div>
//             <div className="form-group">
//               <center>
//                 <button type="submit" className="login-button">
//                   <center>Login</center>
//                 </button>
//               </center>
//             </div>
//           </form>
//           <p className="login-info">
//             Don't have an account?<br />
//             <Link to="/SignupPage">Click to Signup</Link>.
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

// export default LoginPage;

// LoginPage.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import './LoginPage.scss';
// import backgroundImage from "../../assets/images/backgroundImage.jpg";

// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  
//   const navigate = useNavigate();
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       alert('Please fill in all fields'); 
//       return;
//     }

//     // Check the password
//     if (password === 'sri') {
//       // Password is correct, proceed with login
//       try {
//         const response = await fetch('/coachlog', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ username, password }),
//         });

//         if (response.ok) {
//           const data = await response.json();
//           localStorage.setItem('token', data.token);
   
//           alert('Login Successful');
//           navigate('/');
//         } else {
//           alert('Invalid username or password'); 
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred during login'); 
//       }
//     } else {
//       // Password is incorrect
//       alert('Invalid password'); 
//     }
//   };

//   const backgroundImageUrl = 'https://img.freepik.com/premium-photo/modern-loft-empty-living-room-interior-design-black-pattern-wall-background_221619-1792.jpg?w=1060';

//   return (
//     <div className='log' style={{
//       backgroundImage: `url(${backgroundImageUrl})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     }}>
//       <div className="login-container">
//         <div className="login-content">
//           <div className="login-form">
//             <h2>Sign In</h2>
//             <br></br>
//             <form onSubmit={handleLogin}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   id="input1"
//                   name="input1"
//                   required
//                   placeholder="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   id="input2"
//                   name="input2"
//                   required
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <button type="submit">Login</button><br/><br/>
//               Don't have an account? <Link to='/SignupPage' style={{color:"#007FFF", textDecoration:"none", fontSize: "15px"}}>Create a new account</Link>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginPage.scss';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Replace this hardcoded password check with your secure authentication method
    if (password === 'sri') {
      // For demo purposes, the password 'subhi' grants access
      localStorage.setItem('token', 'yourGeneratedTokenHere');
      alert('Login Successful');
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  const backgroundImageUrl = 'https://img.freepik.com/premium-photo/modern-loft-empty-living-room-interior-design-black-pattern-wall-background_221619-1792.jpg?w=1060 '; // Replace with the actual image URL

  return (
    <div className='log' style={{
      backgroundImage: `url(${backgroundImageUrl})`, // Set the online image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="login-container">
        <div className="login-content">
          <div className="login-form">
            <h2>Sign In</h2>
            <p>“Relax we've got this!”</p>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  id="input1"
                  name="input1"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="input2"
                  name="input2"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Login</button>
              <br/><br/>
              Don't have an account?
              <Link to='/SignupPage' style={{color:"#007FFF", textDecoration:"none", fontSize: "15px"}}>
                Create a new account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

