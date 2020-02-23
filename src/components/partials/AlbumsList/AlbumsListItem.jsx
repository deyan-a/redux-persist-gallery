import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAlbumById, getPhotoById } from '../../../store/selectors/photos';
import './styles/AlbumsList.css';

const AlbumsListItem = ({albumId, posterPhoto}) => {
    return (
        <article className="album-item-container">
            <Link  className="album-link" to={`/albums/${albumId}`}>
                <img src={posterPhoto.thumbnailUrl} alt="" />
                <div><span>Album {albumId}</span></div>
            </Link>
        </article>
    );
};

const mapStateToProps = (state, ownProps) => {
    const album = getAlbumById(state.photos.albums, ownProps.albumId);
    const posterPhotoId = album[0];
    const posterPhoto = getPhotoById(state.photos.photos, posterPhotoId);

    return {
        album,
        posterPhoto
    };
};

export default connect(mapStateToProps)(AlbumsListItem);
