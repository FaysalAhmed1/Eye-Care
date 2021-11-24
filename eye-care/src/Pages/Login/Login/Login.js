import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/UseAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className="btn btn-warning" > Login With Email </Button>
            </Form>

            <button onClick={signInUsingGoogle} className="btn btn-warning mt-5 mb-5" > Sign in Using Google </button>
        </div>
    );
};

export default Login;