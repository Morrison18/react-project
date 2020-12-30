import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';



export class Albums extends React.Component{
render(){
    return(
    
        <CardDeck>
        
        <Card>
          <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/511VrO-5MBL._SY355_.jpg" />
          <Card.Body>
            <Card.Title>Stadium Arcadium</Card.Title>
            <Card.Text>
              The Red Hot Chilli Peppers
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><a href="https://open.spotify.com/https://open.spotify.com/album/7xl50xr9NDkd3i2kBbzsNZ?autoplay=true/5GfD1Y1vWoRiAP1Ka5xJ9A">Spotify</a></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71BekDJBb3L._SL1425_.jpg" />
          <Card.Body>
            <Card.Title>Rumours</Card.Title>
            <Card.Text>
             Fleetwood Mac
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><a href="https://open.spotify.com/album/https://open.spotify.com/album/0BwWUstDMUbgq2NYONRqlu">Spotify</a></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://i.pinimg.com/474x/96/55/2b/96552bc96982e809ef9fb57432915b3b--the-stone-roses-album-greatest-albums.jpg" />
          <Card.Body>
            <Card.Title>Greatest Hits</Card.Title>
            <Card.Text>
             The Stone Roses
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><a href="https://open.spotify.com/album/5GfD1Y1vWoRiAP1Ka5xJ9A">Spotify</a></small>
          </Card.Footer>
        </Card>

        <CardDeck>
        <Card>
          <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/511VrO-5MBL._SY355_.jpg" />
          <Card.Body>
            <Card.Title>Stadium Arcadium</Card.Title>
            <Card.Text>
              The Red Hot Chilli Peppers
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><a href="https://open.spotify.com/https://open.spotify.com/album/7xl50xr9NDkd3i2kBbzsNZ?autoplay=true/5GfD1Y1vWoRiAP1Ka5xJ9A">Spotify</a></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71BekDJBb3L._SL1425_.jpg" />
          <Card.Body>
            <Card.Title>Rumours</Card.Title>
            <Card.Text>
             Fleetwood Mac
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><a href="https://open.spotify.com/album/https://open.spotify.com/album/0BwWUstDMUbgq2NYONRqlu">Spotify</a></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://i.pinimg.com/474x/96/55/2b/96552bc96982e809ef9fb57432915b3b--the-stone-roses-album-greatest-albums.jpg" />
          <Card.Body>
            <Card.Title>Greatest Hits</Card.Title>
            <Card.Text>
             The Stone Roses
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><a href="https://open.spotify.com/album/5GfD1Y1vWoRiAP1Ka5xJ9A">Spotify</a></small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <CardDeck>
        <Card>
          <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/511VrO-5MBL._SY355_.jpg" />
          <Card.Body>
            <Card.Title>Stadium Arcadium</Card.Title>
            <Card.Text>
              The Red Hot Chilli Peppers
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><a href="https://open.spotify.com/https://open.spotify.com/album/7xl50xr9NDkd3i2kBbzsNZ?autoplay=true/5GfD1Y1vWoRiAP1Ka5xJ9A">Spotify</a></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/4/41/GorillazAlbum.jpg" />
          <Card.Body>
            <Card.Title>Demon Days</Card.Title>
            <Card.Text>
            The Gorillas
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><a href="https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ?autoplay=true">Spotify</a></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="data:image/jpeg;base64,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" />
          <Card.Body>
            <Card.Title>Definitely Maybe</Card.Title>
            <Card.Text>
             Qasis
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><a href="https://https://open.spotify.com/album/3LzKUdUTdJb6P7xGN6SotC?autoplay=true.spotify.com/album/5GfD1Y1vWoRiAP1Ka5xJ9A">Spotify</a></small>
          </Card.Footer>
        </Card>
        </CardDeck>

      </CardDeck>
      
      
    );
}
}