import React from 'react';
import Appointments from '../Appointment/Appointments';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Faq from '../Faq/Faq';


import Services from '../Services/Services';
import Rewards from './Rewards/Rewards';

const Home = () => {
    return (
        <div className="mt-5 mb-5">

            <Banner></Banner>
            <Services></Services>

            <Rewards></Rewards>
            <Faq></Faq>
        </div>
    );
};

export default Home; <Services></Services>