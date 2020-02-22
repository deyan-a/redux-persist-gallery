import { PhotosApi } from '../../api';

export const GET_PHOTOS = 'GET_PHOTOS';

const DEFAULT_STATE = {
    albums: null,
    photos: null,
    allPhotos: []
};

export default function(state = DEFAULT_STATE, action) {
    if (action.type === `${GET_PHOTOS}_FULFILLED`) {
        return state;
    }

    return state;
}

export const getPhotos = () => ({
    type: GET_PHOTOS,
    payload: PhotosApi.getAllPhotos()
});
