let user = { userName: "Büşra Demirel", isActive: true };
console.log(user);
localStorage.setItem("userInfo", JSON.stringify(user));

let userInfo = localStorage.getItem(`userInfo`);
console.log(userInfo);
