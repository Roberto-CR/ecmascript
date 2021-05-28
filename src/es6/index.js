// es6
function newFunction2(name='Oscar' , age='32' , country='MX') {
    console.log(name,age,country)
}

newFunction2();
newFunction2('Ricardo', '23' , 'CR')


let lorem= "Esto es epico \n" +
"pero hay que poner \ n todo el rato que uso enter";

let lorem2 = `esto es epico
y mas  facil`

 console.log(lorem);
 console.log(lorem2);


 let person = {
     'day': 'oscar',
     'age' : 32,
     'country': 'MX'
 }

 console.log(person.day,person.age,person.country);

 let{day,age,country}=person;
 console.log(day,age)
 
 let team1 = ['Oscar','Julian','Ricardo'];
 let team2 = ['Valeria','Yesica','Camila'];
 let educacion=['David', ...team1,...team2];
 console.log(educacion);



 const helloPromise = () =>{
     return new Promise ((resolve,reject)=>{

        if (true) {
            resolve ('Hey!');
        } else {
            reject ('Ups!!');
        }
     });
 }

 helloPromise();