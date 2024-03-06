import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userAction } from '../Store/User-Slice'
import classes from './NavBar.module.css'

const NavBar = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(userAction.logoutHandler())
    navigate('/')
  }
  return (
    <> {user.isLoggedIn &&
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Mail Box</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/home'><p className="nav-link">Home</p></Link>
            </li>
            <li className="nav-item">
              <Link to='/composemail'><p className="nav-link">Compose Mail</p></Link>
            </li>
            <li className="nav-item">
              <Link to='/sentmail'><p className="nav-link">Sent Mail</p></Link>
            </li>
            <li className="nav-item">
              <Link to='inbox'><p className="nav-link">Inbox</p></Link>
            </li>
          </ul>
        </div>
        <div className='d-flex justify-content-end'>
          <Link><button className='btn btn-outline-dark' onClick={clickHandler}>LogOut</button></Link>
        </div>
      </nav>
    }
    </>
  )
}

export default NavBar