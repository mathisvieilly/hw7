// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan",
];

const input = document.getElementById("country");

const suggestions = document.getElementById("suggestions");

input.addEventListener("input", () => {
  const value = input.value;
  suggestions.innerHTML = "";
  if (value.length > 0) {
    const filteredCountries = countryList.filter((country) => {
      return country.toLowerCase().startsWith(value.toLowerCase());
    });

    filteredCountries.forEach((country) => {
      const suggestion = document.createElement("div");
      suggestion.innerText = country;
      suggestions.appendChild(suggestion);
    });
  }
});
