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

function show(type){
    $('#project-list').empty();
    for (var i = 0; i < n; i++) {
        var box_html = `
        <div class="project-box">
            <p class="project-title" id="${id_[i]}" name = "${name_[i]}">${name_[i]}</p>
        </div>
        `;
        if(type=='all'||type==type_[i])$('#project-list').append(box_html);
    }
}

var n,id_,type_,name_;

fetch('all_project.json').then(response => {return response.json();}).then(data => {
    n = data["id_"].length
    id_ = data["id_"]
    type_ = data["type_"]
    name_ = data["name_"]
    console.log(data);
    console.log('loaded!');
    show('all')
});

$('#all').click(function() {show('all')});
$('#scratch').click(function() {show('scratch')});
$('#unity').click(function() {show('unity')});
$('#other').click(function() {show('other')});


$(document).ready(function() {
    $('#project-list').on('click', '.project-box', function() {
        var ID = $(this).find('.project-title').attr('id');
        var project_name = $(this).find('.project-title').attr('name');
        // console.log(ID);
        console.log(project_name)
        window.location.href = "https://hung-liu.github.io/project/showproject?project="+project_name;
    });
});

