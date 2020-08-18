import { INDIVIDUAL_MOVIE } from '../constants/actionType';

export default (state = {}, action) => {
  switch (action.type) {
    case INDIVIDUAL_MOVIE: return { result: action.payload };

    default: return state;
  }
};
