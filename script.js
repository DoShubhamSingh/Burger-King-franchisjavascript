const orderFoodButton = document.getElementById('order-food');
const menuItems = document.getElementsByName('food');
const orderStatusSection = document.getElementById('order-status');
const loadingAnimation = document.getElementById('loading-animation');
const foodImageSection = document.getElementById('food-image');
const orderIdElement = document.getElementById('order-id');

let orderId = 0;

orderFoodButton.addEventListener('click', () => {
    const selectedItems = [];
    menuItems.forEach((item) => {
        if (item.checked) {
            selectedItems.push(item.id);
        }
    });

    if (selectedItems.length === 0) {
        alert('Please select at least one food item!');
        return;
    }

    orderId++;
    orderIdElement.textContent = `Order ID: #${orderId}`;

    loadingAnimation.style.display = 'block';
    foodImageSection.style.display = 'none';

    const promise = new Promise((resolve) => {
        const randomTime = Math.floor(Math.random() * 5000) + 1000; // random time between 1-5 seconds
        setTimeout(() => {
            resolve();
        }, randomTime);
    });

    promise.then(() => {
        loadingAnimation.style.display = 'none';
        foodImageSection.style.display = 'block';

        const foodImages = {
            whopper: 'whopper.jpg',
            'big-king': 'Big King.jpg',
            fries: 'fries.webp',
            drink: 'drink.png'
        };

        foodImageSection.innerHTML = ''; // clear the food image section

        selectedItems.forEach((item) => {
            const foodImage = document.createElement('img');
            foodImage.src = foodImages[item];
            foodImage.alt = item;
            foodImageSection.appendChild(foodImage);
        });
    });
});
