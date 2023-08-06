   // The first event listener listenes for the DOM to load.
   document.addEventListener('DOMContentLoaded', async() => {

    // The second event listener listens for a click on the buttons in the page and displays an alert.
    document.getElementById('join').addEventListener('click', ()=> {
        console.log(alert('Hi there, thank you for joining'))
    })
    document.getElementById('time-schedule').addEventListener('click', () => {
        console.log(alert('Hi there, you will be seeing the schedule shortly'))
    })

    // The third event listener listens for change in the dropdown list on the page and fetches data from a public fitness API and displays the content on the page.
    // Loading the exercises
 
    async function loadExercises(id) {
        const response = await fetch(`http://localhost:3000/excercises/${id}`)
        if(!response.ok){
            console.error('Exercises not loaded')
        }
        if(response.ok){
            const exercise = await response.json()
            console.log('Exercises loaded')
            return exercise
        }
        return null
    

    }
     // Rendering the exercises on the page
 
     function renderExercises(exercise){
        if(exercise){
        //     const exerciseName = document.getElementById('excercisename')
        //     exerciseName.textContent = exercise.name

            const exerciseMuscle = document.getElementById('exercisemuscle')
            exerciseMuscle.textContent = exercise.muscle

            const exerciseEquipment = document.getElementById('exerciseequipment')
            exerciseEquipment.textContent = exercise.equipment

            const exerciseImage = document.getElementById('exerciseimage')
            exerciseImage.src = exercise.image_url

            const exercieInstructions = document.getElementById('exerciseinstructions')
            exercieInstructions.textContent = exercise.instructions
            
        } else {
            alert('Exercise not found')
        }
    }
     // Select element from dropdown list
     const select = document.getElementById('daydropdown')
     // This displays the details of the exercises of the day that is default to the dropdown llst (the 'select.value') first before the user can choose a day of his will.
     
     const exercise = await loadExercises(select.value)
     renderExercises(exercise)
     






    
   










   })