import React, {useCallback} from 'react';
import {Form, Button, Input} from 'antd';
import {useInput} from '../pages/signup'
import {useDispatch} from 'react-redux';
import {LOG_IN} from '../reducers/user';

const LoginForm = () => {
  const dispatch  = useDispatch();
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type:LOG_IN,
      data:{
        nickname:"GEONIL",
        Post:[],
        Followings:[],
        Followers:[]
      }
    })
  },[id, password]);
  return (
    <Form onSubmit={onSubmit} style={{padding:10}}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br/>
        <Input name="user-id" value={id} onChange={onChangeId} required/>
      </div>
      <div>
        <label htmlFor="user-password">PASSWORD</label>
        <br/>
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required/>
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>LOGIN</Button>
      </div>
    </Form>
  )
}
export default LoginForm
