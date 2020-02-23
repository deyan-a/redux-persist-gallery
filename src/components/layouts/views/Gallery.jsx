import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AlbumsList from '../../partials/AlbumsList';
import Album from '../../partials/Album';

const Gallery = () => (
    <Switch>
        <Route path="/albums/:albumId" component={Album} />
        <Route path="/albums" component={AlbumsList} />
    </Switch>
);

export default Gallery;
