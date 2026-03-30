// Bar chart
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["2017","2018","2019","2020","2021"],
    datasets: [{
      label: "Projects",
      data: [30, 50, 40, 60, 80],
      backgroundColor: "#6a5cff"
    }]
  }
});

// Line chart
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    datasets: [{
      label: "Revenue",
      data: [10, 30, 20, 40, 35, 50],
      borderColor: "#6a5cff",
      fill: false
    }]
  }
});

// Pie chart
new Chart(document.getElementById("pieChart"), {
  type: "doughnut",
  data: {
    labels: ["Completed","Remaining"],
    datasets: [{
      data: [85, 15],
      backgroundColor: ["#6a5cff", "#eee"]
    }]
  }
});