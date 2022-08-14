import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { setUser, setUserLogOut, selectUserEmail, selectUserName } from '../redux/actions/userActions';

function Auth() {



    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);



    const handleSignIn = (e) => {
    }

    const handleLogOut = () => {
        Auth.signOut().then (() => {

            dispatch(setUserLogOut());
        })
        .catch (error => {
            
            console.log(error);
        })
    }
    return (
        <div>
            
        </div>
    )
}

export default Auth
