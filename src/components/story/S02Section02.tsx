import { RadioSvg, Story02FrameSvg } from '../icons';
import { NImage } from '../next/Image';
import ScrollBar from '../scrollbar/scroll-bar';

type TS02Section02Props = {};

const S02Section02 = ({}: TS02Section02Props) => {
  return (
    <section className="relative mx-auto flex w-full max-w-[1920px] flex-col text-gray-50">
      <div className="mx-auto mb-[100px] flex w-full max-w-[1280px] flex-col overflow-x-hidden px-3 xl:px-12">
        <div className="flex w-full max-lg:flex-col">
          <div className="flex w-full flex-col text-[1.22rem] leading-[1.6] max-sm:text-justify lg:pt-[60px]">
            <div className="mb-6 first-letter:mr-0 first-letter:text-3xl first-letter:font-[600] lg:max-w-[600px]">
              Công nghệ số ngày càng phát triển, nhu cầu kết nối không chỉ dừng
              lại ở thiết bị – thiết bị, thiết bị – con người mà nó còn lan rộng
              nhằm kết nối cư dân – cư dân, cư dân – ban quản trị, cư dân trong
              các tòa nhà thông minh, khu đô thị thông minh.
            </div>
            <div className="lg:max-w-[600px]">
              Người dân dần trở thành trung tâm trong các hoạt động số hóa.
              Chung tay xây dựng cộng đồng số – cộng đồng thông minh, kiến tạo
              xã hội thông minh là một trong các kim chỉ nam của YooLife.
            </div>
          </div>

          <div className="-ml-[10%] -mt-[15%] w-full lg:-ml-[50%] lg:-mt-[15%]">
            <NImage
              alt=""
              width={800}
              height={0}
              src={'/v2/story-02-01.png'}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center overflow-x-hidden px-3 xl:px-12">
        <div className="mb-8 text-center text-[2rem] font-[600] uppercase">
          Yoolife đô thị tương lai
        </div>
        <div className="mb-10 w-full text-justify text-[1.22rem] leading-[1.6]">
          Đô thị tương lai - Thành phố thông minh là khu đô thị được cung cấp
          đồng bộ hệ sinh thái phần cứng và phần mềm với từng phân khu (hạ tầng
          - thấp tầng - cao tầng) trong cùng một khu đô thị hoặc chuỗi các đô
          thị khác nhau. Với từng phân khu, được trang bị & số hóa thiết bị hạ
          tầng kỹ thuật, giúp người quản lý dễ dàng điều khiển - giám sát - phân
          tích từ phòng điều khiển trung tâm. Đồng thời đo lường - tối ưu năng
          lượng, giảm thiểu chi phí, hướng tới mục tiêu giảm phát thải cacbon
          theo định hướng tới năm 2050 của chính phủ.
        </div>

        <ScrollBar suppressScrollY className="w-full">
          <div className="flex flex-nowrap gap-10">
            {[
              {
                title: 'Hạ tầng thông minh',
                items: [
                  'An ninh thông minh',
                  'Năng lượng thông minh',
                  'Giao thông thông minh',
                  'Chiếu sáng thông minh',
                  'Cấp thoát nước thông minh',
                  'Dịch vụ công thông minh',
                  'Tưới tiêu thông minh',
                  'Quan trắc môi trường',
                ],
              },
              {
                title: 'Tòa nhà thông minh',
                items: [
                  'Chung cư thông minh',
                  'Văn phòng thông minh',
                  'Bệnh viện thông minh',
                  'Trường học thông minh',
                  'Khách sạn thông minh',
                ],
              },
              {
                title: 'Hạ tầng thông minh',
                items: [
                  'Saving & Green Energy',
                  'Decarbonization',
                  'Net-zero building',
                  'Smart community',
                  ' Smart facility & service',
                ],
              },
            ].map((item, index) => (
              <div
                key={index + String(item)}
                className="relative w-[33dvw] min-w-[300px] lg:min-w-[350px] xl:w-[33%]"
              >
                <Story02FrameSvg className="w-full" />
                <div className="absolute inset-0 flex flex-col pl-[46px]">
                  <div className="flex h-[70px] items-center lg:h-[84px]">
                    <div className="whitespace-nowrap text-[1.5rem] font-[600] uppercase text-green1">
                      {item.title}
                    </div>
                  </div>
                  <div className="flex flex-col pt-4 text-sm">
                    {item.items.map((i) => (
                      <div
                        key={i}
                        className="mb-4 flex w-full items-center text-gray-50"
                      >
                        <RadioSvg className="h-3 w-3 shrink-0 text-green1" />
                        <div className="ml-2 text-[1.2rem] font-[300]">{i}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollBar>
      </div>
    </section>
  );
};

export default S02Section02;
