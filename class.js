const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
setInterval(() => {
    const now = new Date();
    const year = now.getFullYear(); 
    const month = now.getMonth(); // 1 月是 1，所以需要加 1
    const day = now.getDate();
    const weekday = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    $("#time").text(hours+':'+(minutes<10?'0'+minutes:minutes)+':'+(seconds<10?'0'+seconds:seconds))
    $("#date").text(months[month]+' '+day+' '+year)
}, 100);


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