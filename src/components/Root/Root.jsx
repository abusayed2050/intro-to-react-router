import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Root.css';

const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div>
            <Header />
            <div   e='root-main'>
                {isNavigating && <span>Loading...............</span>}
                <SideBar />
                <Outlet />
            </div> 
            <Footer />
        </div>
);
};

export default Root;