var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/users/niananto/repos', true)

request.onload = function() {
    var data = JSON.parse(this.response);
    // console.log(data);

    var statusHTML = '';
    $.each(data, function (i, status) { 
        statusHTML += '<li>';
        statusHTML += status.id + ' ';
        // statusHTML += '<a href=' + status.html_url +'>' + status.name + '</a> ';
        statusHTML += '<a href=# onclick="showReadme(status.url)">' + status.name + '</a> ';
        statusHTML += status.id + ' ';
        // statusHTML += status.html_url + '';
        statusHTML += status.language;
        statusHTML += '</li>';
    });

    $('ul').html(statusHTML);
}
request.send();

function showReadme(url) {
    var statusHTML = '';

    var request2 = new XMLHttpRequest()
    request2.open('GET', url+'/readme', true)
    request2.onload = function() {
        var data = JSON.parse(this.response);
        console.log(atob(data.content));
        statusHTML = atob(data.content);
        $('#readme').html(statusHTML);
    }

    request2.send();
    // document.getElementById('readme').style.display = 'none';
    // document.getElementById('readme').innerHTML = statusHTML;
    // $('#readme').html(statusHTML);
}