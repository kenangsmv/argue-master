import React from 'react'
import Login from "./login"
import Register from "./register"
export default function layout({cancel}) {
    const [stage, setStage] = React.useState(1);

    const next = () => {
      setStage(2);
    };
    const back = () => {
      setStage(1);
    };
  

    return (
        <div>
  {stage==2&&<Login back={back} cancel={cancel}/>}
  {stage==1&&<Register next={next} cancel={cancel}/>}          
        </div>
    )
}
