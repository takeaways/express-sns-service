import React from 'react';
import {Input, Form, Button} from 'antd';
import {useSelector} from 'react-redux';

const PostForm = () => {
  const {imagePath} = useSelector(state => state.post);
  return (
    <Form style={{marginBottom:20}} encType='multipart/form-data'>
      <Input.TextArea maxLength={140} placeholder="write..."/>
      <div>
        <input type="file" multiple hidden/>
        <Button>Upload Image</Button>
        <Button type="primary" style={{float:'right'}} htmlType="submit">등록</Button>
      </div>
      <div>
        {imagePath.map((v, i)=>{
          return (
            <div key={v} style={{display:'inline-block'}}>
              <img src={'http://localhost:3065/'+v} style={{width:'200px'}} alt={v}/>
              <div>
                <Button>Delete</Button>
              </div>
            </div>
          )
        })}
      </div>
    </Form>
  )
}

export default PostForm;
