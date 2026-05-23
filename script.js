const SHEET_URL = "https://opensheet.elk.sh/17xIifukROSx1w2p98ib3EZNV1uKQCZf8dzgInT1FYXI/CUTI";

const cutiBody = document.getElementById("cutiBody");

async function loadData() {

  try {

    const response = await fetch(SHEET_URL);
    const data = await response.json();

    const cutiAktif = data.filter(item => 
      item.status?.toUpperCase() === "CUTI"
    );

    cutiBody.innerHTML = cutiAktif.map(item => `
      <tr>
        <td>${item.nama}</td>
        <td>${item.divisi}</td>
        <td>
          <span class="status">
            ${item.status}
          </span>
        </td>
      </tr>
    `).join('');

  } catch (error) {

    cutiBody.innerHTML = `
      <tr>
        <td colspan="3">
          Gagal mengambil data spreadsheet
        </td>
      </tr>
    `;

    console.log(error);

  }

}

loadData();