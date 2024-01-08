{
    //this "this" is confusing... I don't get
    let ireesi = 
            {
                attributeLeleyii: 'iwa lewa omo eniyan',
                imiRee: function eero()
                        {
                             console.log(this);
                        }
            };
    //this below is invoking a 'function' "as a method". that means calling the function while attached to an object, in this case the function 'eero' is attached to the object 'ireesi' and is then called as a method...
    ireesi.imiRee(); //it appears this would output the content of the object 'ireesi' because of 'this'



   let amal = {
        ismu: 'Abu Masjid',
        bayt: albaab
   }
   
   function albaab()
   {
        console.log(this);
   }

   function alkitaab()
   {
        'use strict';
        console.log(this);
   }

   function Toaam() //this is a constructor, it starts with capital letter i.e the capital letter 'T' in 'Toaam'
   {
        console.log(this);
        this.name = 'aswad';
        console.log(this);
   }

   amal.bayt();//method
   albaab();//function
   alkitaab();//function strict
   let yadd = new Toaam();//constructor
   console.log(yadd);
}