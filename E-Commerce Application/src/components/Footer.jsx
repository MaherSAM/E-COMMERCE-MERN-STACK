import { Facebook, Instagram,  MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`display:flex;${mobile({flexDirection:"Column"})}`;
const Left = styled.div`flex:1;flex-direction:column;padding:20px;`;
const Logo = styled.h1``;
const Descrition = styled.p`margin:20px 0px;`;
const SocialContainer = styled.div`display:flex;`;
const SocialIcon = styled.div`width:40px;height:40px;border-radius:50%;
color:white;background-color:#${props=>props.color};
display:flex;justify-content:center;align-items:center;marign-right:20px;`;

const Center= styled.div`flex:1;padding:20px;${mobile({display:"none"})}`;
const Title = styled.h3`margin-bottom:30px;`;
const List = styled.ul`margin:0;padding:0;list-style:none;display:flex;flex-wrap:wrap;`;
const ListItem = styled.li`width:50%;margin-bottom:10px;`;

const Right = styled.div`flex:1;padding20px;${mobile({backgroundColor:"#fff8f8"})}`;
const ContactItem = styled.li`width:50%;margin-bottom:20px;display:flex;align-items:center;`;
const Payment = styled.img``;
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Center.</Logo>
                <Descrition>
                Notre organisation et ses partenaires stockent et/ou accèdent à des informations sur votre appareil, 
                telles que les identifiants uniques de cookies pour traiter les données personnelles. 
                Vous pouvez accepter ou gérer vos choix en cliquant ci-dessous, 
                y compris votre droit d’opposition en cas d’utilisation d’un intérêt légitime, 
                ou à tout moment sur la page de politique de confidentialité. 
                Ces préférences seront signalées à nos partenaires et n’affecteront pas les données de navigation.
                </Descrition>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
           
                    <ListItem>  <Link to="/">Home</Link></ListItem>
                    <ListItem><Link to="/cart">Cart</Link></ListItem>
                    <ListItem><Link to="/productlist">Man Fashion</Link></ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
            <Title>Contact</Title>
           
                    <ContactItem><Room style={{marginRight:"10px"}}/> 22 October Path, Poissy 78300</ContactItem>
                    <ContactItem><Phone style={{marginRight:"10px"}}/>+33 06 07 08 09</ContactItem>
                    <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@center.dev</ContactItem>
             
                 <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
