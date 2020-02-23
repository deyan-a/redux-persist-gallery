import { PhotosApi } from '../../api';

export const GET_ALL_PHOTOS = 'GET_ALL_PHOTOS';

const DEFAULT_STATE = {
    albums: null,
    photos: null,
    allPhotos: []
};

export default function(state = DEFAULT_STATE, action) {
    if (action.type === `${GET_ALL_PHOTOS}_FULFILLED`) {
        return state;
    }

    return state;
}

export const getAllPhotos = () => ({
    type: GET_ALL_PHOTOS,
    payload: PhotosApi.getAllPhotos()
});
