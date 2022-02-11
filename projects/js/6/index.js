function Book(bookname, author, type) {
    this.bookname = bookname;
    this.author = author;
    this.type = type;
}

function Display() {

}

Display.prototype.add = function(book) {
    let entries = localStorage.getItem("entries");
    if (entries == null) {
        eobj = [];
    } else {
        eobj = JSON.parse(entries);
    }
    let tablebosy = document.getElementById("tablebody");

    let str = `
                <tr>
                    <td>${book.bookname}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>
    
    `
    tablebosy.innerHTML += str;
}
Display.prototype.clear = function() {
    let myform = document.getElementById("myform");
    myform.reset();
}
Display.prototype.validate = function(book) {
    if (book.bookname.length < 3 || book.author.length < 3) {
        return false;
    } else {
        return true;
    }

}
Display.prototype.show = function(txt, msg) {
    let aler = document.getElementById('aler');
    aler.innerHTML = `
    <div class="alert alert-${txt} alert-dismissible fade show" role="alert">
  <strong> Message:</strong> ${msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    `

    setTimeout(function() {
        aler.innerHTML = '';
    }, 2000);
}







let myform = document.getElementById("myform");
myform.addEventListener('submit', formsubmit);

function formsubmit(e) {
    let bookname = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let type;
    let type1 = document.getElementById("type1");
    let type2 = document.getElementById("type2");
    let type3 = document.getElementById("type3");
    if (type1.checked) {
        type = type1.value;
    } else if (type2.checked) {
        type = type2.value;
    } else if (type3.checked) {
        type = type3.value;
    }

    let book = new Book(bookname, author, type);
    console.log(book);
    console.log("submitted");
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'your book has been successfully added.');
        localStorage.setItem("Entries", JSON.stringify(book))

    } else {
        display.show('danger', 'sorry! you cant add a book.');
        // error 
    }

    e.preventDefault();
}