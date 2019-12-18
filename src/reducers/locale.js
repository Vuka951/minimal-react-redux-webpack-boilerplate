import {LOCALE_SET} from '../types';

export function locale(state = {lang: 'en'}, action) {
  switch (action.type) {
  case LOCALE_SET:
    return {...state, lang: action.payload};
  default:
    return state;
  }
}
