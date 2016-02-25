import { ADD_CAR } from '../constants/CarActionTypes'

const initialState = [
  {
    owner: 'Alex',
    model: 'Toyota',
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_CAR:
      return [
        {
          id: state.reduce((maxId, car) => Math.max(car.id, maxId), -1) + 1,
          owner: action.owner,
          model: action.model
        },
        ...state
      ]
    default:
      return state
  }
}
