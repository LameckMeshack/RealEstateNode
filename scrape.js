////web scraping
import cheerio from "cheerio";
import axios from "axios";

const url =
  "https://kenyapropertycentre.com/for-rent/flats-apartments/nairobi/showtype";

const scrape = async () => {
  try {
    const result = await axios.get(url);
    const $ = cheerio.load(result.data);
    const articles = [];
    $(".wp-block  ").each((i, element) => {
      const title = $(element).find(".wp-block-title>").text();

      if (title) {
        articles.push({ title });
      }
    }),
      console.log(JSON.stringify(articles));
  } catch (error) {
    console.log(error);
  }
};
scrape();
