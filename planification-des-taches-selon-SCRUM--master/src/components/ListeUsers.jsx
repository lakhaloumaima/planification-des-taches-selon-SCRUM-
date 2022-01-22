import { Badge, Result, Select, Table, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectdevelopper, selectdeveloppers } from '../features/developper/developpersSlice';
import {  selectusers  , filtredusers, getusers, selectseletestatus, deleteuser, selectdatachenged, selectuserss, updateuser, getuser, selectautheduser} from '../features/users/usersSlice';
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox, Row, Col, Alert, message ,Modal  } from 'antd';
import { CloseCircleOutlined , EditOutlined} from '@ant-design/icons';
const { Option } = Select;

const ListUsers = () => {
    function handleChange(value) {
        console.log(`selected ${value}`);
      }
    const dispatch = useDispatch()
    const users = useSelector(selectuserss)
    const deleted = useSelector(selectseletestatus)
    const datachanged = useSelector(selectdatachenged)
   // const user = useSelector(selectautheduser)
  
    // const developper = useSelector(selectdevelopper)
    useEffect(() => {
       
    }, [datachanged]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    /*
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
    */
   /*
    const onFinish3 = (values) => {
        console.log('Success:', values);

        let data = {
            
            email : values.email+"" ,
            // roll : values.roll,
            age : values.age+"" ,
            description : values.description+"" ,
           lastName : values.lastName+"",
            firstName : values.firstName+"",
            roll : values.roll+"" ,
            data : values ,
        }
      //dispatch(getuser(data))
        dispatch(updateuser(data))
        console.log(data)
        handleCancel()
    };
    const onFinishFailed3 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
*/
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
  const erreur = () => {
    message.error('email not valid');
};
  const onFinish2 = (values) => {
    console.log('Success:', values);

    let data = {
        email : values.email  ? values.email +""  :  erreur() ,
    }
   // dispatch(getuser(data))
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
                  span: 8,
                  offset:3
              }}
              wrapperCol={{
                  span: 12,
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
                  <Select defaultValue="" style={{ width:90 }} onChange={handleChange}>
                        <Option value="client">client</Option>
                        <Option value="developer">developer</Option>
                        <Option value="scrum_master">scrum_master</Option>
                        
                    </Select>
              </Form.Item>   

              <Form.Item
                  wrapperCol={{
                      offset: 11,
                      span: 12,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'125%',border:'none'}} type="primary" htmlType="submit">
                      List
                  </Button>
                 </Form.Item>
                
          </Form>         
         
        <Form
        
          style={{marginTop:"200px" }}
              name="basic"
              labelCol={{
                  span: 0,
                  offset:3
              }}
              wrapperCol={{
                  span: 25,
              }}
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish2}
              onFinishFailed={onFinishFailed2}
          >   
              
                  <Form.Item
                  label="Delete"
                  name="email"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your email !',
                          
                      },
                  ]}
              >
                 <Select style={{marginLeft:'50px' }}>
                    { users !== undefined ? 
                        users.map((cat, i) => {
                            return (
                                <Option value={cat.email}>                    
                                    {cat.email} &nbsp;      
                                </Option>                             
                            )
                        })
                        :  <Result
                            status="500"
                            title="No data"
                            // subTitle="Sorry, something went wrong."
                            extra={<Button type="primary" href="/Home">Back Home</Button>}
                            />
                    }
                    </Select>
              </Form.Item>
              
              <Form.Item
                  wrapperCol={{
                      offset: 8,
                      span: 30,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      Delete User
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