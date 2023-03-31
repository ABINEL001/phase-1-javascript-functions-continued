//Default activity named "activity"
saturdayFun()
function saturdayFun(activity = 'roller-skate'){
    return `This saturday, I want to ${activity}!`;
}

saturdayFun("bathe my dog")

//Default activity is named "act"
const mondayWork = function(act = "go to the office"){
    return `This monday, I will ${act}.`;
}

mondayWork()

mondayWork("work from home")

//Lab 3 "wrapAdjective"
/*const wrapAdjective = function (star = '*'){
    return function(diet = 'special')

//}*/

/*function outer(greeting, msg = "It's a fine day to learn") {
    return function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
  }*/