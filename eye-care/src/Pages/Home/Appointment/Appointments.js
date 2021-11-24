import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Appointments = () => {
    return (
        <div className="mt-5 mb-5">
            <CardGroup>
                <Card>
                    <Card.Img className="w-75" variant="top" src="https://images.squarespace-cdn.com/content/v1/56493e4ee4b003ec2cc5ff74/1459828506643-9AWEEF198HA37TCO1RL1/Time+for+a+Checkup-2.png?format=300w" />
                    <Card.Body>
                        <Card.Title> Monthly Checkup </Card.Title>
                        <Card.Text>
                            This is the most casual check up and you can sign up whenever you want.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-info " > Get This Appointment </button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img className="w-75" variant="top" src="https://images.squarespace-cdn.com/content/v1/56493e4ee4b003ec2cc5ff74/1459828506643-9AWEEF198HA37TCO1RL1/Time+for+a+Checkup-2.png?format=300w" />
                    <Card.Body>
                        <Card.Title> 3 Monthly Checkup </Card.Title>
                        <Card.Text>
                            This is a supscription base checkup and cost is way less than regular checkups{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-info " > Get This Appointment </button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img className="w-75" variant="top" src="https://images.squarespace-cdn.com/content/v1/56493e4ee4b003ec2cc5ff74/1459828506643-9AWEEF198HA37TCO1RL1/Time+for+a+Checkup-2.png?format=300w" />
                    <Card.Body>
                        <Card.Title> Yearly chekup </Card.Title>
                        <Card.Text>
                            This is yearly checkup which is mendatory for a functional pair of eye.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-info " > Get This Appointment </button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Appointments;