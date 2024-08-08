// const productName = "Phone";
// const productDefault = "Name";

// const newProductName = "Phone2";
// const userRole = "admin";

// const test2 = "test";

// const updateProductName = 
// userRole === "admin" 
// ? console.log("isAdmin") || newProductName
// : console.log("noAdmin") || productName;

/////////////////////////////////////////////////////////////////////
// console.log(updateProductName);

// // UK

// {
//     let test = "test";
//     test = productName;
//     test = test2;
//     console.log(test);

//     //London
//     {
//         let info = "hello world";
//         info = `${info} ${test}`;
//     }
//     //Man
//     {
//         let info = "hello world";
//         info = `${info} ${test}`;
//     }
// }

// // USA

// {
//     const test2 = "Hello";
//     console.log(test2);
// }

///////////////////////////////////////////////////////////////////////////////////////
// Максимально приближений до реального коду 

// const CUSTOM_NAME = "My phone";
// const MODE = 0;
// const ROOM = "Guest Room";

// const COMAND = "work";

// if (COMAND === "change name" && MODE !== 0) {
//     const name = CUSTOM_NAME || "Phone 1";
//     console.log(`Start ${name}`);
// }

// if (MODE === 0) {
//     console.log(`Phone is offLine`);
// }

// if (COMAND === "work") {
//     const room = ROOM;
//     const mode = MODE;

//     console.log(`Mode: ${mode}; Clean room ${room}`);
// }

/////////////////////////////////////////////////////////////////////////////////

// IF / ELSE / ELSE IF
// const login = "user";
// const password = "123qwe123";
// const isAdmin = true; 
// const isLoggedIn = true;

// if(isLoggedIn === true) {
//     if(isAdmin) {
//         console.log("Changing page to /admin");
//     } else if (login === "demo") {
//         console.log("Changing page to /demo");
//     }
//      else {
//         console.log("Changing to /home");
//     }
// } else if (isLoggedIn === false) {
//     if (login && password) {
//         console.log("Token:", 32135465);

//         if(isAdmin) {
//             console.log("Changing page to /admin");
//         }
//         else {
//             console.log("Changing to /home");
//         }
// }
// } else if (isLoggedIn === null) {
//     console.log("Error");
// }

////////////////////////////////////////////////////////////////////

// const price = 100;
// const useCashback = true;

// let cashbackAmount = null;
// let totalPrice = null;
// let cashbackLevel = 4;



// if (price < 100) {
//     console.log("Only for stuff from 100 usd");
//     cashbackAmount = 0;
// } else {
//     if (cashbackLevel > 0) {
//         cashbackAmount = price * (cashbackLevel * 0.01);
//     }

//     cashbackLevel++;

//     if (cashbackLevel > 5) {
//         cashbackLevel = 1;
//     }

//     if (useCashback > 0 && useCashback) {
//         totalPrice = price - cashbackAmount;
//     }
// }

// console.log(totalPrice);

///////////////////////////////////////////////////////////


// const buttonType = "primary";

// if (buttonType === "primary") {
//     console.log("primary button");
// }

// else if (buttonType === "secondary") {
//     console.log("secondary button");
// }
// else if (buttonType === "basic") {
//     console.log("basic button");
// }
// else  {
//     console.log("default button");
// }


/////////////////////////////////////////////////////////////////

// Йде перевірка по кейсах, коли не знаходиться збіжність в кейсах, 
//  то буде виконуватися default. Це по аннології if Ta else  

// const buttonType = "123",
//     buttonColor = "red";

// switch (buttonType) {
//     case "global" :
//         console.log("global");     
//     case "main" :
//     case "primary" :
//     console.log("primary");
//     break;

//     case "secondary" : 
//     console.log("secondary");
//     break;

//     default: 
//     console.log("default button"); 
// }   

///////////////////////////////////////////////////////////////////////

// ЗАПУСК ЦИКЛУ!!!!!

// while (true) {
//     let a = 1;
//     console.log("Hello world!", a);
// }

/////////////////////////////////////////////////////


// let count = 0;
// let isFast = true;

// while (count < 5) {
//     console.log("Hello world!", count);
//     if (isFast) {
//         count = 5;
//     }
//     else {
//         count++;
//     } 
//     count++; 
//     // (означає додавання)
// }
///////////////////////////////////////////////////////////////////////

// const PRODUCT_AMOUNT = 6;
// const DISCOUNT_ADDITIONAL = 2;

// let discountAmount = 0;

// let productCount = 0;

// while (productCount < PRODUCT_AMOUNT && DISCOUNT_ADDITIONAL <= 10 && discountAmount <= 10) {

//     productCount++;

//     if (productCount <=0) {
//         break;
//     }
//     if (productCount <=3) {
//         discountAmount +=1;
//     } else if (productCount > 3 && productCount <=5 ) {
//         discountAmount += 1.5;
//     } else if (productCount > 5 && productCount <= 8) {
//         discountAmount += 2;
//     } else if (productCount > 8) {
//         discountAmount += 2.5;
//     }

//     if (DISCOUNT_ADDITIONAL) {
//         discountAmount += DISCOUNT_ADDITIONAL
//     }

//     console.log(productCount, discountAmount)
// }
//     if (discountAmount > 10) {
//         discountAmount = 10;
//     }

// console.log("Rabat", discountAmount, "%");

// console.log("Rabat for wares", productCount);

// console.log("Without rabat", PRODUCT_AMOUNT - productCount);
/////////////////////////////////////////////////////////////////////////////

// let container = 5;
// let storage = 20;
// let car = 3;

//  do {
//     car++;

//     storage -= container;

//     console.log(car, storage);
// } while (car <3);

// if (car > 3) {
//     console.log("Need new car");
// }


/////////////////////////////////////////////////////////////////////////////


// let start = 40;
// let goal = 100;

// let step = 0;
// let set = 8;
// let rest = 10;

// do {
//     if (step === 0) {
//         console.log("Start training");
//         }

//     start++;
//     step++; 

//     if (step === goal || start === goal) {
//         console.log("Stop training");
//         break;
//         }

//     if (step % rest === 0) {
//         console.log("Make a pause");
//         continue;
//     }

//     if (step % set === 0) {
//         console.log(`You make ${step / set} set`);
//     }

//     if (step === goal / 2) {
//         console.log("You in the middle of training");
//     }

//     console.log("Actual progress", step);
// } while (step < goal && start < goal);

//////////////////////////////////////////////////////////////////////////////


// let q = 0;
// main: for (let i = 0, j = 5; i <= j; i++) {
//     console.log("Test", i, j);
//     if (i === 3) {
//         j++;
//     }
//     for (; ; ) {
//         console.log("Q", q);

        
         
//         if(q >= i) {
//             break main;
//         }

//         q++;
//     }
// }


/////////////////////////////////////////////////////////////////////////

// let age = 25;
// let hasExp = true;
// let hasEdu = true;

// let JS = true;
// let HTML = true;



// form: {
//     if (age >= 18 ) {

//         if (hasExp) {
//             console.log("You pass");
//             break form;    

//             if (JS) {
//                 console.log("You pass");
//             }

//             if (HTML) {
//                 console.log("You pass");
//             }
//         }

//         if (hasEdu) {
//             console.log("You pass");
//             break form;  
//         }
//     }

//     if(age < 18) {
//         console.log("You do not pass, you're to young" );
//         break form;
//     }
// }

/////////////////////////////////////////////////////////////////////////////
// break завершує цикл при вказанних умовах. Наприклад, як у низу, число і доходячи до 9, заверщує цикл table

// table: for (let i = 1; i < 10; i++) {
//      console.log(`Number ${i}==============`);
//      for (let j = 1; j < 10; j++) {

//         if(i === 9) {
//             break table;
//         }
//         console.log(`${i} * ${j} = ${i * j}`);
//      }
// }

// table: for (let i = 1; i < 10; i++) {
//      console.log(`Number ${i}==============`);
//      for (let j = 1; j < 10; j++) {

//         if(i === 9) {
//             break table;
//         }
//         console.log(`${i} * ${j} = ${i * j}`);
//      }
// }

//////////////////////////////////////////////////////////////////////////////
                    // FUNCTION

// function calcSpace (amount, a, b, c, d) {
//     `${amount * 4}px`
// }
 
// // Тут передаємо всі змінні з функції по черзі, передаючи всі змінні, навіть значення яких не маємо (тоді через null)
// calcSpace (5, null, 10)

        // function calcSpace (amount, unit = "px") {
       
        // return `${amount * 4}${unit}`;
        // }




        function playTrackById(trackId) {

        }

        function stopTrackById(trackId) {
                console.log(`Get song from ID ${trackId}`)
        }

        function start (trackName, trackId) {
                console.log(`Starting: ${trackName}`);

                playTrackById(trackId);
        }

        function end (oldtrackName, newTrackName) {
                console.log(`Stopping: ${oldtrackName}`);
                console.log(`Next Track: ${newTrackName}`);
        }

        function pauseStop (currentTrackName) {
                console.log(`Paused: ${currentTrackName}`);
        }

        function pausePlay (currentTrackName) {
                console.log(`Paused: ${currentTrackName}`);

                reloadDataTrack();

                playTrackById();
        }

        // function reloadDataTrack (amount) {
        //         if(amount <= 0) {
        //                 console.log("Data about amount");
        //         } else {
        //                 console.log("Nochmal refreshing");
        //                 reloadDataTrack(amount - 1);
        //         }
        // }

        // reloadDataTrack(5); //сюди передається параметр з функції, в цьому випадку "amount" для обчислення функції//    

        function pauseStopByTrack(trackName, trackId) {

                let isPause = null;

                return () => {
                        if(isPause == true) {
                                return;
                        }

                        stopTrackById(trackId);
                        console.log(`Track ${trackName} has paused`);
                        isPause = true;
                };
        }

        const pauseStop234 = pauseStopByTrack("Alandria", 10);

        pauseStop234();
        pauseStop234();
        pauseStop234();

        // const runCommand = function(command, errorFn) {
        //         const result = command();
                
        //         if(!result) {
        //                 return errorFn();
        //         }
        // }

        // runCommand(
        //                 // Стрілкова функція
        //         () => {
        //         console.log("Starting command");

        //         return 1-1;
        //         }, 
        //         () => 
        //         console.log("Error")
        
        // );

////////////////////////////////////////////////////////////////////////

const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {

        return (amount, unit = "px") => {
                if(oldAmount === amount && unit === oldUnit){
                console.log("Memo");
                return oldResult;
                }

        oldResult = `${amount * 4}${unit}`;
        oldAmount = amount;
        oldUnit = unit;

        return oldResult;
        };
};

const calcSpace = memoCalcSpace();

console.log(calcSpace(4));
console.log(calcSpace(4));
