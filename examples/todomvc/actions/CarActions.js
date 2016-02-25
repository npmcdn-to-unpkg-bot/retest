import * as types from '../constants/CarActionTypes'

export function addCar(owner,model) {
  return { type: types.ADD_CAR, owner, model }
}
