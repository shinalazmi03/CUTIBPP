const SHEET_URL =
"https://opensheet.elk.sh/17xIifukROSx1w2p98ib3EZNV1uKQCZf8dzgInT1FYXI/CUTI";

const bengkelAktif =
document.getElementById("bengkelAktif");

const transportAktif =
document.getElementById("transportAktif");

const semuaCuti =
document.getElementById("semuaCuti");

/* LOAD DATA */

async function loadData(){

  try{

    const response =
    await fetch(SHEET_URL);

    const data =
    await response.json();

    data.forEach(item => {

      const jabatan =
      item["JABATAN"] || "";

      const rowAktif = `
        <tr>
          <td>${item["NAMA"]}</td>
          <td>${jabatan}</td>
          <td>${item["CUTI DARI"]}</td>
          <td>${item["CUTI SAMPAI"]}</td>
        </tr>
      `;

      const rowSemua = `
        <tr>
          <td>${item["NAMA"]}</td>
          <td>${jabatan}</td>
          <td>${item["KETERANGAN"]}</td>
          <td>${item["ALAMAT cUTI"]}</td>
        </tr>
      `;

      /* BENGKEL */

      if(
        jabatan.toLowerCase().includes("mek") ||
        jabatan.toLowerCase().includes("bengkel")
      ){

        bengkelAktif.innerHTML += rowAktif;

      }

      /* TRANSPORT */

      else{

        transportAktif.innerHTML += rowAktif;

      }

      semuaCuti.innerHTML += rowSemua;

    });

  }catch(error){

    console.log(error);

  }

}

loadData();

/* FORM WA */

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
