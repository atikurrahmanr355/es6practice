const students = [
    {
        name: "Atikur",
        email: "atikurrahmanm3@gmail.com",
        id: 9
    },
    {
        name: "Aminul",
        email: "aminulhaque@gmail.com",
        id: 10
    },
    {
        name: "Tanvir",
        email: "tanvirahmed@gmail.com",
        id: 13
    }
]


// const student = students.map(std => {
//     return std
// });
// const name = students.map(std => {
//     return std.name
// });
const name = students.map(std => {return std.name});
const email = students.map(std => {return std.email});
const id = students.map(std => {return std.id});
const ids = students.filter(std => {return std.id > 9});
const ids2 = students.filter(std => {return std.id < 13});
const finds = students.find(std => {return std.id < 13});

// console.log(student);
// console.log(name);
// console.log(name);
// console.log(email);
// console.log(id);
// console.log(ids);
// console.log(ids2);
console.log(finds);
