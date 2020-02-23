import { PhotosApi } from '../../api';
import PhotosService from '../../utils/services/PhotosService';

export const GET_ALL_PHOTOS = 'GET_ALL_PHOTOS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

const DEFAULT_STATE = {
    albums: {},
    photos: {},
    favorites: []
};

export default function(state = DEFAULT_STATE, action) {
    if (action.type === `${GET_ALL_PHOTOS}_FULFILLED`) {
        const response = action.payload.data;

        return PhotosService.mergePhotos(state, response);
    }

    if (action.type === ADD_TO_FAVORITES) {
        return {
            ...state,
            favorites: [...state.favorites, action.payload]
        };
    }

    if (action.type === REMOVE_FROM_FAVORITES) {
        return {
            ...state,
            favorites: [...state.favorites.filter(id => id !== action.payload)]
        };
    }

    return state;
}

export const getAllPhotos = () => ({
    type: GET_ALL_PHOTOS,
    payload: PhotosApi.getAllPhotos()
});

export const addToFavorites = photoId => ({
    type: ADD_TO_FAVORITES,
    payload: photoId
});

export const removeFromFavorites = photoId => ({
    type: REMOVE_FROM_FAVORITES,
    payload: photoId
});
