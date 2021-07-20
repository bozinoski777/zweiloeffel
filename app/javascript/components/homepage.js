let initialData = () => {
  let price = 0;
  let weight = 0;
  let protein = 0;
  let selection = [];
  document.querySelectorAll('.selectionCard').forEach(item => {
    item.addEventListener('click', event => {
      // Fetch ingredient data from DOM
      let ingredinetName = event.path[1].dataset.name;
      let ingredientPrice = parseInt(event.path[1].dataset.price);
      let ingredientWeight = parseInt(event.path[1].dataset.weight);
      let ingredientProtein = parseInt(event.path[1].dataset.protein);
      let ingredientIMG = event.path[1].dataset.img;

      // Increase price
      price += ingredientPrice
      document.getElementById("finalPrice").innerHTML = price;
      // Increase weight
      weight += ingredientWeight
      document.getElementById("finalWeight").innerHTML = weight;
      // Increase protein
      protein += ingredientProtein
      document.getElementById("finalProtein").innerHTML = protein;

      // create array of selected elements
      if(!selection.includes(item)) {
        selection.push(item);
      }
      let counter = 0

      // selection.forEach(item => {
      //   let selectedIngredientIMG = event.path[1].dataset.img;
      //   let selectedIngredientWeight = parseInt(event.path[1].dataset.weight);
      //   let contentImg = document.getElementById(`jar-img-${counter}`);
      //   contentImg.src = selectedIngredientIMG
      //   contentImg.style.height = "20%"
      //   counter += 1
      // })

 // OR
    //  iterate over all divs ad populate them from top to bottom
      let allDivs = [...Array(8).keys()];
      allDivs.forEach(number => {
        if (selection[number]) {
          let selectedDiv = document.getElementById(`jar-img-${number}`);
          selectedDiv.src = (selection[number]).dataset.img;
          selectedDiv.style.height = "20%";
        }

      });

    })
  })

}
export { initialData };
