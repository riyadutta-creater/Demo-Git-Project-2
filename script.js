const searchInput = document.getElementById("searchInput");
const resultDiv = document.getElementById("result");

searchInput.addEventListener("keydown", function(event) {
  const query = searchInput.value.trim().toLowerCase();
  
  if (event.key === "Enter") {
    if (query === "legend" || query === "Legend" || query === "LEGEND") {
      showImage("legend");
    } else if (query === "hero" || query === "Hero" || query === "HERO") {
      showImage("hero");
    } else {
      resultDiv.innerHTML = "No results found for: " + query;
      resultDiv.style.display = "block";
    }
  }
  
  if (event.key === "Backspace" || query === "") {
    if (query !== "legend" && query !== "hero") {
      resultDiv.innerHTML = ""; 
      resultDiv.style.display = "none";
    }
  }
});

function showImage(keyword) {
  const image = document.createElement("img");

  if (keyword === "legend") {
    image.src = "../1.jpg"; 
  } else if (keyword === "hero") {
    image.src = "../2.jpg"; 
  }

  image.onerror = function() {
    resultDiv.innerHTML = "Image not found.";
  };

  resultDiv.innerHTML = "";
  resultDiv.appendChild(image);
  resultDiv.style.display = "block"; 
}
