import { LogoSvg, LogoTextSvg, RadioSvg } from '../icons';
import TextGenerateEffect from '../items/TextGenerateEffect';
import { NImage } from '../next/Image';

type TS01Section02Props = {};

const S01Section02 = ({}: TS01Section02Props) => {
  return (
    <section className="relative mx-auto flex w-full max-w-[1920px] flex-col pt-[80px] text-gray-50">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col overflow-x-hidden px-3 xl:px-12">
        <div className="mb-8 text-[2rem] font-[600]">
          NỀN TẢNG SỐ MỞ YOOLIFE AIOT PLATFORM
        </div>

        <TextGenerateEffect
          classNameWrapper="mb-8"
          className="text-[1.22rem]"
          words="Nhà thông minh Home IoT, không đơn thuần chỉ là một căn hộ thông minh
          thuần túy, chúng tôi cung cấp đồng bộ và tích hợp trên nền tảng số mở,
          hỗ trợ nhiều giao thức kết nối khác nhau, tích hợp đa dạng thiết bị
          của nhiều hãng khác nhau trên thế giới, giúp người dùng dễ dàng điều
          khiển các thiết bị từ xa all - in -one chỉ trên một ứng dụng, nâng tầm
          trải nghiệm trong không gian sống hiện đại - tiện nghi."
        />

        <div className="mb-8 flex min-h-[80px] w-full flex-wrap justify-center rounded-3xl border border-gray-300 bg-gradient-to-t from-gray-300/10 px-6 pb-2 pt-6 xl:px-12">
          {[
            'Nền tảng số mở Home IoT',
            'Nâng cấp căn hộ theo nhiều gói Homekits',
            'Đa dạng giao thức kết nối: có dây & không dây',
          ].map((item, index) => (
            <div
              className="mb-4 flex w-full items-center text-gray-50 sm:w-[50%] xl:w-[48%]"
              key={item}
            >
              <RadioSvg className="h-6 w-6" />
              <div className="ml-2 text-[1.2rem] font-[300]">{item}</div>
            </div>
          ))}
          {[
            'Ai hóa cá nhân, xây dựng quản gia ảo, trợ lý ảo',
            'Plug & Play dễ dàng tự lắp đặt và sử dụng',
            'Mang lại không gian sống Xanh - Sạch - Sang',
          ].map((item, index) => (
            <div
              className="mb-4 flex w-full items-center text-gray-50 sm:w-[50%] xl:w-[48%]"
              key={item}
            >
              <RadioSvg className="h-6 w-6" />
              <div className="ml-2 text-[1.2rem] font-[300]">{item}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-0 rounded bg-black px-6 pb-6 pt-6 max-sm:flex-col xl:w-full xl:justify-center xl:px-12">
          <div className="flex shrink-0 flex-col sm:w-1/2">
            <div className="mb-4 flex flex-nowrap items-center rounded sm:mb-6">
              <LogoSvg className="h-[32px] sm:h-[52px] xl:h-[64px]" />
              <LogoTextSvg className="h-[24px] sm:h-[40px] xl:h-[48px]" />
            </div>

            <div className="flex w-full shrink-0 gap-6">
              <div className="flex w-1/2 max-w-[180px] shrink-0 flex-col gap-4">
                <NImage
                  alt=""
                  height={180}
                  width={180}
                  src={'/v2/story-01-01.png'}
                  className="h-auto w-full max-w-[180px] object-contain"
                />
                <NImage
                  alt=""
                  height={160}
                  width={160}
                  src={'/v2/story-01-02.png'}
                  className="h-auto w-full max-w-[140px] object-contain"
                />
              </div>
              <div className="w-1/2 max-w-[236px] shrink-0">
                <NImage
                  alt=""
                  height={0}
                  width={216}
                  src={'/v2/story-01-03.png'}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="shrink-0 sm:ml-auto sm:w-1/2">
            <NImage
              alt=""
              height={480}
              width={480}
              src={'/v2/story-01-04.png'}
              className="h-full w-full rounded object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default S01Section02;
