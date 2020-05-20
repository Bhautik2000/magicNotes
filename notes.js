// if user add a note add it too the local storage
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();
});

//Function to show Notes from LocalStorages
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element,index) {
        html += ` <div class="card my-2 mx-2 noteCard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Notes</button>
        </div>
      </div> `;
    });
    let notesElm = document.getElementById('notes')
    if(notesObj.length != 0)
    {
        notesElm.innerHTML = html;
    }
    else
    {
        notesElm.innerHTML = ` Nothing to show! Use "Add Your notes" Section above to add notes`
    }
}


// Function to Deleted Notes 

function deleteNote(index){
    // console.log("i am deleting" , index);

    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes" , JSON.stringify(notesObj));
    showNotes();
}

// functon For Search(Filter) Your Notes

let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){

    let inputVal = search.value.toLowerCase();
    // console.log("Input Event Fired" , inputVal );
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal))
        {
            element.style.display = "block";
            element.style.border = "2px solid blue";
        }
        else
        {
            element.style.display = "none";
        }
    });
});


// Upadate features Comming....  soon

/*

1. Add title
2. Mark a note as important
3. Saprate notes by user
4. sync and host to a web server

*/
