alert("Hello");
// Değişken tanımlama:
// var ile degisken tanımlama: (var yerine let kullan)
// var servername = "api.kodluyoruz.org";
// console.log(servername);
// let ile degiskeni bos tanimlamak
let serverName;
console.log(serverName);
// let ile degiskene bilgi atamak:
serverName = "http://youtube.com";
console.log(serverName);
// let ile degiskene bilgi atayarak tanımlamak:
let password = "1235";
console.log(password);
// degisken ataması yapmadan once kullanmaya calismak :
/*    HATALI KULLANIM:
console.log(fullName);
let fullName = "Busra Demirel";
*/
let fullName = "Busra Demirel";

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:
fullName = "Lorem Ipsum Dolor";
console.log(fullName);

// birlestime veya ekleme islemi
fullName + "newly added information";
console.log(fullName + "Test information");

fullName = fullName + " new information ";
fullName = " 2: information : " + fullName;

fullName = "reset";
fullName += " and newly added information";

console.log(fullName);

// const ile degiskeni bos tanımlamaya calismak:
// const bir kere tanımlanır bir daha da değişmez amaç da budur.
// const serverpassword; sadece değişken tanimlandi ama içi boş ??

// const ile degisken tanimlamak:  (sabit varsa değişmemesi gerekiyorsa kullanılır)
const SERVER_PASSWORD = "fsöfeolfmergmşl";
console.log(SERVER_PASSWORD);

// SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD)

// kişisel denemem
let diffent = "http://medium.com";
console.log(diffent);
