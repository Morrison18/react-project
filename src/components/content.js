import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export class Content extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        width="200"
                        height="700" 
                        src="https://images-na.ssl-images-amazon.com/images/I/41LScEAAfZL._AC_.jpg?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Listen on Spotify</h3>
                        <p>Red Hot Chilli Peppers</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        width="200"
                        height="700" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9gDORVBy6ZMJ68GVYAPE0L-K8QuH5e-FvA&usqp=CAU?text=Second slide&bg=282c34"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Listen on spotify</h3>
                        <p>The Stone roses</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        width="200"
                        height="700" 
                        src="https://img.discogs.com/eE8Tc9Uilsd8LOld561Xtloop6k=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-5201894-1387320256-8714.jpeg.jpg?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Listen on Spotify</h3>
                        <p>Fat freddys Drop</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}