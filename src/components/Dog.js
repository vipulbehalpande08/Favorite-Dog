import { Card, Button } from 'react-bootstrap';
import '../styles/Dog.css';
import React from 'react';
const Dog = (props) => {
    //to disable "Add to favorite" button onClick
    const [disable, setDisable] = React.useState(false);
    function addToFavorites(url){
        let favoriteDogs = [];
        //to check existing favorite dog list
        if(localStorage.getItem("fav_dogs") === undefined || localStorage.getItem("fav_dogs") === null){
            favoriteDogs = [url]
        }else{
            favoriteDogs = JSON.parse(localStorage.getItem("fav_dogs"));
            //to avoid duplicate values
            if(favoriteDogs.indexOf(url) === -1){
                favoriteDogs.push(url);
            }
            
        }
        localStorage.setItem("fav_dogs", JSON.stringify(favoriteDogs));
        setDisable(true)
    }
    return (
        <Card style={{ width: 'auto' }}>
        <Card.Img variant="top" src={props.url} className="photo"/>
        <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Button className="fav-button" onClick={()=> addToFavorites(props.url)} disabled={disable}>Add to favorite</Button>
        </Card.Body>
        </Card>
    )
}
export default Dog;