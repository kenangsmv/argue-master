export default function DebateRoom({ scores }) {
  console.log(scores);
  let percent = false;

  if (scores?.topic1Score > 0 || scores?.topic2Score > 0) {
    const { topic1Score, topic2Score } = scores;
    percent = {
      topic1Score:
        topic1Score <= 0
          ? 0
          : (topic1Score / ((topic1Score + topic2Score)>0?(topic1Score + topic2Score):1)) * 100,

      topic2Score:
        topic2Score <= 0
          ? 0
          : (topic2Score / ((topic1Score + topic2Score)>0?(topic1Score + topic2Score):1)) * 100,
    };
  }
  console.log(percent);
  if (percent) {
    
    return (
      <div className="vs white row w100 center">
        <div
          className=" whiteVS h100 center"
          style={{ width: `${percent.topic1Score}%`,minWidth:"20%",maxWidth:"80%" }}
        >
          <span className="center h100">{scores.topic1}</span>
        </div>
        <div
          className=" blackVS h100 center"
          style={{ width: `${percent.topic2Score}%` ,minWidth:"20%",maxWidth:"80%"}}
        >
          <span className="center h100">{scores.topic2}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="vs row w100">
        <div className="whiteVS h100 center w50">
          <span>{scores?.topic1}</span>
        </div>
        <div className="blackVS h100 center w50">
          <span>{scores?.topic2}</span>
        </div>
      </div>
    );
  }
}
