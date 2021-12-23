import { Badge, Table, Tag  } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  DeleteOutlined } from '@ant-design/icons';
import { getusers, selectusers } from '../features/users/usersSlice';
import { selectdeveloppers } from '../features/developper/developpersSlice';

const ListDevelopper = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectusers)
    const developpers = useSelector(selectdeveloppers)
    useEffect(() => {
        dispatch(getusers())
}, []);

    const update  = () => {
        window.location.href = '/updateDevelopper'
       
    }

    const addMaster  = () => {
        window.location.href = '/Addmaster'
       
    }


    
    const columns = [
        {
            title: 'First Name',
            key: 'firstName',
            dataIndex: 'firstName',
            render: (text, record) => (
                <>
                    {record.firstName}
                </>
            ),
        },
        {
            title: 'Last Name',
            key: 'lastName',
            dataIndex: 'lastName',
            render: (text, record) => (
                <>
                    {record.lastName}
                </>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (text, record) => (
                <>
                    {record.email}
                </>
            ),
        },
        {
            title: 'Project',
            dataIndex: 'project',
            key: 'project',
            render: (text, record) => (
                <>
                    {record.project}
                </>
            ),
        },
        {
            title: 'Date debut',
            dataIndex: 'date_debut',
            key: 'date_debut',
            render: (text, record) => (
                <>
                    {record.date_debut}
                </>
            ),
        },
        {
            title: 'Date fin',
            dataIndex: 'date_fin',
            key: 'date_fin',
            render: (text, record) => (
                <>
                    {record.date_fin}
                </>
            ),
        },
    /* {
            title: 'Tache',
            dataIndex: 'tache',
            key: 'tache',
            render: (text, record) => (
                <>
                    {record.tache === 1 && <Tag color="cyan">to do </Tag>}
                    {record.tache === 2 && <Tag color="cyan">in progress</Tag>}
                    {record.tache === 3 && <Tag color="lime">finished</Tag>}
                   
                </>
            ),
        },
    */
        {
            title: 'Action ',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <>
                     <button onClick={update} style={{backgroundColor:"SteelBlue"}} class="btn btn-info" >
                        Update
                    </button>
                    <button style={{backgroundColor:"SteelBlue"}} class="btn btn-info" onClick={update}>
                        Delete
                    </button>
                </>
            ),
        },
       

    ];

    return (
        <div className="container"  >
            <div>
            <div> 
          <button style={{backgroundColor:"SteelBlue"}} class="btn btn-info" onClick={addMaster}>
        Add Master
      </button> 
          </div><br></br> 
            <h2>Developpers <Badge count={users.length} showZero />  </h2>
            <Table columns={columns} dataSource={users} /> 
          </div>
          <br></br>
          
        </div>
        
    )
}

export default ListDevelopper
