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

console.log(countRepas());

/*let reapas = list1.reduce((acc, item)=>{
  (acc[item.Repas]=(acc[item.Repas]||0)+1,acc),{}
});*/

const xo = (str) => {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
};

console.log(xo("xO"));

let comb = str=>[...str].sort().join('')
list1.map((v,index)=>{
  console.log(index);
})