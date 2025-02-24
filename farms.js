const farmsData = [
    { name: "Farm-1", owner: "Pavan", location: "Devathapuram", area: "13.5 Acr", syNo: "120", link: "https://meebhoomi.ap.gov.in/" },
    { name: "Farm-2", owner: "Prasanna", location: "JR Palle", area: "3.5 Acr", syNo: "121", link: "https://meebhoomi.ap.gov.in/" }
];

function loadFarms() {
    const tableBody = document.getElementById("farmsTableBody");
    farmsData.forEach(farm => {
        let row = `<tr>
            <td>${farm.name}</td>
            <td>${farm.owner}</td>
            <td>${farm.location}</td>
            <td>${farm.area}</td>
            <td>${farm.syNo}</td>
            <td><a href="${farm.link}" target="_blank">AP Meebhoomi</a></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

document.addEventListener("DOMContentLoaded", loadFarms);
