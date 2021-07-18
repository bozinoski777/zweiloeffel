const initialData = () => {
  let price = 0;
  let weight = 0;
  let protein = 0;


  document.querySelectorAll('.selectionCard').forEach(item => {
    item.addEventListener('click', event => {
      // console.log(event.path[2].id);
      console.log(event.path[2].children[0].children[1].children[1].innerHTML);




    })
  })


  // let selectionCards = document.getElementsByClassName("selectionCard");

  // selectionCards.addEventListener("click", increaseOrder);
  function increaseOrder() {
    // console.log(event);

    // let currentSelection = event.path[2].id;
    // console.log(event.path[2].id);
    // // Increase price
    // price += <%= ingredient_within.price %>
    // document.getElementById("price").innerHTML = price;
    // // Increase weight
    // weight += <%= ingredient_within.weight %>
    // document.getElementById("weight").innerHTML = weight;
    // // Increase protein
    // protein += <%= ingredient_within.protein %>
    // document.getElementById("protein").innerHTML = protein;
    }


}

export { initialData };
      // let currentSelection = event.path[2].id;
      // console.log(event.path[2].id);
      // // Increase price
      // price += selectionCard-pricing
      // document.getElementById("price").innerHTML = price;
      // // Increase weight
      // weight += <%= ingredient_within.weight %>
      // document.getElementById("weight").innerHTML = weight;
      // // Increase protein
      // protein += <%= ingredient_within.protein %>
      // document.getElementById("protein").innerHTML = protein;
