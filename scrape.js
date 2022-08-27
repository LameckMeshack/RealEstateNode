////web scraping
import cheerio from "cheerio";
import axios from "axios";
import { connection } from "./connection.js";

const url =
  "https://kenyapropertycentre.com/for-rent/flats-apartments/nairobi/showtype";

const scrape = async () => {
  try {
    const result = await axios.get(url);
    const $ = cheerio.load(result.data);
    const houses = [];
    $(".wp-block  ").each((i, element) => {
      const title = $(element).find(".wp-block-title>").text();
      const image = $(element)
        .find(".wp-block-body>.wp-block-img>a>.wp-block-img-container>img")
        .attr("src");
      const location = $(element)
        .find(".wp-block-body>.wp-block-content>address")
        .text();
      const price = $(element)
        .find(
          ".wp-block-body>.wp-block-content>.pull-sm-left>span:nth-child(2)"
        )
        .text();

      if (title) {
        houses.push({ title, image, location, price });
      }
    }),
      //   console.log(JSON.stringify(houses));
      console.log(houses);
    // connection.query(
    //   "INSERT INTO try (title) VALUES ?",
    //   [houses.map((item) => [item.title])],
    //   function (err, result) {
    //     if (err) throw err;
    //     console.log("Number of records inserted: " + result.affectedRows);
    //   }
    // );
    // //ending the connection
    // connection.end();

    ///////
  } catch (error) {
    console.log(error);
  }
};
scrape();
