let arr = [Math.random(), 1, 67, Math.random(), 65, 32, 22, 43, 87, 45];
console.log(arr);
let result = Math.floor(arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9]);
console.log(result);

let book = {
    name: '1984',
    page: 450,
    genre: 'антиутопія'
}
let book1 ={
    name: 'Sapiens',
    page: 544,
    genre: 'есе',
    author: 'Ювал Ной Харарі'
}
console.log(book1)
let arr1 = [
    {
        name: 'Sapiens',
        page: 544,
        genre: 'есе',
        author: 'Ювал Ной Харарі'
    },
    {
        name: 'Тарас Бульба',
        page: 104,
        genre: 'повість',
        author: 'Микола Гоголь'
    },
    {
        name: 'Гра Престолів',
        page: 778,
        genre: 'роман',
        author: 'Джордж Р. Р. Мартин'
    },
    {
        name: 'Психологія впливу',
        page: 352,
        genre: 'Психологія розвитку',
        author: 'Роберт Чалдині'
    },
    {
        name: 'Інферно',
        page: 352,
        genre: 'детектив з елементами фантастики',
        author: 'Ден Браун'
    }
]
console.log(arr1[0], arr1[1], arr1[2], arr1[3], arr1[4]);
let b1 = arr1[0];
console.log(b1)
let b2 = arr1[1];
let b3 = arr1[2];
let b4 = arr1[3];
let b5 = arr1[4];


let height = 23;
let width = 10;
let s = height * width;
console.log(s);


let heightC = 10;
let dC = 4;
let p = 3.14;
let v = p*Math.pow(dC, 2)*heightC;
console.log(v);


let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(k)