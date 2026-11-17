import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Icon } from "./icons";
import { loginUrl, site } from "@/lib/site";
import type { FeatureDetail } from "@/lib/content";

export function detailMetadata(detail: FeatureDetail): Metadata {
  const description = detail.lead;
  const url = `${site.origin}/features/${detail.slug}`;
  return {
    title: detail.title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", locale: "fa_IR", title: `${detail.title} | ترانک`, description, url, images: ["/og.png"] },
  };
}

export function FeatureDetailPage({ detail }: { detail: FeatureDetail }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="inner-page">
        <section className="detail-hero"><div className="container narrow-container">
          <nav className="breadcrumbs" aria-label="مسیر صفحه"><Link href="/">خانه</Link><span aria-hidden="true">/</span><Link href="/#features">امکانات</Link><span aria-hidden="true">/</span><span aria-current="page">{detail.eyebrow}</span></nav>
          <span className="section-kicker"><span className="kicker-dot"/> {detail.eyebrow}</span>
          <h1>{detail.title}</h1>
          <p>{detail.lead}</p>
          <div className="hero-actions"><a className="btn btn-primary" href={loginUrl}>ورود و شروع ثبت مجموعه <Icon name="arrow" size={17}/></a><Link className="btn btn-secondary" href="/#features">همه امکانات</Link></div>
        </div></section>
        <section className="section"><div className="container narrow-container article-body"><h2>این بخش از ترانک چه کاری انجام می‌دهد؟</h2><p>{detail.summary}</p><h2>قابلیت‌های اصلی</h2><div className="article-feature-grid">{detail.bullets.map((b)=><article key={b.title}><span className="small-check"><Icon name="check" size={18}/></span><h3>{b.title}</h3><p>{b.body}</p></article>)}</div></div></section>
        <section className="section article-workflow"><div className="container narrow-container"><span className="overline">جریان کار</span><h2>از شروع تا نتیجه</h2><ol>{detail.workflow.map((step,i)=><li key={step}><span>{new Intl.NumberFormat("fa-IR").format(i+1)}</span><p>{step}</p></li>)}</ol></div></section>
        <section className="section"><div className="container narrow-container article-body"><h2>پرسش‌های رایج</h2><div className="faq-items">{detail.faq.map((f)=><details key={f.question} className="faq-item"><summary>{f.question}<span className="faq-plus" aria-hidden="true" /></summary><p>{f.answer}</p></details>)}</div>{detail.limitations && <p className="article-note">نکته: {detail.limitations}</p>}</div></section>
        <section className="article-bottom"><div className="container narrow-container"><h2>ترانک را برای مجموعه خود بررسی کنید</h2><p>امکانات پذیرش، بسته، برنامه و گزارش‌ها به یک گردش عملیاتی مرتبط متصل‌اند.</p><a href={loginUrl} className="btn btn-primary">ورود و شروع ثبت مجموعه <Icon name="arrow" size={17}/></a></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
