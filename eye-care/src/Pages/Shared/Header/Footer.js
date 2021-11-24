import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>


            <Card className="text-center bg-info">
                <Card.Header> Since 1980 </Card.Header>
                <Card.Body>
                    <Card.Title> Providing the Best service </Card.Title>
                    <Card.Text>
                        With Thousands of happy clients every months, we strive to stay in top.
                    </Card.Text>
                    <button className="btn btn-warning" > Email Us for Queries </button>
                </Card.Body>
                <Card.Footer className="text-muted"> Copyright &copy; Eye Care </Card.Footer>
            </Card>
        </div>
    );
};

export default Footer;