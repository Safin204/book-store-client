import React, {useEffect, useState} from 'react';
import AllRequest from '../AllRequest/AllRequest';

const Takearequest = () => {
    const[requests,setrequests]=useState([])
    useEffect(function(){
        fetch("https://assighment11.herokuapp.com/request")
          .then((res) => res.json())
          .then((data) => setrequests(data));

    },[requests])
    return (
        <div className='takerequest'>
            {
                requests.map((request,index)=> <AllRequest key={index}  value={index} request={request}></AllRequest>)
            }
        </div>
    );
};

export default Takearequest;