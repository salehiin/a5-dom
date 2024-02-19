const allSeat = document.getElementsByTagName("li");
let count = 0;
let remain = 40;

// console.log(allSeat);
for(const seat of allSeat){
    seat.addEventListener("click", function(e){
        if(count > 3){
            alert("cant purchase more than 4 tickets")
            return;
        }
        count += 1;
        remain -= 1;

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

        e.target.style.backgroundColor="#1DD100";
        // e.target.setAttribute=this.ariaDisabled

        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)


       

        selectedContainer.appendChild(tr);
        

        // const totalFare = document.getElementById("total-fare").innerText;

        // const convertedTotalFare = parseInt(totalFare);
        // const sum = convertedTotalFare + parseInt(seatFare);

        // const grandTotal = document.getElementById("grand-total").innerText;

        // const convertedGrandTotal = parseInt(grandTotal);
        // const sum2 = convertedGrandTotal + parseInt(seatFare)

        totalFare("total-fare", parseInt(seatFare));


        


        grandTotalFare("grand-total", parseInt(seatFare));

        
        
        // setInnerText("grand-total", sum2);
        // setInnerText("total-fare", sum);

        
        setInnerText("seat-count", count);

        

        setInnerText("seat-remain", remain);

       
        
    });
}

// function grandTotalFare(id, value){
//     const totalFare = document.getElementById(id).innerText;

//         const convertedTotalFare = parseInt(totalFare);
//         const sum = convertedTotalFare + parseInt(value);
//         setInnerText("grand-total", sum);
// }



function totalFare(id, value){
    const totalFare = document.getElementById(id).innerText;

        const convertedTotalFare = parseInt(totalFare);
        const sum = convertedTotalFare + parseInt(value);
        setInnerText("total-fare", sum);
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}





function grandTotalFare(category){
    const totalFare = document.getElementById("total-fare").innerText;
        const convertedTotalFare = parseInt(totalFare);

        //----------------------------------------------------------------------------
        
        // if(category=="NEW15"){
        //     setInnerText("grand-total", convertedTotalFare - convertedTotalFare*0.15);
        // }else if(category=="Couple 20"){
        //     setInnerText("grand-total", convertedTotalFare - convertedTotalFare*0.20);
        // }else{
        //     setInnerText("grand-total", convertedTotalFare);
        // }

        //----------------------------------------------------------------------------

        // if(document.getElementById("coupon").value =="NEW15"){
        //     setInnerText("grand-total", convertedTotalFare - convertedTotalFare*0.15);
        // }else if(document.getElementById("coupon").value =="Couple 20"){
        //     setInnerText("grand-total", convertedTotalFare - convertedTotalFare*0.20);
        // }else{
        //     setInnerText("grand-total", convertedTotalFare);
        // }

        
}

const couponBtn = document.getElementById("apply-btn");
        couponBtn.addEventListener("click", function(){
        
        const couponElement = document.getElementById("coupon").value;
        const couponCode = couponElement.split(" ").join("").toUppercase();
        console.log(couponCode);
        if(totalFare.innerText > 2000){
            if(couponCode === "NEW15"){
        
                const discountElement = document.getElementById("discountPrice");
                const discountAmount =  totalFare*0.15;
                discountElement.innerText = discountAmount.toFixed(2);
        
                const restTotal = document.getElementById("grand-total")
                restTotal.innerText = totalFare - discountAmount.toFixed(2); 
                document.getElementById("coupon").value="";
        
            }else{
                alert("invalid Coupon Code");
                document.getElementById("coupon").value="";
            }
        
        }else{
            alert("Please buy minimum 4 tickets");
            document.getElementById("coupon").value="";
        }
        
        });