function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return "This one is on me!"
  }
  else if(distance > 2500){
    return 'No can do.'
  }
  else{ 
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(destination){
  const city = "NYC"
  let result 
  result = (destination === city) ? "Ok, sounds good." : "No go."
  return result
   // Write your code here!
}

function switchOnCharmFromTip(someTip){
  let goodBye 
  switch(someTip){
    case 'generous':
    goodBye  = "Thank you so much."
    break;
    case 'not as generous':
      goodBye = "Thank you."
      break;
    case 'thank you for everything':
      case 'thanks for everything':
        goodBye = 'Bye.'
      break;
  }
  return goodBye
}
