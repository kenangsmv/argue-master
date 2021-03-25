import { connectToDatabase } from "../../utils/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  try {
    console.log("uriiiiiiiiiiiiiiiiiii",process.env.MONGODB_URI)
    const debates = await db
    .collection("debates")
    .find({})
  .toArray();
    res.json({
      data:debates,
     status: true,
    });
  } catch (error) {
    console.log(error)
  }
};