import { Badge, Table, Space , Button , Form , Input , Modal, Descriptions, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteproject, getprojectbyclient, getprojects,  selectauthedproject,  selectdatachanged,  selectproject,  selectprojects, updateproject } from '../features/project/projectsSlice';
import { CloseCircleOutlined , EditOutlined } from '@ant-design/icons';
import { selectauthedtaches, updatetaches } from '../features/tache/tachesSlice';
import { getuser, getusers, selectautheduser, selectdatachenged, selectusers, selectuserss, updateuser } from '../features/users/usersSlice';



const UpdateUsers = () => {
    const dispatch = useDispatch()
    const projects = useSelector(selectprojects)
    const users = useSelector(selectuserss)
    const user = useSelector(selectautheduser)
    const datachanged = useSelector(selectdatachenged)
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
            title: 'email user',
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
                    {record.roll}
                </>
            ),
        },
        {
            title: 'Update',
            key: 'update',
            render: (text, record) => (
                <li><a onClick={() => showModal()} ><EditOutlined style={{ color: 'green', cursor: 'pointer' }} /></a></li>
            ),
        },
    
    ];

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
    const erreur = () => {
        message.error('email not valid');
    };
    const onFinish2 = (values) => {
        console.log('Success:', values);

        let data = {
            
            email : !(values.email)  ? values.email +"": erreur()  ,
            // username : values.username,
            age : values.age+"" ,
            description : values.description+"" ,
           lastName : values.lastName+"",
            firstName : values.firstName+"",
            roll : values.roll+"" ,
            data : values ,
        }
      // dispatch(getuser(data))
        dispatch(updateuser(data))
        console.log(data)
        handleCancel()
    };
    const onFinishFailed2 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

return (
    <div className="container"  >
         
        <h2>Users  </h2>
        <Table columns={columns} dataSource={users} />
        <Modal footer={null} title="Update users" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               <div>

                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                            email : users.email , 
                           // id : users.id ,
                         }}
                        onFinish={onFinish2}
                        onFinishFailed={onFinishFailed2}
                    >
                        
                        <Form.Item
                           label="email"
                            name="email"
                            rules={[
                                { required: false, message: 'Please input your email !' } ,
                                {type:'unique'}
                        ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="firstName"
                            name="firstName"
                            rules={[{ required: false, message: 'Please input your firstName !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="lastName"
                            name="lastName"
                            rules={[{ required: false, message: 'Please input your lastName !' }]}
                        >
                            <Input />
                        </Form.Item>
                         <Form.Item
                           label="phoneNumber"
                            name="phoneNumber"
                            rules={[{ required: false, message: 'Please input your phoneNumber !' }]}
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
                           label="description"
                            name="description"
                            rules={[{ required: false, message: 'Please input your description !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="roll"
                            name="roll"
                            rules={[{ required: false, message: 'Please input your roll !' }]}
                        >
                            <Input />
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
)

}
export default UpdateUsers