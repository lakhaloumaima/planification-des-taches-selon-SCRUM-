import { Badge, Button, Descriptions, Form, Input, Modal, Table, Tag  } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
import tachesSlice, { gettachebydeveloper, gettaches, selectauthedtaches , selecttache, selecttachess, updatetaches} from '../features/tache/tachesSlice';
import { getprojects, selectproject, selectprojects } from '../features/project/projectsSlice';
import {getuser, getusers, selectusers} from '../features/users/usersSlice';


const Taches = () => {
    const project = useSelector(selectproject)
    const taches = useSelector(selecttachess)
    const dispatch = useDispatch()
    const tache = useSelector(selecttache)
    const user = useSelector(selectusers)
    useEffect(() => {    
        dispatch(getprojects())  
    } , []);

  

    const onFinish2 = (values) => {
        console.log('Success:', values);
        let data = { 
            email : values.email,    
        }
       
        dispatch(gettachebydeveloper(data))
        console.log("tache by de : " + data)
        
    }; 
  
    const onFinishFailed2 = (errorInfo) => {
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
                   
                
                {record.etat === "en_attente" && <Tag color="red">to do</Tag>}
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
    
    ];
return (
    <div className="container" >  
          <div class="form-group row">
   
          <Form
          style={{marginTop:"50px"}}
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
              onFinish={onFinish2}
              onFinishFailed={onFinishFailed2}
          >   
              
            
            <Form.Item
                  label="email get Tache By developer "
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
                      span: 8,
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
        <Table columns={columns} dataSource={tache} />
          </div>
        </div>
        
    ) 
} ;

export default Taches
