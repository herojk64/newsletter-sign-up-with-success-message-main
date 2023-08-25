import { Container, Row, Col, Image } from "react-bootstrap";
import SideImage from "../assets/illustration-sign-up-desktop.svg";
import MobaImage from "../assets/illustration-sign-up-mobile.svg";
import CardBody from "../components/CardBody";
import { emailInitialValues } from "../initialvalues/CardInitial";
import emailFormValidation  from "../validation/emailValidation";

const Main = () => {
  return (
    <Container fluid className="h-screen d-sm-flex p-0 justify-content-center align-items-center">
    <Container
      fluid
      className={`bg-white col-sm-5 col-md-5 p-xs-0 p-sm-4 overflow-hidden ${window.innerWidth > 575 ? 'rounded-5' : ''}`}
      style={window.innerWidth>575?{width:"55%"}:{}}
    >
      <Row xs={1} sm={2} lg={2} className="ps-sm-5">
        <Col className="d-sm-none d-block p-0 col-12">
          <Image src={MobaImage} className="w-100"  alt=""/>
        </Col>
        <CardBody 
        initialValues={emailInitialValues}
        formValidation={emailFormValidation}
        />
        <Col className="d-sm-block d-none col-4">
          <Image src={SideImage} style={{height:"100%"}} alt=""/>
        </Col>
      </Row>
    </Container>
    </Container>
  );
};

export default Main;
