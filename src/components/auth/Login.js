import React, { useState } from "react";

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { login, requestToken } from "../../api/UserService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string().required("Please enter your password").min(7),
  });

  const onSubmit = (values) => {
    setLoading(true);

    console.log(values);

    requestToken().then((respToken) => {
      console.log(respToken.data.request_token);

      console.log(values);

      values["request_token"] = `${respToken.data.request_token}`;

      console.log(values);

      login(values)
        .then((resp) => {
          console.log(resp.data.request_token);

          localStorage.setItem("token", resp.data.request_token);
          setLoading(false);
          navigate("/movies");
        })
        .catch((err) => {
          console.log(err.response.data.status_message);
          setLoading(false);
        });
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="logindiv">
      <Container className="mt-5 ">
        <Row>
          <Col lg="3"></Col>
          <Col className="m-5" lg="6">
            <Card className="p-5">
              <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus="autofocus"
                    placeholder="Username"
                    {...formik.getFieldProps("username")}
                    isInvalid={!!formik.errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                    isInvalid={!!formik.errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  variant="dark"
                  size="lg"
                  type="submit"
                  disabled={loading}
                >
                  {loading && <Spinner animation="border" size="sm" />} GİRİŞ
                </Button>
              </Form>
            </Card>
          </Col>
          <Col lg="3"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
