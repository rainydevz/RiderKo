/* ================================================= */
/* DEMO USERS */
/* ================================================= */

const users = [

    {
        username:"Admin",
        password:"1234"
    },

    {
        username:"Riderko",
        password:"1234"
    },

    {
        username:"Ron",
        password:"1234"
    },

    {
        username:"Jha",
        password:"1234"
    },

    {
        username:"Customer",
        password:"1234"
    },

    {
        username:"BASC",
        password:"1234"
    },

    {
        username:"Raniel",
        password:"1234"
    },

    {
        username:"Edjay",
        password:"1234"
    },

    {
        username:"Melvin",
        password:"1234"
    },

    {
        username:"Kiara",
        password:"1234"
    },

    {
        username:"Lilian",
        password:"1234"
    },

    {
        username:"Davey",
        password:"1234"
    },

    {
        username:"Marco",
        password:"1234"
    },

    {
        username:"Jhayden",
        password:"1234"
    }

];


/* ================================================= */
/* VARIABLES */
/* ================================================= */

let currentUser = "";

let selectedService = "";

let selectedRestaurant = "";

let selectedPayment = "";

let orderCount = 0;

let currentReference = "";

let currentTotal = 50;

let restaurantOrder = [];


/* ================================================= */
/* DELIVERY LOCATION CHOICES */
/* ================================================= */

const municipalities = {

    "Bulacan": [
        "Angat",
        "Balagtas",
        "Baliwag",
        "Bocaue",
        "Bulakan",
        "Bustos",
        "Calumpit",
        "Doña Remedios Trinidad",
        "Guiguinto",
        "Hagonoy",
        "Malolos",
        "Marilao",
        "Meycauayan",
        "Norzagaray",
        "Obando",
        "Pandi",
        "Paombong",
        "Plaridel",
        "Pulilan",
        "San Ildefonso",
        "San Jose del Monte",
        "San Miguel",
        "San Rafael",
        "Santa Maria"
    ],

    "Pampanga": [
        "Angeles",
        "Apalit",
        "Arayat",
        "Bacolor",
        "Floridablanca",
        "Guagua",
        "Lubao",
        "Mabalacat",
        "Mexico",
        "San Fernando",
        "San Simon"
    ],

    "Nueva Ecija": [
        "Cabanatuan",
        "Gapan",
        "Palayan",
        "San Jose",
        "Talavera"
    ],

    "Laguna": [
        "Biñan",
        "Cabuyao",
        "Calamba",
        "Los Baños",
        "San Pablo",
        "Santa Rosa",
        "Santa Cruz"
    ],

    "Rizal": [
        "Antipolo",
        "Binangonan",
        "Cainta",
        "Rodriguez",
        "San Mateo",
        "Taytay"
    ],

    "Baguio": [
        "Baguio City"
    ],

    "Metro Manila": [
        "Caloocan",
        "Las Piñas",
        "Makati",
        "Malabon",
        "Mandaluyong",
        "Manila",
        "Marikina",
        "Muntinlupa",
        "Navotas",
        "Parañaque",
        "Pasay",
        "Pasig",
        "Quezon City",
        "San Juan",
        "Taguig",
        "Valenzuela"
    ]

};


/* ================================================= */
/* RESTAURANT PICKUP LOCATIONS */
/* ================================================= */

/*
    Each restaurant has its own
    pickup location choices.

    You can edit these locations
    whenever you want.
*/

const restaurantPickupLocations = {

    "Jollibee": [

        "Jollibee Baliwag",
        "Jollibee Pulilan",
        "Jollibee Plaridel",
        "Jollibee Malolos",
        "Jollibee Bocaue",
        "Jollibee Santa Maria",
        "Jollibee Meycauayan"

    ],


    "Mang Inasal": [

        "Mang Inasal Baliwag",
        "Mang Inasal Pulilan",
        "Mang Inasal Plaridel",
        "Mang Inasal Malolos",
        "Mang Inasal Bocaue",
        "Mang Inasal Santa Maria",
        "Mang Inasal Meycauayan"

    ],


    "Chowking": [

        "Chowking Baliwag",
        "Chowking Pulilan",
        "Chowking Plaridel",
        "Chowking Malolos",
        "Chowking Bocaue",
        "Chowking Santa Maria",
        "Chowking Meycauayan"

    ],


    "KFC": [

        "KFC Baliwag",
        "KFC Pulilan",
        "KFC Plaridel",
        "KFC Malolos",
        "KFC Bocaue",
        "KFC Santa Maria",
        "KFC Meycauayan"

    ],


    "McDonalds": [

        "McDonald's Baliwag",
        "McDonald's Pulilan",
        "McDonald's Plaridel",
        "McDonald's Malolos",
        "McDonald's Bocaue",
        "McDonald's Santa Maria",
        "McDonald's Meycauayan"

    ],


    "Burger King": [

        "Burger King Baliwag",
        "Burger King Pulilan",
        "Burger King Plaridel",
        "Burger King Malolos",
        "Burger King Bocaue",
        "Burger King Santa Maria",
        "Burger King Meycauayan"

    ],


    "Greenwich": [

        "Greenwich Baliwag",
        "Greenwich Pulilan",
        "Greenwich Plaridel",
        "Greenwich Malolos",
        "Greenwich Bocaue",
        "Greenwich Santa Maria",
        "Greenwich Meycauayan"

    ],


    "Popeyes": [

        "Popeyes Baliwag",
        "Popeyes Pulilan",
        "Popeyes Plaridel",
        "Popeyes Malolos",
        "Popeyes Bocaue",
        "Popeyes Santa Maria",
        "Popeyes Meycauayan"

    ]

};


/* ================================================= */
/* LOAD MUNICIPALITIES */
/* ================================================= */

function loadMunicipalities(){

    const province =
        document
        .getElementById("deliveryProvince")
        .value;


    const municipality =
        document
        .getElementById("deliveryMunicipality");


    municipality.innerHTML = `

        <option value="">
            Choose Municipality / City
        </option>

    `;


    municipality.disabled = true;


    document
    .getElementById("delivery")
    .value = "";


    if(province === ""){

        return;

    }


    const locations =
        municipalities[province];


    if(!locations){

        return;

    }


    locations.forEach(function(location){

        const option =
            document.createElement("option");


        option.value =
            location;


        option.textContent =
            location;


        municipality.appendChild(option);

    });


    municipality.disabled = false;

}


/* ================================================= */
/* UPDATE DELIVERY ADDRESS */
/* ================================================= */

function updateDeliveryAddress(){

    const province =
        document
        .getElementById("deliveryProvince")
        .value;


    const municipality =
        document
        .getElementById("deliveryMunicipality")
        .value;


    const delivery =
        document
        .getElementById("delivery");


    if(province && municipality){

        delivery.value =
            municipality +
            ", " +
            province;

    }

    else if(province){

        delivery.value =
            province;

    }

    else{

        delivery.value = "";

    }

}


/* ================================================= */
/* LOAD RESTAURANT PICKUP LOCATIONS */
/* ================================================= */

function loadRestaurantPickupLocations(){

    const pickupSelect =
        document.getElementById(
            "restaurantPickup"
        );


    const pickupInput =
        document.getElementById(
            "pickup"
        );


    if(!pickupSelect || !pickupInput){

        return;

    }


    /*
        Clear old restaurant locations.
    */

    pickupSelect.innerHTML = `

        <option value="">
            Choose Pickup Location
        </option>

    `;


    /*
        Restaurant service.
    */

    if(selectedService === "Restaurant"){

        pickupSelect.style.display =
            "block";


        pickupInput.style.display =
            "none";

    }

    else{

        pickupSelect.style.display =
            "none";


        pickupInput.style.display =
            "block";


        return;

    }


    /*
        Get locations belonging
        to selected restaurant.
    */

    const locations =
        restaurantPickupLocations[
            selectedRestaurant
        ];


    if(!locations){

        return;

    }


    /*
        Add locations to dropdown.
    */

    locations.forEach(function(location){

        const option =
            document.createElement("option");


        option.value =
            location;


        option.textContent =
            location;


        pickupSelect.appendChild(option);

    });

}


/* ================================================= */
/* SELECT RESTAURANT PICKUP LOCATION */
/* ================================================= */

function selectRestaurantPickup(){

    const pickupSelect =
        document.getElementById(
            "restaurantPickup"
        );


    const pickupInput =
        document.getElementById(
            "pickup"
        );


    if(!pickupSelect || !pickupInput){

        return;

    }


    /*
        Copy selected restaurant
        location into pickup value.
    */

    pickupInput.value =
        pickupSelect.value;

}


/* ================================================= */
/* RESTAURANT MENUS */
/* ================================================= */

const restaurantMenus = {

    "Jollibee": [

        {
            name:"Chickenjoy",
            price:99,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Burger Steak",
            price:75,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Yumburger",
            price:45,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Jolly Spaghetti",
            price:75,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Peach Mango Pie",
            price:45,
            quantities:[1,2,3,4,5]
        }

    ],


    "Mang Inasal": [

        {
            name:"Chicken Inasal",
            price:99,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Pork BBQ",
            price:85,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Palabok",
            price:75,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Halo-Halo",
            price:85,
            quantities:[1,2,3,4,5]
        }

    ],


    "Chowking": [

        {
            name:"Siomai",
            price:55,
            quantities:[3,6,12]
        },

        {
            name:"Siopao",
            price:45,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Chao Fan",
            price:75,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Pancit Canton",
            price:85,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Halo-Halo",
            price:80,
            quantities:[1,2,4,5]
        }

    ],


    "KFC": [

        {
            name:"1-PC Chicken Meal",
            price:120,
            quantities:[1,2,3,4,5]
        },

        {
            name:"2-PC Chicken Meal",
            price:190,
            quantities:[1,2,4,5]
        },

        {
            name:"Zinger",
            price:130,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Chicken Sandwich",
            price:110,
            quantities:[1,2,3,4,5]
        }

    ],


    "McDonalds": [

        {
            name:"McChicken",
            price:110,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Big Mac",
            price:160,
            quantities:[1,2,3,4,5]
        },

        {
            name:"McSpaghetti",
            price:75,
            quantities:[1,2,3,4,5]
        },

        {
            name:"McNuggets",
            price:100,
            quantities:[6,10,20]
        },

        {
            name:"Fries",
            price:70,
            quantities:[1,2,3,4,5]
        }

    ],


    "Burger King": [

        {
            name:"Whopper",
            price:170,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Cheeseburger",
            price:90,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Chicken Burger",
            price:120,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Fries",
            price:70,
            quantities:[1,2,3,4,5]
        }

    ],


    "Greenwich": [

        {
            name:"Hawaiian Overload Pizza",
            price:299,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Lasagna",
            price:120,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Chicken",
            price:110,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Spaghetti",
            price:100,
            quantities:[1,2,3,4,5]
        }

    ],


    "Popeyes": [

        {
            name:"Fried Chicken",
            price:120,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Chicken Sandwich",
            price:150,
            quantities:[1,2,3,4,5]
        },

        {
            name:"Chicken Tenders",
            price:130,
            quantities:[3,5,8]
        },

        {
            name:"Fries",
            price:70,
            quantities:[1,2,3,4,5]
        }

    ]

};


/* ================================================= */
/* PAYMENT SETTINGS */
/* ================================================= */

const gcashName = "Rider Ko";

const gcashNumber = "09123456789";


/* ================================================= */
/* DELIVERY FEE */
/* ================================================= */

const deliveryFee = 50;


/* ================================================= */
/* PAGE NAVIGATION */
/* ================================================= */

function showPage(id){

    document
    .querySelectorAll(".page")
    .forEach(page => {

        page.classList.remove("active");

    });


    const page =
        document.getElementById(id);


    if(page){

        page.classList.add("active");

    }


    /*
        Close mobile menu.
    */

    const menu =
        document.getElementById("mainMenu");


    if(menu){

        menu.classList.remove("show");

    }

}


/* ================================================= */
/* LOGIN */
/* ================================================= */

function login(){

    let username =
        document
        .getElementById("username")
        .value
        .trim();


    let password =
        document
        .getElementById("password")
        .value
        .trim();


    let account =
        users.find(user =>

            user.username === username &&
            user.password === password

        );


    if(account){

        currentUser =
            account.username;


        document
        .getElementById("loggedUser")
        .innerHTML =
            currentUser;


        document
        .getElementById("error")
        .innerHTML = "";


        showPage("dashboardPage");

    }

    else{

        document
        .getElementById("error")
        .innerHTML =
            "❌ Invalid Username or Password";

    }

}


/* ================================================= */
/* LOGOUT */
/* ================================================= */

function logout(){

    currentUser = "";

    selectedService = "";

    selectedRestaurant = "";

    selectedPayment = "";

    orderCount = 0;

    restaurantOrder = [];


    document
    .getElementById("username")
    .value = "";


    document
    .getElementById("password")
    .value = "";


    document
    .getElementById("error")
    .innerHTML = "";


    document
    .getElementById("orderCount")
    .innerHTML = "0";


    showPage("loginPage");

}


/* ================================================= */
/* SELECT SERVICE */
/* ================================================= */

function selectService(service){

    selectedService =
        service;


    /*
        RESTAURANT
    */

    if(service === "Restaurant"){

        selectedRestaurant = "";

        restaurantOrder = [];

        showPage("restaurantPage");

        return;

    }


    /*
        NON-RESTAURANT SERVICES
    */

    selectedRestaurant = "";

    restaurantOrder = [];


    /*
        Hide restaurant menu.
    */

    document
    .getElementById("restaurantMenuBox")
    .style.display = "none";


    /*
        Hide selected restaurant.
    */

    document
    .getElementById("selectedRestaurantBox")
    .style.display = "none";


    /*
        Normal pickup input.
    */

    document
    .getElementById("pickup")
    .style.display = "block";


    document
    .getElementById("restaurantPickup")
    .style.display = "none";


    /*
        Service title.
    */

    document
    .getElementById("serviceTitle")
    .innerHTML =
        "🏍 " + service;


    /*
        Clear booking form.
    */

    clearBookingForm();


    /*
        Placeholders.
    */

    const pickupInput =
        document.getElementById("pickup");


    const deliveryInput =
        document.getElementById("delivery");


    const itemInput =
        document.getElementById("item");


    const deliveryLabel =
        document.getElementById("deliveryLabel");


    deliveryLabel.innerHTML =
        "Delivery Address";


    if(service === "Pasabay"){

        pickupInput.placeholder =
            "Example: SM Baliwag / Puregold / House";


        deliveryInput.placeholder =
            "Example: Brgy. Tibag, Baliwag, Bulacan";


        itemInput.placeholder =
            "Example: Medicine, documents, food, or other item";


        deliveryLabel.innerHTML =
            "Destination Address";

    }


    else if(service === "Grocery"){

        deliveryLabel.innerHTML =
            "Delivery Address";


        pickupInput.placeholder =
            "Example: Puregold Baliwag / SM / Grocery Store";


        deliveryInput.placeholder =
            "Example: Brgy. Poblacion, Baliwag, Bulacan";


        itemInput.placeholder =
            "Example: Rice, eggs, canned goods, vegetables";

    }


    else if(service === "Parcel"){

        pickupInput.placeholder =
            "Example: Sender's House, Baliwag, Bulacan";


        deliveryInput.placeholder =
            "Example: Recipient's House, Malolos, Bulacan";


        itemInput.placeholder =
            "Example: Small box, documents, clothes";

    }


    else if(service === "Shopping"){

        pickupInput.placeholder =
            "Example: SM Baliwag / Robinsons / Shopping Mall";


        deliveryInput.placeholder =
            "Example: Brgy. Tangos, Baliwag, Bulacan";


        itemInput.placeholder =
            "Example: Clothes, shoes, school supplies";

    }


    else if(service === "Same-Day Delivery"){

        pickupInput.placeholder =
            "Example: Store or pickup location";


        deliveryInput.placeholder =
            "Example: Complete delivery address";


        itemInput.placeholder =
            "Example: Package or item to deliver";

    }


    /*
        Show booking page.
    */

    showPage("bookingPage");

}


/* ================================================= */
/* SHOW RESTAURANT MENU */
/* ================================================= */

function showRestaurantMenu(){

    const menuBox =
        document.getElementById(
            "restaurantMenuBox"
        );


    const menu =
        document.getElementById(
            "restaurantMenu"
        );


    const restaurant =
        selectedRestaurant;


    if(
        selectedService !== "Restaurant" ||
        !restaurantMenus[restaurant]
    ){

        menuBox.style.display =
            "none";

        return;

    }


    menuBox.style.display =
        "block";


    menu.innerHTML = "";


    restaurantMenus[restaurant].forEach(
        function(food,index){

            const card =
                document.createElement("div");


            card.className =
                "menu-item-card";


            let quantityOptions = "";


            food.quantities.forEach(
                function(quantity){

                    quantityOptions += `

                        <option value="${quantity}">
                            ${quantity} pcs
                        </option>

                    `;

                }
            );


            card.innerHTML = `

                <div class="menu-item-top">

                    <span class="menu-item-name">

                        ${food.name}

                    </span>

                    <span class="menu-item-price">

                        ₱${food.price.toFixed(2)}

                    </span>

                </div>


                <div class="menu-item-controls">

                    <select
                        id="menuQty${index}"
                    >

                        ${quantityOptions}

                    </select>

                </div>


                <button
                    class="menu-add-btn"
                    onclick="addRestaurantItem(${index})"
                >

                    ➕ Add to Order

                </button>

            `;


            menu.appendChild(card);

        }
    );


    updateRestaurantOrderDisplay();

}


/* ================================================= */
/* ADD RESTAURANT ITEM */
/* ================================================= */

function addRestaurantItem(index){

    const menu =
        restaurantMenus[
            selectedRestaurant
        ];


    if(!menu){

        return;

    }


    const food =
        menu[index];


    const quantity =
        parseInt(

            document
            .getElementById(
                "menuQty" + index
            )
            .value

        );


    if(!food || !quantity){

        return;

    }


    const existing =
        restaurantOrder.find(
            item =>
                item.name === food.name
        );


    if(existing){

        existing.quantity +=
            quantity;

    }

    else{

        restaurantOrder.push({

            name:food.name,

            price:food.price,

            quantity:quantity

        });

    }


    updateRestaurantOrderDisplay();

}


/* ================================================= */
/* REMOVE RESTAURANT ITEM */
/* ================================================= */

function removeRestaurantItem(index){

    restaurantOrder.splice(
        index,
        1
    );


    updateRestaurantOrderDisplay();

}


/* ================================================= */
/* UPDATE RESTAURANT ORDER */
/* ================================================= */

function updateRestaurantOrderDisplay(){

    const list =
        document.getElementById(
            "orderList"
        );


    const itemInput =
        document.getElementById(
            "item"
        );


    if(
        !restaurantOrder ||
        restaurantOrder.length === 0
    ){

        list.innerHTML = `

            <p style="
                color:#777;
                text-align:center;
                padding:10px;
            ">

                No items added yet.

            </p>

        `;


        itemInput.value = "";


        document
        .getElementById("orderAmount")
        .value = "0";


        calculateTotal();


        return;

    }


    let total = 0;

    let itemText = "";


    list.innerHTML = "";


    restaurantOrder.forEach(
        function(order,index){

            const subtotal =
                order.price *
                order.quantity;


            total +=
                subtotal;


            itemText +=

                order.quantity +
                " pcs " +
                order.name;


            if(
                index <
                restaurantOrder.length - 1
            ){

                itemText += ", ";

            }


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "order-list-item";


            row.innerHTML = `

                <div>

                    <strong>
                        ${order.quantity} pcs
                    </strong>

                    ${order.name}

                    <br>

                    <span style="
                        color:#4e8500;
                        font-size:13px;
                    ">

                        ₱${subtotal.toFixed(2)}

                    </span>

                </div>


                <button
                    class="remove-order-btn"
                    onclick="removeRestaurantItem(${index})"
                >

                    🗑 Remove

                </button>

            `;


            list.appendChild(row);

        }
    );


    itemInput.value =
        itemText;


    document
    .getElementById("orderAmount")
    .value =
        total.toFixed(2);


    calculateTotal();

}


/* ================================================= */
/* SELECT RESTAURANT */
/* ================================================= */

function selectRestaurant(restaurant){

    selectedRestaurant =
        restaurant;


    selectedService =
        "Restaurant";


    /*
        Restaurant title.
    */

    document
    .getElementById("serviceTitle")
    .innerHTML =
        "🍔 " + restaurant;


    /*
        Selected restaurant box.
    */

    const box =
        document.getElementById(
            "selectedRestaurantBox"
        );


    box.innerHTML =

        "🍔 Selected Restaurant: " +

        "<strong>" +

        restaurant +

        "</strong>";


    box.style.display =
        "block";


    /*
        Clear previous form.
    */

    clearBookingForm();


    /*
        Load restaurant pickup
        locations AFTER clearing.
    */

    loadRestaurantPickupLocations();


    /*
        Reset order.
    */

    restaurantOrder = [];


    /*
        Show restaurant menu.
    */

    showRestaurantMenu();


    /*
        Show booking page.
    */

    showPage("bookingPage");

}


/* ================================================= */
/* CLEAR BOOKING FORM */
/* ================================================= */

function clearBookingForm(){

    document
    .getElementById("restaurantMenuBox")
    .style.display =
        "none";


    /*
        Normal pickup.
    */

    const pickup =
        document.getElementById(
            "pickup"
        );


    /*
        Restaurant pickup.
    */

    const restaurantPickup =
        document.getElementById(
            "restaurantPickup"
        );


    pickup.value = "";


    if(restaurantPickup){

        restaurantPickup.innerHTML = `

            <option value="">
                Choose Pickup Location
            </option>

        `;

        restaurantPickup.value = "";

    }


    /*
        Show correct pickup field.
    */

    if(selectedService === "Restaurant"){

        pickup.style.display =
            "none";


        if(restaurantPickup){

            restaurantPickup.style.display =
                "block";

        }

    }

    else{

        pickup.style.display =
            "block";


        if(restaurantPickup){

            restaurantPickup.style.display =
                "none";

        }

    }


    document
    .getElementById("delivery")
    .value = "";


    document
    .getElementById("item")
    .value = "";


    document
    .getElementById("orderAmount")
    .value = "0";


    document
    .getElementById("contact")
    .value = "";


    document
    .getElementById("instructions")
    .value = "";


    /*
        Reset delivery selections.
    */

    const province =
        document.getElementById(
            "deliveryProvince"
        );


    const municipality =
        document.getElementById(
            "deliveryMunicipality"
        );


    if(province){

        province.value = "";

    }


    if(municipality){

        municipality.innerHTML = `

            <option value="">
                Choose Municipality / City
            </option>

        `;

        municipality.disabled =
            true;

    }


    /*
        Reset payment.
    */

    selectedPayment = "";


    document
    .getElementById("qrPaymentOption")
    .classList
    .remove("selected");


    document
    .getElementById("codPaymentOption")
    .classList
    .remove("selected");


    calculateTotal();

}


/* ================================================= */
/* PAYMENT SELECTION */
/* ================================================= */

function selectPayment(payment){

    selectedPayment =
        payment;


    document
    .getElementById("qrPaymentOption")
    .classList
    .remove("selected");


    document
    .getElementById("codPaymentOption")
    .classList
    .remove("selected");


    if(payment === "QR Payment"){

        document
        .getElementById("qrPaymentOption")
        .classList
        .add("selected");

    }


    if(payment === "Cash / COD"){

        document
        .getElementById("codPaymentOption")
        .classList
        .add("selected");

    }

}


/* ================================================= */
/* CALCULATE TOTAL */
/* ================================================= */

function calculateTotal(){

    const amountInput =
        document.getElementById(
            "orderAmount"
        );


    if(!amountInput){

        return;

    }


    let amount =
        parseFloat(
            amountInput.value
        );


    if(
        isNaN(amount) ||
        amount < 0
    ){

        amount = 0;

    }


    currentTotal =
        amount +
        deliveryFee;


    document
    .getElementById("displayOrderAmount")
    .innerHTML =
        "₱" +
        amount.toFixed(2);


    document
    .getElementById("displayTotal")
    .innerHTML =
        "₱" +
        currentTotal.toFixed(2);

}


/* ================================================= */
/* BACK FROM BOOKING */
/* ================================================= */

function backFromBooking(){

    if(
        selectedService ===
        "Restaurant"
    ){

        showPage(
            "restaurantPage"
        );

    }

    else{

        showPage(
            "dashboardPage"
        );

    }

}


/* ================================================= */
/* PREVIEW ORDER */
/* ================================================= */

function previewOrder(){

    /*
        Get pickup location.

        Restaurant = dropdown
        Other services = text input
    */

    let pickup = "";


    if(
        selectedService ===
        "Restaurant"
    ){

        pickup =
            document
            .getElementById(
                "restaurantPickup"
            )
            .value
            .trim();

    }

    else{

        pickup =
            document
            .getElementById(
                "pickup"
            )
            .value
            .trim();

    }


    let delivery =
        document
        .getElementById("delivery")
        .value
        .trim();


    let item =
        document
        .getElementById("item")
        .value
        .trim();


    let orderAmount =
        parseFloat(
            document
            .getElementById("orderAmount")
            .value
        );


    let contact =
        document
        .getElementById("contact")
        .value
        .trim();


    let instructions =
        document
        .getElementById("instructions")
        .value
        .trim();


    /*
        VALIDATION
    */

    if(pickup === ""){

        alert(
            "Please choose a pickup location."
        );

        return;

    }


    if(delivery === ""){

        alert(
            "Please enter the delivery address."
        );

        return;

    }


    if(item === ""){

        alert(
            "Please enter the item/order."
        );

        return;

    }


    if(
        isNaN(orderAmount) ||
        orderAmount < 0
    ){

        alert(
            "Please enter a valid order amount."
        );

        return;

    }


    if(contact === ""){

        alert(
            "Please enter your contact number."
        );

        return;

    }


    if(selectedPayment === ""){

        alert(
            "Please select a payment method."
        );

        return;

    }


    currentTotal =
        orderAmount +
        deliveryFee;


    /*
        CREATE PREVIEW
    */

    let preview = `

        <strong>
            Service
        </strong>

        <br>

        ${selectedService}

        <br><br>

    `;


    if(
        selectedService ===
        "Restaurant"
    ){

        preview += `

            <strong>
                Restaurant
            </strong>

            <br>

            ${selectedRestaurant}

            <br><br>

        `;

    }


    preview += `

        <strong>
            Pickup Location
        </strong>

        <br>

        ${pickup}

        <br><br>


        <strong>
            Delivery Address
        </strong>

        <br>

        ${delivery}

        <br><br>


        <strong>
            Item / Order
        </strong>

        <br>

        ${item}

        <br><br>


        <strong>
            Order Amount
        </strong>

        <br>

        ₱${orderAmount.toFixed(2)}

        <br><br>


        <strong>
            Delivery Fee
        </strong>

        <br>

        ₱${deliveryFee.toFixed(2)}

        <br><br>


        <strong>
            Total Amount
        </strong>

        <br>

        <span style="
            color:#4e8500;
            font-size:20px;
            font-weight:bold;
        ">

            ₱${currentTotal.toFixed(2)}

        </span>

        <br><br>


        <strong>
            Contact Number
        </strong>

        <br>

        ${contact}

        <br><br>


        <strong>
            Payment Method
        </strong>

        <br>

        ${selectedPayment}

        <br><br>


        <strong>
            Instructions
        </strong>

        <br>

        ${instructions || "None"}

    `;


    document
    .getElementById("previewInfo")
    .innerHTML =
        preview;


    showPage(
        "previewPage"
    );

}


/* ================================================= */
/* CONFIRM ORDER */
/* ================================================= */

function confirmOrder(){

    orderCount++;


    document
    .getElementById("orderCount")
    .innerHTML =
        orderCount;


    /*
        CREATE REFERENCE
    */

    currentReference =

        "RK-" +

        new Date()
        .getTime()
        .toString()
        .slice(-6);


    /*
        QR PAYMENT
    */

    if(
        selectedPayment ===
        "QR Payment"
    ){

        showQRPayment();

        return;

    }


    /*
        COD PAYMENT
    */

    if(
        selectedPayment ===
        "Cash / COD"
    ){

        showCODPayment();

        return;

    }

}


/* ================================================= */
/* SHOW QR PAYMENT */
/* ================================================= */

function showQRPayment(){

    document
    .getElementById("qrAmount")
    .innerHTML =
        "₱" +
        currentTotal.toFixed(2);


    document
    .getElementById("qrReference")
    .innerHTML =

        "Booking Reference: " +

        currentReference;


    /*
        CLEAR OLD QR
    */

    document
    .getElementById("qrcode")
    .innerHTML = "";


    /*
        QR DATA
    */

    const qrData =

        "RIDER KO PAYMENT" +

        "|GCash:" +
        gcashNumber +

        "|Name:" +
        gcashName +

        "|Amount:" +
        currentTotal.toFixed(2) +

        "|Reference:" +
        currentReference;


    if(
        typeof QRCode ===
        "undefined"
    ){

        alert(
            "QR Code library could not load."
        );

        return;

    }


    new QRCode(

        document
        .getElementById("qrcode"),

        {

            text:qrData,

            width:230,

            height:230,

            colorDark:"#111111",

            colorLight:"#ffffff",

            correctLevel:
                QRCode.CorrectLevel.H

        }

    );


    showPage(
        "qrPaymentPage"
    );

}


/* ================================================= */
/* FINISH QR PAYMENT */
/* ================================================= */

function finishQRPayment(){

    document
    .getElementById("referenceNumber")
    .innerHTML =

        "Booking Reference: " +

        currentReference;


    document
    .getElementById("successPaymentInfo")
    .innerHTML = `

        <strong>
            Payment Method
        </strong>

        <br>

        💳 QR Payment

        <br><br>


        <strong>
            Amount Paid
        </strong>

        <br>

        ₱${currentTotal.toFixed(2)}

        <br><br>


        <strong>
            Payment Status
        </strong>

        <br>

        <span style="
            color:#4e8500;
            font-weight:bold;
        ">

            Payment Submitted

        </span>

        <br><br>


        <strong>
            Reference
        </strong>

        <br>

        ${currentReference}

    `;


    showPage(
        "successPage"
    );

}


/* ================================================= */
/* SHOW COD PAYMENT */
/* ================================================= */

function showCODPayment(){

    document
    .getElementById("codSummary")
    .innerHTML = `

        <strong>
            Payment Method
        </strong>

        <br>

        💵 Cash / COD

        <br><br>


        <strong>
            Total Amount to Pay
        </strong>

        <br>

        <span style="
            color:#4e8500;
            font-size:22px;
            font-weight:bold;
        ">

            ₱${currentTotal.toFixed(2)}

        </span>

        <br><br>


        <strong>
            Booking Reference
        </strong>

        <br>

        ${currentReference}

        <br><br>


        Please prepare the payment for
        the Rider upon delivery.

    `;


    showPage(
        "codPage"
    );

}


/* ================================================= */
/* FINISH COD PAYMENT */
/* ================================================= */

function finishCODPayment(){

    document
    .getElementById("referenceNumber")
    .innerHTML =

        "Booking Reference: " +

        currentReference;


    document
    .getElementById("successPaymentInfo")
    .innerHTML = `

        <strong>
            Payment Method
        </strong>

        <br>

        💵 Cash / COD

        <br><br>


        <strong>
            Total Amount
        </strong>

        <br>

        ₱${currentTotal.toFixed(2)}

        <br><br>


        <strong>
            Payment Status
        </strong>

        <br>

        <span style="
            color:#c58b00;
            font-weight:bold;
        ">

            Cash on Delivery

        </span>

        <br><br>


        <strong>
            Reference
        </strong>

        <br>

        ${currentReference}

    `;


    showPage(
        "successPage"
    );

}


/* ================================================= */
/* LIVE RIDER TRACKING */
/* GOOGLE MAP + STREET VIEW + GPS MOVEMENT */
/* ================================================= */

let trackingMap = null;

let customerMarker = null;

let riderMarker = null;

let riderPath = null;

let riderMovementTimer = null;

let riderRouteIndex = 0;


/* ================================================= */
/* DEMO RIDER GPS ROUTE */
/* ================================================= */

const demoRiderRoute = [

    {
        lat:14.7942,
        lng:120.8797
    },

    {
        lat:14.7958,
        lng:120.8821
    },

    {
        lat:14.7974,
        lng:120.8848
    },

    {
        lat:14.7992,
        lng:120.8874
    },

    {
        lat:14.8011,
        lng:120.8900
    },

    {
        lat:14.8030,
        lng:120.8925
    },

    {
        lat:14.8050,
        lng:120.8950
    },

    {
        lat:14.8071,
        lng:120.8975
    },

    {
        lat:14.8090,
        lng:120.9000
    },

    {
        lat:14.8112,
        lng:120.9024
    },

    {
        lat:14.8212,
        lng:120.9044
    },

    {
        lat:14.8312,
        lng:120.9064
    },

    {
        lat:14.8412,
        lng:120.9084
    },

    {
        lat:14.8512,
        lng:120.9099
    },

    {
        lat:14.8612,
        lng:120.9114
    },

    {
        lat:14.8712,
        lng:120.9129
    },

    {
        lat:14.8812,
        lng:120.9144
    },

    {
        lat:14.8912,
        lng:120.9159
    },

    {
        lat:14.9012,
        lng:120.9174
    },

    {
        lat:14.9112,
        lng:120.9189
    },

    {
        lat:14.9212,
        lng:120.9204
    },

    {
        lat:14.9312,
        lng:120.9219
    },

    {
        lat:14.9412,
        lng:120.9234
    },

    {
        lat:14.9512,
        lng:120.9249
    }

];


/* ================================================= */
/* SHOW TRACKING PAGE */
/* ================================================= */

function showTrackingPage(){

    if(currentReference === ""){

        alert(
            "No active order found."
        );

        return;

    }


    document
    .getElementById("trackingReference")
    .innerHTML =
        currentReference;


    document
    .getElementById("deliveryStatus")
    .innerHTML =
        "🏍 Rider is on the way";


    document
    .getElementById("trackingStatus")
    .innerHTML =
        "🟢 Rider is on the way";


    document
    .getElementById("riderName")
    .innerHTML =
        "Rider Ko";


    document
    .getElementById("distance")
    .innerHTML =
        "Calculating...";


    document
    .getElementById("eta")
    .innerHTML =
        "Calculating...";


    showPage(
        "trackingPage"
    );


    setTimeout(

        function(){

            initMap();

        },

        400

    );

}


/* ================================================= */
/* INITIALIZE GOOGLE MAP */
/* ================================================= */

function initMap(){

    const mapElement =
        document.getElementById(
            "map"
        );


    if(!mapElement){

        return;

    }


    if(riderMovementTimer){

        clearInterval(
            riderMovementTimer
        );

        riderMovementTimer = null;

    }


    riderRouteIndex = 0;


    if(
        typeof google === "undefined" ||
        !google.maps
    ){

        mapElement.innerHTML = `

            <div style="
                height:100%;
                display:flex;
                align-items:center;
                justify-content:center;
                text-align:center;
                color:#555;
                padding:20px;
                background:#f5f5f5;
            ">

                <div>

                    <i
                        class="fas fa-map-location-dot"
                        style="
                            font-size:45px;
                            color:#75b900;
                            margin-bottom:10px;
                        "
                    ></i>

                    <br><br>

                    <strong>
                        Google Maps could not load.
                    </strong>

                    <br><br>

                    Please check your
                    Google Maps API key.

                </div>

            </div>

        `;

        return;

    }


    const riderStart =
        demoRiderRoute[0];


    trackingMap =
        new google.maps.Map(

            mapElement,

            {

                center:riderStart,

                zoom:15,

                mapTypeId:"roadmap",

                zoomControl:true,

                fullscreenControl:true,

                mapTypeControl:false,

                streetViewControl:true,

                streetViewControlOptions:{

                    position:
                        google.maps.ControlPosition.RIGHT_BOTTOM

                }

            }

        );


    /*
        Rider marker.
    */

    riderMarker =
        new google.maps.Marker({

            position:riderStart,

            map:trackingMap,

            title:
                "Rider Ko Rider",

            label:{

                text:"🏍️",

                fontSize:"22px"

            },

            animation:
                google.maps.Animation.DROP

        });


    /*
        Rider path.
    */

    riderPath =
        new google.maps.Polyline({

            path:[riderStart],

            geodesic:true,

            strokeColor:"#a8ff00",

            strokeOpacity:1,

            strokeWeight:5,

            map:trackingMap

        });


    updateTrackingInformation();


    startRiderMovement();


    createStreetViewButton();

}


/* ================================================= */
/* RIDER MOVEMENT */
/* ================================================= */

function startRiderMovement(){

    if(riderMovementTimer){

        clearInterval(
            riderMovementTimer
        );

    }


    riderMovementTimer =

        setInterval(

            function(){

                moveRider();

            },

            2000

        );

}


/* ================================================= */
/* MOVE RIDER */
/* ================================================= */

function moveRider(){

    if(!riderMarker){

        return;

    }


    if(
        riderRouteIndex >=
        demoRiderRoute.length - 1
    ){

        if(riderMovementTimer){

            clearInterval(
                riderMovementTimer
            );

            riderMovementTimer = null;

        }


        document
        .getElementById("trackingStatus")
        .innerHTML =
            "🟢 Rider has arrived";


        document
        .getElementById("deliveryStatus")
        .innerHTML =
            "📦 Rider has arrived at the destination";


        document
        .getElementById("eta")
        .innerHTML =
            "Arrived";


        return;

    }


    riderRouteIndex++;


    const nextPosition =
        demoRiderRoute[
            riderRouteIndex
        ];


    riderMarker.setPosition(
        nextPosition
    );


    if(riderPath){

        const path =
            riderPath.getPath();


        path.push(
            nextPosition
        );

    }


    trackingMap.panTo(
        nextPosition
    );


    updateTrackingInformation();


    document
    .getElementById("trackingStatus")
    .innerHTML =
        "🟢 Rider is moving";


    document
    .getElementById("deliveryStatus")
    .innerHTML =
        "🏍️ Rider is on the way";

}


/* ================================================= */
/* DISTANCE + ETA */
/* ================================================= */

function updateTrackingInformation(){

    if(!riderMarker){

        return;

    }


    if(
        typeof google === "undefined" ||
        !google.maps ||
        !google.maps.geometry
    ){

        return;

    }


    const riderPosition =
        riderMarker.getPosition();


    if(!riderPosition){

        return;

    }


    const destination =
        demoRiderRoute[
            demoRiderRoute.length - 1
        ];


    const destinationPosition =

        new google.maps.LatLng(

            destination.lat,

            destination.lng

        );


    const distanceMeters =

        google.maps.geometry.spherical
        .computeDistanceBetween(

            riderPosition,

            destinationPosition

        );


    const distanceKm =
        distanceMeters / 1000;


    const averageSpeed =
        25;


    let etaMinutes =

        Math.ceil(

            (
                distanceKm /
                averageSpeed
            ) * 60

        );


    if(etaMinutes < 1){

        etaMinutes = 1;

    }


    document
    .getElementById("distance")
    .innerHTML =

        distanceKm.toFixed(2) +
        " km";


    document
    .getElementById("eta")
    .innerHTML =

        etaMinutes +
        " minutes";

}


/* ================================================= */
/* CUSTOMER LOCATION */
/* ================================================= */

function startCustomerTracking(){

    if(!navigator.geolocation){

        alert(
            "Your browser does not support location services."
        );

        return;

    }


    navigator.geolocation.getCurrentPosition(

        function(position){

            const customerLocation = {

                lat:
                    position.coords.latitude,

                lng:
                    position.coords.longitude

            };


            if(!trackingMap){

                initMap();

            }


            if(
                typeof google !== "undefined" &&
                google.maps
            ){

                if(customerMarker){

                    customerMarker.setMap(
                        null
                    );

                }


                customerMarker =

                    new google.maps.Marker({

                        position:
                            customerLocation,

                        map:
                            trackingMap,

                        title:
                            "Your Location",

                        icon:{

                            url:
                            "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"

                        }

                    });


                trackingMap.setCenter(
                    customerLocation
                );


                trackingMap.setZoom(
                    15
                );


                document
                .getElementById("trackingStatus")
                .innerHTML =
                    "🔵 Your location is shown on the map";

            }

        },

        function(error){

            alert(

                "Unable to get your location. " +

                "Please allow location access " +

                "in your browser."

            );

        },

        {

            enableHighAccuracy:true,

            timeout:10000,

            maximumAge:0

        }

    );

}


/* ================================================= */
/* CUSTOM STREET VIEW BUTTON */
/* ================================================= */

function createStreetViewButton(){

    const mapElement =
        document.getElementById(
            "map"
        );


    if(!mapElement){

        return;

    }


    const existing =
        document.getElementById(
            "streetViewButton"
        );


    if(existing){

        existing.remove();

    }


    const button =
        document.createElement(
            "button"
        );


    button.id =
        "streetViewButton";


    button.innerHTML =
        "👤 Open Street View";


    button.style.width =
        "100%";


    button.style.marginTop =
        "10px";


    button.style.background =
        "#333";


    button.style.color =
        "white";


    button.style.padding =
        "13px";


    button.style.borderRadius =
        "12px";


    button.style.border =
        "none";


    button.style.cursor =
        "pointer";


    button.onclick =
        function(){

            openStreetView();

        };


    mapElement
    .parentNode
    .insertBefore(

        button,

        mapElement.nextSibling

    );

}


/* ================================================= */
/* OPEN STREET VIEW */
/* ================================================= */

function openStreetView(){

    if(
        !trackingMap ||
        !riderMarker
    ){

        alert(
            "The rider location is not available yet."
        );

        return;

    }


    if(
        typeof google === "undefined" ||
        !google.maps
    ){

        alert(
            "Google Maps is not available."
        );

        return;

    }


    const riderPosition =
        riderMarker.getPosition();


    const streetViewService =
        new google.maps.StreetViewService();


    streetViewService.getPanorama(

        {

            location:
                riderPosition,

            radius:100,

            source:
                google.maps.StreetViewSource.OUTDOOR

        },

        function(data,status){

            if(
                status ===
                google.maps.StreetViewStatus.OK
            ){

                const panorama =
                    trackingMap.getStreetView();


                panorama.setPosition(
                    data.location.latLng
                );


                panorama.setPov({

                    heading:0,

                    pitch:0

                });


                panorama.setVisible(
                    true
                );


                document
                .getElementById("trackingStatus")
                .innerHTML =
                    "👤 Street View active";

            }

            else{

                alert(

                    "Street View imagery is not available " +

                    "near the rider's current location."

                );

            }

        }

    );

}


/* ================================================= */
/* CLOSE STREET VIEW */
/* ================================================= */

function closeStreetView(){

    if(trackingMap){

        const panorama =
            trackingMap.getStreetView();


        panorama.setVisible(
            false
        );

    }

}


/* ================================================= */
/* STOP RIDER TRACKING */
/* ================================================= */

function stopRiderTracking(){

    if(riderMovementTimer){

        clearInterval(
            riderMovementTimer
        );


        riderMovementTimer = null;

    }

}


/* ================================================= */
/* MENU BAR */
/* ================================================= */

function toggleMenu(){

    const menu =
        document.getElementById(
            "mainMenu"
        );


    if(menu){

        menu.classList.toggle(
            "show"
        );

    }

}


/* ================================================= */
/* ENTER KEY LOGIN */
/* ================================================= */

const usernameInput =
    document.getElementById(
        "username"
    );


if(usernameInput){

    usernameInput.addEventListener(
        "keydown",
        function(event){

            if(event.key === "Enter"){

                event.preventDefault();

                login();

            }

        }
    );

}


const passwordInput =
    document.getElementById(
        "password"
    );


if(passwordInput){

    passwordInput.addEventListener(
        "keydown",
        function(event){

            if(event.key === "Enter"){

                event.preventDefault();

                login();

            }

        }
    );

}


/* ================================================= */
/* INITIAL TOTAL */
/* ================================================= */

calculateTotal();