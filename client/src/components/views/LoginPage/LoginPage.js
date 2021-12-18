import React, {useState} from 'react';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action';
import {withRouter} from 'react-router-dom';

function LoginPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 불필요한 refresh 방지

        let body = {
            email: Email,
            password: Password
        }

        //리덕스를 사용하기 위해 dispatch
        //loginUser액션에 입력받은 값 전달
        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginsuccess){
                props.history.push('/')
            } else {
                alert('Error');
            }
        })
    }

    return (
        <div style={{
            display:'flex', justifyContent:'center', alignItems:'center',
            width:'100%', height:'100vh'
        }}>
           <form style={{display:'flex', 'flexDirection':'column'}}
                onSubmit={onSubmitHandler}
           >
               <label>Email</label>
               <input type="email" value={Email} onChange={onEmailHandler}/>

               <label>Password</label>
               <input type="password" value={Password} onChange={onPasswordHandler}/>
               
               <br />
               <button type="submit">
                   Login
               </button>
           </form>
        </div>
    )
}

export default withRouter(LoginPage)
