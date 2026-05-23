const BENGKEL_URL =
"https://opensheet.elk.sh/17xIifukROSx1w2p98ib3EZNV1uKQCZf8dzgInT1FYXI/abengkel";

const TRANSPORT_URL =
"https://opensheet.elk.sh/17xIifukROSx1w2p98ib3EZNV1uKQCZf8dzgInT1FYXI/atransport";

const bengkelBody =
document.getElementById("bengkelBody");

const transportBody =
document.getElementById("transportBody");

/* LOAD BENGKEL */

async function loadBengkel(){

  const response =
  await fetch(BENGKEL_URL);

  const data =
  await response.json();

  bengkelBody.innerHTML = "";

  data.forEach(item => {

    bengkelBody.innerHTML += `
      <tr>

        <td>${item["NO"] || "-"}</td>

        <td>${item["NAMA"] || "-"}</td>

        <td>${item["NO KARYAWAN"] || "-"}</td>

        <td>${item["CUTI DARI"] || "-"}</td>

        <td>${item["CUTI SAMPAI"] || "-"}</td>

        <td>${item["KETERANGAN"] || "-"}</td>

        <td>${item["ALAMAT CUTI"] || "-"}</td>

      </tr>
    `;

  });

}

/* LOAD TRANSPORT */

async function loadTransport(){

  const response =
  await fetch(TRANSPORT_URL);

  const data =
  await response.json();

  transportBody.innerHTML = "";

  data.forEach(item => {

    transportBody.innerHTML += `
      <tr>

        <td>${item["NO"] || "-"}</td>

        <td>${item["NAMA"] || "-"}</td>

        <td>${item["NO KARYAWAN"] || "-"}</td>

        <td>${item["CUTI DARI"] || "-"}</td>

        <td>${item["CUTI SAMPAI"] || "-"}</td>

        <td>${item["KETERANGAN"] || "-"}</td>

        <td>${item["ALAMAT CUTI"] || "-"}</td>

      </tr>
    `;

  });

}

loadBengkel();
loadTransport();
