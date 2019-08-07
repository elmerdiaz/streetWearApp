$("#submit-location").on('submit', function(e){
    e.preventDefault();
    var data = {};
    data.fields = {
      'Name': $(this).find('#Name').val(),
      'Type': $(this).find('#Type').val(),
      'Website': $(this).find('#Website').val(),
      'Brand': $(this).find('#Brand').val(),
      'Price': $(this).find('#Price').val(),
      'Cost': $(this).find('#Cost').val(),
      'Description': $(this).find('#Description').val(),
      'Condition': $(this).find('#Condition').val(),

      'Description': $(this).find('#Description').val(),
      'Price': $(this).find('#Price').val(),
    };
    $.post(`https://api.airtable.com/v0/appHBGb39oC7K8oOR/Table%202?api_key=keylGwWvapRxHapL6`,
      data, function () {
        // On Success
        $("#submit-location").html(`<h2>Thanks for submitting!</h2>`);
      }
    );
  });
