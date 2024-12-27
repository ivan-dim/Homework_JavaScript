$(document).ready(function() {
    let goodCol = ['blue', 'pink', 'green', 'yellow', 'purple', 'red', 'orange', 'black', 'white', 'gray', 'brown'];

    $('#generateBtn').click(function() {
        let text = $('#headerText').val();
        let color = $('#headerColor').val();

        let isCorr = false;
        for (let i = 0; i < goodCol.length; i++) {
            if (goodCol[i] === color) {
                isCorr = true;
                break;
            }
        }

        if (isCorr) {
            $('#headers').append('<h1 style="color:' + color + ';">' + text + '</h1>');
        } else {
            $('#msg').text('Enter color');
        }
    });
});
