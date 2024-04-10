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

const countRepas = (names, repas) => {
  let resultat = [];
  for (let i = 0; i < names.length; i++) {}
  let count = {};
  list1.forEach((item) => {
    if (count[item.Repas]) {
      count[item.Repas]++;
    } else {
      count[item.Repas] = 1;
    }
  });
  let name = list1.map((nom) => `${nom.Repas} => ${nom.FirstName}`);
  console.log(name);

  return count;
};
let name;
list1.forEach((name) => (name = name.FirstName));
console.log(countRepas(name, list1.repas));

let nom = list1.forEach((noms) => noms.FirstName);
