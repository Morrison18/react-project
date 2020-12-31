import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'; // import the bootstrap card 
import Button from 'react-bootstrap/Button';
import axios from 'axios';




export class AlbumItem extends React.Component {

constructor(){
    super();

    this.DeleteAlbum = this.DeleteAlbum.bind(this);
}

 //this function uses axios to go to the url below and gets the movie by the id and deletes it  then the reload data method is called 
 DeleteAlbum(r){
    r.preventDefault(); 

    axios.delete('http://localhost:4000/api/albums/'+this.props.music._id) 
    .then(()=>{
        this.props.ReloadData();
    })
    .catch()
    }


    render() {
        return (
            <div>
                <Card style={{ textAlign: 'center' }}>

                    <Card.Body>
                        <Card.Title style={{ fontSize: '40px' }}>{this.props.music.Album}</Card.Title>
                        <Card.Text>
                            <img alt="imgtext" src={this.props.music.Cover} width="500" height="400"></img>
                        </Card.Text>
                        <p style={{ fontSize: '30px' }}>{this.props.music.Band}</p>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteAlbum}>Delete</Button>  
                </Card>

            </div>
        );
    }
}

