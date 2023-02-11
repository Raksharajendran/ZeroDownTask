const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//get all
app.get("/score", async (req, res) => {
  try {
    const allMetricId = await pool.query(
      "select distinct(market_id) from market_metrics"
    );
    res.json(allMetricId.rows);
  } catch (err) {
    console.error(err.message);
  }
});

/*app.get("/score/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allMetricId = await pool.query(
      "select market_id,sum from(select market_id,sum(score) from(select market_id,((new_listings_count/(days_to_sell+days_to_pending))+median_sale_to_list_ratio+homes_sold_over_list_price_count) as score from market_metrics)as A group by market_id)as B where market_id=$1",
      [id]
    );
    res.json(allMetricId.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});*/

app.get("/score/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allMetricId = await pool.query(
      "select market_id,sum from(select market_id,sum(score) from(select market_id,((new_listings_count/(days_to_sell+days_to_pending))+median_sale_to_list_ratio+homes_sold_over_list_price_count) as score from market_metrics)as A group by market_id)as B where market_id=$1",
      [id]
    );
    res.json(allMetricId.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server on port 5000");
});
