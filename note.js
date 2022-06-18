console.log("hii");
shownote();
//when save button is clicked note is saved.
let savebtn= document.getElementById('savebtn');
savebtn.addEventListener("click", function(e){
    let addtitle =document.getElementById('addtitle');
    let addtxt = document.getElementById('addtxt');
    let notes=localStorage.getItem('notes');
    if(notes == null){
     notesobj=[];
    }else{
        notesobj=JSON.parse(notes);
    }
    let addobj={
        title: addtitle.value,
        text: addtxt.value

    }
    notesobj.push(addobj);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addtxt.value="";
    addtitle.value="";
    console.log(notesobj);
    shownote();
});
//Saved note is displayed
function shownote(){
    let notes=localStorage.getItem('notes');
    if(notes == null){
     notesobj=[];
    }else{
        notesobj=JSON.parse(notes);
    }
    let html="";
    let yournotes=document.getElementById('urnotes');
    notesobj.forEach((element,index) => {
        html=html+`
  <div class="card mx-2 my-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.text}</p>
      <button onclick="deleteNote(this.id)" class="btn btn-primary" id="${index}">Delete Node</button>
    </div>
  </div>
        `
    });
    if(notesobj.length != 0){
        yournotes.innerHTML=html;
    }else{
        yournotes.innerHTML=`nothing to display`;
    }
}
//Delete a note
function deleteNote(index){
    let notes=localStorage.getItem('notes');
    if(notes == null){
     notesobj=[];
    }else{
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1); 
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownote();
}

//Search function

function search(){
    console.log("search is called");
    let notes= localStorage.getItem("notes");
    let searchinput=document.getElementById('searchin');
    if(notes.includes(searchinput.value)){
            card.style.display = "block";
    } else{
        card.style.display = "none";
    }
}