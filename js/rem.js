$(function () {
    const players = [
        {
            name: 'Джиман',
            avatar: 'images/rem/avatar/photo_6.jpg',
            money: 60,
            isActive: false,
            position: 'cub0',
            diamant: 0
        },
        {
            name: 'Марат',
            avatar: 'images/rem/avatar/photo_5.jpg',
            money: 50,
            isActive: false,
            position: 'cub0',
            diamant: 0
        },
        {
            name: 'Андрій',
            avatar: 'images/rem/avatar/photo_4.jpg',
            money: 50,
            isActive: false,
            position: 'cub0',
            diamant: 0
        },
        {
            name: 'Діма',
            avatar: 'images/rem/avatar/photo_3.jpg',
            money: 50,
            isActive: false,
            position: 'cub0',
            diamant: 0
        },
        {
            name: 'Мілана',
            avatar: 'images/rem/avatar/photo_1.jpg',
            money: 60,
            isActive: false,
            position: 'cub0',
            diamant: 0
        },
        {
            name: 'Таміла',
            avatar: 'images/rem/avatar/photo_2.jpg',
            money: 50,
            isActive: false,
            position: 'cub0',
            diamant: 0
        },
    ]

    const qustListNew = [
        {
            text: 'Чи э в тебе друзі, яких ти хотів би приветси до христа?',
            isUsed: false
        },
        {
            text: 'Який відчайдушний вчинкок зробили друзі заради свого хворого товарища?',
            isUsed: false
        },
        {
            text: 'Чому, на твою думку, біля Ісуса завжди був натовп народу?',
            isUsed: false
        },
        {
            text: 'Хто такі Марфа і Марія?',
            isUsed: false
        },
        {
            text: 'Що би ти робив, якби Ісус прийшов до тебе додому?',
            isUsed: false
        },
        {
            text: 'Що Ісус сказав хворому, щоб зцілити його?',
            isUsed: false
        },
        {
            text: 'Хто такі Книжники і Фарисеї?',
            isUsed: false
        },
        {
            text: 'Чому Ісус міг прощати гріхи?',
            isUsed: false
        },
        {
            text: 'Що легще сказати: Прощаються гріхи чи Встань і ходи?',
            isUsed: false
        },
        {
            text: 'Як ти уявляєш собі звичайний день Ісуса?',
            isUsed: false
        },
        {
            text: 'Хто такі Марфа і Марія?',
            isUsed: false
        },
        {
            text: 'Чого Марія вибрала кращу долю ніж Марфа?',
            isUsed: false
        },
    ];
    const qustList = [
        {
            text: 'Як людина може привернути увагу Бога?',
            isUsed: false
        },
        {
            text: 'Чим поділився з Ісусом маленький хлопчик?',
            isUsed: false
        },
        {
            text: 'Яке покарання прийняв Ісус за нас?',
            isUsed: false
        },
        {
            text: 'Чим жертва бідної вдови була кращою за жертви інших людей?',
            isUsed: false
        },
        {
            text: 'Хто зрадив Ісуса?',
            isUsed: false
        },
        {
            text: 'Чого Ісус не зійшов з хреста?',
            isUsed: false
        },
        {
            text: 'Яке диво сталося з жертвою маленького хлопчика?',
            isUsed: false
        },
        {
            text: 'За кого помер Ісус?',
            isUsed: false
        },
        {
            text: 'Що треба людині, щоб набути вічне спасіння?',
            isUsed: false
        },
        {
            text: 'Чи жертовне серце в Бога?',
            isUsed: false
        },
        {
            text: 'Що означають слова Ісуса: "Воскресну в третій день"?',
            isUsed: false
        },
        {
            text: 'З чого почав Ісус робити чудо з п\'ятьма хлібами і двома рибками?',
            isUsed: false
        },
        ];

    const magicBoxList = [
        {
            text: 'Хто такий Давид?',
            isUsed: false
        },
        {
            text: 'Чого Марія вибрала кращу долю ніж Марфа?',
            isUsed: false
        },
        {
            text: 'Хто такий Саул',
            isUsed: false
        },
        {
            text: 'Хто такі Ізраїльтяни?',
            isUsed: false
        },
        {
            text: 'Хто такий Голіят',
            isUsed: false
        },
        {
            text: 'Хто такі філістимляни?',
            isUsed: false
        },
        {
            text: 'Яка професія була в Давида?',
            isUsed: false
        },
        {
            text: 'Який відчайдушний вчинкок зробили друзі заради свого хворого товарища?',
            isUsed: false
        },
        {
            text: 'Чому, на твою думку, біля Ісуса завжди був натовп народу?',
            isUsed: false
        },
        {
            text: 'Яка професія була в Голіята?',
            isUsed: false
        },
        {
            text: 'Чому Давид не боявся Голіята?',
            isUsed: false
        },
        {
            text: 'У який спосіб Давид переміг Голіята?',
            isUsed: false
        },
        {
            text: 'Цукерочка',
            url: 'images/rem/candy2.gif',
            isUsed: false
        },
        {
            text: 'Чим жертва бідної вдови була кращою за жертви інших людей?',
            isUsed: false
        },
        {
            text: 'Хто зрадив Ісуса?',
            isUsed: false
        },
        {
            text: 'Чого Ісус не зійшов з хреста?',
            isUsed: false
        },
        {
            text: 'Яке диво сталося з жертвою маленького хлопчика?',
            isUsed: false
        },
        {
            text: '+10',
            url: 'images/rem/mony.gif',
            isUsed: false
        },
        {
            text: '+10',
            url: 'images/rem/mony.gif',
            isUsed: false
        },
        {
            text: 'За кого помер Ісус?',
            isUsed: false
        },

        {
            text: 'Як ти уявляєш собі небо?',
            isUsed: false
        },
        {
            text: 'Хто царює на небі?',
            isUsed: false
        },
        {
            text: 'Хто такий Агнець?',
            isUsed: false
        },
        {
            text: 'Що треба людині, щоб набути вічне спасіння?',
            isUsed: false
        },
        {
            text: 'Чи жертовне серце в Бога?',
            isUsed: false
        },
        {
            text: 'Цукерочка',
            url: 'images/rem/candy2.gif',
            isUsed: false
        },
        {
            text: 'Цукерочка',
            url: 'images/rem/candy2.gif',
            isUsed: false
        },
        {
            text: 'Чіпси',
            url: 'images/rem/chipsy.png',
            isUsed: false
        },

    ];
    const chansList = [
        {
            text: '+10',
            url: 'images/rem/mony.gif',
            isUsed: false
        },
        {
            text: 'Артефакт',
            url: 'images/rem/artefakt.gif',
            isUsed: false
        },
        {
            text: 'Артефакт',
            url: 'images/rem/artefakt.gif',
            isUsed: false
        },
        {
            text: 'Артефакт',
            url: 'images/rem/artefakt.gif',
            isUsed: false
        },
        {
            text: 'Цукерочка',
            url: 'images/rem/candy2.gif',
            isUsed: false
        },
        {
            text: '-10',
            url: 'images/rem/mony.gif',
            isUsed: false
        },
    ]
    function rundomQust(list, loop){
    // Случайный пункт списка
    if(loop){
        item = Math.floor(Math.random() * list.length);
        return list[item];
    }else{
        let notUsed = Array.from(list).filter(i => i.isUsed == false);
        item = notUsed[Math.floor(Math.random() * notUsed.length)];
        item.isUsed = true;
        return item;
    }
};


$('.btn-remove').on('click', function () {
    var activeStars = Number(players.filter(item => item.isActive == true)[0].diamant);

    var activeTrek = $('.player-item.active  .gold-trek');
    if(activeTrek.width()>125)return;
    activeStars = activeStars + 25;
    players.filter(item => item.isActive == true)[0].diamant = activeStars;
    activeTrek.css('width', `${players.filter(item => item.isActive == true)[0].diamant}px`);

});
$('.btn-qust').on('click', function () {
    try {
        let qustText = rundomQust(qustListNew, false).text;
        $('.qust').addClass('active');
        $('.qust-content').text(qustText);
    } catch (err) {
        let qustText = "Питання закінчилися!";
        $('.qust').addClass('active');
        $('.qust-content').text(qustText);
    }
})
    $('.btn-gift').on('click', function () {
            $('.pop-chans').addClass('active');
    })


    $(".js-scroll").niceScroll();

    $('.players').on('click', function(event) {
        var target = event.target;
        var li = target.closest('.player-item');
        if (!li) return;
        $( ".power_controls a" ).trigger( "click" );
        disActive('.player-item');
        highlight(li);
        var imgUrl = li.querySelector('img').getAttribute('src');
        players.filter(item => item.avatar == imgUrl)[0].isActive = true;
        players.filter(item => item.avatar !== imgUrl).forEach(i => i.isActive = false);
        $('.cub-item').each(function () {
            $(this).removeClass('active');
            let itemId  = players.filter(item => item.isActive == true)[0].position;
            if(itemId == $(this)[0].id){
                $(this).addClass('active')
            }
        })
        var money = li.querySelector('.count-num');
        money.textContent = players.filter(item => item.isActive == true)[0].money;


    });

    function disActive(item) {
        var cubItems = Array.from(document.querySelectorAll(item));
        cubItems.forEach(item => item.classList.remove('active'));
    }

    $('.cub-list').on('click', function(event) {
        var target = event.target;
        var li = target.closest('.cub-item');
        if (!li) return;
        disActive('.cub-item');
        highlight(li);
        let imgSrc = players.filter(item => item.isActive == true)[0].avatar;
        li.querySelector('img').setAttribute('src', imgSrc);
        let fildId = li.getAttribute('id');
        players.filter(item => item.isActive == true)[0].position = fildId;
    });
    function highlight(node) {
        node.classList.add('active');
    }

    $('.btn-close').on('click', function (e) {
        e.target.closest('.active').classList.remove('active');
        $('.chans li video').each(function () {
            this.currentTime = 0;
            this.pause();
        })
        $('.chans li .chans-text').each(function () {
            $(this).text('');
        })
        $('.chans li img').each(function () {
            $(this).attr('src','');
        })
    });
    $('.flip_effect_horizontal').on('click', function () {
        $(this).toggleClass('flip');
    });
    $('.btn-star-add').on('click', function () {
        var activeStars = Number(players.filter(item => item.isActive == true)[0].money);
        var activeCount = $('.player-item.active  .count');
        activeStars = activeStars + 10;
        players.filter(item => item.isActive == true)[0].money = activeStars;
        $('.player-item.active .count-num').text(activeStars);

        activeCount.addClass('money');
        var audio = $("#mySoundClip")[0];
        audio.play();
        setTimeout(function () {
            activeCount.removeClass('money');
        }, 700)
    });
    $('.btn-star-remove').on('click', function () {
        var activeStars = Number(players.filter(item => item.isActive == true)[0].money);
        var activeCount = $('.player-item.active  .count');
        activeStars = activeStars - 10;
        $('.player-item.active .count-num').text(activeStars);
        players.filter(item => item.isActive == true)[0].money = activeStars;
        activeCount.addClass('money');
        var audio = $("#mySoundFull")[0];
        audio.play();
        setTimeout(function () {
            activeCount.removeClass('money');
        }, 1600)
    });
// adminka
    var adminka = $('.admin-panel');

    $('.start').on('click', function() {
        adminka.removeClass('active');

        players.forEach(item => {
            var retObj = JSON.parse(localStorage.getItem(item.name));
            console.log($('.players player-item.active').find('.nick').text('mlia'));
            $('.player-item').each(function () {
                if($(this).find('.nick').text() == item.name){
                    console.log(this.querySelector('.count-num'))
                    this.querySelector('.count-num').textContent = retObj.money;
                }
            })

        });
    });

    //прикрепляем клик по заголовкам acc-head
    // $('.game-title .icon-arrow-down1').on('click', f_acc());
    $('#accordeon .game-description').slideUp(0);
    //прикрепляем клик по заголовкам acc-head
    $('#accordeon .game-title').on('click', f_acc);
    function f_acc(){
        $('.game-title').not($(this)).removeClass('active');
        $(this).toggleClass('active');
//скрываем все кроме того, что должны открыть
        $('#accordeon .game-description').not($(this).next()).slideUp(500);
// открываем или скрываем блок под заголовком, по которому кликнули
        $(this).next().slideToggle(500);
    }

    $('.settings-btn').on('click', settingsOpen);
    // $('#settingsOpen').on('click', settingsOpen);

    function settingsOpen() {
        $('.settings-btn').toggleClass('active');
        $('.settings-wrapper').toggleClass('active');
    }


    $('.btn-save').on('click', function () {
        players.forEach(item => {
            var player = JSON.stringify(item)
            localStorage.setItem(item.name, player);
        });

// localStorage.length - кількість елементів даних що зберігаються.
//     Методи:
// localStorage.key() - ім'я ключа за його індексом.
// localStorage.getItem() - поверне значення ключа.
// localStorage.setItem() - додає значення або оновлює якщо ключ вже існує.
// localStorage.removeItem() - видаляє елемент за назвою ключа.
// localStorage.clear() - очищає локальне сховище даних браузера.
    })
    $('.to-admin').on('click', function() {
        adminka.addClass('active');
    });

    $('#textWords').on('submit', function(event) {
        var ul = document.createElement('ul');
        ul.className = "gold";
        document.querySelector('.pop-up-gold .pop-up-content').appendChild(ul);
        var fieldValue = $('textarea[name = "gold"]').val();
        $('.text-words').text(fieldValue)
        var goldArray = fieldValue.split(' ');
        for(var i = 0; i<goldArray.length; i++){
            var text = goldArray[i]
            var newLi = document.createElement('li');
            newLi.innerHTML = text;
            ul.appendChild(newLi);
        }
    });

$('.control-players .btn-add').on('click', function () {
    $('.add-player').addClass('active');
})
$('.js-chans').on('click', function(event) {
    var target = event.target;
    var li = target.closest('LI');
    if (!li) return;
    setTimeout(function () {
        li.classList.add('active')
        const item = rundomQust(chansList, true);
        li.querySelector('.chans-text').textContent = item.text;
        li.querySelector('img').setAttribute('src', item.url);
    }, 800)
    li.querySelector('video').play()
});
    $('.js-magic-box').on('click', function(event) {
        var target = event.target;
        var li = target.closest('LI');
        if (!li) return;
        setTimeout(function () {
            li.classList.add('active')
            const item = rundomQust(magicBoxList, false);
            li.querySelector('.chans-text').textContent = item.text;
            if(item.url){
                li.querySelector('img').setAttribute('src', item.url);
            }else {
                li.classList.add('text')
            }
        }, 800)
        li.querySelector('video').play()
    });

// Игральные кости
    if($('.dice-roll').length){
        window.addEventListener('DOMContentLoaded', function () {

            function rollDice () {
                var audio = $('#cub')[0];
                audio.play();
                var diceSide1 = $('#dice-side-1');
                var diceSide2 = $('#dice-side-2');
                var status = document.getElementById('status');

                var side1 = Math.floor( Math.random() * 6 ) + 1;
                var side2 = Math.floor( Math.random() * 6 ) + 1;
                var diceTotal = side1 + side2;

                diceSide1.text(side1);
                diceSide2.text(side2);
                status.classList.add('active');
                status.innerHTML = 'Ходи ' + diceTotal + '. ';

                if ( side1 === side2 ) {
                    status.innerHTML += '<br> Дубль!  Кидай ще!';
                }
                var link1 = `url(images/rem/cub${side1}.png)`
                var link2 = `url(images/rem/cub${side2}.png)`
                diceSide1.css('background-image', link1);
                diceSide2.css('background-image', link2);
            }

            var buttonRollDice = document.querySelector('.dice-roll');
            buttonRollDice.addEventListener('click', rollDice, false);

        }, false);
    }
    $('.lang_menu').on('click', function (e) {
        const target = e.target;
        if(target.localName != "a")return;
        $('.lang_menu li a').removeClass('active');
        target.classList.add('active');


    })

// Игральные кости

});

