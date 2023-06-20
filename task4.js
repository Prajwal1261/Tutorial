import csvToJson from "csvtojson";
async function hii() {
  let cricket = await csvToJson().fromFile("./cricket.csv");
  //   console.log(cricket);

  const x = cricket.filter((xx) => xx.id == "335982");
  //   console.log(x);
  const y = x.map((yy) => yy.extra_runs);
  console.log(y);
}

hii();
