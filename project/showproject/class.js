$('#title').click(function() {
    window.location.href = 'https://hung-liu.github.io/';
});
$('#about').click(function() {
    window.location.href = 'https://hung-liu.github.io/introduce';
});
$('#project').click(function() {
    window.location.href = 'https://hung-liu.github.io/project';
});
$('#note').click(function() {
    window.location.href = 'https://hung-liu.github.io/note';
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
    if(re=='no file')$('#description').text("你好像走錯地方囉~");
    if(re=='not find')$('#description').text("好像沒有這個作品 或是我還沒做好欸QQ");
    $('#date').hide();
}

var name_, description,author,date,game;

const params = new URLSearchParams(window.location.search);
const file = params.get('project');
console.log(file)

if (!file) {
    err("no file");
} else {
    fetch('./projects/' + file + '.json')
        .then(response => {
            if (!response.ok) {
                err('not find');
                throw new Error('File not found or server error'); // 拋出錯誤以中止流程
            }
            return response.json();
        })
        .then(data => {
            name_ = data["name"];
            description = data["description"];
            author = data["author"];
            date = data["date"];
            game = data["game"];
            show();
        })
        .catch(error => {
            // console.error('Error:', error);
            err('not find');
        });
}
