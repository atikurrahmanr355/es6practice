const welcome = "Hello World";
console.log(welcome);

const numbers = [1,2,3,4];
console.log(numbers);
numbers[1] = '90';
console.log(numbers);
numbers.push(8);
console.log(numbers);
// numbers = ['hello','hi'];
// console.log(numbers);

const friends = {
    name:"Rahim",
    phone: "018XXXXXX",
    address: "Sonargaon,Narayanganj."
}
console.log(`
    Name: ${friends.name}
    Phone Number: ${friends.phone}
    Address: ${friends.address}`);

friends.name = "shakil";
friends.phone = "015XXXXXXXX";
friends.address = "Dhaka,Bangladesh";
console.log(`Name: ${friends.name}\nPhone Number: ${friends.phone}\nAddress: ${friends.address}`);