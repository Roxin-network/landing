import Link from "next/link";
import { loginUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-title">ترانک <span lang="en">TARANAK</span></Link>
          <p>نرم‌افزار مدیریت خانه بازی و مجموعه‌های کودک‌محور</p>
        </div>
        <nav aria-label="لینک‌های پایین صفحه">
          <Link href="/features/reception">پذیرش و زمان بازی</Link>
          <Link href="/features/play-packages">بسته‌های بازی</Link>
          <Link href="/features/classes">کلاس و رزرو</Link>
          <Link href="/features/accounting">حسابداری و گزارش</Link>
          <Link href="/#pricing">قیمت‌ها و اشتراک</Link>
          <a href={loginUrl}>ورود به ترانک</a>
        </nav>
      </div>
      <div className="container footer-bottom"><span>ترانک | Taranak.app</span><span>طراحی‌شده برای مدیریت روشن‌تر کارهای روزانه</span></div>
    </footer>
  );
}
