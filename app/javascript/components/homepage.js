let initialData = () => {
  let price = 0;
  let weight = 0;
  let protein = 0;
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

      //Jar  This is where I left off. I dont know how to iterate over the coices to differentiate between alreadz selected or novel
      let allContent = [...Array(8).keys()];
      allContent.forEach(number => {
        if (document.getElementById(`jar-img-${number}`).src === "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==") {
          console.log(document.getElementById(`jar-img-${number}`).src)
        } else {
          console.log("empty?");
        }
      });


      let contentImg = document.getElementById("jar-img-1");
      contentImg.src = ingredientIMG
      contentImg.style.height = `${weight}%`

    })
  })
}
export { initialData };
