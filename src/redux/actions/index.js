const SIGNED_IN = 'SIGNED_IN'
const NOT_SIGNED_IN = 'NOT_SIGNED_IN'
const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
const SIGN_IN_FAIL = 'SIGN_IN_FAIL'
const SIGNED_IN_ERROR = 'SIGNED_IN_ERROR'
const SIGN_OUT_ERROR = 'SIGN_OUT_ERROR'
const SIGNED_UP_ERROR = 'SIGNED_UP_ERROR'

// Profile
const PROFILE_FETCHED = 'PROFILE_FETCHED'
const PROFILE_NOT_FETCHED = 'PROFILE_NOT_FETCHED'
const PROFILE_FETCHED_ERROR = 'PROFILE_FETCHED_ERROR'

// Watchlist
const WATCHLIST_FETCHED = 'WATCHLIST_FETCHED'
const WATCHLIST_NOT_FETCHED = 'WATCHLIST_NOT_FETCHED'
const WATCHLIST_FETCH_FAILED = 'WATCHLIST_FETCH_FAILED'
const WATCHLIST_UPDATED = 'WATCHLIST_UPDATED'
const WATCHLIST_UPDATE_FAILED = 'WATCHLIST_UPDATE_FAILED'

// News
const HEADLINES_FETCHED = 'HEADLINES_FETCHED'
const HEADLINES_NOT_FETCHED = 'HEADLINES_NOT_FETCHED'
const NEWS_FETCHED = 'NEWS_FETCHED'
const NEWS_NOT_FETCHED = 'NEWS_FETCHED'

// Error types
const SERVER_ERROR = 'SERVER_ERROR'
const AUTH_SERVER_ERROR = 'AUTH_SERVER_ERROR'

// Reset all reducers ( Note, use when sign out)
const RESET = 'RESET'

export {
  SIGNED_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  NOT_SIGNED_IN,
  SIGNED_IN_ERROR,
  SIGN_OUT_ERROR,
  SIGNED_UP_ERROR,
  AUTH_SERVER_ERROR,
  SERVER_ERROR,
  PROFILE_FETCHED,
  PROFILE_NOT_FETCHED,
  PROFILE_FETCHED_ERROR,
  WATCHLIST_FETCHED,
  WATCHLIST_FETCH_FAILED,
  WATCHLIST_NOT_FETCHED,
  WATCHLIST_UPDATED,
  WATCHLIST_UPDATE_FAILED,
  HEADLINES_FETCHED,
  HEADLINES_NOT_FETCHED,
  NEWS_FETCHED,
  NEWS_NOT_FETCHED,
  RESET
}