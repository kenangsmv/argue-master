import React from "react";
import TextField from "@material-ui/core/TextField";


export default function stage1({changeValue,data}) {

  return (
    <div className="w100 center column">
      <div className="center w100 border-bottom">
        <h2 className="mb1">Stage 1</h2>
      </div>
      <div className="mt2 argueTopic w100 mb2">
        <TextField
          id="outlined-basic"
          className="w100 "
          rows={4}
          multiline
          placeholder="Hangi telefon daha iyi ?"
          label="Tartismanin konusu "
          variant="outlined"
          name="title"
          value={data["title"]}
          onChange={(e) => changeValue(e.target.name, e.target.value)}
        />
      </div>
      <div className="teams space-between w100">
        <TextField
          className="w45"
          id="outlined-basic"
          size="small"
          placeholder="I think I phone is better"
          label="Topic1"
          variant="outlined"
          name="topic1"
          value={data["topic1"]}
          onChange={(e) => changeValue(e.target.name, e.target.value)}
        />

        <TextField
          inputProps={{ min: 0}}
          className="w45 "
          id="outlined-basic"
          size="small"
          placeholder="I think samsung is better"
          variant="outlined"
          name="topic2"
          label="Topic2"
          value={data["topic2"]}
          onChange={(e) => changeValue(e.target.name, e.target.value)}
        />
      </div>
    
    </div>
  );
}
