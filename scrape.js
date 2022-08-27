////web scraping
import cheerio from "cheerio";
import axios from "axios";

const url = "https://kenyapropertycentre.com/";

const scrape = async () => {
  try {
    const result = await axios.get(url);
    const $ = cheerio.load(result.data);
    const articles = [];
    $(".wp-block  ").each((i, element) => {
      const title = $(element).find("h3").text();
      const price = $(element).find("a").attr("href");
      //   const summary = $(element).find(".wp-block-title").text();
      articles.push({ title, price });
    }),
      console.log(articles);
  } catch (error) {
    console.log(error);
  }
};
scrape();
