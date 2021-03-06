let topic = "Марксизм";
let questions = [
    {
        numb: 1,
        question: "Які два філософа розробили основну концепцію марксизму?",
        img: {
            src: "img/1.jpg",
            height: "167px",
            width: "256px",
        },
        answer: "Маркс і Енгельс",
        options: [
            "Енгельс і Вольтер",
            "Платон і Аристотель",
            "Маркс і Аристотель",
            "Маркс і Енгельс"
        ]
    },
    {
        numb: 2,
        question: "Як називалась перша організація, лідером якої був обраний 20-річний Карл Маркс?  ",
        answer: "Клуб трірських любителів пива",
        options: [
            "Клуб трірських любителів пива",
            "Союз справедливих",
            "Міжнародне товариство робітників\n",
            "Незалежна робоча партія"
        ]
    },
    {
        numb: 3,
        question: "Ми звикли уявляти Карла Маркса зрілим сивочолим чоловіком, а чи зможете ви вгадати, " +
            "чи це наш герой в юності",
        img: {
            src: "img/KarlMarx.jpg",
            height: "197px",
            width: "146px",
        },
        answer: "Так, точно він",
        options: [
            "Так, точно він",
            "Взагалі ні",
            "Не знаю",
            "Це взагалі хто?"
        ]
    },
    {
        numb: 4,
        question: "У трьох з перерахованих міст Карл Маркс навчався. Визначте місто, який не бачив ні гімназиста," +
            " ні студента Маркса.",
        img: {
            src: "img/3.jpg",
            height: "229px",
            width: "191px",
        },
        answer: "Бремен",
        options: [
            "Трір",
            "Бонн",
            "Берлін",
            "Бремен"
        ]
    },
    {
        numb: 5,
        question: "Яким словом Маркс назвав правлячий клас?",
        img: {
            src: "img/4.jpg",
            height: "237px",
            width: "421,5px",
        },
        answer: "Буржуазія",
        options: [
            "Буржуазія",
            "Монополізаторам",
            "Пролетаріат",
            "Орендодавці"
        ]
    },
    {
        numb: 6,
        question: "Якщо «правлячий клас» називався буржуазією, то як Маркс називав робочих?",
        answer: "Пролетаріат",
        options: [
            "Селяни",
            "Жебраки",
            "Пролетаріат",
            "Бродяги"
        ]
    },
    {
        numb: 7,
        question: "Критерієм суспільного прогресу в марксистській філософії виступає?",
        answer: "Рівень розвитку продуктивних сил",
        options: [
            "Рівень розвитку людей",
            "Рівень розвитку продуктивних сил",
            "Рівень розвитку наукових знань",
            "Ступінь моральної досконалості людини"
        ]
    },
    {
        numb: 8,
        question: "Матеріалісти вважали, що людина:",
        answer: "Талановита і геніальна істота",
        options: [
            "Ніхто",
            "Творець духовних цінностей",
            "Талановита і геніальна істота",
            "Виступає як спостерігач природи"
        ]
    },
    {
        numb: 9,
        question: "Як називається найбільша праця Карла Маркса?",
        answer: "Капітал",
        options: [
            "ГДЗ Філософія",
            "Економіка",
            "Маркетинг",
            "Капітал"
        ]
    },
    {
        numb: 10,
        question: "Яку назву мала невелика брошура, написана Карлом Марксом і Фрідріхом Енгельсом," +
            " в якій викладені всі ідеї комунізму?",
        answer: "Комуністичний маніфест",
        options: [
            "Моя боротьба",
            "Республіка",
            "Das Kapital",
            "Комуністичний маніфест"
        ]
    },
    {
        numb: 11,
        question: "Закінчить фразу:",
        img: {
            src: "img/10.jpg",
            height: "200px",
            width: "425px",
        },
        answer: "Змінити його",
        options: [
            "Не чіпати його",
            "Змінити його",
            "Зберегти його",
            "Зрозуміти його"
        ]
    },
    {
        numb: 12,
        question: "Історичний матеріалізм є розвитком філософії історії ...",
        answer: "Гегеля",
        options: [
            "Канта",
            "Гегеля",
            "Фіхте",
            "Фейєрбаха"
        ]
    },
    {
        numb: 13,
        question: "Філософський компонент марксизму-ленінізму - це ...",
        answer: "діалектичний матеріалізм",
        options: [
            "науковий комунізм",
            "соціалістичний реалізм",
            "діалектичний матеріалізм",
            "емпіріокритицизм"
        ]
    },
    {
        numb: 14,
        question: "Закінчите фразу з «Маніфесту комуністичної партії»: «Історія всіх товариств, які досі існують була ...»:",
        answer: "історією боротьби класів",
        options: [
            "поганим сном, від якого неможливо було прокинутися",
            "сповнена шуму і люті і позбавлена будь-якого сенсу",
            "історією гноблення одних людей іншими",
            "історією боротьби класів"
        ]
    },
    {
        numb: 15,
        question: "З точки зору історичного матеріалізму, базисом є:",
        answer: "Спосіб виробництва матеріальних благ",
        options: [
            "Система суспільних відносин",
            "Політична організація суспільства",
            "Спосіб виробництва матеріальних благ",
            "Пануюча ідеологія"
        ]
    },
    {
        numb: 16,
        question: "Якої з перерахованих суспільно-економічних формацій не існує?",
        answer: "Анархізм",
        options: [
            "Анархізм",
            "Феодалізм",
            "Капіталізм",
            "Комунізм"
        ]
    },
    {
        numb: 17,
        question: "Коли пролетар добровільно приймає буржуазну ідеологію - це:",
        answer: "Помилкова свідомість",
        options: [
            "Обуржуазнювання",
            "Відчуження",
            "Несвідомість",
            "Помилкова свідомість"
        ]
    },
    {
        numb: 18,
        question: "Що таке описаний Марксом «товарний фетишизм»?",
        answer: "Це загальне відчуття, що всередині товарів укладена незалежна від нас цінність ( «це стільки коштує»)",
        options: [
            "Ненаситне бажання купувати, яке охоплює людей в ринковому суспільстві",
            "Це загальне відчуття, що всередині товарів укладена незалежна від нас цінність ( «це стільки коштує»)",
            "Хвороблива пристрасть людини до конкретного виду товару, аналогічне психологічної залежності дитини від матері",
            "Бажання буржуа продавати все більше будь-що-будь в рамках гонки за збільшенням торгового обороту"
        ]
    },
    {
        numb: 19,
        question: "У чому Маркс бачив головну проблему і протиріччя капіталістичної системи?",
        answer: "Люди створюють ресурси разом, але доступ до цих створеним ресурсів мають одиниці",
        options: [
            "Не знаю",
            "Капітал поступово втрачає зв'язок з реальним промисловістю. Одного разу гроші втратять стійку цінність, світова бульбашка лусне - і вся система завалиться",
            "Люди створюють ресурси разом, але доступ до цих створеним ресурсів мають одиниці",
            "Система змушує людей робити за гроші те, що вони не стали б робити безкоштовно"
        ]
    },
    {
        numb: 20,
        question: "У своїх ранніх роботах Маркс безжально критикує «ідеологію». Але ж він поділяв ідеології на свої (прогресивні, революційні) і класово чужі (буржуазні, реакційні)? Чи ні?",
        answer: "Маркс заперечував і викривав будь-яку ідеологію, як брехню, необхідну людям, щоб обдурити себе і прийняти нестерпно і абсурдно влаштоване суспільство",
        options: [
            "Звичайно, в марксизмі буває правильна, пролетарська ідеологія і безліч неправильних. Ленін адже писав про соціалістичну ідеологію, яка дозволить радянському суспільству крокувати в щасливе безкласове майбутнє",
            "Маркс називав будь-яку ідеологію «хибним свідомістю», а марксизм вважав «істинним свідомістю», яке перетворює історію",
            "Маркс заперечував і викривав будь-яку ідеологію, як брехню, необхідну людям, щоб обдурити себе і прийняти нестерпно і абсурдно влаштоване суспільство",
            "Не знаю"
        ]
    }




];