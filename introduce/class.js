const buttons = [
    { id: 'atcoder', url: 'https://atcoder.jp/users/hung100' },
    { id: 'codeforce', url: 'https://codeforces.com/profile/hung100' },
    { id: 'tioj', url: 'https://tioj.infor.org/users/hung' },
    { id: 'zerojudge', url: 'https://zerojudge.tw/UserStatistic?id=259488' }
];

buttons.forEach(button => {
    const btn = document.getElementById(button.id);
    btn.addEventListener('click', () => {
        // window.location.href = button.url; 
        window.open(button.url, '_blank');
    });
});

// document.getElementById('title').addEventListener('click', () => {
//     window.location.href = 'https://hung-liu.github.io/';
// });

// document.getElementById('about').addEventListener('click', () => {
//     window.location.href = 'https://hung-liu.github.io/';
// });