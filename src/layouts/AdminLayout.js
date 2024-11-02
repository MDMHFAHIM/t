import React from 'react';
import Header from './include/header';
import Footer from './include/footer';

function AdminLayout({ children }) {
  return (
    <div className="container-scroller">
      {/*- partial:partials/_navbar.html -*/}
      <Header />
      {/*- partial -*/}
      <div className="container-fluid page-body-wrapper">
        {/*- partial:partials/_settings-panel.html -*/}
        {/*- partial -*/}
        {/*- partial:partials/_sidebar.html -*/}
        {/*- partial -*/}
        <div className="main-panel">
          <main>{children}</main>
          {/*- content-wrapper ends -*/}
          {/*- partial:partials/_footer.html -*/}
          <Footer />
          {/*- partial -*/}
        </div>
        {/*- main-panel ends -*/}
      </div>
      {/*- page-body-wrapper ends -*/}
    </div>
  )
}

export default AdminLayout