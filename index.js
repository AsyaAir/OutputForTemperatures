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

    // получаем значения от пользователя через prompt() строковые.  Проверка корректности введенных данных, и исключение их, если это не числа.
    let temp = parseFloat(userInput); // преобразование введенных пользователем температуры из строк в числа
    if (!isNaN(temp)) {
        temperatures[city] = temp;
    } else {
        console.log(`Неверное значение для города ${city}`);
    }
}

// проверка, какой получился массив из введенных пользователм данных
console.log("Введённые температуры для городов:", temperatures);

// 4. Вывод списка городов и температур
const pElement = document.querySelector('.temp_list'); // cсылка на элемент <p class="temp_list> в HTML, куда добавляется список
const cityList = document.createElement('ul'); // элемент <ul> для списка

// Перебор массива temperatures и создание элементов списка для каждого города и его температуры
for (const city in temperatures) {
    const listItem = document.createElement('li');
    listItem.textContent = `Температура в ${city}: ${temperatures[city]}°C`;
    cityList.appendChild(listItem); // метод, который добавляет элемент listItem (элемент <li>, представляющий один город и его температуру) в конец списка cityList.
}

pElement.appendChild(cityList); // Добавляем список в элемент <p class="temp_list>

// 5. Вычисление и вывод минимальной и максимальной температуры 
const tempsArray = Object.values(temperatures);

if (tempsArray.length > 0) {
    const maxTemp = Math.max(...tempsArray);
    const minTemp = Math.min(...tempsArray);

    // вывод максимальной и минимальной температур
    const minMaxElement = document.querySelector('.min_max_temp');
    minMaxElement.textContent = `Максимальная температура: ${maxTemp}°C, Минимальная температура: ${minTemp}°C`;
} else {
    console.log("Температуры не введены.");
}