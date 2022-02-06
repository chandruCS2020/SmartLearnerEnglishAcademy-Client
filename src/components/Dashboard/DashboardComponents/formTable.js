import React, { useContext, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function FormTable() {
    
    const [data, setdata] = useState([]);
    useEffect(() => {
        const getData = async()=>{
            try{
                const res = await axios.get('https://testapic.herokuapp.com/get-forms');
                setdata(res.data)
                console.log(res.data);
            }catch(err){
                console.log(err.messsage);
            }
        }
        getData();
    }, []);
    
    const columns = [
        {field: "_id", headerName: "ID", width: 250 },
        {
            field: "user",
            headerName: "Name",
            width: 200,
            renderCell: (params) => {
                return (
                <div className="userListUser">
                    
                    {params.row.salutation} {params.row.Name}
                </div>
                );
            },
            },
        {field: "Email", headerName: "Email", width: 200 },
        {field: "MobileNumber", headerName: "Number", width: 150 },
        {field: "WhatsappNumber", headerName: "Whatsapp Number", width: 150 },
        {field: "Experience", headerName: "Experience", width: 150 },
        {field: "InstitutionName", headerName: "Institution", width: 150 },
        {field: "Courses", headerName: "Course", width: 150 },
        {field: "PhonicsCourses", headerName: "Phocis Course", width: 200 },
        {field: "PhonicsAbout", headerName: "Phonics About", width: 200 },
        {field: "Qualification", headerName: "Qualification", width: 200 },
        {field: "State", headerName: "State", width: 200 },
        {field: "learntSea", headerName: "Learnt in sea", width: 200 },
        {field: "ReferralType", headerName: "Referral", width: 200 },
        {field: "paymentMethod", headerName: "Payment", width: 200 },
        {field: "Paid", headerName: "Paid", width: 200 },
        {field: "address", headerName: "Address", width: 500 },
        {field: "feedback", headerName: "Feedback", width: 500 },


        
        // {
        //     field: "Email",
        //     headerName: "Email",
        //     width: 250,
        // },
        
    ];
    
    return (
        <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={5}
            checkboxSelection
            getRowId={r=>r._id}
            rowsPerPageOptions={[5]}
            rowHeight={100}
            />
    )
}

