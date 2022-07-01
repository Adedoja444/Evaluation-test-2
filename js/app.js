
// Day with switch statement
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5: 
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day)

let myArray = [{name: "Goodness", gender: "female", track: "Web Development", favouriteFood: "Rice", hobby:"being alive", pic: "goodness"},
{name: "Emmanuel", gender: "male", track: "Web Development", favouriteFood: "Rice", hobby: "being alive", pic: "emmanuel"},
{name: "Grace", gender: "female", track: "Web Development", favouriteFood: "Rice", hobby: "being alive", pic: "grace"},
{name: "Sarah", gender: "female", track: "Web Development", favouriteFood: "Rice", hobby: "being alive", pic: "brenda"},
{name: "Valentine", gender: "male", track: "Web Development", favouriteFood: "Rice", hobby: "being alive", pic: "lastman"},
{name: "Tilda", gender: "female", track: "Web Development", favouriteFood: "Rice", hobby: "being alive", pic: "tilda"},
]

let thecards = document.querySelector('.thecards')
let cardholder = ''
myArray.forEach((student) => {
    cardholder += `
    <div class="card">
    <div class="maincard">
       <p>Name: ${student.name}</p>
       <p>Gender: ${student.gender}</p>
       <p>Track: ${student.track}</p>
       <p>Favourite Food: ${student.favouriteFood}</p>
       <p>Hobby: ${student.hobby}</p>
    </div>
    <div class="image-div">
        <img src= img/${student.pic}.jpg alt="" class="image">
    </div>
</div>
`
})

thecards.innerHTML = cardholder


// Apple at the beginning 
let fruits = ["banana", "pineapple", "mango", "orange"];
fruits.unshift("apple")
console.log(fruits)

// Remove the last item
fruits.pop()
console.log(fruits)

// 8 raised to the power of 3
let pro = Math.pow(8, 3)
console.log(pro)

// Function multiplying two numbers
let x = product(5, 2)
function product(a, b) {
    console.log(a * b)
}





