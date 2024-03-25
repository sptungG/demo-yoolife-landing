import Link from 'next/link';
import {
  AndroidFillSvg,
  AppStoreFillSvg,
  EmailOutlinedSvg,
  FbFillSvg,
  MapOutlinedSvg,
  PhoneOutlinedSvg,
  Star4Svg,
  TiktokFillSvg,
  YooLogoSvg,
  YooSvg,
  YoutubeFillSvg,
} from 'src/components/icons';
import { NImage as Image } from 'src/components/next/Image';
import Contact from '../shared/Contact';

function Footer() {
  return (
    <footer className="relative mx-auto mt-[100px] flex min-h-screen flex-col sm:mt-[200px]">
      <div className="absolute bottom-0 left-0 right-0 -z-10 min-h-screen overflow-hidden">
        <Image
          src="/v1/footer-bg.png"
          alt=""
          width={1920}
          height={0}
          className="absolute bottom-0 -z-10 h-full object-cover"
        />
        <div className="absolute -top-2 left-0 right-0 -z-10 h-[100%] scale-110 bg-gradient-to-b from-bg from-5% via-bg/50 via-90% to-bg/20 to-100% blur-sm"></div>
      </div>

      <Contact />

      <div className="mx-auto flex w-full max-w-[1280px] flex-col">
        <div className="mb-6">
          <div className="inline-flex flex-nowrap items-center px-3 lg:px-12">
            <YooLogoSvg className="w-[46px] md:w-[66px]" />
            <div className="flex flex-nowrap items-baseline">
              <span className="flex items-center justify-center">
                <YooSvg className="h-[26px] md:h-[33px]" />
              </span>
              <span className="logo-text-gradient-green ml-0 text-[2.8rem] font-[700] sm:text-[3rem]">
                life
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 px-3 lg:px-12">
            <div className="-mb-[1px] text-[1rem] font-[400] uppercase leading-none text-gray-400">
              Là sản phẩm thuộc
            </div>
            <div className="text-[1.375rem] font-[700] leading-none text-gray-400">
              Công ty Cổ phẩn YooTek Holdings
            </div>
          </div>
        </div>

        <div className="flex w-full flex-wrap gap-8 px-3 lg:px-12">
          <div className="">
            <div className="relative mb-5 inline-block text-[1.375rem] font-[600] text-gray-400">
              Liên hệ với chúng tôi
              <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-green2/80"></div>
            </div>
            <div className="mb-4 flex cursor-pointer items-center text-[1.2rem] text-gray-400 hover:text-gray-300 hover:underline">
              <EmailOutlinedSvg className="h-[18px] w-[18px]" />
              <a href="mailto:info@yootek.vn" className="ml-2.5">
                <b>Email:</b> info@yootek.vn
              </a>
            </div>
            <div className="mb-4 flex cursor-pointer items-center text-[1.2rem] text-gray-400 hover:text-gray-300 hover:underline">
              <PhoneOutlinedSvg className="h-[18px] w-[18px]" />
              <a href="tel:+84964714148" className="ml-2.5">
                <b>Số điện thoại:</b> 0964 714 148
              </a>
            </div>
            <div className="mb-4 flex items-center text-gray-400">
              <MapOutlinedSvg className="h-[18px] w-[18px]" />
              <div className="ml-2.5 text-[1.2rem] font-[700]">Văn phòng:</div>
            </div>
            <div className="flex flex-col gap-6 text-[1.2rem] xl:max-w-[600px]">
              <div className="cursor-pointer text-gray-400 hover:text-gray-300 hover:underline">
                <b>Trụ sở chính:</b> Tầng 3, Tòa Audi, Số 8 Phạm Hùng, Mễ Trì,
                Nam Từ Liêm, Hà Nội.
              </div>
              <div className="cursor-pointer text-gray-400 hover:text-gray-300 hover:underline">
                <b>Showroom:</b> D02-L38, Khu An Vượng Villa, Khu đô thị Dương
                Nội, Quận Hà Đông, Hà Nội.
              </div>
              <div className="cursor-pointer text-gray-400 hover:text-gray-300 hover:underline">
                <b>HCM Office:</b> Tầng 10, Tòa Sài Gòn Paragon, Số 3 Nguyễn
                Lương Bằng, Phường Tân Phú, Quận 7, TP. HCM.
              </div>
              <div className="cursor-pointer text-gray-400 hover:text-gray-300 hover:underline">
                <b>Trung tâm R&D:</b> 5/167 Herring Rd, Macquarie Park, NSW
                2113, Australia.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-x-3 pr-1 max-sm:w-full max-sm:flex-wrap sm:shrink-0 sm:flex-col sm:gap-x-6">
            <div className="flex flex-col items-start">
              <div className="relative mb-6 inline-block text-[1.375rem] font-[700] text-gray-400">
                Ứng dụng
                <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-green2/80"></div>
              </div>
              <div className="mb-10 text-[1.2rem]">
                <div className="mb-4 flex cursor-pointer items-center text-gray-400 hover:text-gray-300 hover:underline">
                  <AppStoreFillSvg className="h-6 w-6" />
                  <a
                    href="https://apps.apple.com/vn/app/yoolifeb/id1672904034?l=vi?l=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2.5"
                  >
                    Yoolife (IOS)
                  </a>
                </div>
                <div className="flex cursor-pointer items-center text-gray-400 hover:text-gray-300 hover:underline">
                  <AndroidFillSvg className="h-6 w-6" />
                  <a
                    href="https://play.google.com/store/apps/details?id=com.imax.smartlife&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2.5"
                  >
                    Yoolife (Android)
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="relative mb-6 inline-block whitespace-nowrap text-[1.375rem] font-[600] text-gray-400">
                Kết nối với YooTek
                <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-green2/80"></div>
              </div>
              <div className="flex flex-nowrap gap-6 text-gray-400">
                <a
                  href="https://www.facebook.com/YoolifeAIoTPlatform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center justify-center hover:text-blue-600"
                >
                  <FbFillSvg className="h-10 w-10" />
                </a>
                <a
                  href="https://www.tiktok.com/@yoolifeaiotplatform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center justify-center hover:text-black"
                >
                  <TiktokFillSvg className="h-10 w-10" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC--mSqwl0ClyGVE6Ud5N-Hg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center justify-center hover:text-red-500"
                >
                  <YoutubeFillSvg className="h-11 w-11" />
                </a>
              </div>
            </div>

            <Image
              src="/v1/online-gov-vn.png"
              alt=""
              width={200}
              height={0}
              quality={100}
              className="-ml-1 hidden shrink-0 opacity-70 sm:my-4 xl:mt-8"
            />
          </div>

          <div className="max-w-[100dvw] shrink-0 sm:max-w-[440px] xl:ml-auto xl:max-w-[305px]">
            <div className="relative mb-6 inline-block whitespace-nowrap text-[1.375rem] font-[600] text-gray-400">
              Các sản phẩm chính
              <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-green2/80"></div>
            </div>
            <div className="mb-4 flex cursor-pointer items-center text-[1.2rem] text-gray-400 hover:text-gray-300 hover:underline">
              <Star4Svg className="h-[18px] w-[18px] shrink-0" />
              <Link
                href="/"
                target="_blank"
                className="ml-1 font-[600] text-green1"
              >
                Yoolife - Chuyển đổi số toàn dân
              </Link>
            </div>
            <div className="mb-4 flex cursor-pointer items-center text-[1.2rem] text-gray-400 hover:text-gray-300 hover:underline">
              <Star4Svg className="h-[18px] w-[18px] shrink-0" />
              <Link
                href="/"
                target="_blank"
                className="ml-1 font-[600] text-green1"
              >
                YooIOC - Chuyển đổi số Quản lý vận hành
              </Link>
            </div>
            <div className="mb-4 flex cursor-pointer items-center text-[1.2rem] text-gray-400 hover:text-gray-300 hover:underline">
              <Star4Svg className="h-[18px] w-[18px] shrink-0" />
              <Link
                href="/"
                target="_blank"
                className="ml-1 font-[600] text-green1"
              >
                YooSeller - Chuyển đổi số cho ngành bán lẻ và dịch vụ
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pb-4 pt-8 text-center text-[1rem] text-gray-400 sm:text-[1.25rem] xl:pt-[56px]">
          Copyright © 2021 YooTek Holdings. All Right Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
