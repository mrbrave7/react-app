import { useSelector } from "react-redux";

function Dashboard() {
  const user = useSelector((state) => state.auth); // Adjusted to access user property
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Assuming you have an isAuthenticated flag

  console.log(user);

  return (
    <main>
      <h1>Hello From user</h1>
      {isAuthenticated ? (
        <h2>There Is {user.user.userName}</h2>
      ) : (
        <h1>No user</h1>
      )}
      {isAuthenticated && user && (
        <img src={user.user.avatar} alt="avatarUser" />
      )}
    </main>
  );
}

export default Dashboard;
