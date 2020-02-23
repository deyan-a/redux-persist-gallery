import { PhotosApi } from '../../api';

export const GET_ALL_PHOTOS = 'GET_ALL_PHOTOS';

const DEFAULT_STATE = {
    albums: {},
    photos: {},
    favorites: []
};


const pipe = (...fns) => (state, data) => fns.reduce((res, f) => f(res, data), state);

const addPhotoToAlbum = (state, photo) => {
    const { albumId, id } = photo;

    
    if (!state.albums[albumId]) {
        return {
            ...state,
            albums: {
                ...state.albums,
                [albumId]: [id]
            }
        };
    }

    if(state.albums[albumId].includes(id)) {
        return state;
    }

    return {
        ...state,
        albums: {
            ...state.albums,
            [albumId]: [...state.albums[albumId], id]
        }
    };
};

const addNewPhoto = (state, photo) => {
    if (state.photos[photo.id]) {
        return {
            ...state,
            photos: {
                ...state.photos,
                [photo.id]: {
                    ...state.photos[photo.id],
                    ...photo
                }
            }
        };
       }

        return {...state,
            photos: {
                ...state.photos, 
                [photo.id]: photo
            }
        };
};

const photosPipe = pipe(addNewPhoto, addPhotoToAlbum);

export default function(state = DEFAULT_STATE, action) {
    if (action.type === `${GET_ALL_PHOTOS}_FULFILLED`) {
        const response = action.payload.data;
        return response.reduce((res, photo) => photosPipe(res, photo), state);
    }

    return state;
}

export const getAllPhotos = () => ({
    type: GET_ALL_PHOTOS,
    payload: PhotosApi.getAllPhotos()
});
