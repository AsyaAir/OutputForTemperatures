// 1. Создание массива городов
const cities = ['Санкт-Петербург', 'Нью-Йорк', 'Хельсинки', 'Амстердам', 'Сан-Франциско', 'Вирджиния Бич', 'Полоцк'];

// 2. Создание объекта, который будет хранить температуры для каждого города
let temperatures = {};

// 3. Выведение диалогового окна с текстовым полем, куда пользователь может ввести данные по температуре в конкретном городе
for (let i = 0; i < cities.length; i++) {
    let city = cities[i];
    let userInput = prompt(`Введите температуру для города ${city}:`);

    if (userInput === null) {
        console.log("Пользователь нажал 'Отмена'."); // проверка, вернул ли prompt() значение null (нажатие кнопки "отмена")
        continue; // пропускаем, если пользователь отменил
    }

    let temp = parseFloat(userInput);
    if (!isNaN(temp)) {
        temperatures[city] = temp;
    } else {
        console.log(`Неверное значение для города ${city}`);
    }
}


// что с этим куском делать?!
    else if (userInput === '') {
    // проверка, ввёл ли пользователь пустую строку (нажал конпку "OK"), не заполнив текстовое поле
    console.log("Пользователь ничего не ввёл.");
    } else {
    // преобразование введенных пользователем температуры из строк в числа
    let temp = parseFloat(userInput);
    if (!isNaN(temp)) {
        temperatures[city] = temp;
    } else {
        console.log(`Неверное значение для города ${city}`);
    } else {
    // если предыдущие два условия не сработали, то пользователь ввёл какой-то текст
    console.log("Пользователь ввёл: " + userInput);
    }
    // сохранение введенной пользователем темпеатуры в массив temperatures
    temperatures[city] = userInput; 
}

// проверка, какой получился массив из введенных пользователм данных
console.log("Введённые температуры для городов:", temperatures);
// 4. Создание списка, в котором будет отображаться информация о каждом городе и его температуре
// cсылка на элемент <p class="temp_list> в HTML, куда добавляется список
const pElement = document.querySelector('.temp_list');
// элемент <ul> для списка
const cityList = document.createElement('ul');
// Перебор массива temperatures и создание элементов списка для каждого города и его температуры
for (const city in temperatures) {
    const listItem = document.createElement('li');
    listItem.textContent = `Температура в ${city}: ${temperatures[city]}°C`;
    cityList.appendChild(listItem); // метод, который добавляет элемент listItem (элемент <li>, представляющий один город и его температуру) в конец списка cityList.
}
// Добавляем список в элемент <p class="temp_list>
pElement.appendChild(cityList);
// 5. Создание списка максимальной и минимальной температур из массива с температурами
const tempsArray = Object.values(temperatures);
if (tempsArray.length > 0) {
    const maxTemp = Math.max(...tempsArray);
    const minTemp = Math.min(...tempsArray);
// 6. Вывод максимальной и минимальной температуры
const minMaxElement = document.querySelector('.min_max_temp');
minMaxElement.textContent = `Максимальная температура: ${maxTemp}°C, Минимальная температура: ${minTemp}°C`;
} else {
    console.log("Температуры не введены.");
}

// Обновлен
// 3. Ввод температур пользователем
for (let i = 0; i < cities.length; i++) {
    let city = cities[i];
    let userInput = prompt(`Введите температуру для города ${city}:`);

    if (userInput === null) {
        console.log("Пользователь нажал 'Отмена'.");
        continue; // пропускаем, если пользователь отменил
    }

    let temp = parseFloat(userInput);
    if (!isNaN(temp)) {
        temperatures[city] = temp;
    } else {
        console.log(`Неверное значение для города ${city}`);
    }
}

// 4. Вывод списка городов и температур
const pElement = document.querySelector('.temp_list');
const cityList = document.createElement('ul');

for (const city in temperatures) {
    const listItem = document.createElement('li');
    listItem.textContent = `Температура в ${city}: ${temperatures[city]}°C`;
    cityList.appendChild(listItem);
}

pElement.appendChild(cityList);

// 5. Вычисление минимальной и максимальной температуры
const tempsArray = Object.values(temperatures);

if (tempsArray.length > 0) {
    const maxTemp = Math.max(...tempsArray);
    const minTemp = Math.min(...tempsArray);

    // 6. Вывод максимальной и минимальной температур
    const minMaxElement = document.querySelector('.min_max_temp');
    minMaxElement.textContent = `Максимальная температура: ${maxTemp}°C, Минимальная температура: ${minTemp}°C`;
} else {
    console.log("Температуры не введены.");
}