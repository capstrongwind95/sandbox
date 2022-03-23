const TelegramBot = require('node-telegram-bot-api');

const token = '5117448915:AAHpGJfe-fS0cWQ8SIzRABeC_z1Fuv68EDg'; // тут токен кторый мы получили от botFather

// включаем самого обота
const bot = new TelegramBot(token, {polling: true});

// Конфиг клавиатуры
const keyboard = [
    [
        {
            text: '1', // текст на кнопке
            callback_data: '1' // данные для обработчика событий
        }
    ],
    [
        {
            text: '2',
            callback_data: '2'
        }
    ],
    [
        {
            text: '3',
            callback_data: '3'
        }
    ]
];

bot.setMyCommands( [
            {command: '/start', description: 'Пожалуй начнем'},
            {command: '/info', description: 'Знакомство'},
            {command: '/game', description: 'Игра'},
])

bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            return  bot.sendMessage(chatId, 'Добро пожаловать бро!')
        }
        if (text === '/info') {
            return  bot.sendMessage(chatId, 'Хорошая попытка!')
        }
        if (text === '/game') {
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
        img = 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg';
    }

    if (query.data === '2') {
        img = 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg';
    }

    if (query.data === '3') {
        img = 'http://risovach.ru/upload/2013/04/mem/borodach_17207308_orig_.jpg'}

    if (img) {
        bot.sendPhoto(chatId, img, {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } else {
        bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }
});



