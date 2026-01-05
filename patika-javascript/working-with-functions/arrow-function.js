// Arrow fonksiyon kullanimi

function hello(firstName) {
  console.log(`Merhaba ${firstName}`);
}

hello("javaScript");

const helloFuncV1 = (firstName) => {
  console.log(`Merhaba ${firstName}`);
};
helloFuncV1("funcV1"); // yöntem 1

const helloFuncV2 = (firstName) => console.log(`Merhaba ${firstName}`);

helloFuncV2("funcV2"); // bir parametre ya da bir dönüş işlemi varsa parantez veya süslü parantez almak zorunda değilsiniz

const helloFuncV3 = (firstName, lastName) =>
  console.log(`Merhaba ${firstName} ${lastName}`);

helloFuncV3("funcv3", "Last Name info");

const helloFuncV4 = (firstName, lastName) => {
  let info = `Merhaba ${firstName} ${lastName}`;
  console.log(info);
};
helloFuncV4("funcv4", "Other info");
