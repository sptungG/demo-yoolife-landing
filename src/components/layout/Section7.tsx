import { NImage as Image } from 'src/components/next/Image';

function Section7() {
  return (
    <section className="mx-auto mt-[100px] min-h-screen">
      <div className="z-0 mx-auto max-w-[1280px] px-12">
        <h3 className="section-7-heading overflow-hidden whitespace-nowrap text-center font-sans text-[14vw] font-[700] tracking-normal text-gray-50">
          Sm<span className="font-mono">a</span>rt Soci
          <span className="font-mono">a</span>l
        </h3>
      </div>
      <div className="relative -z-10 -mt-[18%]">
        <Image
          width={1920}
          height={0}
          src="/section-7-top.png"
          alt="section-7-top"
          quality={100}
          priority
          className="-z-10"
        />
      </div>
      <div className="mx-auto mt-10 max-w-[1280px]">
        <p className="mb-10 px-12 text-justify text-[1.25rem] font-[300] leading-[2] text-gray-50">
          Chúng tôi định nghĩa mô hình xã hội thông minh dựa trên 3 trụ cột
          chính gồm: Kinh tế số – Xã hội số – Cuộc sống số. Ý thức sâu sắc về xu
          hướng chuyển đổi số đang lan rộng trong mọi mặt đời sống, quan sát
          những thay đổi nhanh chóng cuộc sống của người dân trong kỷ nguyên
          IOT, Yoolife tiên phong dẫn lối xây dựng cuộc sống thông minh lấy con
          người làm trung tâm và theo đuổi triết lý thiết kế số hóa nhu cầu theo
          các cấp độ từ cá nhân – gia đình – cộng đồng – xã hội.
        </p>
        <div className="mb-10 max-w-full overflow-x-auto px-4 scrollbar-thin">
          <div className="relative mx-auto w-[640px] flex-shrink-0 sm:w-[880px] xl:w-[1100px]">
            <Image
              width={1280}
              height={0}
              src="/section-7-main.png"
              alt="section-7-main"
              quality={100}
              priority
              className="-z-10 object-cover"
            />
          </div>
        </div>
        <p className="px-12 text-justify text-[1.25rem] font-[300] leading-[2] text-gray-50">
          Xã hội thông minh – Smart Social, xét theo nghĩa hẹp, là một xã hội
          ứng dụng Tự động hóa, CNTT nhằm số hóa các trụ cột như kinh tế số, xã
          hội số và cuộc sống số. Mô hình Smart Social cho phép kết nối con
          người – con người, con người – thiết bị và thiết bị – thiết bị nhằm
          kiện toàn các lĩnh vực như SmartHome, SmartBuilding, SmartCity và
          Smart Social. Lấy con người làm trung tâm, số hóa và kết nối con người
          với hầu hết các dịch vụ tiện ích ngoài xã hội, đồng thời nâng cao hiệu
          quả quản lý, vận hành các cơ sở hạ tầng trọng yếu, tòa nhà, khu đô thị
          nhằm kiến tạo nên không gian sống hoàn hảo, tiện nghi, đẳng cấp, đặt
          nền tảng cho một cuộc sống lý tưởng: “công nghệ – tiện nghi – xanh –
          thông minh”
        </p>
      </div>
      <div className="mb-10 max-w-full overflow-x-auto px-4 scrollbar-thin">
        <div className="relative w-[960px] flex-shrink-0 sm:w-[1260px] xl:w-full">
          <Image
            width={1920}
            height={0}
            src="/section-7-bottom.png"
            alt="section-7-bottom"
            quality={100}
            priority
            className="-z-10 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Section7;
