import React from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import api from '../API';
import auth from '../API/auth';
import config from '../config.json';
import notify from '../utils/notify';

function LoginForm() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const history = useHistory();

    const handleLogin = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const params = new URLSearchParams();
        params.append("_username", data.get("username"));
        params.append("_password", data.get("password"));
        params.append("_subdomain", config.defaultSubdomain);
        try {
            setIsLoading(true);
            let result = await api.post('/security/auth_check', params);
            auth.setAuthToken(result.data.token);
            notify({
                icon: 'success',
                title: "You have logged in to the system!"
            });
            history.push('/');
        }
        catch (err) {
            notify({
                icon: 'error',
                title: err?.response?.statusText || "Something went wrong!"
            })
        }
        setIsLoading(false);
    }

    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className={'mb-3'}>
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    name="username"
                    type="text"
                    placeholder="Enter email"
                    required
                />
            </Form.Group>
            <Form.Group className={'mb-3'}>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    name="password"
                    type={isVisible ? "text" : "password"}
                    placeholder="Password..."
                    required
                />
            </Form.Group>
            <Form.Group className={'mb-3'}>
                <Form.Check
                    type="checkbox"
                    label="Show password"
                    onChange={() => setIsVisible(!isVisible)}
                />
            </Form.Group>
            <Button className={'form-control'} disabled={isLoading} type="submit">
                {
                    isLoading
                        ?

                        <Spinner animation="border" />
                        :
                        "Login"
                }
            </Button>
        </Form>
    )
}

export default LoginForm;