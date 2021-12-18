import React , { Component }from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';




export default class RegisterTable extends Component {

    constructor(props){
        super(props)
        this.state = {
            users:[],
        }
    }
    async componentDidMount(){
        axios
        .get("https://temptemp132323232.herokuapp.com/get-users",{withCredentials:true})
        .then(response => {
            if(response.status===200){
                this.setState({
                    users:response.data
                })
                
            }else{
                this.setState({
                    users:[]
                })
            }
        })
        .catch(error => {
          console.log("Register details");
        });
    }
   
  render(){
      
    const { users } = this.state;
    return (
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((row) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row._id}
                    </TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        );
  }
}