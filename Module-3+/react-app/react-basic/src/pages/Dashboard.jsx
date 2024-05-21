import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
        <h2>This is Dashboard</h2>
        <Link to="/" className="mt-2 font-bold text-2xl">Home</Link>
    </div>
  );
};

export default Dashboard;
