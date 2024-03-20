import Header from './Header';
import Footer from './Footer';
import Sidemenu from './Sidemenu';
import FooterBottom from './FooterBottom';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <body class="g-sidenav-show  bg-gray-100">
      <Sidemenu/>
      <main class="main-content border-radius-lg ">
      	<Header/>
      	<div class="container-fluid py-4">
      		{children}
      		<Footer/>
      	</div>
      </main>
      <FooterBottom/>
      
    </body>
  )
}

export default Layout;