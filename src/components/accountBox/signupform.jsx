import React, { useContext } from 'react';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';
import {Marginer} from '../marginer';
import { AccountContext } from './accountContext';


export function SignupForm(props){
    const {switchToSignin}=useContext(AccountContext)
    return <BoxContainer>
        <FormContainer>
            <Input type='email' placeholder='Email'/>
            
        </FormContainer>
        <Marginer direction='vertical' margin={10}/>
           
            <SubmitButton type='submit'>Reset</SubmitButton>
            <Marginer direction='vertical' margin='1.4em'/>
            <MutedLink href='#'>Already have an account ? </MutedLink>
            <BoldLink href='#' onClick={switchToSignin}>Signin</BoldLink>
    </BoxContainer>
}