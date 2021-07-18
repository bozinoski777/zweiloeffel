  // === include 'setup' then 'config' above ===
  const proteinChart = () => {
  let totalProtein = 0;
  var DATA_COUNT = 1;
  var NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

  var data = {
    // labels: ['Red', 'Orange'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [0, 100],
        backgroundColor: Object.values([
                                        '#4dc9f6',
                                        '#f67019'
                                      ]),
      }
    ]
  };

  var config = {
    type: 'pie',
    data: data,
    options: {
      transition: false,
      animation: {

        },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Protein'
        }
      }
    },
  };

  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  // Add element to refresh protein value by
  const palette = document.getElementById('ingredientSelection');
  // update protein value at every click in area
  palette.addEventListener('click', event => {
    totalProtein = parseInt(document.getElementById("finalProtein").innerHTML);
    console.log(totalProtein)

  function addData(totalProtein){
    if (totalProtein < 100) {
      myChart.data.datasets[0].data[0] = (totalProtein);
      myChart.data.datasets[0].data[1] = (100 - totalProtein);
      myChart.update();
    } else {
      myChart.data.datasets[0].data[0] = 100;
      myChart.data.datasets[0].data[1] = 0;
      myChart.update();
    }

  }
  addData(totalProtein);
  })
}
export { proteinChart };
