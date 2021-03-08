// Get Dom elements
const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');


// Add Event listeners

// 1. Toggle the Nav
toggle.addEventListener('click', () => 
    document.body.classList.toggle('show-nav')
);

// 2. Show the modal
open.addEventListener('click', ()=>

        modal.classList.add('show-modal')
);

//3. Close the modal
close.addEventListener('click', ()=>
    modal.classList.remove('show-modal')
);


// 4. Close the modal on Click outside the modal
window.addEventListener('click', e =>
    e.target === modal ? modal.classList.remove('show-modal') : false
);