import React from 'react';
import './CareerPlanning.css';

import ContentBody from './body/ContentBody.js';
import ContentFooter from './footer/ContentFooter.js';

import { navItems, bodyData, footerData } from '../data-model/sharedData.js';

import blueLogo from '../resources/UIS_Wordmark_official_UISblue.png';
import whiteLogo from '../resources/UIS_Wordmark_official_white.png';

import youtube from '../resources/logos/youtube.svg';
import twitter from '../resources/logos/twitter.svg';
import linkedin from '../resources/logos/linkedin.svg';

const getIntoView = (id) => {
  const element = document.getElementById(`scrollIntoView-${id}`);
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function CareerPlanning() {
  return (
    
    <div className='career-page'>
      <div className='career-page-header'>
        <div className='logo-section'>
          <div className='university-logo'>
            <a className='uis-logo-anchor' href='javascript:void(0);'>
              <img alt="Home" className='uis-logo' src={blueLogo} />
            </a>
          </div>
          <div className='dept-logo'>
            <a className="dept-logo-anchor" href='javascript:void(0);'>Career Planning</a>
          </div>
        </div>
        <nav className='nav-section'>
          <ul>
            {
              navItems.map((item, idx) => (
                <li className={ item.class } key={ item.href } onClick={() => getIntoView(item.id)}>
                  <a href='javascript:void(0)'>{ item.title }</a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <div className='highlight-image'>
        <div className='highlight-image-text'>
          <h1> UIS Career Planning </h1>
        </div>
      </div>
      <ContentBody bodyData={ bodyData }></ContentBody>
      <div className='career-footer'>
      <div className='footer-column footer-column-social'>
          <section>
            <p>
              <img height={'180px'} width={'320px'} className='footer-logo-img' alt="uis-logo" src={whiteLogo}></img>
            </p>
            <p>
              One University Plaza <br/>
              Springfield, Illinois 62703 <br/>
              ph: 217.206.6600<br/>
              <a style={{color: 'white'}} href="mailto:admissions@uis.edu">admissions@uis.edu</a>
            </p>
          </section>
          <div className={`media`}> 
            <img tabIndex='0' src={youtube} alt='youtube' />
            <img tabIndex='0' src={twitter} alt='twitter' />
            <img tabIndex='0' src={linkedin} alt='linkedin' />
          </div>
        </div>
        <ContentFooter fd={ footerData[0] }></ContentFooter>
        <ContentFooter fd={ footerData[1] }></ContentFooter>
      </div>
    </div>
    
  );
}

export default CareerPlanning;
