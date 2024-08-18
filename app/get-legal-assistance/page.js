"use client";

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const LegalAssistance = () => {
    return (
        <div className="container mt-5">
            <Card className="text-center shadow-lg">
                <Card.Header className="yellow text-black text-xl lg:text-2xl font-semibold p-3">
                    Legal Assistance
                </Card.Header>
                <Card.Body className="p-6 lg:p-8">
                    <Card.Title className="text-2xl lg:text-3xl font-bold mb-4">Coming Soon</Card.Title>
                    <Card.Text className="text-base lg:text-lg leading-relaxed">
                        In the near future, you will be able to fill out a form indicating the type of legal assistance you require. After submission, you will be connected with a professional (perhaps a lawyer) or an organization to help solve your legal problem.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-gray-600 bg-gray-100 text-sm lg:text-base p-3">
                    Stay tuned for updates!
                </Card.Footer>
            </Card>
        </div>
    );
};

export default LegalAssistance;
