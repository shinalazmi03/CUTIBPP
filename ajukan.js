document
.getElementById("cutiForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  const nama =
  document.getElementById("nama").value;

  const dari =
  document.getElementById("dari").value;

  const sampai =
  document.getElementById("sampai").value;

  const keperluan =
  document.getElementById("keperluan").value;

  const pesan =
`PENGAJUAN CUTI BPP

Nama : ${nama}

Cuti Dari : ${dari}

Cuti Sampai : ${sampai}

Keperluan :
${keperluan}`;

  const url =
`https://api.whatsapp.com/send/?phone=6282288313424&text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");

});
