import React, { useEffect, useRef} from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import "../../styles/header.css"
import { logout } from '../../redux/userSlice'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { me } from '../../axios'

const navLinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/fleet',
    display:'Fleet'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/blogs',
    display:'Blog'
  },
  {
    path:'/contact',
    display:'Contact'
  },
];

const Header = () => {

  const queryClient = useQueryClient();

  const dispatch = useDispatch()

  const navigate = useNavigate()
  
  const { isFetching, data } = useQuery(["me"], () => me().then(res => res.data))

  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('menu')

  if (isFetching) return <h1>Loading...</h1>
  else {
  return <header className="header">
  {/* =======header top ==========*/}
  <div className="header__top">
    <Container>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div className="header__top__left">
            <span>Need Quick Help?</span>
            <span className="header__top__help">
              <i class="ri-phone-fill"></i> +353 89 353 3533
            </span>
          </div>
        </Col>

        <Col lg={6} md={6} sm={6}>
          <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
            {!data?.email ?
            <>
            <Link to='/login' className="d-flex align-items-center gap-1">
              <i class="ri-login-circle-line"></i> Login 
            </Link>

            <Link to='/register' className="d-flex align-items-center gap-1">
              <i class="ri-user-line"></i> Register 
            </Link> </> : 
            <div style={{ display: "flex"}} >
              <span style={{ marginRight: 15}}>Welcome, {data.fullName}</span>
              { !data.isAdmin && <span><Link to="/transactions" style={{ marginRight: 15}}>My Transactions</Link></span>}
             <div onClick={async (e) => {
                 await dispatch(logout(navigate))
                 queryClient.invalidateQueries(["me"])
                }} style={{ cursor: "pointer"}} className="d-flex justify-content-center gap-1">
               <i class="ri-logout-circle-line"></i> Logout 
               </div>
            </div>
            }

          </div>
        </Col>
      </Row>
    </Container>
  </div>

  {/*Header Middle*/}

  <div className="header__middle">
    <Container>
      <Row>
        <Col lg={4} md={3} sm={4}>
          <div className="logo">
            <h1>
              <Link to='/home' className="d-flex align-items-center gap-3 mt-3">
                <i class="ri-car-line"></i>
                <span>BuRent Car Service</span>
              </Link>
            </h1> 
          </div>
        </Col>

        <Col lg={3} md={3} sm={4}>
          <div className="header__location d-flex align-items-center gap-2">
            <span><i class="ri-time-line"></i></span>
            <div className="header__location__content">
              <h4>Office Hours</h4>
              <h6>10am - 7pm</h6>
            </div>
          </div>
        </Col>

        <Col lg={3} md={3} sm={4}>
          <div className="header__location d-flex align-items-center gap-2">
            <span><i class="ri-earth-line"></i></span>
            <div className="header__location__content">
              <h4>Dublin</h4>
              <h6>Dublin, Ireland</h6>
            </div>
          </div>
        </Col>
  

        <Col lg={2} md={3} sm={0} className="d-flex align-items-center justify-content-end">
          <button className="header__btn btn">
            <Link to="/contact">
              <i class="ri-phone-line"></i> Request a call
            </Link>
          </button>
        </Col>
      </Row>
    </Container>
  </div>


  {/*Main Navigation*/}

  <div className="main__navbar">
    <Container>
      <div className="navigation__wrapper d-flex align-items-center justify-content-between">
        <span className='mobile__menu'>
          <i class="ri-menu-line" onClick={toggleMenu}></i>
        </span>

        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="menu">
            {
              navLinks.map((item,index) => (
                <NavLink to={item.path} className={navClass => navClass.isActive ? 'nav__active nav__item' : 'nav__item'} key={index}>{item.display}</NavLink>
              ))
            }
            { data?.isAdmin && <NavLink to="/admin" className={navClass => navClass.isActive ? 'nav__active nav__item' : 'nav__item'}>Admin</NavLink> }

          </div>
        </div>

        <div className="nav__right">
          <div className="search__box">
            <input type="text" placeholder="Search" />
            <span>
              <i class="ri-search-line"></i>
            </span>
          </div>
        </div>
      </div>
    </Container>
  </div>

  </header>
  }
};

export default Header