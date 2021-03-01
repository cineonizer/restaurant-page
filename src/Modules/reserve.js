const renderReserve = () => {
    const reserve = document.createElement('div');
    reserve.classList.add('reserve-container');

    const information = document.createElement('div');
    information.classList.add('information');
    reserve.appendChild(information);

    const map = document.createElement('iframe');
    map.id = 'map';
    map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8852690969175!2d-118.38764448467724!3d34.0211558268149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b98f6b241001%3A0xa30db044c014a22e!2s8660%20Hayden%20Pl%2C%20Culver%20City%2C%20CA%2090232!5e0!3m2!1sen!2sus!4v1614399168143!5m2!1sen!2sus");
    information.appendChild(map);

    const div = document.createElement('div');

    const span = document.createElement('span');
    span.innerText = '8660 Hayden Pl \n Culver City, CA 90232';
    div.appendChild(span);

    div.appendChild(document.createElement('hr'));

    const phone = document.createElement('div');
    phone.textContent = '(424) 555-0199'
    div.appendChild(phone);

    div.appendChild(document.createElement('hr'));

    const select = document.createElement('select');
    select.name = 'open-hours';
    select.id = 'open-hours';

    div.appendChild(select);

    createOptions(select, 'sunday', 'Sunday: Closed');
    createOptions(select, 'monday', 'Monday: Closed');
    createOptions(select, 'tuesday', 'Tuesday: 9:00 AM - 3:00 PM');
    createOptions(select, 'wednesday', 'Wednesday: 9:00 AM - 3:00 PM');
    createOptions(select, 'thursday', 'Thursday: 9:00 AM - 3:00 PM');
    createOptions(select, 'friday', 'Friday: 9:00 AM -  3:00 PM');
    createOptions(select, 'saturday', 'Saturday: 9:00 AM - 3:00 PM');

    information.appendChild(div);

    const form = document.createElement('div');
    form.classList.add('form-container');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'PORTRADA';
    titleContainer.appendChild(title);

    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = '$225 PER GUEST';
    titleContainer.appendChild(price);

    form.appendChild(titleContainer);

    const guestContainer = document.createElement('div');
    guestContainer.classList.add('guest-container');

    const guest = document.createElement('div');
    guest.classList.add('guest');
    guest.textContent = '1 guest'

    guestContainer.appendChild(guest);

    form.appendChild(guestContainer);

    const buttonContainer = document.createElement('div');
    guestContainer.appendChild(buttonContainer);

    const minusBtn = document.createElement('button');
    minusBtn.textContent = '-';
    buttonContainer.appendChild(minusBtn);

    const plusBtn = document.createElement('button');
    plusBtn.textContent = '+';
    buttonContainer.appendChild(plusBtn);

    clickButtons(minusBtn, plusBtn, guest);

    reserve.appendChild(form);

    const date = document.createElement('input');
    date.type = 'date';
    date.id = 'date';
    form.appendChild(date);

    const time = document.createElement('input');
    time.id = 'date'
    time.type = 'time';
    time.min = '09:00';
    time.max = '15:00';
    form.appendChild(time);

    const submit = document.createElement('input');
    submit.id = 'submit';
    submit.type = 'submit';
    submit.value = 'Reserve';
    form.appendChild(submit);
    
    return reserve;
}

const createOptions = (select, val, txt) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const curDay = new Date();

    const option = document.createElement('option');
    option.value = val;
    option.textContent = txt;
    if (days[curDay.getDay()] === val) option.selected = true;

    select.appendChild(option);
}

const clickButtons = (minusBtn, plusBtn, guest) => {
    let numOfGuest = 1;

    document.addEventListener('click', (e) => {
        if (e.target === minusBtn || e.target === plusBtn) {
            if (e.target === minusBtn) {
                if (numOfGuest === 1) return;
                numOfGuest--;
            }
            if (e.target === plusBtn) {
                if (numOfGuest === 5) return;
                numOfGuest++;
            }
            if (numOfGuest === 1) guest.textContent = numOfGuest + ' guest';
            else guest.textContent = numOfGuest + ' guests';
        };
    });
}

export {renderReserve}