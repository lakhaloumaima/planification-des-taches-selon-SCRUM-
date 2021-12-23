import React from 'react';
import { useDispatch } from 'react-redux';
import { updatedevelopper } from '../features/developper/developpersSlice';

const updateDevelopper = () => {

    const updateD  = () => {
       
        window.location.href = '/ListD'
       
    }


    return ( 
        <div className='container' style={{ backgroundColor:"steelblue" }} > <br></br> 
            <center> <h2> Update Developper </h2> </center> <br></br> 
             <div className="form-group">
                    <label >First Name </label>
                    <input  type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label >Last Name </label>
                    <input  type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label >Email </label>
                    <input  type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label >Project </label>
                    <input  type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label >Date Debut </label>
                    <input  type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label >Date fin </label>
                    <input  type="date" className="form-control" />
                </div>
                <center>
          <button  class="btn btn-black" onClick={updateD} >
        Update 
      </button> <br></br>  </center>
<br></br> 
        </div> 
     );
}
 
export default updateDevelopper;