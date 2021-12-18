import React , { Component } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import FeedbackIcon from '@mui/icons-material/Feedback';
import axios from 'axios';

function getAvataricon(icon){
  switch (icon) {
    case 'User':
      return (<PersonIcon />)  
    case 'Contact':
      return (<ContactsIcon />);
    case 'Feedback':
      return (<FeedbackIcon />);
  
    default:
      return (<PersonIcon />);
  }
}
export default class Countdetails extends Component {
  constructor(props){
    super(props)
    this.state = {
        count:[],
    }
}

    async componentDidMount(){
        axios
        .get("https://temptemp132323232.herokuapp.com/count",
        {
          withCredentials:true,
        })
        .then(response => {
            if(response.status===200){
              this.setState({
                count:response.data
              });
            }
        })
        .catch(error => {
          console.log("Register details");
        });
    }
  render(){
    
    const { count } = this.state;
    return (
      <List>
            {count.map(elem => (
                        <ListItem key={elem.id}>
                        <ListItemAvatar>
                          <Avatar>
                              {getAvataricon(elem.name)} 
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={elem.count} secondary={elem.name} />
                      </ListItem>
                      
            ))}
      </List>
    );
  }
}