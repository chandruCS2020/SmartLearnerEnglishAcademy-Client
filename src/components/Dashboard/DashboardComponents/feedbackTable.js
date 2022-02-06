import React , { Component }from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Rating from '@mui/material/Rating';




export default class FeedbackTable extends Component {

    constructor(props){
        super(props)
        this.state = {
            feedback:[],
        }
    }
    async componentDidMount(){
        axios
        .get("https://testapic.herokuapp.com/get-feedback",{withCredentials:true})
        .then(response => {
            if(response.status===200){
                this.setState({
                    feedback:response.data
                })
                
            }else{
                this.setState({
                    feedback:[]
                })
            }
        })
        .catch(error => {
          console.log("Register details");
        });
    }
   
  render(){
      
    const { feedback } = this.state;
    console.log(feedback);
    return (
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Mobile</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Feedback</TableCell>
                    <TableCell>Rating</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {feedback.map((row) => (
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
                    <TableCell>{row.feedback}</TableCell>
                    <TableCell>
                    <Rating className="Testimonial-rating" name="read-only" value={row.rating} readOnly />
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        );
  }
}