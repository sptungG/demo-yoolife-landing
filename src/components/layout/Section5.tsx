import {
  RadioSvg,
  Section5ArrowRightSvg,
  Section5ArrowSvg,
} from 'src/components/icons';
import CamOutlinedTitle from 'src/components/items/CamOutlinedTitle';
import SectionCard5 from 'src/components/items/SectionCard5';
import { NImage as Image } from 'src/components/next/Image';
import ImageModal from '../items/ImageModal';

function Section5() {
  return (
    <section className="mx-auto min-h-screen">
      <div className="relative mx-auto max-w-[1280px] px-12">
        <div className="mb-16 mt-10 text-center text-[1.5625rem] font-[600] text-gray-50">
          Ứng dụng quản lý thông minh trong hệ thống quản lý tòa nhà
        </div>
        <div className="mb-8 text-[1.375rem] font-[700] text-green2">
          Hệ thống An ninh
        </div>
        <div className="mb-8 text-[1.25rem] font-[700] text-gray-50">
          Di chuyển thông minh
        </div>
        <p className="text-justify text-[1.25rem] font-[300] leading-[2] text-gray-50">
          Di chuyển thông minh là trụ cột của quản lý tòa nhà hiện đại, mang lại
          sự tiện ích và hiệu quả cho cả cư dân và quản lý. Hệ thống này kết hợp
          nhiều công nghệ tiên tiến để tối ưu hóa trải nghiệm tại tòa nhà.
        </p>
        <div className="mt-[42px]">
          {[
            'Hệ thống đỗ xe thông minh (Car Parking)',
            'Lobby Phone thông minh',
            'Nhận diện khuôn mặt (Face ID Detect)',
            'Thang máy thông minh',
          ].map((item, index) => (
            <div className="mb-6 flex items-center text-gray-50" key={item}>
              <RadioSvg className="h-6 w-6" />
              <p className="ml-2 text-[1.25rem] font-[300]">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto -mt-11 mb-10 w-full xl:-mt-[220px]">
        <Image
          width={1920}
          height={0}
          src="/section-5-combined.png"
          alt="section-5-combined"
          className="object-cover"
          quality={100}
          priority
          // className="-translate-y-[200px]"
        />
        <ImageModal
          classNameBtn="absolute right-12 top-0 p-1.5 rounded"
          classNameDialog="bg-bg/50"
          content={
            <div className="relative max-w-full overflow-x-auto scrollbar-thin ">
              <div className="relative mx-auto min-w-[1020px] max-w-[1620px] xl:w-auto">
                <Image
                  width={1920}
                  height={0}
                  src="/section-5-combined.png"
                  alt="section-5-combined"
                  className="object-cover"
                  quality={100}
                  priority
                  // className="-translate-y-[200px]"
                />
              </div>
            </div>
          }
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-12">
        <div className="mb-14 text-[1.375rem] font-[700] text-green2">
          Hệ thống Cảnh báo An Toàn - An Ninh
        </div>
        {[
          {
            title: 'Xâm nhập',
            sub: 'Cảnh báo',
            desc: `Quy trình xử lý thông tin nhanh nhậy khi có sự cố xâm nhập vào hệ
              thống tòa nhà, tất cả các cảnh báo sẽ được đẩy lên ứng dụng và hệ
              thống quản lý. Khắc phục các sự số ảnh hưởng đến Tài sản, An ninh,
              An toàn tòa nhà.`,
            children: [
              {
                imageUrl: '/section-5-1-1.png',
                title: 'Hệ thống An Ninh',
                sub: 'Cảnh báo xâm nhập',
              },
              {
                imageUrl: '/section-5-1-2.png',
                title: 'Ứng dụng Yoolife',
                sub: 'Tiếp nhận thông tin',
              },
              {
                imageUrl: '/section-5-1-3.png',
                title: 'HT Chiếu sáng',
                sub: 'Bật đèn',
              },
              {
                imageUrl: '/section-5-1-4.png',
                title: 'HT Chiếu sáng',
                sub: 'Bật đèn',
              },
              {
                imageUrl: '/section-5-1-5.png',
                title: 'Màn hình giám sát',
                sub: 'Theo dõi',
              },
            ],
          },
          {
            title: 'Hỏa Hoạn',
            sub: 'Cảnh báo',
            desc: `Quy trình xử lý cảnh báo cháy trong hệ thống quản lý tòa nhà (BMS - Building Management System) là một phần quan trọng để đảm bảo an toàn và sự bảo vệ của tòa nhà và người dân trong đó. Yoolife AIoT tự hào là đơn vị hàng đầu trong lĩnh vực quản lý hệ thống quản lý tòa nhà, đảm bảo sự An toàn cho người dân cũng như hệ sinh thái các tòa nhà mà chúng tôi đã quản lý.`,
            children: [
              {
                imageUrl: '/section-5-2-1.png',
                title: 'Hệ thống báo cháy',
                sub: 'Cảnh báo cháy',
              },
              {
                imageUrl: '/section-5-1-2.png',
                title: 'Ứng dụng Yoolife',
                sub: 'Tiếp nhận thông tin',
              },
              {
                imageUrl: '/section-5-2-3.png',
                title: 'Hệ thống An Ninh',
                sub: 'Mở cửa',
              },
              {
                imageUrl: '/section-5-2-4.png',
                title: 'Hệ thống Âm thanh',
                sub: 'Thông báo sự cố',
              },
              {
                imageUrl: '/section-5-2-5.png',
                title: 'HT Điều hòa',
                sub: 'Dừng quạt gió',
              },
            ],
          },
          {
            title: 'Mất Điện',
            sub: 'Cảnh báo',
            desc: `Xử lý cảnh báo mất điện trong hệ thống BMS là quá trình quan trọng nhằm đảm bảo tính ổn định và an toàn cho tòa nhà. Đáp ứng nhanh chóng và khôi phục nguồn điện là yếu tố quyết định để duy trì hoạt động bình thường và đảm bảo sự an toàn của cư dân và tài sản.`,
            children: [
              {
                imageUrl: '/section-5-3-1.png',
                title: 'HT Phân phối điện',
                sub: 'Báo mất điện',
              },
              {
                imageUrl: '/section-5-1-2.png',
                title: 'Ứng dụng Yoolife',
                sub: 'Tiếp nhận thông tin',
              },
              {
                imageUrl: '/section-5-3-3.png',
                title: 'HT Phân phối điện',
                sub: 'Đk tải liên động',
              },
              {
                imageUrl: '/section-5-1-4.png',
                title: 'HT Chiếu sáng',
                sub: 'Bật đèn',
              },
              {
                imageUrl: '/section-5-1-5.png',
                title: 'HT Điều hòa thông gió',
                sub: 'Khởi động lại máy móc',
              },
            ],
          },
        ].map((item, index) => (
          <div className="mb-12" key={index + item.title}>
            <div className="mb-9">
              <CamOutlinedTitle
                sub={item.sub}
                title={item.title}
                classNameWrapper="mb-6"
              />
              <div className="flex max-w-full snap-x snap-mandatory justify-between gap-8 overflow-x-auto scroll-smooth scrollbar-thin">
                {item.children.map((c, ind) => (
                  <SectionCard5
                    key={ind + JSON.stringify(c)}
                    imageUrl={c.imageUrl}
                    title={c.title}
                    sub={c.sub}
                  />
                ))}
              </div>
            </div>
            <p className="text-justify text-[1.25rem] font-[300] leading-[2] text-gray-50">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mx-auto mt-16 max-w-[1280px] px-12">
        <div className="mb-9 text-[1.375rem] font-[700] text-green2">
          Quản trị Năng Lượng
        </div>
        <p className="text-justify text-[1.25rem] font-[300] leading-[2] text-gray-50">
          Quản trị năng lượng trong quản lý tòa nhà là việc tối ưu hóa việc sử
          dụng điện, nước, và hệ thống làm mát. Điều này bao gồm giám sát, đo
          đạc, tối ưu hóa thiết bị, quản lý nhiệt độ, chi phí và sử dụng nguồn
          tái tạo. Mục tiêu là tiết kiệm năng lượng, giảm lãng phí, và tạo môi
          trường sống hiệu quả và bền vững.
        </p>
        <div className="relative mx-auto">
          <div className="relative">
            <Image
              src="/section-5-combined-2.png"
              alt=""
              width={1200}
              height={0}
              quality={100}
              priority
            />
            {/* 1184px 635.414px */}
            <div className="absolute left-0 top-[calc(100%*72/635.414)] lg:hidden">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-50 font-[600]">
                1
              </div>
            </div>
            <div className="absolute right-0 top-[calc(100%*200/635.414)] lg:hidden">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-50 font-[600]">
                2
              </div>
            </div>
            <div className="absolute left-0 top-[calc(100%*404/635.414)] lg:hidden">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-50 font-[600]">
                3
              </div>
            </div>
          </div>

          <div className="static left-0 top-[calc(100%*72/635.414)] mb-6 flex lg:absolute lg:mb-0 lg:max-w-[calc(100%*280/1184)]">
            <div className="mr-2 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center self-baseline rounded-full bg-gray-50 font-[600] lg:hidden">
              1
            </div>
            <p className="text-justify text-[1.1875rem] font-[300] leading-[1.5] text-gray-50">
              Giám sát 24/7 định mức tiêu thụ + Cảnh báo Ai khi vượt ngưỡng tiêu
              thụ.
            </p>
          </div>
          <div className="static right-0 top-[calc(100%*150/635.414)] mb-6 flex lg:absolute lg:mb-0 lg:max-w-[calc(100%*300/1184)]">
            <div className="mr-2 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center self-baseline rounded-full bg-gray-50 font-[600] lg:hidden">
              2
            </div>
            <p className="text-justify text-[1.1875rem] font-[300] leading-[1.5] text-gray-50">
              Tối ưu chi phí tiêu thụ Điện, nước hàng tháng dựa trên báo cáo
              thống kê hàng tháng.
            </p>
          </div>
          <div className="static left-0 top-[calc(100%*400/635.414)] mb-6 flex lg:absolute lg:mb-0 lg:max-w-[calc(100%*200/1184)]">
            <div className="mr-2 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center self-baseline rounded-full bg-gray-50 font-[600] lg:hidden">
              3
            </div>
            <p className="text-justify text-[1.1875rem] font-[300] leading-[1.5] text-gray-50">
              Thống kê chi tiết chỉ số Điện năng, Chi phí hóa đơn, Cài đặt định
              mức.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-[1280px] px-12">
        <div className="mb-9 text-[1.375rem] font-[700] text-green2">
          Tự động hóa
        </div>
        <p className="text-justify text-[1.25rem] font-[300] leading-[2] text-gray-50">
          Tự động hóa đóng vai trò quan trọng trong quản lý tòa nhà, mang lại sự
          tiện ích, hiệu quả và an toàn. Bằng cách áp dụng các hệ thống tự động
          hóa, quản lý tòa nhà có khả năng tự động điều chỉnh và kiểm soát các
          hoạt động hàng ngày như hệ thống điện, nước, chiếu sáng, và làm mát.
        </p>
        <p className="mt-6 text-justify text-[1.25rem] font-[300] leading-[2] text-gray-50">
          Các lợi ích của tự động hóa trong quản lý tòa nhà bao gồm:
        </p>
        <div className="relative mt-8 flex flex-col flex-wrap lg:flex-row">
          {[
            'Tiết kiệm năng lượng và chi phí',
            'Tăng cường an ninh và an toàn',
            'Tăng hiệu quả và đáp ứng nhanh chóng',
            'Theo dõi và báo cáo',
            'Tối ưu hóa quản lý thời gian',
          ].map((item, index) => (
            <div
              className="mb-6 flex items-center text-gray-50 lg:w-[50%]"
              key={item}
            >
              <RadioSvg className="h-6 w-6" />
              <p className="ml-2 text-[1.25rem] font-[300]">{item}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-12">
          <div className="flex max-w-full snap-x snap-mandatory justify-between gap-8 overflow-x-auto scroll-smooth scrollbar-thin">
            {[
              {
                imageUrl: '/section-5-keangnam.png',
                title: 'Dự án Keangnam',
              },
              {
                imageUrl: '/section-5-sapphire.png',
                title: 'The Sapphire Residence Hạ Long',
              },
              {
                imageUrl: '/section-4-lotte.png',
                title: 'Lotte Mall Tây Hồ',
              },
            ].map((item, index) => (
              <div
                key={JSON.stringify(item) + index}
                className="w-[23.3rem] flex-shrink-0 snap-center snap-always"
              >
                <div className="mb-4 text-center text-[1.25rem] font-[600] leading-none text-gray-50">
                  Dự án {index + 1}
                </div>
                <div className="mb-6 text-center text-[1.375rem] font-[300] leading-none text-gray-50">
                  {item.title}
                </div>
                <div className="relative h-[14rem] flex-shrink-0 rounded-2xl border border-gray-50 p-4">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={item.imageUrl}
                      alt=""
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="z-0 -mb-16 hidden justify-center lg:flex">
            <Section5ArrowRightSvg className="z-0 h-[100%] w-[calc(100%*320/1240)] flex-shrink-0 -scale-x-100" />
            <Section5ArrowSvg className="z-0 mx-[100px] h-[100%] max-h-[135px] w-[calc(100%*12/1240)] flex-shrink-0" />
            <Section5ArrowRightSvg className="z-0 h-[100%] w-[calc(100%*320/1240)] flex-shrink-0" />
          </div>
          <Image
            width={1240}
            height={0}
            src="/section-5-monitors.png"
            alt="section-5-monitors"
            quality={100}
            priority
            className="-z-10"
          />
        </div>

        <div className="mt-12">
          {[
            {
              label: 'Tiết kiệm năng lượng và chi phí',
              desc: 'Hệ thống tự động hóa có thể tối ưu hóa việc sử dụng năng lượng bằng cách điều chỉnh thiết bị để hoạt động ở mức hiệu suất tốt nhất. Ví dụ, hệ thống có thể tự động tắt đèn khi không có người trong phòng hoặc điều chỉnh nhiệt độ để tiết kiệm năng lượng làm mát.',
            },
            {
              label: 'Tăng hiệu quả và đáp ứng nhanh chóng',
              desc: 'Tự động hóa cho phép hệ thống phản ứng nhanh chóng đối với thay đổi và yêu cầu. Hệ thống có thể tự động cảnh báo khi có sự cố xảy ra và thậm chí thực hiện các biện pháp sửa chữa cơ bản mà không cần can thiệp của con người.',
            },
            {
              label: 'Tối ưu hóa quản lý thời gian',
              desc: 'Tự động hóa giúp lập kế hoạch và thực hiện các hoạt động hàng ngày một cách chính xác và đồng nhất. Ví dụ, hệ thống tự động có thể thiết lập thời gian bật/tắt đèn, quản lý thời gian làm mát cho các khu vực cụ thể, từ đó giúp tiết kiệm thời gian của nhân viên quản lý.',
            },
            {
              label: 'Tăng cường an ninh và an toàn',
              desc: 'Tự động hóa cung cấp khả năng theo dõi và kiểm soát an ninh tòa nhà. Hệ thống có thể tự động mở/cấm truy cập tới các khu vực nhất định, đảm bảo rằng chỉ có những người được ủy quyền mới có thể tiếp cận.',
            },
            {
              label: 'Theo dõi và báo cáo',
              desc: 'Hệ thống tự động hóa có khả năng thu thập dữ liệu và tạo báo cáo về tiêu thụ năng lượng, hoạt động hệ thống, và sự cố. Điều này giúp quản lý hiểu rõ hơn về hoạt động của tòa nhà và đưa ra quyết định dựa trên dữ liệu thống kê.',
            },
          ].map((item, index) => (
            <div
              key={item.label + index}
              className="mb-8 flex flex-nowrap text-gray-50"
            >
              <RadioSvg className="mt-2 h-6 w-6 flex-shrink-0" />
              <p className="ml-2 text-justify text-[1.25rem] font-[300] leading-[2]">
                <b className="whitespace-nowrap">{item.label}</b>
                {`: `}
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section5;
