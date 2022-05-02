  $("#commentform").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');
    $('#respond').hide();
	$('#loader').show();

    $.ajax({
           type: "POST",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
               $('#loader').hide();
               $('#respond').show();

               var res = data.split("_");
               if(res[0] == "1"){
               		$('#reply-title').text(res[1]);
               		$('#reply-title').css("color", "#1ad2d2");
               		$('#commentform').hide();
                  var the_url = window.location.href;
                  var url = new URL(url_string);
                  var c = url.searchParams.get("utm_source");
                  if(c == "facebook"){
                      fbq('track', 'CompleteRegistration');
                  }




               }
               else{
               		$('#reply-title').text(res[1]);
               		$('#reply-title').css("color", "#cd2122");
               		$('#commentform').show();
               }





           }
         });


});
  

    $("#newsletterform").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');
    $('#respond').hide();
  $('#loader').show();

    $.ajax({
           type: "POST",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
               $('#loader').hide();
               $('#respond').show();

               var res = data.split("_");
               if(res[0] == "1"){
                  $('#title_newsletter').text(res[1]);
                  $('#newsletterform').hide();
                  var the_url = window.location.href;
                  var url = new URL(url_string);
                  var c = url.searchParams.get("utm_source");
                  if(c == "facebook"){
                      fbq('track', 'CompleteRegistration');
                  }




               }
               else{
                  $('#title_newsletter').text(res[1]);
                  $('#title_newsletter').css("color", "#cd2122");
                  $('#newsletterform').show();
               }





           }
         });


});
  

