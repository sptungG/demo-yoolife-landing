import { Montserrat_Alternates } from 'next/font/google';
import { AppleLogoSvg, ChPlayLogoSvg } from 'src/components/icons';
import { NImage as Image } from 'src/components/next/Image';
const MontserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['700', '800'],
});

function Section8() {
  return (
    <section className="mx-auto min-h-screen">
      <div className="mx-auto mb-[76px] max-w-[1280px] px-12 text-gray-50">
        <h3
          className={`pl-[64px] text-[103px] font-[700] leading-none ${MontserratAlternates.className}`}
        >
          Download
        </h3>
        <h3
          className={`text-[133px] font-[800] leading-none ${MontserratAlternates.className}`}
        >
          The Yoolife App
        </h3>
      </div>
      <div className="mx-auto flex w-full max-w-[1280px] justify-between px-12">
        <div className="relative -ml-[100%]">
          <Image
            src="/section-8-app.png"
            alt=""
            width={896}
            height={0}
            className="-z-10 translate-x-full"
          />
        </div>
        <div className="z-0 max-w-[580px] self-center">
          <div className="mb-10 whitespace-nowrap text-[53px] font-[700] text-gray-50">
            Tải ứng dụng Yoolife
          </div>
          <p className="mb-8 text-justify text-[20px] font-[300] leading-[2] text-gray-50">
            Để tải ứng dụng, bạn truy cập vào một trong hai đường dẫn dưới đây
            tùy theo thiết bị di động của mình sử dụng hệ điều hành là Android
            hay iOS.
          </p>
          <div className="mb-6 flex items-center">
            <div className="flex flex-col gap-12">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-green3/50 group flex items-center rounded-lg border bg-gray-50 pb-3 pl-3 pr-4 pt-3 shadow-md"
              >
                <AppleLogoSvg className="-mt-1.5 h-[46.67px] w-[46.67px] flex-shrink-0" />
                <div className="ml-3 flex flex-col justify-center">
                  <p className="mb-2 leading-none">Download on the</p>
                  <p className="text-[32px] font-[700] leading-none group-hover:underline">
                    App Store
                  </p>
                </div>
              </a>

              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-green3/50 group flex items-center rounded-lg border bg-gray-50 pb-3 pl-3 pr-4 pt-3 shadow-md"
              >
                <ChPlayLogoSvg className="h-[46.67px] w-[46.67px] flex-shrink-0" />
                <div className="ml-3 flex flex-col justify-center">
                  <p className="mb-2 leading-none">GET IT ON</p>
                  <p className="whitespace-nowrap text-[32px] font-[700] leading-none group-hover:underline">
                    Google Play
                  </p>
                </div>
              </a>
            </div>
            <div className="ml-11">
              <Image
                src="/section-8-qr.png"
                alt=""
                width={256}
                height={0}
                quality={100}
                priority
                className="shadow-green3/50 rounded-[25px] shadow-md"
              />
            </div>
          </div>
          <div className="text-[29px] font-[700] uppercase text-gray-50">
            Mở máy ảnh của bạn lên và quét
          </div>
          <div className="text-justify text-[33.4px] font-[700] uppercase text-gray-50">
            Open your Camera and Scan
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-12">
        <p className="text-center text-[20px] font-[300] leading-[2] text-gray-50">
          Hãy cài ngay ứng dụng Yoolife để trải nghiệm tương lai thông minh ngay
          trong căn nhà của bạn! Với Yoolife, bạn sẽ có cơ hội trải nghiệm một
          cuộc sống đa thông minh và tiện ích hơn bao giờ hết. Tự động hóa hệ
          thống trong nhà, kết nối với cộng đồng thông minh, và tận hưởng những
          tiện ích hiện đại mà ứng dụng mang lại. Khám phá ngay Yoolife và hòa
          mình vào không gian sống thông minh, tiện lợi và thú vị!
        </p>
      </div>
    </section>
  );
}

export default Section8;
