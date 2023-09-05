import React, { useState, useEffect } from "react";
import CardComp from "./CardComp";
import Container from "react-bootstrap/Container";

const Body = () => {
  const [liveScore, setLiveScore] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const url = "https://crickbuzz-official-apis.p.rapidapi.com/home";
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': 'ddcff9e382msh560427647c73d1fp149c06jsn76aecd0ace4d',
        'X-RapidAPI-Host': 'crickbuzz-official-apis.p.rapidapi.com'
      },
    };

    fetch(url, options)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        let matchesAvailable = json;
        setLiveScore({ matchesAvailable });
        console.log('api '+matchesAvailable);
        console.log(liveScore);
      });
  }

  return (
    <Container>
      <br />
      {console.log(liveScore)}
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {liveScore.matchesAvailable&&liveScore.matchesAvailable.matches.map((data) => (
          <CardComp
            name={data.match.matchInfo.seriesName}
            vs={
              data.match.matchInfo.team1.teamName +
              " vs " +
              data.match.matchInfo.team2.teamName
            }
            status={data.match.matchInfo.status}
          />
        ))}
      </div>
    </Container>
  );
};

export default Body;
