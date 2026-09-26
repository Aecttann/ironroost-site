export const site = {
  name: 'Ironroost',
  developer: 'Aectann',
  email: 'aectann101@gmail.com',
  origin: 'https://aecttann.github.io',
  basePath: '/ironroost-site/',
  effectiveDate: '2026-09-27',
  version: '1.0',
};

const emailLink = `<a href="mailto:${site.email}">${site.email}</a>`;
const googleLink = 'https://policies.google.com/privacy';
const googlePartnersLink = 'https://policies.google.com/technologies/partner-sites';
const crazyGamesLink = 'https://www.crazygames.com/privacy-policy';
const githubLink = 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement';

export const policies = {
  en: {
    title: 'Privacy policy',
    description: 'Ironroost privacy policy: local game saves, Google AdMob, privacy choices, children’s privacy, and how to contact Aectann.',
    skip: 'Skip to the policy',
    language: 'Policy language',
    eyebrow: 'IRONROOST / PRIVACY',
    heading: 'Your game.<br><span>Your privacy.</span>',
    intro: 'A clear view of what stays on your device, what our advertising services use, and the choices you have.',
    read: 'Read the policy',
    contactLink: 'Contact the developer',
    illustration: 'PLAYER PRIVACY',
    illustrationCaption: 'LESS DATA. MORE PLAY.',
    summaryLabel: 'At a glance',
    summary: [
      { title: 'No game account', text: 'No registration or in-app purchases. A local nickname is all you need for your personal records.' },
      { title: 'Your progress stays with you', text: 'Mobile saves live on your device. System backups and browser platforms may also keep a copy.' },
      { title: 'Ads, explained', text: 'Android uses Google AdMob. Ad data, age protection, and privacy controls are covered below.' },
    ],
    contents: 'IN THIS POLICY',
    question: 'Have a privacy question?',
    questionText: 'Get in touch directly with the developer.',
    updated: 'Last updated',
    date: '27 September 2026',
    version: 'Version',
    print: 'Print policy',
    back: 'Back to top',
    footer: 'An original tank arcade by Aectann.',
    footerNote: 'This website has no advertising or analytics scripts.',
    sections: [
      { id: 'about', title: 'Who we are & what this covers', html: `
        <p>Ironroost is an arcade tank game developed by <strong>${site.developer}</strong>. This policy explains how information is handled in the Android, iOS, and browser versions of the game, and on this privacy website. “We” refers to the developer.</p>
        <p>The game does not require an Ironroost account, ask for your real name or email address, or offer in-app purchases. An optional nickname is used for personal records. Platform accounts, such as a CrazyGames account, are managed by that platform separately.</p>
        <p>Privacy contact: ${emailLink}.</p>` },
      { id: 'local-data', title: 'Game data saved on your device', html: `
        <p>The game saves information needed to remember your progress and preferences:</p>
        <ul><li>Unlocked and completed stages, attempt counters, and sound preferences.</li><li>Your nickname, personal scores, campaign and endless records, and gameplay statistics.</li><li>Collection unlocks, daily reward history, streaks, and bonus lives.</li><li>On Android, rewarded-ad display times used to limit how often those ads appear, and pending run results needed to preserve records after an interruption.</li></ul>
        <p>Mobile saves are kept in the app’s local storage. The standalone browser version uses browser storage. We do not operate a developer-run server for these saves or a separate gameplay analytics service.</p>
        <p><strong>Backups matter:</strong> Android can include the game’s saved preferences in cloud backup or device transfer. Other device backups may also contain app data, depending on your system settings. Your operating-system provider manages these backups; we do not receive them. Browser platform storage is described in <a href="#platforms">section 6</a>.</p>
        <p>Choose a nickname that does not reveal your real name, contact details, or other personal information.</p>` },
      { id: 'advertising', title: 'Advertising on Android', html: `
        <p>The Android version uses <strong>Google AdMob (Google Mobile Ads SDK)</strong> to support the free game. Banners appear in menu screens. Rewarded ads are optional: you can choose to watch one for an extra life or an available daily streak freeze. Rewarded ads do not open automatically.</p>
        <p>Google’s advertising SDK may collect and share:</p>
        <ul><li>IP address, which can indicate an approximate location.</li><li>Device or account identifiers, including the advertising ID and app set ID when available and permitted.</li><li>Interactions with the app and ads, such as launches, taps, and video views.</li><li>Diagnostic and performance information about the app and SDK.</li></ul>
        <p>Google uses this information for advertising, measurement, and fraud prevention. Collection depends on age treatment, consent, device settings, and the ad service’s configuration. Non-personalized ads can still use technical data; they do not mean “no data collection.”</p>
        <p>See <a href="${googleLink}">Google’s Privacy Policy</a> and <a href="${googlePartnersLink}">how Google uses information from partner apps</a>. The iOS version does not integrate AdMob.</p>` },
      { id: 'choices', title: 'Age selection & advertising choices', html: `
        <p>On Android, an age screen appears before the game starts its advertising and consent requests. Your exact age is not saved as a game preference or sent to AdMob by the game. The game keeps an adult or protected-audience group for the current session; the age form may temporarily restore its input after an interruption.</p>
        <p>Google’s User Messaging Platform manages consent messages where applicable. When required by Google’s consent configuration, you can revisit your choices through <strong>Settings → Ad privacy settings</strong>. Availability of this option depends on your region and consent status. For adults, ad personalization depends on the applicable consent and advertising settings.</p>
        <p>You can also manage, reset, or delete your advertising ID using the controls available in your Android settings. Changing consent does not delete your game progress. Choosing not to watch a rewarded ad does not prevent you from playing.</p>` },
      { id: 'children', title: 'Children’s privacy', html: `
        <p>Ironroost’s audience includes children. On Android, players who enter an age under 18, skip the age question, or give an unknown or invalid age receive the protected advertising treatment.</p>
        <p>For this group, the game disables ad personalization, requests child-directed advertising treatment, and marks the player as under the age of consent for Google’s consent system. All Android ad requests use Google’s general-audience ad content rating.</p>
        <p>These safeguards limit advertising data use; they do not promise that an advertising service processes no technical information. The game does not ask children for contact information. Parents and guardians can contact ${emailLink} with concerns or requests concerning information they have provided to us.</p>
        <p>Browser platforms have their own minimum ages, accounts, and parental rules. The Android age screen does not control a browser platform’s data practices.</p>` },
      { id: 'platforms', title: 'Browser platforms & iOS', html: `
        <p><strong>Standalone browser play:</strong> game saves are stored in your browser. Clearing that site’s storage removes its local saves.</p>
        <p><strong>CrazyGames:</strong> when the platform integration is active, the game uses its Data Module to store progress, settings, and records. The platform may synchronize this data through your CrazyGames account. The game also reports gameplay start/stop, level context, and campaign completion progress. If the platform enables its leaderboard for the game, a score can be submitted to CrazyGames.</p>
        <p>CrazyGames manages its own accounts, hosting, advertising, cookies, and platform analytics. These are subject to the <a href="${crazyGamesLink}">CrazyGames Privacy Policy</a> and its privacy controls.</p>
        <p><strong>iOS:</strong> the current game stores its progress and settings locally and does not integrate an advertising SDK or a separate analytics SDK. Apple and app stores may separately process download, device, or diagnostic information under their own settings and policies.</p>` },
      { id: 'sharing', title: 'How information is used & shared', html: `
        <p>Local game data is used to run the game, restore progress, remember preferences, maintain records, award achievements and daily rewards, and apply rewarded-ad display limits. We do not upload mobile game saves to our own server.</p>
        <p>The advertising and browser services described above receive information through their integrations and process it under their own policies. We do not sell the personal information you send directly to us or send support emails to advertisers.</p>
        <p>If you contact us, we receive your email address and the information you choose to include. We use it to respond, troubleshoot, and handle privacy requests. Our email service provider processes that correspondence. Please do not send passwords, payment details, or unnecessary sensitive information.</p>
        <p>Information we hold may be disclosed when required by law or necessary to protect legal rights, security, or users. Service providers may process information in countries other than yours; their policies describe their transfer safeguards.</p>` },
      { id: 'retention', title: 'Retention & deleting your data', html: `
        <p>Local saves remain until you remove them or the device/browser clears them. <strong>The in-game campaign reset only resets campaign progress; it does not erase all records, collection data, preferences, or ad-related storage.</strong></p>
        <ul><li><strong>Android:</strong> clear Ironroost’s app storage in your device settings to remove its local data. Uninstalling also removes local app data, but system backup may restore saves after reinstalling. Manage backup copies through your device or backup provider.</li><li><strong>iOS:</strong> delete the app to remove its local data. Offloading the app can retain data. Manage any backup copies separately through your device or backup provider.</li><li><strong>Browser:</strong> clear the game site’s browser data. On CrazyGames, platform-managed or synchronized data may remain; use the platform’s account/privacy tools or contact its support to request removal.</li><li><strong>Support messages:</strong> contact us to request deletion of correspondence. We keep it only as long as needed to handle the request and any applicable legal obligations or disputes.</li></ul>
        <p>Google, CrazyGames, GitHub, and backup providers set their own retention periods. Clearing game data does not delete information they already hold; use their privacy controls or contact them directly. There is no Ironroost account to delete.</p>` },
      { id: 'rights', title: 'Your rights & data security', html: `
        <p>Depending on where you live, you may have rights to access, correct, erase, restrict, or object to processing of personal information, to data portability, and to withdraw consent. You may also complain to your local data protection authority.</p>
        <p>For information you send us, use ${emailLink} to exercise these rights. We may need limited information to verify your request and will respond within the period required by applicable law. We cannot access or remotely erase saves that exist only on your device.</p>
        <p>Where applicable, we rely on legitimate interests to respond to support requests and secure our services, consent for processing that requires it, and legal obligations when we must retain or disclose information. Providers explain their own legal bases in their policies.</p>
        <p>We use the app’s platform-provided storage protections. Google states that Mobile Ads SDK data is encrypted in transit. No storage or transmission method is completely secure.</p>` },
      { id: 'website', title: 'This privacy website', html: `
        <p>This website is hosted on <strong>GitHub Pages</strong>. We do not add advertising, analytics scripts, tracking cookies, embedded third-party content, or external font services. The language switch uses separate page URLs and does not save a language preference on your device. English is the default.</p>
        <p>GitHub logs visitors’ IP addresses for security when serving Pages sites. Its handling of hosting and technical information is covered by the <a href="${githubLink}">GitHub Privacy Statement</a>. Following an external link or sending an email involves the service you choose to use and its own privacy practices.</p>` },
      { id: 'updates', title: 'Changes to this policy', html: `
        <p>We may update this policy when the game, its services, or applicable requirements change. The date and version at the top identify the current policy. Material changes will be communicated through this page and, where appropriate, through the game or its store listing.</p>
        <p>The English and Ukrainian pages describe the same practices. If something is unclear or appears inconsistent, please contact us.</p>` },
      { id: 'contact', title: 'Contact the developer', html: `
        <p>For privacy questions, data requests, or concerns about Ironroost, contact <strong>${site.developer}</strong>.</p>
        <a class="contact-email" href="mailto:${site.email}">${site.email}<span aria-hidden="true">↗</span></a>
        <p class="contact-hint">Include “Ironroost privacy” in the subject and tell us which platform you use. Share only the information needed to handle your request.</p>` },
    ],
  },
  uk: {
    title: 'Політика конфіденційності',
    description: 'Політика конфіденційності Ironroost: збереження гри, Google AdMob, налаштування реклами, захист дітей і контакт розробника Aectann.',
    skip: 'Перейти до політики',
    language: 'Мова політики',
    eyebrow: 'IRONROOST / КОНФІДЕНЦІЙНІСТЬ',
    heading: 'Твоя гра.<br><span>Твоя приватність.</span>',
    intro: 'Зрозуміло про те, що зберігається на пристрої, які дані використовують рекламні сервіси та який вибір маєш ти.',
    read: 'Читати політику',
    contactLink: 'Зв’язатися з розробником',
    illustration: 'ПРИВАТНІСТЬ ГРАВЦЯ',
    illustrationCaption: 'МЕНШЕ ДАНИХ. БІЛЬШЕ ГРИ.',
    summaryLabel: 'Коротко про головне',
    summary: [
      { title: 'Без ігрового акаунта', text: 'Без реєстрації та покупок у грі. Для особистих рекордів достатньо локального нікнейму.' },
      { title: 'Прогрес залишається з тобою', text: 'На телефоні збереження локальні. Системні резервні копії та браузерні платформи також можуть зберігати їх.' },
      { title: 'Відкрито про рекламу', text: 'На Android працює Google AdMob. Рекламні дані, захист за віком і налаштування описані нижче.' },
    ],
    contents: 'У ЦІЙ ПОЛІТИЦІ',
    question: 'Є питання про приватність?',
    questionText: 'Напиши розробнику напряму.',
    updated: 'Останнє оновлення',
    date: '27 вересня 2026 року',
    version: 'Версія',
    print: 'Друкувати політику',
    back: 'На початок',
    footer: 'Оригінальна танкова аркада від Aectann.',
    footerNote: 'Цей сайт не містить рекламних чи аналітичних скриптів.',
    sections: [
      { id: 'about', title: 'Хто ми та що охоплює політика', html: `
        <p>Ironroost — аркадна гра про танки від розробника <strong>${site.developer}</strong>. Ця політика пояснює, як обробляється інформація у версіях гри для Android, iOS і браузера, а також на цьому сайті. «Ми» означає розробника.</p>
        <p>Гра не потребує акаунта Ironroost, не запитує справжнього імені чи електронної адреси та не пропонує покупок у грі. Необов’язковий нікнейм використовується для особистих рекордів. Акаунтами платформ, наприклад CrazyGames, окремо керують відповідні платформи.</p>
        <p>Контакт із питань конфіденційності: ${emailLink}.</p>` },
      { id: 'local-data', title: 'Ігрові дані на твоєму пристрої', html: `
        <p>Гра зберігає інформацію, необхідну для твого прогресу та налаштувань:</p>
        <ul><li>Відкриті та пройдені рівні, лічильники спроб і налаштування звуку.</li><li>Нікнейм, особисті результати, рекорди кампанії та нескінченного режиму, ігрову статистику.</li><li>Відкриті картки колекції, історію щоденних нагород, серії та бонусні життя.</li><li>На Android — час показу реклами з винагородою для обмеження її частоти та незавершені результати забігів для збереження рекордів після переривання.</li></ul>
        <p>На мобільних пристроях збереження містяться в локальному сховищі застосунку. Окрема браузерна версія використовує сховище браузера. Ми не маємо власного сервера для цих збережень чи окремого сервісу ігрової аналітики.</p>
        <p><strong>Про резервні копії:</strong> Android може включати збережені дані гри до хмарної резервної копії або перенесення на інший пристрій. Інші резервні копії пристрою також можуть містити дані застосунку залежно від системних налаштувань. Ними керує постачальник операційної системи; ми їх не отримуємо. Сховище браузерних платформ описане в <a href="#platforms">розділі 6</a>.</p>
        <p>Обирай нікнейм, який не розкриває справжнього імені, контактів чи іншої особистої інформації.</p>` },
      { id: 'advertising', title: 'Реклама на Android', html: `
        <p>Версія для Android використовує <strong>Google AdMob (Google Mobile Ads SDK)</strong> для підтримки безкоштовної гри. Банери показуються на екранах меню. Реклама з винагородою добровільна: її можна переглянути за додаткове життя або доступне замороження щоденної серії. Така реклама не відкривається автоматично.</p>
        <p>Рекламний SDK Google може збирати та передавати:</p>
        <ul><li>IP-адресу, яка може вказувати на приблизне місцезнаходження.</li><li>Ідентифікатори пристрою чи акаунта, зокрема рекламний ідентифікатор і app set ID, коли вони доступні та дозволені.</li><li>Взаємодії із застосунком і рекламою: запуски, натискання, перегляди відео.</li><li>Діагностичні дані та інформацію про роботу застосунку й SDK.</li></ul>
        <p>Google використовує ці дані для реклами, вимірювання її ефективності та запобігання шахрайству. Збір залежить від вікової групи, згоди, налаштувань пристрою та рекламного сервісу. Неперсоналізована реклама теж може використовувати технічні дані; вона не означає «дані не збираються».</p>
        <p>Докладніше: <a href="${googleLink}">Політика конфіденційності Google</a> і <a href="${googlePartnersLink}">використання Google інформації із застосунків партнерів</a>. У версії для iOS AdMob не інтегрований.</p>` },
      { id: 'choices', title: 'Вік і налаштування реклами', html: `
        <p>На Android екран віку з’являється до запуску грою рекламних запитів і запитів щодо згоди. Точний вік не записується в збереження гри та не передається грою до AdMob. Для поточного сеансу гра тримає лише групу: дорослий або захищена аудиторія. Форма віку може тимчасово відновлювати введене значення після переривання.</p>
        <p>Google User Messaging Platform керує повідомленнями про згоду там, де це застосовно. Коли цього потребують налаштування згоди Google, змінити вибір можна через <strong>Налаштування → Налаштування конфіденційності реклами</strong>. Доступність цього пункту залежить від регіону та стану згоди. Для дорослих персоналізація реклами залежить від відповідної згоди та рекламних налаштувань.</p>
        <p>Також можна керувати рекламним ідентифікатором, скинути або видалити його через доступні налаштування Android. Зміна згоди не видаляє ігровий прогрес. Відмова від перегляду реклами з винагородою не заважає грати.</p>` },
      { id: 'children', title: 'Конфіденційність дітей', html: `
        <p>Аудиторія Ironroost включає дітей. На Android гравці, які вказали вік до 18 років, пропустили питання або ввели невідомий чи некоректний вік, отримують захищений режим реклами.</p>
        <p>Для цієї групи гра вимикає персоналізацію реклами, запитує режим реклами для дітей і позначає гравця як такого, що не досяг віку згоди, у системі згоди Google. Усі рекламні запити Android використовують рейтинг рекламного вмісту Google для загальної аудиторії.</p>
        <p>Ці заходи обмежують використання рекламних даних, але не гарантують, що рекламний сервіс не обробляє жодної технічної інформації. Гра не запитує контактів у дітей. Батьки й опікуни можуть звернутися на ${emailLink} із питаннями чи запитами щодо інформації, яку вони надали нам.</p>
        <p>Браузерні платформи мають власні мінімальні вікові вимоги, акаунти та правила для батьків. Екран віку Android не керує обробкою даних браузерною платформою.</p>` },
      { id: 'platforms', title: 'Браузерні платформи та iOS', html: `
        <p><strong>Окрема браузерна версія:</strong> збереження містяться у браузері. Очищення сховища цього сайту видаляє локальні збереження.</p>
        <p><strong>CrazyGames:</strong> коли інтеграція з платформою активна, гра використовує її Data Module для збереження прогресу, налаштувань і рекордів. Платформа може синхронізувати ці дані через твій акаунт CrazyGames. Гра також повідомляє про початок і зупинку ігрового процесу, поточний рівень і відсоток проходження кампанії. Якщо платформа ввімкне свою таблицю рекордів для гри, результат може передаватися до CrazyGames.</p>
        <p>CrazyGames окремо керує акаунтами, хостингом, рекламою, cookies та аналітикою платформи. На них поширюються <a href="${crazyGamesLink}">Політика конфіденційності CrazyGames</a> і налаштування приватності платформи.</p>
        <p><strong>iOS:</strong> поточна версія зберігає прогрес і налаштування локально, без рекламного чи окремого аналітичного SDK. Apple і магазини застосунків можуть окремо обробляти інформацію про завантаження, пристрій чи діагностику за власними налаштуваннями й політиками.</p>` },
      { id: 'sharing', title: 'Використання та передача даних', html: `
        <p>Локальні дані потрібні для роботи гри, відновлення прогресу, збереження налаштувань, ведення рекордів, досягнень і щоденних нагород, а також обмеження частоти реклами з винагородою. Ми не завантажуємо мобільні збереження на власний сервер.</p>
        <p>Описані вище рекламні та браузерні сервіси отримують інформацію через інтеграції й обробляють її за власними політиками. Ми не продаємо особисту інформацію, яку ти надсилаєш нам напряму, і не передаємо листування підтримки рекламодавцям.</p>
        <p>Якщо ти пишеш нам, ми отримуємо твою електронну адресу та інформацію, яку ти вирішиш додати. Вона потрібна для відповіді, вирішення проблем і обробки запитів щодо приватності. Листування обробляє наш поштовий сервіс. Не надсилай паролів, платіжних реквізитів чи зайвих чутливих даних.</p>
        <p>Інформація, яку ми маємо, може розкриватися на вимогу закону або для захисту законних прав, безпеки чи користувачів. Постачальники сервісів можуть обробляти дані в інших країнах; їхні політики описують заходи захисту таких передач.</p>` },
      { id: 'retention', title: 'Строки зберігання та видалення', html: `
        <p>Локальні збереження залишаються, доки ти їх не видалиш або їх не очистить пристрій чи браузер. <strong>Скидання кампанії в грі очищає лише прогрес кампанії; воно не видаляє всі рекорди, колекцію, налаштування та рекламні дані.</strong></p>
        <ul><li><strong>Android:</strong> очисть сховище застосунку Ironroost у налаштуваннях пристрою, щоб видалити локальні дані. Видалення застосунку теж прибирає локальні дані, але системна резервна копія може відновити їх після повторного встановлення. Керуй резервними копіями через пристрій або їхнього постачальника.</li><li><strong>iOS:</strong> видали застосунок, щоб прибрати локальні дані. Вивантаження застосунку може залишити їх. Резервними копіями керуй окремо через пристрій або їхнього постачальника.</li><li><strong>Браузер:</strong> очисть дані сайту гри. На CrazyGames дані платформи чи синхронізовані дані можуть залишитися; скористайся налаштуваннями акаунта й приватності або звернися до підтримки платформи щодо видалення.</li><li><strong>Листування:</strong> звернися до нас щодо його видалення. Ми зберігаємо його лише протягом часу, потрібного для обробки запиту та виконання застосовних юридичних обов’язків або врегулювання спорів.</li></ul>
        <p>Google, CrazyGames, GitHub і постачальники резервних копій визначають власні строки зберігання. Очищення гри не видаляє вже отримані ними дані; користуйся їхніми налаштуваннями приватності або звертайся напряму. Акаунта Ironroost для видалення немає.</p>` },
      { id: 'rights', title: 'Твої права та безпека даних', html: `
        <p>Залежно від місця проживання ти можеш мати право на доступ, виправлення, видалення, обмеження обробки чи заперечення проти неї, перенесення особистих даних і відкликання згоди. Також можна подати скаргу до місцевого органу захисту даних.</p>
        <p>Щодо інформації, надісланої нам, звертайся на ${emailLink}. Для перевірки запиту може знадобитися обмежена додаткова інформація. Ми відповімо у строк, передбачений застосовним законодавством. Ми не можемо отримати доступ або віддалено видалити збереження, що є лише на твоєму пристрої.</p>
        <p>Де це застосовно, ми спираємося на законні інтереси для відповідей підтримки та захисту сервісів, згоду для обробки, що її потребує, і юридичні обов’язки, коли необхідно зберігати чи розкривати інформацію. Постачальники пояснюють власні правові підстави у своїх політиках.</p>
        <p>Ми використовуємо захист сховища, який надає платформа застосунку. За інформацією Google, дані Mobile Ads SDK шифруються під час передачі. Жоден спосіб зберігання чи передачі не є повністю захищеним.</p>` },
      { id: 'website', title: 'Цей сайт політики', html: `
        <p>Цей сайт розміщений на <strong>GitHub Pages</strong>. Ми не додаємо реклами, аналітичних скриптів, tracking cookies, вбудованого стороннього вмісту чи зовнішніх сервісів шрифтів. Перемикач мов використовує окремі URL-адреси сторінок і не зберігає мовних налаштувань на пристрої. Англійська — мова за замовчуванням.</p>
        <p>GitHub записує IP-адреси відвідувачів із метою безпеки під час обслуговування Pages. Обробка технічної інформації та даних хостингу описана в <a href="${githubLink}">Політиці конфіденційності GitHub</a>. Перехід за зовнішнім посиланням або надсилання листа залучає обраний тобою сервіс із власними правилами приватності.</p>` },
      { id: 'updates', title: 'Зміни до політики', html: `
        <p>Ми можемо оновлювати політику, якщо змінюються гра, її сервіси або застосовні вимоги. Дата й версія на початку визначають поточну політику. Про суттєві зміни повідомлятимемо на цій сторінці та, де доречно, у грі чи її сторінці в магазині.</p>
        <p>Англійська й українська сторінки описують однакову обробку даних. Якщо щось незрозуміло або здається неузгодженим, звернися до нас.</p>` },
      { id: 'contact', title: 'Зв’язатися з розробником', html: `
        <p>Із питаннями про приватність, запитами щодо даних або зауваженнями стосовно Ironroost звертайся до <strong>${site.developer}</strong>.</p>
        <a class="contact-email" href="mailto:${site.email}">${site.email}<span aria-hidden="true">↗</span></a>
        <p class="contact-hint">Додай «Ironroost privacy» до теми листа та вкажи платформу, на якій граєш. Надавай лише інформацію, необхідну для обробки запиту.</p>` },
    ],
  },
};
