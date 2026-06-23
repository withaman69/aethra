import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector(
    (state) => state.auth
  );

  return (
    <div className="h-16 border-b flex items-center justify-between px-6">
      <h2>Welcome, {user?.name}</h2>
    </div>
  );
};

export default Navbar;