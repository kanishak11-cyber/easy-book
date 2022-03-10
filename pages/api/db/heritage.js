import { client } from "../../../lib/sanity";

const query = `
*[_type =='heritage']{
  tnt,
  placeName,
"placeImage": placeImage.asset->url,
placeDescription,
  placeId,
}| order(placeId asc)`;
const getHeritage = async (req, res) => {
  try {
    const sanityResponse = await client.fetch(query);
    console.log(sanityResponse);
    res.status(200).send({ message: "success", data: sanityResponse });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getHeritage;
