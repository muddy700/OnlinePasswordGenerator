// < !--------------------------------------------This App Develeped By Muddy(Optimist#700)------------------------------------------------------------->
// < !------------------------------------------------------All Rights Reserved--------------------------------------------------------------------------->

//JavaScript Codes For PG App

//Global Declarations
var main = document.getElementById("main-Area");
var output = document.getElementById("output-Area");
var home = document.getElementById("home-Area");
var getApp = document.getElementById("linkDiv");
var firstKey = document.getElementById("first-Key");
var secondKey = document.getElementById("second-Key");
var numbers = document.getElementById("numbers");
var characters = document.getElementById("characters");
var pass1 = document.getElementById("password1");
var pass2 = document.getElementById("password2");
var pass3 = document.getElementById("password3");
var pass4 = document.getElementById("password4");
var pass5 = document.getElementById("password5");
var defaultSelector = document.getElementById("defaultValues");
var inputsToHide = document.getElementById("hideThem");
var part1 , part2 , part3 , part4 , part5 , part6 , part7 , part8 , part9;
var nextDiv ;
var defaultStatus = '';

// firstKey.value = '';
// secondKey.value = '';
// numbers.value = '';
// characters.value = '';

var key1 = document.getElementById("error1");
var key2 = document.getElementById("error2");
var key3 = document.getElementById("error3");
var key4 = document.getElementById("error4");


 function error1Clear(){
     key1.innerHTML = "";
 }

function error2Clear() {
    key2.innerHTML = "";
}

function error3Clear() {
    key3.innerHTML = "";
}

function error4Clear() {
    key4.innerHTML = "";
}

// function clearValues(){
//     document.myForm.key1.value = '';
//     document.myForm.key2.value = '';
//     document.myForm.key3.value = '';
//     document.myForm.key4.value = '';
// }

// nextDiv = '';

function hideOutput(){

    output.hidden = true;
    main.hidden = true;
    getApp.hidden = true;
    home.hidden = false ;
    nextDiv = 'in';

}

function divSwitch(){

    if (nextDiv === 'out') {

        main.hidden = true;
        getApp.hidden = true;
        home.hidden = true;
        output.hidden = false;
        nextDiv = 'setups';
        
    } 
    else if (nextDiv === 'in') {

        output.hidden = true;
        getApp.hidden = true;
        home.hidden = true;
        main.hidden = false;
        document.myForm.key1.focus();
        nextDiv = 'out';
        
    }
    else if (nextDiv === 'home') {

        output.hidden = true;
        main.hidden = true;
        home.hidden = false;
        nextDiv = 'in';

    }
    else if(nextDiv === 'setups'){
    getApp.hidden = false;
    output.hidden = true;
    main.hidden = true;
    getApp.hidden = false;
    home.hidden = true;
    nextDiv = 'home';
    }
}

// function appCaller(){
//     nextDiv = 'setups';
// }

function key1Validator(){
    if (!(/^[a-zA-Z]*$/.test(firstKey.value))) {

        // document.getElementById("error1").innerHTML = " Enter A Valid Key";
        nextDiv = 'in';
        document.myForm.key1.focus();
        key1.innerHTML = "Enter A Valid key      ";

    }    else if (firstKey.value.length < 4) {

        document.myForm.key1.focus();
        key1.innerHTML = "Enter Atleast Four Characters";
        nextDiv = 'in';
    }
    else
    {
        key1.innerHTML = '';
    }
}

function key2Validator() {
    if (!(/^[a-zA-Z]*$/.test(secondKey.value))) {

        // document.getElementById("error1").innerHTML = " Enter A Valid Key";
        nextDiv = 'in';
        document.myForm.key2.focus();
        key2.innerHTML = "Enter A Valid key      ";

    }    else if (secondKey.value.length < 4) {

        document.myForm.key2.focus();
        key2.innerHTML = "Enter Atleast Four Characters";
        nextDiv = 'in';
    }
    else {
        key2.innerHTML = '';
    }
}

function numValidator(){
    if (!(/^[0-9]*$/.test(numbers.value))) {

        // document.getElementById("error1").innerHTML = " Enter A Valid Key";
        nextDiv = 'in';
        document.myForm.key3.focus();
        key3.innerHTML = "Enter A Valid Number     ";

    }   
    else if (numbers.value.length < 4) {

        document.myForm.key3.focus();
        key3.innerHTML = "Enter Atleast Four Digits";
        nextDiv = 'in';
    }

    // else if (!Number(numbers.value)) {

    //     // document.getElementById("error1").innerHTML = " Enter A Valid Key";
    //     nextDiv = 'in';
    //     document.myForm.key3.focus();
    //     key3.innerHTML = "Enter A Valid Number     ";

    // }
    else {
        key3.innerHTML = '';
    }
}

function charValidator(){
    if (!(/^[@!~#^()_$%&*?.,':?/;]*$/.test(characters.value))) {

        // document.getElementById("error1").innerHTML = " Enter A Valid Key";
        nextDiv = 'in';
        document.myForm.key4.focus();
        key4.innerHTML = "Enter Special Characters     ";

    }
    else if (characters.value.length < 4) {

        document.myForm.key4.focus();
        key4.innerHTML = "Enter Atleast Four Characters";
        nextDiv = 'in';
    }
    else {
        key4.innerHTML = '';
    }

}

function keySetter(){


            //For First Key
            if (firstKey.value === '' ) {

                // alert( " Fill All The Fields");
                nextDiv = 'in';
                document.myForm.key1.focus();
                key1.innerHTML = "This Field Must Be Filled";
            }

            else if (firstKey.value.length < 4 ) {

                document.myForm.key1.focus();
                key1.innerHTML = "Enter Atleast Four Characters";
                nextDiv = 'in';
            }

            else if (!(/^[a-zA-Z]*$/.test(firstKey.value))) {

                // document.getElementById("error1").innerHTML = " Enter A Valid Key";
                nextDiv = 'in';
                document.myForm.key1.focus();
                key1.innerHTML = "Enter A Valid key      ";

            }


            //For Second Key
            else if (secondKey.value === '') {

                // alert( " Fill All The Fields");
                nextDiv = 'in';
                document.myForm.key2.focus();
                key2.innerHTML = "This Field Must Be Filled";
            }

            else if (secondKey.value.length < 4) {

                document.myForm.key2.focus();
                key2.innerHTML = "Enter Atleast Four Characters";
                nextDiv = 'in';
            }

            else if (!(/^[a-zA-Z]*$/.test(secondKey.value))) {

                // document.getElementById("error1").innerHTML = " Enter A Valid Key";
                nextDiv = 'in';
                document.myForm.key2.focus();
                key2.innerHTML = "Enter A Valid key      ";

            }


            else if(defaultStatus === '1'){
                firstKey = firstKey.value;
                secondKey = secondKey.value;

                part1 = Math.floor(Math.random() * 10) + 1;
                part2 = Math.floor(Math.random() * 20) + 10;
                part3 = Math.floor(Math.random() * 30) + 20;
                part4 = firstKey.charAt(0).toUpperCase();
                part5 = firstKey.substring(1).toLowerCase();
                part6 = secondKey.charAt(0).toUpperCase();
                part7 = secondKey.substring(1).toLowerCase();
                // characters = ! @ # $ % & * .     
                //.go   .tz   .net   .com   .co   .pass           

                pass1.innerHTML = part1 + part2 + part3 + '@' + part6 + part7 + '.com';

                pass2.innerHTML = part4 + part5 + '#' + part3 + '.' ;

                pass3.innerHTML = part6 + part7 + '$' + part1 + part2 + '.tz';

                pass4.innerHTML = '%' + part4 + part5 + part3 + '.net';

                pass5.innerHTML = part6 + part7 + '@' + part2 + '.tz';

                nextDiv = 'out';
            }

            //For Third Key
            else if (numbers.value === '') {

                // alert( " Fill All The Fields");
                nextDiv = 'in';
                document.myForm.key3.focus();
                key3.innerHTML = "This Field Must Be Filled";
            }

            else if (numbers.value.length < 4) {

                document.myForm.key3.focus();
                key3.innerHTML = "Enter Atleast Four Characters";
                nextDiv = 'in';
            }

            // else if (!Number(numbers.value)) {

            //     // document.getElementById("error1").innerHTML = " Enter A Valid Key";
            //     nextDiv = 'in';
            //     document.myForm.key3.focus();
            //     key3.innerHTML = "Enter A Valid Number     ";

            // }
            
            else if (!(/^[0-9]*$/.test(numbers.value))){

                // document.getElementById("error1").innerHTML = " Enter A Valid Key";
                nextDiv = 'in';
                document.myForm.key3.focus();
                key3.innerHTML = "Enter A Valid Number     ";

            }

     

            //For Fourth Key
            else if (characters.value === '') {

                // alert( " Fill All The Fields");
                nextDiv = 'in';
                document.myForm.key4.focus();
                key4.innerHTML = "This Field Must Be Filled";
            }

            else if (characters.value.length < 4) {

                document.myForm.key4.focus();
                key4.innerHTML = "Enter Atleast Four Characters";
                nextDiv = 'in';
            }

            else if (!(/^[@!~#^()_$%&*?.,':?/;]*$/.test(characters.value))) {

                // document.getElementById("error1").innerHTML = " Enter A Valid Key";
                nextDiv = 'in';
                document.myForm.key4.focus();
                key4.innerHTML = "Enter Special Characters     ";

            }

            
            else {

            firstKey = firstKey.value;
            secondKey = secondKey.value;
            numbers = numbers.value;
            characters = characters.value;

            part1 = secondKey.charAt(secondKey.length - 2);
            part2 = firstKey.charAt(1);
            part9 = firstKey.charAt(0);
            part3 = firstKey.charAt(firstKey.length-2);
            part4 = secondKey.charAt(1);
            part5 = numbers.charAt(0) ;
            part6 = numbers.charAt(numbers.length-2);
            part7 = characters.charAt(1) ;
            part8 = characters.charAt(characters.length-2);

            pass1.innerHTML = part1.toUpperCase() + part3 + part2 + part4 + part9.toUpperCase() + part6 + part7 + part5 ;

            pass2.innerHTML = part5 + part4.toUpperCase() + part9 + part2 + part3.toUpperCase() + part1 + part6 + part8  ;

            pass3.innerHTML = part8 + part1 + part3 + part2 + part9 + part5 + part4.toUpperCase() + part3.toUpperCase() ;

            pass4.innerHTML = part1 + part3 + part4 + part6 + part7 + part3.toUpperCase() + part9 + part2 ;

            pass5.innerHTML = part9.toUpperCase() + part1 + part2 + part5 + part4.toUpperCase() + part3 + part9 + part8;

            // clearValues();
            nextDiv = 'out' ;

            }

}

function hideOrShow(){
    if(defaultSelector.checked === true){
        inputsToHide.hidden = true;
        defaultStatus = '1';
    }
    else{
        inputsToHide.hidden = false;
        defaultStatus = '2';
    }
}

// < !--------------------------------------------This App Develeped By Muddy(Optimist#700)------------------------------------------------------------->
// < !------------------------------------------------------All Rights Reserved--------------------------------------------------------------------------->
