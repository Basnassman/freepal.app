import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // ضع هنا نفس CSS الموجود في الصفحة

const translations = {
  ar: {
    headline: "الثورة الرقمية لفلسطين",
    intro: "FREEPAL مشروع ثوري لدعم القضية الفلسطينية عبر تقنية البلوكشين.",
    description: "FREEPAL هو رمز قوي للدعم والوحدة والحرية. مبني على بلوكشين سولانا، رمز $FREP يمكّن المجتمعات للوقوف من أجل العدالة والحرية. مدعوم بقيم قوية وتضامن عالمي، يهدف FREEPAL إلى الإلهام والتحفيز من خلال التمويل اللامركزي."
  },
  en: {
    headline: "Digital Revolution for Palestine",
    intro: "FREEPAL is a revolutionary project supporting the Palestinian cause through blockchain technology.",
    description: "FREEPAL is a powerful symbol of support, unity, and freedom. Built on the Solana blockchain, the $FREP token empowers communities to stand for justice and liberty. Backed by strong values and global solidarity, FREEPAL aims to inspire and drive change through decentralized finance."
  },
  tr: {
    headline: "Filistin için Dijital Devrim",
    intro: "FREEPAL, Filistin davasını blok zinciri teknolojisiyle destekleyen devrimci bir projedir.",
    description: "FREEPAL, destek, birlik ve özgürlüğün güçlü bir sembolüdür. Solana blok zinciri üzerinde inşa edilen $FREP tokenı, toplulukların adalet ve özgürlük için ayağa kalkmasını sağlar. Güçlü değerler ve küresel dayanışma ile desteklenen FREEPAL, merkeziyetsiz finans yoluyla ilham vermeyi ve değişimi teşvik etmeyi amaçlar."
  },
  de: {
    headline: "Digitale Revolution für Palästina",
    intro: "FREEPAL ist ein revolutionäres Projekt zur Unterstützung der palästinensischen Sache durch Blockchain-Technologie.",
    description: "FREEPAL ist ein kraftvolles Symbol für Unterstützung, Einheit und Freiheit. Auf der Solana-Blockchain aufgebaut, ermöglicht das $FREP-Token Gemeinschaften, für Gerechtigkeit und Freiheit einzustehen. Unterstützt von starken Werten und globaler Solidarität, zielt FREEPAL darauf ab, durch dezentrale Finanzen Inspiration und Veränderung zu fördern."
  },
  ru: {
    headline: "Цифровая революция для Палестины",
    intro: "FREEPAL — революционный проект, поддерживающий палестинское дело через блокчейн-технологии.",
    description: "FREEPAL — мощный символ поддержки, единства и свободы. Построенный на блокчейне Solana, токен $FREP дает возможность сообществам бороться за справедливость и свободу. Поддерживаемый сильными ценностями и глобальной солидарностью, FREEPAL стремится вдохновлять и стимулировать изменения через децентрализованные финансы."
  },
  ja: {
    headline: "パレスチナのデジタル革命",
    intro: "FREEPALはブロックチェーン技術を通じてパレスチナの大義を支援する革命的なプロジェクトです。",
    description: "FREEPALは支援、団結、自由の強力な象徴です。Solanaブロックチェーン上に構築された$FREPトークンは、コミュニティが正義と自由のために立ち上がることを可能にします。強い価値観と世界的な連帯を支えに、FREEPALは分散型金融を通じて変革を促進します。"
  },
  zh: {
    headline: "为巴勒斯坦的数字革命",
    intro: "FREEPAL是一个通过区块链技术支持巴勒斯坦事业的革命性项目。",
    description: "FREEPAL是支持、团结和自由的强大象征。基于Solana区块链，$FREP代币赋能社区为正义和自由而站立。在强大的价值观和全球团结的支持下，FREEPAL旨在通过去中心化金融激励和推动变革。"
  },
  es: {
    headline: "Revolución Digital para Palestina",
    intro: "FREEPAL es un proyecto revolucionario que apoya la causa palestina a través de la tecnología blockchain.",
    description: "FREEPAL es un símbolo poderoso de apoyo, unidad y libertad. Construido sobre la blockchain de Solana, el token $FREP empodera a las comunidades para defender la justicia y la libertad. Respaldado por valores fuertes y solidaridad global, FREEPAL busca inspirar y promover el cambio a través de las finanzas descentralizadas."
  }
};

function Home() {
  const [language, setLanguage] = useState(localStorage.getItem("preferredLanguage") || "en");
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
  }, [language]);

  return (
    <div>
      {/* فيديو خلفية */}
      <video autoPlay muted loop playsInline className="hero">
        <source src="hero2.mp4" type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      {/* زر اللغة */}
      <button
        className={`lang-toggle ${language === "ar" ? "ar" : "other"}`}
        onClick={() => {
          const langs = Object.keys(translations);
          const currentIndex = langs.indexOf(language);
          const nextLang = langs[(currentIndex + 1) % langs.length];
          setLanguage(nextLang);
        }}
      >
        🌐
      </button>

      {/* زر القائمة */}
      <button
        className={`nav-toggle ${language === "ar" ? "ar" : "other"}`}
        onClick={() => setNavVisible(!navVisible)}
      >
        ☰
      </button>

      {/* قائمة التنقل */}
      <nav className={navVisible ? "show" : ""}>
        <Link to="/" onClick={() => setNavVisible(false)}>{language === "ar" ? "الرئيسية" : "Home"}</Link>
        <Link to="/whitepaper" onClick={() => setNavVisible(false)}>{language === "ar" ? "الورقة البيضاء" : "Whitepaper"}</Link>
        <Link to="/airdrop" onClick={() => setNavVisible(false)}>{language === "ar" ? "الإنزال الجوي" : "Airdrop"}</Link>
        <Link to="/buy" onClick={() => setNavVisible(false)}>{language === "ar" ? "كيف تشتري" : "How to Buy"}</Link>
        <Link to="/team" onClick={() => setNavVisible(false)}>{language === "ar" ? "الفريق" : "Team"}</Link>
      </nav>

      {/* العنوان */}
      <h1 className="headline">{translations[language].headline}</h1>
      <div className="headline-underline">
        <span className="animated-symbol">🔥 FREEPAL 🚀</span>
      </div>

      {/* الفقرة التمهيدية */}
      <p className="intro">{translations[language].intro}</p>

      {/* شعار العملة */}
      <div className="logo-container">
        <img src="free2.jpg" alt="شعار FREEPAL" className="logo-img" />
      </div>

      {/* الوصف */}
      <div className="description">
        <p>{translations[language].description}</p>
      </div>

      {/* زر الشراء */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Link to="/buy" className="buy-btn">
          {language === "ar" ? "اشترِ الآن" : "Buy Now"}
        </Link>
      </div>

      {/* الفوتر */}
      <footer>
        <a href="#">X</a>
        <a href="#">Telegram</a>
        <a href="#">TikTok</a>
      </footer>
    </div>
  );
}

export default Home;
