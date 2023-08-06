   // The first event listener listenes for the DOM to load.
   document.addEventListener('DOMContentLoaded', async() => {

    // The second event listener listens for a click on the buttons in the page and displays an alert.
    document.getElementById('join').addEventListener('click', ()=> {
        console.log(alert('Hi there, thank you for joining'))
    })
    document.getElementById('time-schedule').addEventListener('click', () => {
        console.log(alert('Hi there, you will be seeing the schedule shortly'))
    })
   





   })