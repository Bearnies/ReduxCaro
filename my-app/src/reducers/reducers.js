import {combineReducers} from 'redux'
import {
    NEXT_PLAYER,
    NEW_NEXTPLAYER,
    PLAY_AGAIN,
    SORT_ASCEND,
    GET_WINSQUARES,
    NEW_WINNER,
    NEW_HISTORY,
    NEW_STEPNUMBER,
} from '../actions/actions'

const xIsNext = (state = true, action) => {
    switch (action.type) {
      case NEXT_PLAYER:
        return !state
      case NEW_NEXTPLAYER:
        return action.newnextplayer
      default:
        return state
    }
}

const sortAscend = (state = false, action) => {
    switch (action.type) {
      case SORT_ASCEND:
        return !state
      case PLAY_AGAIN:
        return false
      default:
        return state
    }
}

const winSquares = (state = [], action) => {
    switch (action.type) {
      case GET_WINSQUARES:
        return action.winSquares
      case PLAY_AGAIN:
        return []
      default:
        return state
    }
}

const winner = (state = null, action) => {
    switch (action.type) {
      case NEW_WINNER:
        return action.winner
      case PLAY_AGAIN:
        return null
      default:
        return state
    }
}

const history = (state = [{row: null, col: null}], action) => {
    switch (action.type) {
      case NEW_HISTORY:
        return action.history
      case PLAY_AGAIN:
        return [{row: null, col: null}]
      default:
        return state
    }
}

const stepNumber = (state = 0, action) => {
    switch (action.type) {
      case NEW_STEPNUMBER:
        return action.stepNumber
      case PLAY_AGAIN:
        return 0
      default:
        return state
    }
}

export default combineReducers({
    xIsNext,
    sortAscend,
    winSquares,
    winner,
    history,
    stepNumber
});
  