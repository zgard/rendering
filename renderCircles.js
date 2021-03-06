
// function renderCircles(circles) {
//     // HINT: You probably need to write a for loop!
//     //       Or, if you're feeling fancy, use .map() 
//     return `
//         <div class="text-center mt-5">
//             <code>${JSON.stringify(circles)}</code>
//         </div>
//     `
// }

// function circles() {
//     var content = document.getElementById('content');

//     var circlesAbstraction = [
//         {
//             radius: 50,
//             color: "#FF00FF"
//         },
//         {
//             radius: 30,
//             color: "#FF99AA"
//         },
//         {
//             radius: 60,
//             color: "#0000FF"
//         },
//         {
//             radius: 10,
//             color: "#000000"
//         },
//     ];

//     content.innerHTML = renderCircles(circlesAbstraction);

}
// solution

function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 

    function drawCircle(circles) {
        return `
        <div class="text-center mt-5">
                <div style="background-color: ${circles.color}; 
                   height: ${circles.radius}px;
                   width: ${circles.radius}px; 
                   border-radius: ${circles.radius}px">
                  </div>
            </div>
            `
    }
    return `
        ${circles.map(drawCircle).join("")}  
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [{
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

    // avoid using variable names that are properties :)
}