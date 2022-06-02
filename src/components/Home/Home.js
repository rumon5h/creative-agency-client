import React from 'react';
import Company from '../Company/Company';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Company></Company>
            <Services></Services>
            <Works></Works>
            <Feedback></Feedback>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;