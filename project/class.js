$('#title').click(function() {
    window.location.href = 'https://hung-liu.github.io/';
});
$('#about').click(function() {
    window.location.href = 'https://hung-liu.github.io/introduce';
});
$('#project').click(function() {
    window.location.href = 'https://hung-liu.github.io/project';
});

var n = 3;
var id_ = ["scratch-1","unity-1","project-1"]
var type_ = ["scratch","unity","other"]
var name_ = ["sort","tempo","empty"]

// $(document).ready(function() {
//     $('.project-box').on('click', function() {
//         const pId = $(this).find('p').attr('id');
//         console.log(pId);
//         if(pId=='unity-1')window.location.href = 'https://peter-master.github.io/tempo/';
//     });
// });

// $(document).ready(function() {
//     $('#project-list').empty();
//     for (var i = 0; i < n; i++) {
//         var box_html = `
//         <div class="project-box">
//             <p class="project-title" id="${id_[i]}">${name_[i]}</p>
//         </div>
//         `;
//         $('#project-list').append(box_html);
//     }
// });

$('#all').click(function() {
    $('#project-list').empty();
    for (var i = 0; i < n; i++) {
        var box_html = `
        <div class="project-box">
            <p class="project-title" id="${id_[i]}">${name_[i]}</p>
        </div>
        `;
        $('#project-list').append(box_html);
    }
});

$('#scratch').click(function() {
    $('#project-list').empty();
    for (var i = 0; i < n; i++) {
        var box_html = `
        <div class="project-box">
            <p class="project-title" id="${id_[i]}">${name_[i]}</p>
        </div>
        `;
        if(type_[i]=="scratch")$('#project-list').append(box_html);
    }
});
$('#scratch').click(function() {
    $('#project-list').empty();
    for (var i = 0; i < n; i++) {
        var box_html = `
        <div class="project-box">
            <p class="project-title" id="${id_[i]}">${name_[i]}</p>
        </div>
        `;
        if(type_[i]=="scratch")$('#project-list').append(box_html);
    }
});
$('#unity').click(function() {
    $('#project-list').empty();
    for (var i = 0; i < n; i++) {
        var box_html = `
        <div class="project-box">
            <p class="project-title" id="${id_[i]}">${name_[i]}</p>
        </div>
        `;
        if(type_[i]=="unity")$('#project-list').append(box_html);
    }
});

$('#other').click(function() {
    $('#project-list').empty();
    for (var i = 0; i < n; i++) {
        var box_html = `
        <div class="project-box">
            <p class="project-title" id="${id_[i]}">${name_[i]}</p>
        </div>
        `;
        if(type_[i]=="other")$('#project-list').append(box_html);
    }
});


$(document).ready(function() {
    $('#project-list').empty();
    for (var i = 0; i < n; i++) {
        var box_html = `
        <div class="project-box">
            <p class="project-title" id="${id_[i]}">${name_[i]}</p>
        </div>
        `;
        $('#project-list').append(box_html);
    }

    $('#project-list').on('click', '.project-box', function() {
        var ID = $(this).find('.project-title').attr('id');
        // console.log(ID);
        if(ID=="unity-1")window.location.href = "https://peter-master.github.io/tempo/";
        else alert("還沒做好欸QQ")
    });
});

`
<div class = project-box>
<p class = project-title>scratch 1</p>
</div>
<div class = project-box>
<p class = project-title>unity 1</p>
</div>
<div class = project-box>
<p class = project-title>project 2</p>
</div>
<div class = project-box>
<p class = project-title>project 3</p>
</div>
<div class = project-box>
<p class = project-title>project 4</p>
            </div>
            `