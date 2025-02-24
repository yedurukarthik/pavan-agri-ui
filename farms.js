const farmsData = JSON.parse(localStorage.getItem("farms")) || [
    { name: "Farm-1", owner: "Pavan", location: "Devathapuram", area: "13.5 Acr", syNo: "120", attachment: "https://meebhoomi.ap.gov.in/" },
    { name: "Farm-2", owner: "Prasanna", location: "JR Palle", area: "3.5 Acr", syNo: "121", attachment: "https://meebhoomi.ap.gov.in/" }
];

const farmsTable = document.getElementById("farmsTableBody");

function renderFarms() {
    farmsTable.innerHTML = "";
    farmsData.forEach((farm, index) => {
        const row = `<tr>
            <td>${farm.name}</td>
            <td>${farm.owner}</td>
            <td>${farm.location}</td>
            <td>${farm.area}</td>
            <td>${farm.syNo}</td>
            <td><a href="${farm.attachment}" target="_blank">AP Meebhoomi</a></td>
            <td><button onclick="deleteFarm(${index})">Delete</button></td>
        </tr>`;
        farmsTable.innerHTML += row;
    });
    localStorage.setItem("farms", JSON.stringify(farmsData));
}

function addFarm() {
    const name = document.getElementById("farmName").value;
    const owner = document.getElementById("ownerName").value;
    const location = document.getElementById("location").value;
    const area = document.getElementById("area").value;
    const syNo = document.getElementById("syNo").value;

    farmsData.push({ name, owner, location, area, syNo, attachment: "https://meebhoomi.ap.gov.in/" });
    renderFarms();
}

function deleteFarm(index) {
    farmsData.splice(index, 1);
    renderFarms();
}

document.getElementById("addFarmBtn").addEventListener("click", addFarm);
document.addEventListener("DOMContentLoaded", renderFarms);
