import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Netsuiteahome from '../components/Netsuiteahome';

import TopAppBar from '../components/TopAppBar';
import MasterLayout from './MasterLayout';
import Customer from './Customer';
import BIlls from './BIlls';
import ProductCatalog from './ProductCatalog';
import PurchaseOrders from './PurchaseOrders';

const Routing = () => {
    return (
        <Router>
            <Routes>

                {/* <Route path="/" element={<MasterLayout />}> */}
                {/* <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route> */}



                <Route path="/" element={<MasterLayout />}>
                    <Route index   path="customer"  element={<Customer />} />
                    <Route path="bills"  element={<BIlls />} />
                    <Route path="productcatalog"  element={<ProductCatalog />} />
                    <Route path="purchaseorders"  element={<PurchaseOrders />} />


                    {/* <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} /> */}
                </Route>
                {/* <Route path="/netsuite" element={<Netsuiteahome />} /> */}
            </Routes>
        </Router>
    )
}

export default Routing
