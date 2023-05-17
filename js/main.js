const of = document.getElementById("currency-form");

of.addEventListener("submit", function (event) {
  event.preventDefault();

  const query = document.getElementById("query");
  const result = document.getElementById("result");
  const selector = document.getElementById("selector");

  // test if it is a number

  const rate = selector.options[selector.selectedIndex].value;

  if (isNaN(query.value)) {
    alert("Please enter a number");
    of.reset();
  } else {
    result.value = query.value * rate;
  }
  /*
  result.value = query.value * 15;

  // Get the selected option

  const selectedOption = selector.options[selector.selectedIndex];

  //result.value = selector.options[selector.selectedIndex].value * query.value;
  /*
  if (selector.selectedIndex == 0) {
    result.value = query.value * 15;
  } else if (selector.selectedIndex == 1) {
    result.value = query.value * 25;
  } else if (selector.selectedIndex == 2) {
    result.value = query.value * 20;
  }
*/
  console.log(selector.options[selector.selectedIndex].value);
});
