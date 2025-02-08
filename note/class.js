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
function show(article){
    $('#project_name').text(article[0]);
    $('#description').text(article[2]);
    $('#date').text(article[1]);
}

function add_note(title, date){
    // console.log(title);
    var pushHTML = `
    <div class = box>
    <h2 class="note_txt">
    <span class="note_title">${title}</span> >
    <span class="note_date">${date}</span>
    </h2>
    </div>
    `;
    $("#push_note").append(pushHTML);
}
var mxpage;
function cntpage(){
    // console.log(page);
    var cnt = 0,show_max = 10,n = Object.keys(article).length;
    mxpage = Math.floor(n/show_max);
    if(n%show_max)mxpage++;
    console.log(mxpage)
    console.log("("+(show_max*page).toString()+","+(show_max*(page+1)).toString()+"]");
    for (let key in article) {
        cnt++;
        if(show_max*page<cnt&&cnt<=show_max*(page+1))
        add_note(article[key][0], article[key][1]);
    }

}
$('#btn_0').click(function() {
    window.location.href = 'https://hung-liu.github.io/note?page=0';
});
$('#btn_back').click(function() {
    if(page>0)window.location.href = 'https://hung-liu.github.io/note?page='+(Number(page)-1).toString();
});
$('#btn_front').click(function() {
    if(page<(mxpage-1))window.location.href = 'https://hung-liu.github.io/note?page='+(Number(page)+1).toString();
});
$('#btn_n').click(function() {
    window.location.href = 'https://hung-liu.github.io/note?page='+(mxpage-1).toString();
});
function err(re){
    $('#project_name').text("歐不!");
    if(re=='no note')$('#description').text("你好像走錯地方囉~");
    if(re=='not find')$('#description').text("好像沒有這個文章");
    $('#date').hide();
}

var article,title,txt;

const params = new URLSearchParams(window.location.search);
const note = params.get('note');
var page = params.get('page');
if(!page) page = 0;
page = Number(page);
console.log("ID: "+note)

fetch('./notes/article.json').then(response => {
    if (!response.ok) {
        err('not find');
        throw new Error('File not found or server error');
    }
    return response.json();
    }).then(data => {
        if (!note) {
            console.log("首頁")
            $('#project_name').text("筆記");
            article = data;
            cntpage(article)
        } else {
            //載入
            article = data[note];
            show(article);
            console.log("loaded");
        }
    }).catch(error => {
        err('not find');
    });
