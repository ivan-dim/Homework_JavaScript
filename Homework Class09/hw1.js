$(document).ready(function() {
    $('#greetBtn').click(function() {
        let name = $('#inputName').val();
        $('#greetH').text('Hey ' + name);
    });
});
