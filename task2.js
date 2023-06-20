import csvToJson from "csvtojson";
async function hii() {
  let cricket = await csvToJson().fromFile("./Matches.csv");
  //   console.log(cricket);
  //   const count = 0;

  const filteredCricket = cricket.filter((x) => x.date.split("-")[0] == "2009");
  console.log(filteredCricket);
  const year = filteredCricket.map((y) => y.winner);
  console.log("2009", year);

  //   const filteredCricket1 = cricket.filter(
  //     (x) => x.date.split("-")[0] == "2010"
  //   );
  //     console.log(filteredCricket);
  //   const year1 = filteredCricket.map((y) => y.winner);
  //   console.log("winners", year1);
  //   console.log(year.length);

  //   const filtered1Cricket = cricket.filter(
  //     (x) => x.date.split("-")[0] == "2010"
  //   );
  //   console.log(filtered1Cricket);
  //   const year1 = filtered1Cricket.map((y) => y.date);
  //   console.log(year1);
  //   console.log(year1.length);

  //   console.log(count);
  //   const winCounts = {};

  //   for (const match of cricket) {
  //     const year = match.date.split("-")[0];
  //     const winner = match.winner;

  //     if (!winCounts[year]) {
  //       winCounts[year] = {};
  //     }

  //     if (!winCounts[year][winner]) {
  //       winCounts[year][winner] = 0;
  //     }

  //     winCounts[year][winner]++;
  //   }

  //   for (const year in winCounts) {
  //     console.log(`Year: ${year}`);
  //     for (const team in winCounts[year]) {
  //       console.log(`${team}: ${winCounts[year][team]}`);
  //     }
  //     console.log("------------------------");
  //   }

  //   console.log(yearCounts);
}

hii();
