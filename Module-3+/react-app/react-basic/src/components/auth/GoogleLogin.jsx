import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { user, loading, googleLogin } = useContext(AuthContext);
  console.log(user);
  const handleGoogleLogin = () => {
    googleLogin();
  };
  return (
    <div className="text-center mt-4">
      <button
        onClick={handleGoogleLogin}
        disabled={loading}
        className= "btn bg-transparent border-none"
      >
        <FcGoogle className="w-6 h-6"></FcGoogle>
      </button>
    </div>
  );
};

export default GoogleLogin;
