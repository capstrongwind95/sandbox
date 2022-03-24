const TelegramBot = require('node-telegram-bot-api');

const token = `5117448915:AAHpGJfe-fS0cWQ8SIzRABeC_z1Fuv68EDg`; // тут токен кторый мы получили от botFather

// включаем самого обота
const bot = new TelegramBot(token, {polling: true});

// Конфиг клавиатуры
const keyboard = [
    [
        {
            text: '1', // текст на кнопке
            callback_data: '1' // данные для обработчика событий
        },
        {
            text: '2',
            callback_data: '2'
        },
        {
            text: '3',
            callback_data: '3'
        },
        {
            text: '4',
            callback_data: '4'
        }
    ]
];

bot.setMyCommands( [
            {command: `/start`, description: 'Пожалуй начнем'},
            {command: `/info`, description: 'Знакомство'},
            {command: `/game`, description: 'Игра'},
            {command: `/poll`, description: 'Тренировки'}
])

bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        console.log(msg)

        if (text === `/start`) {
            return  bot.sendMessage(chatId, `Добро пожаловать бро!`),
                bot.sendPhoto(chatId, `https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg` )
        }
        if (text === `/info`) {
            return  bot.sendMessage(chatId, `Хорошая попытка! ${msg.from.first_name}`)
        }
        if (text === `/poll`) {
            return  bot.sendPoll(chatId, `Тренировка Вторник 22.03`, [ `18:00-19:30`, `19:30-21:00`, `Нет`])
        }

        if (text === `/game`) {
          return  bot.sendMessage(chatId, 'Привет, Друг! выбери цифру', {
                reply_markup: {
                    inline_keyboard: keyboard
                }
            });
        }
        return bot.sendMessage(chatId, 'Я тебя не понял, повтори пожалуйста')

    })

// обработчик событий нажатий на клавиатуру
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    if (query.data === '1') {
       return  bot.sendPhoto(chatId, `https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg`,  {
           reply_markup: {
               inline_keyboard: keyboard
           }
       });
    }

    if (query.data === '2') {
        return  bot.sendPhoto(chatId, `https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg`,  {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }

    if (query.data === '3') {
        return  bot.sendPhoto(chatId, `https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg`,  {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }

    if (query.data === '4') {
        return bot.sendMessage(chatId, `Неделя богата новостями которыми мы никак не успеваем делиться с вами ✌🏻

Раз - мы разукрасили холл на нашей новой площадке Гая д. 31. Название ещё держим в секрете, т.к. стилизация площадки в стадии проектирования. Цвет и фотографии будут получатся сочными, а так же огромное зеркало для семерых взрослых одновременно! 👭

Два - Стилизовали комнаты отдыха в ярком фиолетовом и черном цветах (фото будут в следующих постах). Теперь мы готовы принимать большие компании и классы, разместив всех деток и родителей по местам отдыха! ❤

Три - провели тестовый турнир среди молодежи г. Тольятти и юниорских команд чтобы проверить площадку не только для обычных, но и для профессиональных игроков! 💪🏻

Четыре - поучаствовали в организации самого наверное дорогого и качественного турнира уровня "Россия", т.к. велась прямая трансляция, были заполнены трибуны и зал соответствовал настоящему спортивному мероприятию! Ух..! За что спасибо нашим из г. Ульяновска Школа Мужского Развития "Партизан"

Пять - игры уже проходят на новой площадке и вы можете её опробовать в разных режимах, т.к. стилистика будет меняться буквально ежемесячно 👀 К примеру в сравнении с прошлым месяцем количество укрытий и домиков выросло вдвое. Теперь в середине нет больших прострелов, но есть островки безопасности и маленькие дзоты, в которых можно прятаться и вести огонь с окошек 🏰

Заказать игры вы можете по телефону 61-21-36 или написав нам в сообщения сообщества!

Так же мы есть в телеграмм, инст, вайбер, ватсап, гугл-яндекс-меил почта и конечно же наш сайт.

Всем продуктивной недели! 😏`)
        }


});



