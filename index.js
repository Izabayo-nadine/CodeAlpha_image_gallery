const items = document.querySelectorAll('.items .item');  
const prev = document.querySelector('#btn1');             
const next = document.querySelector('#btn2');             
const maxItems = 8;                                       
let index = 1;                                            

// Event listeners for the prev and next buttons
prev.addEventListener('click', function() {
    if (index > 1) {
        index--;
        showItems();
    }
});

next.addEventListener('click', function() {
    if (index < Math.ceil(items.length / maxItems)) {  // Ensure we don't exceed the last page
        index++;
        showItems();
    }
});

// Function to show only the items on the current page
function showItems() {
    // Hide all items initially
    items.forEach(item => item.classList.add('hide'));
    const start = (index - 1) * maxItems;
    const end = start + maxItems;

    
    for (let i = start; i < end && i < items.length; i++) {
        items[i].classList.remove('hide');
    }

    prev.disabled = index === 1;
    next.disabled = index === Math.ceil(items.length / maxItems);
}




const modal = document.getElementById("fullscreenModal");
const modalImg = document.getElementById("fullImage");

// Function to open the modal with the clicked image
function openModal(imgSrc) {
    modal.style.display = "block";
    modalImg.src = imgSrc;
}


function closeModal() {
    modal.style.display = "none";
}


document.querySelectorAll(".item img").forEach((img) => {
    img.addEventListener("click", () => {
        openModal(img.src);
    });
});

// Close modal if user clicks outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});






window.onload = showItems;
