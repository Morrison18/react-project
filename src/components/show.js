import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Albums } from './albums';
import axios from 'axios';



export class Show extends React.Component {
    favAlbums = {
        albums:
            [


                {
                    "Band": "The Stone Roses",
                    "Album": "The Stone Roses",
                    "Year": "1989",
                    "Cover": "https://www.clashmusic.com/sites/default/files/field/image/R-156092-1534078946-7723.jpeg.jpg"
                },
                {
                    "Band": "The Stone Roses",
                    "Album": "The Stone Roses",
                    "Year": "1989",
                    "Cover": "https://www.clashmusic.com/sites/default/files/field/image/R-156092-1534078946-7723.jpeg.jpg"
                },
                {
                    "Band": "The Stone Roses",
                    "Album": "The Stone Roses",
                    "Year": "1989",
                    "Cover": "https://www.clashmusic.com/sites/default/files/field/image/R-156092-1534078946-7723.jpeg.jpg"
                },
                {
                    "Band": "The Stone Roses",
                    "Album": "The Stone Roses",
                    "Year": "1989",
                    "Cover": "https://www.clashmusic.com/sites/default/files/field/image/R-156092-1534078946-7723.jpeg.jpg"
                }
            ]

    }
    // when this componet is visable this method gets exe
    componentDidMount() {
        axios.get('')
            .then((response) => {
                this.setState({ albums: response.data.Search })
            })
            .catch((error) => {
                console.log("err");
            });
    }
    render() {
        return (
            <div className="App">
                <Albums myalbums={this.favAlbums.albums}></Albums>
            </div>

        );
    }
}
