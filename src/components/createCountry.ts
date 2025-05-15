const createCountry = (data: any) => {
  const countryCard = document.createElement("div");
  countryCard.classList.add("country");

  const title = document.createElement("h3");
  title.className = "country-name";
  title.innerText = data.name.common || data.name.official;

  const flag = document.createElement("img");
  flag.className = "country-flag";
  flag.src = data.flags.svg || data.flags.png;
  flag.alt = data.name.common || data.name.official;

  const capital = document.createElement("p");
  capital.className = "country-capital";
  capital.innerText = `Capital : ${data.capital[0]}`;

  const population = document.createElement("p");
  population.className = "country-population";
  population.innerText = `Population : ${data.population}`;

  countryCard.append(title, flag, capital, population);
  return countryCard;
};

export default createCountry;
