{
    {
        let whatsApp = () => this;
    
        function islamQA()
        {
            return this;
        }
    
        console.log(whatsApp());
        console.log(islamQA());
    
    
    
        let foodTech = 
        {
            communication: whatsApp,
            website: islamQA,
            halalOnMyMind: () => this
        }
    
        console.log(foodTech.communication()); //value for arrow function 'this' will always be the same.
        console.log(foodTech.website());
        console.log(foodTech.halalOnMyMind());
    }
}