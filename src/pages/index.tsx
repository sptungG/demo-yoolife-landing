import { Montserrat, Montserrat_Alternates } from 'next/font/google';
import { useId } from 'react';
import {
  AndroidFillSvg,
  AppStoreFillSvg,
  AppleLogoSvg,
  ChPlayLogoSvg,
  EmailOutlinedSvg,
  EmergencySosSvg,
  FbFillSvg,
  MapOutlinedSvg,
  PhoneOutlinedSvg,
  RadioSvg,
  Section5ArrowRightSvg,
  Section5ArrowSvg,
  SmartAirConSvg,
  SmartConnectionSvg,
  SmartCurtainSvg,
  SmartDoorEntrySvg,
  SmartEnergySvg,
  SmartFireAlarmSvg,
  SmartFreshAirSvg,
  SmartLandscapeSvg,
  SmartLightingSvg,
  SmartMediaSvg,
  SmartSecuritySvg,
  SmartVoiceSvg,
  TiktokFillSvg,
  TwitterFillSvg,
  YooLogoSvg,
  YooSvg,
} from 'src/components/icons';
import CamOutlinedTitle from 'src/components/items/CamOutlinedTitle';
import SectionCard5 from 'src/components/items/SectionCard5';
import SectionDot1 from 'src/components/items/SectionDot1';
import SectionDot2 from 'src/components/items/SectionDot2';
import Header from 'src/components/layout/Header';
import { NImage as Image } from 'src/components/next/Image';
import SEO from 'src/components/seo/SEO';
const inter = Montserrat({ subsets: ['latin'] });
const MontserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['700', '800'],
});

function Page() {
  const uid = useId();

  return (
    <main
      className={`${inter.className} relative mx-auto min-h-screen max-w-[1920px] overflow-x-hidden`}
    >
      <SEO title="Yoolife" description="Yoolife IoT Platform" />

      <Header />

      <section className="mx-auto min-h-screen bg-[url('/bg-section-1.png')] bg-cover bg-no-repeat">
        <div className="relative mx-auto h-screen max-w-[1280px] p-12 text-gray-50">
          <div className="text-[50px] font-[500]">Yoolife IoT Platform</div>
          <div className="text-right text-[109.25px] font-[700]">
            Personalization
          </div>

          <h3 className="section-1-heading overflow-hidden whitespace-nowrap font-sans text-[138px] font-[700] tracking-normal text-gray-50/5">
            C<span className="font-mono">á</span> nh
            <span className="font-mono">â</span>n hó
            <span className="font-mono">a</span>
          </h3>

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
              quality={100}
              priority
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
                <div className="inset-center-y absolute left-0 h-9 w-9 -translate-x-full rounded-full border border-gray-50 bg-transparent">
                  <div className="inset-center absolute h-4 w-4 rounded-full bg-gray-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto min-h-screen">
        <div className="relative flex justify-between pt-[80px]">
          <div className="relative">
            <Image
              width={983}
              height={416}
              src={'/section-2-tl.png'}
              alt="section-2-tl"
              className="-z-10 -scale-x-100"
              quality={100}
              priority
            />
          </div>
          <div className="relative z-10 mx-auto max-w-[1280px] px-12">
            <div className="group absolute right-0 top-[24px] h-[289px] w-[647px] translate-x-[40%]">
              <Image
                width={620}
                height={289}
                src={'/section-2-home-iot-1.png'}
                alt="section-2-home-iot-1"
                className="absolute right-[19px] top-[24px] opacity-100 group-hover:opacity-0"
                quality={100}
                priority
              />
              <Image
                width={647}
                height={289}
                src={'/section-2-home-iot-2.png'}
                alt="section-2-home-iot-2"
                className="absolute right-0 top-0 opacity-0 group-hover:opacity-100"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1280px] px-12 py-[48px] text-gray-50">
          <div className="mb-[30px] text-[33px] font-[700]">
            YooLife IoT Platform
          </div>

          <div className="mb-4 text-[26.8px] font-[600]">Sứ mệnh</div>
          <p className="mb-[30px] text-justify text-[22px] font-[300] leading-normal">
            Chúng tôi mong muốn mang đến một không gian sống thông minh và hiện
            đại, phù hợp với tất cả mọi người dân Việt Nam.
          </p>

          <div className="mb-4 text-[26.8px] font-[600]">Tầm nhìn</div>
          <p className="text-justify text-[22px] font-[300] leading-normal">
            Chúng tôi luôn hướng đến trở thành đơn vị phát triển Nhà ở thông
            minh hàng đầu không chỉ trong nước mà còn trên Thế giới. Chúng tôi
            luôn tiên phong đổi mới, ứng dụng kỹ thuật hiện đại, tích hợp công
            nghệ tiên tiến vào cuộc sống mỗi người dân.
          </p>
        </div>
      </section>

      <section className="mx-auto min-h-screen">
        <div className="mx-auto mb-[110px] max-w-[1280px] px-12 pt-[48px] text-gray-50">
          <div className="mb-[20px] text-center text-[35px] font-[600]">
            Giải pháp Nhà thông minh
          </div>
          <p className="text-center text-[22px] font-[300] leading-normal">
            Ứng dụng Yoolife với 14 tính nắng thông minh, giúp nâng cao chất
            lượng cuộc sống thúc đẩy sự chuyển đổi số trong chính ngôi nhà của
            bạn.
          </p>
        </div>

        <div className="relative pb-[167px]">
          <div className="relative mx-auto h-fit w-fit">
            <Image
              width={1338 - 80}
              height={892 - 80}
              src={'/section-3-main.png'}
              alt="section-3-main"
              className=""
              quality={100}
              priority
            />

            <Image
              width={714 - 80}
              height={870 - 80}
              src={'/section-3-main-bg.png'}
              alt="section-3-main-bg"
              className="absolute right-0 top-0 -z-10 -translate-y-[36%] translate-x-[30%] -rotate-90 -scale-x-100 opacity-20"
            />

            <Image
              width={714 - 80}
              height={870 - 80}
              src={'/section-3-main-bg.png'}
              alt="section-3-main-bg"
              className="absolute bottom-0 left-0 -z-10 -translate-x-[25%] translate-y-[42%] -rotate-90 -scale-x-100 opacity-20"
            />

            <div className="inset-center absolute h-[calc(100%+32px)] w-[calc(100%+32px)] bg-gray-50/10"></div>

            <div className="absolute left-[50%] top-[324px] xl:left-[50%]">
              <SectionDot2
                classNameWrapper="h-[50px] w-[50px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[22px] w-[22px]"
                image={
                  <SmartLightingSvg className="-mt-4 h-[60px] w-[60px] flex-shrink-0" />
                }
                text={
                  <span className="-mt-1.5 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Lighting
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%-94px)] top-[200px] xl:left-[calc(50%-94px)]">
              <SectionDot2
                classNameWrapper="h-[50px] w-[50px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[22px] w-[22px]"
                image={
                  <SmartAirConSvg className="-mt-4 h-[60px] w-[60px] flex-shrink-0" />
                }
                text={
                  <span className="-mt-1.5 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Air-Con
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%+260px)] top-[200px] xl:left-[calc(50%+260px)]">
              <SectionDot2
                classNameWrapper="h-[50px] w-[50px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[22px] w-[22px]"
                image={
                  <EmergencySosSvg className="h-[40px] w-[40px] flex-shrink-0" />
                }
                text={
                  <span className="mt-0.5 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Emergency <br /> SOS
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%+440px)] top-[100px] xl:left-[calc(50%+440px)]">
              <SectionDot2
                classNameWrapper="h-[50px] w-[50px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[22px] w-[22px]"
                image={
                  <SmartFireAlarmSvg className="-mt-2 h-[52px] w-[52px] flex-shrink-0" />
                }
                text={
                  <span className="-mt-1.5 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Fire Alarm
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%+310px)] top-[400px] xl:left-[calc(50%+310px)]">
              <SectionDot2
                classNameWrapper="h-[50px] w-[50px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[22px] w-[22px]"
                image={
                  <SmartLandscapeSvg className="-mt-5 h-[54px] w-[54px] flex-shrink-0" />
                }
                text={
                  <span className="-mt-0.5 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Landscape
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%+530px)] top-[300px] xl:left-[calc(50%+530px)]">
              <SectionDot2
                classNameWrapper="h-[50px] w-[50px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[22px] w-[22px]"
                image={
                  <SmartCurtainSvg className="-mt-2 h-[50px] w-[50px] flex-shrink-0" />
                }
                text={
                  <span className="-mt-0.5 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Curtain
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%+550px)] top-[580px] xl:left-[calc(50%+550px)]">
              <SectionDot2
                classNameWrapper="h-[50px] w-[50px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[22px] w-[22px]"
                image={
                  <SmartFreshAirSvg className="-mt-2 h-[52px] w-[52px] flex-shrink-0" />
                }
                text={
                  <span className="-mt-1 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Fresh Air
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%+510px)] top-[760px] xl:left-[calc(50%+510px)]">
              <SectionDot2
                classNameWrapper="h-[50px] w-[50px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[22px] w-[22px]"
                image={
                  <SmartConnectionSvg className="-mt-4 h-[52px] w-[52px] flex-shrink-0" />
                }
                text={
                  <span className="-mt-1 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Connection
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%+160px)] top-[580px] xl:left-[calc(50%+160px)]">
              <SectionDot2
                classNameWrapper="h-[50px] w-[50px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[22px] w-[22px]"
                image={
                  <SmartVoiceSvg className="-mt-2 h-[50px] w-[50px] flex-shrink-0" />
                }
                text={
                  <span className="text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Voice
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%-150px)] top-[480px] xl:left-[calc(50%-150px)]">
              <SectionDot2
                classNameWrapper="h-[50px] w-[50px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[22px] w-[22px]"
                image={
                  <SmartMediaSvg className="-mt-2 h-[52px] w-[52px] flex-shrink-0" />
                }
                text={
                  <span className="-mt-1 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Media
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%-520px)] top-[590px] xl:left-[calc(50%-520px)]">
              <SectionDot2
                classNameWrapper="h-[40px] w-[40px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[16px] w-[16px]"
                image={
                  <SmartEnergySvg className="-mt-2 h-[46px] w-[46px] flex-shrink-0" />
                }
                text={
                  <span className="-mt-0.5 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Energy
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%-600px)] top-[620px] xl:left-[calc(50%-600px)]">
              <SectionDot2
                classNameWrapper="h-[50px] w-[50px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[22px] w-[22px]"
                image={
                  <SmartLandscapeSvg className="-mt-5 h-[54px] w-[54px] flex-shrink-0" />
                }
                text={
                  <span className="-mt-0.5 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Landscape
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%-478px)] top-[310px] xl:left-[calc(50%-478px)]">
              <SectionDot2
                classNameWrapper="h-[50px] w-[50px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[22px] w-[22px]"
                image={
                  <SmartDoorEntrySvg className="-mr-3 -mt-3 h-[54px] w-[54px] flex-shrink-0" />
                }
                text={
                  <span className="-mt-1.5 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Door Entry
                  </span>
                }
              />
            </div>

            <div className="absolute left-[calc(50%-412px)] top-[160px] xl:left-[calc(50%4120px)]">
              <SectionDot2
                classNameWrapper="h-[40px] w-[40px] hover:h-[110px] hover:w-[110px]"
                classNameDot="h-[16px] w-[16px]"
                image={
                  <SmartSecuritySvg className="-mt-2 h-[46px] w-[46px] flex-shrink-0" />
                }
                text={
                  <span className="-mt-0.5 text-center text-sm font-[500] leading-[1.1] text-sky-800">
                    Smart <br /> Security
                  </span>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto min-h-screen">
        <div className="relative">
          <Image
            width={1920}
            height={1432}
            src="/section-4-top.png"
            alt="section-4-top"
            quality={100}
            priority
          />
          <Image
            width={539}
            height={336}
            src="/section-4-top-1.png"
            alt="section-4-top-1"
            className="absolute bottom-[38%] left-0"
          />
          <Image
            width={1920}
            height={1582}
            src="/section-4-top-bg.png"
            alt="section-4-top-bg"
            className="absolute left-0 top-0"
          />

          <div className="absolute left-[16px] top-[100px] flex flex-col items-end">
            <h3 className="text-shadow-white text-bg text-[177.179px] font-[700] leading-[1]">
              Smart
            </h3>
            <h3 className="bg-gradient-building -mt-12 bg-clip-text text-[200px] font-[700] leading-[1.2] text-transparent">
              Building
            </h3>
          </div>

          <div className="from-bg absolute -bottom-2 -left-1 -right-1 z-10 h-[30%] bg-gradient-to-t blur-sm"></div>
        </div>

        <div className="relative">
          <div className="mx-auto flex max-w-[1280px] px-12 py-6">
            <div className="mr-[26px] min-w-0 flex-[1_1_auto] text-gray-100">
              <p className="mb-[64px] text-justify text-[20px] font-[300] leading-[2]">
                Là một người đồng hành đáng tin cậy trong việc tạo nên tương lai
                thông minh cho các tòa nhà hiện đại. Chúng tôi tự hào là một
                trong những nhà cung cấp hàng đầu về các giải pháp dành cho
                Smart Building, cam kết mang đến sự tiện nghi, hiệu quả và an
                toàn cho không gian sống và làm việc.
              </p>
              <p className="mb-[64px] text-justify text-[20px] font-[300] leading-[2]">
                Với một danh mục đa dạng bao gồm hệ thống Quản lý Toàn diện
                (BMS), hệ thống Thông tin Tòa nhà (iBS), Hệ thống Ánh sáng thông
                minh, hệ thống Báo cháy tiên tiến và giải pháp hệ thống Điện
                thông minh, chúng tôi đã xây dựng nên một hệ sinh thái hoàn
                chỉnh để đáp ứng mọi nhu cầu của khách hàng trong việc tối ưu
                hóa quản lý tòa nhà và nâng cao trải nghiệm người dùng.
              </p>
              <p className="text-justify text-[20px] font-[300] leading-[2]">
                Với sự kết hợp của công nghệ tiên tiến và sự am hiểu sâu sắc về
                yêu cầu của thị trường, chúng tôi luôn đi đầu trong việc phát
                triển các giải pháp thông minh và bền vững, đáp ứng mọi thách
                thức từ việc quản lý năng lượng đến an ninh và an toàn. Chúng
                tôi cam kết cùng bạn xây dựng những không gian sống và làm việc
                thông minh, tiết kiệm và thân thiện với môi trường.
              </p>
            </div>
            <div className="min-w-0 flex-[0_0_480px]">
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

      <section className="mx-auto min-h-screen">
        <div className="relative mx-auto max-w-[1280px] px-12">
          <div className="mb-16 mt-10 text-center text-[25px] font-[600] text-gray-50">
            Ứng dụng quản lý thông minh trong hệ thống quản lý tòa nhà
          </div>
          <div className="text-green2 mb-8 text-[22px] font-[700]">
            Hệ thống An ninh
          </div>
          <div className="mb-8 text-[20px] font-[700] text-gray-50">
            Di chuyển thông minh
          </div>
          <p className="text-justify text-[20px] font-[300] leading-[2] text-gray-50">
            Di chuyển thông minh là trụ cột của quản lý tòa nhà hiện đại, mang
            lại sự tiện ích và hiệu quả cho cả cư dân và quản lý. Hệ thống này
            kết hợp nhiều công nghệ tiên tiến để tối ưu hóa trải nghiệm tại tòa
            nhà.
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
                <p className="ml-2 text-[20px] font-[300]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative -mt-[220px]">
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

        <div className="relative mx-auto max-w-[1280px] px-12">
          <div className="text-green2 mb-14 text-[22px] font-[700]">
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
                  title: 'Ứng dụng YooLife',
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
              desc: `Quy trình xử lý cảnh báo cháy trong hệ thống quản lý tòa nhà (BMS - Building Management System) là một phần quan trọng để đảm bảo an toàn và sự bảo vệ của tòa nhà và người dân trong đó. YooLife IoT tự hào là đơn vị hàng đầu trong lĩnh vực quản lý hệ thống quản lý tòa nhà, đảm bảo sự An toàn cho người dân cũng như hệ sinh thái các tòa nhà mà chúng tôi đã quản lý.`,
              children: [
                {
                  imageUrl: '/section-5-2-1.png',
                  title: 'Hệ thống báo cháy',
                  sub: 'Cảnh báo cháy',
                },
                {
                  imageUrl: '/section-5-1-2.png',
                  title: 'Ứng dụng YooLife',
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
                  title: 'Ứng dụng YooLife',
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
                <div className="scrollbar-thin max-w-full overflow-x-auto scroll-smooth">
                  <div className="flex min-w-fit justify-between gap-8">
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
              </div>
              <p className="text-justify text-[20px] font-[300] leading-[2] text-gray-50">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mx-auto mt-16 max-w-[1280px] px-12">
          <div className="text-green2 mb-9 text-[22px] font-[700]">
            Quản trị Năng Lượng
          </div>
          <p className="text-justify text-[20px] font-[300] leading-[2] text-gray-50">
            Quản trị năng lượng trong quản lý tòa nhà là việc tối ưu hóa việc sử
            dụng điện, nước, và hệ thống làm mát. Điều này bao gồm giám sát, đo
            đạc, tối ưu hóa thiết bị, quản lý nhiệt độ, chi phí và sử dụng nguồn
            tái tạo. Mục tiêu là tiết kiệm năng lượng, giảm lãng phí, và tạo môi
            trường sống hiệu quả và bền vững.
          </p>
          <div className="relative flex items-center justify-center">
            <Image
              src="/section-5-combined-2.png"
              alt=""
              width={1200}
              height={0}
              quality={100}
              priority
            />
            <p className="absolute left-0 top-[80px] w-fit max-w-[280px] text-justify text-[19px] font-[300] leading-[25px] text-gray-50">
              Giám sát 24/7 định mức tiêu thụ + Cảnh báo Ai khi vượt ngưỡng tiêu
              thụ.
            </p>
            <p className="absolute right-0 top-[160px] max-w-[300px] text-justify text-[19px] font-[300] leading-[25px] text-gray-50">
              Tối ưu chi phí tiêu thụ Điện, nước hàng tháng dựa trên báo cáo
              thống kê hàng tháng.
            </p>
            <p className="absolute left-0 top-[400px] max-w-[180px] text-justify text-[19px] font-[300] leading-[25px] text-gray-50">
              Thống kê chi tiết chỉ số Điện năng, Chi phí hóa đơn, Cài đặt định
              mức.
            </p>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1280px] px-12">
          <div className="text-green2 mb-9 text-[22px] font-[700]">
            Tự động hóa
          </div>
          <p className="text-justify text-[20px] font-[300] leading-[2] text-gray-50">
            Tự động hóa đóng vai trò quan trọng trong quản lý tòa nhà, mang lại
            sự tiện ích, hiệu quả và an toàn. Bằng cách áp dụng các hệ thống tự
            động hóa, quản lý tòa nhà có khả năng tự động điều chỉnh và kiểm
            soát các hoạt động hàng ngày như hệ thống điện, nước, chiếu sáng, và
            làm mát.
          </p>
          <p className="mt-6 text-justify text-[20px] font-[300] leading-[2] text-gray-50">
            Các lợi ích của tự động hóa trong quản lý tòa nhà bao gồm:
          </p>
          <div className="relative mt-8 flex flex-wrap">
            {[
              'Tiết kiệm năng lượng và chi phí',
              'Tăng cường an ninh và an toàn',
              'Tăng hiệu quả và đáp ứng nhanh chóng',
              'Theo dõi và báo cáo',
              'Tối ưu hóa quản lý thời gian',
            ].map((item, index) => (
              <div
                className="mb-6 flex w-[50%] items-center text-gray-50"
                key={item}
              >
                <RadioSvg className="h-6 w-6" />
                <p className="ml-2 text-[20px] font-[300]">{item}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-12">
            <div className="flex flex-nowrap justify-center gap-[50px]">
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
                <div key={JSON.stringify(item) + index} className="flex-1">
                  <div className="mb-4 text-center text-[20px] font-[600] leading-none text-gray-50">
                    Dự án {index + 1}
                  </div>
                  <div className="mb-6 text-center text-[22px] font-[300] leading-none text-gray-50">
                    {item.title}
                  </div>
                  <div className="relative h-[224px] flex-shrink-0 rounded-2xl border border-gray-50 p-4">
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
            <div className="z-0 -mb-16 flex justify-center">
              <Section5ArrowRightSvg className="z-0 h-[135px] w-[320px] -scale-x-100" />
              <Section5ArrowSvg className="z-0 mx-[100px] h-[135px] w-[24px]" />
              <Section5ArrowRightSvg className="z-0 h-[135px] w-[320px]" />
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
                <p className="ml-2 text-justify text-[20px] font-[300] leading-[2]">
                  <b className="whitespace-nowrap">{item.label}</b>
                  {`: `}
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto min-h-screen">
        <div className="relative -z-10 -mt-[50vh]">
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
          <h3 className="section-6-heading overflow-hidden whitespace-nowrap font-sans text-[280px] font-[700] tracking-normal text-gray-50/20">
            Sm<span className="font-mono">a</span>rt City
          </h3>
          <div className="mx-auto max-w-[1280px] px-12">
            <p className="text-justify text-[20px] font-[300] leading-[2] text-gray-50">
              Công nghệ số ngày càng phát triển, nhu cầu kết nối không chỉ dừng
              lại ở thiết bị – thiết bị, thiết bị – con người mà nó còn lan rộng
              nhằm kết nối cư dân – cư dân, cư dân – ban quản trị, cư dân trong
              các tòa nhà thông minh, khu đô thị thông minh. Người dân dần trở
              thành trung tâm trong các hoạt động số hóa. Chung tay xây dựng
              cộng đồng số – cộng đồng thông minh, kiến tạo xã hội thông minh là
              một trong các kim chỉ nam của YooLife.
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

        <div className="mx-auto mt-10 max-w-[1280px] px-12">
          <div className="mb-8 text-[30px] font-[600] text-gray-50">
            Smart Community ( Cộng đồng cư dân thông minh)
          </div>
          <div className="scrollbar-thin max-w-full overflow-x-auto">
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
                  className="w-[228px] max-w-[228px] flex-1 rounded-2xl border border-gray-50 px-2.5 py-6 text-gray-50"
                >
                  <div className="mb-2.5 whitespace-nowrap text-[17px] font-[600]">
                    {item.title}
                  </div>
                  <div className="flex max-w-full flex-col gap-1">
                    {item.children.map((c, ind) => (
                      <div key={c + ind} className="flex flex-nowrap">
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
          <div className="relative">
            <Image
              src="/section-6-sc.png"
              alt="/section-6-sc.png"
              width={1200}
              height={0}
              quality={100}
              priority
            />
            <div className="text-green3 absolute left-4 top-[calc(50%-210px)] text-[26px] font-[600]">
              Giao tiếp thông minh
            </div>
            <div className="text-green3 absolute left-4 top-[calc(50%+322px)] text-[26px] font-[600]">
              Booking Khu Vui chơi
            </div>
            <div className="text-green3 absolute right-6 top-[calc(50%-42px)] text-[26px] font-[600]">
              Cộng đồng <br /> thông minh
            </div>
            <div className="text-green3 absolute right-[100px] top-[calc(50%+352px)] text-[26px] font-[600]">
              An ninh thông minh
            </div>
          </div>

          <div className="mx-auto max-w-[1280px] px-12">
            <div className="text-green3 border-green3 flex h-12 items-center justify-center rounded-full border text-center align-bottom text-[26px] font-[600] leading-none">
              YooLife nhà kiến tạo Cộng đồng thông minh - Xã hội Văn minh
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-[100px] min-h-screen">
        <div className="z-0 mx-auto max-w-[1280px] px-12">
          <h3 className="section-7-heading overflow-hidden whitespace-nowrap text-center font-sans text-[180px] font-[700] tracking-normal text-gray-50">
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
        <div className="mx-auto mt-10 max-w-[1280px] px-12">
          <p className="mb-10 text-justify text-[20px] font-[300] leading-[2] text-gray-50">
            Chúng tôi định nghĩa mô hình xã hội thông minh dựa trên 3 trụ cột
            chính gồm: Kinh tế số – Xã hội số – Cuộc sống số. Ý thức sâu sắc về
            xu hướng chuyển đổi số đang lan rộng trong mọi mặt đời sống, quan
            sát những thay đổi nhanh chóng cuộc sống của người dân trong kỷ
            nguyên IOT, iMAXTEK tiên phong dẫn lối xây dựng cuộc sống thông minh
            lấy con người làm trung tâm và theo đuổi triết lý thiết kế số hóa
            nhu cầu theo các cấp độ từ cá nhân – gia đình – cộng đồng – xã hội.
          </p>
          <Image
            width={1280}
            height={0}
            src="/section-7-main.png"
            alt="section-7-main"
            quality={100}
            priority
            className="-z-10 mb-10"
          />
          <p className="text-justify text-[20px] font-[300] leading-[2] text-gray-50">
            Xã hội thông minh – Smart Social, xét theo nghĩa hẹp, là một xã hội
            ứng dụng Tự động hóa, CNTT nhằm số hóa các trụ cột như kinh tế số,
            xã hội số và cuộc sống số. Mô hình Smart Social cho phép kết nối con
            người – con người, con người – thiết bị và thiết bị – thiết bị nhằm
            kiện toàn các lĩnh vực như SmartHome, SmartBuilding, SmartCity và
            Smart Social. Lấy con người làm trung tâm, số hóa và kết nối con
            người với hầu hết các dịch vụ tiện ích ngoài xã hội, đồng thời nâng
            cao hiệu quả quản lý, vận hành các cơ sở hạ tầng trọng yếu, tòa nhà,
            khu đô thị nhằm kiến tạo nên không gian sống hoàn hảo, tiện nghi,
            đẳng cấp, đặt nền tảng cho một cuộc sống lý tưởng: “công nghệ – tiện
            nghi – xanh – thông minh”
          </p>
        </div>
        <div className="px-12">
          <Image
            width={1920}
            height={0}
            src="/section-7-bottom.png"
            alt="section-7-bottom"
            quality={100}
            priority
            className="-z-10 mb-10"
          />
        </div>
      </section>

      <section className="mx-auto min-h-screen">
        <div className="mx-auto mb-[76px] max-w-[1280px] px-12 text-gray-50">
          <h3
            className={`pl-[64px] text-[103px] font-[700] leading-none ${MontserratAlternates.className}`}
          >
            Download
          </h3>
          <h3
            className={`text-[133px] font-[800] leading-none ${MontserratAlternates.className}`}
          >
            The YooLife App
          </h3>
        </div>
        <div className="mx-auto flex w-full max-w-[1280px] justify-between px-12">
          <div className="relative -ml-[100%]">
            <Image
              src="/section-8-app.png"
              alt=""
              width={896}
              height={0}
              className="-z-10 translate-x-full"
            />
          </div>
          <div className="z-0 max-w-[580px] self-center">
            <div className="mb-10 whitespace-nowrap text-[53px] font-[700] text-gray-50">
              Tải ứng dụng YooLife
            </div>
            <p className="mb-8 text-justify text-[20px] font-[300] leading-[2] text-gray-50">
              Để tải ứng dụng, bạn truy cập vào một trong hai đường dẫn dưới đây
              tùy theo thiết bị di động của mình sử dụng hệ điều hành là Android
              hay iOS.
            </p>
            <div className="mb-6 flex items-center">
              <div className="flex flex-col gap-12">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg bg-gray-50 pb-3 pl-2 pr-4 pt-3"
                >
                  <AppleLogoSvg className="-mt-1 h-[46.67px] w-[46.67px] flex-shrink-0" />
                  <div className="ml-3 flex flex-col justify-center">
                    <p className="mb-2 leading-none">Download on the</p>
                    <p className="text-[32px] font-[700] leading-none">
                      App Store
                    </p>
                  </div>
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg bg-gray-50 pb-3 pl-2 pr-4 pt-3"
                >
                  <ChPlayLogoSvg className="-mt-1 h-[46.67px] w-[46.67px] flex-shrink-0" />
                  <div className="ml-3 flex flex-col justify-center">
                    <p className="mb-2 leading-none">GET IT ON</p>
                    <p className="whitespace-nowrap text-[32px] font-[700] leading-none">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
              <div className="ml-11">
                <Image
                  src="/section-8-qr.png"
                  alt=""
                  width={256}
                  height={0}
                  quality={100}
                  priority
                />
              </div>
            </div>
            <div className="text-[29px] font-[700] uppercase text-gray-50">
              Mở máy ảnh của bạn lên và quét
            </div>
            <div className="text-justify text-[33.4px] font-[700] uppercase text-gray-50">
              Open your Camera and Scan
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1280px] px-12">
          <p className="text-center text-[20px] font-[300] leading-[2] text-gray-50">
            Hãy cài ngay ứng dụng YooLife để trải nghiệm tương lai thông minh
            ngay trong căn nhà của bạn! Với YooLife, bạn sẽ có cơ hội trải
            nghiệm một cuộc sống đa thông minh và tiện ích hơn bao giờ hết. Tự
            động hóa hệ thống trong nhà, kết nối với cộng đồng thông minh, và
            tận hưởng những tiện ích hiện đại mà ứng dụng mang lại. Khám phá
            ngay YooLife và hòa mình vào không gian sống thông minh, tiện lợi và
            thú vị!
          </p>
        </div>
      </section>

      <footer className="relative mx-auto mt-[200px] flex min-h-screen flex-col">
        <Image src="/footer-bg.png" alt="" fill className="-z-10" />
        <div className="from-bg absolute -left-1 -right-1 -top-2 -z-10 h-[100%] bg-gradient-to-b blur-sm"></div>

        <div className="mx-auto mb-14 mt-auto max-w-[1280px] px-12">
          <h3 className="mb-[18px] text-center text-[45px] font-[700] leading-[65px] text-gray-50">
            Liên hệ với chúng tôi
          </h3>
          <p className="mb-11 text-center text-[30px] font-[300] text-gray-50">
            Tham gia ngay bây giờ để ưu đãi đặc biệt và được tư vấn một cách tốt
            nhất!
          </p>
          <form className="flex w-full justify-center gap-6 px-12">
            <input
              type="email"
              defaultValue=""
              className="focus:ring-green2 h-12 flex-auto rounded-full bg-gray-300/10 px-6 text-gray-50 outline-none backdrop-blur-sm placeholder:text-[20px] hover:ring-1 focus:ring-1"
              placeholder="Nhập Email của bạn..."
            />
            <button className="bg-gradient-building h-12 rounded-full px-12 text-[20px] font-[500] text-gray-900">
              Gửi Email
            </button>
          </form>
        </div>
        <div className="mx-auto max-w-[1280px] px-12">
          <div className="mb-4">
            <div className="inline-flex flex-nowrap items-end">
              <YooLogoSvg className="h-[76px] w-[76px]" />
              <div className="flex flex-nowrap items-baseline">
                <span className="flex items-center justify-center">
                  <YooSvg height={33} />
                </span>
                <span className="logo-text-gradient-green ml-0 text-[36px] font-[700]">
                  life
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="">
              <div className="mb-9 text-[22px] font-[700] text-gray-50">
                Công ty Cổ phẩn YooTek Holdings
              </div>
              <div className="mb-5 text-[22px] font-[600] text-gray-50">
                Liên hệ với chúng tôi
              </div>
              <div className="mb-4 flex cursor-pointer items-center text-gray-50 hover:underline">
                <EmailOutlinedSvg className="h-[18px] w-[18px]" />
                <a href="mailto:info@imaxhitech.com" className="ml-2.5">
                  <b>Email:</b> info@imaxhitech.com
                </a>
              </div>
              <div className="mb-4 flex cursor-pointer items-center text-gray-50 hover:underline">
                <PhoneOutlinedSvg className="h-[18px] w-[18px]" />
                <a href="tel:+842473011968" className="ml-2.5">
                  <b>Số điện thoại:</b> +84 24 7301 1968
                </a>
              </div>
              <div className="mb-4 flex items-center text-gray-50">
                <MapOutlinedSvg className="h-[18px] w-[18px]" />
                <div className="ml-2.5 font-[700]">Văn phòng:</div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="cursor-pointer text-gray-50 hover:underline">
                  <b>Trụ sở chính:</b> Tầng 3, Tòa Audi, Số 8 Phạm Hùng, Mễ Trì,
                  Nam Từ Liêm, Hà Nội.
                </p>
                <p className="cursor-pointer text-gray-50 hover:underline">
                  <b>Showroom:</b> D02-L38, An Vuong Villa block, Duong Noi, Ha
                  Dong, Hà Nội.
                </p>
                <p className="cursor-pointer text-gray-50 hover:underline">
                  <b>HCM Office:</b> Block A1, 312 Lạc Long Quân, Quận 11, Thành
                  phố Hồ Chí Minh.
                </p>
                <p className="cursor-pointer text-gray-50 hover:underline">
                  <b>Trung tâm R&D:</b> 5/167 Herring Rd, Macquarie Park, NSW
                  2113.
                </p>
              </div>
            </div>

            <div className="">
              <div className="mb-9 text-[22px] font-[700] text-gray-50">
                Ứng dụng
              </div>
              <div className="mb-10">
                <div className="mb-4 flex cursor-pointer items-center text-gray-50 hover:underline">
                  <AppStoreFillSvg className="h-6 w-6" />
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2.5 text-gray-50"
                  >
                    YooLife (IOS)
                  </a>
                </div>
                <div className="flex cursor-pointer items-center text-gray-50 hover:underline">
                  <AndroidFillSvg className="h-6 w-6" />
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2.5 text-gray-50"
                  >
                    YooLife (Android)
                  </a>
                </div>
              </div>

              <div className="mb-6 text-[22px] font-[600] text-gray-50">
                Kết nối với YooTek
              </div>
              <div className="flex flex-nowrap gap-6 text-gray-50">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center justify-center hover:text-blue-600"
                >
                  <FbFillSvg className="h-6 w-6" />
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center justify-center hover:text-gray-400"
                >
                  <TiktokFillSvg className="h-6 w-6" />
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center justify-center hover:text-blue-300"
                >
                  <TwitterFillSvg className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="">
              <Image
                src="/online-gov-vn.png"
                alt=""
                width={249}
                height={0}
                quality={100}
              />
            </div>
          </div>

          <div className="flex items-center justify-center pb-[44px] pt-[56px] text-[20px] text-gray-50">
            Copyright © {new Date().getFullYear()} YooTek Holdings. All Right
            Reserved
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Page;
