import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroPreview } from "@/components/hero-preview";
import { Icon } from "@/components/icons";
import { loginUrl, site } from "@/lib/site";

type IconName = Parameters<typeof Icon>[0]["name"];

const features: {
  icon: IconName;
  number: string;
  title: string;
  text: string;
  href?: string;
}[] = [
  {
    icon: "clock",
    number: "۰۱",
    title: "پذیرش و زمان بازی",
    text: "ورود چند کودک، توقف و ادامه زمان، تعرفه‌های دقیقه‌ای و محاسبه هزینه هر مراجعه.",
    href: "/features/reception",
  },
  {
    icon: "receipt",
    number: "۰۲",
    title: "صورتحساب و تسویه",
    text: "محاسبه هزینه بازی، کالا، خدمات و دستگاه در یک صورتحساب و ثبت دریافت‌ها.",
    href: "/features/reception",
  },
  {
    icon: "package",
    number: "۰۳",
    title: "بسته‌های بازی",
    text: "فروش بسته، مدیریت اعتبار زمانی و محاسبه مصرف دقیقه برای کودکان واجد شرایط.",
    href: "/features/play-packages",
  },
  {
    icon: "calendar",
    number: "۰۴",
    title: "کلاس، کارگاه و رزرو",
    text: "برنامه‌ریزی جلسات، ظرفیت، ثبت‌نام، حضور و کنترل تداخل رزروهای انحصاری.",
    href: "/features/classes",
  },
  {
    icon: "inventory",
    number: "۰۵",
    title: "فروش و موجودی",
    text: "فروش کالا و خدمات در پذیرش یا مستقل، خرید، برگشت و مدیریت موجودی.",
  },
  {
    icon: "wallet",
    number: "۰۶",
    title: "صندوق و حسابداری",
    text: "ثبت دریافت و هزینه، حساب‌ها، تسویه بدهی‌ها و تطبیق صندوق در پایان شیفت.",
    href: "/features/accounting",
  },
  {
    icon: "users",
    number: "۰۷",
    title: "کارکنان و دسترسی‌ها",
    text: "پرونده همکاران، نقش‌های شعبه، مجوزها و برنامه کاری هفتگی.",
  },
  {
    icon: "chart",
    number: "۰۸",
    title: "داشبورد و گزارش‌ها",
    text: "گزارش مراجعه، فروش، درآمد، مانده و مقایسه عملکرد در دوره‌های مختلف.",
    href: "/features/accounting",
  },
];

const faqs = [
  {
    question: "ترانک چه نرم‌افزاری است و برای چه مجموعه‌هایی مناسب است؟",
    answer:
      "ترانک نرم‌افزار تحت وب مدیریت خانه بازی و مجموعه‌های کودک‌محور است. بیشترین تناسب را با مراکزی دارد که پذیرش زمان‌محور دارند و می‌خواهند بسته بازی، کلاس، فروش و امور مالی را در کنار آن مدیریت کنند.",
  },
  {
    question: "هزینه بازی بر چه اساسی محاسبه می‌شود؟",
    answer:
      "بازه‌های بازی و استراحت هر کودک در پذیرش ثبت می‌شوند. ترانک زمان محاسبه‌شده را با تعرفه‌های تعریف‌شده و اعتبار بسته‌های واجد شرایط ترکیب می‌کند تا صورتحساب مراجعه ایجاد شود.",
  },
  {
    question: "آیا بسته بازی برای چند کودک قابل استفاده است؟",
    answer:
      "در سناریوهای واجد شرایط، ترانک مجموع دقیقه‌های مصرفی چند کودک را به شکل person-minutes از اعتبار بسته مرتبط محاسبه می‌کند.",
  },
  {
    question: "آیا مدیریت کلاس و کارگاه هم در ترانک وجود دارد؟",
    answer:
      "بله. کلاس، جلسه، ظرفیت، ثبت‌نام اپراتوری، فهرست شرکت‌کنندگان، ثبت حضور و پیگیری مانده در ماژول برنامه‌ها دیده شده است.",
  },
  {
    question: "می‌توان برای پذیرش و صندوق دسترسی متفاوت تعریف کرد؟",
    answer:
      "بله. ترانک مدل نقش و مجوز مبتنی بر شعبه دارد و امکان تفکیک دسترسی کارکنان به فرآیندهای پذیرش، دریافت، گزارش و مدیریت را فراهم می‌کند.",
  },
  {
    question: "آیا ترانک چندشعبه‌ای است؟",
    answer:
      "ساختار سازمان، شعبه، انتخاب فضای کاری و مجوزهای شعبه در محصول پیاده شده‌اند. با این حال، تمام سناریوهای گزارش‌گیری تلفیقی بین شعب در بررسی اولیه تأیید نشده‌اند.",
  },
  {
    question:
      "آیا نرم‌افزار بدون اینترنت یا با اتصال مستقیم کارتخوان کار می‌کند؟",
    answer:
      "ترانک نرم‌افزار تحت وب است و عملکرد آفلاین کامل آن تأیید نشده است. همچنین امکان ثبت روش دریافت با کارتخوان وجود دارد، اما اتصال مستقیم به سخت‌افزار کارتخوان تأیید نشده است.",
  },
  {
    question: "چگونه می‌توان استفاده از ترانک را شروع کرد؟",
    answer:
      "از مسیر ورود یا ثبت‌نام می‌توانید حساب خود را ایجاد کنید و سپس مراحل ثبت مکان، انتخاب اشتراک و تنظیمات اولیه را دنبال کنید. قیمت و مدت‌های قابل انتخاب را در کاتالوگ اشتراک بررسی کنید.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.origin}/#website`,
      url: site.origin,
      name: "ترانک | Taranak",
      inLanguage: "fa-IR",
      description: site.description,
    },
    {
      "@type": "WebApplication",
      "@id": `${site.origin}/#software`,
      name: "ترانک",
      alternateName: "Taranak",
      url: site.origin,
      inLanguage: "fa-IR",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web browser",
      description: site.description,
      featureList: [
        "پذیرش و زمان بازی کودکان",
        "صورتحساب و تسویه مراجعه",
        "مدیریت بسته‌های بازی",
        "مدیریت کلاس و کارگاه",
        "فروش و موجودی",
        "صندوق و حسابداری",
        "مدیریت کارکنان و نقش‌ها",
        "گزارش‌های عملیاتی و مالی",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-ambient" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="section-kicker">
                <span className="kicker-dot" /> مدیریت خانه بازی، یک‌پارچه و
                روشن
              </span>
              <h1 id="hero-title">
                نرم‌افزار مدیریت خانه بازی،{" "}
                <span className="blue-text">از پذیرش تا تسویه.</span>
              </h1>
              <p className="hero-description">
                ترانک زمان بازی کودکان، بسته‌ها و خدمات هر مراجعه را به یک
                صورتحساب متصل می‌کند. کلاس‌ها، فروش، صندوق و گزارش‌های مجموعه هم
                در کنار آن مدیریت می‌شوند.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={loginUrl}>
                  ورود و شروع ثبت مجموعه <Icon name="arrow" size={18} />
                </a>
                <a className="btn btn-secondary" href="#features">
                  مشاهده امکانات
                </a>
              </div>
              <div className="hero-proof">
                <span>
                  <Icon name="check" size={17} /> طراحی‌شده برای خانه بازی
                </span>
                <span>
                  <Icon name="check" size={17} /> تحت وب و فارسی
                </span>
                <span>
                  <Icon name="check" size={17} /> دسترسی مبتنی بر شعبه
                </span>
              </div>
            </div>
            <div className="hero-art">
              <HeroPreview />
            </div>
          </div>
        </section>

        <section className="subtle-strip" aria-label="حوزه‌های اصلی ترانک">
          <div className="container strip-inner">
            <span>پذیرش</span>
            <i />
            <span>زمان‌سنجی</span>
            <i />
            <span>بسته بازی</span>
            <i />
            <span>صورتحساب</span>
            <i />
            <span>کلاس و رزرو</span>
            <i />
            <span>گزارش‌گیری</span>
          </div>
        </section>

        <section
          className="section section-features"
          id="features"
          aria-labelledby="features-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="overline">امکانات ترانک</span>
                <h2 id="features-title">
                  آنچه برای اداره خانه بازی نیاز دارید
                </h2>
              </div>
              <p>
                از کار روزانه میز پذیرش تا تصمیم‌های مدیریتی؛ قابلیت‌ها بر اساس
                فرآیندهای واقعی مجموعه دسته‌بندی شده‌اند.
              </p>
            </div>
            <div className="features-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.number}>
                  <div className="feature-card-top">
                    <span className="feature-icon">
                      <Icon name={feature.icon} size={25} />
                    </span>
                    <span className="feature-no">{feature.number}</span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  {feature.href && (
                    <Link className="text-link" href={feature.href}>
                      بیشتر بخوانید <Icon name="arrow" size={16} />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section workflow-section"
          id="how-it-works"
          aria-labelledby="workflow-title"
        >
          <div className="container workflow-grid">
            <div className="workflow-head">
              <span className="overline">ساده، از ابتدا تا انتها</span>
              <h2 id="workflow-title">
                یک مراجعه، <span>یک جریان مشخص.</span>
              </h2>
              <p>
                اطلاعاتی که در پذیرش ثبت می‌شود، تا محاسبه زمان، خدمات و تسویه
                همان مراجعه همراه شماست.
              </p>
              <a href={loginUrl} className="text-link">
                شروع استفاده از ترانک <Icon name="arrow" size={17} />
              </a>
            </div>
            <div className="workflow-steps">
              <div className="workflow-step">
                <span className="step-number">۱</span>
                <div>
                  <h3>پذیرش کودک</h3>
                  <p>
                    خانواده را پیدا یا ثبت کنید، کودکان و بخش بازی را انتخاب
                    کنید و زمان را شروع کنید.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <span className="step-number">۲</span>
                <div>
                  <h3>پیگیری بازی و خدمات</h3>
                  <p>
                    زمان بازی و استراحت را کنترل کنید؛ بسته‌های مجاز و کالاها را
                    در مراجعه لحاظ کنید.
                  </p>
                </div>
              </div>
              <div className="workflow-step">
                <span className="step-number">۳</span>
                <div>
                  <h3>محاسبه و تسویه</h3>
                  <p>
                    صورتحساب را بررسی کنید، دریافت‌ها را ثبت کنید و نتیجه مراجعه
                    را در گزارش‌ها ببینید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section audience-section"
          id="for-whom"
          aria-labelledby="audience-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="overline">برای مجموعه‌های کودک‌محور</span>
                <h2 id="audience-title">
                  با رشد مجموعه، کارها پراکنده نمی‌شوند
                </h2>
              </div>
              <p>
                ترانک برای نیازهای تخصصی خانه بازی طراحی شده و فرآیندهای مکمل را
                هم پوشش می‌دهد.
              </p>
            </div>
            <div className="audience-grid">
              <article className="audience-card">
                <span className="audience-icon">
                  <Icon name="clock" size={26} />
                </span>
                <h3>خانه بازی زمان‌محور</h3>
                <p>
                  برای مجموعه‌ای که ورود، استراحت، زمان بازی و هزینه هر کودک
                  اهمیت دارد.
                </p>
              </article>
              <article className="audience-card">
                <span className="audience-icon">
                  <Icon name="calendar" size={26} />
                </span>
                <h3>کلاس و کارگاه کودک</h3>
                <p>
                  برای مراکزی که همراه بازی، دوره، کلاس یا رویداد با ظرفیت مشخص
                  برگزار می‌کنند.
                </p>
              </article>
              <article className="audience-card">
                <span className="audience-icon">
                  <Icon name="layers" size={26} />
                </span>
                <h3>مجموعه‌های دارای چند شعبه</h3>
                <p>
                  با ساختار سازمان و شعبه و تخصیص دسترسی کاربران به شعب مجاز.
                </p>
              </article>
            </div>
            <p className="audience-note">
              <Icon name="shield" size={18} /> اطلاعات خانواده و کودک در ترانک
              تحت کنترل دسترسی مبتنی بر مجوز قرار می‌گیرد؛ دسترسی هر کاربر یکسان
              نیست.
            </p>
          </div>
        </section>

        <section
          className="section detail-section"
          aria-labelledby="detail-title"
        >
          <div className="container detail-grid">
            <div className="detail-illustration" aria-hidden="true">
              <div className="detail-tag">در یک نگاه</div>
              <div className="detail-bar">
                <span>پذیرش</span>
                <b className="bar-long" />
              </div>
              <div className="detail-bar">
                <span>بسته بازی</span>
                <b className="bar-mid" />
              </div>
              <div className="detail-bar">
                <span>صندوق</span>
                <b className="bar-short" />
              </div>
              <div className="detail-bar">
                <span>گزارش</span>
                <b className="bar-mid" />
              </div>
              <div className="detail-circle">
                <Icon name="chart" size={34} />
              </div>
            </div>
            <div className="detail-copy">
              <span className="overline">مدیریت و گزارش</span>
              <h2 id="detail-title">تصمیم‌گیری با گزارش، نه حدس.</h2>
              <p>
                وقتی پذیرش، فروش و دریافت‌ها در مسیرهای مرتبط ثبت می‌شوند، مدیر
                می‌تواند تصویر روشن‌تری از وضعیت مجموعه داشته باشد.
              </p>
              <ul className="check-list">
                <li>
                  <Icon name="check" size={18} /> گزارش مراجعه‌ها، فروش و مبالغ
                  دریافتی
                </li>
                <li>
                  <Icon name="check" size={18} /> مقایسه عملکرد در بازه‌های
                  زمانی
                </li>
                <li>
                  <Icon name="check" size={18} /> کنترل صندوق و ثبت اختلاف‌های
                  شیفت
                </li>
              </ul>
              <Link className="text-link" href="/features/accounting">
                جزئیات صندوق و گزارش‌ها <Icon name="arrow" size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section pricing-section"
          id="pricing"
          aria-labelledby="pricing-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="overline">قیمت و اشتراک</span>
                <h2 id="pricing-title">
                  معرفی مکان رایگان است؛ مدیریت حرفه‌ای با اشتراک
                </h2>
              </div>
              <p>
                معرفی و پروموت مکان شما در بارانک همیشه رایگان است. قابلیت‌های
                مدیریتی ترانک با اشتراک فعال می‌شوند.
              </p>
            </div>
            <div className="pricing-grid">
              <article className="pricing-card pricing-free">
                <span>رایگان، برای همیشه</span>
                <h3>معرفی مکان در بارانک</h3>
                <p>
                 معرفی شما به خانواده‌ها جهت فروش بلیط، کلاس و رویداد‌ها
                </p>
              </article>
              <article className="pricing-card">
                <span>نیازمند اشتراک</span>
                <h3>مدیریت خانه بازی</h3>
                <p>پذیرش، ورود و خروج، صورتحساب و گزارش‌های پایه</p>
              </article>
              <article className="pricing-card">
                <span>نیازمند اشتراک</span>
                <h3>CRM و ارتباط با مشتریان</h3>
                <p>مدیریت ارتباط با خانواده‌ها و پیگیری مشتریان</p>
              </article>
              <article className="pricing-card">
                <span>نیازمند اشتراک</span>
                <h3>حسابداری و امور پرسنلی</h3>
                <p>مدیریت امور مالی و کارکنان مجموعه</p>
              </article>
            </div>
            <a className="btn btn-primary" href={loginUrl}>
              ورود و بررسی اشتراک‌ها <Icon name="arrow" size={17} />
            </a>
          </div>
        </section>

        <section
          className="section faq-section"
          id="faq"
          aria-labelledby="faq-title"
        >
          <div className="container faq-layout">
            <div className="faq-side">
              <span className="overline">پرسش‌های متداول</span>
              <h2 id="faq-title">
                پیش از شروع، <span>واضح بدانید.</span>
              </h2>
              <p>
                پاسخ به سؤال‌های مهم درباره امکانات و محدودیت‌های فعلی نرم‌افزار
                مدیریت خانه بازی ترانک.
              </p>
            </div>
            <div className="faq-items">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="faq-item">
                  <summary>
                    {question}
                    <span className="faq-plus" aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
              <details className="faq-item">
                <summary>
                  معرفی مکان در بارانک رایگان است؟
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <p>
                  بله. معرفی و پروموت مکان شما در بارانک برای همیشه رایگان است.
                  اشتراک فقط برای قابلیت‌های مدیریتی ترانک، مانند مدیریت مکان،
                  CRM و حسابداری، لازم است.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="cta-section" id="start" aria-labelledby="cta-title">
          <div className="container">
            <div className="cta-panel">
              <div className="cta-glow" aria-hidden="true" />
              <span className="cta-overline">از اینجا شروع کنید</span>
              <h2 id="cta-title">
                مدیریت خانه بازی را <span>منظم‌تر شروع کنید.</span>
              </h2>
              <p>
                معرفی مکان شما در بارانک رایگان است؛ برای مدیریت حرفه‌ای مجموعه،
                اشتراک مناسب‌تان را انتخاب کنید.
              </p>
              <a className="btn btn-light" href={loginUrl}>
                ورود و شروع ثبت مجموعه <Icon name="arrow" size={18} />
              </a>
              <small>
                قیمت و مدت‌های قابل انتخاب را در کاتالوگ اشتراک بررسی کنید.
              </small>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
