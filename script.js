  
(function() {

    var namePlace = document.querySelector('.namePlace')
        buttonPush = document.querySelector('.accept')
        lotteryButton = document.querySelector('.lotteryButton')
        listSport = document.querySelector('.listSport')
        listNauka = document.querySelector('.listNauka')
        listGotownaie = document.querySelector('.listGotowanie')
        lotteryElement = document.querySelector('.lotteryElement')
        removeItem = document.querySelector('.removeItem')
        arrToDoList = []
        arrSport = []
        arrNauka = []
        arrGotowanie = []
        formOption = document.querySelector('#formOption')
        xd = document.querySelector('.removeButton')
        selectElement = '';
        buttonPush.setAttribute('disabled', 'disabled')
        
    
    namePlace.addEventListener('keyup', function() {

        if(namePlace.value.length === 0) {
            
            buttonPush.setAttribute('disabled', 'disabled')
            
        } else {
            
            buttonPush.removeAttribute('disabled')
        }

    },false)


    
    
    function createTitle(targetArr, list , title) {

        if (targetArr.length == 1) {
        
            createMainTitle = document.createElement('h2')
            textTitle = document.createTextNode(title)
            createMainTitle.appendChild(textTitle)
            list.appendChild(createMainTitle)
    
        }
    } // create title to list
    
    function createList(){
        
        createElement = document.createElement('li')
        createButton = document.createElement('button')
        createButton.innerHTML = ''
        createElement.setAttribute('class', 'listElement')
        createButton.setAttribute('class', 'removeButton')
        createElement.appendChild(textContent)
        createElement.appendChild(createButton)

    };  // create list
    
    

    function removeElement(event) {

        selectElement = event.target.parentNode
        selectElement.parentNode.removeChild(selectElement)

    }; // remove element li from list after click button
    
    function removeClass(e , title) {
        
        if (e.length === 0) {
              title.removeChild(title.lastElementChild)
        }

    }; // remove title from list after last remove element  

    function removeElementAll(list) {

        child = list.lastElementChild
                    
        while(child) {
            list.removeChild(child)
            child = list.lastElementChild
        }
    }   // remove all element from list ul 
    
    function removeIndexArr(event, targetArr) {

            selectElement = event.target.parentNode.firstChild.textContent
            index = targetArr.indexOf(selectElement)
            targetArr.splice(index, 1)

            if(arrSport.length == 0  && arrNauka.length == 0 && arrGotowanie.length == 0 ) {
                lotteryElement.value = ''
                arrToDoList.length = 0
            } // del index of arrtodolist if last el is del, del random element
    }; 
    
    
    buttonPush.addEventListener('click', function() {

        selectedOption = formOption.options[formOption.selectedIndex].value
        valueOfName = namePlace.value
        arrToDoList.push(valueOfName)

        
        // remove index in array after click button delete element
            

        if (selectedOption === 'sport') {
            arrSport.push(valueOfName)
            textContent = document.createTextNode(arrSport.slice(-1))
            createTitle(arrSport, listSport, 'Sport Tasks')
            createList()
            listSport.appendChild(createElement)
           
            createButton.addEventListener('click', removeElement); 
            createButton.addEventListener('click',  function() { removeIndexArr (event, arrSport);});
            createButton.addEventListener('click',  function() { removeClass (arrSport, listSport);});
           

        } else if ( selectedOption === 'learning') {
            arrNauka.push(valueOfName)
            textContent = document.createTextNode(arrNauka.slice(-1))
            createTitle(arrNauka, listNauka, ' Learning list')
            createList()
            listNauka.appendChild(createElement)
            
            createButton.addEventListener('click', removeElement);
            createButton.addEventListener('click',  function() { removeIndexArr (event, arrNauka);});
            createButton.addEventListener('click',  function() { removeClass (arrNauka, listNauka);});
                     

        } else if (selectedOption = 'other') {
            arrGotowanie.push(valueOfName)
            textContent = document.createTextNode(arrGotowanie.slice(-1))
            createTitle(arrGotowanie, listGotownaie, 'Other tasks list')
            createList()
            listGotownaie.appendChild(createElement)

            createButton.addEventListener('click', removeElement);
            createButton.addEventListener('click',  function() { removeIndexArr (event, arrGotowanie);});
            createButton.addEventListener('click',  function() { removeClass (arrGotowanie, listGotownaie);});
        }
                // dodawanie elementów do tablic/ dodawanie kontentu 
      }, false);

    removeItem.addEventListener('click', function() {
        
        arrToDoList.length = 0

        if(arrToDoList.length === 0 ) {
            lotteryElement.value = ''
            arrGotowanie.length = 0
            arrSport.length = 0
            arrNauka.length = 0

            removeElementAll(listSport)
            removeElementAll(listGotownaie)
            removeElementAll(listNauka)
             
        }

    }); // usuwanie całości - zrobić

    lotteryButton.addEventListener('click', function() {
        
        if(arrSport.length == 0  && arrNauka.length == 0 && arrGotowanie.length == 0 ) {
            arrToDoList.length = 0
        } else {

            function losuj(arr) {

                return arr[Math.floor(Math.random() * arr.length)]
        
            }
    
            if(arrToDoList.length > 0) {
            lotteryElement.value = 'Start doing: '+ losuj(arrToDoList)
            }

        }

        

    }, false)

})()