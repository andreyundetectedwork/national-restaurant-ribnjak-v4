/**
 * National Restaurant Ribnjak - Main JS Engine
 * Handles Language Switching, Menu Rendering, Reviews & Interactions
 */

// Global state
let currentLang = 'sr';

// Dictionary for Static Translations
const i18nData = {
    sr: {
        nav_about: "O nama",
        nav_menu: "Jelovnik",
        nav_reviews: "Utisci",
        nav_contact: "Kontakt",
        hero_reviews: "(230+ recenzija)",
        hero_title: "Svježa pastrmka i tradicionalni crnogorski ukusi pored vode",
        hero_tagline: "Uživajte u obroku u hladu vinove loze uz šum prirodnog potoka i miris domaće kuhinje.",
        hero_btn_menu: "Pogledajte Jelovnik",
        hero_btn_call: "Rezervišite Sto",
        about_subtitle: "Prirodni ambijent i tradicija",
        about_title: "Kutak mira i domaćeg ukusa u Podgorici",
        img_terrace: "Terasa u hladu pored potoka",
        img_interior: "Topli drveni enterijer sa kaminom",
        img_food: "Domaći sir, pršut i topli hljeb",
        img_wine: "Vrhunska lokalna vina Plantaže",
        menu_subtitle: "Domaća kuhinja",
        menu_title: "Naš Kompletan Jelovnik",
        menu_notice: "Sve cijene su izražene u eurima (€)",
        reviews_subtitle: "Iskustva gostiju",
        reviews_title: "Šta kažu naši posjetioci",
        contact_subtitle: "Gdje se nalazimo",
        contact_title: "Posjetite nas ili nas pozovite",
        label_address: "Adresa",
        label_phone: "Telefon",
        label_hours: "Radno vrijeme",
        value_hours: "Ponedjeljak – Nedjelja: 09:00 – 21:00",
        label_social: "Društvene mreže",
        btn_call_now: "Pozovite i Rezervišite",
        footer_desc: "Tradicija, miris svježe ribe i gostoprimstvo u srcu prirode.",
        footer_rights: "Sva prava zadržana.",
        tab_all: "Sve"
    },
    en: {
        nav_about: "About Us",
        nav_menu: "Menu",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        hero_reviews: "(230+ reviews)",
        hero_title: "Fresh Trout & Traditional Montenegrin Flavors by the Water",
        hero_tagline: "Enjoy a meal shaded by grapevines to the gentle sound of a stream and local home cooking.",
        hero_btn_menu: "View Menu",
        hero_btn_call: "Reserve a Table",
        about_subtitle: "Natural Setting & Tradition",
        about_title: "A Peaceful Oasis of Local Flavor in Podgorica",
        img_terrace: "Shaded terrace right by the creek",
        img_interior: "Cozy wooden interior with a fireplace",
        img_food: "Homemade cheese, prosciutto & fresh bread",
        img_wine: "Premium local Plantaže wines",
        menu_subtitle: "Home Cooked Cuisine",
        menu_title: "Our Complete Menu",
        menu_notice: "All prices are shown in Euros (€)",
        reviews_subtitle: "Guest Reviews",
        reviews_title: "What Our Guests Say",
        contact_subtitle: "Find Us",
        contact_title: "Visit Us or Call Ahead",
        label_address: "Address",
        label_phone: "Phone",
        label_hours: "Working Hours",
        value_hours: "Monday – Sunday: 9:00 AM – 9:00 PM",
        label_social: "Social Media",
        btn_call_now: "Call to Reserve",
        footer_desc: "Tradition, fresh fish aroma and true hospitality in nature.",
        footer_rights: "All rights reserved.",
        tab_all: "All"
    },
    ru: {
        nav_about: "O нас",
        nav_menu: "Меню",
        nav_reviews: "Отзывы",
        nav_contact: "Контакты",
        hero_reviews: "(230+ отзывов)",
        hero_title: "Свежая форель и традиционные черногорские блюда у воды",
        hero_tagline: "Насладитесь обедом в тени виноградных лоз под умиротворяющий шум ручья.",
        hero_btn_menu: "Посмотреть Меню",
        hero_btn_call: "Забронировать Стол",
        about_subtitle: "Природа и традиции",
        about_title: "Уголок спокойствия и домашнего вкуса в Подгорице",
        img_terrace: "Терраса в тени у самого ручья",
        img_interior: "Уютный деревянный интерьер с камином",
        img_food: "Домашний сыр, пршут и свежий хлеб",
        img_wine: "Отборные местные вина Plantaže",
        menu_subtitle: "Домашняя кухня",
        menu_title: "Наше Полное Меню",
        menu_notice: "Все цены указаны в евро (€)",
        reviews_subtitle: "Отзывы гостей",
        reviews_title: "Что говорят наши посетители",
        contact_subtitle: "Где мы находимся",
        contact_title: "Приезжайте в гости или звоните",
        label_address: "Адрес",
        label_phone: "Телефон",
        label_hours: "Часы работы",
        value_hours: "Понедельник – Воскресенье: 09:00 – 21:00",
        label_social: "Соцсети",
        btn_call_now: "Позвонить и забронировать",
        footer_desc: "Традиции, аромат свежей рыбы и настоящее гостеприимство.",
        footer_rights: "Все права защищены.",
        tab_all: "Все"
    }
};

// Full Menu Data
const menuData = [
    {
        category: { sr: "Glavno / Pastrmka", en: "Main Dishes & Fish", ru: "Основные блюда и Рыба" },
        icon: "🐟",
        items: [
            {
                name: { sr: "Pastrmka (1000g)", en: "Trout (1000g)", ru: "Форель (1000г)" },
                desc: { sr: "Svježa pastrmka sa jednim prilogom po izboru", en: "Fresh trout served with one side dish", ru: "Свежая форель с одним гарниром на выбор" },
                price: "18.00 €"
            },
            {
                name: { sr: "Cicvara (400g)", en: "Cicvara (400g)", ru: "Цицвара (400г)" },
                desc: { sr: "Kukuruzno brašno i topljeni sir u sopstvenim mastima", en: "Traditional melted cheese and cornmeal dish", ru: "Традиционное блюдо из сыра и кукурузной муки" },
                price: "9.00 €"
            },
            {
                name: { sr: "Domaća pita (1000g)", en: "Homemade Pie (1000g)", ru: "Домашний пирог (1000г)" },
                desc: { sr: "Punjena spanaćem i sirom", en: "Filled with spinach and cheese", ru: "С начинкой из шпината и сыра" },
                price: "10.00 €"
            }
        ]
    },
    {
        category: { sr: "Predjelo", en: "Appetizers", ru: "Закуски" },
        icon: "🧀",
        items: [
            {
                name: { sr: "Supa dana (250g/300ml)", en: "Soup of the Day (250g/300ml)", ru: "Суп дня (250г/300мл)" },
                desc: { sr: "Domaća toplu supa", en: "Freshly made daily soup", ru: "Домашний горячий суп" },
                price: "2.50 €"
            },
            {
                name: { sr: "Pršuta (100g)", en: "Prosciutto (100g)", ru: "Пршут (100г)" },
                desc: { sr: "Sušeno svinjsko ili goveđe meso", en: "Dry cured pork or beef", ru: "Вяленое свиное или говяжье мясо" },
                price: "4.50 €"
            },
            {
                name: { sr: "Sir (100g)", en: "Cheese (100g)", ru: "Сыр (100г)" },
                desc: { sr: "Stari ili mladi kravlji sir", en: "Aged or fresh cow cheese", ru: "Выдержанный или молодой коровий сыр" },
                price: "2.00 €"
            }
        ]
    },
    {
        category: { sr: "Doručak", en: "Breakfast", ru: "Завтраки" },
        icon: "🍳",
        items: [
            {
                name: { sr: "Priganice (250g)", en: "Priganice (250g)", ru: "Приганице (250г)" },
                desc: { sr: "Služe se sa sirom, medom ili domaćim džemom", en: "Served with cheese, honey or homemade jam", ru: "Подаются с сыром, медом или домашним джемом" },
                price: "5.00 €"
            },
            {
                name: { sr: "Popara (400g)", en: "Popara (400g)", ru: "Попара (400г)" },
                desc: { sr: "Starinsko jelo od hljeba, sira i mlijeka", en: "Traditional dish with bread, cheese and milk", ru: "Традиционное блюдо из хлеба, сыра и молока" },
                price: "5.00 €"
            },
            {
                name: { sr: "Omlet", en: "Omelette", ru: "Омлет" },
                desc: { sr: "3 jaja, 50g meso, 50g sir", en: "3 eggs, 50g meat, 50g cheese", ru: "3 яйца, 50г мяса, 50г сыра" },
                price: "5.00 €"
            }
        ]
    },
    {
        category: { sr: "Salate", en: "Salads", ru: "Салаты" },
        icon: "🥗",
        items: [
            {
                name: { sr: "Salata mala (250g)", en: "Small Salad (250g)", ru: "Малый салат (250г)" },
                desc: { sr: "Sezonsko povrće", en: "Fresh seasonal vegetables", ru: "Свежие сезонные овощи" },
                price: "3.00 €"
            },
            {
                name: { sr: "Salata srednja (350g)", en: "Medium Salad (350g)", ru: "Средний салат (350г)" },
                desc: { sr: "Sezonsko povrće", en: "Fresh seasonal vegetables", ru: "Свежие сезонные овощи" },
                price: "4.50 €"
            },
            {
                name: { sr: "Salata velika (500g)", en: "Big Salad (500g)", ru: "Большой салат (500г)" },
                desc: { sr: "Sezonsko povrće", en: "Fresh seasonal vegetables", ru: "Свежие сезонные овощи" },
                price: "5.50 €"
            },
            {
                name: { sr: "Šopska salata (300g)", en: "Shopska Salad (300g)", ru: "Шопский салат (300г)" },
                desc: { sr: "Paradajz, krastavac, luk i domaći sir", en: "Tomatoes, cucumbers, onions & white cheese", ru: "Помидоры, огурцы, лук и домашний сыр" },
                price: "3.00 €"
            },
            {
                name: { sr: "Zimska salata (300g)", en: "Winter Salad / Turšija (300g)", ru: "Зимний салат / Туршия (300г)" },
                desc: { sr: "Kiselo povrće", en: "Traditional pickled vegetables", ru: "Квашеные овощи" },
                price: "3.00 €"
            },
            {
                name: { sr: "Pečene paprike (2 kom)", en: "Roasted Peppers (2 pcs)", ru: "Печеные перцы (2 шт)" },
                desc: { sr: "Pečene paprike sa belim lukom", en: "Grilled bell peppers with garlic", ru: "Печеный перец с чесноком" },
                price: "2.40 €"
            }
        ]
    },
    {
        category: { sr: "Prilozi", en: "Side Dishes", ru: "Гарниры" },
        icon: "🥔",
        items: [
            {
                name: { sr: "Krompir salata (300g)", en: "Potato Salad (300g)", ru: "Картофельный салат (300г)" },
                desc: { sr: "Kuvani krompir sa crnim lukom", en: "Boiled potatoes mixed with onions", ru: "Отварной картофель с луком" },
                price: "3.00 €"
            },
            {
                name: { sr: "Dalmatinsko varivo (300g)", en: "Dalmatian Style Vegetables (300g)", ru: "Далматинский гарнир (300г)" },
                desc: { sr: "Kuvani krompir sa spanaćem", en: "Boiled potatoes with spinach", ru: "Отварной картофель со шпинатом" },
                price: "3.50 €"
            },
            {
                name: { sr: "Prženi krompir (250g)", en: "Fried Potatoes (250g)", ru: "Жареный картофель (250г)" },
                desc: { sr: "Hrskavi krompirići", en: "Crispy fried potatoes", ru: "Хрустящий жареный картофель" },
                price: "2.50 €"
            },
            {
                name: { sr: "Kuvani krompir (300g)", en: "Boiled Potatoes (300g)", ru: "Отварной картофель (300г)" },
                desc: { sr: "Kuvani mladi krompir", en: "Boiled potatoes", ru: "Отварной картофель" },
                price: "2.50 €"
            },
            {
                name: { sr: "Kajmak (100g)", en: "Kajmak (100g)", ru: "Каймак (100г)" },
                desc: { sr: "Domaći mliječni krem", en: "Traditional rich clotted cream", ru: "Традиционный молочный каймак" },
                price: "4.50 €"
            },
            {
                name: { sr: "Marinada (100g)", en: "Marinade (100g)", ru: "Маринад (100г)" },
                desc: { sr: "Ulje, bijeli luk i peršun", en: "Olive oil mixed with garlic and parsley", ru: "Масло, чеснок и петрушка" },
                price: "1.50 €"
            },
            {
                name: { sr: "Kisjelo mlijeko (300g)", en: "Homemade Yoghurt (300g)", ru: "Домашнее кислое молоко (300г)" },
                desc: { sr: "Gusto domaće kisjelo mlijeko", en: "Rich thick home-made yoghurt", ru: "Густое домашнее кислое молоко" },
                price: "2.00 €"
            },
            {
                name: { sr: "Domaći hljeb (300g)", en: "Homemade Bread (300g)", ru: "Домашний хлеб (300г)" },
                desc: { sr: "Topli pečeni domaći hljeb", en: "Warm freshly baked local bread", ru: "Теплый свежевыпеченный хлеб" },
                price: "1.50 €"
            }
        ]
    },
    {
        category: { sr: "Vino", en: "Wine", ru: "Вина" },
        icon: "🍷",
        items: [
            {
                name: { sr: "Vino Plantaže", en: "Plantaže House Wine", ru: "Вино Plantaže" },
                desc: { sr: "0.2l / Flaša", en: "0.2l / Bottle", ru: "0.2л / Бутылка" },
                price: "2.00 € / 8.00 €"
            },
            {
                name: { sr: "Vrhunski vranac Plantaže", en: "Premium Vranac Plantaže", ru: "Премиум Вранац Plantaže" },
                desc: { sr: "0.2l / Flaša", en: "0.2l / Bottle", ru: "0.2л / Бутылка" },
                price: "3.00 € / 11.00 €"
            },
            {
                name: { sr: "Vranac Pro Corde Plantaže", en: "Vranac Pro Corde Plantaže", ru: "Вранац Pro Corde Plantaže" },
                desc: { sr: "0.2l / Flaša", en: "0.2l / Bottle", ru: "0.2л / Бутылка" },
                price: "4.00 € / 16.00 €"
            },
            {
                name: { sr: "Merlot Plantaže", en: "Merlot Plantaže", ru: "Мерло Plantaže" },
                desc: { sr: "Flaša", en: "Bottle", ru: "Бутылка" },
                price: "12.00 €"
            },
            {
                name: { sr: "Podgoričko bijelo", en: "Podgoričko White", ru: "Подгоричко белое" },
                desc: { sr: "0.2l / Flaša", en: "0.2l / Bottle", ru: "0.2л / Бутылка" },
                price: "2.00 € / 8.00 €"
            },
            {
                name: { sr: "Chardonnay Plantaže", en: "Chardonnay Plantaže", ru: "Шардоне Plantaže" },
                desc: { sr: "0.2l / Flaša", en: "0.2l / Bottle", ru: "0.2л / Бутылка" },
                price: "3.20 € / 12.00 €"
            },
            {
                name: { sr: "Graševina Kutjevo", en: "Graševina Kutjevo", ru: "Грашевина Kutjevo" },
                desc: { sr: "0.2l / Flaša", en: "0.2l / Bottle", ru: "0.2л / Бутылка" },
                price: "4.00 € / 18.00 €"
            }
        ]
    },
    {
        category: { sr: "Pivo & Napitci", en: "Beer & Drinks", ru: "Пиво и Напитки" },
        icon: "🍺",
        items: [
            {
                name: { sr: "Nikšićko", en: "Nikšićko Beer", ru: "Пиво Nikšićko" },
                desc: { sr: "Flašica", en: "Bottle", ru: "Бутылка" },
                price: "1.90 €"
            },
            {
                name: { sr: "Jelen", en: "Jelen Beer", ru: "Пиво Jelen" },
                desc: { sr: "Flašica", en: "Bottle", ru: "Бутылка" },
                price: "1.90 €"
            },
            {
                name: { sr: "Tuborg", en: "Tuborg", ru: "Tuborg" },
                desc: { sr: "Malo / Veliko", en: "Small / Large", ru: "Малое / Большое" },
                price: "2.20 € / 1.90 €"
            },
            {
                name: { sr: "Carlsberg točeno", en: "Carlsberg Draft", ru: "Carlsberg разливное" },
                desc: { sr: "Malo / Veliko", en: "Small / Large", ru: "Малое / Большое" },
                price: "1.80 € / 3.20 €"
            },
            {
                name: { sr: "Podgoričko točeno", en: "Podgoričko Draft", ru: "Подгоричко разливное" },
                desc: { sr: "Malo / Veliko", en: "Small / Large", ru: "Малое / Большое" },
                price: "2.30 € / 3.70 €"
            },
            {
                name: { sr: "Domaći sok 0.3l", en: "Homemade Juice 0.3l", ru: "Домашний сок 0.3л" },
                desc: { sr: "Prirodni sok", en: "Fresh natural juice", ru: "Натуральный сок" },
                price: "2.20 €"
            },
            {
                name: { sr: "Gazirani sok 0.3l", en: "Sodas 0.3l", ru: "Газированные напитки 0.3л" },
                desc: { sr: "Coca Cola / Fanta / Schweppes", en: "Coca Cola / Fanta / Schweppes", ru: "Coca Cola / Fanta / Schweppes" },
                price: "2.10 €"
            },
            {
                name: { sr: "Sok flašica 0.2l", en: "Bottled Juice 0.2l", ru: "Сок в бутылочке 0.2л" },
                desc: { sr: "Jabuka / Breskva / Jagoda / Narandža", en: "Apple / Peach / Strawberry / Orange", ru: "Яблоко / Персик / Клубника / Апельсин" },
                price: "1.90 €"
            },
            {
                name: { sr: "Limunada / Cedevita", en: "Lemonade / Cedevita", ru: "Лимонад / Cedevita" },
                desc: { sr: "Svježe ceđena limunada", en: "Freshly squeezed lemonade", ru: "Свежевыжатый лимонад" },
                price: "2.00 € / 1.50 €"
            },
            {
                name: { sr: "Kisjela voda", en: "Sparkling Water", ru: "Минеральная вода" },
                desc: { sr: "Mala / Velika", en: "Small / Large", ru: "Малая / Большая" },
                price: "1.20 € / 3.00 €"
            }
        ]
    },
    {
        category: { sr: "Žestoka pića & Topli napitci", en: "Spirits & Hot Drinks", ru: "Крепкие & Горячие напитки" },
        icon: "☕",
        items: [
            {
                name: { sr: "Rakija domaća", en: "Homemade Rakija", ru: "Домашняя Ракия" },
                desc: { sr: "Loza, jabuka, šljiva...", en: "Grape, apple, plum...", ru: "Виноград, яблоко, слива..." },
                price: "1.80 €"
            },
            {
                name: { sr: "Rakija brendirana", en: "Branded Rakija", ru: "Брендовая Ракия" },
                desc: { sr: "Viljamovka / Prvijenac / Kruna", en: "Viljamovka / Prvijenac / Kruna", ru: "Вильямсовка / Prvijenac / Kruna" },
                price: "2.00 €"
            },
            {
                name: { sr: "Viski / Jack Daniel's", en: "Whiskey / Jack Daniel's", ru: "Виски / Jack Daniel's" },
                desc: { sr: "Ballantine's / Johnnie Walker / Jack Daniel's", en: "Ballantine's / Johnnie Walker / Jack Daniel's", ru: "Ballantine's / Johnnie Walker / Jack Daniel's" },
                price: "2.20 € / 3.00 €"
            },
            {
                name: { sr: "Kuvana kafa / Čaj", en: "Turkish Coffee / Tea", ru: "Кофе по-турецки / Чай" },
                desc: { sr: "Tradicionalna kuvana kafa ili čaj", en: "Traditional coffee or tea", ru: "Традиционный кофе или чай" },
                price: "1.00 € / 1.50 €"
            },
            {
                name: { sr: "Kuvana rakija / Kuvano vino", en: "Mulled Rakija / Mulled Wine", ru: "Вареная ракия / Глинтвейн" },
                desc: { sr: "Topli zimski napitci", en: "Warm traditional mulled drinks", ru: "Горячие традиционные напитки" },
                price: "3.00 €"
            }
        ]
    },
    {
        category: { sr: "Dezert", en: "Dessert", ru: "Десерты" },
        icon: "🍰",
        items: [
            {
                name: { sr: "Kolač / Torta", en: "Cake of the Day", ru: "Домашний пирог / Торт" },
                desc: { sr: "Dnevni domaći kolač", en: "Fresh daily cake", ru: "Свежий домашний торт" },
                price: "3.00 €"
            },
            {
                name: { sr: "Slatke palačinke", en: "Sweet Pancakes", ru: "Сладкие блинчики" },
                desc: { sr: "Domaći džem / Nutella / Eurocrem", en: "Homemade jam / Nutella / Eurocrem", ru: "Домашний джем / Нутелла / Еврокрем" },
                price: "3.00 €"
            },
            {
                name: { sr: "Sladoled kugla", en: "Scoop of Ice Cream", ru: "Шарик мороженого" },
                desc: { sr: "Razni ukusi", en: "Assorted flavors", ru: "Разные вкусы" },
                price: "1.30 €"
            }
        ]
    },
    {
        category: { sr: "Za ponijeti", en: "Takeaway", ru: "На вынос" },
        icon: "🛍️",
        items: [
            {
                name: { sr: "Svježa riba (1kg)", en: "Fresh Trout (1kg)", ru: "Свежая рыба (1кг)" },
                desc: { sr: "Svježa pastrmka iz ribnjaka", en: "Fresh trout directly from the farm", ru: "Свежая форель из хозяйства" },
                price: "7.00 €"
            },
            {
                name: { sr: "Pržena riba sa prilogom (1kg)", en: "Fried Trout with side dish (1kg)", ru: "Жареная рыба с гарниром (1кг)" },
                desc: { sr: "Pripremljena sa prilogom", en: "Fried trout with side dish included", ru: "Приготовленная рыба с гарниром" },
                price: "12.00 €"
            },
            {
                name: { sr: "Pržena riba bez priloga (1kg)", en: "Fried Trout without side dish (1kg)", ru: "Жареная рыба без гарнира (1кг)" },
                desc: { sr: "Pripremljena riba", en: "Fried trout only", ru: "Жареная рыба" },
                price: "10.00 €"
            },
            {
                name: { sr: "Med tegla", en: "Jar of Local Honey", ru: "Банка местного меда" },
                desc: { sr: "Domaći prirodni med", en: "Pure local honey jar", ru: "Натуральный домашний мед" },
                price: "15.00 €"
            }
        ]
    }
];

// Reviews Data
const reviewsData = [
    {
        author: "Al Dr",
        rating: 5,
        text: {
            sr: "Prelijepo mjesto pored rijeke sa svježom pastrmkom pravo iz njihovog ribnjaka. Riba je savršeno pripremljena na roštilju, a porcije su obilne. Mirna atmosfera u okruženju prirode i izuzetno ljubazno osoblje.",
            en: "Beautiful spot by the river with fresh trout straight from their own farm. The fish was grilled perfectly, and the portions were generous. Peaceful atmosphere, surrounded by nature, and very friendly service.",
            ru: "Прекрасное место у реки со свежей форелью прямо из собственного хозяйства. Рыба на гриле приготовлена идеально, а порции очень щедрые. Спокойная атмосфера в окружении природы и очень дружелюбный сервис."
        }
    },
    {
        author: "Gabriele Lamperti",
        rating: 5,
        text: {
            sr: "Sve je domaće i izuzetno ukusno. Osećao sam se kao kod kuće, prihvatili su me kao dio porodice. Divni i ljubazni ljudi. Takođe sam imao jedan od najboljih doručaka u životu!",
            en: "Everything handmade and very tasteful. I felt like adopted, she treated me like I was part of the family. Really nice and kind people. Also had one of the best breakfasts of my life!",
            ru: "Всё домашнее и очень вкусное. Я чувствовал себя как дома, меня приняли как родного. Очень приятные и добрые люди. К тому же это был один из лучших завтраков в моей жизни!"
        }
    },
    {
        author: "Neen",
        rating: 5,
        text: {
            sr: "Restoran je izgrađen iznad potoka, u kojem plivaju pastrmke. Svježa riba, domaći hljeb, tradicionalna crnogorska jela. Hrana je fantastična, a atmosfera uz zvuk vode neponovljiva.",
            en: "The restaurant is built over a creek, with trout swimming in the water. Fresh fish, homemade bread, traditional Montenegrin foods. Delicious food and peaceful atmosphere with the sound of water.",
            ru: "Ресторан построен прямо над ручьем, в котором плавает форель. Свежая рыба, домашний хлеб, традиционная черногорская кухня. Очень вкусная еда и умиротворяющая атмосфера под шумящую воду."
        }
    },
    {
        author: "Frédérik Dumas Bonnier",
        rating: 5,
        text: {
            sr: "Najbolji restoran u kom smo bili u Crnoj Gori. Svježa riba izvučena iz vode specijalno za vas dok sjedite u hladu vinove loze pored potoka. Sjajan izbor vina i izuzetno gostoljubivi domaćini!",
            en: "The best restaurant we went to in Montenegro. Fresh fish pulled right out of the water for you, sitting under the shade of vines next to a little stream. Great wine selection and friendly staff!",
            ru: "Лучший ресторан за все время в Черногории. Свежайшую рыбу достают из воды прямо для вас, пока вы сидите в тени виноградных лоз у журчащего ручья. Отличный выбор вин и гостеприимный персонал!"
        }
    }
];

// Initialize DOM Events & Render
document.addEventListener('DOMContentLoaded', () => {
    // Set Copyright Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Nav Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Sticky Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Language Buttons Handler
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // Initial Render
    setLanguage('sr');
});

// Switch Language function
function setLanguage(lang) {
    if (!i18nData[lang]) return;
    currentLang = lang;

    // Update Language Buttons Active State
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update Static Translations
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (i18nData[lang][key]) {
            elem.textContent = i18nData[lang][key];
        }
    });

    // Render Dynamic Content
    renderMenu();
    renderReviews();
}

// Render Menu
function renderMenu() {
    const container = document.getElementById('menu-container');
    if (!container) return;

    let html = '';

    menuData.forEach((cat, idx) => {
        const categoryName = cat.category[currentLang] || cat.category.sr;

        html += `
            <div class="menu-category" id="cat-${idx}">
                <h3 class="menu-category__title">
                    <span>${cat.icon}</span>
                    <span>${categoryName}</span>
                </h3>
                <div class="menu-items">
        `;

        cat.items.forEach(item => {
            const name = item.name[currentLang] || item.name.sr;
            const desc = item.desc[currentLang] || item.desc.sr;

            html += `
                <div class="menu-item">
                    <div class="menu-item__info">
                        <div class="menu-item__name">${name}</div>
                        <div class="menu-item__desc">${desc}</div>
                    </div>
                    <div class="menu-item__price">${item.price}</div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Render Reviews
function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;

    let html = '';

    reviewsData.forEach(rev => {
        const text = rev.text[currentLang] || rev.text.sr;
        const stars = '★'.repeat(rev.rating);

        html += `
            <div class="review-card">
                <div>
                    <div class="review-card__stars">${stars}</div>
                    <p class="review-card__text">"${text}"</p>
                </div>
                <div class="review-card__author">— ${rev.author}</div>
            </div>
        `;
    });

    container.innerHTML = html;
}