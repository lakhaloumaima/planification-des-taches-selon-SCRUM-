import { Badge, Table, Tag } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectdeveloppers } from '../features/developper/developpersSlice';
import {  selectusers  , filtredusers, getusers, selectseletestatus, deleteuser, selectdatachenged, selectuserss} from '../features/users/usersSlice';
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox, Row, Col, Alert, message  } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';


const ListUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectuserss)
    const deleted = useSelector(selectseletestatus)
    const datachanged = useSelector(selectdatachenged)
    const user = useSelector(selectusers)
   
    //const developpers = useSelector(selectdeveloppers)
    useEffect(() => {
       
    }, [datachanged]);
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
            title: 'Roll user',
            dataIndex: 'roll',
            key: 'roll',
            render: (text, record) => (
                <>
                
                {record.roll === "admin" && <Tag color="red">admin</Tag>}
                {record.roll === "scrum_master" && <Tag color="cyan">scrum_master</Tag>}
                {record.roll === "developer" && <Tag color="purple">developer</Tag>}
                {record.roll === "client" && <Tag color="lime">client</Tag>} <br></br>
          
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
  const onFinish2 = (values) => {
    console.log('Success:', values);

    let data = {
        email : values.email ,
    }
    dispatch(deleteuser(data))
   // window.location.reload()
    
};

  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };
  const onFinishFailed2 = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

  return (
      <div style={{ marginTop: "-200px" }}  >
          <div className='products-catagories-area clearfix' >


    <div  class="form-group row"  >                             
        <Form
          style={{marginTop:"200px"}}
              name="basic"
              labelCol={{
                  span: 4,
                  offset:3
              }}
              wrapperCol={{
                  span: 15,
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
                      span: 15,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      List
                  </Button>
                 </Form.Item>
                
          </Form>         
         
        <Form
          style={{marginTop:"200px"}}
              name="basic"
              labelCol={{
                  span: 4,
                  offset:3
              }}
              wrapperCol={{
                  span: 11,
              }}
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish2}
              onFinishFailed={onFinishFailed2}
          >   
              
                  <Form.Item
                  label="Delete User By Email"
                  name="email"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your email !',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>
              
              <Form.Item
                  wrapperCol={{
                      offset: 7,
                      span: 11,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      Delete User By Email
                  </Button>
                  </Form.Item>
          </Form>  
    </div>
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