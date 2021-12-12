import React , { Component }from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';




export default class ContactTable extends Component {

    constructor(props){
        super(props)
        this.state = {
            contact:[],
        }
    }
    async componentDidMount(){
        axios
        .get("http://localhost:3000/get-contact",{withCredentials:true})
        .then(response => {
            if(response.status===200){
                this.setState({
                    contact:response.data
                })
                
            }else{
                this.setState({
                    contact:[]
                })
            }
        })
        .catch(error => {
          console.log("Register details");
        });
    }
   
  render(){
      
    const { contact } = this.state;
    console.log(contact)
    return (
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Mobile</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell>Message</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {contact.map((row) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row._id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.mobile}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.subject}</TableCell>
                    <TableCell>{row.message}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        );
  }
}