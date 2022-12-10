import styled from "styled-components";

const Container = styled.div`
    /* --base: #2B2D42;
    --accentcolor1: #41E2BA;
    --white: #FFFFFF; */
    height: 100vh;
    width: 100vw;
    background: var(--base);
    color: var(--accentcolor1);
    /* margin: 0px 500px; */
    /* border: gray solid 1px; */
    /* display: grid; */
    /* text-align: center; */
    /* justify-content: center; */
    font-family: custard,sans-serif;
    font-weight: 400;
    font-style: normal;
    & button {
        height: 50px;
        width: 100px;
        /* margin: 100px; */

    }

`

const HeaderStyle = styled.div`
    display: flex;
    height: 100px;
    width: 100vw;
    /* border: yellow solid 1px; */
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    padding-left: 100px;

`

const SideMenu = styled.div`
    height: 500px;
    width: 300px;
    /* border: red solid 1px; */
    border-right: none;
    box-sizing: border-box;
    display: grid;
    position: absolute;
    top: 100px;
    justify-content: flex-start;
    font-family: chevin-pro,sans-serif;
    font-weight: 500;
    font-style: normal;
    transition: all .5s;
`

const SideMenuItem = styled.div`
    display: grid;
    grid-template-columns: 120px 2fr;
    align-items: center;
    justify-content: center;
    text-align: left;
    /* border: blue solid 1px; */
    box-sizing: border-box;
    transition: all .4s;
    cursor: pointer;
    :hover {
        transform: translateX(20px);
    }
    :active {
        transform: scale(.95) translateX(20px);
    }
    & img {
        padding: 0px 30px;
        height: 30px;
        justify-self: flex-end;
        :hover {
            transform: scale(1.1);
        }
        
    }
    & > * {
        transition: all .3s;
        /* border: green solid 1px; */

    }
`
const MainStyle = styled.div`
    height: 100%;
    /* background: red !important; */
    & button {
        height: 50px;
        width: 50px;
    }

`
const Shifter = styled.div`
    display: flex;
    justify-content: flex-end;
`


export { Container, SideMenu, SideMenuItem, HeaderStyle, MainStyle, Shifter }