import React, { useContext } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ContactContext } from "../context/Context";

const ViewContact = () => {
  const { state } = useContext(ContactContext);
  // destructuring contact from the state
  const {contact} = state;
  // and rendering it in state
  //FIXME: destructure contact from state

  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col md="5" className="offset-md-3">
          <Card className="pt-3 pb-5">
            <CardBody className="text-center ">
              <img
                height="150"
                width="150"
                className="cardImg profile border-danger"
                src={contact?.picture} alt=""
              />
              <CardTitle className="text-primary mt-3">
                <h1>{contact?.name}</h1>
              </CardTitle>
              <CardSubtitle>
                <h3>
                  <FaPhone className="mr-2" />
                  {contact?.phoneNumber}
                </h3>
              </CardSubtitle>
              <a
                className="btn btn-primary btn-block"
                target="_blank"
                rel="noreferrer"
                href={`mailto:{contact?.email}`}
              >
                <FaEnvelope className="icon mr-2" />
                {contact?.email}
              </a>

              <a className="btn btn-primary btn-block" target="_blank" alt="" href="sss">
                <FaMapMarkerAlt className="icon mr-2" />
                {contact?.address}
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewContact;
