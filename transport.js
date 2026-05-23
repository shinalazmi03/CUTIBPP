const SHEET_URL =
"https://opensheet.elk.sh/17xIifukROSx1w2p98ib3EZNV1uKQCZf8dzgInT1FYXI/CUTI";

const transportAktif =
document.getElementById("transportAktif");

async function loadData(){

  const response =
  await fetch(SHEET_URL);

  const data =
  await response.json();

  data.forEach(item => {

    const jabatan =
    item["JABATAN"] || "";

    if(
      !jabatan.toLowerCase().includes("mek") &&
      !jabatan.toLowerCase().includes("bengkel")
    ){

      transportAktif.innerHTML += `
        <tr>
          <td>${item["NAMA"]}</td>
          <td>${item["JABATAN"]}</td>
          <td>${item["CUTI DARI"]}</td>
          <td>${item["CUTI SAMPAI"]}</td>
        </tr>
      `;

    }

  });

}

loadData();
