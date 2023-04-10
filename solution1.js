function () {

var names = ["abir", "Jamila", "amine", "Jouhayna", "salma", "salim", "jalal", "loubna", "sofia", "salima"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

}
