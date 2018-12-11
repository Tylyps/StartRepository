import {
  EXAMPLE_ACTION,
  EXAMPLE_ACTION_TWO,
} from '../helpers/actionTypes';

export const exampleAction = (add = 1) => ({
  type: EXAMPLE_ACTION,
  payload: {
    add
  }
})

export const exampleActionTwo = (minus = 1) => ({
  type: EXAMPLE_ACTION_TWO,
  payload: {
    minus
  }
})
