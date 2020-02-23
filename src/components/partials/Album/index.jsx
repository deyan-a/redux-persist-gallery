import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAlbumById } from '../../../store/selectors/photos';
import AlbumPhoto from './AlbumPhoto';
import './styles/Album.css';

const Album = ({ album }) => {
    return (
        <div className="photos-list-container">
            {album.map(photoId => (
                <AlbumPhoto key={photoId} photoId={photoId} />
            ))}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const {
        match: {
            params: { albumId }
        },
        isFavorites
    } = ownProps;

    return {
        album: isFavorites
            ? state.photos.favorites
            : getAlbumById(state.photos.albums, albumId)
    };
};

export default withRouter(connect(mapStateToProps)(Album));
