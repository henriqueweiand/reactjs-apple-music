export const Types = {
  GET_REQUEST: 'track/GET_REQUEST',
  GET_SUCCESS: 'track/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function track(state = INITIAL_STATE, action) {
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
  getTrackRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getTrackSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
