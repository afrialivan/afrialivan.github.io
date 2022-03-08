//no wa admin
$("#noAdmin").val("082347867039");
$(".whatsapp-btn").click(function () {
  $("#whatsapp").toggleClass("toggle");
});
// Onclick Whatsapp Sent!
$("#whatsapp .submit").click(WhatsApp);
$("#whatsapp input, #whatsapp textarea").keypress(function () {
  if (event.which == 13) WhatsApp();
});
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function WhatsApp() {
  var ph = "";
  if ($("#whatsapp .ukuran").val() == "") {
    // Cek ukuran
    ph = $("#whatsapp .ukuran").attr("placeholder");
    alert("Silahkan tulis " + ph);
    $("#whatsapp .ukuran").focus();
    return false;
  } else if ($("#whatsapp .pesan").val() == "") {
    // Cek pesan
    ph = $("#whatsapp .pesan").attr("placeholder");
    alert("Silahkan tulis " + ph);
    $("#whatsapp .pesan").focus();
    return false;
  } else {
    // Check Device (Mobile/Desktop)
    var url_wa = "https://web.whatsapp.com/send";
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      url_wa = "whatsapp://send/";
    }
    // Get Value
    var tujuan = $("#whatsapp .tujuan").val(),
      via_url = location.href,
      ukuran = $("#whatsapp .ukuran").val(),
      pesan = $("#whatsapp .pesan").val();
    $(this).attr("href", url_wa + "?phone=62 " + tujuan + "&text=ukuran: " + ukuran +"%0Apesan: " + pesan + " %0A%0Avia " + via_url);
    var w = 960,
      h = 540,
      left = Number(screen.width / 2 - w / 2),
      tops = Number(screen.height / 2 - h / 2),
      popupWindow = window.open(this.href, "", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=" + w + ", height=" + h + ", top=" + tops + ", left=" + left);
    popupWindow.focus();
    return false;
  }
}