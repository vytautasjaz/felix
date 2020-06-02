import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
import './index.scss';
import Header from '../Header';
import Footer from '../Footer';

function PageLayout({ children }) {
  return (
    <div className="PageLayout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PageLayout;
