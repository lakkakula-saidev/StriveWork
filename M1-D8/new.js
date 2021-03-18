    const bubblesort = function(){

        let tasks = document.getElementById('myTaskList').childNodes

        let newTasks = tasks

        for(let i=1; tasks.length-1; i++){


            for(let j=0; j<=tasks.length-i-1; j++){

                if(newTasks[j+1].innerHTML.localeCompare(newTasks[j].innerHTML) < 0){

                    temp = newTasks[j + 1]
                    newTasks[j + 1] = newTasks[j]
                    newTasks[j] = temp
                }
                
            }
        }

        


    }

            for(let i=1; tasks.length-1; i++){


            for(let j=0; j<=tasks.length-i-1; j++){

                if (newTasks[j + 1].localeCompare(newTasks[j]) < 0){

                    console.log(1)
                }


                }
                
            }