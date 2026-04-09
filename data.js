const dataBody = document.getElementById("dataBody");

function loadData() {
  const data = JSON.parse(localStorage.getItem("omprengData")) || [];

  if (data.length === 0) {
    dataBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center;">Belum ada data</td>
      </tr>`;
    return;
  }

  dataBody.innerHTML = "";
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.tanggal}</td>
      <td>${item.armada}</td>
      <td>${item.driver}</td>
      <td><strong>${item.total}</strong></td>
      <td>${item.catatanKurang || "-"}</td>
    `;
    dataBody.appendChild(row);
  });
}

loadData();
