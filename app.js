const BASE_API_URL = "http://numbersapi.com";

//1
let favNumber = 2;
$.getJSON(`${BASE_API_URL}/${favNumber}?json`).then(data => {
    console.log(data);
});

//2
let favNumbers = [42, 1, 5, 19];
$.getJSON(`${BASE_API_URL}/${favNumbers}?json`).then(data => {
    console.log(data);
});

//3
let num = 3;
while (num >= 0) {
    $.getJSON(`${BASE_API_URL}/${favNumber}?json`).then(data => {
        $("body").append(`<p>${data.text}</p>`);
    })
    num--;
}