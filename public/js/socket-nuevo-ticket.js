const socket = io()
const buttonTicketNuevo = document.querySelector('.new-ticket');
const labelNuevoTicket  = document.querySelector('#lblNuevoTicket');
socket.on('connect',function(){
    console.log('Conectando al servidor');
});
socket.on('disconnect',function(){
    console.log('Perdimos conexión con el servidor');
});

buttonTicketNuevo.addEventListener('click',(e)=>{
    socket.emit('siguienteTicket',null,(siguienteTicket)=>{
        labelNuevoTicket.textContent=siguienteTicket;
    })
})
socket.on('estadoActual',(data,callback)=>{
    labelNuevoTicket.textContent=data.actual;
}); 