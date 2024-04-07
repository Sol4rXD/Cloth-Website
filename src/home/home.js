import { productById } from '../data/product.js';

const MEN = productById(1);
const SS24 = productById(2);

window.addEventListener('scroll', () => {
    const pic2 = document.querySelector('.pic-2');
    const pic2Position = pic2.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (pic2Position < screenHeight * 0.5) {
        console.log("change to men header");
        document.querySelector('.container h2').textContent = MEN.header;
        document.querySelector('.text-inform p').textContent = MEN.inform;
    } else {
        console.log("change to SS24");
        document.querySelector('.container h2').textContent = SS24.header;
        document.querySelector('.text-inform p').textContent = SS24.inform;
    }
});
