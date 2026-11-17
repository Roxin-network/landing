import { Icon } from "./icons";

/** An explanatory CSS mockup, NOT a screenshot or claim about live UI. */
export function HeroPreview() {
  return (
    <figure className="preview-figure" aria-label="نمای مفهومی روند پذیرش، زمان‌سنج و صورتحساب خانه بازی">
      <div className="preview-topline"><span className="live-marker"/> گردش روزانه <span className="preview-dots" aria-hidden="true"><b/><b/><b/></span></div>
      <div className="preview-app">
        <aside className="preview-side" aria-hidden="true"><span className="side-pill selected"/><span className="side-pill"/><span className="side-pill"/><span className="side-pill"/></aside>
        <div className="preview-main">
          <div className="preview-heading"><span>میز پذیرش</span><span className="mini-tag">نمونه نمایشی</span></div>
          <div className="preview-metrics">
            <div><span>کودکان حاضر</span><strong>۰۸</strong><small>پذیرش فعال</small></div>
            <div><span>مراجعه‌های امروز</span><strong>۲۴</strong><small>نمونه اطلاعات</small></div>
          </div>
          <div className="preview-label">مراجعه جاری <span>زمان و وضعیت</span></div>
          <div className="preview-child"><div className="child-avatar lavender">۰۱</div><div><strong>کودک نمونه ۰۱</strong><small>بازی در بخش کودک</small></div><div className="child-status playing">در حال بازی</div><strong className="child-time">۰۰:۳۴</strong></div>
          <div className="preview-child"><div className="child-avatar peach">۰۲</div><div><strong>کودک نمونه ۰۲</strong><small>زمان متوقف شده</small></div><div className="child-status paused">استراحت</div><strong className="child-time">۰۰:۱۸</strong></div>
          <div className="preview-bill"><div className="preview-bill-head"><span><Icon name="receipt" size={17}/> صورتحساب مراجعه</span><span>پیش‌نمایش</span></div><div className="bill-line"><span>زمان بازی</span><span className="skeleton-price"/></div><div className="bill-line"><span>بسته بازی</span><span className="skeleton-price short"/></div><div className="bill-total"><span>بازی + خدمات + دریافت</span><span>تسویه در یک جریان</span></div></div>
        </div>
      </div>
      <figcaption>نمای مفهومی برای توضیح فرآیند؛ تصویر واقعی محیط نرم‌افزار نیست.</figcaption>
    </figure>
  );
}
