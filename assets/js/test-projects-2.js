var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/users/niananto/repos', true)

request.onload = function() {
    var data = JSON.parse(this.response);
    // console.log(data);

    var statusHTML = '';
    $.each(data, function (i, status) { 
        var readmeUrl = status.url + '/readme';

        statusHTML += '<a href="#" onclick="showReadme(\''+ status.name + '\',\'' + readmeUrl + '\')">';
        statusHTML += '<div class="project">' + '<i class="fas fa-code-branch"></i>&emsp;';
        // statusHTML += status.id + ' ';
        // statusHTML += '<a href=' + status.html_url +'>' + status.name + '</a> ';
        // console.log(readmeUrl);
        statusHTML += status.name;
        // console.log(status.url + '/readme');
        // statusHTML += status.html_url + '';
        // statusHTML += status.language;
        statusHTML += '</div>';
        statusHTML += '</a>';
    });

    $('div.project-list').html(statusHTML);
}
request.send();

function showReadme(statusName, readmeUrl) {
    var statusHTML = '';
    var request2 = new XMLHttpRequest()
    // request2.open('GET', 'https://api.github.com/repos/niananto/four-in-a-row/readme', true)
    request2.open('GET', readmeUrl, true);
    request2.onload = function() {
        $('div#readme-container').css({'display': 'block'});
        $('div#readme-container hr').css({'display': 'block'});
        $('h1#repo-name').html(statusName);

        var data = JSON.parse(this.response);
        // console.log(atob(data.content));
        // console.log(mmd(atob(data.content)));
        statusHTML = mmd(atob(data.content));
        $('div#readme').html(statusHTML);
    }

    request2.send();
    // document.getElementById('readme').style.display = 'none';
    // document.getElementById('readme').innerHTML = statusHTML;
    // $('#readme').html(statusHTML);
}