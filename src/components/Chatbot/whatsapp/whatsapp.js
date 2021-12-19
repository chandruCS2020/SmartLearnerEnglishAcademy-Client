import React from 'react'
import WhatsappSharpIcon from '@mui/icons-material/WhatsappSharp';
import styled from 'styled-components';
const WhatsappBot = styled.div`
    position:fixed;
    bottom:70px;
    right:20px;
    padding:10px;
    background-color:green;
    border-radius:5px;    
`
function whatsapp() {
    return (
        <>
            <WhatsappBot>
                <a href=" https://wa.me/916385453101" rel="noreferrer" target="_blank">
                    <WhatsappSharpIcon style={{color:'#fff',display:'flex',alignItems:'center'}} />
                </a>
            </WhatsappBot>
        </>
    )
}

export default whatsapp
