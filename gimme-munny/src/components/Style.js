import styled from "styled-components";

const Container = styled.div`
    /* --base: #2B2D42;
    --accentcolor1: #41E2BA;
    --white: #FFFFFF; */
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background: var(--base);
    color: var(--accentcolor1);
    font-family: macho,sans-serif;
    font-weight: 700;
    font-style: normal;
    /* font-family: custard,sans-serif;
    font-weight: 400;
    font-style: normal; */
    justify-content: flex-start;
    align-items: center;
    & button {
        height: 50px;
        width: 100px;
        /* margin: 100px; */

    }

`

const Main = styled.div`
    display: grid;
    grid-template-columns: minmax(500px, 900px);
    /* width: 900px; */
    /* display: flex; */
    /* justify-content: center; */
    /* background: blue; */
    /* padding: 0px 200px; */
    margin: 0px 300px;

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
    & a {
        font-family: macho, sans-serif;
        text-decoration: none;
        color: var(--accentcolor1);
        :visited {
            text-decoration: none;
        }
    }
    & h1 {
        font-family: macho, sans-serif;
font-weight: 800;
font-style: normal;   
    }

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
    grid-template-columns: 120px 120px 30px;
    /* grid-template-rows: 50px; */
    align-items: center;
    justify-content: center;
    text-align: left;
    /* border: blue solid 1px; */
    box-sizing: border-box;
    transition: all .4s;
    cursor: pointer;
    :hover {
        /* transform: translateX(20px); */
        filter: saturate(1.5);
    }
    & p {
        :active {
            transform: scale(.95) translateX(20px);
        }
        /* padding-right: 20px; */
    }
    & div {
        /* align-self: flex-end; */
        align-items: flex-start;
        padding-top: 0px;
        margin-top: 0px;
        padding-left: 10px;
        :hover {
            transform: translateX(0px);
        }
        
        
    }
    & img {
        padding: 0px 30px;
        height: 30px;
        justify-self: flex-end;
        :active {
            transform: scale(.95) translateX(20px);
        }
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
    width: 800px;
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
            margin: 10px 0px -10px 0px;
            padding-right: 10px;
            /* border: purple solid 1px; */
            height: 1rem;
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
            padding-top: 0px;
            align-self: center;
            justify-self: flex-start;
            /* letter-spacing: .1rem; */
        }
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
        color: var(--base);
        background: var(--accentcolor1);
        border-radius: 25px;
        padding: 0px;
        height: 30px;
        width: 30px;
        margin-left: 10px;
        margin-top: 10px;
        cursor: pointer;
        transition: all .2s;
        :active {
            transform: scale(.9);
        }
    }
`
    const FormTo = styled.div`
        display: grid;
        grid-template-columns: 50px 200px;
        align-items: center;
        /* border: pink solid 1px; */
        & input {
            /* padding: 0px !important; */
            margin: 0px !important;
            
        }
    `

    const FormRow = styled.div`
        display: grid;
        grid-template-columns: auto 80px 80px 100px 50px;
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
            & button {
                background: none;
                color: var(--accentcolor1);
                box-shadow: none;
                font-size: .7rem;
                font-weight: 300;

            }
        }
        & > * {
            /* border: pink solid 1px !important; */
        }
    `

    const TotalRow = styled.div`
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 3fr 80px 130px 120px 60px;
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
        justify-content: flex-start;
        & a {
            text-decoration: none;
            color: var(--accentcolor1);
            cursor: pointer;
            & :visited {
                text-decoration: none;
                
            }
        }
        `

const InvoicePreviewStyle = styled.div`
        /* display: grid;
        grid-template-rows: 100px; */
        height: 792px;
        width: 612px;
        /* padding: 20px; */
        box-sizing: border-box;
        background: var(--white);
        /* background: url("https://images.unsplash.com/photo-1556139943-4bdca53adf1e"); */
        /* background-position: 10% 0%; */
        background-size: cover;
        color: black;
        padding: 20px;
        h1 {
            text-align: center;
        }
        & > * {
            /* border: red solid 1px !important; */
        };
    `

    const SettingsStyle = styled.div`
        display: grid;
        justify-content: flex-start;
        align-items: center;
        font-family: chevin-pro,sans-serif;
        font-weight: 500;
        font-style: normal;
        /* border: red solid 1px; */
        & hr {
            border: var(--white) solid 1px;
            width: 400px;
            opacity: .2;
            
        }
        & button {
            :active {
                transform: scale(.9);
            }

        }
    
    `

    const SettingsRow = styled.div`
        display: grid;
        grid-template-columns: 50px max-content min-content;
        grid-template-rows: 60px;
        justify-content: flex-start;
        align-items: center;
        /* border: pink solid 2px !important; */
        & p {
            text-align: right !important;
            /* padding-right: 20px; */
            font-size: .8rem;
        }
        & h2 {
            padding-left: 20px;
            color: var(--white);
        }
        & h3 {
            /* color: var(--accentcolor2); */
            color: var(--accentcolor2);
        }
        & button {
            cursor: pointer;
            :disabled {
                opacity: .3;
                cursor: default;
            }
        }
        & > * {
            /* border: green solid 1px; */
        }
        & input {
            padding: 5px;
            padding-left: 10px;
            padding-left: 10px;
            /* margin-top: 20px; */
            margin-left: 20px;
            border: none;
            border-radius: 5px;
            height: 1rem;
            width: 150px;
            :focus {
                border: none;
                outline: none;
            }

        }
        `


export { Container, SideMenu, SideMenuItem, HeaderStyle, 
    MainStyle, Shifter, SignInStyle, FormStyle, AuthFormStyle, CreateInvoiceStyle, FormRow, FormTo, TotalRow, InvoicePreviewStyle, SettingsStyle, SettingsRow, Main }