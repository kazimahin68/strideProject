import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {

    const {googleLogin} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = async () => {
        setLoading(true);
        try{
           await googleLogin();
        } catch (error){
            console.error("Google Login Error:", error)
        } finally{
            setLoading(false)
        }
    }
    return (
        <div className="text-center mt-4">
           <button 
           onClick={handleGoogleLogin}
           disabled={loading} 
           className={`btn rounded-lg ${loading? 'bg-gray-300' : 'bg-slate-200'}`}>
            <FcGoogle className="w-6 h-6"></FcGoogle>
           </button>
        </div>
    );
};

export default GoogleLogin;