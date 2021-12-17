import React from 'react'
import { WhyWeDifferent } from '../helper/AboutList';
import styled from 'styled-components';
import img from '../images/network.png'
const Container = styled.div`
    padding:0 10%;
    @media only screen and (max-width: 600px) {
        padding:0 5%;
    } 
`
const HeadTitle = styled.div`
    text-align:center;
`
const Title = styled.h1`
    font-size: 3rem;
    color: #002347;

`
const TitleSpan = styled.span`
    color:#006FBF;
`
const BodyDiff = styled.div`
margin-top:50px;
display:flex;
justify-content:space-between;
@media only screen and (max-width: 1150px) {
    flex-direction:column;
  }
`
const ChooseUs = styled.div`
padding:5px;    
`
const BodyTitle = styled.h1`
    font-size:2rem;
    color:#006fbf;
    margin-bottom:20px
`
const Img = styled.img`
    
`
const List = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    line-height:30px;
`
const ListItems = styled.li`
list-style-type:disc;  
`
function WhyDifferent() {
    return (
        <Container>
            <HeadTitle>
                <Title>Why <TitleSpan>Elect </TitleSpan>Us</Title>
            </HeadTitle>
            <BodyDiff>
                <ChooseUs>
                    <BodyTitle>Why We're different</BodyTitle>
                    <List>
                        {WhyWeDifferent.map((elem) =>(
                            <ListItems key={elem.id}>{elem.list}</ListItems>
                        ))}
                    </List>
                    
                </ChooseUs>
                <Img src={img}/>
            </BodyDiff>
        </Container>
    )
}

export default WhyDifferent
