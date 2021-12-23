import { Badge, Table, Tag } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectdeveloppers } from '../features/developper/developpersSlice';
import {  selectusers  , filtredusers, getusers} from '../features/users/usersSlice';
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox, Row, Col, Alert, message } from 'antd';


const ListUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectusers)
    //const developpers = useSelector(selectdeveloppers)
    const columns = [
        {
            title: 'Id User ',
            dataIndex: 'id',
            key: 'id',
            render: (text, record) => (
                <>
                    {record.id}
                </>
            ),
        },
        {
            title: 'User Name',
            dataIndex: 'username',
            key: 'username',
            render: (text, record) => (
                <>
                    {record.username}
                </>
            ),
        },
        {
            title: 'Email user',
            dataIndex: 'email',
            key: 'email',
            render: (text, record) => (
                <>
                    {record.email}
                </>
            ),
        },
        {
            title: ' Phone Number ',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            render: (text, record) => (
                <>
                    {record.phoneNumber}
                </>
            ),
        },
        {
            title: 'Age user',
            dataIndex: 'age',
            key: 'age',
            render: (text, record) => (
                <>
                    {record.age}
                </>
            ),
        },
        {
            title: 'Description ',
            dataIndex: 'description',
            key: 'description',
            render: (text, record) => (
                <>
                    {record.description}
                </>
            ),
        },
        {
            title: 'Roll user',
            dataIndex: 'roll',
            key: 'roll',
            render: (text, record) => (
                <>
                    {record.roll}
                </>
            ),
        },
    ];

    
const onFinish = (values) => {
      console.log('Success:', values);

      let data = {
          roll : values.roll,
          
      }

      dispatch(getusers(data))
      //failed();
  };

  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };

  return (
      <div style={{ marginTop: "-200px" }}  >
         
         <h2>Users <Badge count={users.length} showZero />  </h2>
            
          <div className='products-catagories-area clearfix' >
          
          <Form
          style={{marginTop:"200px"}}
              name="basic"
              labelCol={{
                  span: 4,
                  offset:3
              }}
              wrapperCol={{
                  span: 8,
              }}
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
          >
             

            
              
              <Form.Item
                  label="Roll"
                  name="roll"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your roll !',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>

             

             

              <Form.Item
                  wrapperCol={{
                      offset: 7,
                      span: 8,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      List
                  </Button>
                 
              </Form.Item>
          </Form>
          
          <div>
          <h2>Users <Badge count={users.length} showZero /> </h2>
        <Table columns={columns} dataSource={users} />
          </div>
      </div>
      </div>
  )

}
export default ListUsers

/*
 {
            users.map((c, i) => {
                return (
                     <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a onClick={()=>dispatch(filtredusers({id : c.id }))}  >{c.roll}</a></h4>
                        </div>
                    </div>
                                    )
                                })
                            }

*/