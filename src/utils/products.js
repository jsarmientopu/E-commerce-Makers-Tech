import { jwtDecode } from "jwt-decode";

export const getAllProducts = async (setProducts, setLoading) => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:3001/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    if (response.ok) {
      setProducts(data.products);
      setLoading(false);
    } else {
      // setError(data.message || "Failed to fetch products");
      if (
        data.message == "Internal server error" ||
        data.message == "Unauthorized"
      ) {
        window.localStorage.removeItem("token");
      }
      setLoading(false);
    }
  } catch (err) {
    // setError("An error occurred. Please try again.");
    setLoading(false);
  }
};

export const getAllRecomendedProducts = async (setProducts, setLoading) => {
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  try {
    const response = await fetch(
      `http://localhost:3001/chat/recomended/${decoded.user_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();

    if (response.ok) {
      setProducts(data);
      console.log(data);
      setLoading(false);
    } else {
      // setError(data.message || "Failed to fetch products");
      if (
        data.message == "Internal server error" ||
        data.message == "Unauthorized"
      ) {
        window.localStorage.removeItem("token");
      }
      setLoading(false);
    }
  } catch (err) {
    // setError("An error occurred. Please try again.");
    setLoading(false);
  }
};
