function hendelTicket(ticketClass,isIncrease){
    const ticket = document.getElementById(ticketClass);
    const ticketInNumber = parseInt(ticket.innerText);
    let totalTicket = ticketInNumber;
    if(isIncrease == true){
        totalTicket = ticketInNumber+ 1;
    }
    if(isIncrease == false && totalTicket > 0){
        totalTicket = ticketInNumber - 1;
    }
    ticket.innerText = totalTicket;
    calculator()
}
function calculator(){
    const first = parseInt(document.getElementById('first').innerText)
    const business = parseInt(document.getElementById('business').innerText)
    const economy = parseInt(document.getElementById('economy').innerText)
    const preminmEconomy = parseInt(document.getElementById('preminm-economy').innerText)
    const totalAmount = first * 60500 + business * 50500 + economy * 40500 + preminmEconomy * 30500;
    document.getElementById('sub-total').innerText = totalAmount;
    const vat = totalAmount * 0.05;
    document.getElementById('vat').innerText = vat;
    const total = totalAmount + vat ;
    document.getElementById('total').innerText = total;
}
function bookTicket(){
    document.getElementById('main').style.display = "none";
    document.getElementById('main-input').style.display = "block";
}