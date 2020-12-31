import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Albums } from './albums';
import axios from 'axios';



export class Show extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);

    }

    state = {
        music: []

    }

    ReloadData() {
        axios.get('http://localhost:4000/api/albums')
            .then((response) => {
                this.setState({ music: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }


    // when this componet is visable this method gets exe
    componentDidMount() {
        axios.get('http://localhost:4000/api/albums')
            .then((response) => {
                this.setState({ music: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="App">
                <Albums myalbums={this.state.music} ReloadData={this.ReloadData}></Albums>

            </div>

        );
    }
}
