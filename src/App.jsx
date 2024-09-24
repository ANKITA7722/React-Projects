import Carousel from 'react-bootstrap/Carousel';

 import img1 from "./images/img1.jpg";
 import img2 from "./images/img2.jpg";
 import img3 from "./images/img3.jpg";



const App=()=>{
    return(
    <>
   
   <Carousel>
      <Carousel.Item>
        {/* image1 */}
        <img src={img1} width={"100%"}/>


        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* img2 */}
      <img src={img2 } width={"100%"}/>



        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
      <img src={img3 } width={"100%"} />


        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    </>
    )
}
export default App;