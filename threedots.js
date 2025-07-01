const ages = [20, 24, 29, 23, 38];
const ages2 = [19, 18, 17, 14, 15];
const oldAge = [40, 48, 47, 44, 45];
const result = ages.concat(ages2).concat(oldAge).concat([8]);

console.log(result);

const allAges = [...ages,...ages2,...oldAge,8];
console.log(allAges);
