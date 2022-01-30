function hendelTicket(ticketClass,isIncrease){
    let ticket = document.getElementById(ticketClass).innerText;
    let ticketInNumber = parseInt(ticket);
    let totalTicket = ticketInNumber;
    if(isIncrease == true){
        totalTicket = ticketInNumber++;
    }
    if(isIncrease == false && totalTicket > 0){
        totalTicket = ticketInNumber -1;
    }
    ticket.innerText = totalTicket;
}