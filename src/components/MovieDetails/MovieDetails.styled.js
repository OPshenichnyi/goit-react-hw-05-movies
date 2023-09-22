import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
width: 1024px;
margin: auto;
`
export const LinkContainer = styled.div`
background-color: #FFEB3B;
padding-top: 20px;
padding-bottom: 20px;
`

export const CardInfoFilms = styled.div`
margin-top: 20px;
margin-bottom: 20px;
p{
    font-weight: 500;
}
span{
    font-weight: 200;
}
`

export const Link = styled(NavLink)`
  color: #212121;
  padding: 4px;
  text-decoration: none;
  font-size: 16px; 
  border-radius: 4px;
  margin-left: 20px;
  &:hover{
    background-color: #FBC02D;
    color: #212121;
  }

`