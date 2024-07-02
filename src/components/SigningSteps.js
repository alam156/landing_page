import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Image1 from '../album/service_image_1.jpeg';
import Image2 from '../album/service_image_2.jpeg';
import Image3 from '../album/service_image_3.jpeg';
import Image4 from '../album/service_image_4.jpeg';

const SigningSteps = () => (
    <Container>
        <Row>
            <Col md={12}>
                <Row>
                    <Col md={6}>
                        <img
                            src={Image1}
                            alt="Service 1"
                            className="img-fluid mb-3"
                        />
                    </Col>
                    <Col md={6}>
                        <h3>Registration</h3>
                        <p>
                            Registering on our portal is quick and easy. Follow these simple steps to get started:

                            Visit our portal's homepage and click on the "Register" button.
                            Fill in your personal details, including your name, email, and contact number.
                            Create a strong password to secure your account.
                            Agree to our terms and conditions by checking the appropriate box.
                            Click "Submit" to complete your registration.
                            Check your email for a verification link and click on it to verify your account.
                            Once verified, log in to the portal using your email and password.
                            Update your profile with additional information to enhance your experience.
                            Explore the portal's features and resources available to registered users.
                            For any assistance, visit our Help section or contact support.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3>Quick Enroll</h3>
                        <p>
                            Enrolling in our portal is straightforward and user-friendly. Follow these steps to join:

                            Navigate to the portal's homepage and click on the "Enroll Now" button.
                            Provide your basic information, including full name, email address, and phone number.
                            Select a unique username for your account.
                            Choose a secure password and confirm it.
                            Review and accept our privacy policy and terms of service.
                            Click "Enroll" to submit your details.
                            Check your email for an enrollment confirmation message.
                            Follow the instructions in the email to activate your account.
                            Log in to the portal with your new credentials.
                            Start exploring the features and benefits available to enrolled members.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img
                            src={Image2}
                            alt="Service 1"
                            className="img-fluid mb-3"
                        />
                    </Col>

                </Row>
                <Row>
                    <Col md={6}>
                        <img
                            src={Image3}
                            alt="Service 1"
                            className="img-fluid mb-3"
                        />
                    </Col>
                    <Col md={6}>
                        <h3>Quick Pair</h3>
                        <p>
                            Generating a key pair is an essential step for secure communication and authentication. Follow these steps to create your key pair:

                            Open your terminal or command prompt.
                            Use a key generation tool, such as ssh-keygen for SSH keys.
                            Run the command ssh-keygen -t rsa -b 4096 to generate a strong RSA key pair.
                            When prompted, enter a file name to save the key (or press Enter to accept the default location).
                            Optionally, enter a passphrase for added security.
                            The tool will create two files: a private key (id_rsa) and a public key (id_rsa.pub).
                            Store the private key securely and never share it.
                            Copy the public key to the server or service where you need authentication.
                            Set the appropriate permissions for the private key (chmod 600 id_rsa).
                            Test your key pair by using the public key for secure logins or communication.
                            With your key pair generated, you can now securely authenticate and encrypt your data.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h3>Efficiency</h3>
                        <p>
                            Digital signatures offer a more efficient and convenient way to sign documents compared to traditional wet ink signatures. With digital signatures, there is no need to print out documents, sign them by hand, and then scan or mail them back. Instead, the entire process can be done electronically, saving time and reducing the need for physical storage space. Additionally, digital signatures can be easily integrated into existing workflows and systems, making it easier to manage and track signed documents.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img
                            src={Image4}
                            alt="Service 1"
                            className="img-fluid mb-3"
                        />
                    </Col>

                </Row>

            </Col>
        </Row>

    </Container>);
export default SigningSteps;