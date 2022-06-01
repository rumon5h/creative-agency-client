import React from 'react';
import Company from '../Company/Company';
import Feedback from '../Feedback/Feedback';
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
        </div>
    );
};

export default Home;