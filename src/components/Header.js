import React from 'react';
import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <Link to="index.html" class="logo d-flex align-items-center me-auto">
        <h1 class="sitename">Logis</h1>
      </Link>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><Link to="/" class="active">Home</Link></li>
          <li><Link to="About">About</Link></li>
          <li><Link to="Services">Services</Link></li>
          <li><Link to="pricing.html">Pricing</Link></li>
          <li><Link to="contact.html">Contact</Link></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <Link class="btn-getstarted" to="get-a-quote.html">Get a Quote</Link>

    </div>
  </header>
  );
}

export default Header;
