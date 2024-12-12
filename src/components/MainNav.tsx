import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserNameMenu from "./UserNameMenu.tsx";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <>
          <span className="flex items-center font-bold gap-2">
            <Link
              to="/order-status"
              className="font-bold hover:text-orange-500"
            >Order Status</Link>
            <UserNameMenu />
          </span>
        </>
      ) : (
        <Button
          onClick={() => loginWithRedirect()}
          variant="ghost"
          className="font-bold hover:text-orange-500 hover:bg-white"
        >
          Log In
        </Button>
      )}
    </>
  );
};

export default MainNav;
