function ffhcLink() {
    window.location.href = 'https://ffhc.herokuapp.com/';
}

function pizzaTime() {
    var url = window.location.href;
    var data = [];
    data = url.split('/');
    newLink = data[0] + "/pizza";
    window.location.href = newLink;
}