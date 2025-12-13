console.log("hi");
const error = document.getElementById("error");
const loader = document.getElementById("loader");
const searchBtn = document.getElementById("searchBtn");
const inputElm = document.getElementById("searchInput");
const countryDetails = document.getElementById("countryDetails");

searchBtn.addEventListener("click", async () => {
  const country = inputElm.value.trim();
  if (!country) return;
  await fetchCountry(country);
});

async function fetchCountry(name) {
  loader.classList.remove("hidden");
  error.classList.add("hidden");
  countryDetails.innerHTML = ""; // corrected

  try {
    const respons = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    const data = await respons.json();
    console.log(data);

    const country = data[0];
    if (!country) {
      throw new Error(`Invalid Country Name`);
    }

    const languages = country.languages
      ? Object.values(country.languages).join(",")
      : "N/A";

    countryDetails.innerHTML = `
      <div class="p-4 border rounded shadow">
        <img src="${country.flags.svg}" alt="flag" class="w-32 mb-2" />
        <h2 class="text-xl font-bold">${country.name.common}</h2>
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Languages:</strong> ${languages}</p>
        <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">Local Times</h2>
            <ul id="timezoneList" class="list-disc ml-6"></ul>
        </div>
      </div>
    `;
  } catch (err) {
    error.classList.remove("hidden");
    error.textContent = err.message || "Failed to load the country information";
  } finally {
    loader.classList.add("hidden");
  }
}
