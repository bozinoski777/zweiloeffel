let initialData = () => {
  let price = 0;
  let weight = 0;
  let protein = 0;
  let selection = [];
  let totalJarSize = 0
  document.querySelectorAll('.selectionCard').forEach(item => {
    item.addEventListener('click', event => {
      // Fetch ingredient data from DOM
      if (totalJarSize <= 550) { // this is for the filling of the jar to stop when fill. It depends on the jar div height
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
      totalJarSize += 50

      // create array of selected elements
      if(!selection.includes(item)) {
        selection.push(item);
      }

      //  display none all divs that are empty, when the increase of height happens should be only top the selected item not all
      let allDivs = [...Array(8).keys()];
      allDivs.forEach(number => {
        let currentJarImg = document.getElementById(`jar-img-${number}`);
        if (selection[number]) {
          currentJarImg.style.display = "block"
          // change info in jar according to palette selection
          currentJarImg.src = (selection[number]).dataset.img;
          currentJarImg.dataset.jarname = (selection[number]).dataset.name;
        }else{
          currentJarImg.style.display = "none"
        }

      });

      // change style in currently selected image
      let divDataChange = `[data-jarname = ${ingredinetName}]`
      let selectedJarIngredient = document.querySelector(divDataChange)
      let currentHeight = parseInt(selectedJarIngredient.style.height.replace("px", ""))
      currentHeight += 50;
      currentHeight += "px";
      selectedJarIngredient.style.height = currentHeight;

      console.log(totalJarSize)
      }else{

      }
    })
  })
}
export { initialData };
