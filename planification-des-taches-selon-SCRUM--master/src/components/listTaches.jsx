
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletetache, getprojects, selectauthedproject, selectprojects } from '../features/project/projectsSlice';
import {
    CheckCircleOutlined, CloseCircleOutlined, CheckOutlined, EditOutlined 
} from '@ant-design/icons';
import { getuser, getusers, selectusers } from '../features/users/usersSlice';
import { Badge, Button, DatePicker, Descriptions, Form, Input, message, Modal, Result, Select, Table, Tag  } from 'antd'
import  { gettachebydeveloper, gettaches, selectauthedtaches , selecttache, selecttachess, updatetache} from '../features/tache/tachesSlice';

const ListTaches = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const users = useSelector(selectusers)
    const tache = useSelector(selecttache)
    const taches = useSelector(selecttachess)
    const user = useSelector(selectusers)


    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
/*
    const update = (tache, value) => {
        let data = {
            id: tache._id,
            data: {
                etat: value
            }
        }

        dispatch(updateproject(data))
    }
    */
   
    const onFinish = (values) => {   
       
    console.log('Success:', values);
        let data = {
            tache_id : values.tache_id ,      
        }
        dispatch(deletetache(data))
    }
    const erreur = () => {
        message.error(' tache not updated , date_fin < date_debut');
    };
    const onFinish2 = (values) => {   
       
        let data = {
            tache_id : values.tache_id , 
            tache_name : values.tache_name ,
            date_debut : values.date_debut ,
            date_fin : values.date_fin > values.date_debut ? values.date_fin+"" : erreur()  ,
            etat : values.etat ,
            //email : values.email ,
            data : values,
        }
        dispatch(updatetache(data))
        
        handleCancel() 
        //failed();
    };
    const onFinish3 = (values) => {     
        console.log('Success:', values);
         let data = {
             tache_id : values.tache_id ,      
         }
     dispatch(gettaches(data))
     
     console.log("data one tache :" + data)
     }
    const onFinishFailed3 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinishFailed2 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const addTache  = () => {
        window.location.href = '/Addtache'
       
    }
    const dispatch = useDispatch()
    const projects = useSelector(selectprojects)
    const project = useSelector(selectauthedproject)

    useEffect(() => {
            dispatch(getprojects())        
    }, []);
    const erreurEmail = () => {
        message.error(' not valid email developer ');
    };
    const onFinish4 = (values) => {
        console.log('Success:', values);
        let data = { 
            email : values.email +"" ,  
           // roll :  values.roll =='developer' ? values.roll +"" : erreurEmail(),  
        }
        //dispatch(getuser(data))
      //  dispatch(getprojects())
        //dispatch(getusers(data))
        
            dispatch(gettachebydeveloper(data))
            console.log("tache by de : " + data)
        
    }; 
  
    const onFinishFailed4 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    const columns = [
        
        {
            title: 'Id tache',
            dataIndex: 'tache_id',
            key: 'tache_id',
            render: (text, record) => (
                <>
                    {record.tache_id} <br></br>
                    
    
                </>
            ),
        },
        
        {
            title: 'Date_debut',
            dataIndex: 'tache',
            key: 'tache',
            render: (text, record) => (
                <> 
              { record.date_debut }
                  
                    
                <br></br>
    
                </>
            ),
        },
        {
            title: 'Date_fin',
            dataIndex: 'tache',
            key: 'tache',
            render: (text, record) => (
                <>
                    {record.date_fin} <br></br>
                    
                    
    
                </>
            ),
        },
        {
            title: 'Developer Name',
            dataIndex: 'tache',
            key: 'tache',
            render: (text, record) => (
                <>
                    
                    {record.developer} <br></br>
                    
                </>
            ),
        },
        {
            title: 'Tache Name',
            dataIndex: 'tache',
            key: 'tache',
            render: (text, record) => (
                <>
                   
                    {record.tache_name} <br></br>
                    
    
                </>
            ),
        },
        {
            title: 'Etat',
            dataIndex: 'etat',
            key: 'etat',
            render: (text, record) => (
                <>
                   
                
                {record.etat === "en_attend" && <Tag color="red">to do</Tag>}
                {record.etat === "en_cours" && <Tag color="cyan">in progress</Tag>}
                {record.etat === "terminee" && <Tag color="lime">terminated</Tag>} <br></br>
          
                    
    
                </>
            ),
        },
        {
            title: 'Project Name',
            dataIndex: 'project_name',
            key: 'project_name',
            render: (text, record) => (
                <>
                   
                    {record.project_name} <br></br>
                    
    
                </>
            ),
        },
        {
            title: 'Update',
            dataIndex: 'Update',
            key: 'Update',
            render: (text, record) => (
                <>
                   
                   <li><a onClick={() => showModal()} ><EditOutlined style={{ color: 'green', cursor: 'pointer' }} /></a></li>
    
                </>
            ),
        },
    
    ];

return (
    <div className="container" > 
        <button style={{backgroundColor:"SteelBlue"}} class="btn btn-info" onClick={addTache}>
            Add Tache
      </button> 
      <div  class="form-group row"  >  
          <Form
          style={{marginTop:"50px"}}
              name="basic"
              labelCol={{
                  span: 12,
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
                  label="Delete by Tache Id "
                  name="tache_id"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your id !',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>
              
              <Form.Item
                  wrapperCol={{
                      offset: 15,
                      span: 11,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      Delete 
                  </Button>
                  </Form.Item>
          </Form>
          
          <Form
          style={{marginTop:"50px"}}
              name="basic"
              labelCol={{
                span: 12,
                offset:3
            }}
            wrapperCol={{
                span: 13,
            }}
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish3}
              onFinishFailed={onFinishFailed3}
          >   
              
            
            <Form.Item
                  label="get Tache By Id "
                  name="tache_id"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your id !',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>
              
              <Form.Item
                  wrapperCol={{
                    offset: 15,
                    span: 12,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      See 
                  </Button>
                  </Form.Item>
          </Form>
        </div>
        {taches !== undefined ?  
        <Descriptions style={{ marginTop: "50px" }} title="Tache ">
                <Descriptions.Item label="tache_id">{taches.tache_id}</Descriptions.Item>
                
                <Descriptions.Item label="tache_name">{taches.tache_name}</Descriptions.Item>
                <Descriptions.Item label="project_name">{taches.project_name}</Descriptions.Item>
                <Descriptions.Item label="developer">{taches.developer}</Descriptions.Item>
                <Descriptions.Item label="date_debut">{taches.date_debut}</Descriptions.Item>
                <Descriptions.Item label="date_fin">{taches.date_fin}</Descriptions.Item>
                <Descriptions.Item label="Etat">{taches.etat}</Descriptions.Item>
        </Descriptions> 
        :  <Result
        status="500"
        title="No data"
        // subTitle="Sorry, something went wrong."
        extra={<Button type="primary" href="/Home">Back Home</Button>}
        />
        }
          <br></br>
<div class="form-group row">
   
   <Form
   style={{marginTop:"50px"}}
       name="basic"
       labelCol={{
           span: 15,
           offset:0
       }}
       wrapperCol={{
           span: 10,
       }}
       initialValues={{
           remember: true,
           //email : user.email
       }}
       onFinish={onFinish4}
       onFinishFailed={onFinishFailed4}
   >   
       
     
     <Form.Item
           label="Get Tache By Email developer "
           name="email"
           rules={[
               {
                   required: true,
                   message: 'Please input your email !',
               },
               {type : 'email'}
           ]}
       >
           
           <Input />
       </Form.Item>
       
       <Form.Item
           wrapperCol={{
               offset: 15,
               span: 10,
           }}
       >
           <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
               See 
           </Button>
           </Form.Item>
   </Form>
   </div>
   
   <div> 
   <h2>Taches by developer</h2>
   {tache !== undefined ?  
        <Table columns={columns} dataSource={tache} />
        
        :  <Result
        status="500"
        title="No data"
        // subTitle="Sorry, something went wrong."
        extra={<Button type="primary" href="/Home">Back Home</Button>}
        />
    }
</div>
   <Modal footer={null} title="Update taches" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
             <Form
                 name="basic"
                 style={{marginTop:"20px"}}
                 layout="vertical"
                 initialValues={{ 
                    //id : tache.id ,
                    //tache_id : tache.tache_id,
                    //etat : tache.etat ,
                 }}
                 onFinish={onFinish2}
                 onFinishFailed={onFinishFailed2}
             >
                 <Form.Item
                    label="tache_id"
                     name="tache_id"
                     rules={[{ required: true, message: 'Please input your tache_id !' }]}
                 >
                     <Input />
                 </Form.Item>
                 <Form.Item
                           label="tache name"
                            name="tache_name"
                            rules={[{ required: false, message: 'Please input your tache_name !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="date debut"
                            name="date_debut"
                            rules={[{ required: false, message: 'Please input your date_debut !' }]}
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                           label="date fin"
                            name="date_fin"
                            rules={[{ required: false, message: 'Please input your date_fin !' }]}
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                           label="developper"
                            name="email"
                            rules={[{ required: false, message: 'Please input your email !' }]}
                        >
                            <Input />
                        </Form.Item>
                 <Form.Item
                    label=" etat"
                     name="etat"
                     rules={[{ required: false, message: 'Please input your etat !' }]}
                 >
                    <Select placeholder="Please select etat">
                    <Option value="en_cours">in progress</Option>
                    <Option value="en_attend">to do</Option>                
                    <Option value="terminee">termined</Option>
                </Select>
                 </Form.Item>
                 <Form.Item >
                     <Button type="primary" htmlType="submit">
                         Update
                     </Button>
                 </Form.Item>
             </Form>
         
        
     </Modal>
          <br></br>
       
        </div>
        
    ) 
} ;

export default ListTaches