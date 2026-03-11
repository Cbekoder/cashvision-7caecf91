import StarRating from "@/components/StarRating";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import InstallButton from "@/components/InstallButton";

import appIcon from "@/assets/app-icon.png";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";
import screenshot4 from "@/assets/screenshot-4.png";

const APK_URL = "/CashVision.apk";

const reviews = [
  { name: "Ali M.", rating: 5, text: "Bu ilova juda foydali! Pullarni bir zumda aniqlaydi va ovozli aytib beradi. Ko'rish qobiliyati past bo'lganlarga tavsiya qilaman.", date: "2026-yil 15-yan" },
  { name: "Sarvinoz K.", rating: 4, text: "Yaxshi yoritilgan joyda juda yaxshi ishlaydi. Ba'zan qorong'ida qiyinchilik bo'ladi, lekin umuman ajoyib vosita.", date: "2026-yil 2-fev" },
  { name: "Muhammad R.", rating: 5, text: "Nihoyat valyutani aniqlash uchun haqiqatan ishlaydi. Ovozli javob tez va aniq.", date: "2026-yil 28-fev" },
  { name: "Dilnoza T.", rating: 5, text: "Buvim har kuni foydalanadi. Endi do'konda pulni mustaqil tekshira oladi. Rahmat!", date: "2026-yil 5-mar" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 sm:pb-8">
      <div className="mx-auto max-w-store px-4 sm:px-6 py-6 sm:py-10">
        {/* Header */}
        <div className="flex gap-5 items-start mb-6">
          <img
            src={appIcon}
            alt="CashVision app icon"
            className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-2xl flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground tracking-tight">
              CashVision
            </h1>
            <p className="text-sm text-primary font-medium mt-0.5">Birlik Co.</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-medium text-foreground">4.5</span>
              <StarRating rating={4.5} />
              <span className="text-sm text-muted-foreground">1 247 ta sharh</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">99.1 MB</p>
          </div>
        </div>

        {/* Install button - desktop */}
        <div className="mb-8">
          <InstallButton apkUrl={APK_URL} />
        </div>

        {/* Screenshots */}
        <div className="mb-8">
          <ScreenshotCarousel images={[screenshot1, screenshot4, screenshot2, screenshot3]} />
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-lg font-display font-bold text-foreground mb-3">Ilova haqida</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              CashVision — ko'rish qobiliyati cheklangan va ojiz odamlarga qog'oz pullarni osongina aniqlashga yordam berish uchun mo'ljallangan ilovadir. Ilg'or kamera texnologiyasi yordamida ilova banknotlarni skanerlaydi va ularning qiymatini ovozli tarzda darhol e'lon qiladi.
            </p>
            <p>
              Telefoningiz kamerasini banknotga qarating va CashVision real vaqtda denominatsiyani aniqlaydi. Ilova oddiy va intuitiv interfeysga ega bo'lib, foydalanuvchilar tez va mustaqil foydalanishlari mumkin.
            </p>
            <p>
              CashVision foydalanuvchilarga kundalik moliyaviy vazifalarni ko'proq ishonch va mustaqillik bilan boshqarishga yordam beradi. Qaytim olish, naqd pulni tartiblash yoki banknotlarni tekshirish — ilova tez va ishonchli aniqlash imkonini beradi.
            </p>
            <div className="pt-2">
              <p className="text-foreground font-medium mb-2">Asosiy imkoniyatlar</p>
              <ul className="space-y-1.5">
                <li>📷 Telefoningiz kamerasi orqali real vaqtda banknotlarni aniqlash</li>
                <li>🔊 Aniqlangan valyuta qiymatini aniq aytib beruvchi ovozli javob</li>
                <li>⚡ Kundalik foydalanish uchun tez va aniq aniqlash</li>
                <li>♿ Ko'rish qobiliyati cheklangan foydalanuvchilar uchun optimallashtirilgan dizayn</li>
                <li>📱 Oddiy va qulay interfeys</li>
              </ul>
            </div>
            <p>CashVision kundalik moliyaviy muomalalarni osonroq, xavfsizroq va hammaga qulay qilishga qaratilgan.</p>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-8">
          <h2 className="text-lg font-display font-bold text-foreground mb-3">Baholar va sharhlar</h2>
          <div className="flex items-center gap-4 mb-5">
            <div className="text-center">
              <p className="text-5xl font-display font-bold text-foreground">4.5</p>
              <StarRating rating={4.5} size={16} />
              <p className="text-xs text-muted-foreground mt-1">1 247 ta sharh</p>
            </div>
            <div className="flex-1 space-y-1">
              {[5, 4, 3, 2, 1].map((star) => {
                const pct = star === 5 ? 68 : star === 4 ? 22 : star === 3 ? 6 : star === 2 ? 3 : 1;
                return (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-3">{star}</span>
                    <div className="flex-1 h-2 rounded-full bg-surface overflow-hidden">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="py-3 border-t border-border">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-xs font-medium text-muted-foreground">
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-foreground">{review.name}</span>
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <StarRating rating={review.rating} size={12} />
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* App Info */}
        <div>
          <h2 className="text-lg font-display font-bold text-foreground mb-3">Ilova ma'lumotlari</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Versiya", value: "1.0.0" },
              { label: "Yangilangan", value: "2025-yil 16-iyul" },
              { label: "Hajmi", value: "99.1 MB" },
              { label: "Turkum", value: "Samaradorlik" },
            ].map((item) => (
              <div key={item.label} className="bg-surface rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky install button - mobile only */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-background border-t border-border sm:hidden z-50">
        <InstallButton apkUrl={APK_URL} />
      </div>
    </div>
  );
};

export default Index;
