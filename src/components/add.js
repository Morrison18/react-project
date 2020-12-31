import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Albums } from './albums';



export class Add extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChangeAlbum.bind(this);
        this.onChange = this.onChangeBand.bind(this);
        this.onChange = this.onChangeCover.bind(this);

        this.state = {
            Band: "",
            Album: "",
            Cover: ""
        }
    }
    //only submit once
    onSubmit(r) {
        r.preventDefault();
        alert("You've added "+ this.state.Album + " to your favorites." + this.state.Band +this.state.Cover)
    }
    onChangeAlbum(r) {
        this.setState({
            Album: r.target.value
        })
    }
    onChangeBand(r) {
        this.setState({
            Band: r.target.value
        })
    }
    onChangeCover(r) {
        this.setState({
            Cover: r.target.value
        })
    }
    render() {
        return (
            <div className="App">
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
                            variant="info">
                        </input>
                    </div>

                </form>
            </div>

        );
    }
}