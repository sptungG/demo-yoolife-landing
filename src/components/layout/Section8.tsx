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
          className={`text-center text-[4.4375rem] font-[700] leading-none xl:pl-[64px] xl:text-left xl:text-[6.4375rem] ${MontserratAlternates.className}`}
        >
          Download
        </h3>
        <h3
          className={`text-center text-[5.3125rem] font-[800] leading-none xl:text-left xl:text-[8.4375rem] ${MontserratAlternates.className}`}
        >
          The Yoolife App
        </h3>
      </div>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-between px-12 xl:flex-row">
        <div className="relative xl:-ml-[100%]">
          <Image
            src="/section-8-app.png"
            alt=""
            width={896}
            height={0}
            className="-z-10 xl:translate-x-full"
          />
        </div>
        <div className="z-0 max-w-[580px] self-center">
          <div className="mb-10 text-center text-[3.3125rem] font-[700] text-gray-50 xl:whitespace-nowrap xl:text-left">
            Tải ứng dụng Yoolife
          </div>
          <p className="mb-8 text-justify text-[1.25rem] font-[300] leading-[2] text-gray-50">
            Để tải ứng dụng, bạn truy cập vào một trong hai đường dẫn dưới đây
            tùy theo thiết bị di động của mình sử dụng hệ điều hành là Android
            hay iOS.
          </p>
          <div className="mb-6 flex flex-col items-center xl:flex-row">
            <div className="flex flex-col gap-12">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center rounded-lg border bg-gray-50 pb-3 pl-3 pr-4 pt-3 shadow-md shadow-green3/50"
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
                className="group flex items-center rounded-lg border bg-gray-50 pb-3 pl-3 pr-4 pt-3 shadow-md shadow-green3/50"
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
            <div className="mt-11 xl:ml-11 xl:mt-0">
              <Image
                src="/section-8-qr.png"
                alt=""
                width={256}
                height={0}
                quality={100}
                priority
                className="rounded-[25px] shadow-md shadow-green3/50"
              />
            </div>
          </div>
          <div className="whitespace-nowrap text-center text-[1.8125rem] font-[700] uppercase text-gray-50 xl:text-justify">
            Mở máy ảnh của bạn lên và quét
          </div>
          <div className="whitespace-nowrap text-center text-[2.0875rem] font-[700] uppercase text-gray-50 xl:text-justify">
            Open your Camera and Scan
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-[1280px] px-12">
        <p className="text-center text-[1.25rem] font-[300] leading-[2] text-gray-50">
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
