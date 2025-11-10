import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const HomepageLayout = () => {
    return (
        <div>
            <div className='max-w-[1700px] mx-auto'>
                <Navbar></Navbar>
                <div className='mx-6'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default HomepageLayout;