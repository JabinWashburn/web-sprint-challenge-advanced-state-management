import axios from 'axios'

export  const SMURF_LOADING = 'SMURF_LOADING'
export const SMURF_SUCCESS = 'SMURF_SUCCESS'
export const SMURF_FAIL = 'SMURF_FAIL' 
export const SMURF_ADD = 'SMURF_ADD'

export const getSmurfs = () => (dispatch) => {
    dispatch({type: SMURF_LOADING})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res)
        dispatch({type: SMURF_SUCCESS, payload: res.data})
    })

    .catch(err => dispatch({type: SMURF_FAIL, payload: err.message}))
}

export const addSmurf = (smurf) => (dispatch) => {
    dispatch({type: SMURF_LOADING})
    axios.post('http://localhost:3333/smurfs', smurf)
    .then( res => {
        dispatch({type: SMURF_ADD, payload: res.data.data})
    })
    .catch(err => dispatch({type: SMURF_FAIL, payload: err.message}))
}