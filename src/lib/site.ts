export const site = {
  name: "ترانک",
  latinName: "Taranak",
  origin: "https://taranak.app",
  title: "نرم‌افزار مدیریت خانه بازی ترانک | پذیرش، زمان بازی و حسابداری",
  description:
    "ترانک نرم‌افزار مدیریت خانه بازی است: پذیرش کودک، محاسبه زمان بازی، بسته‌ها و صورتحساب؛ همراه با کلاس و رزرو، فروش، صندوق و گزارش‌های مدیریتی.",
};

// This URL exists in the audited app. Override after deciding on the public/app URL boundary.
export const loginUrl =
  process.env.NEXT_PUBLIC_APP_LOGIN_URL || "https://taranak.app/login";

export const indexable = process.env.SITE_INDEXABLE !== "false";

export const featureRoutes = [
  "/features/reception",
  "/features/play-packages",
  "/features/classes",
  "/features/accounting",
] as const;
