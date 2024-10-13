import React from "react";

function Footer() {
  return (
    <section className="w-full h-[290px] flex items-center justify-center pr-24 relative z-10 bg-[#0C0C0C]">
      <div className="flex items-start justify-center gap-[120px]">
        <div>
          <ul className="text-[#808080] flex flex-col gap-5 text-sm font-normal">
            <li>Sesli Betimleme</li>
            <li>Yatırımcı İlişkileri</li>
            <li>Yasal Hükümler</li>
            <li>
              <span className="h-[60px] border-2 border-[#808080] p-2 mt-4">
                Hizmet Kodu
              </span>
            </li>
            <li className="text-xs">© 1997-2024 Netflix, Inc</li>
          </ul>
        </div>

        <div>
          <ul className="text-[#808080] flex flex-col gap-5 text-sm font-normal">
            <li>Yardım Merkezi</li>
            <li>İş İmkanları</li>
            <li>Çerez Tercihleri</li>
          </ul>
        </div>

        <div>
          <ul className="text-[#808080] flex flex-col gap-5 text-sm font-normal">
            <li>Hediye Kartları</li>
            <li>Kullanım Koşulları</li>
            <li>Kurumsal Bilgiler</li>
          </ul>
        </div>

        <div>
          <ul className="text-[#808080] flex flex-col gap-5 text-sm font-normal">
            <li>Medya Merkezi</li>
            <li>Gizlilik</li>
            <li>Bize Ulaşın</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
