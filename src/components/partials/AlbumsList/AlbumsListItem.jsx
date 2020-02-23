import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AlbumsListItem = ({albumId}) => {
    return (
        <div>{albumId}</div>
    );
};


export default AlbumsListItem;

