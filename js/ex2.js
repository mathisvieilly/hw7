const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const select = document.getElementById("house");

houses.forEach(house => {
  const option = document.createElement("option");
  option.value = house.code;
  option.innerText = house.name;
  select.appendChild(option);
});

const ul = document.getElementById("characters");

select.addEventListener("change", () => {
  const houseCode = select.value;
  const characters = getCharacters(houseCode);

  ul.innerHTML = ""; // Remove all children

  characters.forEach(character => {
    const li = document.createElement("li");
    li.innerText = character;
    ul.appendChild(li);
  });
});