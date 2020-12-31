import React from 'react';
import { AlbumItem } from './AlbumItem';



export class Albums extends React.Component {

    render() {
        return this.props.myalbums.map( (album)=>{
            return <AlbumItem album={album}></AlbumItem>
        })
    }
}