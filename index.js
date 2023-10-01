const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const wrong = document.querySelector('.wrong');



function calculateDays() {
    const birthDate = document.getElementById("bday").valueAsDate; // получаем дату из инпута
    const today = new Date(); // получаем сегодняшнюю дату

    // проверяем выбрал ли пользователь дату
    if (birthDate == undefined) {
        wrong.innerHTML = `Введите дату дня рождения`;
    } else {
        wrong.innerHTML = ``;
        birthDate.setHours(0, 0, 0, 0); // обнуляем время ДР, чтобы не мешало при подсчёте дней
        today.setHours(0, 0, 0, 0); // обнуляем сегодняшнее время, чтобы не мешало при подсчёте дней
        let diffInDays = (birthDate - today) / (1000 * 3600 * 24); // считаем разницу в днях

        if (diffInDays < 0) {
            wrong.innerHTML = `День рождения уже прошёл :(`; // предупреждаем, если дата раньше сегодняшней даты
        } else {
            wrong.innerHTML = ``;

            // Запускаем изменения склонения слова "дни"
            let days;
            let remains = diffInDays % 10;
            if (diffInDays >= 11 && diffInDays <= 20) {
                days = 'дней';
            }
            else if (remains === 1) {
                days = 'день';
            }
            else if (remains >= 2 && remains <= 4) {
                days = 'дня';
            }
            else if ((remains >= 5 && remains <= 9) || remains === 0) {
                days = 'дней';
            }

            result.innerHTML = `До дня рождения ${diffInDays} ${days}`; // получаем текстовый результат
        }
    }

};


button.addEventListener('click', calculateDays);


