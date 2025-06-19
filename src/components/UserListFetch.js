import { useEffect, useState } from "react";

function UserListFetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res.json();
        console.log("Đã nhận res", res);
      })
      .then((data) => {
        setUsers(data);
        console.log("Đã nhận data", data);
      })
      .catch((err) => console.log("Lỗi", err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Danh sách người dùng (fetch)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {user.name}
            </h3>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Username:</span> {user.username}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Address:</span>{" "}
              {user.address.street}, {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Website:</span> {user.website}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Company:</span> {user.company.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserListFetch;
