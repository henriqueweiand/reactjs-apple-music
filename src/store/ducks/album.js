export const Types = {
  GET_REQUEST: 'album/GET_REQUEST',
  GET_SUCCESS: 'album/GET_SUCCESS',
  POST_REQUEST: 'album/POST_REQUEST',
  POST_SUCCESS: 'album/POST_SUCCESS',
  DELETE_REQUEST: 'album/DELETE_REQUEST',
  DELETE_SUCCESS: 'album/DELETE_SUCCESS',
  PUT_REQUEST: 'album/PUT_REQUEST',
  PUT_SUCCESS: 'album/PUT_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function album(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload.data || [], loading: false };
    case Types.POST_SUCCESS:
      return {
        data: [...state.data, action.payload.data],
        loading: false,
      };
    case Types.DELETE_REQUEST:
      return { ...state, loading: true };
    case Types.DELETE_SUCCESS:
      return {
        data: state.data.filter(documento => documento.codigo !== action.payload.codigo),
        loading: false,
      };
    case Types.PUT_REQUEST:
      return { ...state, loading: true };
    case Types.PUT_SUCCESS:
      return {
        data: state.data.map(documento => (String(documento.codigo) === String(action.payload.codigo)
          ? action.payload.data
          : documento)),
        loading: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  getAlbumRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getAlbumSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  postAlbumRequest: data => ({
    type: Types.POST_REQUEST,
    payload: { data },
  }),
  postAlbumSuccess: data => ({
    type: Types.POST_SUCCESS,
    payload: { data },
  }),
  putAlbumRequest: (data, codigo) => ({
    type: Types.PUT_REQUEST,
    payload: { data, codigo },
  }),
  putAlbumSuccess: (data, codigo) => ({
    type: Types.PUT_SUCCESS,
    payload: { data, codigo },
  }),
  deleteAlbumRequest: data => ({
    type: Types.DELETE_REQUEST,
    payload: { data },
  }),
  deleteAlbumSuccess: codigo => ({
    type: Types.DELETE_SUCCESS,
    payload: { codigo },
  }),
};
