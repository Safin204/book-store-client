// /** @format */

// import "./Login.css";
// import {
//   useAuthState,
//   useSignInWithEmailAndPassword,
//   useSignInWithFacebook,
//   useSignInWithGithub,
//   useSignInWithGoogle
// } from "react-firebase-hooks/auth";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
// import showPwdImg from "./show-password.svg";
// import hidePwdImg from "./hide-password.svg";

// import { Link, useLocation, useNavigate } from "react-router-dom";
// import auth from "../firebase.init";
// import { useState } from "react";
// import Loading from "../Loading/Loading";
// import { Helmet } from "react-helmet-async";
// import axios from "axios";
// import useToken from "../useToken";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [user] = useAuthState(auth);
//   const [token] = useToken(user);
//   const [pwd, setPwd] = useState("");
//   const [isRevealPwd, setIsRevealPwd] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location?.state?.from.pathname || "/";

//   const handleEmail = (event) => {
//     setEmail(event.target.value);
//   };
//   console.log(user);
//   if (token) {
//     navigate(from, { replace: true });
//   }

//   const [signInWithEmailAndPassword, EmailPassuser, loading, error] =
//     useSignInWithEmailAndPassword(auth);
//   // console.log(error);
//   const [signInWithGoogle, googleUser, googleLoading, googleError] =
//     useSignInWithGoogle(auth);
//   const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
//     useSignInWithFacebook(auth);
//   const [signInWithGithub, gihubUser, githubLoading, githubError] =
//     useSignInWithGithub(auth);
//   const [sendPasswordResetEmail, sending, forgotError] =
//     useSendPasswordResetEmail(auth);

//   const handleSignIn = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.pwd.value;
//     await signInWithEmailAndPassword(email, password);

//     //////////////for tokken/////////////////////
//     // const { data } = await axios.post(
//     //   "http://bo:5000/login",
//     //   { email }
//     // );
//     // /////////////////
//     // localStorage.setItem("accessToken", data.accessToken);
//     // navigate(from, { replace: true });
//   };

//   // if(user){
//   //   const { data } = await axios.post(
//   //     "https://whispering-beyond-20921.herokuapp.com/login",
//   //     { email }
//   //   );
//   //   /////////////////
//   //   localStorage.setItem("accessToken", data.accessToken);
//   //   navigate(from, { replace: true });
//   // }

//   const handleGoogleSign = () => {
//     signInWithGoogle();
//   };
//   const handleFacebookSign = () => {
//     signInWithFacebook();
//   };
//   const handleGithubSign = () => {
//     signInWithGithub();
//   };

//   if (EmailPassuser || googleUser || facebookUser || gihubUser) {
//     navigate(from, { replace: true });
//   }

//   if (loading || googleLoading || facebookLoading || githubLoading) {
//     return <Loading></Loading>;
//   }
//   let errorElement;
//   if (error || googleError || facebookError || githubError || forgotError) {
//     errorElement = (
//       <p className="text-danger  " style={{ color: "red" }}>
//         Error: {error?.message} {googleError?.message} {facebookError?.message}{" "}
//         {githubError?.message} {forgotError?.message}
//       </p>
//     );
//   }
//   // {errorElement}

//   return (
//     <div className="container mt-4  ">
//       <div className="row">
//         <div className="col-6  offset-md-3">
//           <div className=" form-card  mb-5">
//           <form
//               onSubmit={handleSignIn}
//               className="login-card cardbody-color p-lg-5 "
//             >
//               <div className="text-center">
//                 <img
//                   src="https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?w=360"
//                   className="img-fluid profile-image-pic my-3"
//                   alt="profile"
//                 />
//               </div>

//               <div className="mb-3 ">
//                 <input
//                   type="email"
//                   name="email"
//                   onChange={handleEmail}
//                   className="form-control"
//                   id="Username"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter Email"
//                   required
//                 />
//               </div>
//               <div className="mb-3 pwd-container w-100">
//                 <input
//                   style={{ width: "100%" }}
//                   className="form-control"
//                   id="password"
//                   name="pwd"
//                   placeholder="Enter Password"
//                   type={isRevealPwd ? "text" : "password"}
//                   value={pwd}
//                   required
//                   onChange={(e) => setPwd(e.target.value)}
//                 />
//                 <img
//                   title={isRevealPwd ? "Hide password" : "Show password"}
//                   src={isRevealPwd ? hidePwdImg : showPwdImg}
//                   onClick={() => setIsRevealPwd((prevState) => !prevState)}
//                 />
//               </div>

//               {errorElement}
//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="btn login   btn-color px-5  w-100"
//                 >
//                   Login
//                 </button>
//               </div>
//               <div className="text-center mb-4 m-0 p-0 d-flex justify-content-between align-items-center">
//                 {" "}
//                 <button
//                   className="btn "
//                   onClick={async () => {
//                     if (email) {
//                       await sendPasswordResetEmail(email);
//                       toast("Sent email");
//                     } else {
//                       toast("pls enter your email address");
//                     }
//                   }}
//                 >
//                   <a className="anchor " href="#g">
//                     Forgot Password?
//                   </a>
//                 </button>{" "}
//                 <div className="signup">
//                   <Link className="anchor" to="/register">
//                     Create a Account
//                   </Link>
//                 </div>
//               </div>

//               {/* <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
//                   Registered? <a href="#m" className="text-dark fw-bold"> Create an
//                     Account</a>
//                 </div> */}

//               <div className="social-site-logIn d-flex flex-column justify-content-center align-items-center">
//                 <button
//                   onClick={handleFacebookSign}
//                   className="btn p-0 m-3  w-100  "
//                 >
//                   <img
//                     style={{ width: "40px", height: "40px" }}
//                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9HWZM9UY81S4z09fgxSIqkq8Xd4OpAU5CHkbU7T46Zob5EVpG+w9ZBVJBjcKB/ibBOYJjn6fGwt85ebZ/w8fZreabU1+RUZJrFytt0gKrl5+/N0eBZaZ1dbJ9LXZe5vtOTm7yhqcUVgHx+AAAEAUlEQVR4nO2d6XarIBRGDQ4xBI1mTlozvf9DtmmzbtNGUC6DHNe3fyfgXijo4QBRBAAAAAAAAAAAAAAAAAAAAAAAAAAAADAn8Ytnu+WqavLUJ+ft9d2f5eGY81JM/FLmcX1devGbLnjp2e6BYHzuoR3n6UB+X7B659gv2fIB/T4RfOVWcJEPK/hJ7FQxAEG3ihUb2u4L7uxZLOKh3b4RtaMeNfE9BEphVzeG8zDu0TvcydCfnIf2+sFNI14GHgmfcfMkHod8l/lL/G5fMAlhKPxH7uA23QUyVHxTbu0bhvQY3rH/IGbhjBV30vEb2h8RAzOMpzCEIQytI14Yj6HIORfn/eIvucqRjqFgfD27TDctNS7XCkUqhmW6zt6kVb4pXhRpGIp4q4641PJGJGHI110RJdqGgmeddZI2FKJHSJCyYXlu6z1HZFju+wgSNhR1v28fuoa8ZxyJrCG/9ayTqqHY962TqmH/WCdRw/LYu06ihn27GbKGYt2/TpqGrPt1lLghl38PvqCYCwrXsP9QEUUHxURCuIYdc5vJZrl5sFzRjNPwQl5FUZ3qn18KZYXhGsbSxzBLedkRQqRhKCu/0pufDNZQ2tHcNCdgwzWUzN1udGeYgzUsq/bSV7ozzMEayjIMtBM9wjWct5euXRA5Q+00CGqGCQxhCEMYwhCGMIQhDGEIQxiqEYw/kUoMU/4KoxEvLfdZ8Ywkx+RSvHLbU4jqi6ZX0kU7yZ7AzIzGZGELiomLYAxzo5T6TTp2w6k8ijoSw/HfpSt5nSMxnMvXy43EUBEJH4nhicB4aGZIYR7fzFA+HAZkqJFb8gKJ1QjMZIOHdwp3KTO5kIKCITe5kJuiymAMjdpwplggH4yhURtuKXwBG7VhQ2HtmkkbJrWi4HAMDUaLJYlIlCwzoQ/KHJtgDCf5f29bVSiz+MIxnLDmeW3vWpIxdHpZBdyo6wvI8PcibSbJ+ronXuos5Q7K8BeyvDbtwmEIQxjCEIYwhCEMYQhDGOobks6ngSEMYQhDGMJQFzbC/NLfjDGDFoYwhCEMYQhDGDozdLCvviIjeQhDZt9QtWmTf0PRWBfU31/FqaEsZmeEKkPJu6GT8+WsHPdky9As91jC1MaDaMnQxTEzkTpV0LMhPzgx3FloRDuG4uREMIoq8yOf7Bg6eKF5XMfEuDu1YsgN0gE7MD/VyoZh7qab+cb4xcaCYb5wemLuITa7Uc0N2cnxkcC7iVF3Y2wYV87PPE6q2GBcNDRkQrE5qD12W/VmAK4MSz7xcWj1F9N5k3LGcn1i2Z4KHf9jPObHi8Hafn02h1U206e6tBtW6r9ds8vO39nxAAAAAAAAAAAAAAAAAAAAAAAAAAAAjJcPriR27CHd9lQAAAAASUVORK5CYII="
//                     alt=""
//                   />
//                   Sign In With Facebook
//                 </button>
//                 <button
//                   onClick={handleGithubSign}
//                   className="btn  p-0   w-100 "
//                 >
//                   <img
//                     style={{ width: "40px", height: "40px" }}
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JHP_ZU-606Tcj8clDo0chONPuvAgQsV2UA&usqp=CAU"
//                     alt=""
//                   />
//                   <span className="">Sign In With Github</span>
//                 </button>
//                 <button
//                   className="  p-0 m-3  w-100 "
//                   onClick={handleGoogleSign}
//                 >
//                   <img
//                     style={{ width: "37px", height: "37px" }}
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQVCvwLClys3Jnzm_KA1AZLdeU8ikVqmlLHBqEqMk2a72vyXEuqKuGlfralOOsu_oM8Q&usqp=CAU"
//                     alt=""
//                   />
//                   Sign In With Google
//                 </button>
//                 <ToastContainer />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Helmet>
//         <title>login</title>
//       </Helmet>
//     </div>
//   );
// };
// export default Login;


/** @format */

import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import showPwdImg from "./show-password.svg";
import hidePwdImg from "./hide-password.svg";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useState } from "react";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");

  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from.pathname || "/";

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  console.log(email);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  console.log(error);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, gihubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [sendPasswordResetEmail, sending, forgotError] =
    useSendPasswordResetEmail(auth);

  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.pwd.value;
    await signInWithEmailAndPassword(email, password);

    //for tokken
    const { data } = await axios.post(
      "https://whispering-beyond-20921.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  if (user || googleUser || facebookUser || gihubUser) {
    navigate(from, { replace: true });
  }

  if (loading || googleLoading || facebookLoading || githubLoading) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (error || googleError || facebookError || githubError || forgotError) {
    errorElement = (
      <p className="text-danger  " style={{color:"red"}}>
        Error: {error?.message} {googleError?.message} {facebookError?.message}{" "}
        {githubError?.message} {forgotError?.message}
      </p>
    );
  }
  // {errorElement}

  return (
    <div className="container mt-4  ">
      <div className="row">
        <div className="col-md-6  offset-md-3">
          <div className="form-card  mb-5">
            <form
              onSubmit={handleSignIn}
              className=" login-card cardbody-color shadow-lg p-lg-5 "
            >
              <div className="text-center">
                <img
                  src="https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?w=360"
                  className="img-fluid profile-image-pic my-3"
                  
                  alt="profile"
                />
              </div>

              <div className="mb-3 ">
                <input
                  type="email"
                  name="email"
                  onChange={handleEmail}
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="mb-3 pwd-container w-100">
                <input
                  style={{ width: "100%" }}
                  className="form-control"
                  id="password"
                  name="pwd"
                  placeholder="Enter Password"
                  type={isRevealPwd ? "text" : "password"}
                  value={pwd}
                  required
                  onChange={(e) => setPwd(e.target.value)}
                />
                <img
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                />
              </div>

              {errorElement}
              <div className="text-center">
                <button type="submit" className="btn login   btn-color px-5  w-100">
                  Login
                </button>
              </div>
              <div className="text-center mb-4 m-0 p-0 d-flex justify-content-between align-items-center">
                {" "}
                <button
                  className="btn "
                  onClick={async () => {
                    if (email) {
                      await sendPasswordResetEmail(email);
                      toast("Sent email");
                    } else {
                      toast("pls enter your email address");
                    }
                  }}
                >
                  <a className="anchor " href="#g">
                    Forgot Password?
                  </a>
                </button>{" "}
                <div className="signup">
                  <Link className="anchor text-black" to="/register">Create a Account</Link>
                </div>
              </div>

              {/* <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
                  Registered? <a href="#m" className="text-dark fw-bold"> Create an
                    Account</a>
                </div> */}
           
              <div className="social-site-logIn d-flex flex-column justify-content-center align-items-center">
                <button
                  onClick={() => signInWithFacebook()}
                  className="btn p-0 m-3  w-100  "
                >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9HWZM9UY81S4z09fgxSIqkq8Xd4OpAU5CHkbU7T46Zob5EVpG+w9ZBVJBjcKB/ibBOYJjn6fGwt85ebZ/w8fZreabU1+RUZJrFytt0gKrl5+/N0eBZaZ1dbJ9LXZe5vtOTm7yhqcUVgHx+AAAEAUlEQVR4nO2d6XarIBRGDQ4xBI1mTlozvf9DtmmzbtNGUC6DHNe3fyfgXijo4QBRBAAAAAAAAAAAAAAAAAAAAAAAAAAAADAn8Ytnu+WqavLUJ+ft9d2f5eGY81JM/FLmcX1devGbLnjp2e6BYHzuoR3n6UB+X7B659gv2fIB/T4RfOVWcJEPK/hJ7FQxAEG3ihUb2u4L7uxZLOKh3b4RtaMeNfE9BEphVzeG8zDu0TvcydCfnIf2+sFNI14GHgmfcfMkHod8l/lL/G5fMAlhKPxH7uA23QUyVHxTbu0bhvQY3rH/IGbhjBV30vEb2h8RAzOMpzCEIQytI14Yj6HIORfn/eIvucqRjqFgfD27TDctNS7XCkUqhmW6zt6kVb4pXhRpGIp4q4641PJGJGHI110RJdqGgmeddZI2FKJHSJCyYXlu6z1HZFju+wgSNhR1v28fuoa8ZxyJrCG/9ayTqqHY962TqmH/WCdRw/LYu06ihn27GbKGYt2/TpqGrPt1lLghl38PvqCYCwrXsP9QEUUHxURCuIYdc5vJZrl5sFzRjNPwQl5FUZ3qn18KZYXhGsbSxzBLedkRQqRhKCu/0pufDNZQ2tHcNCdgwzWUzN1udGeYgzUsq/bSV7ozzMEayjIMtBM9wjWct5euXRA5Q+00CGqGCQxhCEMYwhCGMIQhDGEIQxiqEYw/kUoMU/4KoxEvLfdZ8Ywkx+RSvHLbU4jqi6ZX0kU7yZ7AzIzGZGELiomLYAxzo5T6TTp2w6k8ijoSw/HfpSt5nSMxnMvXy43EUBEJH4nhicB4aGZIYR7fzFA+HAZkqJFb8gKJ1QjMZIOHdwp3KTO5kIKCITe5kJuiymAMjdpwplggH4yhURtuKXwBG7VhQ2HtmkkbJrWi4HAMDUaLJYlIlCwzoQ/KHJtgDCf5f29bVSiz+MIxnLDmeW3vWpIxdHpZBdyo6wvI8PcibSbJ+ronXuos5Q7K8BeyvDbtwmEIQxjCEIYwhCEMYQhDGOobks6ngSEMYQhDGMJQFzbC/NLfjDGDFoYwhCEMYQhDGDozdLCvviIjeQhDZt9QtWmTf0PRWBfU31/FqaEsZmeEKkPJu6GT8+WsHPdky9As91jC1MaDaMnQxTEzkTpV0LMhPzgx3FloRDuG4uREMIoq8yOf7Bg6eKF5XMfEuDu1YsgN0gE7MD/VyoZh7qab+cb4xcaCYb5wemLuITa7Uc0N2cnxkcC7iVF3Y2wYV87PPE6q2GBcNDRkQrE5qD12W/VmAK4MSz7xcWj1F9N5k3LGcn1i2Z4KHf9jPObHi8Hafn02h1U206e6tBtW6r9ds8vO39nxAAAAAAAAAAAAAAAAAAAAAAAAAAAAjJcPriR27CHd9lQAAAAASUVORK5CYII="
                    alt=""
                  />
                  Sign In With Facebook
                </button>
                <button onClick={() => signInWithGithub()} className="btn  p-0  w-100 ">
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JHP_ZU-606Tcj8clDo0chONPuvAgQsV2UA&usqp=CAU"
                    alt=""
                  />
                    <span className="">Sign In With Github</span>
                </button>
                <button
                  className="btn  p-0 m-3 bg-white  w-100 "
                  onClick={() => signInWithGoogle()}
                >
                  <img
                    style={{ width: "37px", height: "37px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQVCvwLClys3Jnzm_KA1AZLdeU8ikVqmlLHBqEqMk2a72vyXEuqKuGlfralOOsu_oM8Q&usqp=CAU"
                    alt=""
                  />
                    Sign In With Google
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Helmet>
        <title>login</title>
      </Helmet>
    </div>
  );
};
export default Login;
