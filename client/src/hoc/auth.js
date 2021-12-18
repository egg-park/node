import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {auth} from '../_actions/user_action'

//option (null:아무나, true:로그인유저만, false:로그아웃유저만)
export default function (SpecificComponent, option, amdinRoute = null){

    function AuthCheck(props){
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {
                if(!response.payload.isAuth) {
                    // 로그인 하지 않은 상태
                    if(option) {
                        props.history.push('/login')
                    }
                } else {
                    // 로그인 한 상태
                    if(amdinRoute && !response.payload.isAdmin){
                        props.history.push('/')
                    } else {
                        if (option === false) 
                            props.history.push('/')
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent/>
        )
    }
    return AuthCheck
}