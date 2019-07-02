"use strict";

let YES = "y";
let NO = "n";

function evaluateAnswer(answer, expected, onTrue, onFalse) {
  if (answer == expected) {
    onTrue();
    return 1;
  }
  onFalse();
  return 0;
}

function getAnswer(question) {
  let prefix = prompt(question).toLowerCase()[0];
  if (prefix != "y" && prefix != "n") {
    alert("You must answer yes, or no (y/n)... try again...");
    return getAnswer(question);
  }
  return prefix;
}

function quiz() {

  let points = 0;

  points += evaluateAnswer(getAnswer("Is my name Kevin?"), NO,
    () => alert("Correct! I am NOT named Kevin...."),
    () => alert("Wrong! How dare you call me Kevin!"));

  points += evaluateAnswer(getAnswer("Have I been writing Java code for 10 years?"), NO,
    () => alert("Correct! I've only been writing Java code for 9 or so years. (close enough though, right?)"),
    () => alert("Wrong! I've only been coding for about 8-9 years."));

  points += evaluateAnswer(getAnswer("Do I like the game RuneScape?"), YES,
    () => alert("Correct! I do indeed like playing RuneScape!"),
    () => alert("Wrong! I do like RuneScape..."));

  points += evaluateAnswer(getAnswer("Did I start out programming by making franken-bots?"), YES,
    () => alert("Correct! I did indeed make franken-bots, all of which were pretty terrible too."),
    () => alert("Wrong! I did start out making franken-bots..."));

  points += evaluateAnswer(getAnswer("Do I like web-design?"), NO,
    () => alert("Correct! I am typically not a fan of designing web pages."),
    () => alert("Wrong! I definitely prefer to work on the back end rather than the front end..."));

  alert(`Congratz! You got ${points} out of 5 points, for a score of ${(points / 5) * 100}%. Yay!`);
}

alert("Carefully read the paragraph below, then press \"Take Quiz\" to take the quiz.");
