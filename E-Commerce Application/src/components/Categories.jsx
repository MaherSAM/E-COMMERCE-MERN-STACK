import styled from 'styled-components'
import React from 'react'
import {categories} from "../data/data";
import CategorieItem from './CategorieItem';
import { mobile } from '../responsive';

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobile({padding:"0px",flexDirection:"column"})}
`;

const Categories = () => {
    return (
        <Container>
            {categories.map(item =>(
                <CategorieItem key={item.id} item ={item}>

                </CategorieItem>
            ))

            }
        </Container>
    )
}

export default Categories
