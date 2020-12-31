import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export class Add extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeAlbum = this.onChangeAlbum.bind(this);
        this.onChangeBand = this.onChangeBand.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);

        this.state = {
            Band: "",
            Album: "",
            Cover: ""
        }
    }
   
    onChangeAlbum(r) {
        this.setState({
            Album: r.target.value
        });
    }
    onChangeBand(r) {
        this.setState({
            Band: r.target.value
        });
    }
    onChangeCover(r) {
        this.setState({
            Cover: r.target.value
        });
    }
     //only submit once
     onSubmit(r) {
        r.preventDefault();
       alert('btn clicked' +this.state.Album +this.state.Band +this.state.Cover);

        const newAlbum = {
            Album: this.state.Album,
            Band: this.state.Band,
            Cover: this.state.Cover
        };
        // making post req to server 
        axios.post('http://localhost:4000/api/albums', newAlbum)
        .then(response =>
            console.log(response.data))
        
        .catch((err)=>{
            console.log(err)
        });
    }
    render() {
        return (
            <div className="App" style={{margin: '10%', fontSize: '30px'}}>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Album:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Album}
                            onChange={this.onChangeAlbum}>
                        </input>
                    </div>
                    <div className="form-group">
                    <label>Add Band:</label>
                    <input type="text"
                            className="form-control"
                            value={this.state.Band}
                            onChange={this.onChangeBand}>
                        </input>
                    </div>
                    <div className="form-group">
                    <label>Add Cover Art:</label>
                    <textarea type="text"
                            className="form-control"
                            value={this.state.Cover}
                            onChange={this.onChangeCover}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Add Album"
                            className="btn btn-info">
                        </input>
                    </div>

                </form>
            </div>

        );
    }
}