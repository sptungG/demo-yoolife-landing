import { cn } from 'src/common/utils';
import { RadioSvg, Story02FrameSvg } from '../icons';
import { NImage } from '../next/Image';
import ScrollBar from '../scrollbar/scroll-bar';

type TS03Section02Props = {};

const S03Section02 = ({}: TS03Section02Props) => {
  return (
    <section className="relative mx-auto flex w-full max-w-[1920px] flex-col text-gray-50">
      <div className="absolute left-0 right-0 top-0 h-[88px] -translate-y-full bg-gradient-to-t from-bg backdrop-blur-sm"></div>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col overflow-x-hidden px-3 xl:px-12">
        <div className="mb-10 text-[1.22rem] leading-[1.6]">
          <span className="font-[600] text-green1">
            Cộng đồng tương lai - Smart Community:
          </span>{' '}
          lấy cư dân, người dùng là trung tâm kết nối với dịch vụ, ban quản lý
          trong khu đô thị. Yoolife tạo sự kết nối không giới hạn giữa cư dân -
          dịch vụ - ban quản lý, giúp nâng cao trải nghiệm tiện nghi - thông
          minh cho người dùng, kiến tạo môi trường sống số.
        </div>

        <ScrollBar suppressScrollY className="w-full">
          <div className="flex flex-nowrap gap-10">
            {[
              {
                title: 'CHUYỂN ĐỔI SỐ TOÀN DÂN',
                items: [
                  'Kết nối tiện ích dịch vụ nội khu',
                  'Số hóa công tác hành chính số',
                  'Kết nối với các dịch vụ ngoại khu',
                  'Sở hữu hàng loạt voucher giảm giá',
                  'Kết nối trực tiếp với BQL',
                  'Số hoá căn hộ bằng nền tảng mở Home IoT',
                  'Kết nối với chính quyền địa phương',
                ],
              },
              {
                title: 'Chuyển đổi số ngành bán lẻ, NHÀ CUNG CẤP DỊCH VỤ',
                items: [
                  'Dễ dàng tiếp cận tệp khách hàng trên nền tảng số Yoolife',
                  'Số hóa công tác bán hàng trên đa nền tảng, tối ưu hóa công cụ bán hàng cùng nhiều tính năng hữu ích.',
                  'Nâng cao chất lượng dịch vụ, cung cấp thông tin uy tín tới người dân',
                ],
              },
              {
                title: 'Chuyển đổi số ngành QLVH',
                items: [
                  'Thiết lập chuẩn mặt bằng vận hành',
                  'Số hóa công tác quản lý, vận hành của  đơn vị QLTN',
                  'Số hóa chi tiết nghiệp vụ từng phòng ban',
                  'Quản lý công việc qua báo cáo, thống kê, đánh giá, khen thưởng',
                ],
              },
            ].map((item, index) => (
              <div
                key={index + String(item)}
                className="relative w-[33dvw] min-w-[350px] max-md:min-w-[320px] lg:w-[33%]"
              >
                <Story02FrameSvg className="w-full" />
                <div className="absolute inset-0 flex flex-col pl-[46px] pr-[20px]">
                  <div className="flex min-h-[84px] items-center">
                    <div
                      className={cn(
                        'text-[1.2rem] font-[600] uppercase text-green1',
                        index === 1 && 'pt-3 text-[1.1rem]',
                      )}
                    >
                      {item.title}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pt-4 text-sm">
                    {item.items.map((i) => (
                      <div
                        key={i}
                        className="flex w-full items-center text-gray-50"
                      >
                        <RadioSvg className="h-3 w-3 shrink-0 text-green1" />
                        <div className="ml-2 text-[1.1rem] font-[300] leading-[1.2]">
                          {i}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollBar>

        <div className="mt-10 max-w-full overflow-x-auto px-4 scrollbar-thin">
          <div className="relative mx-auto w-[640px] flex-shrink-0 md:w-[760px] lg:w-[860px] xl:w-[1000px]">
            <NImage
              width={1180}
              height={0}
              src="/v2/story-03-02.png"
              alt="section-7-bottom"
              quality={100}
              priority
              className="-z-10 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default S03Section02;
