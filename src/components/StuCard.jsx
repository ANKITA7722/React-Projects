
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "../images/op1.jpg";
import img2 from "../images/op3.webp";
import img3 from "../images/op1.jpg";


const StuCard=()=>{
    return(
        <>
        <div id="cardData">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <img src={img2}/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    
        <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <img src={img2}/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <img src={img2}/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

         </div>
        </>
    )
}
export default StuCard;