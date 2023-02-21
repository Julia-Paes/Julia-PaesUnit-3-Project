let optionZeroButton =           document.querySelector(".option-zero");
let optionZeroScreen =           document.querySelector(".option-zero-screen");
let optionOneButton =           document.querySelector(".option-one");
console.log(optionOneButton);
let optionOneScreen=               document.querySelector(".option-one-screen");
console.log(optionOneScreen);
let optionTwoButton =           document.querySelector(".option-two");
let optionTwoScreen =       document.querySelector(".option-two-screen");
let optionThreeButton =           document.querySelector(".option-three");
console.log(optionOneButton);
let optionThreeScreen=               document.querySelector(".option-three-screen");
console.log(optionOneScreen);
let optionFourButton =           document.querySelector(".option-four");
let optionFourScreen =       document.querySelector(".option-four-screen");
let optionFiveScreen =       document.querySelector(".option-five-screen");
let optionFiveButton =       document.querySelector(".option-five");
let optionSixScreen =       document.querySelector(".option-six-screen");
let optionSixButton =       document.querySelector(".option-six");
let optionSevenScreen =       document.querySelector(".option-seven-screen");
let optionSevenButton =       document.querySelector(".option-seven");
let optionEightScreen =       document.querySelector(".option-eight-screen");
let optionEightButton =       document.querySelector(".option-eight");
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
optionZeroButton.onclick=function () {
optionZeroScreen.style.display="block";
    optionOneButton.style.display="none";
    optionThreeButton.style.display="block";
    optionFourButton.style.display="none";
    optionFiveButton.style.display="block";
    optionZeroButton.style.display="none";
    optionOneScreen.style.display="none";
    optionThreeScreen.style.display="none";
};
optionOneButton.onclick=function(){
   optionOneScreen.style.display="block";
    optionTwoButton.style.display="none";
    optionThreeButton.style.display= "block";
    optionOneButton.style.display="none";
    optionFourButton.style.display="block";
};
optionTwoButton.onclick=function(){
    optionTwoScreen.style.display="block";
   optionFourButton.style.display="block";
    optionFourScreen.style.display="block";
};
optionThreeButton.onclick=function(){
optionThreeScreen.style.display="block";
    optionFourButton.style.display="block";
     optionThreeButton.style.display="none";
    optionZeroButton.style.display= "block";
   
};
optionFourButton.onclick=function(){
optionFiveScreen.style.display="block";
    optionTwoScreen.style.display="block";
    optionFourScreen.style.display="block";
    optionOneScreen.style.display="none";
   optionThreeScreen.style.display="none";
    optionZeroButton.style.display="block";
    optionFourButton.style.display="none";
};

optionFiveButton.onclick=function(){
    optionSixScreen.style.display= "block";
    optionSixButton.style.display="block";
    optionOneScreen.style.display= "none";
     optionThreeScreen.style.display= "none";
     optionFiveButton.style.display="none";
    optionZeroScreen.style.display= "none";
};

optionSixButton.onclick=function(){
    optionTwoScreen.style.display= "none";
    optionFiveScreen.style.display="none";
    optionTwoButton.style.display="none";
    optionFiveButton.style.display="none";
     optionSixButton.style.display="none";
     optionFourScreen.style.display="none";
     optionZeroScreen.style.display="none";
     optionSixScreen.style.display="none";
     optionSevenScreen.style.display="block";
     optionEightScreen.style.display="block";
    
};

