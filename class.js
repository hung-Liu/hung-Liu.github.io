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
    $("#time").text(hours+':'+minutes+':'+seconds)
    $("#date").text(months[month]+' '+day+' '+year)
}, 100);
