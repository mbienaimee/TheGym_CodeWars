// destructuring in object
const person ={
    name:'reine',
    age:21,
}
const{name}=person 
// console.log(name)

//destructuring in array

const numbers =[1,2,3,4]
const [one,two]=numbers
// console.log(one)
// Object challenge
const library =[
    {
        title:'title 1',
        author:'reine',
        status:{
            own:true,
            reading:false,
            read:false,
        },
    },
    {
        title:'title 2',
        author:'reine',
        status:{
            own:true,
            reading:false,
            read:false,
        },
    },
    {
        title:'title 3',
        author:'reine',
        status:{
            own:true,
            reading:false,
            read:false,
        },
    },
]

//random number from array
function randomArray(arr){
    const randomIndex =Math.floor(Math.random()*arr.length)
    return arr[randomIndex]
}
// console.log(randomArray([1,2,3,4,5,7]))

//for loop
let names = ['marie','clara','emma','bien','kwizera']
for(let i=0;i<names.length;i++){
    if(names[i]==='emma'){
       continue
    }
    else{
        console.log(i)
    }
    // console.log(i)

}