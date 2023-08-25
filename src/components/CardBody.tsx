import * as Yup from "yup";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Formik, Form, Field, FormikHelpers,ErrorMessage } from "formik";
import "../scss/CardBody.scss";
import { useNavigate } from "react-router-dom";

interface initialValuesInterface {
  email: string;
}

interface CardBodyProps{
  initialValues:initialValuesInterface,
  formValidation?:null | Yup.ObjectSchema<initialValuesInterface> | undefined
}

const CardBody = ({
  initialValues,
  formValidation=null
}:CardBodyProps) => {

  const navigate = useNavigate();

  const onSubmit = (
    values: initialValuesInterface,
    actions: FormikHelpers<initialValuesInterface>
  ) => {
    const stateData ={
      email:values.email,
      status:true,
      error:false
    }
    navigate("/completed",{state:stateData})
    actions.resetForm();
  };

  return (
    <Col className="font-size16 col-sm-6 text-dark-slate-grey font-Roboto-regular">
      <h1
        className="font-Roboto-bold font-weight700 mt-5"
        style={{ fontSize: "3.5rem" }}
      >
        Stay updated!
      </h1>
      <p className="text-dark-slate-grey font-weight400 mt-4">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="description_list mt-4 mb-5">
        <li>Product discovery and building what matters Measuring to ensure</li>
        <li>updates are a success</li>
        <li>And much more!</li>
      </ul>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={formValidation}
      >
        {({ touched,errors }) => (
          <Form>
            <Container fluid className="p-0">
              <Row className="justify-content-between">
                <Col>
                  <label
                    htmlFor="email"
                    className="pointer font-weight700"
                    style={{ fontSize: "14px" }}
                  >
                    Email address
                  </label>
                </Col>
                {touched.email && (
                  <Col style={{ textAlign: "right" }}>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger font-weight700"
                      style={{ fontSize: "10px" }}
                    />
                  </Col>
                )}
              </Row>
            </Container>

            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
              className={`form-control p-3 rounded-3 my-2 pointer ${touched.email && errors.email?"bg-error box-shadow-error border-danger text-danger":""}`}
            />
      <Button
        type="submit"
        className="btn-primary d-block w-100 p-3 font-weight700 font-Roboto-regular"
      >
          Subscribe to monthly newsletter
        </Button>
          </Form>
        )}
      </Formik>
    </Col>
  );
};

export default CardBody;
