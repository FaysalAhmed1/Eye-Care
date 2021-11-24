import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const Booking = () => {


    const { serviceId } = useParams();

    const [services, setServices] = useState([])

    const [resultdata, setResultData] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));


    }, [])

    useEffect(() => {

        const result = services.find(data => data._id === serviceId)


        setResultData(result)
    }, [services])



    return (
        <div className="servicedetail" style={{ textAlign: "center" }}>


            <h1> Service Name : {resultdata?.name}</h1>
            <h3> Service Price : $ {resultdata?.price}</h3>
            <img src={resultdata?.picture} style={{ width: "800px" }} alt="" srcset="" />
            <h5> Service Description :  {resultdata?.description}</h5>

        </div>
    );
};

export default Booking;