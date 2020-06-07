import axios from 'axios';
import { REGISTER, FAILD_REGISTER, LOGIN, FAILD_LOGIN, AUTHENTICATED, NOT_AUTHENTICATED } from "../type";
import { message } from "antd";
import Router from 'next/router';
import { setCookie } from 'nookies';

const instance = axios.create({
  baseURL: 'http://localhost:1337',
  timeout: 12000
});

export const Register_facebook = () => async () => {
  try {
    const auth = await instance.get('/connect/facebook', {
      headers: {
        'Access-Control-Allow-Headers': '*'
      }
    });
    console.log({ auth });
  } catch (err) {
    console.log({ err });
  }
};




export const Authetication = (cookie) => async dispatch => {
  try {
    const auth = await instance.get('/users-permissions/refreshToken', {
      headers: { Authorization: `Bearer ${cookie}` }
    });
    dispatch({
      type: AUTHENTICATED,
      payload: auth.data
    });
  } catch (err) {
    dispatch({
      type: NOT_AUTHENTICATED,
      payload: err
    });
  }
};

export const Register_action = ({ username, email, password }) => async dispatch => {
  try {
    message.loading('Action en cours...', 0);
    const register = await instance.post('/auth/local/register ', { username, email, password });
    dispatch({
      type: REGISTER,
      payload: { _id: register.data.user._id, username: register.data.user.username }
    });
    message.destroy();
    setCookie(null, "token", register.data.jwt, { maxAge: 30 * 24 * 60 * 60, path: "/" });
    Router.push('/', '/');
  } catch (error) {
    message.destroy();
    dispatch({
      type: FAILD_REGISTER,
      payload: error
    });
  }
};

export const Login_action = ({ identifier, password }) => async dispatch => {
  try {
    message.loading('Action en cours...', 0);
    const login = await instance.post('/auth/local', { identifier, password });
    dispatch({
      type: LOGIN,
      payload: { _id: login.data.user._id, username: login.data.user.username }
    });
    message.destroy();
    setCookie(null, "token", login.data.jwt, { maxAge: 30 * 24 * 60 * 60, path: "/" });
    Router.push('/', '/');
  } catch (error) {
    message.destroy();
    dispatch({
      type: FAILD_LOGIN,
      payload: error
    });
  }
};