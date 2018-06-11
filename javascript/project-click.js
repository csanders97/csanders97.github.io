function ffhcLink() {
    window.open('https://ffhc.herokuapp.com/', '_blank');
}

function pizzaTime() {
    var url = window.location.href;
    var data = [];
    data = url.split('/');
    newLink = data[0] + "/pizza";
    window.open(newLink, '_blank');
}