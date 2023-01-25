

import React from 'react';
import '../../App.css';
import ComplaintList from '../ComplaintList';
import useFetch from '../useFetch';


export default function ViewComplaints(){
    const {data: comps, isPending, error} = useFetch("http://localhost:8000/comps");
    return(
        <>
        <div className='home'>
            {/* <h1 style={color='black'}>All Events</h1> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {comps && <ComplaintList comps = {comps} title='Complaints'/>}
            
        </div>
        </>
    );
}