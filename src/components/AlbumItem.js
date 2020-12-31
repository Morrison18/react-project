import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'; // import the bootstrap card 




export class AlbumItem extends React.Component {

    render() {
        return (
            <div>
                          <Card style={{ textAlign: 'center'} }>
  
  <Card.Body>
    <Card.Title style={{fontSize: '40px'}}>{this.props.album.Band}</Card.Title>
    <Card.Text>
    <img alt="imgtext" src={this.props.album.Cover} width="200" height="300"></img>
    </Card.Text>
   <p style={{fontSize: '30px'}}>{this.props.album.Album}</p>
  </Card.Body>
</Card>

            </div>
        );
    }
}

export default AlbumItem;