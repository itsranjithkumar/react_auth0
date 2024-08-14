import { useAuth0 } from '@auth0/auth0-react'


import React from 'react'

const LoginoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
        <button onClick={()=> loginWithRedirect()}>
            sign Out
        </button>
    )
   
  )
}

export default LoginoutButton
