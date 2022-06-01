import React from 'react';
import Company from '../Company/Company';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Company></Company>
            <Services></Services>
        </div>
    );
};

export default Home;