const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        // if (e.target.id === 'grey') {
        //     const c1 = window.getComputedStyle(e.target).backgroundColor;
        //     console.log(c1)
        //     body.style.backgroundColor = c1
        // }
        // if (e.target.id === 'white') {
        //     const c1 = window.getComputedStyle(e.target).backgroundColor;
        //     console.log(c1)
        //     body.style.backgroundColor = c1;
        // }
        // if (e.target.id === 'blue') {
        //     const c1 = window.getComputedStyle(e.target).backgroundColor;
        //     console.log(c1)
        //     body.style.backgroundColor = c1
        // }
        // if (e.target.id === 'yellow') {
        //     const c1 = window.getComputedStyle(e.target).backgroundColor;
        //     console.log(c1)
        //     body.style.backgroundColor = c1
        // }

        //easy way
        const c1 = window.getComputedStyle(e.target).backgroundColor;
        body.style.backgroundColor = c1;

    })
});