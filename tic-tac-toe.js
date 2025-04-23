

function tic_tak_to(arr) {
    let i = 0;

    while (0 < arr.length) {

        // -----------------------------

        if ((arr[i][0] == arr[i][1]) && arr[i][0] == arr[i][2]) {
            console.log("win  : " + arr[i][0])
            result
            break;
        }

        if ((arr[i + 1][0] == arr[i + 1][1]) && arr[i + 1][0] == arr[i + 1][2]) {
            console.log("win : " + arr[i + 1][0])
            break;
        }

        if ((arr[i + 2][0] == arr[i + 2][1]) && arr[i + 2][0] == arr[i + 2][2]) {
            console.log("win : " + arr[i + 2][0])
            break;
        }

        // -----------------------------

        if ((arr[i][0] == arr[i + 1][0]) && arr[i][0] == arr[i + 2][0]) {
            console.log("win : " + arr[i][0])
            break;
        }

        if ((arr[i][1] == arr[i + 1][1]) && arr[i][1] == arr[i + 2][1]) {
            console.log("win : " + arr[i][1])
            break;
        }

        if ((arr[i][2] == arr[i + 1][2]) && arr[i][2] == arr[i + 2][2]) {
            console.log("win : " + arr[i][2])
            break;
        }

        // ----------------------------


        if ((arr[i][0] == arr[i + 1][1]) && arr[i][0] == arr[i + 2][2]) {
            console.log("win : " + arr[i][0])
            break;
        }

        if ((arr[i + 2][0] == arr[i + 1][1]) && arr[i+2][0] == arr[i][2]) {
            console.log("win : " + arr[i + 2][0])
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
            console.log("MATCH DRAW")
            break;
        }

        else{
            console.log("BOARD NOT FINISH" )
            break;
        }

    }
}
tic_tak_to([             //win x in row
        ["o", "x", "o"],
        ["x", "x", "x"],
        ["o", "o", "x"]
])
 
tic_tak_to([             //win o in row
    [null, "x", "x"],     
    ["o", "o", "o"],
    ["x", "o", "x"]
])

tic_tak_to([             //win x in coulumn
    ["x", "x", "o"],
    ["x", "o", "o"],
    ["x", "o", "x"]
])

tic_tak_to([             //win o in coulumn
    ["o", "x", "o"],
    ["x", "x", "o"],
    ["x", null, "o"]
])

tic_tak_to([             //win x in daigonal
    ["o", "x", "x"],
    ["o", "x", "o"],
    ["x", "o", "x"]
])

tic_tak_to([             //win o in daigonal
    ["o", "x", "o"],
    ["x", "o", "x"],
    ["x", "o", "o"]
])

tic_tak_to([             //match draw
    ["o", "x", "o"],
    ["x", "x", "o"],
    ["x", "o", "x"]
])


tic_tak_to([             //match not finish
    ["o", "x", null],
    ["x", null, "o"],
    ["x", "o", "x"]
])

