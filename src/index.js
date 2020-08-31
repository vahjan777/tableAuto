import './styles/index.css';
import { auto } from "../carsJson/autoJson.js";
let autoJson = JSON.stringify(auto);
if (localStorage.getItem('cars') == null) {
    localStorage.setItem('cars', autoJson);
}


const container = document.getElementById('container');
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
    getTableArr.forEach((el) => createTableBody(el));
    initDeleteListeners();
    initPaging();
}

createSlice();

function createTableBody(el) {
    const row = document.createElement('tr');
    row.setAttribute('draggable', 'true')
    row.classList.add('row');
    const boxBrand = document.createElement('th');
    boxBrand.innerHTML = el.Brand;
    const boxModel = document.createElement('th');
    boxModel.innerHTML = el.Model;
    boxModel.classList.add('model');
    const boxDate = document.createElement('th');
    boxDate.innerHTML = el.Date;
    const boxColor = document.createElement('th');
    boxColor.innerHTML = el.Color;
    const boxTransmission = document.createElement('th');
    boxTransmission.innerHTML = el.Transmission;
    const boxHP = document.createElement('th');
    boxHP.innerHTML = el.Horsepower + 'hp';
    const boxDelete = document.createElement('th');
    boxDelete.innerHTML = '<i><img src="../svg/delete.svg" style="width: 20px" alt=""></i>';
    row.appendChild(boxBrand);
    row.appendChild(boxModel);
    row.appendChild(boxDate);
    row.appendChild(boxColor);
    row.appendChild(boxTransmission);
    row.appendChild(boxHP);
    row.appendChild(boxDelete);
    tBodyId.appendChild(row);
}


function initPaging() {
    let numOfTables = Math.ceil(getCars.length / 10);


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
            deleteBtn.addEventListener('click', () => {
                const closestTr = el.closest('tr');
                var _model = null;
                for (var i = 0; i < closestTr.childNodes.length; i++) {
                    if (closestTr.childNodes[i].className == "model") {
                        _model = closestTr.childNodes[i].innerHTML;
                        break;
                    }
                }
                getCars = getCars.filter(function (obj) {
                    return obj.Model !== _model;
                });

                localStorage.setItem('cars', JSON.stringify(getCars));

                createSlice();
                removeElementsByClass('deleteWindow');
            });
            const cancelBtn = document.createElement('input');
            cancelBtn.type = 'button';
            cancelBtn.value = 'Cancel';
            cancelBtn.addEventListener('click', () => {
                removeElementsByClass('deleteWindow');
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



// drag and drop

tBodyId.addEventListener("dragover", () => { dragOver() });
tBodyId.addEventListener("drop", () => { dragDrop() });
const drag = document.querySelectorAll('.row');



function dragOver(event) {
    console.log('dragover');
    event.preventDefault();
}

function dragDrop() {
    console.log('drop');
    this.append(drag);
}

// TODO: move to separate file
function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}