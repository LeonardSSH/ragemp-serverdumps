{
global.Language = "ua";
require("/utils/locale/browserLocale.js");
mp.events.add('Language:Change', (data) => {
    global.Language = data;
    mp.gui.execute(`HUD.locale='${global.Language}'`);
    if(globalThis.browser.browser.active){
        globalThis.browser.execute(`window.locale='${global.Language}'`)
    }    
    else{
        globalThis.browser.browser.active = true;
        globalThis.browser.execute(`window.locale='${global.Language}'`)
        globalThis.browser.browser.active = false;
    }
});
mp.events.add('Language:Non-Pressed', (data) => {
    Nexus.callRemote('Language:Non-Pressed', data);
});

let NonPressed = [];

global.GetText = function(text){   
    if (!getlocale[text]) {
        if(!global.getlocales[text]){
            NonPressed.push(text);
            if(!NonPressed.includes(text)) 
            Nexus.callRemote('Language:Non-Pressed', text);
            return "Non-Pressed: "+text;
        }
        return global.getlocales[text][global.Language];        
    }
    return getlocale[text][global.Language];
};
global.getlocales = {
    'Поле Пшеницы':
    {
        'ge': 'ველი ხორბალი',
        'ru': 'Поле Пшеницы',
    },
    'Поле капусты':
    {
        'ge': 'ველი კომბოსტო',
        'ru': 'Поле капусты',
    },
    'Поле картофеля':
    {
        'ge': 'ველი კარტოფილი',
        'ru': 'Поле картофеля',
    },
    'Поле тыкв':
    {
        'ge': 'ველი გოგრები',
        'ru': 'Поле тыкв',
    },
    'Поле моркови':
    {
        'ge': 'ველი სტაფილო',
        'ru': 'Поле моркови',
    },
    'Поле универсальное':
    {
        'ge': 'ველი უნივერსალური',
        'ru': 'Поле универсальное',
    },
    'Водная вышка':
    {
        'ge': 'წყლის კოშკი',
        'ru': 'Водная вышка',
    },
    'Пшеница':
    {
        'ge': 'ხორბალი',
        'ru': 'Пшеница',
    },
    'Капуста':
    {
        'ge': 'კომბოსტო',
        'ru': 'Капуста',
    },
    'Картошка':
    {
        'ge': 'კარტოფილი',
        'ru': 'Картошка',
    },
    'Тыква':
    {
        'ge': 'გოგრები',
        'ru': 'Тыква',
    },
    'Морковь':
    {
        'ge': 'სტაფილო',
        'ru': 'Морковь',
    },
    'Универсальный':
    {
        'ge': 'უნივერსალური',
        'ru': 'Универсальный',
    },
    'Тип рассады':
    {
        'ge': 'ნერგის ტიპი',
        'ru': 'Тип рассады',
    },
    'Время роста':
    {
        'ge': 'ზრდის დრო',
        'ru': 'Время роста',
    },
    'Состояние поля':
    {
        'ge': 'საველე მდგომარეობა',
        'ru': 'Состояние поля',
    },
    'Количество литров':
    {
        'ge': 'ლიტრის რაოდენობა',
        'ru': 'Количество литров',
    },
    'секунд':
    {
        'ge': 'წამი',
        'ru': 'секунд',
    },
    'секунды':
    {
        'ge': 'წამი',
        'ru': 'секунды',
    },
    'Состояние вышки':
    {
        'ge': 'კოშკის სტატუსი',
        'ru': 'Состояние вышки',
    },
    'Активно':
    {
        'ge': 'აქტიურია',
        'ru': 'Активно',
    },
    'Время пополнения':
    {
        'ge': 'შევსების დრო',
        'ru': 'Время пополнения',
    },
    'Слишком быстро':
    {
        'ge': 'ძალიან სწრაფად',
        'ru': 'Слишком быстро',
    },
    'Показать палец':
    {
        'ge': 'თითის ჩვენება',
        'ru': 'Показать палец',
    },
    'Микрофон':
    {
        'ge': 'მიკროფონი',
        'ru': 'Микрофон',
    },
    'Инвентарь':
    {
        'ge': 'ინვენტორი',
        'ru': 'Инвентарь',
    },
    'Анимации':
    {
        'ge': 'ანიმაციები',
        'ru': 'Анимации',
    },
    'Меню игрока':
    {
        'ge': 'მოთამაშის მენიუ',
        'ru': 'Меню игрока',
    },
    'Планшет такси':
    {
        'ge': 'პლანშეტი Taxi',
        'ru': 'Планшет такси',
    },
    'Планшет EMS':
    {
        'ge': 'პლანშეტი EMS',
        'ru': 'Планшет EMS',
    },
    'Заглушить Транспорт':
    {
        'ge': 'ტრანსპორტის ჩაქრობა',
        'ru': 'Заглушить Транспорт',
    },
    'Завести Транспорт':
    {
        'ge': 'ტრანსპორტის დაქოქვა',
        'ru': 'Завести Транспорт',
    },
    'Бросить якорь':
    {
        'ge': 'ღუზის ჩაგდება',
        'ru': 'Бросить якорь',
    },
    'Снять якорь':
    {
        'ge': 'ღუზის ამოღება',
        'ru': 'Снять якорь',
    },
    "Головной убор":
    {
        "ge": "ქუდი",
        "ru": "Головной убор"
    },
    "Перчатки": {
        "ge": "ხელთათმანები",
        "ru": "Перчатки"
    },
    "Штаны": {
        "ge": "შარვალი",
        "ru": "Штаны"
    },
    "Рюкзак": {
        "ge": "ზურგჩანთა",
        "ru": "Рюкзак"
    },
    "Обувь": {
        "ge": "ფეხსაცმელი",
        "ru": "Обувь"
    },
    "Аксессуар": {
        "ge": "აქსესუარი",
        "ru": "Аксессуар"
    },
    "Нижняя одежда": {
        "ge": "ქვედა ტანსაცმელი",
        "ru": "Нижняя одежда"
    },
    "Украшения": {
        "ge": "დეკორაციები",
        "ru": "Украшения"
    },
    "Верхняя одежда": {
        "ge": "ზედა ტანსაცმელი",
        "ru": "Верхняя одежда"
    },
    "Очки": {
        "ge": "სათვალე",
        "ru": "Очки"
    },
    "Сумка": {
        "ge": "ჩანთა",
        "ru": "Сумка"
    },
    "Наркотики": {
        "ge": "ნარკოტიკი",
        "ru": "Наркотики"
    },
    "Материалы": {
        "ge": "მატერიალი",
        "ru": "Материалы"
    },
    "Аптечка": {
        "ge": "მედიკამენტები",
        "ru": "Аптечка"
    },
    "Бинт": {
        "ge": "ბინტი",
        "ru": "Бинт"
    },
    "Канистра бензина": {
        "ge": "საწვავის კალისტრა",
        "ru": "Канистра бензина"
    },
    "Чипсы": {
        "ge": "ჩიფსი",
        "ru": "Чипсы"
    },
    "Пиво": {
        "ge": "ლუდი",
        "ru": "Пиво"
    },
    "Пицца": {
        "ge": "პიცა",
        "ru": "Пицца"
    },
    "Бургер": {
        "ge": "ბურგერი",
        "ru": "Бургер"
    },
    "Хот-Дог": {
        "ge": "ჰოთდოგი",
        "ru": "Хот-Дог"
    },
    "Сэндвич": {
        "ge": "სენდვიჩი",
        "ru": "Сэндвич"
    },
    "Кола": {
        "ge": "კოლა",
        "ru": "Кола"
    },
    "Спрайт": {
        "ge": "სპრაიტი",
        "ru": "Спрайт"
    },
    "Ключи от машины": {
        "ge": "მანქანის გასაღები",
        "ru": "Ключи от машины"
    },
    "Подарок": {
        "ge": "საჩუქარი",
        "ru": "Подарок"
    },
    "Связка ключей": {
        "ge": "რამოდენიმე გასაღებები",
        "ru": "Связка ключей"
    },
    "Ремонтный набор": {
        "ge": "სარემონტო ნაკრები",
        "ru": "Ремонтный набор"
    },
    "Сумка с документами": {
        "ge": "საბუთების ჩანთა",
        "ru": "Сумка с документами"
    },
    "Туалет": {
        "ge": "ტუალეტი",
        "ru": "Туалет"
    },
    "Телевизор": {
        "ge": "ტელევიზორი",
        "ru": "Телевизор"
    },
    "Стул": {
        "ge": "მაგიდა",
        "ru": "Стул"
    },
    "«На корке лимона»": {
        "ge": "«peel of a lemon»",
        "ru": "«На корке лимона»"
    },
    "«На бруснике»": {
        "ge": "On cranberries",
        "ru": "«На бруснике»"
    },
    "«Русский стандарт»": {
        "ge": "Russian standard",
        "ru": "«Русский стандарт»"
    },
    "«Asahi»": {
        "ge": "«Asahi»",
        "ru": "«Asahi»"
    },
    "«Midori»": {
        "ge": "«Midori»",
        "ru": "«Midori»"
    },
    "«Yamazaki»": {
        "ge": "«Yamazaki»",
        "ru": "«Yamazaki»"
    },
    "«Martini Asti»": {
        "ge": "«Martini Asti»",
        "ru": "«Martini Asti»"
    },
    "«Sambuca»": {
        "ge": "«Sambuca»",
        "ru": "«Sambuca»"
    },
    "«Дживан»": {
        "ge": "Jivan",
        "ru": "«Дживан»"
    },
    "«Арарат»": {
        "ge": "Ararat",
        "ru": "«Арарат»"
    },
    "«Noyan Tapan»": {
        "ge": "«Noyan Tapan»",
        "ru": "«Noyan Tapan»"
    },
    "Боевой пистолет": {
        "ge": "Combat პისტოლეტი",
        "ru": "Боевой пистолет"
    },
    "Тяжелый пистолет": {
        "ge": "Heavy პისტოლეტი",
        "ru": "Тяжелый пистолет"
    },
    "Автоматический пистолет": {
        "ge": "ავტომატური პისტოლეტი",
        "ru": "Автоматический пистолет"
    },
    "Малокалиберная винтовка": {
        "ge": "Small CaliberRifle",
        "ru": "Малокалиберная винтовка"
    },
    "Дробовик булл-пап": {
        "ge": "Bullpap Shotgun",
        "ru": "Дробовик булл-пап"
    },
    "Нож": {
        "ge": "დანა",
        "ru": "Нож"
    },
    "Молоток": {
        "ge": "ჩაქუჩი",
        "ru": "Молоток"
    },
    "Монтировка": {
        "ge": "მანტიროვკა",
        "ru": "Монтировка"
    },
    "Гольф клюшка": {
        "ge": "გოლფ კლუბი",
        "ru": "Гольф клюшка"
    },
    "Бутылка": {
        "ge": "ბოთლი",
        "ru": "Бутылка"
    },
    "Кинжал": {
        "ge": "ხანჯალი",
        "ru": "Кинжал"
    },
    "Топор": {
        "ge": "ნაჯახი",
        "ru": "Топор"
    },
    "Кастет": {
        "ge": "კასტეტი",
        "ru": "Кастет"
    },
    "Мачете": {
        "ge": "მაჩეტე",
        "ru": "Мачете"
    },
    "Швейцарский нож": {
        "ge": "შვეიცარიული დანა",
        "ru": "Швейцарский нож"
    },
    "Кий": {
        "ge": "გასაღები",
        "ru": "Кий"
    },
    "Гаечный ключ": {
        "ge": "ქანჩი",
        "ru": "Гаечный ключ"
    },
    "Боевой топор": {
        "ge": "საბრძოლო  ნაჯახი",
        "ru": "Боевой топор"
    },
    "Бамбуковая удочка": {
        "ge": "ბამბუკის ანკესი",
        "ru": "Бамбуковая удочка"
    },
    "Пластиковая удочка": {
        "ge": "პლასტმასის ანკესი",
        "ru": "Пластиковая удочка"
    },
    "Карбоновая удочка": {
        "ge": "ნახშირბადოვანი ანკესი",
        "ru": "Карбоновая удочка"
    },
    "Наживка": {
        "ge": "სატყუარა",
        "ru": "Наживка"
    },
    "Стерлядь": {
        "ge": "სტერლეტი",
        "ru": "Стерлядь"
    },
    "Форель": {
        "ge": "კალმახი",
        "ru": "Форель"
    },
    "Лосось": {
        "ge": "ორაგული",
        "ru": "Лосось"
    },
    "Горбуша": {
        "ge": "კუზიანი ვეშაპი",
        "ru": "Горбуша"
    },
    "Осётр": {
        "ge": "ზუთხი",
        "ru": "Осётр"
    },
    "Камбала": {
        "ge": "ფლაუნდერი",
        "ru": "Камбала"
    },
    "Тунец": {
        "ge": "ტუნა",
        "ru": "Тунец"
    },
    "Мальма": {
        "ge": "მალმე",
        "ru": "Мальма"
    },
    "Чёрный амур": {
        "ge": "შავი კუპიდონი",
        "ru": "Чёрный амур"
    },
    "Золотая рыбка": {
        "ge": "ოქროს თევზი",
        "ru": "Золотая рыбка"
    },
    "Сладости": {
        "ge": "ტკბილეული",
        "ru": "Сладости"
    },
    "Фотография": {
        "ge": "ფოტო",
        "ru": "Фотография"
    },
    "Гримм": {
        "ge": "გრიმი",
        "ru": "Гримм"
    },
    "Балончик": {
        "ge": "სპრეის ქილა",
        "ru": "Балончик"
    },
    "Леденец": {
        "ge": "მარმალადი",
        "ru": "Леденец"
    },
    "Номерной знак": {
        "ge": "სანომრე ნიშნები",
        "ru": "Номерной знак"
    },
    "Семена пшеницы": {
        "ge": "ხორბალის თესლი",
        "ru": "Семена пшеницы"
    },
    "Семена капусты": {
        "ge": "კომბოსტოს თესლი",
        "ru": "Семена капусты"
    },
    "Семена картошки": {
        "ge": "კარტოფილის თესლი",
        "ru": "Семена картошки"
    },
    "Семена тыквы": {
        "ge": "გოგრის თესლი",
        "ru": "Семена тыквы"
    },
    "Семена моркови": {
        "ge": "სტაფილო თესლი",
        "ru": "Семена моркови"
    },
    "Семена канабиса": {
        "ge": "კანაფის თესლი",
        "ru": "Семена канабиса"
    },
    "Лейка": {
        "ge": "სარწყავი",
        "ru": "Лейка"
    },
    "Садовая лопатка": {
        "ge": "ბაღის ნიჩაბი",
        "ru": "Садовая лопатка"
    },
    "Пшеница": {
        "ge": "ხორბალი",
        "ru": "Пшеница"
    },
    "Капуста": {
        "ge": "კომბოსტო",
        "ru": "Капуста"
    },
    "Картошка": {
        "ge": "კარტოფილი",
        "ru": "Картошка"
    },
    "Тыква": {
        "ge": "გოგრა",
        "ru": "Тыква"
    },
    "Морковь": {
        "ge": "სტაფილო",
        "ru": "Морковь"
    },
    "Канабис": {
        "ge": "კანაფი",
        "ru": "Канабис"
    },
}
}