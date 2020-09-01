let containerChildren = $('#nav').children()[0, 1, 2, 3];
let a = $(containerChildren).children()[0];
$('a').each(function(){
    $(this).css('color', 'white');
});
let parents = $('#nav');
$('#nav').css('background-color', '#145');
let containerChildren1 = $('#contentContainer').children()[3];
let li = $(containerChildren1).children()[0];
$('li:even').each(function(){
    $(this).css('background-color', '#ccc');
});
$('li:odd').each(function(){
    $(this).css('background-color', '#aaa')
});
$('#myInput').val("Joshua");

