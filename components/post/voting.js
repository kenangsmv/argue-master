import React from "react";
import Link from "next/link"
import {Button} from "@material-ui/core"

export default function voting({ data }) {
  console.log(data)
  return (
    <div className={"votingContainer space-between center"}>
    <div className="row">
   {data.categories?.map(categorie=>
     <div className={ `${categorie} m1 center`}> {categorie}</div>

    
    )}

    </div>
      <Link href={`/live/${data.id}`}>
            <Button variant="contained"  className="voteButton" >
              Join
            </Button>
            </Link>
    </div>
  );
}
