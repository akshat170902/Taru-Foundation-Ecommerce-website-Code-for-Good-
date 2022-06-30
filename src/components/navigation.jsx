import { FaGlobe } from 'react-icons/fa';
import Dropdown from 'react-dropdown';
import './dropdown.css'

export const Navigation = (props) => {
  const options = [
    'one', 'two', 'three'
  ];
  
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
           Taru Foundation
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#' className='page-scroll'>
                HOME
              </a>
            </li>
            
            <li>
              <a href='#about' className='page-scroll'>
                ABOUT US
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                SHGs
              </a>
            </li>
            <li>
              <a href='#' className='page-scroll'>
                LOGIN
              </a>
            </li>
            <li>
              <a href='#testimonial' className='page-scroll'>
                VIEW PRODUCTS
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                CONTACT US
              </a>
            </li>
            <li>
            <div class="dropdown">
  <button class="dropbtn">LANGUAGES</button>
  <div class="dropdown-content">
    <a href="#">ENGLISH</a>
    <a href="#">HINDI</a>
    <a href='#'>CHATTISGARHI</a>
    <a href="#">URDU</a>
    <a href="#">TELUGU</a>
    <a href="#">GUJARATI</a>
    <a href="#">BENGALI</a>
    <a href="#">MARATHI</a>
 
  </div>
</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    

  
  )
}