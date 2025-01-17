var yn = '';

$('#name').on('click', function(){
    console.log('a')
    prompt('我的名字:')
});

function whenclick() {
    yn = prompt('my name is_')
    $('h1').text('my name is ???')
    setTimeout(show, 1000);
}
function show(){
    $('h1').text('my name is ' + yn)
}
