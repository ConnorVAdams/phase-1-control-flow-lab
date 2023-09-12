function scuberGreetingForFeet(distanceInt) {
  if (distanceInt <= 400) {
    return "This one is on me!";
  } else if (distanceInt > 400 && distanceInt <= 2000) {
    return "That will be twenty bucks.";
  } else if (distanceInt > 2000 && distanceInt <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
};

function ternaryCheckCity(cityStr) {
  return cityStr === "NYC" ? "Ok, sounds good." : "No go.";
};

function switchOnCharmFromTip(TipStr) {
  switch (TipStr) {
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye.";
  }
}