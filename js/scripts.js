$(document).ready(function() {
  $("#wordPlay").submit(function(event) {
    event.preventDefault();

    const inputField = $("#sentence").val();
    const splitSentence = inputField.split(' ');
    let restructuredSentence = [];

    splitSentence.forEach(function (word) {
      if (word.length >= 3) restructuredSentence.push(word);
    });
    const finalSentence = restructuredSentence.reverse().join(" ");

    $("#results").html(`Your reversed sentence is ${finalSentence}.`);

    $("#results").show();
  })
})