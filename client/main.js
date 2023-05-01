
// get the compliment button from the dom
const complimentBtn = document.getElementById("complimentButton")
//create a variable for the function to be called
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
//create event listener for the compliment function and call it
complimentBtn.addEventListener('click', getCompliment)

//Fortune button
// get the fortune button from the dom
const fortuneBtn = document.getElementById("fortuneButton")

//create a variable for the function to be called
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
//create event listener for the compliment function and call it
fortuneBtn.addEventListener('click', getFortune); 


//DAD JOKES

//Select the dadButton
const dadBtn = document.getElementById("dadButton"); 

//Define the function when the button is clicked

//create a variable for the api request invoked, including the callback and error handling
//send a header with this api

const getDadJoke = () => axios.get("https://icanhazdadjoke.com/",{
    headers: {
      'Accept': 'application/json'
    }}
    ).then(dadCallback).catch(err => {console.log(err)})



//Add an event listener to the button so that when clicked the clicked function runs
dadBtn.addEventListener(`click`, getDadJoke);

//define what the callback function does, which is select the joke from the data and run the insert function
const dadCallback = (arr) => {
    let joke = arr.data.joke;
    insert(joke);
}

//KANYE QUOTES

//Select the dadButton
const kanyeBtn = document.getElementById("kanyeButton"); 

//Define the function when the button is clicked

//create a variable for the api request invoked, including the callback and error handling
//send a header with this api

const getYeezyQuotation = () => axios.get("https://api.kanye.rest").then(kanyeCallback).catch(err => {console.log(err)})



//Add an event listener to the button so that when clicked the clicked function runs
kanyeBtn.addEventListener(`click`, getYeezyQuotation);

//define what the callback function does, which is select the joke from the data and run the insert function
const kanyeCallback = (arr) => {
    let quotation = arr.data.quote;
    insert(quotation);
}


//Add any data to the page
const insert = (x) => {
    const newH2 = document.createElement("h2");
    const newContent =document.createTextNode(x); 
    newH2.appendChild(newContent); 
    const currentDiv = document.getElementById("div1");
    //add the new joke below the old one
    document.body.insertBefore(newH2, currentDiv);
}

//Post a new compliment to the compliment database
document.getElementById("submit").onclick = function() {
    let addCompliment = document.querySelector("input").value; 
        axios.post(`http://localhost:4000/api/compliments/${addCompliment}`).then(function(response){
        alert(`The database contains ${response.data}`)
        }); 
    }
