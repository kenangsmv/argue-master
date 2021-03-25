import { connectToDatabase } from "../../utils/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  try {
   const id=req.body
console.log("id bak bu",req.body)
   const debate = await db
    .collection("debates")
    .find({ categories : id}).toArray();
    res.json({
      data:debate,
     status: true,
    });
    
  } catch (error) {
    console.log(error)
  }
};