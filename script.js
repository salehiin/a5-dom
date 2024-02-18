const allSeat = document.getElementsByTagName("li");
let count = 0;

// console.log(allSeat);
for(const seat of allSeat){
    seat.addEventListener("click", function(e){
        count += 1;

        const seatNo = e.target.innerText;
        // const seatNo = e.target.parentNode.childNodes[1].innerText;
        // console.log(e.target);
        // const classNme = e.target.parentNode.childNodes[3].innerText;
        console.log(e.target.parentNode.parentNode.parentNode.parentNode);
        // const seatFare = e.target.parentNode.childNodes[5].innerText;

        const selectedContainer = document.getElementById("selected-seat-container");

        const tr = document.createElement("tr");

        const td = document.createElement("td");
        td.innerText = seatNo;
        // const td2 = document.createElement("td");
        // td.innerText = className;
        // const td3 = document.createElement("td");
        // td.innerText = seatFare;

        tr.appendChild(td)
        selectedContainer.appendChild(tr);

        setInnerText("seat-count", count);
        
    });
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}