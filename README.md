# ZeroDownTask - MARKET HOTNESS

## TECHNOLOGIES USED
* FRONTEND - ReactJS,Chart.js,Bootstrap
* SERVER - Node.js, Express.js
* Databse - PostgreSQL

## 1. Import data into a database
* Preprocessed the data

![databse](https://user-images.githubusercontent.com/76252013/218284836-7704fd10-86f8-41f6-a4ed-45d48572c3a0.png)

## 2. Algorithm to determine the score of a given market

update market_metrics
set score = ((new_listings_count/(days_to_sell+days_to_pending))+median_sale_to_list_ratio+homes_sold_over_list_price_count);

#### The demand of the market justifies the market hotness. new_listings_count quantifies the supply, days_to_sell and the day_to_pending determines the demand of the market at a specified time. The ratio of the above measurement would provide the supply to the demand ratio. median_sale_to_list_ratio provides us with the profit of buyer to seller. An increase in homes_sold_over_list_price_count gives the demand of the home of that area and thus increasing the listings. Sum of the above mentioned ((new_listings_count/(days_to_sell+days_to_pending))+median_sale_to_list_ratio+homes_sold_over_list_price_count) is used to quantify SCORE.

## 3. UI that takes market id as input and returns the formulated score

![UI](https://user-images.githubusercontent.com/76252013/218285196-e01cec54-6740-4f89-8b04-1c0d770550e9.png)

Created a simple UI that takes the market id from the user and the displays the respective score. A selection is added that displays the list of all market id, inorder to enhance user experience. The selection acts as a lookup for the user and the user can type in the market id.

## 4 . Visualizations that justify my approach

![pie](https://user-images.githubusercontent.com/76252013/218285353-3d5e0340-9f40-4957-af42-cfc66fb3b703.png)

#### visualized median_sale_to_list_ratio, days_to_pending,days_to_sell along with score. An increase of decrese in these any one of these three factors affects the score. A decrease in the median_sale_to_list_ratio increases the score. While an increase in days_to_pending or days_to_sell would decrease the score.

![bar](https://user-images.githubusercontent.com/76252013/218285379-97bbee05-a7e0-4d51-a00b-bb0998437bee.png)

# MY FINAL OUTPUT OF THE MARKET HOTNESS TASK:
https://user-images.githubusercontent.com/76252013/218287286-5e5b5d06-2242-47b0-9bc5-d6c3cb9da8b3.mp4
