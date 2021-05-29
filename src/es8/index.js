const helloWorld = () =>{
    return new Promise ((resolve, reject)=> {
        (true)
        ? setTimeout(() => resolve ('Hello World'), 3000)
        : reject(new Error ('Test Error'))
    })
};


const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


 
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch (error){
        console.log(error);
    }
};

anotherFunction();

const regexData =  /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2018-04-20');
const year = match[1]
const month= match [2]
const day = match[3]

console.log(year,month,day);