function countBrainType (elementID, buttonValue) {

  var resultDivId = '#' + elementID;

  var trueCount = 0;
  var falseCount = 0;

  if (buttonValue === 'true') {
    trueCount++;
  } else {
    falseCount++;
  }
  if (elementID === 'demo') {
    if (trueCount === falseCount) {
      $(resultDivId).children('p').text('You are ambidextrous brained');
    } else if (trueCount > falseCount) {
      $(resultDivId).children('p').text('You are left brained!');
    } else {
      $(resultDivId).children('p').text('You are right brained!');
    }
  }
}

$(document).ready(function () {

  var nextQuestionDivId;

  $('input').on('click', function () {
    $(this).closest('div').hide();
    nextQuestionDivId = '#' + ($(this).closest('div')).next('div')
    .attr('id');
    $(nextQuestionDivId).removeClass('hide-div');
    countBrainType(($(this).closest('div')).next('div')
      .attr('id'), $(this).attr('value'));
  });
});
