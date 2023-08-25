import { Container, Row, Col, Image,Button } from "react-bootstrap";
import IconCompleted from "../assets/icon-success.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Completed = () => {
  const location = useLocation();
  const navigate = useNavigate();


  if (!location.state) {
    navigate("/");
    return;
  }

  return (
    <Container
      fluid
      className="h-screen d-sm-flex justify-content-center align-items-center"
    >
      <Container
        fluid
        className={`bg-white col-sm-3 col-md-3 p-5 overflow-hidden ${
          window.innerWidth > 575 ? "rounded-5" : ""
        }`}
      >
        <Row>
          <Col xs={12} className="mt-3">
            <Image src={IconCompleted} alt=""/>
            <h1 className="h1 mt-5 text-dark-slate-grey font-Roboto-bold">Thanks for subscribing!</h1>
            <p className="my-4 text-dark-slate-grey font-Roboto-regular">A confirmation email has been sent to <span className="font-Roboto-bold font-weight700">{location.state?.email}</span>. Please open it and click the button inside to confirm your subscription.</p>
            <Button 
            className="btn-primary d-block w-100 p-3 font-weight700 font-Roboto-regular"
            onClick={()=>navigate('/')}
            >
              Dismiss message
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Completed;
