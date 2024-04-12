let list1 = [
  {
    FirstName: "Noah",
    lastName: "M.",
    pays: "Suisse",
    continent: "Europe",
    age: 19,
    langue: "C",
    Repas: "végétarien",
  },
  {
    FirstName: "Anna",
    lastName: "R.",
    pays: "Liechtenstein",
    continent: "Europe",
    age: 52,
    langue: "JavaScript",
    Repas: "standard",
  },
  {
    FirstName: "Ramona",
    lastName: "R.",
    pays: "Paraguay",
    continent: "Amériques",
    age: 29,
    langue: "Ruby",
    Repas: "vegan",
  },
  {
    FirstName: "George",
    lastName: "B.",
    pays: "Angleterre",
    continent: "Europe",
    age: 81,
    langue: "C",
    Repas: "végétarien",
  },
];

const countRepas = list1.reduce((acc, item) => {
  let repas = item.Repas;
  if (acc[repas]) {
    acc[repas]++;
  } else {
    acc[repas] = 1;
  }
  return acc;
}, {});

console.log(countRepas);

// Compression d’une phrase

const removeEscpace = (str) => {
  let resultat;
  let ponctuation = /[.,\/#!$%?\^&\*;:{}=\-_`~()]/g;
  resultat = str.split(" ").join("").replace(ponctuation, "");
  return resultat;
};

let string =
  " Supprimez  les ponctuations,  # espaces et nombres d’une phrase donnée.? ";
console.log(removeEscpace(string));
