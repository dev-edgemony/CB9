import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI); //instauriamo connessione
mongoose.Promise = global.Promise; // le promise sono a livello globale con mongoose

//Dati di scambio tra server e DB
const saltySchema = new Schema({
  title: String,
  // ingredients: Array,
  // steps: String,
  // time: String,
  // vegetarian: Boolean,
});

const Salty = mongoose.models.Salty || mongoose.model("Salty", saltySchema);
export default Salty;

// module.exports =
// mongoose.models.saltyfood || mongoose.model("saltyfood", saltySchema);
