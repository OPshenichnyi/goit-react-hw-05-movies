import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
width: 1024px;
margin: auto;
`

export const Header = styled.header`
  background-color: #FFEB3B;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 25px 25px;  
`
export const Link = styled(NavLink)`
  color: #212121;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  border-radius: 4px;
  &:hover{
    background-color: #FBC02D;
    color: #212121;
  }

`