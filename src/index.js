import './styles/index.css';
import {autoJson} from "../carsJson/autoJson.js";
let autoJsonb = JSON.stringify(autoJson);
localStorage.setItem('cars', autoJsonb);

const tBodyId = document.getElementById('tBodyId');
let getCars = JSON.parse(localStorage.getItem('cars'));
let btnNum = 0;

function createSlice() {
 let slice1,
 slice2;
 if (btnNum) {
     slice1 = btnNum * 10;
     slice2 = (btnNum + 1) * 10;
 } else {
     slice1 = 0;
     slice2 = 10;
 }
    let getTableArr = getCars.slice(slice1, slice2);
    tBodyId.innerHTML = "";
    getTableArr.forEach((el) => createTableBody (el));
}

createSlice();

function createTableBody (el) {
    const row = document.createElement('tr');
    const boxBrand = document.createElement('th');
    boxBrand.innerHTML = el.Brand;
    const boxModel = document.createElement('th');
    boxModel.innerHTML = el.Model;
    const boxDate = document.createElement('th');
    boxDate.innerHTML = el.Date;
    const boxColor = document.createElement('th');
    boxColor.innerHTML = el.Color;
    const boxTransmission = document.createElement('th');
    boxTransmission.innerHTML = el.Transmission;
    const boxHP = document.createElement('th');
    boxHP.innerHTML = el.Horsepower + 'hp';
    row.appendChild(boxBrand);
    row.appendChild(boxModel);
    row.appendChild(boxDate);
    row.appendChild(boxColor);
    row.appendChild(boxTransmission);
    row.appendChild(boxHP);
    tBodyId.appendChild(row)
}



let numOfTables = getCars.length / 10 > Math.floor(getCars.length / 10) ? Math.floor(getCars.length / 10) + 1 : getCars.length / 10;


const buttonsDiv = document.getElementById('buttonsDiv');


for (let i = 0; i < numOfTables; i++) {
    const button = document.createElement('input');
    button.type = 'button';
    button.value = `${i + 1}`;
    button.addEventListener('click', () => {buttonClick(i)});
    button.classList.add('button');
    buttonsDiv.appendChild(button);
}

function buttonClick(e) {
    btnNum = e;
    createSlice(btnNum);
}

document.getElementById('back').addEventListener('click', () => {
    if (btnNum) {
        btnNum --;
        createSlice(btnNum);
    }
})

document.getElementById('next').addEventListener('click', () => {
    if (btnNum < numOfTables - 1) {
        btnNum++ ;
        createSlice(btnNum);
    }
})