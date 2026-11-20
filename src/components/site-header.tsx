import Link from "next/link";
import { loginUrl } from "@/lib/site";
import { Icon } from "./icons";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="ترانک، بازگشت به صفحه اصلی">
          <span className="brand-mark" aria-hidden="true">T<span className="brand-mark-dot" /></span>
          <span className="brand-words"><strong>ترانک</strong><span lang="en">TARANAK</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="ناوبری اصلی">
          <Link href="/#features">امکانات</Link>
          <Link href="/#how-it-works">نحوه کار</Link>
          <Link href="/#for-whom">مناسب چه مجموعه‌هایی؟</Link>
          <Link href="/#pricing">قیمت‌ها</Link>
          <Link href="/#faq">سوالات متداول</Link>
        </nav>
        <a className="header-cta" href={loginUrl}>ورود / شروع <Icon name="arrow" size={17}/></a>
        <details className="mobile-menu">
          <summary aria-label="نمایش فهرست صفحات"><span /><span /><span /></summary>
          <nav aria-label="ناوبری موبایل">
            <Link href="/#features">امکانات ترانک</Link>
            <Link href="/#how-it-works">نحوه کار</Link>
            <Link href="/#for-whom">مناسب چه مجموعه‌هایی؟</Link>
            <Link href="/#pricing">قیمت‌ها و اشتراک</Link>
            <Link href="/#faq">سوالات متداول</Link>
            <a href={loginUrl}>ورود و شروع ثبت مجموعه</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
