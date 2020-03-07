
function renderNametags(nametags) {
    var namesArray = [];
    
    for (var i=0; i<nametags.length; i++){
    var firstArray = `
        <div class="text-center mt-5">
        <div class="card">
            <div class="card-header bg-primary text-white">
                Hello my name is
            </div>
            <div class="card-body" style="width: 300px">
            ${nametags[i]}
            </div>
            </div>
        </div>
    `
    namesArray.push(firstArray);
    }

    return namesArray.join("");
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}

// <!-- <code>${JSON.stringify(nametags)}</code> -->