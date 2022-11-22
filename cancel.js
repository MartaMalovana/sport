function cancel () {
    //Follow the cancel-button
    const cancel = document.querySelector('.cancel');
    cancel.addEventListener('submit', cancelSession);

    function cancelSession () {
        //Check the inputs
        const name = document.querySelector('[name=name]').value;
        const year = document.querySelector('[name="year"]').value;
        const inputCity = document.querySelector('[name="city"]').value;
        const inputSport = document.querySelector('[name="sport"]').value;
        // Show message
        const message = `Шкода, що Ви не захотіли ввести свій(ю) ${name === '' && 'ім\'я'}`;
        console.log(message);
    }
};

cancel();