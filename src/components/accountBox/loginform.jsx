import React, { useContext } from 'react';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';
import {Marginer} from '../marginer';
import { AccountContext } from './accountContext';


export function LoginForm(props){

    const {switchToSignup}=useContext(AccountContext)
    return <BoxContainer>
        <FormContainer>
            <Input type='email' placeholder='Username'/>
            <Input type='password' placeholder='Password'/>
        </FormContainer>
        <Marginer direction='vertical' margin={10}/>
            {/* <MutedLink href='#'>Forget your password ? </MutedLink> */}
            <Marginer direction='vertical' margin='1.4em'/>
            <SubmitButton type='submit'>Login</SubmitButton>
            <Marginer direction='vertical' margin='1.4em'/>
            <MutedLink href='#'>Reset password</MutedLink>
            <BoldLink href='#' onClick={switchToSignup}>Click here</BoldLink>
    </BoxContainer>
}