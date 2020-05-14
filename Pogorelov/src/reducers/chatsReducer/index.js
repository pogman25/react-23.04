import { getChats } from '../../actions/chatsActions';

const initialState = {
  chatByIds: {},
  chatIds: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case getChats:
      return action.payload;
    case updateChats:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default reducer;
