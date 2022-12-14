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
    width: 250px;
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

const SignInStyle = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    font-family: chevin-pro,sans-serif;
    font-weight: 500;
    font-style: normal;

`

const AuthFormStyle = styled.form`
    font-family: chevin-pro,sans-serif;
    font-weight: 500;
    font-style: normal;
    & fieldset {
        display: flex;
        flex-direction: column;
        border: #FFFFFF22 dotted 1px;
        margin: 0px;
        padding: 0px;
        padding-right: 30px;
        box-sizing: border-box;
        & label {
            margin: 10px 0px;
        }
        & input {
            padding: 5px;
            border: none;
            border-radius: 10px;
            :focus {
                border: none;
                outline-style: none;
            }
        }
        & button {
            border: none;
            /* border-radius: 25px; */
            width: 100%;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.2) 0px 4px 6px -2px;
            background: var(--accentcolor1);
            color: var(--base);
            font-size: 1rem;
            font-weight: 700;
            padding: 3px;
            margin: 10px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .1s;
            :active {
                transform: translateY(1px) translateX(1px);
            }
            :disabled {
                opacity: .6;
                color: darkgrey;
            }
        }
    }

`

const FormStyle = styled.form`
    font-family: chevin-pro,sans-serif;
    font-weight: 500;
    font-style: normal;
    width: 60vw;
    & fieldset {
        display: grid;
        /* border: #FFFFFF22 dotted 1px !important; */
        border: none;
        margin: 0px;
        padding: 0px;
        padding-left: 10px;
        padding-right: 30px;
        padding-bottom: 10px;
        box-sizing: border-box;
        & label {
            margin: 10px 0px 0px 0px;
            padding-right: 10px;
            /* border: purple solid 1px; */
            height: 1rem;
        }
        & input {
            /* border: yellow solid 1px; */
            padding: 5px;
            padding-left: 10px;
            margin-top: 20px;
            border: none;
            border-radius: 5px;
            height: 1rem;
            width: 100%;
            :focus {
                border: none;
                outline-style: none;
            }
            ::placeholder {
                opacity: .5;

            }
        }
        & button {
            border: none;
            /* border-radius: 25px; */
            width: 100%;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.2) 0px 4px 6px -2px;
            background: var(--accentcolor1);
            color: var(--base);
            font-size: 1rem;
            font-weight: 700;
            padding: 3px;
            margin: 10px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .1s;
            :active {
                transform: translateY(1px) translateX(1px);
            }
            :disabled {
                opacity: .6;
                color: darkgrey;
            }
        }
        & h3 {
            margin: 0px;
            padding: 0px;
            padding-top: 15px;
            align-self: center;
            justify-self: flex-start;
            /* letter-spacing: .1rem; */
        }
    }
    & button {
        border: none;
        color: var(--base);
        background: var(--accentcolor1);
        border-radius: 25px;
        padding: 0px;
        height: 30px;
        width: 30px;
        margin-left: 10px;
        margin-top: 10px;
        transition: all .2s;
        :active {
            transform: scale(.9);
        }
    }

`
    const FormRow = styled.div`
        display: grid;
        grid-template-columns: 3fr 80px 80px 100px 50px;
        & p {
            font-size: .7rem;
            /* text-align: center; */
            align-self: flex-end;
            margin-bottom: 5px;
            cursor: pointer;
            /* justify-self: center; */
            :active {
                transform: scale(.98);
            }
        }
        & > * {
            /* border: pink solid 1px !important; */
        }
    `

    const TotalRow = styled.div`
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        justify-content: flex-end;
        /* border: red solid 1px; */
        text-align: right;
        
        & > * {
            box-sizing: border-box;
            padding-right: 15px;
            /* border: green solid 1px; */

        }
    `

    const CreateInvoiceStyle = styled.div`
        display: grid;
        justify-content: center;
    
    `


export { Container, SideMenu, SideMenuItem, HeaderStyle, 
    MainStyle, Shifter, SignInStyle, FormStyle, AuthFormStyle, CreateInvoiceStyle, FormRow, TotalRow }