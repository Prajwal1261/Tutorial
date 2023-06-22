import csvToJson from "csvtojson";
async function hii() {
  let cricket = await csvToJson().fromFile("./Matches.csv");

  const playerCountsPerYear = {};

  for (let i = 0; i < cricket.length; i++) {
    const match = cricket[i];
    const year = match.date.split("-")[0];

    if (!playerCountsPerYear.hasOwnProperty(year)) {
      playerCountsPerYear[year] = {};
    }

    const player = match.player_of_match;

    if (!playerCountsPerYear[year].hasOwnProperty(player)) {
      playerCountsPerYear[year][player] = 0;
    }

    playerCountsPerYear[year][player]++;
  }

  for (const year in playerCountsPerYear) {
    if (playerCountsPerYear.hasOwnProperty(year)) {
      const playerCounts = playerCountsPerYear[year];
      const sortedPlayerCounts = Object.entries(playerCounts).sort(
        (a, b) => b[1] - a[1]
      );
      playerCountsPerYear[year] = Object.fromEntries(sortedPlayerCounts);
    }
  }

  // return playerCountsPerYear;
  console.log(playerCountsPerYear);

  const maxCountPlayers = {};

  // Iterate over each year in the data
  for (const year in playerCountsPerYear) {
    const players = playerCountsPerYear[year];
    let maxCount = 0;
    maxCountPlayers[year] = [];

    // Find the maximum count for the year
    for (const player in players) {
      const count = players[player];
      if (count > maxCount) {
        maxCount = count;
      }
    }

    // Find the players with the maximum count for the year
    for (const player in players) {
      const count = players[player];
      if (count === maxCount) {
        maxCountPlayers[year].push(player);
      }
    }
  }

  // Print the maximum count player list for each year
  for (const year in maxCountPlayers) {
    console.log(year + ":", maxCountPlayers[year]);
  }
}
hii();
