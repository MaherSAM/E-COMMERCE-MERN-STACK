
import React from 'react'
import { Link } from 'react-router-dom';
import styled  from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`flex:1;margin:3px;height:70vh;position:relative;`;
const ImageCategory = styled.img`width:100%;height:100%;object-fit:flex;
${mobile({height:"50vh"})}
`;
const InfoCategory = styled.div`position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column`;
const TitleCategory = styled.h1`color:white;margin-bottom:20px;`;
const ButtonCategory = styled.button`border:none;padding:10px;background-color:white;color:gray;cursor:pointer;font-weight:600;`;

const CategorieItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
            <ImageCategory src={item.img}/>
            <InfoCategory>
                <TitleCategory>{item.title}</TitleCategory>
                <ButtonCategory>SHOP NOW</ButtonCategory>
            </InfoCategory>
            </Link>
        </Container>
    )
}

export default CategorieItem
