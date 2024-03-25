import { RadioSvg, Story04LineSvg } from '../icons';
import { NImage } from '../next/Image';

type TS04Section02Props = {};

const S04Section02 = ({}: TS04Section02Props) => {
  return (
    <section className="relative mx-auto -mt-[88px] flex w-full max-w-[1920px] flex-col text-gray-50">
      <div className="absolute left-0 right-0 top-0 hidden h-[88px] -translate-y-full bg-gradient-to-t from-bg backdrop-blur-sm xl:block"></div>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col overflow-x-hidden px-3 pt-[100px] xl:px-12 xl:pt-[160px]">
        <div className="mb-10 flex w-full items-center gap-y-6 max-lg:flex-col">
          <div className="min-w-0 flex-[1_1_auto]">
            <NImage
              src={'/v2/story-04-02.png'}
              alt=""
              width={680}
              height={0}
              quality={100}
              className="max-lg:w-[560px]"
            />
          </div>

          <div className="grid shrink-0 grid-cols-6 grid-rows-1 gap-4 lg:grid-cols-2 lg:grid-rows-3">
            <NImage
              src={'/v2/story-04-03.png'}
              alt=""
              width={160}
              height={0}
              className="max-lg:w-[140px]"
            />
            <NImage
              src={'/v2/story-04-04.png'}
              alt=""
              width={160}
              height={0}
              className="max-lg:w-[140px]"
            />
            <NImage
              src={'/v2/story-04-05.png'}
              alt=""
              width={160}
              height={0}
              className="max-lg:w-[140px]"
            />
            <NImage
              src={'/v2/story-04-06.png'}
              alt=""
              width={160}
              height={0}
              className="max-lg:w-[140px]"
            />
            <NImage
              src={'/v2/story-04-07.png'}
              alt=""
              width={160}
              height={0}
              className="max-lg:w-[140px]"
            />
            <NImage
              src={'/v2/story-04-08.png'}
              alt=""
              width={160}
              height={0}
              className="max-lg:w-[140px]"
            />
          </div>
        </div>

        <div className="mb-20 rounded-2xl border border-green1 p-4">
          <div className="rounded-xl bg-gray-100/10 p-4 text-[1.22rem]">
            Thông tin lịch sử từ quá trình nuôi trồng, chăm bón, ... đều được
            cửa hàng chia sẻ tới khách hàng một cách dễ dàng để đảm bảo nguồn
            gốc thực phẩm và chất lượng thực phẩm. Lưu trữ điện tử và dễ dàng
            minh bạch các thông tin như giảm thải carbon CO2, CH4, xây dựng
            trang trại xanh - phát triển bền vững, dễ dàng xuất khẩu tới các thị
            trường yêu cầu cung cấp chứng chỉ Carbon như US, EU, Nhật ...
          </div>
        </div>

        <div className="flex max-md:flex-col">
          <div className="flex flex-col gap-8">
            {[
              {
                title: 'Phát hiện dị thường cho cây trồng',
                items: [
                  'Hệ thống phần mềm số hóa quy trình sản xuất trang trại',
                  'Hệ thống IoT giám sát nông nghiệp thông minh',
                  'Live video & hình ảnh quá trình nuôi trồng được truyền tải trực tiếp tới người dân trên app Yoolife',
                ],
              },
              {
                title: 'IOT Sensors - Thiết Bị cảm biến',
                items: [
                  'Hệ thống châm phân dinh dưỡng tự động',
                  'Hệ thống điều khiển vi khí hậu nhà màng',
                  'Hệ thống giám sát nông nghiệp thông minh',
                  'Hệ thống dự báo thời tiết theo thời gian thực',
                ],
              },
            ].map((item, index) => (
              <div key={index + String(item)} className="flex flex-col">
                <div className="relative">
                  <Story04LineSvg className="h-[36px] lg:h-[40px]" />
                  <div className="absolute left-[44px] top-[4px] font-[600] uppercase text-green1">
                    {item.title}
                  </div>
                </div>

                <div className="flex max-w-[560px] flex-col pt-4 text-sm">
                  {item.items.map((i) => (
                    <div
                      key={i}
                      className="mb-3.5 flex w-full items-center text-gray-50"
                    >
                      <RadioSvg className="h-3 w-3 shrink-0 text-green1" />
                      <div className="ml-2 text-[1.1rem] font-[300] leading-[1.4]">
                        {i}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-lg:mx-auto lg:ml-auto">
            <NImage
              alt=""
              src={'/v2/story-04-09.png'}
              width={500}
              height={0}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default S04Section02;
