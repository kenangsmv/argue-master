import { connectToDatabase } from "../../utils/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  try {
   const id=req.body
console.log("id bak bu",id)
   const user = await db
    .collection("debates")
    .findOne({username:id})

    delete user.password
    res.json({
      data:user,
     status: true,
    });
    
  } catch (error) {
    console.log(error)
  }
};