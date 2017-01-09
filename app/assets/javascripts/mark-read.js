var $newLinkTitle, $newLinkUrl;

$(document).ready(function(){

  $('#links-list').on('click', 'button.mark-read', function(){

    var $this = $(this);
    var linkId = $this.parents('.link').data('id');
    var readLink = $(this).data("url")

    $.ajax({
      url: '/api/v1/links/' + linkId,
      method: 'PATCH',
      data: {read: true}
    }).then(

    $.ajax( {
      method: 'POST',
      data: {url: readLink},
      url: "http://si-m4-final-service.herokuapp.com/links"
    }))
  })
})
