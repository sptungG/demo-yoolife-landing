import { Element } from 'react-scroll';
import {
  AndroidFillSvg,
  AppStoreFillSvg,
  EmailOutlinedSvg,
  FbFillSvg,
  MapOutlinedSvg,
  PhoneOutlinedSvg,
  TiktokFillSvg,
  TwitterFillSvg,
  YooLogoSvg,
  YooSvg,
} from 'src/components/icons';
import { NImage as Image } from 'src/components/next/Image';

function Footer() {
  return (
    <footer className="relative mx-auto mt-[200px] flex min-h-screen flex-col">
      <div className="absolute bottom-0 left-0 right-0 -z-10 min-h-screen overflow-hidden">
        <Image
          src="/footer-bg.png"
          alt=""
          width={1920}
          height={0}
          className="absolute bottom-0 -z-10 h-full object-cover"
        />
        <div className="absolute -top-2 left-0 right-0 -z-10 h-[100%] scale-110 bg-gradient-to-b from-bg from-5% via-bg/50 via-90% to-bg/20 to-100% blur-sm"></div>
      </div>

      <Element
        name="contact-us"
        className="mx-auto mb-14 mt-auto max-w-[1280px] -translate-y-[32px] px-12"
      >
        <h3 className="mb-[18px] text-center text-[2.8125rem] font-[700] leading-[1.2] text-gray-50">
          Liên hệ với chúng tôi
        </h3>
        <p className="mb-11 text-center text-[1.875rem] font-[300] text-gray-50">
          Tham gia ngay bây giờ để ưu đãi đặc biệt và được tư vấn một cách tốt
          nhất!
        </p>
        <form className="flex w-full flex-col items-center justify-center gap-6 xl:flex-row xl:px-12">
          <input
            type="email"
            defaultValue=""
            className="min-h-12 flex-auto self-stretch rounded-full bg-gray-300/10 px-6 py-4 text-gray-50 outline-none backdrop-blur-sm placeholder:text-[1.25rem] hover:ring-1 focus:ring-1 focus:ring-green2"
            placeholder="Nhập Email của bạn..."
          />
          <button className="min-h-12 rounded-full bg-gradient-building px-12 py-4 text-[1.25rem] font-[500] text-gray-900">
            Gửi Email
          </button>
        </form>
      </Element>

      <div className="mx-auto max-w-[1280px]">
        <div className="mb-4">
          <div className="inline-flex flex-nowrap items-end px-12">
            <YooLogoSvg className="h-[76px] w-[76px]" />
            <div className="flex flex-nowrap items-baseline">
              <span className="flex items-center justify-center">
                <YooSvg height={33} />
              </span>
              <span className="logo-text-gradient-green ml-0 text-[3rem] font-[700]">
                life
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-12 xl:flex-row">
          <div className="">
            <div className="mb-9 text-[1.375rem] font-[700] text-gray-400">
              Công ty Cổ phẩn YooTek Holdings
            </div>
            <div className="mb-5 text-[1.375rem] font-[600] text-gray-400">
              Liên hệ với chúng tôi
            </div>
            <div className="mb-4 flex cursor-pointer items-center text-[1.0625rem] text-gray-400 hover:text-gray-300 hover:underline">
              <EmailOutlinedSvg className="h-[18px] w-[18px]" />
              <a href="mailto:info@imaxhitech.com" className="ml-2.5">
                <b>Email:</b> info@imaxhitech.com
              </a>
            </div>
            <div className="mb-4 flex cursor-pointer items-center text-[1.0625rem] text-gray-400 hover:text-gray-300 hover:underline">
              <PhoneOutlinedSvg className="h-[18px] w-[18px]" />
              <a href="tel:+842473011968" className="ml-2.5">
                <b>Số điện thoại:</b> +84 24 7301 1968
              </a>
            </div>
            <div className="mb-4 flex items-center text-gray-400">
              <MapOutlinedSvg className="h-[18px] w-[18px]" />
              <div className="ml-2.5 text-[1.0625rem] font-[700]">
                Văn phòng:
              </div>
            </div>
            <div className="flex flex-col gap-6 text-[1.0625rem]">
              <p className="cursor-pointer text-gray-400 hover:text-gray-300 hover:underline">
                <b>Trụ sở chính:</b> Tầng 3, Tòa Audi, Số 8 Phạm Hùng, Mễ Trì,
                Nam Từ Liêm, Hà Nội.
              </p>
              <p className="cursor-pointer text-gray-400 hover:text-gray-300 hover:underline">
                <b>Showroom:</b> D02-L38, An Vuong Villa block, Duong Noi, Ha
                Dong, Hà Nội.
              </p>
              <p className="cursor-pointer text-gray-400 hover:text-gray-300 hover:underline">
                <b>HCM Office:</b> Block A1, 312 Lạc Long Quân, Quận 11, Thành
                phố Hồ Chí Minh.
              </p>
              <p className="cursor-pointer text-gray-400 hover:text-gray-300 hover:underline">
                <b>Trung tâm R&D:</b> 5/167 Herring Rd, Macquarie Park, NSW
                2113.
              </p>
            </div>
          </div>

          <div className="">
            <div className="mb-9 text-[1.375rem] font-[700] text-gray-400">
              Ứng dụng
            </div>
            <div className="mb-10 text-[1.0625rem]">
              <div className="mb-4 flex cursor-pointer items-center text-gray-400 hover:text-gray-300 hover:underline">
                <AppStoreFillSvg className="h-6 w-6" />
                <a
                  href="https://imaxhitech.com/nen-tang-imaxtek-iot-platform/"
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
                  href="https://imaxhitech.com/nen-tang-imaxtek-iot-platform/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2.5"
                >
                  Yoolife (Android)
                </a>
              </div>
            </div>

            <div className="mb-6 whitespace-nowrap text-[1.25rem] font-[600] text-gray-400">
              Kết nối với YooTek
            </div>
            <div className="flex flex-nowrap gap-6 text-gray-400">
              <a
                href="https://imaxhitech.com/nen-tang-imaxtek-iot-platform/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-center hover:text-blue-600"
              >
                <FbFillSvg className="h-10 w-10" />
              </a>
              <a
                href="https://imaxhitech.com/nen-tang-imaxtek-iot-platform/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-center hover:text-gray-400"
              >
                <TiktokFillSvg className="h-10 w-10" />
              </a>
              <a
                href="https://imaxhitech.com/nen-tang-imaxtek-iot-platform/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-center hover:text-blue-300"
              >
                <TwitterFillSvg className="h-11 w-11" />
              </a>
            </div>
          </div>

          <div className="">
            <Image
              src="/online-gov-vn.png"
              alt=""
              width={220}
              height={0}
              quality={100}
              className="mx-auto flex-shrink-0 opacity-70"
            />
          </div>
        </div>

        <div className="flex items-center justify-center py-8 text-center text-[1.25rem] text-gray-400 xl:pb-[44px] xl:pt-[56px]">
          Copyright © {new Date().getFullYear()} YooTek Holdings. All Right
          Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
