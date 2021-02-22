const renderHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header-container');

    const headerName = document.createElement('div');
    headerName.classList.add('header-name');
    headerName.textContent = 'PORTRADA';
    header.appendChild(headerName);

    return header;
}

export {renderHeader};