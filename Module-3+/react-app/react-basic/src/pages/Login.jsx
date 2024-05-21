import GoogleLogin from "../components/auth/GoogleLogin";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <form
          onSubmit={handleSubmit}
          
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="flex items-center gap-3">
          <p className="font-bold text-xl mt-2">Login with :</p>
          <div>
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
