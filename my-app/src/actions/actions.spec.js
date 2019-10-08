import * as actions from './actions'

describe('Caro Game Actions', () => {

  it('nextPlayer should create NEXT_PLAYER action', () => {
    expect(actions.nextPlayer())
    .toEqual({
      type: 'NEXT_PLAYER',
    })
  })

  it('newnextPlayer should create NEW_NEXTPLAYER action', () => {
    expect(actions.newnextPlayer(true))
    .toEqual({
      type: 'NEW_NEXTPLAYER',
      newnextplayer: true
    })
  })

  it('winSquares should create GET_WINSQUARES action', () => {
    expect(actions
        .newwinSquares([
            {row: 1, col: 0},
            {row: 2, col: 0},
            {row: 3, col: 0},
            {row: 4, col: 0},
            {row: 5, col: 0}
        ]))
    .toEqual({
      type: 'GET_WINSQUARES',
      winSquares: [
        {row: 1, col: 0},
        {row: 2, col: 0},
        {row: 3, col: 0},
        {row: 4, col: 0},
        {row: 5, col: 0}
      ]
    })
  })

  it('winner should create NEW_WINNER action', () => {
    expect(actions.newWinner('X'))
    .toEqual({
      type: 'NEW_WINNER',
      winner: 'X'
    })
  })

  it('playAgain should create PLAY_AGAIN action', () => {
    expect(actions.playAgain())
    .toEqual({
      type: 'PLAY_AGAIN',
    })
  })

  it('sortAscend should create SORT_ASCEND action', () => {
    expect(actions.sortAscend())
    .toEqual({
      type: 'SORT_ASCEND',
    })
  })

  it('newHistory should create NEW_HISTORY action', () => {
    expect(actions.newHistory([{row: null, col: null}]))
    .toEqual({
      type: 'NEW_HISTORY',
      history: [{row: null, col: null}]
    })
  })

  it('newStepNumber should create NEW_STEPNUMBER action', () => {
    expect(actions.newStepNumber(5))
    .toEqual({
      type: 'NEW_STEPNUMBER',
      newstepnumber: 5
    })
  })
})
