showNotes();
let addbtn = document.getElementById("addBtn");


addbtn.addEventListener("click", function(e) {
    let addtxt = document.getElementById("addtext");
    let addttitle = document.getElementById("title");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    let myobj = {
        title: addttitle.value,
        text: addtxt.value
    }
    notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    addttitle.value = "";
    console.log(notesobj);
    showNotes();

})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function(element, index) {
        html += `
        <div class="notecard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id = "${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
                </div>`;

    });
    let notesele = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesele.innerHTML = html;
    } else {
        notesele.innerHTML = `Nothing to show add a note`;
    }


}

function deletenote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}

let searchtxt = document.getElementById("searchtxt");
searchtxt.addEventListener("input", function() {
    let inputval = searchtxt.value.toLowerCase();
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })

})