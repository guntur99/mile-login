

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MileLogo from "../src/assets/img/mileapp.png";

// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
} from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <>
      <main className={`bg`}>
      <section className="section section-shaped section-lg">
      <Container className="pt-lg-7" style={{ paddingTop: "100px", paddingBottom: "100px"  }}>
        <Row className="justify-content-center">
          <Col lg="5">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-white pb-5">
                <div className="text-muted text-center mb-3">
                  {/* <small>Sign in with</small> */}
                </div>
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span className="btn-inner--icon mr-1">
                      <img
                        alt="..."
                        src={MileLogo}
                        // style={{ maxWidth: "300px", alignContent: "center" }}
                      />
                    </span>
                  </Button>
                    <p></p>
                    <p></p>
                    <span className="">Your one stop platform to manage all of your field service management</span>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5 bg-white">
                <Form role="form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <Input placeholder="Enter your organization's name" type="text" />
                    </InputGroup>
                  </FormGroup>
                  <div className="text-center">
                    <Button
                      className="my-2 w-100"
                      color="primary"
                      type="button"
                    >
                      Login
                    </Button>
                    <p></p>
                    <span className="">Not registered yet? <span className={`App-link`}>Contact us</span> for more info</span>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </section>
      </main>
      </>
    );
  }
}

export default App;