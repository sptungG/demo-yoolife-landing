import { Inter } from 'next/font/google';
import { useId } from 'react';
import SectionDot1 from 'src/components/items/SectionDot1';
import Header from 'src/components/layout/Header';
import { NImage as Image } from 'src/components/next/Image';
import SEO from 'src/components/seo/SEO';
import colors from 'tailwindcss/colors';
const inter = Inter({ subsets: ['latin'] });

function Page() {
  const uid = useId();

  return (
    <main
      className={`${inter.className} relative mx-auto min-h-screen max-w-[1920px] overflow-x-hidden bg-gray-700`}
    >
      <SEO title="Yoolife" description="Yoolife IoT Platform" />
      <Header />
      <section className="mx-auto min-h-screen bg-[url('/bg-section-1.png')] bg-cover bg-no-repeat">
        <div className="relative mx-auto h-screen max-w-[1280px] p-12 text-gray-50">
          <div className="text-[50px] font-[500]">Yoolife IoT Platform</div>
          <div className="text-right text-[109.25px] font-[700]">
            Personalization
          </div>
          <svg viewBox="0 0 10 1.1" className="h-[119.06px]">
            <defs>
              <linearGradient id="gradient" y1="0" y2="1">
                <stop stopColor={colors.gray[50]} offset="0" />
                <stop stopColor={colors.gray[300]} offset="1" />
              </linearGradient>
            </defs>
            <text
              x="3.3"
              y="1"
              textAnchor="middle"
              fill="none"
              strokeWidth="0.015"
              stroke="url(#gradient)"
              fontSize={1.1}
              fontWeight={700}
            >
              Cá nhân hóa
            </text>
          </svg>

          <div className="relative mt-6 flex items-end">
            <div className="z-10 mr-6 min-w-0 max-w-[780px] flex-[1_1_auto] text-[20px]">
              <p className="text-justify leading-[49px]">
                Cá nhân hóa không chỉ là một xu hướng, mà còn là tâm huyết của
                chúng tôi.
              </p>
              <p className="text-justify leading-[49px]">
                Chúng tôi tin rằng mỗi người đều độc đáo, với những ước mơ, nhu
                cầu và sở thích riêng. Đó là lý do tại sao chúng tôi tận tâm
                mang đến cho bạn những trải nghiệm thực sự cá nhân hóa.
              </p>
              <p className="text-justify leading-[49px]">
                Chúng tôi không chỉ cung cấp sản phẩm chất lượng, chúng tôi tạo
                ra những giải pháp đáp ứng đúng những mong muốn của bạn. Với sự
                kết hợp của dữ liệu thông minh và sáng tạo, chúng tôi đưa ra
                những gợi ý tùy chỉnh, từ nội dung thú vị cho đến sản phẩm phù
                hợp với gu thời trang hay nhu cầu cá nhân.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 z-0">
              <Image
                width={380}
                height={512}
                src={'/img-section-1.png'}
                alt="img-section-1"
                className="opacity-40 xl:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* <div className="w-full border-0 border-b-2 border-gray-50"></div> */}

        <div className="relative mx-auto h-screen max-w-[1280px] px-12 text-gray-50 ">
          <div className="relative flex h-full items-end">
            <Image
              width={718}
              height={734}
              src={'/img-section-2.png'}
              alt="img-section-2"
              className="absolute bottom-0 left-0 -translate-x-[120px] opacity-40 xl:opacity-100"
            />

            <div className="absolute left-[calc(50%-200px)] top-[190px] xl:left-[calc(50%-100px)]">
              <SectionDot1
                classNameWrapper="h-[105px] w-[105px] hover:h-[160px] hover:w-[160px]"
                classNameDot="h-[40px] w-[40px]"
                image={
                  <Image
                    width={90}
                    height={90}
                    alt={'Nhắc việc'}
                    src={'/section-1-nhac-viec.png'}
                    className="rounded-bl-[42px]"
                  />
                }
                text={<span className="mt-1 font-[600]">Nhắc việc</span>}
              />
            </div>

            <div className="absolute left-[calc(50%+24px)] top-[297.4px] lg:left-[calc(50%+100px)] xl:left-[calc(50%+160px)]">
              <SectionDot1
                classNameWrapper="h-[98px] w-[98px] hover:h-[160px] hover:w-[160px]"
                classNameDot="h-[37px] w-[37px]"
                image={
                  <Image
                    width={90}
                    height={90}
                    alt={'Trợ lí Ảo'}
                    src={'/section-1-tro-li-ao.png'}
                  />
                }
                text={<span className="mt-1.5 font-[600]">Trợ lí Ảo</span>}
              />
            </div>

            <div className="absolute right-[190px] top-[144px] xl:top-[178px]">
              <SectionDot1
                classNameWrapper="h-[105px] w-[105px] hover:h-[174px] hover:w-[174px]"
                classNameDot="h-[40px] w-[40px]"
                image={
                  <Image
                    width={90}
                    height={90}
                    alt={'Tra cứu thông tin'}
                    src={'/section-1-tra-cuu.png'}
                  />
                }
                text={
                  <span className="mt-1.5 whitespace-nowrap font-[600]">
                    Tra cứu thông tin
                  </span>
                }
              />
            </div>

            <div className="absolute right-[76px] top-[312px] xl:right-[0px]">
              <SectionDot1
                classNameWrapper="h-[105px] w-[105px] hover:h-[174px] hover:w-[174px]"
                classNameDot="h-[40px] w-[40px]"
                image={
                  <Image
                    width={70}
                    height={70}
                    alt={'Tủ đồ thông minh'}
                    src={'/section-1-tu-do.png'}
                  />
                }
                text={
                  <span className="whitespace-nowrap pb-2 font-[600]">
                    Tủ đồ thông minh
                  </span>
                }
              />
            </div>

            <div className="absolute bottom-[366px] right-[120px]">
              <SectionDot1
                classNameWrapper="h-[105px] w-[105px] hover:h-[164px] hover:w-[164px]"
                classNameDot="h-[40px] w-[40px]"
                image={
                  <Image
                    width={80}
                    height={80}
                    alt={'Shopping Online'}
                    src={'/section-1-shopping.png'}
                  />
                }
                text={
                  <span className="whitespace-nowrap pb-2 font-[600]">
                    Shopping Online
                  </span>
                }
              />
            </div>

            <div className="absolute bottom-[420px] left-[calc(50%-24px)] xl:left-[calc(50%+72px)]">
              <SectionDot1
                classNameWrapper="h-[98px] w-[98px] hover:h-[160px] hover:w-[160px]"
                classNameDot="h-[37px] w-[37px]"
                image={
                  <Image
                    width={80}
                    height={80}
                    alt={'Theo dõi Điện, Nước'}
                    src={'/section-1-dien-nuoc.png'}
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
              <div className="mb-9 text-[20px]">
                <p className="leading-[49px]">
                  Yoolife là người trợ lý ảo giúp đỡ bạn trong cuộc sống hàng
                  ngày,
                </p>
                <p className="leading-[49px]">
                  mang đến cuộc sống tốt hơn, thông minh hơn, và hạnh phúc hơn!
                </p>
              </div>

              <div className="absolute bottom-12 left-0 h-0.5 w-[200%] -translate-x-4 bg-gray-50">
                <div className="insert-center-y absolute left-0 h-9 w-9 -translate-x-full rounded-full border border-gray-50 bg-transparent">
                  <div className="insert-center absolute h-4 w-4 rounded-full bg-gray-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
