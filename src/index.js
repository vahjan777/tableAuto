import './styles/index.css';
import {auto} from "../carsJson/autoJson.js";

let autoArrId = auto.map((el) => {
    el.id = Math.floor(Math.random() * 9999999);
    return el;
});

let autoJson = JSON.stringify(autoArrId);
localStorage.setItem('cars', autoJson);

const addBrand = document.getElementById('addBrand');
const addDate = document.getElementById('addDate');
const addTransmission = document.getElementById('addTransmission');
const addModel = document.getElementById('addModel');
const addColor = document.getElementById('addColor');
const addHP = document.getElementById('addHP');
const createNewCar = document.getElementById('createNewCar');

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
let getTableArr;
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
    getTableArr = getCars.slice(slice1, slice2);
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
    del.innerHTML = "";
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
    boxDelete.setAttribute('id', el.id);
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
    createSlice();
}

document.getElementById('back').addEventListener('click', () => {
    if(btnNum) {
        btnNum--;
        createSlice();
    }
});


document.getElementById('next').addEventListener('click', () => {
    if(btnNum < numOfTables - 1) {
        btnNum++;
        createSlice();
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
            deleteBtn.addEventListener('click', () => {
                const closestTr = el.closest('div');
                getCars = getCars.filter( (obj) => {
                    return obj.id !== +closestTr.id;
                });

                localStorage.setItem('cars', JSON.stringify(getCars));
                numOfTables = Math.ceil(getCars.length / 10);
                initPaging();
                createSlice();
                if (getTableArr.length === 0) {
                    btnNum--;
                    createSlice();
                } else {
                    createSlice();
                }
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

//drag and drop

const drag = document.querySelectorAll('.drag');
const table = document.querySelector('.table');

drag.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    })
    draggable.addEventListener('dragend', () =>{
        draggable.classList.remove('dragging');
    })
});

table.addEventListener('dragover', () =>{
    const draggable = document.querySelector('.drag');
    table.appendChild(draggable);
});

//add new car

const addNewCar = document.getElementById('addNewCar');
const addCarWidow = document.getElementById('addCarWidow');
addNewCar.addEventListener('click', () => {
    addCarWidow.style.display = 'block';
})


    createNewCar.addEventListener('click', ()=> {
        const newCarObj = {};
        newCarObj.Brand = addBrand.value;
        newCarObj.Date = addDate.value;
        newCarObj.Transmission = addTransmission.value;
        newCarObj.Model = addModel.value;
        newCarObj.Color = addColor.value;
        newCarObj.Horsepower = addHP.value;
        newCarObj.id = Math.floor(Math.random() * 999999);

        getCars.unshift (newCarObj);
        localStorage.setItem('cars', JSON.stringify(getCars));
        numOfTables = Math.ceil(getCars.length / 10);
        createSlice();
        initPaging();
        addCarWidow.style.display = 'none';
        addBrand.value = '';
        addDate.value = '';
        addTransmission.value = '';
        addModel.value = '';
        addColor.value = '';
        addHP.value = '';
    })

