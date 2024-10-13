import React, { useState } from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import products from "../../Products/products";
import PieChartMine from "./BarChart";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AdminPage = () => {
  // Group products by category
  const categoryData = products.reduce((acc, product) => {
    const { Category } = product;
    if (!acc[Category]) acc[Category] = 0;
    acc[Category]++;
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
                      .filter((product) => product.Category === category)
                      .map((filteredProduct) => (
                        <ListItem key={filteredProduct.id}>
                          <ListItemText
                            primary={`${filteredProduct.Name}`}
                            secondary={`Price: $${filteredProduct.Price.toFixed(
                              2
                            )} | Stock: ${filteredProduct.Stock}`}
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
    </div>
  );
};

export default AdminPage;
