import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS, SET_ALERT, CLEAR_ALERT, SET_LOADING } from '../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null,
        authMessage: '',
        dangerMessage: false,
        registerPage: false,
        saved: []
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState)

    const sendAlert = (authMessage, dangerMessage=false) => {

        dispatch({
            type: SET_ALERT,
            payload: { authMessage, dangerMessage }
        })
        setTimeout(()=> {
          dispatch({
              type: CLEAR_ALERT
          })
        }, 3500)
    }

     //Load User
     const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token)
            try {
                const res = await axios.get('/api/auth');
                dispatch({
                    type: USER_LOADED,
                    payload: res.data
                })
            } catch (err) {
                dispatch({ type: AUTH_ERROR })
            }
        }
    }
    //Register User 
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users', formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            loadUser();
        } catch (err) {
            console.log(err.response.data)
            sendAlert(err.response.data.errors[0].msg, true)
        
        }
    }

    //Login User
    const login = async formData => {
       
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('api/auth', formData, config);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

            loadUser();

        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            })
            sendAlert(err.response.data.errors[0].msg, true)
        }

    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
     }
 
     //Logout
     const logout = () => dispatch({ type: LOGOUT });
 
     //Clear Errors
     const clearErrors = () => {
         dispatch({ type: CLEAR_ERRORS });
     }


     return (
         <AuthContext.Provider
           value={{
               token: state.token,
               isAuthenticated: state.isAuthenticated,
               loading: state.loading,
               user: state.user,
               error: state.error,
               registerPage: state.registerPage,
               authMessage: state.authMessage,
               dangerMessage: state.dangerMessage,
               register,
               loadUser,
               login,
               logout,
               clearErrors,
               setLoading
           }}
           >
               {props.children}
           </AuthContext.Provider>
     )

}

export default AuthState