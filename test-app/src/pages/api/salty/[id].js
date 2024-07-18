import dbConnection from "../../../../utils/dbConnection";
import Salati from "../../../models/Salati";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  try {
    await dbConnection();
    switch (method) {
      case "GET":
        try {
          const recipes = await Salati.findById(id);
          if (!recipes) {
            return res
              .status(404)
              .json({ success: false, error: "Recipe not found" });
          }
          res.status(200).json({ success: true, data: recipes });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;

      case "PUT":
        try {
          const body = req.body;
          const recipes = await Salati.findByIdAndUpdate(id, body);
          if (!recipes) {
            return res
              .status(404)
              .json({ success: false, error: "Recipe not found" });
          }
          res.status(200).json({ success: true, data: recipes });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;

      case "DELETE":
        try {
          const recipes = await Salati.findByIdAndDelete(id);
          if (!recipes) {
            return res
              .status(404)
              .json({ success: false, error: "Todo Item not found!" });
          }
          res.status(200).json({ success: true, data: {} });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;

      default:
        res.setHeaders("Allow", ["GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed!`);
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
