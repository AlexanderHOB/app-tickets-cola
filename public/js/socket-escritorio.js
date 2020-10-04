const socket = io()

const h1IdEscritorio = document.querySelector('#id-escritorio')
const btnAtenderTicket = document.querySelector('#btn-atenderTicket');
const smallTicket = document.querySelector('#smallTicket')

var searchParams = new URLSearchParams(window.location.search);
if(!searchParams.has('escritorio')){
    window.location='index.html';
    throw new Error('El escritorio es necesario');
}
var escritorio=searchParams.get('escritorio');

h1IdEscritorio.textContent=`Escritorio  ${escritorio}`;

btnAtenderTicket.addEventListener('click',()=>{
    socket.emit('atenderTicket',{escritorio:escritorio},(resp)=>{
        if(resp === 'No hay tickets' ){
            smallTicket.textContent=resp;
            alert(resp);
            return;
        }
        smallTicket.textContent= resp.numero;
    });
});