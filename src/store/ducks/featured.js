export const Types = {
  GET_REQUEST: 'featured/GET_REQUEST',
  GET_SUCCESS: 'featured/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: true,
};

export default function featured(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getFeaturedRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getFeaturedSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
