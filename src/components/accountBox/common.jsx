import styled from "styled-components";


export const BoxContainer=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`

export const FormContainer=styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15,15,15,0.19);
`
export const MutedLink=styled.a`
    font-size: 10px;
    color:#666262;
    font-weight: 800;
    text-decoration: none;
`

export const BoldLink=styled.a`
    font-size: 10px;
    color:#34B0AD;
    font-weight: 700;
    text-decoration: none;
    margin: 0 4px;
`

export const Input=styled.input`
    width:100% ;
    height: 45px;
    outline: none;
    border: 1px solid rgba(200,200,200,0.1);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 12px;

    &::placeholder{
        color: rgba(200,200,200,1);
    }

    &:not(:last-of-type){
        border-bottom: 1.5px solid rgba(200,200,200,0.4);
    }


    &:focus{
        outline: none;
        border-bottom: 2px solid #34B0AD;
    }
`

export const SubmitButton=styled.button`
    width: 100%;
    padding:11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;

    background: rgb(0, 0, 0);
	background: linear-gradient(
		58deg,
		rgba(0, 0, 0, 1) 20%,
		rgba(0, 128, 128, 1) 100%
	);

    &:hover{
        filter: brightness(1.03);
    }

`