import '@fontsource/vazirmatn/400.css'
import '@fontsource/vazirmatn/500.css'
import '@fontsource/vazirmatn/600.css'
import '@fontsource/vazirmatn/700.css'

import './style.css'

const salonPhone = '09373559672'

const smsText = `سلام، برای دریافت نوبت از سالن زیبایی مهتاب پیام می‌دهم.
نام:
خدمت موردنظر:
تاریخ پیشنهادی:
ساعت پیشنهادی:`

type Service = {
  id: string
  icon: string
  title: string
  subtitle: string
}

type FAQCategory = {
  id: string
  icon: string
  title: string
  subtitle: string
  questions: {
    question: string
    answer: string
  }[]
}

const services: Service[] = [
  {
    id: 'bridal',
    icon: '✦',
    title: 'میکاپ و شینیون تخصصی عروس',
    subtitle: 'آرایش و شینیون ویژه مراسم',
  },
  {
    id: 'permanent-face',
    icon: '♡',
    title: 'خدمات دائم صورت',
    subtitle: 'انواع تکنیک‌های دائم ابرو، خط چشم و شیدینگ لب',
  },
  {
    id: 'hair-light',
    icon: '◌',
    title: 'آمبره، بالیاژ، سامبره و لایت مو',
    subtitle: 'انواع تکنیک‌های تخصصی لایت و رنگ مو',
  },
  {
    id: 'haircut',
    icon: '✂',
    title: 'هیرکات ژورنالی',
    subtitle: 'مدل‌های ژورنالی و تخصصی کوتاهی مو',
  },
  {
    id: 'lash-extension',
    icon: '❋',
    title: 'اکستنشن مژه',
    subtitle: 'اجرای ظریف و تخصصی اکستنشن مژه',
  },
  {
    id: 'lash-lift',
    icon: '⌁',
    title: 'لیفت ابرو و مژه',
    subtitle: 'فرم‌دهی و حالت‌دهی طبیعی ابرو و مژه',
  },
  {
    id: 'nail',
    icon: '◇',
    title: 'خدمات ناخن',
    subtitle: 'خدمات تخصصی زیبایی و مراقبت ناخن',
  },
  {
    id: 'facial',
    icon: '✧',
    title: 'فشیال غیرتهاجمی پوست صورت',
    subtitle: 'مراقبت و پاکسازی غیرتهاجمی پوست',
  },
  {
    id: 'brow',
    icon: '⌇',
    title: 'اصلاح صورت تخصصی و ابرو',
    subtitle: 'اصلاح و فرم‌دهی متناسب با چهره',
  },
]

const serviceDetails: Record<
  string,
  {
    title: string
    description: string
    points: string[]
  }
> = {
  bridal: {
    title: 'میکاپ و شینیون تخصصی عروس',
    description:
      'میکاپ و شینیون تخصصی عروس با تمرکز بر هماهنگی آرایش، مدل مو و استایل مراسم انجام می‌شود.',
    points: [
      'طراحی میکاپ متناسب با چهره و استایل عروس',
      'اجرای شینیون‌های متنوع و مناسب مراسم',
      'توجه به ماندگاری و ظرافت نهایی کار',
    ],
  },

  'permanent-face': {
    title: 'خدمات دائم صورت',
    description:
      'این بخش شامل انواع تکنیک‌های دائم ابرو، خط چشم و شیدینگ لب است که توسط متخصص انجام می‌شود.',
    points: [
      'انواع تکنیک‌های دائم ابرو',
      'اجرای تکنیک‌های مختلف خط چشم',
      'شیدینگ لب',
      'انتخاب تکنیک مناسب با شرایط و فرم چهره',
    ],
  },

  'hair-light': {
    title: 'آمبره، بالیاژ، سامبره و لایت مو',
    description:
      'انواع تکنیک‌های تخصصی لایت و رنگ مو با توجه به رنگ پایه، جنس مو و نتیجه موردنظر انجام می‌شود.',
    points: [
      'آمبره',
      'بالیاژ',
      'سامبره',
      'انواع تکنیک‌های لایت مو',
      'انتخاب ترکیب مناسب متناسب با وضعیت مو',
    ],
  },

  haircut: {
    title: 'هیرکات ژورنالی',
    description:
      'هیرکات ژورنالی با توجه به فرم چهره، جنس مو و مدل موردنظر انجام می‌شود.',
    points: [
      'مدل‌های ژورنالی و به‌روز',
      'توجه به فرم کلی چهره',
      'اجرای کوتاهی با توجه به جنس و حالت مو',
    ],
  },

  'lash-extension': {
    title: 'اکستنشن مژه',
    description:
      'اکستنشن مژه برای ایجاد فرم و حالت موردنظر چشم با رعایت ظرافت و دقت انجام می‌شود.',
    points: [
      'انتخاب فرم مناسب با حالت چشم',
      'اجرای ظریف و مرتب',
      'توجه به مراقبت صحیح از مژه‌ها',
    ],
  },

  'lash-lift': {
    title: 'لیفت ابرو و مژه',
    description:
      'لیفت ابرو و مژه برای ایجاد حالت مرتب‌تر و فرم‌دهی طبیعی انجام می‌شود.',
    points: [
      'فرم‌دهی ابرو',
      'حالت‌دهی مژه',
      'ایجاد ظاهر مرتب و طبیعی',
    ],
  },

  nail: {
    title: 'خدمات ناخن',
    description:
      'خدمات تخصصی ناخن با توجه به انتخاب و نیاز مراجعه‌کننده انجام می‌شود.',
    points: [
      'مراقبت و زیبایی ناخن',
      'اجرای خدمات متناسب با انتخاب مراجعه‌کننده',
      'توجه به سلامت و مراقبت صحیح ناخن',
    ],
  },

  facial: {
    title: 'فشیال غیرتهاجمی پوست صورت',
    description:
      'فشیال غیرتهاجمی با هدف مراقبت، پاکسازی و رسیدگی به پوست صورت انجام می‌شود.',
    points: [
      'پاکسازی و مراقبت از پوست',
      'تمرکز بر نیازهای ظاهری پوست',
      'انجام خدمات بدون روش‌های تهاجمی',
    ],
  },

  brow: {
    title: 'اصلاح صورت تخصصی و ابرو',
    description:
      'اصلاح صورت و ابرو با توجه به فرم چهره و مدل موردنظر انجام می‌شود.',
    points: [
      'اصلاح تخصصی ابرو',
      'فرم‌دهی متناسب با چهره',
      'اصلاح صورت',
    ],
  },
}

const faqCategories: FAQCategory[] = [
  {
    id: 'permanent',
    icon: '♡',
    title: 'خدمات دائم صورت',
    subtitle: 'نکات مهم قبل و بعد از خدمات دائم',
    questions: [
      {
        question: 'بعد از خدمات دائم چه نکته‌ای را رعایت کنم؟',
        answer:
          'محل انجام کار را لمس، نخارانید و پوسته‌های ایجادشده را جدا نکنید. زمان و روش شست‌وشو و مراقبت اولیه را مطابق دستور متخصص سالن انجام دهید.',
      },
      {
        question: 'آیا قرمزی یا حساسیت موقت ممکن است ایجاد شود؟',
        answer:
          'ممکن است پس از بعضی خدمات، قرمزی یا حساسیت موقت ایجاد شود. مراقبت دقیق طبق دستور متخصص اهمیت دارد. در صورت شدید یا رو به افزایش بودن علائم، پیگیری پزشکی انجام دهید.',
      },
      {
        question: 'برای شیدینگ لب چه مراقبتی لازم است؟',
        answer:
          'مراقبت شیدینگ لب باید طبق دستور متخصص انجام شود. لب را دستکاری یا پوسته‌ها را جدا نکنید و در صورت بروز واکنش شدید یا غیرعادی، پیگیری پزشکی داشته باشید.',
      },
    ],
  },

  {
    id: 'lashes',
    icon: '❋',
    title: 'اکستنشن و لیفت مژه',
    subtitle: 'مراقبت از مژه و اطراف چشم',
    questions: [
      {
        question: 'بعد از اکستنشن مژه چه کاری انجام ندهم؟',
        answer:
          'مژه‌های اکستنشن‌شده را نکشید و دستکاری نکنید. روش تمیزکردن و مراقبت از مژه‌ها را مطابق دستور متخصص انجام دهید.',
      },
      {
        question: 'اگر چشمم بعد از خدمات تحریک شد چه کار کنم؟',
        answer:
          'در صورت درد قابل توجه، تورم شدید یا تحریک مداوم چشم، موضوع را جدی بگیرید و برای بررسی مناسب، پیگیری پزشکی انجام دهید.',
      },
      {
        question: 'بعد از لیفت ابرو و مژه چه نکته‌ای مهم است؟',
        answer:
          'از دستکاری و فشار غیرضروری روی ابرو و مژه خودداری کنید و دستور مراقبت اولیه متخصص سالن را رعایت کنید.',
      },
    ],
  },

  {
    id: 'hair',
    icon: '◌',
    title: 'رنگ، لایت و هیرکات',
    subtitle: 'مراقبت از مو بعد از خدمات',
    questions: [
      {
        question: 'بعد از لایت و رنگ مو چه مراقبتی لازم است؟',
        answer:
          'از شست‌وشوی بیش از حد و استفاده نادرست از حرارت خودداری کنید و از محصولات مناسب مو استفاده کنید.',
      },
      {
        question: 'آیا حرارت زیاد می‌تواند به مو آسیب بزند؟',
        answer:
          'استفاده زیاد از حرارت می‌تواند به مو آسیب وارد کند. بهتر است استفاده از ابزارهای حرارتی را مدیریت کنید و مراقبت مناسب از مو داشته باشید.',
      },
      {
        question: 'برای هیرکات چه نکته‌ای مهم است؟',
        answer:
          'برای حفظ فرم مدل، نحوه حالت‌دهی و مراقبت روزانه از مو اهمیت دارد. روش مناسب با توجه به مدل و جنس مو متفاوت است.',
      },
    ],
  },

  {
    id: 'nail',
    icon: '◇',
    title: 'خدمات ناخن',
    subtitle: 'نکات مراقبت از ناخن',
    questions: [
      {
        question: 'چطور از ناخن‌ها بعد از خدمات مراقبت کنم؟',
        answer:
          'از ناخن‌ها به‌عنوان ابزار استفاده نکنید و هنگام کار با مواد شوینده، از دستکش مناسب استفاده کنید.',
      },
      {
        question: 'اگر مواد روی ناخن بلند شد چه کار کنم؟',
        answer:
          'مواد را نکنید و با فشار جدا نکنید. بهتر است برای بررسی و ترمیم، به متخصص مراجعه کنید.',
      },
    ],
  },

  {
    id: 'skin',
    icon: '✧',
    title: 'فشیال و اصلاح صورت',
    subtitle: 'نکات مراقبت از پوست',
    questions: [
      {
        question: 'بعد از فشیال چه نکته‌ای را رعایت کنم؟',
        answer:
          'مراقبت بعد از فشیال با توجه به نوع پوست و خدمات انجام‌شده متفاوت است. دستور متخصص سالن را در اولویت قرار دهید و از تحریک غیرضروری پوست خودداری کنید.',
      },
      {
        question: 'آیا قرمزی موقت پوست ممکن است ایجاد شود؟',
        answer:
          'ممکن است پس از برخی خدمات پوستی، قرمزی یا حساسیت موقت ایجاد شود. اگر علائم شدید یا رو به افزایش بود، پیگیری پزشکی مناسب است.',
      },
      {
        question: 'بعد از اصلاح صورت چه نکته‌ای مهم است؟',
        answer:
          'تا حد امکان پوست را دستکاری نکنید و از تحریک غیرضروری آن خودداری کنید.',
      },
    ],
  },

  {
    id: 'general',
    icon: '✦',
    title: 'نکات عمومی',
    subtitle: 'توصیه‌هایی که بهتر است بدانید',
    questions: [
      {
        question: 'اگر آلرژی یا حساسیت خاصی داشته باشم چه کنم؟',
        answer:
          'قبل از انجام خدمات، هرگونه حساسیت، آلرژی یا شرایط خاص مرتبط را با متخصص سالن در میان بگذارید.',
      },
      {
        question: 'دستور متخصص سالن مهم‌تر است یا توصیه‌های عمومی؟',
        answer:
          'توصیه‌های عمومی جایگزین دستور متخصص نیستند. دستور مراقبت ارائه‌شده متناسب با خدمت انجام‌شده را در اولویت قرار دهید.',
      },
    ],
  },
]

function iconBox(icon: string, className = '') {
  return `<span class="icon-box ${className}">${icon}</span>`
}

function homePage() {
  return `
    <div class="page page-home">

      <header class="app-header">
        <div class="brand">
          <div class="brand-mark">م</div>
          <div>
            <div class="brand-name">سالن زیبایی مهتاب</div>
            <div class="brand-caption">زیبایی، ظرافت، اعتماد</div>
          </div>
        </div>
      </header>

      <main class="home-content">

        <section class="welcome-card">
          <span class="welcome-flower">🌹</span>

          <div class="welcome-content">
            <span class="eyebrow">سالن زیبایی مهتاب</span>

            <h1>
              به اپلیکیشن سالن زیبایی مهتاب
              <span>خوش‌آمدید</span>
            </h1>

            <p>
              همه اطلاعات مورد نیاز شما، در یکجا
            </p>
          </div>
        </section>

        <section class="advertisement">
          <div class="advertisement-label">تبلیغات</div>

          <div class="advertisement-card">
            <div class="advertisement-icon">✦</div>
            <p>
              زیبایی خود را به
              <strong>مهتاب بسپارید</strong>
              <br />
              خدمات تخصصی زیبایی با کیفیت
            </p>
          </div>
        </section>

        <section class="menu-section">
          <div class="section-heading">
            <span>راهنمای سالن</span>
            <h2>خدمات و امکانات</h2>
          </div>

          <div class="home-menu">

            <button class="menu-card menu-services" data-page="services">
              ${iconBox('✦')}
              <span class="menu-text">
                <strong>انواع خدمات سالن</strong>
                <small>مشاهده خدمات و توضیحات</small>
              </span>
              <span class="menu-arrow">‹</span>
            </button>

            <button class="menu-card menu-appointment" data-page="appointment">
              ${iconBox('◷')}
              <span class="menu-text">
                <strong>نحوه ثبت نوبت</strong>
                <small>راهنمای دریافت نوبت از سالن</small>
              </span>
              <span class="menu-arrow">‹</span>
            </button>

            <button class="menu-card menu-tips" data-page="tips">
              ${iconBox('✧')}
              <span class="menu-text">
                <strong>عوارض و نکات</strong>
                <small>پاسخ به سؤال‌های مهم شما</small>
              </span>
              <span class="menu-arrow">‹</span>
            </button>

            <button class="menu-card menu-address" data-page="address">
              ${iconBox('⌖')}
              <span class="menu-text">
                <strong>آدرس سالن</strong>
                <small>مشاهده نشانی سالن</small>
              </span>
              <span class="menu-arrow">‹</span>
            </button>

            <button class="menu-card menu-contact" data-page="contact">
              ${iconBox('♡')}
              <span class="menu-text">
                <strong>تماس با سالن</strong>
                <small>تماس یا ارسال پیامک</small>
              </span>
              <span class="menu-arrow">‹</span>
            </button>

          </div>
        </section>

      </main>

      <footer class="app-footer">
        <span>سالن زیبایی مهتاب</span>
        <span>آران و بیدگل</span>
      </footer>

    </div>
  `
}

function servicesPage() {
  return `
    <div class="page inner-page">

      <header class="inner-header">
        <button class="back-button" data-page="home" aria-label="بازگشت">→</button>

        <div>
          <span>خدمات تخصصی</span>
          <h1>انواع خدمات سالن</h1>
        </div>

        <div class="inner-header-mark">م</div>
      </header>

      <main class="inner-content">

        <div class="intro-box">
          <span>✦</span>
          <p>
            برای مشاهده توضیحات هر خدمت، کارت موردنظر را انتخاب کنید.
          </p>
        </div>

        <section class="services-list">
          ${services
            .map(
              (service) => `
                <button
                  class="service-card"
                  data-page="service"
                  data-service="${service.id}"
                >
                  <span class="service-icon">${service.icon}</span>

                  <span class="service-info">
                    <strong>${service.title}</strong>
                    <small>${service.subtitle}</small>
                  </span>

                  <span class="service-arrow">‹</span>
                </button>
              `,
            )
            .join('')}
        </section>

      </main>

      <footer class="app-footer">
        <span>سالن زیبایی مهتاب</span>
      </footer>

    </div>
  `
}

function createServicePage(id: string) {
  const service = serviceDetails[id]

  if (!service) {
    return servicesPage()
  }

  const currentService = services.find((item) => item.id === id)

  return `
    <div class="page inner-page">

      <header class="inner-header">
        <button class="back-button" data-page="services" aria-label="بازگشت">→</button>

        <div>
          <span>خدمات تخصصی سالن</span>
          <h1>جزئیات خدمت</h1>
        </div>

        <div class="inner-header-mark">م</div>
      </header>

      <main class="inner-content">

        <section class="service-detail">

          <div class="service-detail-top">
            <div class="service-detail-icon">
              ${currentService?.icon ?? '✦'}
            </div>

            <span class="service-detail-label">
              سالن زیبایی مهتاب
            </span>
          </div>

          <h2>${service.title}</h2>

          <p class="service-detail-description">
            ${service.description}
          </p>

          <div class="detail-divider"></div>

          <div class="detail-heading">
            <span>✦</span>
            <strong>این خدمت شامل</strong>
          </div>

          <div class="service-points">
            ${service.points
              .map(
                (point) => `
                  <div class="service-point">
                    <span>✓</span>
                    <p>${point}</p>
                  </div>
                `,
              )
              .join('')}
          </div>

        </section>

        <button class="secondary-action" data-page="appointment">
          <span>◷</span>
          <span>نحوه دریافت نوبت</span>
          <span>‹</span>
        </button>

      </main>

      <footer class="app-footer">
        <span>سالن زیبایی مهتاب</span>
      </footer>

    </div>
  `
}

function appointmentPage() {
  return `
    <div class="page inner-page">

      <header class="inner-header">
        <button class="back-button" data-page="home">→</button>

        <div>
          <span>راهنمای دریافت نوبت</span>
          <h1>نحوه ثبت نوبت</h1>
        </div>

        <div class="inner-header-mark">م</div>
      </header>

      <main class="inner-content">

        <section class="appointment-hero">
          <div class="appointment-icon">◷</div>

          <span>دریافت نوبت</span>

          <h2>
            برای دریافت نوبت با سالن
            <strong>تماس بگیرید</strong>
          </h2>

          <p>
            ثبت نوبت در این اپلیکیشن انجام نمی‌شود.
            برای دریافت نوبت می‌توانید با سالن تماس بگیرید
            یا پیامک ارسال کنید.
          </p>
        </section>

        <section class="contact-actions">

          <a
            class="action-card call-action"
            href="tel:${salonPhone}"
          >
            <span class="action-icon">☎</span>

            <span>
              <strong>تماس با سالن</strong>
              <small>${salonPhone}</small>
            </span>

            <span class="action-arrow">‹</span>
          </a>

          <a
            class="action-card sms-action"
            href="sms:${salonPhone}?body=${encodeURIComponent(smsText)}"
          >
            <span class="action-icon">✉</span>

            <span>
              <strong>ارسال پیامک</strong>
              <small>درخواست نوبت از طریق پیامک</small>
            </span>

            <span class="action-arrow">‹</span>
          </a>

        </section>

        <section class="sms-template">
          <div class="template-title">
            <span>✦</span>
            <strong>متن پیشنهادی پیامک</strong>
          </div>

          <div class="template-text">
            سلام، برای دریافت نوبت از سالن زیبایی مهتاب پیام می‌دهم.
            <br /><br />
            نام:
            <br />
            خدمت موردنظر:
            <br />
            تاریخ پیشنهادی:
            <br />
            ساعت پیشنهادی:
          </div>
        </section>

      </main>

      <footer class="app-footer">
        <span>سالن زیبایی مهتاب</span>
      </footer>

    </div>
  `
}

function tipsPage() {
  return `
    <div class="page inner-page">

      <header class="inner-header">
        <button class="back-button" data-page="home">→</button>

        <div>
          <span>راهنمای مراقبت</span>
          <h1>عوارض و نکات</h1>
        </div>

        <div class="inner-header-mark">م</div>
      </header>

      <main class="inner-content">

        <section class="faq-intro">
          <div class="faq-intro-icon">✧</div>

          <div>
            <span>راهنمای شما</span>
            <h2>سؤال‌های متداول</h2>
            <p>
              ابتدا موضوع موردنظر را انتخاب کنید، سپس سؤال خود را باز کنید.
            </p>
          </div>
        </section>

        <section class="faq-categories">

          ${faqCategories
            .map(
              (category) => `
                <article class="faq-category" data-faq-category="${category.id}">

                  <button class="faq-category-button">
                    <span class="faq-category-icon">
                      ${category.icon}
                    </span>

                    <span class="faq-category-text">
                      <strong>${category.title}</strong>
                      <small>${category.subtitle}</small>
                    </span>

                    <span class="faq-category-arrow">‹</span>
                  </button>

                  <div class="faq-questions">
                    ${category.questions
                      .map(
                        (item) => `
                          <div class="faq-question">

                            <button class="faq-question-button">
                              <span>${item.question}</span>
                              <b>+</b>
                            </button>

                            <div class="faq-answer">
                              <p>${item.answer}</p>
                            </div>

                          </div>
                        `,
                      )
                      .join('')}
                  </div>

                </article>
              `,
            )
            .join('')}

        </section>

        <section class="medical-note">
          <span>!</span>

          <p>
            این اطلاعات عمومی هستند و جایگزین توصیه متخصص یا بررسی پزشکی
            نمی‌شوند. در صورت بروز علائم شدید یا رو به افزایش، پیگیری پزشکی
            مناسب است.
          </p>
        </section>

      </main>

      <footer class="app-footer">
        <span>سالن زیبایی مهتاب</span>
      </footer>

    </div>
  `
}

function addressPage() {
  return `
    <div class="page inner-page">

      <header class="inner-header">
        <button class="back-button" data-page="home">→</button>

        <div>
          <span>راه‌های ارتباطی</span>
          <h1>آدرس سالن</h1>
        </div>

        <div class="inner-header-mark">م</div>
      </header>

      <main class="inner-content">

        <section class="address-card">

          <div class="address-symbol">⌖</div>

          <span>نشانی سالن زیبایی مهتاب</span>

          <h2>
            آران و بیدگل
          </h2>

          <p>
            خیابان ملامحمدعلی،
            <br />
            کوچه سیزدهم
          </p>

        </section>

        <section class="simple-info-card">
          <span>✦</span>
          <p>
            برای دریافت راهنمایی بیشتر درباره مسیر یا هماهنگی،
            با سالن تماس بگیرید.
          </p>
        </section>

      </main>

      <footer class="app-footer">
        <span>سالن زیبایی مهتاب</span>
      </footer>

    </div>
  `
}

function contactPage() {
  return `
    <div class="page inner-page">

      <header class="inner-header">
        <button class="back-button" data-page="home">→</button>

        <div>
          <span>ارتباط مستقیم</span>
          <h1>تماس با سالن</h1>
        </div>

        <div class="inner-header-mark">م</div>
      </header>

      <main class="inner-content">

        <section class="contact-hero">

          <div class="contact-mark">م</div>

          <span>سالن زیبایی مهتاب</span>

          <h2>
            با ما در ارتباط باشید
          </h2>

          <p>
            برای دریافت نوبت یا کسب اطلاعات بیشتر،
            می‌توانید با سالن تماس بگیرید یا پیامک ارسال کنید.
          </p>

        </section>

        <section class="contact-actions">

          <a
            class="action-card call-action"
            href="tel:${salonPhone}"
          >
            <span class="action-icon">☎</span>

            <span>
              <strong>تماس تلفنی</strong>
              <small>${salonPhone}</small>
            </span>

            <span class="action-arrow">‹</span>
          </a>

          <a
            class="action-card sms-action"
            href="sms:${salonPhone}?body=${encodeURIComponent(smsText)}"
          >
            <span class="action-icon">✉</span>

            <span>
              <strong>ارسال پیامک</strong>
              <small>ارسال درخواست نوبت</small>
            </span>

            <span class="action-arrow">‹</span>
          </a>

        </section>

      </main>

      <footer class="app-footer">
        <span>آران و بیدگل</span>
      </footer>

    </div>
  `
}

function render(page: string, serviceId?: string) {
  const app = document.querySelector<HTMLDivElement>('#app')

  if (!app) return

  switch (page) {
    case 'home':
      app.innerHTML = homePage()
      break

    case 'services':
      app.innerHTML = servicesPage()
      break

    case 'service':
      app.innerHTML = createServicePage(serviceId ?? '')
      break

    case 'appointment':
      app.innerHTML = appointmentPage()
      break

    case 'tips':
      app.innerHTML = tipsPage()
      break

    case 'address':
      app.innerHTML = addressPage()
      break

    case 'contact':
      app.innerHTML = contactPage()
      break

    default:
      app.innerHTML = homePage()
  }

  /*
   * بسیار مهم:
   * هر صفحه‌ای که باز می‌شود،
   * همیشه از ابتدای صفحه نمایش داده شود.
   */
  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  })
}

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement

  const navigationElement = target.closest<HTMLElement>('[data-page]')

  if (navigationElement) {
    const page = navigationElement.dataset.page
    const serviceId = navigationElement.dataset.service

    if (page) {
      render(page, serviceId)
      return
    }
  }

  const categoryButton = target.closest<HTMLButtonElement>(
    '.faq-category-button',
  )

  if (categoryButton) {
    const category = categoryButton.closest<HTMLElement>('.faq-category')

    if (!category) return

    const isOpen = category.classList.contains('is-open')

    document
      .querySelectorAll('.faq-category.is-open')
      .forEach((item) => {
        if (item !== category) {
          item.classList.remove('is-open')
        }
      })

    category.classList.toggle('is-open', !isOpen)

    return
  }

  const questionButton = target.closest<HTMLButtonElement>(
    '.faq-question-button',
  )

  if (questionButton) {
    const question = questionButton.closest<HTMLElement>('.faq-question')

    if (!question) return

    const isOpen = question.classList.contains('is-open')

    question.classList.toggle('is-open', !isOpen)
  }
})

render('home')