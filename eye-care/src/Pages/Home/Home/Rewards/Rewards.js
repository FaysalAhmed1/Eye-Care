import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Rewards = () => {
    return (
        <div>
            <h2 className="mt-5 mb-5" style={{ textAlign: "center" }}>
                Our Achivements
            </h2>
            <Container >

                <Row>
                    <Col>
                        <img style={{ width: "250px", height: "200px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxumxvNVs4SqR3E_ck4miCgtmx_1vJ6jExQ&usqp=CAU" alt="" srcset="" />
                        <h3> Best Eye hospital in 2019 </h3>
                    </Col>
                    <Col> <img style={{ width: "250px", height: "200px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3brHM2Rfe-4jZqOgKOVl9pDNlrHuvcw6L5g&usqp=CAU" alt="" srcset="" />
                        <h3> Best Eye hospital in 2020 </h3></Col>
                    <Col> <img style={{ width: "250px", height: "200px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhZch5_lZSQM6Mo4PF5RQLcmPWmQ54UlVbQ&usqp=CAU" alt="" srcset="" />
                        <h3> Best Eye hospital in 2021 </h3></Col>
                </Row>
            </Container>

        </div>
    );
};

export default Rewards;

