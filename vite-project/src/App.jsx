import LoginButton from "./components/LogoutButton"
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";


function App() {
    const { isloading, error } = useAuth0();
    return (
        <main className='column'>
         <h1>Auth0 Login</h1>
         {error && <p>Authentication Error</p>}
         {!error && isloading && <p>Loading...</p>}
         {!error && !isloading &&(
         <>
        <LoginButton />
         <Logoutbutton />
         <Profile />
         </>
        )}
        </main>
         

    )
}     

export default App;