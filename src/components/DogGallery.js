import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Dog from './Dog.js'
import '../styles/Dog.css';
function DogGallery(){
    const [dogs, setDogs] = useState([]);

  useEffect(() => {
    let dogList = []
    async function fetchDogs(){
      let i = 0;
      while(true){
      const response = await fetch("https://random.dog/woof.json");
      const data = await response.json();
      const dataUrl = data.url;
      if(dataUrl.endsWith('.jpg') || dataUrl.endsWith('.png') || dataUrl.endsWith('.jpeg')){
        dogList.push(dataUrl);
        i += 1;
      }
      if(i === 6){
        break;
      }
      }
      setDogs(dogList)
    }
    fetchDogs();
  }, [])

    return(
        <Container fluid>
            <Row>
                <div className="button-div">
                    <Button onClick={()=>{window.location.reload()}}>Next</Button>
                </div>
            </Row> 
            <Row>
            {dogs.map((value, index) =>{
                return (
                        <Col sm={4}>
                        <Dog url={dogs[index]}></Dog>
                        </Col>
                )
            })}
            </Row>
        </Container>
    )
}
export default DogGallery;