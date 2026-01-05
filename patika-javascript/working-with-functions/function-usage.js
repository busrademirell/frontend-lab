const PI = 3.14;

function DaireAlaniHesaplama(r) {
  let islemSonucu = PI * r * r;
  return islemSonucu;
}

let donenSonuc = DaireAlaniHesaplama(6);
console.log(donenSonuc);
