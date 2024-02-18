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
        // console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[7].childNodes[1].childNodes[3].childNodes[3].childNodes[0].innerText);
        const seatFare = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[7].childNodes[1].childNodes[3].childNodes[3].childNodes[0].innerText;

        const selectedContainer = document.getElementById("selected-seat-container");

        const tr = document.createElement("tr");

        const td = document.createElement("td");
        td.innerText = seatNo;
        const td2 = document.createElement("td");
        td2.innerText = "Economy";
        const td3 = document.createElement("td");
        td3.innerText = seatFare;

        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        selectedContainer.appendChild(tr);

        const totalFare = document.getElementById("total-fare").innerText;

        const convertedTotalFare = parseInt(totalFare);
        const sum = convertedTotalFare + parseInt(seatFare);

        setInnerText("total-fare", sum);
        setInnerText("seat-count", count);
        
    });
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}