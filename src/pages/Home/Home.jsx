import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../../container';
import { Navbar } from '../../components';
import '../../global.css';

const Home = () => {

    document.title = "Gericht | Home"

    return(

        <div>
            <Navbar />
            <Header page="home"/>
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
        </div>

    )
};

export default Home;
