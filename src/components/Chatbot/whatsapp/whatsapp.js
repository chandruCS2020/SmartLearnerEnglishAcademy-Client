import React from 'react'
import WhatsappSharpIcon from '@mui/icons-material/WhatsappSharp';
import styled from 'styled-components';
const WhatsappBot = styled.div`
    position:fixed;
    bottom:40px;
    left:40px;
    padding:10px;
    background-color:green;    
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
