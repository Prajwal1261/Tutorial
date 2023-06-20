import csvToJson from "csvtojson";
async function hii() {
  let cricket = await csvToJson().fromFile("./Matches.csv");
  //   console.log(cricket);
  const yearWinners = {};

  for (let i = 0; i < cricket.length; i++) {
    const match = cricket[i];
    const year = match.date.split("-")[0];

    if (!yearWinners.hasOwnProperty(year)) {
      yearWinners[year] = [];
      // console.log("ifff", yearWinners);
    }

    yearWinners[year].push(match.winner);
    // console.log("elsee", yearWinners);
  }

  console.log("Winners every year:", yearWinners);
  //   console.log("Winners in 2010:", yearWinners["2010"]);
}
hii();
