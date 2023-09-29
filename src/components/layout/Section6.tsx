import { NImage as Image } from 'src/components/next/Image';
import ImageModal from '../items/ImageModal';

function Section6() {
  return (
    <section className="mx-auto min-h-screen">
      <div className="relative -z-10 -mt-[30%]">
        <Image
          width={1920}
          height={0}
          src="/section-6-top.png"
          alt="section-6-top"
          quality={100}
          priority
        />
      </div>

      <div className="-mt-[34%] text-center">
        <h3 className="section-6-heading overflow-hidden whitespace-nowrap font-sans text-[16.3vw] font-[700] tracking-normal text-gray-50/20">
          Sm<span className="font-mono">a</span>rt City
        </h3>
        <div className="mx-auto max-w-[1280px] px-12">
          <p className="text-justify text-[1.25rem] font-[300] leading-[2] text-gray-50">
            Công nghệ số ngày càng phát triển, nhu cầu kết nối không chỉ dừng
            lại ở thiết bị – thiết bị, thiết bị – con người mà nó còn lan rộng
            nhằm kết nối cư dân – cư dân, cư dân – ban quản trị, cư dân trong
            các tòa nhà thông minh, khu đô thị thông minh. Người dân dần trở
            thành trung tâm trong các hoạt động số hóa. Chung tay xây dựng cộng
            đồng số – cộng đồng thông minh, kiến tạo xã hội thông minh là một
            trong các kim chỉ nam của Yoolife.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1280px] px-12">
        <Image
          src="/section-6-city.png"
          alt=""
          width={1280}
          height={0}
          quality={100}
          priority
          className="mx-auto"
        />
      </div>

      <div className="mx-auto mt-10 max-w-[1280px]">
        <div className="mb-8 px-12 text-[1.875rem] font-[600] text-gray-50">
          Smart Community ( Cộng đồng cư dân thông minh)
        </div>
        <div className="max-w-full overflow-x-auto px-12 scrollbar-thin">
          <div className="flex min-w-fit justify-between gap-2.5">
            {[
              {
                title: 'Kết Nối thông minh',
                children: [
                  'Thông báo số',
                  'Khảo sát số',
                  'Phản ánh số',
                  'Diễn đàn cư dân',
                  'Hội nhóm cư dân',
                ],
              },
              {
                title: 'Tiện ích thông minh',
                children: [
                  'Bản đồ tiện ích nội khu',
                  'Thanh toán online',
                  'Check in online',
                  'Nhắc nhở sự kiện',
                  'Tủ đồ thông minh',
                  'Mua sắm trực tuyến',
                  'Nhắc lịch - Trợ lý ảo',
                  'Dịch vụ hành chính số',
                  'Danh sách hotline nội bộ',
                ],
              },
              {
                title: 'Quản trị thông minh',
                children: [
                  'Giám sát tiêu thụ điện',
                  'Giám sát tiêu thụ nước',
                  'Cài đặt định mức tiêu thụ',
                ],
              },
              {
                title: 'Thanh toán thông minh',
                children: [
                  'Thanh toán hóa đơn điện',
                  'Thanh toán hóa đơn nước',
                  'Thanh toán phí dịch vụ',
                  'Thanh toán biểu phí',
                ],
              },
              {
                title: 'Cư dân thông minh',
                children: [
                  'Xây dựng tệp khách hàng trung thành',
                  'ID cư dân, Smart Resident',
                ],
              },
            ].map((item, index) => (
              <div
                key={item.title + index}
                className="min-w-[222px] max-w-[228px] flex-[1_1_auto] flex-shrink-0 rounded-2xl border border-gray-50 px-2.5 py-6 text-gray-50"
              >
                <div className="mb-2.5 whitespace-nowrap text-[1.0625rem] font-[600]">
                  {item.title}
                </div>
                <div className="flex max-w-full flex-col gap-1">
                  {item.children.map((c, ind) => (
                    <div
                      key={c + ind}
                      className="flex flex-nowrap items-baseline"
                    >
                      <span className="mr-2">•</span>
                      <p className="whitespace-pre-wrap break-words font-[300] leading-tight">
                        {c}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mb-10 w-full px-4">
          <Image
            src="/section-6-sc.png"
            alt="/section-6-sc.png"
            width={1200}
            height={0}
            quality={100}
            priority
            className="object-cover"
          />
          {/* 1184px 1043.82px 521.91 */}
          <div className="absolute left-4 top-[calc(100%*311.91/1043.82)] text-[1.75vw] font-[600] text-green3">
            Giao tiếp thông minh
          </div>
          <div className="absolute left-4 top-[calc(100%*843.91/1043.82)] text-[1.75vw] font-[600] text-green3">
            Booking Khu Vui chơi
          </div>
          <div className="absolute right-6 top-[calc(100%*479.91/1043.82)] text-[1.75vw] font-[600] text-green3">
            Cộng đồng <br /> thông minh
          </div>
          <div className="absolute right-[calc(100%*100/1184)] top-[calc(100%*873.91/1043.82)] text-[1.75vw] font-[600] text-green3">
            An ninh thông minh
          </div>
          <ImageModal
            classNameBtn="absolute right-12 top-12 p-1.5 rounded xl:hidden"
            classNameDialog="bg-bg/50"
            content={
              <div className="max-w-full overflow-x-auto px-2 py-2 scrollbar-thin">
                <div className="relative mx-auto w-[860px] flex-shrink-0 xl:w-[1190px]">
                  <Image
                    src="/section-6-sc.png"
                    alt="/section-6-sc.png"
                    width={1200}
                    height={0}
                    quality={100}
                    priority
                    className="object-cover"
                  />
                  {/* 1184px 1043.82px 521.91 */}
                  <div className="absolute left-4 top-[calc(100%*311.91/1043.82)] text-[1.25rem] font-[600] text-green3">
                    Giao tiếp thông minh
                  </div>
                  <div className="absolute left-4 top-[calc(100%*843.91/1043.82)] text-[1.25rem] font-[600] text-green3">
                    Booking Khu Vui chơi
                  </div>
                  <div className="absolute right-6 top-[calc(100%*479.91/1043.82)] text-[1.25rem] font-[600] text-green3">
                    Cộng đồng <br /> thông minh
                  </div>
                  <div className="absolute right-[calc(100%*100/1184)] top-[calc(100%*873.91/1043.82)] text-[1.25rem] font-[600] text-green3">
                    An ninh thông minh
                  </div>
                </div>
              </div>
            }
          />
        </div>

        <div className="mx-auto max-w-[1280px] px-12">
          <div className="min-h-12 flex items-center justify-center rounded-full border border-green3 px-6 py-3 text-center align-bottom text-[1.5rem] font-[600] leading-[1.4] text-green3">
            Yoolife nhà kiến tạo Cộng đồng thông minh - Xã hội Văn minh
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section6;
