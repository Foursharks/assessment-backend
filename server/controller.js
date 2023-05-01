module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["You will inherit a large sum of money.", "Well done is better than well said.", "Today, your mouth might be moving but no one is listening."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    }, 

    postCompliment: (req, res) => {
        const compliments = [`nice`, `handsome`, `silly`];
        const {newCompliment} = req.params; 
    //add the compliment to the db
    compliments.push(req.params.newCompliment);  
        res.status(200).send(compliments); 
    }
}