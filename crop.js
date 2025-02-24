const cropsData = [
    { name: "Lime", density: 100, plants: 350, variety: "Sweet", planted: "2022-03-11", days: 560 }
];

function loadCrops() {
    const tableBody = document.getElementById("cropsTableBody");
    cropsData.forEach(crop => {
        let row = `<tr>
            <td>${crop.name}</td>
            <td>${crop.density}</td>
            <td>${crop.plants}</td>
            <td>${crop.variety}</td>
            <td>${crop.planted}</td>
            <td>${crop.days}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

document.addEventListener("DOMContentLoaded", loadCrops);
