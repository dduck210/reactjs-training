import { useEffect, useState } from "react";
// import CustomizedProgressBars from "./Loading/TestLoading";
// import { Stack } from "@mui/material";
import LinearColor from "./Loading/TestNewLoading";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Lỗi API nên k thể call đc");

        const data = await res.json();

        setTimeout(() => {
          setUsers(data);
          setLoading(false);
        }, 5000);
      } catch (err) {
        console.error("Lỗi fetch:", err);
        setError("Không thể tải dữ liệu, vui lòng thử lại sau.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center text-red-500 text-lg font-medium mb-4 bg-black/30">
        Đang tải dữ liệu... <LinearColor />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center text-red-500 text-lg font-medium">
        {error} <LinearColor />
        {/* <p className="mt-4">Loading lại sau ít phút nữa thôi</p> */}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Danh sách sản phẩm
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {user.title}
            </h3>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Price:</span> ${user.price}
            </p>
            <p className="text-gray-600 mb-1 line-clamp-3">
              <span className="font-medium">Description:</span>{" "}
              {user.description}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Category:</span> {user.category}
            </p>
            <img
              src={user.image}
              alt={user.title}
              className="w-full h-auto mt-2 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
