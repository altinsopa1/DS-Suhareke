var programmingLanguages=['Javascript','PHP','Python'];
console.log(programmingLanguages);
console.log(programmingLanguages[0]);
programmingLanguages.push('Java');
console.log(programmingLanguages);
programmingLanguages.unshift('c++');
console.log(programmingLanguages);

programmingLanguages.shift();
console.log(programmingLanguages);

programmingLanguages.splice(0,2, 'HTML');
console.log(programmingLanguages);

console.log(Math.random()*5);
console.log(Math.floor(Math.random()*5));

var students =["John","Doe"]
var [s1,s2]=students;
console.log(s1);
console.log(s2);

var places =["London","Paris","New York","Berlin"]
var[firstPlace, ,secondPlace] = places;
console.log(secondPlace);
var numbers = [1,21,3,4,5,6,7,8,9,10]

var[first,second, ...otherNumber]= numbers;
console.log(first);
console.log(second);
console.log(otherNumber.toString());
