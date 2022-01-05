import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker ,Select, message} from 'antd';
import { createtache, selectaddtaches, selecttache, selecttachess } from '../features/tache/tachesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getuser, selectusers, selectuserss } from '../features/users/usersSlice';
import { getprojects } from '../features/project/projectsSlice';

const Addtache = () => {
     
  const dispatch = useDispatch()
  const userss = useSelector(selectusers)
  const tache = useSelector(selecttache)
  const taches = useSelector(selecttachess)
  const user = useSelector(selectusers)
  const users = useSelector(selectuserss)
  const addstatus = useSelector(selectaddtaches)
  const { Option } = Select;
  useEffect(() => {
    if (addstatus === 'success') {     
        success()
    }
  }, [addstatus]);
  const success = () => {
    message.success('tache successfuly created');
};
  const onFinish = (values) => {
        console.log('Success:', values);

        let data = {
            project_id : values.project_id,
            email : values.email ,
            tache_name : values.tache_name ,
            date_debut : values.date_debut ,
            date_fin : values.date_fin ,
            etat : values.etat 
        }

        dispatch(createtache(data))
       // dispatch(getuser(data))
       // dispatch(getuser(data))
       // window.location.href = '/ListT'
        //failed();
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };

  return (   
    <div className='products-catagories-area clearfix' style={{ marginTop: "-150px" }}  >   
        <Form
        style={{marginTop:"200px"  }}
            name="basic"
            labelCol={{
                span: 4,
                offset:3
            }}
            wrapperCol={{
                span: 10,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            
            <Form.Item
                label="Project id"
                name="project_id"
                rules={[
                    {
                        required: true,
                        message: 'Please input your project_id !',
                        
                    },
                    
                ]}
            >
                <Input />
            </Form.Item>
            
            
            <Form.Item
                label="Email developper"
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
                label="tache_name "
                name="tache_name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your tache_name !',
                    },
                    {type:'string' , min:5 , max:15}
                ]}
            >
                <Input />
            </Form.Item>
           
            <Form.Item
                label="date_debut "
                name="date_debut"
                rules={[
                    {
                        required: true,
                        message: 'Please input your date_debut !',
                    },
                ]}
            >
                <DatePicker />
            </Form.Item>
            <Form.Item
                label="date_fin"
                name="date_fin"
                rules={[
                    {
                        required: true,
                        message: 'Please input your date_fin !',
                    },
                ]}
            >
                <DatePicker />
            </Form.Item>
            <Form.Item
                name="etat"
                label="Etat "
               
               // hasFeedback
                rules={[{ required: true, message: 'Please select etat !' }]}
            >
                <Select placeholder="Please select etat">
                    <Option value="en_attend">en_attend</Option>
                    <Option value="en_cours">en_cours</Option>
                    <Option value="terminee">terminee</Option>
                </Select>
            </Form.Item>
           

            <Form.Item
                wrapperCol={{
                    offset: 7,
                    span: 8,
                }}
            >
                <Button style={{background: "steelblue" ,outline:"none",width:'125%',border:'none'}} type="primary" htmlType="submit">
                    Add
                </Button>
                
            </Form.Item>
        </Form>
        
    </div>
  
)
} ;


export default Addtache


