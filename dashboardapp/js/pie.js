var xpieValues = ["North", "South", "East", "West", "Center"];
var ypieValues = [55, 49, 44, 24, 15];
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

new Chart("mypieChart", {
  type: "doughnut",
  data: {
    labels: xpieValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: ypieValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Zone wise contribution",
    },
  },
});
