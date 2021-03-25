export default function DebateRoom({ scores }) {
  console.log(scores);
  let percent = false;

  if (scores?.topic1Score > 0 || scores?.topic2Score > 0) {
    const { topic1Score, topic2Score } = scores;
    percent = {
      topic1Score:
        topic1Score <= 0
          ? 0
          : (topic1Score / (topic1Score + topic2Score)) * 100,

      topic2Score:
        topic2Score <= 0
          ? 0
          : (topic2Score / (topic1Score + topic2Score)) * 100,
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
          <h2 className="center h100">{scores.topic1}</h2>
        </div>
        <div
          className=" blackVS h100 center"
          style={{ width: `${percent.topic2Score}%` ,minWidth:"20%",maxWidth:"80%"}}
        >
          <h2 className="center h100">{scores.topic2}</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="vs row w100">
        <div className="whiteVS h100 center w50">
          <h2>{scores?.topic1}</h2>
        </div>
        <div className="blackVS h100 center w50">
          <h2>{scores?.topic2}</h2>
        </div>
      </div>
    );
  }
}
