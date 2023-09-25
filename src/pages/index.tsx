import { Inter } from 'next/font/google';
import { useId } from 'react';
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

        <div className="relative mx-auto h-screen max-w-[1280px] px-12 text-gray-50">
          <div className="relative flex h-full items-end">
            <Image
              width={718}
              height={734}
              src={'/img-section-2.png'}
              alt="img-section-2"
              className="absolute bottom-0 left-0 -translate-x-[120px] opacity-40 xl:opacity-100"
            />

            <div className="absolute left-[calc(50%-100px)] top-[calc(50%-180px)]">
              <div className="insert-center group absolute flex h-[105px] w-[105px] cursor-pointer flex-col items-center justify-center rounded-full border-[5px] border-gray-50 bg-transparent duration-200 ease-in hover:h-[160px] hover:w-[160px] hover:bg-gray-50/10">
                <div className="insert-center absolute h-[40px] w-[40px] rounded-full bg-gray-50 group-hover:hidden"></div>
                <div className="insert-center absolute h-[40px] w-[40px] scale-[1.6] rounded-full bg-gray-50/10 group-hover:hidden"></div>
                <div className="insert-center absolute h-full w-full scale-[1.3] rounded-full border-[4px] border-gray-50/10 bg-transparent group-hover:scale-[1.2] group-hover:border-2 group-hover:border-gray-50/50"></div>
                <div className="flex flex-col items-center justify-center opacity-0 duration-200 ease-in group-hover:opacity-100">
                  <Image
                    width={90}
                    height={90}
                    alt="Smart Fire Alarm 1.png"
                    src="/Smart Fire Alarm 1.png"
                  />
                  <span className='font-[600]'>Nhắc việc</span>
                </div>
              </div>
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
