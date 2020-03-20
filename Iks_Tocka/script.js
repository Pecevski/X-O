window.onload = () => {

    let td1 = document.getElementById("td1");
    let td2 = document.getElementById("td2");
    let td3 = document.getElementById("td3");
    let td4 = document.getElementById("td4");
    let td5 = document.getElementById("td5");
    let td6 = document.getElementById("td6");
    let td7 = document.getElementById("td7");
    let td8 = document.getElementById("td8");
    let td9 = document.getElementById("td9");
    let tdAll = document.getElementsByTagName("td");

    const objState = {
        num: 0,
        state: false
    }


    const clickField = (obj) => {

        if (obj.innerHTML == "") {
            obj.innerHTML = "X";
            objState.num += 1;
            setTimeout(otherField, 200);
            if ((td1.innerHTML == "X" && td2.innerHTML == "X" && td3.innerHTML == "X") ||
                (td4.innerHTML == "X" && td5.innerHTML == "X" && td6.innerHTML == "X") ||
                (td7.innerHTML == "X" && td8.innerHTML == "X" && td9.innerHTML == "X") ||
                (td1.innerHTML == "X" && td5.innerHTML == "X" && td9.innerHTML == "X") ||
                (td3.innerHTML == "X" && td5.innerHTML == "X" && td7.innerHTML == "X") ||
                (td1.innerHTML == "X" && td4.innerHTML == "X" && td7.innerHTML == "X") ||
                (td2.innerHTML == "X" && td5.innerHTML == "X" && td8.innerHTML == "X") ||
                (td3.innerHTML == "X" && td6.innerHTML == "X" && td9.innerHTML == "X")) {
                objState.state = true;
                let play = confirm(`You WIN!!! Do you want to play again`);
                if (play) location.reload(true);
                else location.reload(false);

            }
            if (objState.num >= 5 && objState.state == false) {
                let play = confirm(`Draw Game!!! Do you want to play again`);
                if (play) location.reload(true);
                else location.reload(false);
            }
        }
        return;

    };

    const otherField = () => {
        let bool = true;
        do {
            let num = Math.round(Math.random() * (tdAll.length - 1));
            if (tdAll[num].innerHTML == "") {
                bool = false;
                tdAll[num].innerHTML = "O";
            }
        } while (bool == true)
        if ((td1.innerHTML == "O" && td2.innerHTML == "O" && td3.innerHTML == "O") ||
            (td4.innerHTML == "O" && td5.innerHTML == "O" && td6.innerHTML == "O") ||
            (td7.innerHTML == "O" && td8.innerHTML == "O" && td9.innerHTML == "O") ||
            (td1.innerHTML == "O" && td5.innerHTML == "O" && td9.innerHTML == "O") ||
            (td3.innerHTML == "O" && td5.innerHTML == "O" && td7.innerHTML == "O") ||
            (td1.innerHTML == "O" && td4.innerHTML == "O" && td7.innerHTML == "O") ||
            (td2.innerHTML == "O" && td5.innerHTML == "O" && td8.innerHTML == "O") ||
            (td3.innerHTML == "O" && td6.innerHTML == "O" && td9.innerHTML == "O")) {
            let play = confirm(`You LOSE!! Do you want to play again`);
            if (play) location.reload(true);
            else location.reload(false);
        }

    }


    td1.addEventListener("click", () => clickField(td1));
    td2.addEventListener("click", () => clickField(td2));
    td3.addEventListener("click", () => clickField(td3));
    td4.addEventListener("click", () => clickField(td4));
    td5.addEventListener("click", () => clickField(td5));
    td6.addEventListener("click", () => clickField(td6));
    td7.addEventListener("click", () => clickField(td7));
    td8.addEventListener("click", () => clickField(td8));
    td9.addEventListener("click", () => clickField(td9));


}