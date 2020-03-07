
// function renderRectangle(rectangle) {
//     return `
//         <div class="text-center mt-5">
//             <code>${JSON.stringify(rectangle)}</code>
//         </div>
//     `
// }

// function rectangle() {
//     var content = document.getElementById('content');

//     var rectangleAbstraction = {
//         width: 100,
//         height: 200,
//         color: "#FF00FF"
//     }

//     content.innerHTML = renderRectangle(rectangleAbstraction);

// }
//solution

function renderRectangle(rectangle) {
    return `
  <div class="text-center mt-5">
  <div style="width: 
  ${rectangle.width}px; height: 
  ${rectangle.height}px; 
  background-color: ${rectangle.color};"> </div>
  <!-- <code>${JSON.stringify(rectangle)}</code> -->
</div>
      
  `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    // var rectangleAbstraction = {
    //     inlineStyle: "width:100px;height:200px;backgroundColor:#FF00FF;margin:10 0 10 0;padding:200px;border-radius:50px;"
    //         /*
    //         width: "${100}px",
    //         height: "${200}px",
    //         backgroundColor: "#FF00FF"
    //         */
    // }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}