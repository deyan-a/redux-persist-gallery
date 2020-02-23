import React from 'react';
import { connect } from 'react-redux';
import AlbumsListItem from './AlbumsListItem';

const AlbumsList = ({ albumIds }) => (
    <div>
        {albumIds.map((id) => (
           <AlbumsListItem key={id} albumId={id} />
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    albumIds: Object.keys(state.photos.albums)
});

export default connect(mapStateToProps)(AlbumsList);
