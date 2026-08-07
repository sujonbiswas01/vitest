import { useState } from "react";
import "./UserForm.css";
import type App from "../../App";

interface User {
  id: number;
  name: string;
  email: string;
  agree: boolean;
}

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [users, setUsers] = useState<User[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please fill all fields.");
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      agree,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);

    setName("");
    setEmail("");
    setAgree(false);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>User Registration</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="Name">Name</label>

            <input
            id="Name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="Email">Email</label>

            <input
              id="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label htmlFor="checkbox" >
            <input
              id="checkbox"
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />

            <span>I agree to the Terms & Conditions</span>
          </label>

          <button  type="submit">Add User</button>
        </form>

        <hr />

        <h3>User List</h3>

        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul className="user-list">
            {users.map((user) => (
              <li key={user.id}>
                <h4>{user.name}</h4>

                <p>{user.email}</p>

                <p>
                  Status:
                  {user.agree ? " ✅ Agreed" : " ❌ Not Agreed"}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserForm;