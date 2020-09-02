import './styles/index.css';
import { auto } from "../carsJson/autoJson.js";
let autoA = auto;

let autoB = autoA.map((el) => {
    el.id = Math.floor(Math.random() * 999999);
    return el
})


let autoJson = JSON.stringify(autoB);
if (localStorage.getItem('cars') == null) {
    localStorage.setItem('cars', autoJson);
}


const brand = document.getElementById('brand');
const model = document.getElementById('model');
const date = document.getElementById('date');
const color = document.getElementById('color');
const transmission = document.getElementById('transmission');
const hp = document.getElementById('hp');
const del = document.getElementById('del');


const container = document.getElementById('container');
let getCars = JSON.parse(localStorage.getItem('cars'));
let btnNum = 0;
let numOfTables = Math.ceil(getCars.length / 10);

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
     clearTable();
    getTableArr.forEach((el) => createTableBody(el));
    initDeleteListeners();
    initPaging();
}


function clearTable () {
    brand.innerHTML = "";
    model.innerHTML = "";
    date.innerHTML = "";
    color.innerHTML = "";
    transmission.innerHTML = "";
    hp.innerHTML = "";
    del.innerHTML = ""
}

createSlice();

function createTableBody(el) {
    const boxBrand = document.createElement('div');
    boxBrand.innerHTML = el.Brand;
    const boxModel = document.createElement('div');
    boxModel.innerHTML = el.Model;
    boxModel.classList.add('model');
    const boxDate = document.createElement('div');
    boxDate.innerHTML = el.Date;
    const boxColor = document.createElement('div');
    boxColor.innerHTML = el.Color;
    const boxTransmission = document.createElement('div');
    boxTransmission.innerHTML = el.Transmission;
    const boxHP = document.createElement('div');
    boxHP.innerHTML = el.Horsepower + 'hp';
    const boxDelete = document.createElement('div');
    boxDelete.setAttribute('id', el.id)
    boxDelete.innerHTML = '<i><img src="../svg/delete.svg" style="width: 12px" alt=""></i>';
    brand.appendChild(boxBrand);
    model.appendChild(boxModel);
    date.appendChild(boxDate);
    color.appendChild(boxColor);
    transmission.appendChild(boxTransmission);
    hp.appendChild(boxHP);
    del.appendChild(boxDelete);
}

function initPaging() {
    const buttonsDiv = document.getElementById('buttonsDiv');
        buttonsDiv.innerHTML = '';
    for (let i = 0; i < numOfTables; i++) {
        const button = document.createElement('input');
        button.type = 'button';
        button.value = `${i + 1}`;
        button.addEventListener('click', () => { buttonClick(i) });
        button.classList.add('button');
        buttonsDiv.appendChild(button);
    }
}

function buttonClick(e) {
    btnNum = e;
    createSlice(btnNum);
}

document.getElementById('back').addEventListener('click', () => {
    if (btnNum) {
        btnNum--;
        createSlice(btnNum);
    }
})

document.getElementById('next').addEventListener('click', () => {
    if (btnNum < numOfTables - 1) {
        btnNum++;
        createSlice(btnNum);
    }
})

function initDeleteListeners() {
    const deleteImg = document.querySelectorAll('img');
    deleteImg.forEach((el) => {
        el.addEventListener('click', () => {
            const deleteWindow = document.createElement('div');
            deleteWindow.classList.add('deleteWindow');
            const text = document.createElement('p');
            text.innerHTML = 'Are you sure you want to delete?';
            const btnDiv = document.createElement('div');
            btnDiv.classList.add('btnDiv');


            const deleteBtn = document.createElement('input');
            deleteBtn.type = 'button';
            deleteBtn.value = 'Delete';
            deleteBtn.addEventListener('click', oldChild => {
                const closestTr = el.closest('div');
                getCars = getCars.filter( (obj) => {
                    return obj.id !== +closestTr.id;
                });

                localStorage.setItem('cars', JSON.stringify(getCars));

                createSlice();
                let deleteWindow = document.getElementsByClassName('deleteWindow');
                while (deleteWindow.length > 0) deleteWindow[0].remove();
            });
            
            
            const cancelBtn = document.createElement('input');
            cancelBtn.type = 'button';
            cancelBtn.value = 'Cancel';
            cancelBtn.addEventListener('click', () => {
                let deleteWindow = document.getElementsByClassName('deleteWindow');
                while (deleteWindow.length > 0) deleteWindow[0].remove();
            });
            deleteWindow.appendChild(text);
            btnDiv.appendChild(deleteBtn);
            btnDiv.appendChild(cancelBtn);
            deleteWindow.appendChild(btnDiv);
            container.appendChild(deleteWindow);
        })
    })
}

initDeleteListeners();


const drag = document.querySelectorAll('.drag');
const table = document.querySelector('.table');

drag.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', () =>{
        draggable.classList.remove('dragging')
    })
})

table.addEventListener('dragover', () =>{
    const draggable = document.querySelector('.drag');
    table.appendChild(draggable);
})