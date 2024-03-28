import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = `https://graph.instagram.com/${process.env.IG_USER_ID}/media?access_token=${process.env.IG_TOKEN}`;

  axios
    .get(url)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
      res.status(400).json({ error: error.message });
    });
}
