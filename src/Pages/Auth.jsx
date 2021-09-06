import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Layout from '../Components/Layout';
import LoginForm from '../Components/LoginForm';

function AuthPage() {
    return (
        <Layout title="Authorization">
            <Row className={'d-flex align-items-center justify-content-center vh-100'}>
                <Col xs={10} sm={8} md={6} lg={4}>
                    <LoginForm />
                </Col>
            </Row>
        </Layout>
    )
};

export default AuthPage;