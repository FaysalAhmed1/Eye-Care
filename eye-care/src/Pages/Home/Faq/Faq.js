import React from 'react';
import { Accordion } from 'react-bootstrap';

const faq = () => {
    return (
        <div>
            <h2 className="mt-5" style={{ textAlign: "center" }}> Frequently Asked question </h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> Where are we Located ? </Accordion.Header>
                    <Accordion.Body>
                        We are located in Dhaka. However we have branches all abound the country.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> Where can I see the appointment list ?</Accordion.Header>
                    <Accordion.Body>
                        Kindly go through our website to find the Appointment list with designated doctors.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> What payment method do you accept ?</Accordion.Header>
                    <Accordion.Body>
                        We accept all payment in cluding cash to credit cards, debit cards.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </div>
    );
};

export default faq;