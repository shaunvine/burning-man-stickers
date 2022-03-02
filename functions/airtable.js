require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appWkNz6h3cDzcCq8")
  .table("products");

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      console.log(product);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `Server Error`,
      };
    }
  }

  try {
    const { records } = await airtable.list({
      maxRecords: 400,
    });
    // console.log(records)
    const stickers = records.map((product) => {
      const { id } = product;
      const {
        name,
        slug,
        title,
        year,
        officialtheme,
        BMTheme,
        shape,
        themecamp,
        themecampname,
        artproject,
        artprojectname,
        artcar,
        artcarname,
        official,
        createdby,
        contributor,
        image,
        // price,
        desc,
        camplink,
        category,
        featured,
      } = product.fields;
      const url = image[0].url;
      return {
        id,
        name,
        slug,
        year,
        officialtheme,
        BMTheme,
        shape,
        themecamp,
        themecampname,
        artproject,
        artprojectname,
        artcar,
        artcarname,
        official,
        createdby,
        contributor,
        title,
        url,
        // price,
        desc,
        camplink,
        category,
        featured,
      };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(stickers),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
