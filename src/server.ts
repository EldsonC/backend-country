import axios from "axios";
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "*"
}));

app.get("/countries", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(process.env.ALL_COUNTRIES_URL || '');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching countries", error });
  }
});

app.get("/country/:code", async (req: Request, res: Response) => {
  const { code } = req.params;
  try {
    const countryInfoResponse = await axios.get(`${process.env.COUNTRY_INFO_URL}${code}`)
    const populationResponse = await axios.post(process.env.POPULATION_URL || '', { country: countryInfoResponse.data.commonName })
    const flagResponse = await axios.post(process.env.FLAGS_URL || '', { country: countryInfoResponse.data.commonName })

    const countryInfo = countryInfoResponse.data;
    const populationData = populationResponse.data;
    const flagData = flagResponse.data;

    res.json({
      borders: countryInfo,
      population: populationData,
      flag: flagData
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching country info", error });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
