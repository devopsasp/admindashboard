var xbarValues = ["Mumbai", "Chennai", "Banglore", "Kolkatta", "Luckhnow"];
var ybarValues = [55, 49, 53, 44, 35];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("mybarChart", {
  type: "bar",
  data: {
    labels: xbarValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: ybarValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "City Wise Sales",
    },
  },
});
