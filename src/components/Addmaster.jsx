import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Modal from 'antd/lib/modal/Modal';

const Addmaster = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="container" style={{ backgroundColor:"steelblue" }}  >
            <div  > <center>
              <h3>Add Master </h3> <br></br>
          <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name developper"
        name="name "
        rules={[
          {
            required: true,
            message: 'Please input your name developper!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="Phone"
        rules={[
          {
            required: true,
            message: 'Please input your Phone!',
          },
        ]}
      >
        <Input />
      </Form.Item>
     

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        
      </Form.Item>  <br></br>
      <button  type="button" class="btn btn-light" > Add </button>
    </Form> <br></br>
    </center>
     
        </div>
        </div>
    )
}

export default Addmaster