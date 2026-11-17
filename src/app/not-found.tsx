import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return <><SiteHeader /><main id="main-content" className="not-found container"><span className="overline">۴۰۴</span><h1>این صفحه پیدا نشد.</h1><p>برای مشاهده امکانات ترانک به صفحه اصلی برگردید.</p><Link href="/" className="btn btn-primary">بازگشت به صفحه اصلی</Link></main><SiteFooter /></>;
}
