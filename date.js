var months = [ "January", "February", "March", "April", "May", "June", 
               "July", "August", "September", "October", "November", "December" ];

var d = new Date();

var month = d.getMonth();
var day = d.getDate();

var output = months[month] + ' ' +
    (day<10 ? '0' : '') + day + ' ' + d.getFullYear();

 $('.date p').html(output);