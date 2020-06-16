import React from 'react';
import './index.scss';
import Header from '../Header';
import Footer from '../Footer';

function PageLayout({ children }) {
  return (
    <div className="PageLayout">
      {/* <Header /> */}
      <main className = "MainContent">{children}</main>
      <Footer />
    </div>
  );
}

export default PageLayout;
