import actions from './actions'

const DEV = process.env.REACT_APP_AUTHENTICATED
  ? {
      id: '1',
      name: 'Tom Jones',
      role: 'admin',
      email: 'demo@sellpixels.com',
      avatar: '',
      authorized: true,
    }
  : {}

const initialState = {
  id: '',
  name: '',
  role: '',
  email: '',
  avatar: '',
  authorized: false,
  loading: false,
  ...DEV, // remove it, used for demo build
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
