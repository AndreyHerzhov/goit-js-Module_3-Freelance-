
/*
 * синтаксис конструктора обьекта 
*/ 

// let userInfo = new Object (); 




/*
 * синтаксис литерала обьекта 
*/ 

let firstPart = "likes";
let userInfo = {  
    name: "Вася",
    age: 30,
    "58": `qweqwe`,
    [firstPart + " javascript"]: true,
    [firstPart]: false,
    adress: {
        city: "Kyiv",
        street: "Bandera"
    }
}; 

for (const key in userInfo.adress) {
    console.log(userInfo.adress[key])
}

// console.log(userInfo);
// console.log(userInfo["name"]); // "Вася"
// console.log(userInfo["likes javascript"]) // true
// console.log(userInfo[firstPart]) // false
// console.log(userInfo.adress.city) // "Kyiv"
// console.log(userInfo.adress.street) // "Bandera"

/*
 * Оператор "in". Используеться если свойство существует но его значение "undefined"
*/ 

// if ("name" in userInfo) {
//     console.log("name" in userInfo)
// }


/*
 * Добавление свойства обьекта
*/ 

// userInfo.height = 185;
// console.log(userInfo)

// userInfo.age = 20;
// console.log(userInfo)

// userInfo.height = 200;
// console.log(userInfo)


/*
 * Копирование обьекта
*/ 

// let user = userInfo;
// user.age = 13;
// console.log(user)
// console.log(userInfo)


/*
 * Дублирование обьекта (Object.assign)
*/ 

// let user = Object.assign({}, userInfo)
// user.age = 12;
// console.log(user)
// console.log(userInfo)

// Object.assign(userInfo, {height: 150, language: "German"});

/*
 * Приемущество квадратных скобок
*/

// let key = "name";
// console.log(userInfo[key]) // "Вася"


/*
 * Свойство из переменной
*/

// function makeuserInfo (name, age) {
//     return {
//         name: name,
//         age: age,
//     }
// }

// let user = makeuserInfo("Vasia", 24)
// console.log(user)



/*
 *  Цикл for ... in
*/

// for (let key in userInfo) {
//     console.log(key)
//     console.log(userInfo[key])
// }

// for (let key in userInfo.adress) {
//     console.log(key)
//     console.log(userInfo.adress[key])
// }


/*
 *  Цикл for ... in
*/



 
// let userInfo = {  
//     name: "Вася",
//     age: 30,
//     adress: {
//         city: "Kyiv",
//         street: "Bandera"
//     },
//     shofInfo: function () {
//         console.log(`${userInfo.name}, ${userInfo.age} лет, г.${userInfo.adress.city}, ул.${userInfo.adress.street}`)
//     }
// }; 

// userInfo.shofInfo()

/*
 *  Функция-конструктор
*/

// function UserInfo (name){
//     this.name = name;
//     this.age = 30;
// }

// console.log(new UserInfo('Vasya'))
// console.log(new UserInfo('Lena'))