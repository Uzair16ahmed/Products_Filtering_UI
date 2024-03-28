const products = [
    {
      name: 'Sony Playstation 5',
      url: 'Images/playstation_5.png',
      category: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung Galaxy',
      url: 'Images/samsung_galaxy.png',
      category: 'smartphones',
      price: 399.99,
    },
    {
      name: 'Cannon EOS Camera',
      url: 'Images/cannon_eos_camera.png',
      category: 'cameras',
      price: 749.99,
    },
    {
      name: 'Sony A7 Camera',
      url: 'Images/sony_a7_camera.png',
      category: 'cameras',
      price: 1999.99,
    },
    {
      name: 'LG TV',
      url: 'Images/lg_tv.png',
      category: 'televisions',
      price: 799.99,
    },
    {
      name: 'Nintendo Switch',
      url: 'Images/nintendo_switch.png',
      category: 'games',
      price: 299.99,
    },
    {
      name: 'Xbox Series X',
      url: 'Images/xbox_series_x.png',
      category: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung TV',
      url: 'Images/samsung_tv.png',
      category: 'televisions',
      price: 1099.99,
    },
    {
      name: 'Google Pixel',
      url: 'Images/google_pixel.png',
      category: 'smartphones',
      price: 499.99,
    },
    {
      name: 'Sony ZV1F Camera',
      url: 'Images/sony_zv1f_camera.png',
      category: 'cameras',
      price: 799.99,
    },
    {
      name: 'Toshiba TV',
      url: 'Images/toshiba_tv.png',
      category: 'televisions',
      price: 499.99,
    },
    {
      name: 'iPhone 14',
      url: 'Images/iphone_14.png',
      category: 'smartphones',
      price: 999.99,
    },
  ];


  // Select DOM Elements

  const productsWrapper = document.getElementById('products-wrapper');
  const checkboxes = document.querySelectorAll('check');
  const filtersContainer = document.getElementById('filters-container');
  const searchInput = document.getElementById('search');
  const cartCount = document.getElementById('cart-count');


  // Init cart item count

  let cartItemCount = 0;
  
  // Init product element array
  const productsElements = [];

  // Loop over products and create an element
  products.forEach((product) => {
    const productElement = document.createElement('div');

    productElement.className = 'item space-y-2';

    productElement.innerHTML = `
                <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
                    <img 
                        src="${product.url}"
                        alt="${product.name}"
                        class="w-full h-full object-cover"
                    />
                    <button class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">
                        Add to Cart
                    </button>
                </div>
                <p class="text-xl">${product.name}</p>
                <strong>${product.price.toLocaleString()}</strong>
                `;

    productsElements.push(productElement);
    productsWrapper.appendChild(productElement)
});