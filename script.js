'use strict';

const myLibrary = new Array();

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = Number(pages);
    this.read = Boolean(read);
    this.bookNumber = myLibrary.length;
}

function addBookToLibrary(name, author, pages, read){
    myLibrary.push(new Book(name, author, pages, read));
}
const infor = document.querySelector(".info");
function setInfo(){
    infor.textContent = "Add your books here!";
    infor.style = "color:black; background-color:none;";
}

const books = document.querySelector(".books");
const showForm = document.querySelector(".show-form");

const form = document.querySelector("form");
const submitBtn = document.querySelector(".footer");
const close = document.querySelector(".close");
const bookAdd = document.querySelector(".book-add-button");
const authorName = document.getElementById("author");
const bookName = document.getElementById("name");
const numberOfPages = document.getElementById("pages");
const bookRead = document.getElementById("yes");
bookAdd.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(bookName.value, authorName.value, numberOfPages.value, bookRead.checked);
    const b = document.createElement("div");
    const val = myLibrary.length - 1;
    b.classList.add("book");
    const text = document.createElement("h2");
    text.textContent = `${myLibrary[myLibrary.length - 1].name}`;
    const bookAuthor = document.createElement("h3");
    bookAuthor.textContent = `Autor: ${myLibrary[myLibrary.length - 1].author}`;
    const bookPages = document.createElement("h3");
    bookPages.textContent = myLibrary[myLibrary.length - 1].pages;
    const cit = document.createElement('h4');
    if (myLibrary[myLibrary.length - 1].read === false)
        cit.textContent = "Necitita";
    else
        cit.textContent = "Citita";
    const remove = document.createElement("button");
    remove.style = "height:40px; width:80px; border-radius:10px; background-color:red; font-size:15px; font-weight:bold;";
    remove.textContent = "Sterge";
    const alterReadStatus = document.createElement("button");
    alterReadStatus.style = "background-color:blue; height:40px; width:80px; border-radius:10px; padding-right:2px;";
    alterReadStatus.textContent = "CITITA";
    b.appendChild(text);
    b.appendChild(bookAuthor);
    b.appendChild(bookPages);
    b.appendChild(cit);
    b.appendChild(alterReadStatus);
    b.appendChild(remove);
    books.appendChild(b);
    infor.textContent = "Book added successfully!";
    infor.style = "color:lightgreen; background-color:green;";
    setTimeout(setInfo, 5000);
    bookName.value = '';
    authorName.value = '';
    numberOfPages.value = '';
    bookRead.checked = true;
    remove.addEventListener("click", () => {
        const smallDiv = document.createElement("div");
        smallDiv.style = "display:flex; align-items:center; justify-content:center; gap: 5px;";
        const youSure = document.createElement("p");
        youSure.textContent = "Esti sigur?";
        const yesSure = document.createElement("button");
        const noSure = document.createElement("button");
        yesSure.textContent = "Da";
        noSure.textContent = "Nu";
        yesSure.style = "background-color:red; font-weight:bold; border-radius:5px; border:2px solid grey;";
        noSure.style = "background-color:green; font-weight:bold; border-radius:5px; border:2px solid grey;";
        b.appendChild(youSure);
        smallDiv.appendChild(yesSure);
        smallDiv.appendChild(noSure);
        b.appendChild(smallDiv);
        remove.classList.add("hidden");
        yesSure.addEventListener("click", () => {
            books.removeChild(b);
            infor.textContent = "Book removed successfully!";
            infor.style = "background-color:darkred; color:orangered;";
            setTimeout(setInfo, 5000);
        });
        noSure.addEventListener("click", () => {
            yesSure.remove();
            noSure.remove();
            smallDiv.remove();
            youSure.remove();
            remove.classList.remove("hidden");
        });
    });
    alterReadStatus.addEventListener("click", () => {
        if (myLibrary[val].read === true){
            myLibrary[val].read = false;
            cit.textContent = "Necitita";
        }
        else {
            myLibrary[val].read = true;
            cit.textContent = "Citita";
        }
    });
})

showForm.addEventListener("click", (e) => {
    form.classList.remove("hidden");
    submitBtn.classList.remove("hidden");
    showForm.classList.add("hidden");
});

close.addEventListener("click", (e) => {
    form.classList.add("hidden");
    submitBtn.classList.add("hidden");
    showForm.classList.remove("hidden");
});



/*for (let i = 0; i < myLibrary.length; i++){
    const b = document.createElement("div");
    const text = document.createElement("h2");
    const remove = document.createElement("button");
    text.style = "font-size:20px;";
    remove.style = "height:40px; width:80px; border-radius:10px; background-color:red; font-size:15px; font-weight:bold;";
    remove.textContent = "Sterge";
    text.textContent = myLibrary[i].name;
    b.appendChild(text);
    const autor = document.createElement("h3");
    autor.textContent = `Autor: ${myLibrary[i].author}`;
    const pagini = document.createElement("h3");
    pagini.textContent = `Pagini: ${myLibrary[i].pages}`;
    const stare = document.createElement("h3");
    stare.textContent = `Citita: ${myLibrary[i].read === false ? "Nu" : "Da"}`;
    b.appendChild(autor);
    b.appendChild(pagini);
    b.appendChild(stare);
    b.appendChild(remove);
    b.classList.add("book");
    b.classList.add(`number-${i}`);
    books.appendChild(b);
    remove.addEventListener("click", () => {
        books.removeChild()
    });
}*/