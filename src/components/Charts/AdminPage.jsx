import React, { useState, useEffect } from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
// import products from "../../Products/products";
import PieChartMine from "./BarChart";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getAllProducts } from "../../utils/products";
// import products from "../../Products/products";

const AdminPage = () => {
  //Back
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch products data from backend
  useEffect(() => {
    if (
      localStorage.getItem("token") === undefined ||
      !localStorage.getItem("token")
    ) {
      setLoading(false);
      return;
    }

    getAllProducts(setProducts, setLoading, localStorage.getItem("token"));
  }, []);

  // Group products by category
  console.log(products);
  const categoryData = products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) acc[category] = 0;
    acc[category]++;
    return acc;
  }, {});

  const chartData = Object.keys(categoryData).map((category) => ({
    name: category,
    value: categoryData[category],
  }));

  // State to handle collapsible lists for each category
  const [openCategory, setOpenCategory] = useState(null);

  const handleToggle = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  if (loading) {
    return (
      <Typography variant="h6" className="text-center text-purple-600">
        Loading products...
      </Typography>
    );
  }

  return (
    <div
      className="container max-h-screen h-screen w-full overflow-auto py-8 no-scrollbar flex flex-col items-center gap-10"
      style={{ backgroundColor: "#e5e7eb" }}
    >
      <Typography
        variant="h2"
        className="mb-4 font-bold text-purple-500"
        sx={{ fontWeight: "bold" }}
      >
        Admin Dashboard
      </Typography>
      {products.length > 0 ? (
        <div className="flex flex-row flex-wrap w-full h-screen">
          {/* Pie Chart Section */}
          <PieChartMine data={chartData} />
          {/* Collapsible List of Categories */}
          <div className="w-[45%] flex flex-col items-center">
            <Typography
              variant="h5"
              className="mb-4 font-bold text-purple-800"
              sx={{ fontWeight: "bold", paddingBottom: 2 }}
            >
              Products by Category in Stock
            </Typography>
            <List
              component="nav"
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                borderRadius: 5,
              }}
            >
              {Object.keys(categoryData).map((category) => (
                <div key={category} className="w-full">
                  <ListItem
                    button
                    onClick={() => handleToggle(category)}
                    fullWidth
                  >
                    <ListItemText primary={category} />
                    {openCategory == category ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </ListItem>
                  <Collapse
                    in={openCategory === category}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {products
                        .filter((product) => product.category === category)
                        .map((filteredProduct) => (
                          <ListItem key={filteredProduct.productId}>
                            <ListItemText
                              primary={`${filteredProduct.name}`}
                              secondary={`Price: $${filteredProduct.price} | Stock: ${filteredProduct.stock}`}
                            />
                          </ListItem>
                        ))}
                    </List>
                  </Collapse>
                </div>
              ))}
            </List>
          </div>
        </div>
      ) : (
        <Typography
          variant="h3"
          className="mb-4 font-bold"
          sx={{ fontWeight: "bold" }}
        >
          Nothing to see...
        </Typography>
      )}
    </div>
  );
};

export default AdminPage;
