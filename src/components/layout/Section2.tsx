import { NImage as Image } from 'src/components/next/Image';

function Section2() {
  return (
    <section id="solutions" className="mx-auto min-h-screen">
      <div className="relative flex justify-between pt-[80px]">
        <div className="relative">
          <Image
            width={983}
            height={416}
            src={'/v1/section-2-tl.png'}
            alt="section-2-tl"
            className="-z-10 -scale-x-100 opacity-40 xl:opacity-100"
            quality={100}
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-12">
          <div className="group absolute right-0 top-[24px] h-[calc(60vw*289/647)] w-[60vw] xl:translate-x-[18%]">
            <Image
              width={620}
              height={289}
              src={'/v1/section-2-home-iot-1.png'}
              alt="section-2-home-iot-1"
              className="absolute right-[1px] top-[5px] opacity-100 group-hover:opacity-0 sm:right-[2px] sm:top-[10px] lg:right-[18px] lg:top-[22px]"
              quality={100}
              priority
            />
            <Image
              width={646}
              height={289}
              src={'/v1/section-2-home-iot-2.png'}
              alt="section-2-home-iot-2"
              className="absolute right-0 top-0 opacity-0 group-hover:opacity-100"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-12 py-[48px] text-gray-50">
        <div className="mb-[30px] text-[2.0625rem] font-[700] leading-[2]">
          Yoolife AIoT Platform
        </div>

        <div className="mb-4 text-[1.675rem] font-[600]">Sứ mệnh</div>
        <div className="mb-[30px] text-justify text-[1.375rem] font-[300] leading-[2]">
          Chúng tôi mong muốn mang đến một không gian sống thông minh và hiện
          đại, phù hợp với tất cả mọi người dân Việt Nam.
        </div>

        <div className="mb-4 text-[1.675rem] font-[600]">Tầm nhìn</div>
        <div className="text-justify text-[1.375rem] font-[300] leading-[2]">
          Chúng tôi luôn hướng đến trở thành đơn vị phát triển Nhà ở thông minh
          hàng đầu không chỉ trong nước mà còn trên Thế giới. Chúng tôi luôn
          tiên phong đổi mới, ứng dụng kỹ thuật hiện đại, tích hợp công nghệ
          tiên tiến vào cuộc sống mỗi người dân.
        </div>
      </div>
    </section>
  );
}

export default Section2;
