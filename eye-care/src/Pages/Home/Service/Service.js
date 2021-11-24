import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {


    const { _id, name, price, description, picture } = service;


    return (
        <div className="service pt-3 pb-3">

            <img src={picture} alt="" srcset="" style={{ width: "500px" }} />
            <h3>{name}</h3>


            <Link to={`/booking/${_id}`}>
                <button className="btn btn-info " > Get This Service </button>

            </Link>



        </div>
    );
};

export default Service;