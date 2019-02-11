export const Types = {
  GET_REQUEST: 'artist/GET_REQUEST',
  GET_SUCCESS: 'artist/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: true,
};

export default function artist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload.data, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getArtistRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),
  getArtistSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
