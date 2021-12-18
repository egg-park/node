import React, {useEffect} from 'react'
import axios from 'axios';

function LandingPage() {
    // LandingPage에 들어오자마자 해당 function을 호출한다.
    useEffect(() => {
        // response로 data를 출력한다.
        axios.get('/api/hello')
        .then(response => console.log(response.data))

    }, [])


    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage
