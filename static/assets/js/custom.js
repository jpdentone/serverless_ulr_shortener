
$('form').submit(function (event) {
  event.preventDefault()
  addMessage('...')
  shortenLink(event.target.action, event.target.url.value)
})

function shortenLink (apiUrl, longUrl) {
  $.ajax(apiUrl, {
    type : 'POST', 
    data: JSON.stringify({url: longUrl})})
    .done(function (responseJSON) {
      var shortUrl = window.location.protocol + '//' + window.location.host + '/' + responseJSON.path
      addMessage(shortUrl)
    })
    .fail(function (data) {
      if (data.status === 400) {
        addMessage(data.responseJSON.message)
      } else {
        addMessage('an unexpected error occurred')
      }
    })
}

function addMessage (text) {
  $('#message').text(text).show()
  $('#initiallyHiddenBtn').show()
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

function showAlert () {
  $().toastmessage('showSuccessToast', 'Shorten URL has been Copied');
}
