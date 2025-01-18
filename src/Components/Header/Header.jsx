/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = ({ toggle, toggleTheme }) => {

  return (
    <header>
      <div className="header-container">
        <div className="header-blk paddingX">
          <div className="header-logo">
            <a href="#">
              {toggle ? (
                <img src="https://flexiblog-education.netlify.app/static/bad5f02928a2842d0cf1f649d6f7d1da/edeef/logo-dark.webp" alt="logo" />
              ) : (
                <img src="https://flexiblog-education.netlify.app/static/e1abc27a01b56d93f5fcdff62c84fdd7/edeef/logo.webp" alt="logo" />
              )}
            </a>
          </div>

          <SearchBar />
          <div className="d-flex align-center">
            <div className="header-link-container">
              <div className="header-link-wrapper">
                <ul className="header-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/tutors">Tutors</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="responsive-icons">
              <div className='search-bar-icon icon'>
                <i class='bx bx-search'></i>
              </div>
              <div className='toggle-icon icon' onClick={toggleTheme}>
                {
                  toggle ? <i class='bx bxs-sun' ></i>
                    :
                    <i class='bx bxs-moon'></i>
                }
              </div>
              <div className='menu-bar icon'>
                <i class='bx bx-menu'></i>
              </div>
            </div>
            <ul className={`toggle-switch ${toggle ? 'active' : ''}`} onClick={toggleTheme} >
              <li> <FaSun className="sun" /> </li>
              <li> <FaMoon className="moon" /> </li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
