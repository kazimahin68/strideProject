import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RiseLoader } from "react-spinners";
import { PropTypes } from "prop-types";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    console.log(location, user)

    if(loading){
        return <RiseLoader
        color="#36d7b7"
        cssOverride={{}}
        loading
        margin={11}
        size={25}
        speedMultiplier={1}
      />
    } else if(user){
        return children;
    }
    return (
      <Navigate to={"/login"} state={{from: location}} replace={true}></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivateRoute;