var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/users/nazmulislamananto/repos', true)

request.onload = function() {
    var data = JSON.parse(this.response);
    // console.log(data);

    var statusHTML = '';
    $.each(data, function (i, status) { 
        var readmeUrl = status.url + '/readme';

        statusHTML += '<a href="#" onclick="showReadme(\''+ status.name + '\',\'' + readmeUrl + '\',\'' + status.html_url + '\')">';
        statusHTML += '<div class="project"><span>' + '<i class="fas fa-code-branch"></i>&emsp;';
        // statusHTML += status.id + ' ';
        // statusHTML += '<a href=' + status.html_url +'>' + status.name + '</a> ';
        // console.log(readmeUrl);
        statusHTML += status.name;
        // console.log(status.url + '/readme');
        // statusHTML += status.html_url + '';
        // statusHTML += status.language;
        statusHTML += '</span></div>';
        statusHTML += '</a>';
    });

    $('div.project-list').append(statusHTML);
}
request.send();

function showReadme(statusName, readmeUrl, statusHtmlUrl) {
    var statusHTML = '';
    var request2 = new XMLHttpRequest()
    request2.open('GET', readmeUrl, true);
    request2.onload = function() {
        $('div#readme-container').css({'display': 'block'});
        $('div#readme-container hr').css({'display': 'block'});
        $('h1#repo-name').html(statusName);
        $('em#github-link a').attr({'href': statusHtmlUrl});
        $('em#github-link a').html(statusHtmlUrl);

        var data = JSON.parse(this.response);
        // console.log(atob(data.content));
        // console.log(mmd(atob(data.content)));

        const converter = new showdown.Converter();
        showdown.setFlavor('github');
        // console.log( converter.makeHtml(atob(data.content)) );
        statusHTML = converter.makeHtml(atob(data.content));

        // statusHTML = mmd(atob(data.content));
        $('div#readme').html(statusHTML);
    }

    request2.send();
    // document.getElementById('readme').style.display = 'none';
    // document.getElementById('readme').innerHTML = statusHTML;
    // $('#readme').html(statusHTML);
}