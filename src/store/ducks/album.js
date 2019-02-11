export const Types = {
  GET_REQUEST: 'album/GET_REQUEST',
  GET_SUCCESS: 'album/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: true,
};

export default function album(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload.data || [], loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getAlbumRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),
  getAlbumSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
