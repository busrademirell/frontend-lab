function calculateAge(name, year) {
  const currentYear = new Date();
  const calc = currentYear - year;
  return name + " " + calc + " yasindadir.";
}
console.log(calculateAge("ayse", 1996));
console.log(calculateAge("fgs", 1986));
console.log(calculateAge("hudnsb", 2000));
