
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm"

export function GuestRegister(){
    const navigateLink="/guest/startingPage";
    const registerLink="https://homeaway-backend.onrender.com/guest/register";
    const title="HomeAway(Guest)";
    const picno="/imgs/12.jpg";

    return (
        <HelmetProvider>
            <Helmet>
                <title>Register-Guest</title>
            </Helmet>
            <RegisterForm 
            registerLink={registerLink}
            navigateLink={navigateLink}
            title={title}
            picno={picno}
            />
        </HelmetProvider>
    )

}

