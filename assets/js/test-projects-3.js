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
        var readmeUrl = status.url + '/readme';
        console.log(readmeUrl);
        statusHTML += '<a href="#" onclick="showReadme(\''+ readmeUrl + '\')">' + status.name + '</a> ';
        // console.log(status.url + '/readme');
        statusHTML += status.id + ' ';
        // statusHTML += status.html_url + '';
        statusHTML += status.language;
        statusHTML += '</li>';
    });

    $('ul').html(statusHTML);
}
request.send();

function showReadme(readmeUrl) {

    var showdown  = require('showdown');
    var converter = new showdown.Converter();

    var statusHTML = '';
    var request2 = new XMLHttpRequest()
    // request2.open('GET', 'https://api.github.com/repos/niananto/four-in-a-row/readme', true)
    request2.open('GET', readmeUrl, true);
    request2.onload = function() {
        var data = JSON.parse(this.response);
        console.log(atob(data.content));
        statusHTML = atob(data.content);
        html = converter.makeHtml(statusHTML);
        $('#readme').html(html);
    }

    request2.send();
    // document.getElementById('readme').style.display = 'none';
    // document.getElementById('readme').innerHTML = statusHTML;
    // $('#readme').html(statusHTML);
}