import { PhotosApi } from '../../api';
import PhotosService from '../../utils/services/PhotosService';

export const GET_ALL_PHOTOS = 'GET_ALL_PHOTOS';

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

    return state;
}

export const getAllPhotos = () => ({
    type: GET_ALL_PHOTOS,
    payload: PhotosApi.getAllPhotos()
});
