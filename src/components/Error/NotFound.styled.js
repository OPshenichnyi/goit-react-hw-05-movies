import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Wraperr = styled.div`
position: relative;
margin: auto;
background-image: url('http://zornet.ru/Abavaga/background.jpg');
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
width: 100vh;
overflow: hidden;
`
export const Center = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, 50%);
color: white;
text-align: center;
h1{
    font-size: 8em;
    line-height: 0em;
}
`
export const Comback = styled(NavLink)`
color: white;
`


