import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const Container = styled.div`
                height : 60px;
${mobile({height:"50px"})}
                           `;

const Wrapper = styled.div`
                padding : 10px 20px;
                display : flex;
                align-items : center;
                justify-content : space-between;
                ${mobile({padding:"10px 0px"})}
             `;
const Language = styled.span`font-size : 14px; 
                            cursor : pointer;
                            ${mobile({display:"none"})}
                            `;
const Left = styled.div`
flex : 1;
display : flex;
align-items : center;
${mobile({justifyContent:"center"})}
`;
const Center = styled.div`
flex : 1;
`;
const Right = styled.div`
flex : 1;
display: flex;
align-items: center;
justify-content:flex-end;
margin-left:25px;
${mobile({justifyContent:"center",flex:2})}
`;
const SearchContainer = styled.div`
border : 0.px solid ligh-gray;
display : flex;
align-items : center; 
margin-left : 25px; 
padding: 5px;
`;
const Input = styled.input `
border: none;
${mobile({width:"15px;"})}
`;
const Logo = styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}
`;
const MenuItem = styled.div`
font-size :14px;
cursor:pointer;
margin-left:25px;

${mobile({fontSize:"12px", marginLeft:"10px"})}
`;

const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity);
    console.log(quantity);


    return (
        <Container>
            <Wrapper>
                 <Left>
                     <Language> EN
                     </Language>
                     <SearchContainer>
                         <Input placeholder="Search"/> 
                         <Search style={{color:"gray", fontSize:16}}/>
                     </SearchContainer>
                     </Left>
                 <Center><Logo>Center.</Logo></Center>
                 <Right>
                     <MenuItem><Link to="/register">REGISTER</Link></MenuItem>
                     <MenuItem><Link to="/login">SIGN IN</Link></MenuItem>
                     <MenuItem><Link to="/cart">
                 
                     <Badge badgeContent={quantity} color="primary">
                         <ShoppingCartOutlined/>
                     </Badge>
                     </Link>
                     </MenuItem>
                 </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
