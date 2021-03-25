import { connectToDatabase } from "../../utils/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  try {
   const id=req.body
console.log("id bak bu",id)
   const debate = await db
    .collection("debates")
    .findOne({string_id:id})
    res.json({
      data:debate,
     status: true,
    });
    
  } catch (error) {
    console.log(error)
  }
};