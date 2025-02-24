document.addEventListener("DOMContentLoaded", loadCrops);

function loadCrops() {
    const tableBody = document.getElementById("cropsTableBody");
    const cropsData = JSON.parse(localStorage.getItem("crops")) || [];

    tableBody.innerHTML = ""; // Clear previous entries
    cropsData.forEach((crop, index) => {
        let row = `<tr>
            <td>${crop.name}</td>
            <td>${crop.density}</td>
            <td>${crop.plants}</td>
            <td>${crop.variety}</td>
            <td>${crop.planted}</td>
            <td>${crop.days}</td>
            <td><button class="button" onclick="deleteCrop(${index})">Delete</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function addCrop() {
    const name = document.getElementById("cropName").value;
    const density = document.getElementById("density").value;
    const plants = document.getElementById("plants").value;
    const variety = document.getElementById("variety").value;
    const planted = document.getElementById("planted").value;
    const days = Math.floor((new Date() - new Date(planted)) / (1000 * 60 * 60 * 24));

    if (name && density && plants && variety && planted) {
        let cropsData = JSON.parse(localStorage.getItem("crops")) || [];
        cropsData.push({ name, density, plants, variety, planted, days });
        localStorage.setItem("crops", JSON.stringify(cropsData));
        loadCrops(); // Refresh table
    } else {
        alert("Please fill all fields!");
    }
}

function deleteCrop(index) {
    let cropsData = JSON.parse(localStorage.getItem("crops")) || [];
    cropsData.splice(index, 1);
    localStorage.setItem("crops", JSON.stringify(cropsData));
    loadCrops(); // Refresh table
}

