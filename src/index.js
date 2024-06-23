import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header';
import Main from './main';
import Aside from './aside';
import Footer from './footer';
import Single from './single';

const App = () => (
    <div>
        <Header />
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Main />
                </div>
                <div className="col-md-4">
                    <Aside />
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="detalle/:slug" element={<Single />} />
        </Routes>
    </BrowserRouter>
);
