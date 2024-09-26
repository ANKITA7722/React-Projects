import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Carousel from 'react-bootstrap/Carousel';
 import img1 from "./images/op1.jpg";
 import img2 from "./images/op2.jpg";
 import img3 from "./images/op1.jpg";

//  import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const App=()=>{
    return(
    <>

<Container>
      <Row>
        <Col md={2} className='bg-primary'>ankita</Col>
        <Col md={2} className='bg-success'>gauri</Col>
        <Col md={3} className='bg-warning'>atmik</Col>
        <Col md={5} className='bg-danger'>1 of 1</Col>
      </Row>
        <br/>
      <Row>
      <Col md={2} className='bg-primary'>ankita</Col>
        <Col md={2} className='bg-success'>gauri</Col>
        <Col md={4} className='bg-warning'>1 of 1</Col>
        <Col md={2} className='bg-danger'>1 of 1</Col>
        <Col md={2} className='bg-warning'>1 of 1</Col>
        
      </Row>
    </Container>


   
   

    </>
    )
}
export default App;

