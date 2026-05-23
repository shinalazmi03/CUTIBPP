const SHEET_URL =
"https://opensheet.elk.sh/17xIifukROSx1w2p98ib3EZNV1uKQCZf8dzgInT1FYXI/CUTI";

const cutiBody = document.getElementById("cutiBody");

async function loadData() {

  try {

    const response = await fetch(SHEET_URL);
    const data = await response.json();

    cutiBody.innerHTML = "";

    data.forEach(item => {

      cutiBody.innerHTML += `
        <tr>
          <td>${item["NO"]}</td>
          <td>${item["NAMA"]}</td>
          <td>${item["NO KARYAWAN"]}</td>
          <td>${item["JABATAN"]}</td>
          <td>${item["CUTI DARI"]}</td>
          <td>${item["CUTI SAMPAI"]}</td>
          <td>${item["KETERANGAN"]}</td>
          <td>${item["ALAMAT cUTI"]}</td>
          <td>${item["DI BUAT"]}</td>
          <td>${item["DI PAKAI"]}</td>
        </tr>
      `;

    });

  } catch (error) {

    console.log(error);

    cutiBody.innerHTML = `
      <tr>
        <td colspan="10">
          Gagal mengambil data spreadsheet
        </td>
      </tr>
    `;

  }

}

loadData();
