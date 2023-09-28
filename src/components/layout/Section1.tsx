import SectionDot1 from 'src/components/items/SectionDot1';
import { NImage as Image } from 'src/components/next/Image';

function Section1() {
  return (
    <section className="mx-auto min-h-screen bg-[url('/bg-section-1.png')] bg-cover bg-no-repeat">
      <div className="relative mx-auto max-w-[1280px] p-12 text-gray-50">
        <div className="text-[5vw] font-[500] xl:text-[3.125rem]">
          Yoolife AIoT Platform
        </div>
        <div className="text-right text-[8vw] font-[700] xl:text-[6.828125rem]">
          Personalization
        </div>

        <h3 className="section-1-heading overflow-hidden whitespace-nowrap font-sans text-[11vw] font-[700] tracking-normal text-gray-50/5 xl:text-[8.625rem]">
          C<span className="font-mono">á</span> nh
          <span className="font-mono">â</span>n hó
          <span className="font-mono">a</span>
        </h3>

        <div className="relative mt-6 flex items-end">
          <div className="z-10 min-w-0 flex-auto text-[1.25rem] xl:mr-6 xl:max-w-[780px]">
            <p className="mb-6 text-justify leading-[3.0625rem]">
              Cá nhân hóa không chỉ là một xu hướng, mà còn là tâm huyết của
              chúng tôi.
            </p>
            <p className="mb-6 text-justify leading-[3.0625rem]">
              Chúng tôi tin rằng mỗi người đều độc đáo, với những ước mơ, nhu
              cầu và sở thích riêng. Đó là lý do tại sao chúng tôi tận tâm mang
              đến cho bạn những trải nghiệm thực sự cá nhân hóa.
            </p>
            <p className="mb-6 text-justify leading-[3.0625rem]">
              Chúng tôi không chỉ cung cấp sản phẩm chất lượng, chúng tôi tạo ra
              những giải pháp đáp ứng đúng những mong muốn của bạn. Với sự kết
              hợp của dữ liệu thông minh và sáng tạo, chúng tôi đưa ra những gợi
              ý tùy chỉnh, từ nội dung thú vị cho đến sản phẩm phù hợp với gu
              thời trang hay nhu cầu cá nhân.
            </p>
          </div>
          <div className="absolute bottom-0 right-0 z-0">
            <Image
              width={380}
              height={512}
              src={'/img-section-1.png'}
              alt="img-section-1"
              className="origin-bottom-right scale-75 opacity-40 backdrop-blur-md lg:scale-100 xl:opacity-100"
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto h-[90vh] max-w-[1280px] px-12 text-gray-50 sm:h-[80vh] lg:h-screen ">
        <div className="relative flex h-full items-end">
          <Image
            width={718}
            height={734}
            src={'/img-section-2.png'}
            alt="img-section-2"
            className="absolute bottom-0 left-0 origin-bottom-left -translate-x-[7.5rem] scale-100 object-cover opacity-40 backdrop-blur-md sm:scale-75 xl:scale-100 xl:opacity-100"
            quality={100}
            priority
          />
          {/* 1184 950  592 */}

          <div className="absolute left-[calc(100%*492/1184)] top-[calc(100%*190/950)] max-sm:-translate-x-[80px]">
            <SectionDot1
              classNameWrapper="h-[6.5625rem] w-[6.5625rem] hover:h-[10rem] hover:w-[10rem]"
              classNameDot="h-[2.5rem] w-[2.5rem]"
              image={
                <Image
                  width={90}
                  height={90}
                  alt={'Nhắc việc'}
                  src={'/section-1-nhac-viec.png'}
                  className="h-[5.625rem] w-[5.625rem] rounded-bl-[42px]"
                />
              }
              text={<span className="mt-1 font-[600]">Nhắc việc</span>}
            />
          </div>

          <div className="absolute left-[calc(100%*752/1184)] top-[calc(100%*297.4/950)] max-sm:-translate-x-[64px] max-sm:translate-y-[40px]">
            <SectionDot1
              classNameWrapper="h-[6.125rem] w-[6.125rem] hover:h-[10rem] hover:w-[10rem]"
              classNameDot="h-[2.3125rem] w-[2.3125rem]"
              image={
                <Image
                  width={90}
                  height={90}
                  alt={'Trợ lí Ảo'}
                  src={'/section-1-tro-li-ao.png'}
                  className="h-[5.625rem] w-[5.625rem]"
                />
              }
              text={<span className="mt-1.5 font-[600]">Trợ lí Ảo</span>}
            />
          </div>

          <div className="absolute right-[calc(100%*190/1184)] top-[calc(100%*178/950)]">
            <SectionDot1
              classNameWrapper="h-[6.5625rem] w-[6.5625rem] hover:h-[10.875rem] hover:w-[10.875rem]"
              classNameDot="h-[2.5rem] w-[2.5rem]"
              image={
                <Image
                  width={90}
                  height={90}
                  alt={'Tra cứu thông tin'}
                  src={'/section-1-tra-cuu.png'}
                  className="h-[5.625rem] w-[5.625rem]"
                />
              }
              text={
                <span className="mt-1.5 whitespace-nowrap font-[600]">
                  Tra cứu thông tin
                </span>
              }
            />
          </div>

          <div className="absolute right-[calc(100%*76/1184)] top-[calc(100%*312/950)] max-sm:-translate-x-[20px] max-sm:translate-y-[30px]">
            <SectionDot1
              classNameWrapper="h-[6.5625rem] w-[6.5625rem] hover:h-[10.875rem] hover:w-[10.875rem]"
              classNameDot="h-[2.5rem] w-[2.5rem]"
              image={
                <Image
                  width={70}
                  height={70}
                  alt={'Tủ đồ thông minh'}
                  src={'/section-1-tu-do.png'}
                  className="h-[4.375rem] w-[4.375rem]"
                />
              }
              text={
                <span className="whitespace-nowrap pb-2 font-[600]">
                  Tủ đồ thông minh
                </span>
              }
            />
          </div>

          <div className="absolute bottom-[calc(100%*366/950)] right-[calc(100%*120/1184)] max-sm:-translate-y-[20px]">
            <SectionDot1
              classNameWrapper="h-[6.5625rem] w-[6.5625rem] hover:h-[10.25rem] hover:w-[10.25rem]"
              classNameDot="h-[2.5rem] w-[2.5rem]"
              image={
                <Image
                  width={80}
                  height={80}
                  alt={'Shopping Online'}
                  src={'/section-1-shopping.png'}
                  className="h-[5rem] w-[5rem]"
                />
              }
              text={
                <span className="whitespace-nowrap pb-2 font-[600]">
                  Shopping Online
                </span>
              }
            />
          </div>

          <div className="absolute bottom-[calc(100%*420/950)] left-[calc(100%*664/1184)] max-sm:-translate-x-[30px]">
            <SectionDot1
              classNameWrapper="h-[6.125rem] w-[6.125rem] hover:h-[10rem] hover:w-[10rem]"
              classNameDot="h-[2.3125rem] w-[2.3125rem]"
              image={
                <Image
                  width={80}
                  height={80}
                  alt={'Theo dõi Điện, Nước'}
                  src={'/section-1-dien-nuoc.png'}
                  className="h-[5rem] w-[5rem]"
                />
              }
              text={
                <span className="whitespace-nowrap text-center font-[600] leading-tight">
                  Theo dõi <br /> Điện, Nước
                </span>
              }
            />
          </div>

          <div className="relative ml-auto pb-12">
            <div className="mb-9 translate-x-8 text-[1.25rem] sm:translate-x-0">
              <p className="leading-[3.0625rem]">
                Yoolife là người trợ lý ảo giúp đỡ bạn trong cuộc sống hàng
                ngày,
              </p>
              <p className="leading-[3.0625rem]">
                mang đến cuộc sống tốt hơn, thông minh hơn, và hạnh phúc hơn!
              </p>
            </div>

            <div className="absolute bottom-12 left-9 h-0.5 w-[200%] -translate-x-4 bg-gray-50 sm:left-0">
              <div className="inset-center-y absolute left-0 h-9 w-9 -translate-x-full rounded-full border border-gray-50 bg-transparent">
                <div className="inset-center absolute h-4 w-4 rounded-full bg-gray-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-0 border-b-2 border-gray-50"></div>
    </section>
  );
}

export default Section1;
