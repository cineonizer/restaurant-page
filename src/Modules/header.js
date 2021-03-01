const renderHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header-container');

    const headerName = document.createElement('div');
    headerName.classList.add('header-name');
    headerName.textContent = 'PORTRADA';
    header.appendChild(headerName);

    const headerNav = document.createElement('div');
    headerNav.classList.add('header-nav');
    header.appendChild(headerNav);

    const homeBtn = document.createElement('div');
    homeBtn.textContent = 'HOME';
    headerNav.appendChild(homeBtn);

    const menuBtn = document.createElement('div');
    menuBtn.textContent = 'MENU';
    headerNav.appendChild(menuBtn);

    const reserveBtn = document.createElement('div');
    reserveBtn.textContent = 'RESERVE';
    headerNav.appendChild(reserveBtn);

    return header;
}

export {renderHeader}