function updateBanner() {
    const budget = document.getElementById("budgetAmount").innerText;
    const expenses = document.getElementById("expensesAmount").innerText;
    document.getElementById("balanceAmount").innerHTML = budget - expenses;
}


function addBudget() {
    const budget = document.getElementById("budget").value;
    const expenses = document.getElementById("expensesAmount").innerText;

    document.getElementById("budgetAmount").innerHTML = budget;
    document.getElementById("balanceAmount").innerHTML = budget - expenses;
}

i = 0;
const bdgtlist = [[], []];

function addExpense() {
    const expName = document.getElementById("expenseName").value;
    const expAmount = document.getElementById("expenseAmt").value;
    if (/[a-zA-Z0-9]/.test(expName)==true && expAmount != 0) {
        bdgtlist[0][i] = expName;
        console.log(typeof expName)
        bdgtlist[1][i] = expAmount;
        i++;
        Showlist()
    }
    if (/[a-zA-Z0-9]/.test(expName)==false) {
        alert("Please give correct input! Name should not be Blank");
    }
    if (/[a-zA-Z0-9]/.test(expName)==true && expAmount == 0) {
        alert("Please give correct input! Amount should not be Zero");
    }

}


function Showlist() {
    document.getElementById("tbody").innerHTML = ""
    for (var j = 0; j < bdgtlist[0].length; j++) {

        var exp = bdgtlist[0][j]
        var amt = bdgtlist[1][j]
        if (exp != undefined && amt != undefined) {
            document.getElementById("tbody").innerHTML +=
                `<tr>
            <td id="exp">`+ exp + `</td>
            <td id="amt">`+ amt + `</td>
            <td id="del"><button onclick="deleteExp(`+ j + `)">&#10060;</button> </td>
        </tr>`;
        }


    }
    let totalexpAmt = 0;
    for (var j = 0; j < bdgtlist[0].length; j++) {
        if (bdgtlist[1][j] != undefined) {
            totalexpAmt += parseFloat(bdgtlist[1][j])
        }
    }
    document.getElementById("expensesAmount").innerHTML = totalexpAmt;
    updateBanner()


}

let id = 0;
function deleteExp(id) {
    bdgtlist[0].splice(id, 1)
    bdgtlist[1].splice(id, 1)
    Showlist()

}




