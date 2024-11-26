import {  Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
}

const Auth0ProviderWithNavigate: React.FC<Props> = ({ children }): JSX.Element => {

    const navigate = useNavigate()

    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirect_uri = import.meta.env.VITE_AUTH0_CALLBACK_URI;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    if (!domain || !clientId || !redirect_uri || !audience) {
        throw new Error(`unable to initialise auth ${domain} ${clientId} ${redirect_uri}`)
    }

    const onRedirectCallback = () => {
        navigate("/auth-callback")
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirect_uri,
                audience,
            }}
            onRedirectCallback={onRedirectCallback}
        >{children}</Auth0Provider>
    )
}

export default Auth0ProviderWithNavigate