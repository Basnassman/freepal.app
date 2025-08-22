<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>FREEPAL | الثورة الرقمية لفلسطين</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #f5f3ef, #e4e2dc);
      color: black;
      overflow-x: hidden;
    }
    .hero {
      display: block;
      width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
      position: relative;
      top: 0;
    }
    .headline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 25px;
  font-size: 2rem;
  font-weight: bold;
  color: #b8860b; /* ذهبي داكن */
  border: 4px solid #d4af37; /* ذهبي فاتح */
  text-align: center;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.4);
  position: relative;
  background: linear-gradient(90deg, rgba(212,175,55,0.2) 0%, rgba(255,255,255,0.1) 50%, rgba(212,175,55,0.2) 100%);
  background-size: 200% 100%;
  animation: slideBorder 3s linear infinite, glowEffect 2s ease-in-out infinite;
  border-radius: 8px;
}

/* حركة الإطار */
@keyframes slideBorder {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* تأثير اللمعة */
@keyframes glowEffect {
  0%, 100% {
    box-shadow: 0 0 10px #d4af37, 0 0 20px #ffd700;
  }
  50% {
    box-shadow: 0 0 20px #ffd700, 0 0 40px #fff8dc;
  }
}
    @keyframes fadeSlideIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .lang-toggle {
      position: fixed;
      top: 10px;
      padding: 10px 20px;
      background-color: #006400;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      z-index: 2000;
      display: inline-block;
      width: auto;
      box-sizing: border-box;
    }
    .lang-toggle.ar {
      left: 10px;
      right: auto;
    }
    .lang-toggle.other {
      right: 10px;
      left: auto;
    }
    .intro {
      text-align: center;
      font-size: 1.2rem;
      padding: 20px;
    }
    .logo-container {
      text-align: center;
      margin: 50px 0;
    }
    .logo-img {
      width: 150px;
      opacity: 0;
      transform: scale(0.8);
      transition: all 1s ease;
    }
    .logo-img.visible {
      opacity: 1;
      transform: scale(1.2);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% {
        transform: scale(1.2);
      }
      50% {
        transform: scale(1.3);
      }
    }
    .description {
      max-width: 800px;
      margin: 0 auto;
      font-size: 1.1rem;
      padding: 0 20px;
      line-height: 1.8;
      text-align: center;
    }
    footer {
      background: #1a1a1a;
      color: white;
      text-align: center;
      padding: 20px;
    }
    footer a {
      color: #FFD700;
      margin: 0 15px;
      font-size: 1.2rem;
      text-decoration: none;
    }
    .nav-toggle {
      position: fixed;
      top: 10px;
      padding: 10px 20px;
      background-color: #FFD700;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      z-index: 2000;
    }
    .nav-toggle.ar {
      right: 10px;
      left: auto;
    }
    .nav-toggle.other {
      left: 10px;
      right: auto;
    }
    nav {
      display: none;
      flex-direction: column;
      position: fixed;
      top: 60px;
      background: white;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
      z-index: 1500;
      min-width: 180px;
      max-width: 80%;
    }
    nav.nav-left {
      left: 10px;
      right: auto;
    }
    nav.nav-right {
      right: 10px;
      left: auto;
    }
    nav.show {
      display: flex;
    }
    nav a {
      padding: 10px 20px;
      text-decoration: none;
      color: #006400;
      border-bottom: 1px solid #ccc;
      display: block;
    }
  </style>
</head>
<body>  
 <video autoplay muted loop playsinline class="hero">  
    <source src="hero3.mp4" type="video/mp4" />  
    متصفحك لا يدعم تشغيل الفيديو.  
  </video>
  <h1 class="headline" id="mainTitle"></h1>  
  <p class="intro" id="intro"></p>  
  <h2 id="descriptionTitle"></h2>  
  <div class="description" id="description"></div>    <!-- زر تغيير اللغة -->  <button class="lang-toggle" onclick="toggleLangMenu()">🌐</button>

  <!-- قائمة اختيار اللغة (مخفية) -->    <div id="lang-menu" style="display:none; position: fixed; top: 50px; right: 10px; background: white; border: 1px solid #ccc; padding: 10px; z-index: 3000; border-radius: 8px;">  
    <button onclick="setLanguage('ar')">🇸🇦 العربية</button>  
    <button onclick="setLanguage('en')">🇬🇧 English</button>  
    <button onclick="setLanguage('tr')">🇹🇷 Türkçe</button>  
    <button onclick="setLanguage('de')">🇩🇪 Deutsch</button>  
    <button onclick="setLanguage('ru')">🇷🇺 Русский</button>  
    <button onclick="setLanguage('ja')">🇯🇵 日本語</button>  
    <button onclick="setLanguage('zh')">🇨🇳 中文</button>  
    <button onclick="setLanguage('es')">🇪🇸 Español</button>  
  </div>    <!-- زر القائمة التنقل -->  <button class="nav-toggle ar" onclick="toggleNav()">☰</button>

  <nav>  
    <!-- روابط التنقل مع إخفاء افتراضي -->  
    <a href="index.html" data-lang="ar" style="display:none;">الرئيسية</a>  
    <a href="whitepaper.html" data-lang="ar" style="display:none;">الورقة البيضاء</a>  
    <a href="airdrop.html" data-lang="ar" style="display:none;">الإنزال الجوي</a>  
    <a href="buy.html" data-lang="ar" style="display:none;">كيف تشتري</a>  
    <a href="team.html" data-lang="ar" style="display:none;">الفريق</a>  <a href="index.html" data-lang="en" style="display:none;">Home</a>  
<a href="whitepaper.html" data-lang="en" style="display:none;">Whitepaper</a>  
<a href="airdrop.html" data-lang="en" style="display:none;">Airdrop</a>  
<a href="buy.html" data-lang="en" style="display:none;">How to Buy</a>  
<a href="team.html" data-lang="en" style="display:none;">Team</a>  

<a href="index.html" data-lang="tr" style="display:none;">Ana Sayfa</a>  
<a href="whitepaper.html" data-lang="tr" style="display:none;">Teknik Doküman</a>  
<a href="airdrop.html" data-lang="tr" style="display:none;">Airdrop</a>  
<a href="buy.html" data-lang="tr" style="display:none;">Nasıl Alınır</a>  
<a href="team.html" data-lang="tr" style="display:none;">Ekip</a>  

<a href="index.html" data-lang="de" style="display:none;">Startseite</a>  
<a href="whitepaper.html" data-lang="de" style="display:none;">Whitepaper</a>  
<a href="airdrop.html" data-lang="de" style="display:none;">Airdrop</a>  
<a href="buy.html" data-lang="de" style="display:none;">Kaufen</a>  
<a href="team.html" data-lang="de" style="display:none;">Team</a>  

<a href="index.html" data-lang="ru" style="display:none;">Главная</a>  
<a href="whitepaper.html" data-lang="ru" style="display:none;">Белая книга</a>  
<a href="airdrop.html" data-lang="ru" style="display:none;">Эйрдроп</a>  
<a href="buy.html" data-lang="ru" style="display:none;">Как купить</a>  
<a href="team.html" data-lang="ru" style="display:none;">Команда</a>  

<a href="index.html" data-lang="ja" style="display:none;">ホーム</a>  
<a href="whitepaper.html" data-lang="ja" style="display:none;">ホワイ ト ペーパー</a>  
<a href="airdrop.html" data-lang="ja" style="display:none;">エアドロップ</a>  
<a href="buy.html" data-lang="ja" style="display:none;">購入方法</a>  
<a href="team.html" data-lang="ja" style="display:none;">チーム</a>  

<a href="index.html" data-lang="zh" style="display:none;">首页</a>  
<a href="whitepaper.html" data-lang="zh" style="display:none;">白皮书</a>  
<a href="airdrop.html" data-lang="zh" style="display:none;">空投</a>  
<a href="buy.html" data-lang="zh" style="display:none;">购买方式</a>  
<a href="team.html" data-lang="zh" style="display:none;">团队</a>  

<a href="index.html" data-lang="es" style="display:none;">Inicio</a>  
<a href="whitepaper.html" data-lang="es" style="display:none;">Libro Blanco</a>  
<a href="airdrop.html" data-lang="es" style="display:none;">Airdrop</a>  
<a href="buy.html" data-lang="es" style="display:none;">Cómo Comprar</a>  
<a href="team.html" data-lang="es" style="display:none;">Equipo</a>

  </nav>  
   <div class="logo-container">  
    <img src="free2.jpg" alt="شعار FREEPAL" class="logo-img" id="free2alLogo" />  
  </div>    <footer>  
    <a href="#">X</a>  
    <a href="#">Telegram</a>  
    <a href="#">TikTok</a>  
  </footer>

 <script>
  const supportedLanguages = ['ar', 'en', 'tr', 'de', 'ru', 'ja', 'zh', 'es'];
  let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

  const readMoreText = {
    ar: { more: '[قراءة المزيد]', hide: '[إخفاء]' },
    en: { more: '[Read More]', hide: '[Hide]' },
    tr: { more: '[Daha Fazla]', hide: '[Gizle]' },
    de: { more: '[Mehr Lesen]', hide: '[Verbergen]' },
    ru: { more: '[Подробнее]', hide: '[Скрыть]' },
    ja: { more: '[続きを読む]', hide: '[閉じる]' },
    zh: { more: '[阅读更多]', hide: '[隐藏]' },
    es: { more: '[Leer Más]', hide: '[Ocultar]' }
  };

  const translations = {
    ar: {
      headline: "📜FREEPAL — الورقة البيضاء",
      intro: "● عملة FREEPAL هي عملة رقمية مستوحاة من روح الحرية والعدالة، وتهدف إلى تمثيل صوت الشعوب الحرة، خاصة القضية الفلسطينية.",
      description: `
        <p style="font-weight:bold; font-size:1.4em;">🟢 1. المقدمة</p>
        <p>● عملة FREEPAL هي عملة رقمية مستوحاة من روح الحرية والعدالة، وتهدف إلى تمثيل صوت الشعوب الحرة، خاصة القضية الفلسطينية.<br>
        ● FREEPAL ليست مجرد ميم كوين، بل رمز رقمي للتضامن والدعم والمجتمع.</p>
        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

        <p style="font-weight:bold; font-size:1.4em;">🟡 2. رؤية المشروع</p>
        <p>● نؤمن أن العملات الرقمية ليست فقط للربح، بل أيضًا أداة للتمكين والنشر والتأثير.<br>
        ● نحن نسعى لبناء مجتمع عالمي موحد يدعم القضايا العادلة من خلال قوة التشفير واللامركزية.</p>
        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

        <p style="font-weight:bold; font-size:1.4em;">🔵 3. معلومات العملة</p>
        <p>● اسم العملة: FREEPAL<br>
        ● الرمز: FREP<br>
        ● الشبكة: Solana<br>
        ● الإجمالي المعروض: 10,000,000,000 توكن<br>
        ● الضرائب: 0%<br>
        ● العقد الذكي: [يتم إضافته لاحقًا]</p>
        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

        <p style="font-weight:bold; font-size:1.4em;">🟣 4. التوزيع /القسم النسبة (%)</p>
        <p>● السيولة ، التداول (40%)<br>
        ● الإنزال الجوي (Airdrop) (5%)<br>
        ● المجتمع ، المكافآت (5%)<br>
        ● فريق العمل ، التطوير (20%)<br>
        ● المحفظة الخيرية (10%) <span id="charity-more" style="color:blue;cursor:pointer;">[قراءة المزيد]</span></p>
        <div id="charity-hidden" style="display:none; margin-top:10px; direction: rtl;">
          ● سيتم تخصيص 10% من إجمالي العملة في محفظة خيرية شفافة تهدف إلى دعم القضايا الإنسانية، خاصةً المبادرات المرتبطة بفلسطين والمجتمعات المتضررة عالميًا.<br><br>
          <b> آلية العمل:</b><br>
          ● المحفظة ستكون معلنة العنوان ويمكن لأي شخص تتبع معاملاتها عبر البلوكشين.<br>
          ● صرف الأموال يتم بناءً على تصويت المجتمع أو وفق خطة واضحة تنشر مسبقًا.<br>
          ● الشراكة مع منظمات موثوقة لضمان وصول الدعم لمستحقيه.<br><br>
          <b> الاستخدامات المحتملة:</b><br>
          ● دعم الحملات الإنسانية والإغاثية.<br>
          ● تمويل مشاريع تعليمية أو صحية.<br>
          ● مساعدة الأسر المتضررة من الحروب والكوارث.
        </div>
        <p>● الأحتياط ، التوسع (20%) <span id="reserve-more" style="color:blue; cursor:pointer;">[قراءة المزيد]</span></p>
        <div id="reserve-hidden" style="display:none; margin-top:10px; direction: rtl;">
          <b> مشروع الألعاب والتطبيقات (ضمن خطة التوسع)</b><br><br>
          ● في إطار استراتيجية التوسع الخاصة بـ FREEPAL، سيتم تخصيص جزء من الاحتياط لتطوير ألعاب وتطبيقات تفاعلية تهدف إلى تعزيز انتشار العملة وبناء مجتمع نشط ومستدام.<br><br>
          <b> الهدف:</b><br>
          ● دمج عملة FREEPAL في تجربة ترفيهية/تفاعلية ممتعة.<br>
          ● تحفيز المستخدمين على امتلاك وتداول العملة من خلال أنظمة المكافآت داخل الألعاب أو التطبيقات.<br>
          ● استخدام التكنولوجيا كأداة للترويج والدعم الإنساني.<br><br>
          <b> الأفكار المقترحة:</b><br>
           1. لعبة موبايل (Mobile Game)<br>
          ● لعبة بسيطة وشيقة (Puzzle، Runner أو Adventure).<br>
          ● نظام Play to Earn حيث يحصل اللاعبون على عملات FREEPAL كمكافأة على الإنجازات.<br><br>
           2. تطبيق مجتمعي تفاعلي<br>
          ● منصة صغيرة للدردشة أو التحديات بين الأعضاء.<br>
          ● يمكن للمستخدمين إرسال واستلام عملات FREEPAL مباشرة عبر التطبيق.<br><br>
           3. Mini-Games على الموقع<br>
          ● ألعاب HTML5 مباشرة من المتصفح، مربوطة بالمحفظة الرقمية للمستخدم.<br>
          ● فعاليات ومسابقات شهرية بجوائز بالعملة.<br><br>
          <b> الفائدة المتوقعة:</b><br>
          ● زيادة الطلب على العملة.<br>
          ● تعزيز الولاء والانتماء للمجتمع.<br>
          ● فتح مجالات جديدة للشراكات التجارية والتقنية.
        </div>
        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

        <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 8px;">🟠 5. خارطة الطريق ( Roadmap )</p>

        <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">المرحلة 1: الإطلاق</p>
        <p style="margin-top: 0; margin-bottom: 12px;">
          ● تصميم الشعار ، الموقع<br>
          ● تفعيل الموقع بعدة لغات<br>
          ● إطلاق العملة على الشبكة
        </p>

        <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">المرحلة 2: بناء المجتمع</p>
        <p style="margin-top: 0; margin-bottom: 12px;">
          ● حملات على X & Telegram<br>
          ● إطلاق الإنزال الجوي
        </p>

        <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">المرحلة 3: الإدراج ، التوسع</p>
        <p style="margin-top: 0; margin-bottom: 12px;">
          ● إدراج في CoinGecko & CMC<br>
          ● شراكات مع مشاريع داعمة<br>
          ● إدراج في منصة تداول مركزية
        </p>

        <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">المرحلة 4: التطوير</p>
        <p style="margin-top: 0; margin-bottom: 12px;">
          ● دمج العملة في مشاريع NFT<br>
          ● إطلاق أدوات تفاعلية للمجتمع
        </p>

        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

        <p style="font-weight:bold; font-size:1.4em;">🔴 6. الرسالة</p>
        <p>● FREEPAL ليست مجرد رمز رقمي — بل صرخة حرية. نحن نمثل كل من لا صوت له في العالم الرقمي.<br>
        ● انضم إلى حركة رقمية تؤمن أن الرموز يمكن أن تُغير العالم.</p>
        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

        <p style="font-weight:bold; font-size:1.4em;">🟢 7. كيف تنضم؟</p>
        <p>● اضغط على زر الإنزال الجوي في الصفحة الرئيسية أو تابعنا على منصات التواصل للفرص القادمة.</p>
        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />
      `
    },
    en: {
      headline: "📜FREEPAL — Whitepaper",
      intro: "● FREEPAL is a digital currency inspired by the spirit of freedom and justice, aiming to represent the voice of free peoples, especially the Palestinian cause.",
      description: `
        <p style="font-weight:bold; font-size:1.4em;">🟢 1. Introduction</p>
        <p>● FREEPAL is a digital currency inspired by the spirit of freedom and justice, aiming to represent the voice of free peoples, especially the Palestinian cause.<br>
        ● FREEPAL is not just a meme coin, but a digital symbol of solidarity, support, and community.</p>
        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

        <p style="font-weight:bold; font-size:1.4em;">🟡 2. Project Vision</p>
        <p>● We believe that cryptocurrencies are not only for profit, but also tools for empowerment, dissemination, and impact.<br>
        ● We strive to build a unified global community supporting just causes through the power of cryptography and decentralization.</p>
        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

        <p style="font-weight:bold; font-size:1.4em;">🔵 3. Coin Information</p>
        <p>● Coin Name: FREEPAL<br>
        ● Symbol: FREP<br>
        ● Network: Solana<br>
        ● Total Supply: 10,000,000,000 tokens<br>
        ● Taxes: 0%<br>
        ● Smart Contract: [To be added later]</p>
        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

        <p style="font-weight:bold; font-size:1.4em;">🟣 4. Distribution / Allocation (%)</p>
        <p>● Liquidity, Trading (40%)<br>
        ● Airdrop (5%)<br>
        ● Community, Rewards (5%)<br>
        ● Team, Development (20%)<br>
        ● Charity Wallet (10%) <span id="charity-more" style="color:blue;cursor:pointer;">[Read More]</span></p>
        <div id="charity-hidden" style="display:none; margin-top:10px; direction: ltr;">
          ● 10% of the total supply will be allocated to a transparent charity wallet aimed at supporting humanitarian causes, especially initiatives related to Palestine and globally affected communities.<br><br>
          <b> Mechanism of Operation:</b><br>
          ● The wallet address will be public and anyone can track its transactions on the blockchain.<br>
          ● Funds disbursement will be based on community voting or a pre-published clear plan.<br>
          ● Partnerships with trusted organizations to ensure support reaches rightful beneficiaries.<br><br>
          <b> Potential Uses:</b><br>
          ● Supporting humanitarian and relief campaigns.<br>
          ● Funding educational or health projects.<br>
          ● Assisting families affected by wars and disasters.
        </div>
        <p>● Reserve, Expansion (20%) <span id="reserve-more" style="color:blue; cursor:pointer;">[Read More]</span></p>
        <div id="reserve-hidden" style="display:none; margin-top:10px; direction: ltr;">
          <b> Gaming and Applications Project (part of the expansion plan)</b><br><br>
          ● As part of FREEPAL's expansion strategy, a portion of the reserve will be allocated to develop interactive games and applications aimed at increasing the coin's spread and building an active, sustainable community.<br><br>
          <b> Objectives:</b><br>
          ● Integrate FREEPAL into an enjoyable entertainment/interactive experience.<br>
          ● Encourage users to own and trade the coin through reward systems inside games or apps.<br>
          ● Use technology as a tool for promotion and humanitarian support.<br><br>
          <b> Suggested Ideas:</b><br>
           1. Mobile Game<br>
          ● A simple and engaging game (Puzzle, Runner, or Adventure).<br>
          ● Play to Earn system where players earn FREEPAL coins as rewards for achievements.<br><br>
           2. Interactive Community App<br>
          ● A small platform for chatting or challenges among members.<br>
          ● Users can send and receive FREEPAL coins directly via the app.<br><br>
           3. Mini-Games on Website<br>
          ● HTML5 games playable directly in browser, linked to the user's digital wallet.<br>
          ● Monthly events and competitions with coin prizes.<br><br>
          <b> Expected Benefits:</b><br>
          ● Increased demand for the coin.<br>
          ● Strengthened loyalty and community belonging.<br>
          ● Opening new avenues for commercial and technical partnerships.
        </div>
        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

        <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 8px;"> 🟠 5. Roadmap</p>

        <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Phase 1: Launch</p>
        <p style="margin-top: 0; margin-bottom: 12px;">
          ● Logo and website design<br>
          ● Multilingual website activation<br>
          ● Coin launch on the network
        </p>

        <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Phase 2: Community Building</p>
        <p style="margin-top: 0; margin-bottom: 12px;">
          ● Campaigns on X & Telegram<br>
          ● Airdrop launch
        </p>

        <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Phase 3: Listing and Expansion</p>
        <p style="margin-top: 0; margin-bottom: 12px;">
          ● Listing on CoinGecko & CMC<br>
          ● Partnerships with supporting projects<br>
          ● Listing on centralized exchange
        </p>

        <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Phase 4: Development</p>
        <p style="margin-top: 0; margin-bottom: 12px;">
          ● Integrating the coin into NFT projects<br>
          ● Launching interactive tools for the community
        </p>

        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

        <p style="font-weight:bold; font-size:1.4em;">🔴 6. The Message</p>
        <p>● FREEPAL is not just a digital token — it is a cry for freedom. We represent all those who have no voice in the digital world.<br>
        ● Join a digital movement that believes tokens can change the world.</p>
        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

        <p style="font-weight:bold; font-size:1.4em;">🟢 7. How to Join?</p>
        <p>● Click the Airdrop button on the homepage or follow us on social media for upcoming opportunities.</p>
        <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />
      `
    },
   tr: {
  headline: "📜FREEPAL — Beyaz Kitap",
  intro: "● FREEPAL, özgürlük ve adalet ruhundan ilham alan dijital bir para birimidir ve özellikle Filistin davasını temsil etmeyi amaçlar.",
  description: `
    <p style="font-weight:bold; font-size:1.4em;">🟢 1. Giriş</p>
    <p>● FREEPAL, özgürlük ve adalet ruhundan ilham alan dijital bir para birimidir ve özellikle Filistin davasını temsil etmeyi amaçlar.<br>
    ● FREEPAL sadece bir meme coin değildir, dayanışma, destek ve topluluk için dijital bir semboldür.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟡 2. Proje Vizyonu</p>
    <p>● Kripto paraların sadece kâr için değil, aynı zamanda güçlendirme, yayılma ve etki için araçlar olduğuna inanıyoruz.<br>
    ● Şifreleme ve merkezsizleşme gücüyle adil davaları destekleyen birleşik küresel bir topluluk inşa etmeye çalışıyoruz.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🔵 3. Coin Bilgileri</p>
    <p>● Coin Adı: FREEPAL<br>
    ● Sembol: FREP<br>
    ● Ağ: Solana<br>
    ● Toplam Arz: 10,000,000,000 token<br>
    ● Vergiler: %0<br>
    ● Akıllı Kontrat: [Sonra eklenecek]</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟣 4. Dağıtım / Pay (%)</p>
    <p>● Likidite, Ticaret (%40)<br>
    ● Airdrop (%5)<br>
    ● Topluluk, Ödüller (%5)<br>
    ● Ekip, Geliştirme (%20)<br>
    ● Hayırsever Cüzdanı (%10) <span id="charity-more" style="color:blue;cursor:pointer;">[Daha Fazla]</span></p>
    <div id="charity-hidden" style="display:none; margin-top:10px; direction: ltr;">
      ● Toplam arzın %10'u, özellikle Filistin ve dünya genelinde etkilenen topluluklar için insani amaçları desteklemeyi hedefleyen şeffaf bir hayırsever cüzdanına tahsis edilecektir.<br><br>
      <b> Çalışma Mekanizması:</b><br>
      ● Cüzdan adresi açık olacak ve herkes blok zincirindeki işlemleri takip edebilecek.<br>
      ● Fonların dağıtımı, topluluk oylamasına veya önceden yayımlanmış açık bir plana dayanacaktır.<br>
      ● Desteklerin hak sahiplerine ulaşmasını sağlamak için güvenilir kuruluşlarla iş birliği yapılacaktır.<br><br>
      <b> Olası Kullanımlar:</b><br>
      ● İnsani ve yardım kampanyalarının desteklenmesi.<br>
      ● Eğitim veya sağlık projelerinin finansmanı.<br>
      ● Savaşlar ve felaketlerden etkilenen ailelere yardım.
    </div>
    <p>● Rezerv, Genişleme (%20) <span id="reserve-more" style="color:blue; cursor:pointer;">[Daha Fazla]</span></p>
    <div id="reserve-hidden" style="display:none; margin-top:10px; direction: ltr;">
      <b> Oyunlar ve Uygulamalar Projesi (genişleme planının bir parçası)</b><br><br>
      ● FREEPAL'ın genişleme stratejisi kapsamında, rezervin bir kısmı, coinin yayılmasını artırmak ve aktif, sürdürülebilir bir topluluk oluşturmak amacıyla etkileşimli oyunlar ve uygulamalar geliştirmek için ayrılacaktır.<br><br>
      <b> Amaçlar:</b><br>
      ● FREEPAL'ı keyifli bir eğlence/etkileşim deneyimine entegre etmek.<br>
      ● Oyunlar veya uygulamalar içindeki ödül sistemleri aracılığıyla kullanıcıların coini sahiplenmesini ve takas etmesini teşvik etmek.<br>
      ● Teknolojiyi tanıtım ve insani destek aracı olarak kullanmak.<br><br>
      <b> Önerilen Fikirler:</b><br>
       1. Mobil Oyun<br>
      ● Basit ve eğlenceli bir oyun (Puzzle, Runner veya Adventure).<br>
      ● Başarılar için FREEPAL coini ödülleri kazandıran Play to Earn sistemi.<br><br>
       2. Etkileşimli Topluluk Uygulaması<br>
      ● Üyeler arasında sohbet veya meydan okuma platformu.<br>
      ● Kullanıcılar uygulama üzerinden doğrudan FREEPAL coini gönderip alabilir.<br><br>
       3. Web Sitesinde Mini-Oyunlar<br>
      ● Kullanıcının dijital cüzdanına bağlı olarak doğrudan tarayıcıda oynanabilen HTML5 oyunları.<br>
      ● Aylık etkinlikler ve coin ödüllü yarışmalar.<br><br>
      <b> Beklenen Faydalar:</b><br>
      ● Coin için talebin artması.<br>
      ● Sadakat ve topluluk aidiyetinin güçlendirilmesi.<br>
      ● Ticari ve teknik ortaklıklar için yeni fırsatlar açılması.
    </div>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 8px;">🟠 5. Yol Haritası</p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Aşama 1: Lansman</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Logo ve web sitesi tasarımı<br>
      ● Çok dilli web sitesi aktivasyonu<br>
      ● Coin lansmanı ağda
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Aşama 2: Topluluk İnşası</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● X ve Telegram kampanyaları<br>
      ● Airdrop lansmanı
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Aşama 3: Listeleme ve Genişleme</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● CoinGecko ve CMC listesi<br>
      ● Destekleyici projelerle ortaklıklar<br>
      ● Merkezi borsada listeleme
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Aşama 4: Geliştirme</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Coin'i NFT projelerine entegre etmek<br>
      ● Topluluk için etkileşimli araçlar başlatmak
    </p>

    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🔴 6. Mesaj</p>
    <p>● FREEPAL sadece dijital bir token değildir — özgürlük için bir çağrıdır. Dijital dünyada sesi olmayan herkesi temsil ediyoruz.<br>
    ● Tokenların dünyayı değiştirebileceğine inanan dijital bir harekete katılın.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟢 7. Nasıl Katılırım?</p>
    <p>● Anasayfadaki Airdrop butonuna tıklayın veya yaklaşan fırsatlar için bizi sosyal medyada takip edin.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />
      `
    },  
de: {
  headline: "📜FREEPAL — Whitepaper",
  intro: "● FREEPAL ist eine digitale Währung, inspiriert vom Geist der Freiheit und Gerechtigkeit, die die Stimme freier Völker, besonders der palästinensischen Sache, repräsentieren möchte.",
  description: `
    <p style="font-weight:bold; font-size:1.4em;">🟢 1. Einführung</p>
    <p>● FREEPAL ist eine digitale Währung, inspiriert vom Geist der Freiheit und Gerechtigkeit, die die Stimme freier Völker, besonders der palästinensischen Sache, repräsentieren möchte.<br>
    ● FREEPAL ist kein Meme-Coin, sondern ein digitales Symbol für Solidarität, Unterstützung und Gemeinschaft.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟡 2. Projektvision</p>
    <p>● Wir glauben, dass Kryptowährungen nicht nur für Profit da sind, sondern auch Werkzeuge zur Ermächtigung, Verbreitung und Wirkung.<br>
    ● Wir streben danach, eine vereinte globale Gemeinschaft aufzubauen, die gerechte Anliegen durch Kryptographie und Dezentralisierung unterstützt.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🔵 3. Münzinformationen</p>
    <p>● Münzname: FREEPAL<br>
    ● Symbol: FREP<br>
    ● Netzwerk: Solana<br>
    ● Gesamtangebot: 10.000.000.000 Token<br>
    ● Steuern: 0%<br>
    ● Smart Contract: [Wird später hinzugefügt]</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟣 4. Verteilung / Zuordnung (%)</p>
    <p>● Liquidität, Handel (40%)<br>
    ● Airdrop (5%)<br>
    ● Gemeinschaft, Belohnungen (5%)<br>
    ● Team, Entwicklung (20%)<br>
    ● Wohltätigkeits-Wallet (10%) <span id="charity-more" style="color:blue;cursor:pointer;">[Mehr lesen]</span></p>
    <div id="charity-hidden" style="display:none; margin-top:10px; direction: ltr;">
      ● 10% des Gesamtangebots werden einer transparenten Wohltätigkeits-Wallet zugeteilt, die humanitäre Anliegen unterstützt, besonders Initiativen rund um Palästina und weltweit betroffene Gemeinschaften.<br><br>
      <b> Funktionsweise:</b><br>
      ● Die Wallet-Adresse ist öffentlich und jeder kann deren Transaktionen auf der Blockchain verfolgen.<br>
      ● Mittelvergabe basiert auf Community-Abstimmungen oder einem klar veröffentlichten Plan.<br>
      ● Partnerschaften mit vertrauenswürdigen Organisationen sichern die Unterstützung der Berechtigten.<br><br>
      <b> Mögliche Verwendungen:</b><br>
      ● Unterstützung humanitärer und Hilfskampagnen.<br>
      ● Finanzierung von Bildungs- oder Gesundheitsprojekten.<br>
      ● Hilfe für von Krieg und Katastrophen betroffene Familien.
    </div>
    <p>● Reserve, Erweiterung (20%) <span id="reserve-more" style="color:blue; cursor:pointer;">[Mehr lesen]</span></p>
    <div id="reserve-hidden" style="display:none; margin-top:10px; direction: ltr;">
      <b> Spiele- und Anwendungsprojekt (Teil des Expansionsplans)</b><br><br>
      ● Im Rahmen der Expansionsstrategie von FREEPAL wird ein Teil der Reserve für die Entwicklung interaktiver Spiele und Anwendungen verwendet, um die Verbreitung der Münze zu erhöhen und eine aktive, nachhaltige Gemeinschaft aufzubauen.<br><br>
      <b> Ziele:</b><br>
      ● Integration von FREEPAL in eine unterhaltsame, interaktive Erfahrung.<br>
      ● Nutzer werden durch Belohnungssysteme innerhalb von Spielen oder Apps zum Besitz und Handel der Münze animiert.<br>
      ● Nutzung von Technologie als Werkzeug zur Förderung und humanitären Unterstützung.<br><br>
      <b> Vorgeschlagene Ideen:</b><br>
       1. Mobile Spiel<br>
      ● Ein einfaches, fesselndes Spiel (Puzzle, Runner oder Adventure).<br>
      ● Play-to-Earn-System, bei dem Spieler FREEPAL-Münzen für Erfolge erhalten.<br><br>
       2. Interaktive Community-App<br>
      ● Eine kleine Plattform für Chats oder Herausforderungen unter Mitgliedern.<br>
      ● Nutzer können FREEPAL-Münzen direkt über die App senden und empfangen.<br><br>
       3. Mini-Spiele auf der Webseite<br>
      ● HTML5-Spiele, die direkt im Browser spielbar sind und mit der digitalen Wallet des Nutzers verbunden sind.<br>
      ● Monatliche Events und Wettbewerbe mit Münzpreisen.<br><br>
      <b> Erwartete Vorteile:</b><br>
      ● Erhöhter Bedarf an der Münze.<br>
      ● Gestärkte Loyalität und Gemeinschaftsgefühl.<br>
      ● Eröffnung neuer Wege für kommerzielle und technische Partnerschaften.
    </div>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 8px;"> 🟠 5. Fahrplan</p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Phase 1: Start</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Logo- und Webseitendesign<br>
      ● Mehrsprachige Website-Aktivierung<br>
      ● Münzeinführung im Netzwerk
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Phase 2: Gemeinschaftsaufbau</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Kampagnen auf X & Telegram<br>
      ● Airdrop-Start
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Phase 3: Listing und Expansion</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Listung bei CoinGecko & CMC<br>
      ● Partnerschaften mit unterstützenden Projekten<br>
      ● Listung an zentralisierten Börsen
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Phase 4: Entwicklung</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Integration der Münze in NFT-Projekte<br>
      ● Einführung interaktiver Tools für die Gemeinschaft
    </p>

    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🔴 6. Die Botschaft</p>
    <p>● FREEPAL ist nicht nur ein digitaler Token — es ist ein Ruf nach Freiheit. Wir vertreten alle, die in der digitalen Welt keine Stimme haben.<br>
    ● Schließe dich einer digitalen Bewegung an, die glaubt, dass Tokens die Welt verändern können.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟢 7. Wie mitmachen?</p>
    <p>● Klicke auf die Airdrop-Schaltfläche auf der Startseite oder folge uns in sozialen Medien für kommende Chancen.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />
  `
},
ru: {
  headline: "📜FREEPAL — Белая книга",
  intro: "● FREEPAL — цифровая валюта, вдохновленная духом свободы и справедливости, которая призвана представлять голос свободных народов, особенно палестинский вопрос.",
  description: `
    <p style="font-weight:bold; font-size:1.4em;">🟢 1. Введение</p>
    <p>● FREEPAL — цифровая валюта, вдохновленная духом свободы и справедливости, которая призвана представлять голос свободных народов, особенно палестинский вопрос.<br>
    ● FREEPAL — это не просто мем-монета, а цифровой символ солидарности, поддержки и сообщества.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟡 2. Видение проекта</p>
    <p>● Мы считаем, что криптовалюты — это не только средство для получения прибыли, но и инструмент расширения возможностей, распространения и влияния.<br>
    ● Мы стремимся построить единое глобальное сообщество, поддерживающее справедливые дела с помощью криптографии и децентрализации.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🔵 3. Информация о монете</p>
    <p>● Название монеты: FREEPAL<br>
    ● Символ: FREP<br>
    ● Сеть: Solana<br>
    ● Общее предложение: 10 000 000 000 токенов<br>
    ● Налоги: 0%<br>
    ● Смарт-контракт: [будет добавлен позже]</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟣 4. Распределение / доля (%)</p>
    <p>● Ликвидность, торговля (40%)<br>
    ● Эйрдроп (5%)<br>
    ● Сообщество, награды (5%)<br>
    ● Команда, разработка (20%)<br>
    ● Благотворительный кошелек (10%) <span id="charity-more" style="color:blue;cursor:pointer;">[Подробнее]</span></p>
    <div id="charity-hidden" style="display:none; margin-top:10px; direction: ltr;">
      ● 10% от общего предложения будут выделены на прозрачный благотворительный кошелек, направленный на поддержку гуманитарных инициатив, особенно связанных с Палестиной и пострадавшими сообществами по всему миру.<br><br>
      <b> Механизм работы:</b><br>
      ● Адрес кошелька будет публичным, и каждый сможет отслеживать транзакции в блокчейне.<br>
      ● Расходы будут основаны на голосовании сообщества или заранее опубликованном плане.<br>
      ● Партнерства с надежными организациями для обеспечения поддержки нуждающихся.<br><br>
      <b> Возможные применения:</b><br>
      ● Поддержка гуманитарных и спасательных кампаний.<br>
      ● Финансирование образовательных или медицинских проектов.<br>
      ● Помощь семьям, пострадавшим от войн и катастроф.
    </div>
    <p>● Резерв, расширение (20%) <span id="reserve-more" style="color:blue; cursor:pointer;">[Подробнее]</span></p>
    <div id="reserve-hidden" style="display:none; margin-top:10px; direction: ltr;">
      <b> Проект игр и приложений (в рамках плана расширения)</b><br><br>
      ● В рамках стратегии расширения FREEPAL часть резерва будет выделена на разработку интерактивных игр и приложений, направленных на увеличение распространения монеты и создание активного, устойчивого сообщества.<br><br>
      <b> Цели:</b><br>
      ● Интеграция FREEPAL в увлекательный интерактивный опыт.<br>
      ● Поощрение пользователей владеть и торговать монетой через системы вознаграждений внутри игр или приложений.<br>
      ● Использование технологий как инструмента продвижения и гуманитарной поддержки.<br><br>
      <b> Предложенные идеи:</b><br>
       1. Мобильная игра<br>
      ● Простая и увлекательная игра (Puzzle, Runner или Adventure).<br>
      ● Система Play to Earn, где игроки получают монеты FREEPAL за достижения.<br><br>
       2. Интерактивное сообщество<br>
      ● Небольшая платформа для чатов или вызовов между участниками.<br>
      ● Пользователи могут отправлять и получать монеты FREEPAL напрямую через приложение.<br><br>
       3. Мини-игры на сайте<br>
      ● Игры HTML5, играемые прямо в браузере, связанные с цифровым кошельком пользователя.<br>
      ● Ежемесячные мероприятия и конкурсы с призами в монетах.<br><br>
      <b> Ожидаемые преимущества:</b><br>
      ● Повышенный спрос на монету.<br>
      ● Укрепление лояльности и чувства принадлежности к сообществу.<br>
      ● Открытие новых возможностей для коммерческого и технического партнерства.
    </div>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 8px;"> 🟠 5. Дорожная карта</p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Фаза 1: Запуск</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Дизайн логотипа и сайта<br>
      ● Активация многоязычного сайта<br>
      ● Запуск монеты в сети
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Фаза 2: Создание сообщества</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Кампании на X и Telegram<br>
      ● Запуск эйрдропа
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Фаза 3: Листинг и расширение</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Листинг на CoinGecko и CMC<br>
      ● Партнерства с поддерживающими проектами<br>
      ● Листинг на централизованных биржах
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Фаза 4: Разработка</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Интеграция монеты в NFT-проекты<br>
      ● Запуск интерактивных инструментов для сообщества
    </p>

    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🔴 6. Сообщение</p>
    <p>● FREEPAL — это не просто цифровой токен, а крик о свободе. Мы представляем всех, кто не имеет голоса в цифровом мире.<br>
    ● Присоединяйтесь к цифровому движению, которое верит, что токены могут изменить мир.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟢 7. Как присоединиться?</p>
    <p>● Нажмите кнопку эйрдропа на главной странице или следите за нами в соцсетях для будущих возможностей.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />
    `
  },
 ja: {
  headline: "📜FREEPAL — ホワイトペーパー",
  intro: "● FREEPALは、自由と正義の精神に触発されたデジタル通貨であり、特にパレスチナ問題を代表することを目指しています。",
  description: `
    <p style="font-weight:bold; font-size:1.4em;">🟢 1. はじめに</p>
    <p>● FREEPALは、自由と正義の精神に触発されたデジタル通貨であり、特にパレスチナ問題を代表することを目指しています。<br>
    ● FREEPALはただのミームコインではなく、連帯、支援、コミュニティのデジタルシンボルです。</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟡 2. プロジェクトビジョン</p>
    <p>● 暗号通貨は利益だけでなく、力を与え、広め、影響を与えるためのツールであると考えています。<br>
    ● 暗号技術と分散化を通じて、正義のために団結したグローバルコミュニティの構築を目指しています。</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🔵 3. コイン情報</p>
    <p>● コイン名: FREEPAL<br>
    ● シンボル: FREP<br>
    ● ネットワーク: Solana<br>
    ● 総供給量: 100億トークン<br>
    ● 税金: 0%<br>
    ● スマートコントラクト: 後日追加予定</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟣 4. 配布 / 割当 (%)</p>
    <p>● 流動性、取引 (40%)<br>
    ● エアドロップ (5%)<br>
    ● コミュニティ、報酬 (5%)<br>
    ● チーム、開発 (20%)<br>
    ● チャリティウォレット (10%) <span id="charity-more" style="color:blue;cursor:pointer;">[続きを読む]</span></p>
    <div id="charity-hidden" style="display:none; margin-top:10px; direction: ltr;">
      ● 総供給量の10％は、特にパレスチナや世界中の被災コミュニティを支援する透明なチャリティウォレットに割り当てられます。<br><br>
      <b>運用メカニズム：</b><br>
      ● ウォレットアドレスは公開されており、誰でもブロックチェーンで取引を追跡可能です。<br>
      ● 支出はコミュニティ投票または事前に公開された計画に基づきます。<br>
      ● 信頼できる組織とのパートナーシップで、支援が必要な人々を確実にサポートします。<br><br>
      <b>想定用途：</b><br>
      ● 人道支援キャンペーンの支援。<br>
      ● 教育や医療プロジェクトの資金提供。<br>
      ● 戦争や災害で被害を受けた家族への援助。
    </div>
    <p>● リザーブ、拡張 (20%) <span id="reserve-more" style="color:blue; cursor:pointer;">[続きを読む]</span></p>
    <div id="reserve-hidden" style="display:none; margin-top:10px; direction: ltr;">
      <b>ゲーム・アプリプロジェクト（拡張計画の一環）</b><br><br>
      ● FREEPALの拡張戦略の一環として、リザーブの一部は、コインの普及促進と活発かつ持続可能なコミュニティの構築を目的としたインタラクティブゲームやアプリの開発に使われます。<br><br>
      <b>目標：</b><br>
      ● FREEPALを楽しくインタラクティブな体験に統合。<br>
      ● ユーザーがゲームやアプリ内の報酬システムを通じてコインを所有・取引する動機づけ。<br>
      ● テクノロジーを推進と人道支援のツールとして活用。<br><br>
      <b>提案アイデア：</b><br>
       1. モバイルゲーム<br>
      ● シンプルで魅力的なゲーム（パズル、ランナー、アドベンチャーなど）。<br>
      ● 達成に対してFREEPALコインを獲得できるPlay-to-Earnシステム。<br><br>
       2. インタラクティブコミュニティアプリ<br>
      ● メンバー間のチャットやチャレンジのための小規模プラットフォーム。<br>
      ● ユーザーがアプリ内で直接FREEPALコインを送受信可能。<br><br>
       3. ウェブサイト上のミニゲーム<br>
      ● ブラウザで直接プレイ可能なHTML5ゲームで、ユーザーのデジタルウォレットと連動。<br>
      ● 毎月のイベントやトーナメントでコイン報酬を提供。<br><br>
      <b>期待される効果：</b><br>
      ● コイン需要の増加。<br>
      ● コミュニティの忠誠心と帰属意識の強化。<br>
      ● 商業的・技術的パートナーシップの新たな機会創出。
    </div>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 8px;"> 🟠 5. ロードマップ</p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">フェーズ1: 開始</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● ロゴ・ウェブデザイン<br>
      ● 多言語サイトの有効化<br>
      ● ネットワーク上でのコイン公開
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">フェーズ2: コミュニティ構築</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● XやTelegramでのキャンペーン<br>
      ● エアドロップ開始
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">フェーズ3: 上場と拡大</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● CoinGeckoおよびCMCでのリスティング<br>
      ● 支援プロジェクトとのパートナーシップ<br>
      ● 中央集権型取引所での上場
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">フェーズ4: 開発</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● NFTプロジェクトへのコイン統合<br>
      ● コミュニティ向けインタラクティブツールの導入
    </p>

    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🔴 6. メッセージ</p>
    <p>● FREEPALは単なるデジタルトークンではなく、自由への叫びです。デジタル世界で声を持たないすべての人々を代表します。<br>
    ● トークンが世界を変えられると信じるデジタル運動に参加しましょう。</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟢 7. 参加方法</p>
    <p>● トップページのエアドロップボタンをクリックするか、今後のチャンスのためにSNSをフォローしてください。</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />
     `
   },
   zh: {
  headline: "📜FREEPAL — 白皮书",
  intro: "● FREEPAL是一种受自由与正义精神启发的数字货币，旨在代表自由人民的声音，尤其是巴勒斯坦问题。",
  description: `
    <p style="font-weight:bold; font-size:1.4em;">🟢 1. 介绍</p>
    <p>● FREEPAL是一种受自由与正义精神启发的数字货币，旨在代表自由人民的声音，尤其是巴勒斯坦问题。<br>
    ● FREEPAL不仅仅是一个表情包币，而是团结、支持与社区的数字象征。</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟡 2. 项目愿景</p>
    <p>● 我们相信加密货币不仅仅是盈利工具，还是赋能、传播与影响力的工具。<br>
    ● 我们致力于通过密码学和去中心化技术建立一个支持正义事业的全球统一社区。</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🔵 3. 代币信息</p>
    <p>● 代币名称：FREEPAL<br>
    ● 代币符号：FREP<br>
    ● 网络：Solana<br>
    ● 总供应量：100亿代币<br>
    ● 税费：0%<br>
    ● 智能合约：[稍后添加]</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟣 4. 分配 / 配额 (%)</p>
    <p>● 流动性，交易 (40%)<br>
    ● 空投 (5%)<br>
    ● 社区，奖励 (5%)<br>
    ● 团队，开发 (20%)<br>
    ● 慈善钱包 (10%) <span id="charity-more" style="color:blue;cursor:pointer;">[阅读更多]</span></p>
    <div id="charity-hidden" style="display:none; margin-top:10px; direction: ltr;">
      ● 总供应量的10%将分配给一个透明的慈善钱包，旨在支持人道主义事业，特别是与巴勒斯坦和全球受影响社区相关的项目。<br><br>
      <b>运作机制：</b><br>
      ● 钱包地址将公开，任何人都可以在区块链上跟踪其交易。<br>
      ● 资金的发放基于社区投票或预先公布的明确计划。<br>
      ● 与可信组织合作，确保援助送达真正需要的人。<br><br>
      <b>潜在用途：</b><br>
      ● 支持人道救援和救灾活动。<br>
      ● 资助教育或医疗项目。<br>
      ● 援助受战争和灾难影响的家庭。
    </div>
    <p>● 储备，扩展 (20%) <span id="reserve-more" style="color:blue; cursor:pointer;">[阅读更多]</span></p>
    <div id="reserve-hidden" style="display:none; margin-top:10px; direction: ltr;">
      <b>游戏与应用项目（扩展计划的一部分）</b><br><br>
      ● 作为FREEPAL扩展战略的一部分，储备资金的一部分将用于开发互动游戏和应用，以促进币的传播并建立一个活跃且可持续的社区。<br><br>
      <b>目标：</b><br>
      ● 将FREEPAL整合到一个有趣的娱乐/互动体验中。<br>
      ● 通过游戏或应用内的奖励系统激励用户拥有和交易代币。<br>
      ● 利用技术作为推广和人道支持的工具。<br><br>
      <b>建议的想法：</b><br>
       1. 手机游戏<br>
      ● 简单有趣的游戏（拼图，跑酷或冒险）。<br>
      ● 赚取系统，玩家通过成就获得FREEPAL代币奖励。<br><br>
       2. 互动社区应用<br>
      ● 会员间聊天或挑战的小型平台。<br>
      ● 用户可以直接通过应用发送和接收FREEPAL代币。<br><br>
       3. 网站上的迷你游戏<br>
      ● 直接在浏览器中玩的HTML5游戏，与用户的钱包绑定。<br>
      ● 每月活动和竞赛，奖品为代币。<br><br>
      <b>预期收益：</b><br>
      ● 增加代币需求。<br>
      ● 加强社区忠诚度和归属感。<br>
      ● 开启商业和技术合作的新机会。
    </div>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 8px;"> 🟠 5. 路线图</p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">阶段1：启动</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● 标志和网站设计<br>
      ● 多语言网站激活<br>
      ● 代币在网络上的发布
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">阶段2：社区建设</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● X和Telegram上的活动<br>
      ● 空投启动
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">阶段3：上市与扩展</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● 在CoinGecko和CMC上市<br>
      ● 与支持项目合作<br>
      ● 在中心化交易所上市
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">阶段4：开发</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● 将代币整合到NFT项目<br>
      ● 启动面向社区的互动工具
    </p>

    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🔴 6. 信息</p>
    <p>● FREEPAL不仅仅是数字代币——它是自由的呼声。我们代表数字世界中没有声音的所有人。<br>
    ● 加入一个相信代币可以改变世界的数字运动。</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟢 7. 如何加入？</p>
    <p>● 点击主页上的空投按钮，或关注我们的社交媒体获取最新机会。</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />
    `
  },
es: {
  headline: "📜FREEPAL — Libro Blanco",
  intro: "● FREEPAL es una moneda digital inspirada en el espíritu de libertad y justicia, que busca representar la voz de los pueblos libres, especialmente la causa palestina.",
  description: `
    <p style="font-weight:bold; font-size:1.4em;">🟢 1. Introducción</p>
    <p>● FREEPAL es una moneda digital inspirada en el espíritu de libertad y justicia, que busca representar la voz de los pueblos libres, especialmente la causa palestina.<br>
    ● FREEPAL no es solo una moneda meme, sino un símbolo digital de solidaridad, apoyo y comunidad.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟡 2. Visión del Proyecto</p>
    <p>● Creemos que las criptomonedas no solo son para obtener ganancias, sino también herramientas para el empoderamiento, la difusión y el impacto.<br>
    ● Nos esforzamos por construir una comunidad global unificada que apoye causas justas a través del poder de la criptografía y la descentralización.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🔵 3. Información de la Moneda</p>
    <p>● Nombre de la moneda: FREEPAL<br>
    ● Símbolo: FREP<br>
    ● Red: Solana<br>
    ● Suministro total: 10,000,000,000 tokens<br>
    ● Impuestos: 0%<br>
    ● Contrato inteligente: [Por añadirse]</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟣 4. Distribución / Asignación (%)</p>
    <p>● Liquidez, Trading (40%)<br>
    ● Airdrop (5%)<br>
    ● Comunidad, Recompensas (5%)<br>
    ● Equipo, Desarrollo (20%)<br>
    ● Billetera de Caridad (10%) <span id="charity-more" style="color:blue;cursor:pointer;">[Leer Más]</span></p>
    <div id="charity-hidden" style="display:none; margin-top:10px; direction: ltr;">
      ● El 10% del suministro total se asignará a una billetera de caridad transparente destinada a apoyar causas humanitarias, especialmente iniciativas relacionadas con Palestina y comunidades afectadas globalmente.<br><br>
      <b>Mecanismo de Operación:</b><br>
      ● La dirección de la billetera será pública y cualquiera podrá rastrear sus transacciones en la blockchain.<br>
      ● La distribución de fondos se basará en votaciones comunitarias o un plan claro publicado previamente.<br>
      ● Alianzas con organizaciones confiables para garantizar que la ayuda llegue a los beneficiarios legítimos.<br><br>
      <b>Usos Potenciales:</b><br>
      ● Apoyo a campañas humanitarias y de socorro.<br>
      ● Financiamiento de proyectos educativos o de salud.<br>
      ● Asistencia a familias afectadas por guerras y desastres.
    </div>
    <p>● Reserva, Expansión (20%) <span id="reserve-more" style="color:blue; cursor:pointer;">[Leer Más]</span></p>
    <div id="reserve-hidden" style="display:none; margin-top:10px; direction: ltr;">
      <b> Proyecto de Juegos y Aplicaciones (parte del plan de expansión)</b><br><br>
      ● Como parte de la estrategia de expansión de FREEPAL, una parte de la reserva se destinará al desarrollo de juegos y aplicaciones interactivas para aumentar la difusión de la moneda y construir una comunidad activa y sostenible.<br><br>
      <b>Objetivos:</b><br>
      ● Integrar FREEPAL en una experiencia entretenida e interactiva.<br>
      ● Incentivar a los usuarios a poseer y comerciar la moneda mediante sistemas de recompensas dentro de juegos o aplicaciones.<br>
      ● Usar la tecnología como herramienta para promoción y apoyo humanitario.<br><br>
      <b>Ideas Sugeridas:</b><br>
       1. Juego móvil<br>
      ● Un juego simple y atractivo (Puzzle, Runner o Aventura).<br>
      ● Sistema Play to Earn donde los jugadores ganan monedas FREEPAL como recompensa por logros.<br><br>
       2. Aplicación comunitaria interactiva<br>
      ● Plataforma pequeña para chat o desafíos entre miembros.<br>
      ● Los usuarios pueden enviar y recibir monedas FREEPAL directamente a través de la aplicación.<br><br>
       3. Mini-juegos en el sitio web<br>
      ● Juegos HTML5 jugables directamente en el navegador, vinculados a la billetera digital del usuario.<br>
      ● Eventos y competiciones mensuales con premios en monedas.<br><br>
      <b>Beneficios Esperados:</b><br>
      ● Aumento de la demanda de la moneda.<br>
      ● Fortalecimiento de la lealtad y pertenencia comunitaria.<br>
      ● Apertura de nuevas vías para colaboraciones comerciales y técnicas.
    </div>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 8px;"> 🟠 5. Hoja de Ruta</p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Fase 1: Lanzamiento</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Diseño del logo y del sitio web<br>
      ● Activación del sitio web multilingüe<br>
      ● Lanzamiento de la moneda en la red
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Fase 2: Construcción de Comunidad</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Campañas en X y Telegram<br>
      ● Lanzamiento del Airdrop
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Fase 3: Listado y Expansión</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Listado en CoinGecko y CMC<br>
      ● Alianzas con proyectos de apoyo<br>
      ● Listado en exchange centralizado
    </p>

    <p style="font-weight: 600; font-size: 1.1em; margin-bottom: 4px;">Fase 4: Desarrollo</p>
    <p style="margin-top: 0; margin-bottom: 12px;">
      ● Integración de la moneda en proyectos NFT<br>
      ● Lanzamiento de herramientas interactivas para la comunidad
    </p>

    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🔴 6. El Mensaje</p>
    <p>● FREEPAL no es solo un token digital, es un grito por la libertad. Representamos a todos aquellos que no tienen voz en el mundo digital.<br>
    ● Únete a un movimiento digital que cree que los tokens pueden cambiar el mundo.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />

    <p style="font-weight:bold; font-size:1.4em;">🟢 7. ¿Cómo Unirse?</p>
    <p>● Haz clic en el botón de Airdrop en la página principal o síguenos en las redes sociales para oportunidades próximas.</p>
    <hr style="border: 1.5px solid #FFD700; margin: 20px 0;" />
  `
},

 };

function setLanguage(lang) {    
    currentLanguage = lang;    
    localStorage.setItem('preferredLanguage', lang);    
    
    document.querySelectorAll('nav a').forEach(link => {    
      const langAttr = link.getAttribute('data-lang');    
      link.style.display = (langAttr === lang) ? 'block' : 'none';    
    });    
    
    const texts = translations[lang];    
    if (texts) {    
      document.querySelector('.headline').innerText = texts.headline;    
      document.querySelector('.intro').innerText = texts.intro;    
      document.querySelector('.description').innerHTML = texts.description;    
    
      document.querySelector('.headline').style.textAlign = 'center';    
    
      const align = (lang === 'ar') ? 'right' : 'left';    
      document.querySelector('.intro').style.textAlign = align;    
      document.querySelector('.description').style.textAlign = align;    
    }    
    
    if (lang === 'ar') {    
      document.documentElement.setAttribute('dir', 'rtl');    
      document.documentElement.setAttribute('lang', 'ar');    
      document.querySelector('.lang-toggle').classList.remove('other');    
      document.querySelector('.lang-toggle').classList.add('ar');    
      document.querySelector('.nav-toggle').classList.remove('other');    
      document.querySelector('.nav-toggle').classList.add('ar');    
      document.querySelector('nav').classList.remove('nav-left');    
      document.querySelector('nav').classList.add('nav-right');    
    } else {    
      document.documentElement.setAttribute('dir', 'ltr');    
      document.documentElement.setAttribute('lang', lang);    
      document.querySelector('.lang-toggle').classList.remove('ar');    
      document.querySelector('.lang-toggle').classList.add('other');    
      document.querySelector('.nav-toggle').classList.remove('ar');    
      document.querySelector('.nav-toggle').classList.add('other');    
      document.querySelector('nav').classList.remove('nav-right');    
      document.querySelector('nav').classList.add('nav-left');    
    }    
    
    document.getElementById('lang-menu').style.display = 'none';    
    
    updateReadMoreButtonsText();    
  }    
    
  function updateReadMoreButtonsText() {    
    const charityBtn = document.getElementById('charity-more');    
    const reserveBtn = document.getElementById('reserve-more');    
    const charityHidden = document.getElementById('charity-hidden');    
    const reserveHidden = document.getElementById('reserve-hidden');    
    
    if (!charityBtn || !reserveBtn || !charityHidden || !reserveHidden) return;    
    
    const texts = readMoreText[currentLanguage] || readMoreText['en'];    
    
    charityBtn.innerText = charityHidden.style.display === 'none' ? texts.more : texts.hide;    
    reserveBtn.innerText = reserveHidden.style.display === 'none' ? texts.more : texts.hide;    
  }    
    
  function toggleLangMenu() {    
    const menu = document.getElementById('lang-menu');    
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';    
  }    
    
  function toggleNav() {    
    document.querySelector("nav").classList.toggle("show");    
  }    
    
  document.addEventListener('DOMContentLoaded', () => {    
    setLanguage(currentLanguage);    
    
    // كود إظهار وإخفاء النص المخفي لمحفظة الخير وزر الاحتياط    
    document.addEventListener('click', function(e) {    
      if (e.target.id === 'charity-more' || e.target.id === 'reserve-more') {    
        const isCharity = e.target.id === 'charity-more';    
        const hidden = document.getElementById(isCharity ? 'charity-hidden' : 'reserve-hidden');    
    
        hidden.style.display = hidden.style.display === 'none' ? 'block' : 'none';    
    
        const texts = readMoreText[currentLanguage] || readMoreText['en'];    
        e.target.innerText = hidden.style.display === 'none' ? texts.more : texts.hide;    
      }    
    });    
    
    window.addEventListener('scroll', () => {    
      const logo = document.getElementById('free2alLogo');    
      if (window.scrollY > 200) {    
        logo.classList.add('visible');    
      } else {    
        logo.classList.remove('visible');    
      }    
    });    
    
    // التعامل مع إغلاق القوائم عند النقر خارجها    
    function isOrContains(parent, child) {    
      return parent === child || parent.contains(child);    
    }    
    
    document.addEventListener('click', function(event) {    
      const langMenu = document.getElementById('lang-menu');    
      const langToggle = document.querySelector('.lang-toggle');    
      const nav = document.querySelector('nav');    
      const navToggle = document.querySelector('.nav-toggle');    
      const langMenuVisible = langMenu.style.display === 'block';    
      const navVisible = nav.classList.contains('show');    
    
      if (langMenuVisible && !isOrContains(langMenu, event.target) && event.target !== langToggle) {    
        langMenu.style.display = 'none';    
      }    
      if (navVisible && !isOrContains(nav, event.target) && event.target !== navToggle) {    
        nav.classList.remove('show');    
      }    
    });    
  });    
</script>
</body>    
</html>
