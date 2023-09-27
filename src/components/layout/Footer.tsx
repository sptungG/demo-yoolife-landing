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
      <Image src="/footer-bg.png" alt="" fill className="-z-10" />
      <div className="from-bg via-bg/50 to-bg/20 absolute -left-1 -right-1 -top-2 -z-10 h-[100%] bg-gradient-to-b from-5% via-90% to-100% blur-sm"></div>

      <div className="mx-auto mb-14 mt-auto max-w-[1280px] -translate-y-[32px] px-12">
        <h3 className="mb-[18px] text-center text-[45px] font-[700] leading-[65px] text-gray-50">
          Liên hệ với chúng tôi
        </h3>
        <p className="mb-11 text-center text-[30px] font-[300] text-gray-50">
          Tham gia ngay bây giờ để ưu đãi đặc biệt và được tư vấn một cách tốt
          nhất!
        </p>
        <form className="flex w-full justify-center gap-6 px-12">
          <input
            type="email"
            defaultValue=""
            className="focus:ring-green2 h-12 flex-auto rounded-full bg-gray-300/10 px-6 text-gray-50 outline-none backdrop-blur-sm placeholder:text-[20px] hover:ring-1 focus:ring-1"
            placeholder="Nhập Email của bạn..."
          />
          <button className="bg-gradient-building h-12 rounded-full px-12 text-[20px] font-[500] text-gray-900">
            Gửi Email
          </button>
        </form>
      </div>
      <div className="mx-auto max-w-[1280px] px-12">
        <div className="mb-4">
          <div className="inline-flex flex-nowrap items-end">
            <YooLogoSvg className="h-[76px] w-[76px]" />
            <div className="flex flex-nowrap items-baseline">
              <span className="flex items-center justify-center">
                <YooSvg height={33} />
              </span>
              <span className="logo-text-gradient-green ml-0 text-[36px] font-[700]">
                life
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="">
            <div className="mb-9 text-[22px] font-[700] text-gray-400">
              Công ty Cổ phẩn YooTek Holdings
            </div>
            <div className="mb-5 text-[22px] font-[600] text-gray-400">
              Liên hệ với chúng tôi
            </div>
            <div className="mb-4 flex cursor-pointer items-center text-gray-400 hover:text-gray-300 hover:underline">
              <EmailOutlinedSvg className="h-[18px] w-[18px]" />
              <a href="mailto:info@imaxhitech.com" className="ml-2.5">
                <b>Email:</b> info@imaxhitech.com
              </a>
            </div>
            <div className="mb-4 flex cursor-pointer items-center text-gray-400 hover:text-gray-300 hover:underline">
              <PhoneOutlinedSvg className="h-[18px] w-[18px]" />
              <a href="tel:+842473011968" className="ml-2.5">
                <b>Số điện thoại:</b> +84 24 7301 1968
              </a>
            </div>
            <div className="mb-4 flex items-center text-gray-400">
              <MapOutlinedSvg className="h-[18px] w-[18px]" />
              <div className="ml-2.5 font-[700]">Văn phòng:</div>
            </div>
            <div className="flex flex-col gap-6">
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
            <div className="mb-9 text-[22px] font-[700] text-gray-400">
              Ứng dụng
            </div>
            <div className="mb-10">
              <div className="mb-4 flex cursor-pointer items-center text-gray-400 hover:text-gray-300 hover:underline">
                <AppStoreFillSvg className="h-6 w-6" />
                <a
                  href="http://"
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
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2.5"
                >
                  Yoolife (Android)
                </a>
              </div>
            </div>

            <div className="mb-6 text-[18px] font-[600] text-gray-400">
              Kết nối với YooTek
            </div>
            <div className="flex flex-nowrap gap-6 text-gray-400">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-center hover:text-blue-600"
              >
                <FbFillSvg className="h-8 w-8" />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-center hover:text-gray-400"
              >
                <TiktokFillSvg className="h-8 w-8" />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center justify-center hover:text-blue-300"
              >
                <TwitterFillSvg className="h-9 w-9" />
              </a>
            </div>
          </div>

          <div className="">
            <Image
              src="/online-gov-vn.png"
              alt=""
              width={249}
              height={0}
              quality={100}
              className="opacity-70"
            />
          </div>
        </div>

        <div className="flex items-center justify-center pb-[44px] pt-[56px] text-[20px] text-gray-400">
          Copyright © {new Date().getFullYear()} YooTek Holdings. All Right
          Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
