import { NImage as Image } from 'src/components/next/Image';

function Section4() {
  return (
    <section className="mx-auto min-h-screen">
      <div className="relative">
        <Image
          width={1920}
          height={1432}
          src="/section-4-top.png"
          alt="section-4-top"
          quality={100}
          priority
          className="opacity-40 xl:opacity-100"
        />
        <Image
          width={539}
          height={0}
          src="/section-4-top-1.png"
          alt="section-4-top-1"
          className="absolute bottom-[50%] left-0 w-[45%] opacity-40 xl:bottom-[38%] xl:w-[539px] xl:opacity-100"
          quality={50}
        />
        <Image
          width={1920}
          height={1582}
          src="/section-4-top-bg.png"
          alt="section-4-top-bg"
          className="absolute left-0 top-0 -z-10 object-cover"
          quality={1}
        />

        <div className="absolute left-[16px] top-[100px] flex flex-col items-end">
          <h3 className="text-shadow-white text-[16vw] font-[700] leading-[1] text-bg sm:text-[15vw] min-[888px]:text-[11.075rem]">
            Smart
          </h3>
          <h3 className="-mt-2 bg-gradient-building bg-clip-text text-[18.5vw] font-[700] leading-[1.2] text-transparent sm:text-[17.5vw] min-[888px]:-mt-12 min-[888px]:text-[12.5rem]">
            Building
          </h3>
        </div>

        <div className="absolute -bottom-2 -left-1 -right-1 z-10 h-[30%] bg-gradient-to-t from-bg blur-sm"></div>
      </div>

      <div className="relative">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center px-12 py-6 xl:flex-row xl:items-stretch">
          <div className="min-w-0 flex-[1_1_auto] text-gray-100 xl:mr-[26px]">
            <p className="mb-[64px] text-justify text-[1.25rem] font-[300] leading-[2]">
              Là một người đồng hành đáng tin cậy trong việc tạo nên tương lai
              thông minh cho các tòa nhà hiện đại. Chúng tôi tự hào là một trong
              những nhà cung cấp hàng đầu về các giải pháp dành cho Smart
              Building, cam kết mang đến sự tiện nghi, hiệu quả và an toàn cho
              không gian sống và làm việc.
            </p>
            <p className="mb-[64px] text-justify text-[1.25rem] font-[300] leading-[2]">
              Với một danh mục đa dạng bao gồm hệ thống Quản lý Toàn diện (BMS),
              hệ thống Thông tin Tòa nhà (iBS), Hệ thống Ánh sáng thông minh, hệ
              thống Báo cháy tiên tiến và giải pháp hệ thống Điện thông minh,
              chúng tôi đã xây dựng nên một hệ sinh thái hoàn chỉnh để đáp ứng
              mọi nhu cầu của khách hàng trong việc tối ưu hóa quản lý tòa nhà
              và nâng cao trải nghiệm người dùng.
            </p>
            <p className="text-justify text-[1.25rem] font-[300] leading-[2]">
              Với sự kết hợp của công nghệ tiên tiến và sự am hiểu sâu sắc về
              yêu cầu của thị trường, chúng tôi luôn đi đầu trong việc phát
              triển các giải pháp thông minh và bền vững, đáp ứng mọi thách thức
              từ việc quản lý năng lượng đến an ninh và an toàn. Chúng tôi cam
              kết cùng bạn xây dựng những không gian sống và làm việc thông
              minh, tiết kiệm và thân thiện với môi trường.
            </p>
          </div>
          <div className="mt-6 min-w-0 xl:mt-0 xl:flex-[0_0_480px]">
            <Image
              width={480}
              height={376}
              src="/section-4-lotte.png"
              alt="section-4-lotte"
              className="mb-1 rounded-tl-[125px]"
            />
            <p className="mb-1 text-center text-base text-gray-100">
              Lotte Mall Westlake, Võ Chí Công – Tây Hồ
            </p>
            <Image
              width={480}
              height={376}
              src="/section-4-lotte-2.png"
              alt="section-4-lotte-2"
              className="rounded-br-[125px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
