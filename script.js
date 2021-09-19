/*****************************************
*
*              ChillSeverus
*
*          (Entertainment Media)
*
*            by Akshy Chaudhary
*
*
******************************************/

class ArtForm {
    constructor(artName, artGenre, artYear, artDescription, artKeyword) {
        this.artName = artName;
        this.artGenre = artGenre;
        this.artYear = artYear;
        this.artDescription = artDescription;
        this.artKeyword = artKeyword;
    }
}

const artFormList = [];

const createArt = () => {
    const artForm = new ArtForm();

    artName = document.getElementById("artName").value;

    artForm.artName = artName;

    let artGenre = document.getElementById("artGenre").value;

    artForm.artGenre = artGenre;

    let artYear = document.getElementById("artYear").value;

    artForm.artYear = artYear;

    let artDescription = document.getElementById("artDescription").value;

    artForm.artDescription = artDescription;

    artFormList.push(artForm);

    let addText = document.getElementById("userResult");

    addText.innerText = `${artName} ${artYear} is added`;
};

let userText = document.querySelector('#userText').value;

console.log(userText);

let lowerCaseUserText = userText.toLowerCase();

console.log(lowerCaseUserText);

window.onload = function () {

    const target = document.querySelector('#doSomething');

    target.addEventListener("click", function () {
        console.log(lowerCaseUserText);
    });
}

/*try {
        typeof(lowerCaseUserText) !== string;
    } catch {
        alert('oops I\'m not a calculator, enter some text!!')
    }*/
