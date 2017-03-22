$(document).ready(function() {

    ajaxCall('hotel');
    ajaxCall('restaurant');
    ajaxCall('activity');

});

function ajaxCall(choice) {
    $.ajax({
            method: 'GET',
            url: '/api/' + choice,
        })
        .then(function(responseData) {
            console.log(responseData)
            responseData.forEach(function(choice) {
                var option = $('<option></option>').text(choice.name).val(choice.id).attr('data-type', choice.type);
                $('#' + choice.type + '-choices').append(option);
            })
        })
        .catch(function(errorObj) {
            throw errorObj;
        });
}