
// main div:
let div = document.createElement("div");
document.body.append(div);

// Image:
let image = document.createElement("img")
image.setAttribute("class","image");
image.src = "bg1.jpg";
div.append(image)


// Heading:
let heading = document.createElement("h1");
heading.innerText = "FISHWATCH U.S. SEAFOOD FACTS"  
heading.setAttribute("id", "title");
div.append(heading);


// Main container:
let mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "container");
div.append(mainContainer)

// Fetch Fish watch API:

fetch("https://www.fishwatch.gov/api/species")
.then((response) => response.json())
.then((data) => 
{
    
    data.forEach(element => {
         let Fishwatch = {
            ...element,
            
            
            Taste : element.Taste,
            Calories : element.Calories,
            Cholesterol : element.Cholesterol,
            Protein : element.Protein,
            Biology : element.Biology,
            Location : element.Location ,

         }
         
         fishwatchDetails( Fishwatch);
    });
}).catch((err) => console.log(err))

   function fishwatchDetails ({Taste, Calories,Cholesterol, Protein, Biology, Location })
   {

    mainContainer.innerHTML +=

    ` 
    <div class="card">
       <div class="card-body">
          <div class="card-text-style">
  
    <p class="card-text"> <span> Taste:</span> ${Taste} </p>
    <p class="card-text"> <span> Calories:</span> ${Calories} </p>
    <p class="card-text"> <span> Cholesterol:</span> ${Cholesterol} </p>
    <p class="card-text"> <span> Protein:</span> ${Protein} </p>
    <p class="card-text"> <span> Biology:</span> ${Biology} </p>
    <p class="card-text"> <span> Location:</span> ${Location} </p>
   
         </div>
    </div>`
   }