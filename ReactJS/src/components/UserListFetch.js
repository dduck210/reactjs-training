import { useEffect, useState } from "react";
// import axios from "axios";
function UserListFetch() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log("Lỗi", err));
  }, []);

  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("https://fakestoreapi.com/products");
  //       setUsers(res.data);Add commentMore actions
  //     } catch (error) {
  //       console.log("Lỗi", error);
  //     }
  //   };
  //   fetchData();
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Danh sách sản phẩm (fetch)
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
              <span className="font-medium">Slug: </span> {user.slug}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Price: </span>
              {user.price}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Description: </span>
              {user.description}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Category: </span>
              {user.category.name}, {user.category.slug},{" "}
              {user.category?.image[2]}, {user.category?.creationAt},{" "}
              {user.category?.updatedAt}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Image: </span>
              <img
                src={user.images?.[1]}
                alt={user.title}
                className="w-full h-auto"
              />
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">CreationAt: </span>
              {user.creationAt}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">UpdatedAt: </span>
              {user.updatedAt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserListFetch;
