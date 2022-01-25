import { Badge, InputNumber, Result, Select, Table, Tag } from 'antd'
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
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    /*const showModal = () => {
        setIsModalVisible(true);
    };*/
    const showModal2 = (user) => {
        setemail(user.email)
        setIsModalVisible2(true);
    };
    const handleOk2 = () => {
        setIsModalVisible(false);
    };
    const handleCancel2 = () => {
        setIsModalVisible(false);
    };


    const showModal = (cat) => {
        setemail(cat.email)
        setusern(cat.username)
        setage(cat.age)
        setphone(cat.phoneNumber)
        setroll(cat.roll)
        setIsModalVisible(true);
    };
    const [email, setemail] = useState('');
    const [username, setusern] = useState('');
    const [age, setage] = useState('');
    const [phoneNumber, setphone] = useState('');
    const [roll, setroll] = useState('');
   // const [email, setemail] = useState('');
    const onFinish3 = (values) => {
        console.log('Success:', values);

        let data = {
            
            email : values.email+"",
            firstname : values.firstname+"" ,
            age : values.age+"" ,
            description : values.description +"",
            lastName : values.lastName+"",
            username : values.username,
            roll : values.roll+"" ,
            data : values ,
        }
        dispatch(updateuser(data))
        console.log(data)
        handleCancel()
        setIsModalVisible(false)
    };
    const onFinishFailed3 = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
        {
            title: 'Update',
            dataIndex: 'update',
            key: 'update',
            render: (text, record) => (
                <>
                   
                   <li><a onClick={() => showModal(record)} ><EditOutlined style={{ color: 'green', cursor: 'pointer' }} /></a></li>
    
                </>
            ),
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            key: 'delete',
            render: (text, record) => (
              
                <CloseCircleOutlined onClick={() => showModal2(record)} style={{ color: 'red', cursor: 'pointer' }} />
                
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
const success = () => {
    message.success('user successfuly deleted');
};
  const onFinish2 = (values) => {
    console.log('Success:', values);

    let data = {
        email : values.email  ? values.email +""  :  erreur() ,
    }
   // dispatch(getuser(data))
    dispatch(deleteuser(data))
    handleCancel2()
    setIsModalVisible2(false)
   // window.location.reload()
    success()
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
          
    </div>
          <div> 

          <Modal footer={null} title="Delete user" visible={isModalVisible2} onOk={handleOk2} onCancel={handleCancel2}>
               <div>

                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                            remember: true,
                            email : users.email , 
                            email :email ,
                           
                            //id : users.id
                         }}
                        onFinish={onFinish2}
                        onFinishFailed={onFinishFailed2}
                    >
                        
                        <Form.Item
                           label="email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email !' }]}
                        >
                            <Input disabled />
                        </Form.Item>
                        
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Delete
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>

          <h2>Users <Badge count={users.length} showZero /> </h2>
        <Table columns={columns} dataSource={users} />
        <Modal footer={null} title="Update users" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               <div>

                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                            remember: true,
                            email : users.email , 
                            email :email ,
                            username : username ,
                            roll : roll ,
                            age : age ,  
                            phoneNumber: phoneNumber ,
                            //id : users.id
                         }}
                        onFinish={onFinish3}
                        onFinishFailed={onFinishFailed3}
                    >
                        
                        <Form.Item
                           label="email"
                            name="email"
                            rules={[{ required: false, message: 'Please input your email !' }]}
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                           label="firstName"
                            name="username"
                            rules={[{ required: false, message: 'Please input your firstName !' } ,
                            { type: 'string', max: 14 }
                        ]} 
                            
                        >
                            <Input />
                        </Form.Item>
                        
                         <Form.Item
                           label="phoneNumber"
                            name="phoneNumber"
                            rules={[{ required: false, message: 'Please input your phoneNumber !' } ,
                            { type: 'string', min:8 ,max: 8 }
                        ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="age"
                            name="age"
                            rules={[{ required: false, message: 'Please input your age !' }]}
                        >
                            <Input />
                        </Form.Item>
                       
                        <Form.Item
                           label="roll"
                            name="roll"
                            rules={[{ required: false, message: 'Please input your roll !' }]}
                        >
                            <Select defaultValue="" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="client">client</Option>
                                <Option value="developer">developer</Option>
                                <Option value="scrum_master">scrum_master</Option>
                            </Select>
                        </Form.Item>
                        
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Update
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
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