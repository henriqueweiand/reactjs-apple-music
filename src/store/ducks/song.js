export const Types = {
  GET_REQUEST: 'song/GET_REQUEST',
  GET_SUCCESS: 'song/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: true,
};

export default function song(state = INITIAL_STATE, action) {
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
  getSongRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),
  getSongSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
