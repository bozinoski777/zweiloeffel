  // === include 'setup' then 'config' above ===
  var DATA_COUNT = 1;
  var NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

  var data = {
    // labels: ['Red', 'Orange'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [80, 0],
        // data: [<%= summary_protein_within %>,  ((<%= summary_protein_within %>) <= 80) ?  (80 - <%= summary_protein_within %>) : 0],
        // data: [50, 40],
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
  // myChart.update();


  // function addData(){
// console.log(protein)
    // myChart.data.datasets[0].data[0] += (80 - document.getElementById("protein").innerHTML)
    // myChart.data.datasets[0].data[1] -= (80 + document.getElementById("protein").innerHTML)
    // myChart.update();
//   }
// setTimeout(addData, 2000)
