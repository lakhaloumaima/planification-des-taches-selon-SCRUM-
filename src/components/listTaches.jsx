import { Badge, Table, Tag  } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getprojects, selectprojects } from '../features/project/projectsSlice';
import {
    CheckCircleOutlined, CloseCircleOutlined, CheckOutlined,
    CloseOutlined
} from '@ant-design/icons';

const ListTaches = () => {

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

    const addTache  = () => {
        window.location.href = '/Addtache'
       
    }
    const dispatch = useDispatch()
    const projects = useSelector(selectprojects)

    useEffect(() => {
            dispatch(getprojects())
    }, []);

 const columns = [
    {
        title: 'Date_debut',
        dataIndex: 'tache',
        key: 'tache',
        render: (text, record) => (
            <>
                {record.tache[0].date_debut} <br></br>
                

            </>
        ),
    },
    {
        title: 'Date_fin',
        dataIndex: 'tache',
        key: 'tache',
        render: (text, record) => (
            <>
                {record.tache[0].date_fin} <br></br>
                

            </>
        ),
    },
    {
        title: 'Developer Name',
        dataIndex: 'tache',
        key: 'tache',
        render: (text, record) => (
            <>
                
                {record.tache[0].developer} <br></br>
               

            </>
        ),
    },
    {
        title: 'Tache Name',
        dataIndex: 'tache',
        key: 'tache',
        render: (text, record) => (
            <>
               
                {record.tache[0].tache_name} <br></br>
               

            </>
        ),
    },
    {
        title: 'State',
        dataIndex: 'tache',
        key: 'tache',
        render: (text, record) => (
            <>
                {record.tache[0].etat === "en_attente" && <Tag color="cyan">to do</Tag>}
                {record.tache[0].etat === "en_cours" && <Tag color="lime">in progress</Tag>}
                {record.tache[0].etat === "terminee" && <Tag color="red">terminated</Tag>}
            </>
        ),
       
    },
    {
        title: 'Actions',
        key: 'tache',
        dataIndex: 'tache',
        render: (text, record) => (
            <>
                {record.tache[0].etat === "en_attente" &&
                    <>
                        <CheckCircleOutlined /*onClick={() => update(record, 2)}*/ style={{ fontSize: "20px", color: "green", cursor: "pointer" }} />
                        <CloseCircleOutlined /*onClick={() => update(record, 3)}*/ style={{ fontSize: "20px", color: "red", marginLeft: "10px", cursor: "pointer" }} />
                    </>
                }

                {record.tache[0].etat === "en_cours" && <CheckOutlined style={{ color: "green", fontSize: "20px" }} />}
                {record.tache[0].etat === "terminee" && < CloseOutlined style={{ color: "red", fontSize: "20px" }} />}


            </>
        ),
    },


];
return (
    <div className="container"  >
        <div> 
          <button style={{backgroundColor:"SteelBlue"}} class="btn btn-info" onClick={addTache}>
        Add Tache
      </button> 
          </div> <br></br>
        <h2>Taches <Badge count={projects.length} showZero /> </h2>
        <Table columns={columns} dataSource={projects} />

          <br></br>
          
        </div>
        
    )
}

export default ListTaches
