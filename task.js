import csvToJson from "csvtojson";
async function hii() {
  let cricket = await csvToJson().fromFile("./Matches.csv");
  console.log(cricket);

  const matchCount = cricket.length;
  console.log("total matches:", matchCount);

  // const PerYearMatch = {};
  // const matches = cricket;
  // for (const cricket of matches) {
  //   const year = new Date(cricket.date).getFullYear();

  //   if (!PerYearMatch[year]) {
  //     PerYearMatch[year] = 1;
  //   } else {
  //     PerYearMatch[year]++;
  //   }
  // }

  const filteredCricket = cricket.filter((x) => x.date.split("-")[0] == "2009");
  console.log(filteredCricket);
  const year = filteredCricket.map((y) => y.date);
  console.log(year);
  console.log(year.length);

  // const yearCounts = {};
  // for (let i = 0; i < cricket.length; i++) {
  //   const year = cricket[i].date.split("-")[0];
  //   if (!yearCounts.hasOwnProperty(year)) {
  //     yearCounts[year] = 0;
  //     console.log("ifff", yearCounts);
  //   }
  //   yearCounts[year]++;
  //   console.log("forrr", yearCounts);
  // }

  // console.log("Matches per year:", yearCounts);
}
hii();
