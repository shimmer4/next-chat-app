import React from 'react'
import { useRouter } from 'next/router'

const index = () => {

    const router = useRouter()

    React.useEffect( () => {
        router.push('/login')
    }, [] )

    return <p>Redirecting to login page...</p>
}

export default index
