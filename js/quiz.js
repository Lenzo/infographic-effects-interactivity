var $box = $('.box');
var $question = $('.question');
var $left = $('.left-answer');
var $right = $('.right-answer');

var questions = [
    'Do you prefer to work with music on',
    'Do you prefer art over science',
    'Do you prefer cats over dogs',
    ''
];

var s = 0;

$right.on('click', function () {
	s++;
	$question.html(questions.next);
});

$left.on('click', function () {
	$question.html(questions.next);
});

if s >= 3 {
	box.remove($question, $left, $right)
	box.html('<p>You are left brained!<p>');
} else {
	box.remove($question, $left, $right)
	box.html('<p>You are right brained!<p>');
};
