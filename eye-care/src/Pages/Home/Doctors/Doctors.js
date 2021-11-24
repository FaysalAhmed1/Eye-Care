import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Doctors = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}> Our Doctors are always ready to Treat you</h1>

            <Container>

                <Row>
                    <Col> <img style={{ width: "350px", height: "250px" }} src="https://media.istockphoto.com/photos/team-of-doctors-and-nurses-in-hospital-picture-id1307543618?b=1&k=20&m=1307543618&s=170667a&w=0&h=hXpYmNYXnhdD36C-8taPQvdpM9Oj-woEdge8nvPrsZY=" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>Mr john</h2>
                    </Col>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q=" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>Mrs jenefer</h2>
                    </Col>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>Mrs jenny</h2>
                    </Col>
                </Row>

                <Row>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://d1ac9zce9817ms.cloudfront.net/images/how-to-immigrate-to-canada-as-a-doctor%20%281%29-1539078403238.jpg" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>Mr David</h2>
                    </Col>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://thumbs.dreamstime.com/b/doctor-stethoscope-clipboard-light-grey-background-space-text-172724733.jpg" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>Mrs Susan</h2>
                    </Col>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://media.istockphoto.com/photos/young-female-doctor-posing-on-white-picture-id1199676919?k=20&m=1199676919&s=612x612&w=0&h=su8LAg_gHBmo9uWB2_esZ0686FETxKWk-_NY5a2D9pY=" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>Mrs Kevin</h2>
                    </Col>
                </Row>

                <Row>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://images.freeimages.com/images/premium/previews/1020/10204344-female-doctor-with-serious-expression.jpg" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>Mrs Paul</h2>
                    </Col>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkX9BGG7GQF3HpQffxUkl9WmrkH39WCSavAwWZFGKO3UWYiXJ5KjTeANgV01V4C58poY&usqp=CAU" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>Mrs Merry</h2>
                    </Col>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-A5Fw3Y3kLsZo9dcZaYHTuIpH1cNNiLJUeXgHnvDDouZU4MdhrduU0bboe0U1wQF58w0&usqp=CAU" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>Mrs Lana</h2>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Doctors;