import React from 'react';
import { connect } from 'react-redux';
import { getPhotoById } from '../../../store/selectors/photos';
import * as actions from '../../../store/modules/photos';

import './styles/Album.css';

class AlbumPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    }

    handleFavoriteClick() {
        const { photoId, isFavorite } = this.props;

        if (isFavorite) {
            this.props.dispatch(actions.removeFromFavorites(photoId));
        } else {
            this.props.dispatch(actions.addToFavorites(photoId));
        }
    }

    render() {
        const { photo, isFavorite } = this.props;

        return (
            <article className="photo-container">
                <img
                    className="photo-item-img"
                    src={photo.thumbnailUrl}
                    alt=""
                />
                <div className="photo-title">
                    <span>{photo.title}</span>
                </div>
                <button className="fav-btn" onClick={this.handleFavoriteClick}>
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            </article>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    photo: getPhotoById(state.photos.photos, ownProps.photoId),
    isFavorite: state.photos.favorites.includes(ownProps.photoId)
});

export default connect(mapStateToProps)(AlbumPhoto);
