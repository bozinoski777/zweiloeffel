const initialData = () => {
  let price = 0;
  let weight = 0;
  let protein = 0;

  document.getElementById(event.path[2].id).addEventListener("click", increaseOrder);
  function increaseOrder() {
    console.log(event);

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
