var resultArray = []
var gameOver = false;
var resultText = document.createElement("h1")





for (let i = 0; i < 3; i++) {
    let tempArray = []
    for (let j = 0; j < 3; j++) {
        tempArray.push(null)
    }
    resultArray.push(tempArray)
}


var container = document.createElement("div")

container.style.width = "305px"
container.style.height = "305px"
container.style.background = "grey"
container.style.display = "flex"
container.style.flexWrap = "wrap"

var currentTex = "X"

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        var box = document.createElement("div")
        box.style.width = "100px"
        box.style.height = "100px"
        box.style.background = "black"
        box.style.border = "1px solid white"
        box.style.color = "white"
        box.style.fontSize = "50px"
        box.style.display = "flex"
        box.style.justifyContent = "center"
        box.style.alignItems = "center"
        box.setAttribute("id", i + "," + j)


        box.onclick = function () {
            if (this.innerText === "" && !gameOver) {

                let rowClumnId = this.id.split("")
                let rowValue = parseInt(rowClumnId[0])
                let columnValue = parseInt(rowClumnId[2])



                if (currentTex == "X") {
                    this.innerText = "X"
                   

                    resultArray[rowValue][columnValue] = "X"
                     currentTex = "O"
                    console.log(resultArray)


                }
                else {
                    this.innerText = "O"

                    resultArray[rowValue][columnValue] = "O"
                     currentTex = "X"
                    console.log(resultArray)

                }

            }
            CheckResult(resultArray)


        }
        box.onmouseenter = function () {
            this.style.background = "grey"
        }
        box.onmouseleave = function () {
            this.style.background = "black"
        }
        container.appendChild(box)


    }
}

document.body.appendChild(container)




// --------------------------------------------------------------------------------------------





function CheckResult(arr) {
    let i = 0;

    while (0 < arr.length) {

        // -----------------------------

        if ((arr[i][0] == arr[i][1] && arr[i][1] != null) && (arr[i][0] == arr[i][2] && arr[i][2] != null)) {

            resultText.innerText = "win  : " + arr[i][0]
            document.body.appendChild(resultText) 
           

            console.log("win  : " + arr[i][0])
            gameOver = true
            break;
        }

        if ((arr[i + 1][0] == arr[i + 1][1] && arr[i + 1][1] != null) && (arr[i + 1][0] == arr[i + 1][2] && arr[i + 1][2] != null)) {

            
            resultText.innerText = "win  : " + arr[i + 1][0]
            document.body.appendChild(resultText) 


            console.log("win : " + arr[i + 1][0])
            gameOver = true
            break;
        }

        if ((arr[i + 2][0] == arr[i + 2][1] && arr[i + 2][1] != null) && (arr[i + 2][0] == arr[i + 2][2] && arr[i + 2][2] != null)) {

            
            resultText.innerText = "win  : " + arr[i + 2][0]
            document.body.appendChild(resultText) 


            console.log("win : " + arr[i + 2][0])
            gameOver = true
            break;
        }

        // -----------------------------

        if ((arr[i][0] == arr[i + 1][0] && arr[i + 1][0] != null) && (arr[i][0] == arr[i + 2][0] && arr[i + 2][0] != null)) {

            
            resultText.innerText = "win  : " + arr[i][0]
            document.body.appendChild(resultText) 


            console.log("win : " + arr[i][0])
            gameOver = true
            break;
        }

        if ((arr[i][1] == arr[i + 1][1] && arr[i + 1][1] != null) && (arr[i][1] == arr[i + 2][1] && arr[i + 2][1] != null)) {

            
            resultText.innerText = "win  : " + arr[i][1]
            document.body.appendChild(resultText) 


            console.log("win : " + arr[i][1])
            gameOver = true
            break;
        }

        if ((arr[i][2] == arr[i + 1][2] && arr[i + 1][2] != null) && (arr[i][2] == arr[i + 2][2] && arr[i + 2][2] != null)) {

            
            resultText.innerText = "win  : " + arr[i][2]
            document.body.appendChild(resultText) 


            console.log("win : " + arr[i][2])
            gameOver = true
            break;
        }

        // ----------------------------


        if ((arr[i][0] == arr[i + 1][1] && arr[i + 1][1] != null) && (arr[i][0] == arr[i + 2][2] && arr[i + 2][2] != null)) {

            
            resultText.innerText = "win  : " + arr[i][0]
            document.body.appendChild(resultText) 


            console.log("win : " + arr[i][0])
            gameOver = true
            break;
        }

        if ((arr[i + 2][0] == arr[i + 1][1] && arr[i + 1][1] != null) && (arr[i + 2][0] == arr[i][2] && arr[i][2] != null)) {

            
            resultText.innerText = "win  : " + arr[i + 2][0]
            document.body.appendChild(resultText) 


            console.log("win : " + arr[i + 2][0])
            gameOver = true
            break;
        }

        // ------------------------

        let firstRow = arr[i].some(function (x) {
            return x === null
        })
        let secondRow = arr[i + 1].some(function (x) {
            return x === null
        })
        let thirdRow = arr[i + 2].some(function (x) {
            return x === null
        })

        if (!firstRow && !secondRow && !thirdRow) {

            
            resultText.innerText = "MATCH DRAW"
            document.body.appendChild(resultText) 


            console.log("MATCH DRAW")
            break;
        }

        else {

            
            resultText.innerText = "BOARD NOT FINISH"
            document.body.appendChild(resultText) 


            console.log("BOARD NOT FINISH")
            break;
        }

    }
 
    
   
    

}

  
