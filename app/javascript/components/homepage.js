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
    //  display none all divs that are empty, when the increase of height happens should be only top the selected item not all
      let allDivs = [...Array(8).keys()];
      allDivs.forEach(number => {
        if (selection[number]) {
         let selectedImg = document.getElementById(`jar-img-${number}`);
          selectedImg.src = (selection[number]).dataset.img;
          let currentHeight = parseInt(selectedImg.style.height.replace("px", ""));
          currentHeight += 50;
          currentHeight += "px";
          selectedImg.style.height = currentHeight;
        } else {
        }

      });

    })
  })

}
export { initialData };
