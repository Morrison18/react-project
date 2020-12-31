import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AlbumItem } from './AlbumItem';



export class Albums extends React.Component {

    render() {
        return this.props.myalbums.map((music)=>{
            return <AlbumItem music={music} ReloadData={this.props.ReloadData}></AlbumItem>
        })
    }
}