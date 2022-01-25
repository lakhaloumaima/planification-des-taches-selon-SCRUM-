import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker ,Select, message, Result} from 'antd';
import { createtache, selectaddtaches, selecttache, selecttachess } from '../features/tache/tachesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getuser, selectusers, selectuserss } from '../features/users/usersSlice';
import { getprojects, selectprojectmaster } from '../features/project/projectsSlice';

const Addtache = () => {
     
  const dispatch = useDispatch()
  const userss = useSelector(selectusers)
  const tache = useSelector(selecttache)
  const taches = useSelector(selecttachess)
  const user = useSelector(selectusers)
  const users = useSelector(selectuserss)
  const addstatus = useSelector(selectaddtaches)
  const projectsmasterr = useSelector(selectprojectmaster)
  const { Option } = Select;
  useEffect(() => {
      dispatch(getprojects())
    if (addstatus === 'success') {     
        success()
    }
  }, [addstatus]);
  const success = () => {
    message.success('tache successfuly created');
};
const erreur = () => {
    message.error('project not created');
};

  const onFinish = (values) => {
        console.log('Success:', values);

        let data = {
            project_id : values.project_id,
            email : values.email ,
            tache_name : values.tache_name ,
            date_debut : values.date_debut ,
            date_fin : values.date_fin > values.date_debut ? values.date_fin : erreur() ,
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
                project_id : projectsmasterr.project_id ,
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
               <Select >
                    { (  (projectsmasterr !== undefined ) && (projectsmasterr !== null) 
                        &&  (projectsmasterr.project_id !== null)  )
                    ? 
                        projectsmasterr.map((cat, i) => {
                            return (
                                <Option value={cat.id}>                    
                                    {cat.id} &nbsp;      
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
                    <Option value="en_attend">to do</Option>
                    <Option value="en_cours">in progress</Option>
                    <Option value="terminee">termined</Option>
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


