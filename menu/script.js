const container = document.getElementById('Drinks_menu')
const list = [
    {
        drink_name: 'Cocacola',
        price: '10k',
        image: 'https://pvmarthanoi.com.vn/wp-content/uploads/2023/02/nuoc-ngot-coca-cola-330ml-202001131632421470.png'
    },
    {
        drink_name: 'Monster',
        price: '10k',
        image: 'https://shop.annam-gourmet.com/pub/media/catalog/product/cache/1448a3ea0e9fd57e6bb9f03edcc069b2/F/1/F140191_8efa.png'
    },
    {
        drink_name: 'Pepsi',
        price: '8k',
        image: 'https://satrafoods.com.vn/uploads/san-pham-cung-loai/8934588012228.jpg'
    },
    {
        drink_name: 'Red Bull',
        price: '12k',
        image: 'https://www.redbull.com/pt-pt/energydrink/energydrink/energydrink/1/14'
    },
    {
        drink_name: 'Fanta',
        price: '9k',
        image: 'https://www.coca-colacompany.com/content/dam/journey/us/en/brands/images/fanta/Fanta_Orange_Product.png'
    },
    {
        drink_name: 'Rockstar',
        price: '11k',
        image: 'https://www.rockstarenergy.com/assets/img/products/rockstar/rockstar-blueberry-pomegranate-16oz.png'
    },
    {
        drink_name: 'Mountain Dew',
        price: '9k',
        image: 'https://www.pepsicobeveragefacts.com/Home/ImageDownload?id=61105520-7bc8-4ad3-af8f-01910d7a4f5d'
    },
    {
        drink_name: 'Twister',
        price: '10k',
        image: 'https://www.drpepper.com/images/default-source/product/dr-pepper/dr-pepper-12oz-2.png'
    },
    {
        drink_name: '7UP',
        price: '8k',
        image: 'https://www.pepsicobeveragefacts.com/Home/ImageDownload?id=85ae657f-ba91-4d46-9d7e-eb2f9f6ff495'
    },
    {
        drink_name: 'Nutri Boost',
        price: '13k',
        image: 'https://www.bangenergy.com/images/11186-bang-rainbow-unicorn--16-9-ounce_1_1.png'
    }
];

for (const drink of list) {
    const newElement = document.createElement('h2');
    const newImageElement = document.createElement('img');

    newElement.innerHTML = `${drink.drink_name} - ${drink.price}`;
    newImageElement.src = drink.image;
    newImageElement.style.width = '200px';

    // Apply CSS styles for both vertical and horizontal centering
    newElement.style.display = 'flex';
    newElement.style.alignItems = 'center';
    newElement.style.justifyContent = 'center'; // Horizontal centering

    newElement.appendChild(newImageElement);
    container.appendChild(newElement);
}