import { connectToDatabase } from "../../utils/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  try {
   const id=req.body
console.log("id bak bu",req.body)
   const debate = await db
    .collection("debates")
    .find({debaters:id}).toArray();
   
    const user = await db
    .collection("users")
    .findOne({username:id})

    console.log(debate,"debate")
    console.log(user,"user")

    res.json({
      data:{debate:debate,user:user},
     status: true,
    });
    
  } catch (error) {
    console.log(error)
  }
};