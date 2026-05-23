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
          <td>${item["NAMA"]}</td>
          <td>${item["JABATAN"]}</td>
          <td>
            <span class="status">
              CUTI
            </span>
          </td>
        </tr>
      `;

    });

  } catch (error) {

    console.log(error);

    cutiBody.innerHTML = `
      <tr>
        <td colspan="3">
          Gagal mengambil data
        </td>
      </tr>
    `;

  }

}

loadData();
