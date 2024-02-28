import React, { useState } from 'react';
import classes from './LoginSignupPage.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthAction } from '../../Store/Auth-Slice';


const Id = ''

export default function LoginSignupPage() {

  const dispatech = useDispatch()
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [enterName, setEnterName] = useState('');
  const [enteremail, setEnterEmail] = useState('');
  const [enterpassword, setEnterPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const toggleHandler = (e) => {
    setToggle(!toggle)
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let url;
      let details;

      if (!toggle) {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${Id}`
        details = {
          email: enteremail,
          password: enterpassword,
          returnSecureToken: true,
        }

      } else if (confirmPassword === enterpassword) {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${Id}`
        details = {
          email: enteremail,
          password: enterpassword,
          userName: enterName,
          returnSecureToken: true
        }
      } else {
        throw new Error('please check password')
      }

      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(details),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        if (data.idToken && data.email) {
          dispatech(AuthAction.loginHandler({ idToken: data.idToken, email: data.email }))
          window.alert('LogIn Successful !!!')
          setTimeout(() => {
            navigate('/home')
          }, 2000)
        } else {
          console.log('error to login')
        }

      } else {
        return res.json().then((data) => window.alert(data.error.message))
      }

    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
      <section className="vh-100" style={{ minHeight: '100vh' }}>
        <div className="container h-100" style={{ minHeight: '100vh' }}>
          <div className="row d-flex justify-content-center align-items-center h-100" style={{ minHeight: '100vh' }}>
            <div className="card text-black rounded">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{toggle ? `Sign up` : `Log In`}</p>

                  <form className="mx-1 mx-md-4" onSubmit={submitHandler} style={{ minHeight: '70vh' }}>

                    {toggle ? <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                        <input type="text" id="form3Example1c" className="form-control" value={enterName} onChange={(e) => setEnterName(e.target.value)} required />
                      </div>
                    </div> : ''}
                    
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        <input type="email" id="form3Example3c" className="form-control" value={enteremail} onChange={(e) => setEnterEmail(e.target.value)} required />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                        <input type="password" id="form3Example4c" className="form-control" value={enterpassword} onChange={(e) => setEnterPassword(e.target.value)} required />
                      </div>
                    </div>
                    {toggle ? <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example1c">Confirm Password</label>
                        <input type="password" id="form3Example1c" className="form-control" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} required />
                      </div>
                    </div> : ''}

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg" disabled={!enterpassword ^ !enteremail}>{toggle ? `Register` : `LogIn`}</button>
                    </div>

                  </form>
                  
                  <Link to='/forgetPassword' className={classes['toggle']} style={{ textDecoration: 'none' }}>Forget Passsword</Link>

                  <div className={classes['already']} onClick={toggleHandler}>
                    <div className='d-flex justify-content-center mt-3'><p>{toggle ? `Have an Account ? LogIn` : 'New Here ? Register'}</p></div>
                  </div>

                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Samplelogin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}