import React from 'react';
import axios from 'axios';


export class Update extends React.Component {

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

    // get the album by id and update the state 
    componentDidMount() {
        console.log(this.props.match.params.id);
        
        axios.get('http://localhost:4000/api/albums/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id:response.data.id,
                    Album:response.data.Album,
                    Band:response.data.Band,
                    Cover:response.data.Cover
                });
            })
            .catch((error) => {
                console.log(error);
            });
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
        alert('btn clicked ' +' ' + this.state.Album +' ' + this.state.Band +' ' + this.state.Cover);

        const UpdateAlbum = {
            Album: this.state.Album,
            Band: this.state.Band,
            Cover: this.state.Cover,
            _id: this.state._id
        };
        // making post req to server 
        axios.put('http://localhost:4000/api/albums/'+this.state._id, UpdateAlbum)
        .then(res =>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error);
        });

    }

    render() {
        return (
            <div className="App" style={{ margin: '10%', fontSize: '30px' }}>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Edit Album:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Album}
                            onChange={this.onChangeAlbum}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Edit Band:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Band}
                            onChange={this.onChangeBand}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Edit Cover Art:</label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Cover}
                            onChange={this.onChangeCover}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Edit Album"
                            className="btn btn-info">
                        </input>
                    </div>

                </form>
            </div>

        );
    }
}