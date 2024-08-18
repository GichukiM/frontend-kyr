"use client";

import React from 'react';
import { Card } from 'react-bootstrap';

const Educate = () => {
    return (
        <div className="container mt-5">
            <Card className="text-center shadow-lg">
                <Card.Header className="yellow text-black text-xl lg:text-2xl font-semibold p-3">
                    Educate Yourself on Your Rights
                </Card.Header>
                <Card.Body className="p-6 lg:p-8">
                    <Card.Title className="text-2xl lg:text-3xl font-bold mb-4">Coming Soon</Card.Title>
                    <Card.Text className="text-base lg:text-lg leading-relaxed">
                        In the future, this section will include educational materials such as the constitution and other books to help you educate yourself more on matters pertaining to your rights. Stay tuned for more resources that will empower you with the knowledge to protect and exercise your rights.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-gray-600 bg-gray-100 text-sm lg:text-base p-3">
                    Stay tuned for updates!
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Educate;
