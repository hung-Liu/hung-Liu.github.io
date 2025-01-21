$('#title').click(function() {
    window.location.href = 'https://hung-liu.github.io/';
});
$('#about').click(function() {
    window.location.href = 'https://hung-liu.github.io/introduce';
});
$('#project').click(function() {
    window.location.href = 'https://hung-liu.github.io/project';
});

function show(){
    // console.log($('#project_name').text())
    $('#game_area').empty();
    $('#game_area').append(game);
    $('#project_name').text(name_);
    $('#description').text(description);
    $('#date').text(date);
    $('#author').text(author);
    $('#date').show();
}

function err(re){
    $('#project_name').text("歐不!");
    if(re=='no note')$('#description').text("你好像走錯地方囉~");
    if(re=='not find')$('#description').text("好像沒有這個文章");
    $('#date').hide();
}

var article,title,txt;

const params = new URLSearchParams(window.location.search);
const note = params.get('note');
console.log(note)

if (!note) {
    err("no note");
} else {
    fetch('./notes/article.json')
        .then(response => {
            if (!response.ok) {
                err('not find');
                throw new Error('File not found or server error'); // 拋出錯誤以中止流程
            }
            return response.json();
        })
        .then(data => {
            article = data[note];
            show();
        })
        .catch(error => {
            console.log('a')
            // console.error('Error:', error);
            err('not find');
        });
}
