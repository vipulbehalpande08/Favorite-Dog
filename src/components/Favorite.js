import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import '../styles/Favorite.css';
function Favorite(){
    const [favDogs, setFavDogs] = useState([]);
    useEffect(() =>{
        let favorites = JSON.parse(localStorage.getItem("fav_dogs"));
        if(favorites === undefined || favorites === null){
            favorites = []
        }
        setFavDogs(favorites)
    },[]);
    
    return (
         <Container fluid>
             <Row>
             {favDogs.map((url)=>{
                return (
                    <Col sm={4}>
                        <Card style={{ width: 'auto' }}>
                            <Card.Img variant="top" src={url} className="photo" alt=""/>
                        </Card>
                    </Col>
                )
             })}
             </Row>
             
         </Container>
    )
}
export default Favorite;