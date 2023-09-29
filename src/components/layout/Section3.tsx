import {
  EmergencySosSvg,
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
} from 'src/components/icons';
import SectionDot2 from 'src/components/items/SectionDot2';
import { NImage as Image } from 'src/components/next/Image';

function Section3() {
  return (
    <section className="mx-auto min-h-screen">
      <div className="mx-auto mb-[110px] max-w-[1280px] px-12 pt-[48px] text-gray-50">
        <div className="mb-[20px] text-center text-[2.1875rem] font-[600]">
          Giải pháp Nhà thông minh
        </div>
        <p className="text-center text-[1.375rem] font-[300] leading-[2]">
          Ứng dụng Yoolife với 14 tính nắng thông minh, giúp nâng cao chất lượng
          cuộc sống thúc đẩy sự chuyển đổi số trong chính ngôi nhà của bạn.
        </p>
      </div>

      <div className="relative z-0">
        <div className="relative z-10 max-w-full overflow-x-auto px-6 scrollbar-thin min-[1258px]:px-0">
          <div className="relative mx-auto min-w-[908px] max-xl:max-w-[1058px] xl:w-[1258px]">
            <Image
              width={1338 - 80}
              height={0}
              src={'/section-3-main.png'}
              alt="section-3-main"
              className="object-cover"
              quality={100}
              priority
            />
            {/* 1258 px 838.461 px */}

            <div className="absolute left-[50%] top-[calc(100%*324/838.461)]">
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

            <div className="absolute left-[calc(100%*535/1258)] top-[calc(100%*200/838.461)]">
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

            <div className="absolute left-[calc(100%*889/1258)] top-[calc(100%*200/838.461)]">
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

            <div className="absolute left-[calc(100%*1069/1258)] top-[calc(100%*100/838.461)]">
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

            <div className="absolute left-[calc(100%*939/1258)] top-[calc(100%*400/838.461)]">
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

            <div className="absolute left-[calc(100%*1159/1258)] top-[calc(100%*300/838.461)]">
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

            <div className="absolute left-[calc(100%*1179/1258)] top-[calc(100%*580/838.461)]">
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

            <div className="absolute left-[calc(100%*1139/1258)] top-[calc(100%*760/838.461)]">
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

            <div className="absolute left-[calc(100%*789/1258)] top-[calc(100%*580/838.461)]">
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

            <div className="absolute left-[calc(100%*479/1258)] top-[calc(100%*480/838.461)]">
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

            <div className="absolute left-[calc(100%*109/1258)] top-[calc(100%*590/838.461)]">
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

            <div className="absolute left-[calc(100%*29/1258)] top-[calc(100%*620/838.461)]">
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

            <div className="absolute left-[calc(100%*151/1258)] top-[calc(100%*310/838.461)]">
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

            <div className="absolute left-[calc(100%*217/1258)] top-[calc(100%*160/838.461)]">
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
        <div className="inset-center absolute z-0 mx-auto min-w-[908px] max-xl:max-w-[1058px] xl:w-[1258px]">
          <div className="inset-center absolute z-0 h-[calc(100%+32px)] w-[calc(100%+32px)] bg-gray-50/10"></div>
          <Image
            width={1338 - 80}
            height={0}
            src={'/section-3-main.png'}
            alt="section-3-main"
            className="invisible relative -z-10 object-cover"
            quality={1}
            priority
          />
          <Image
            width={634}
            height={0}
            src={'/section-3-main-bg.png'}
            alt="section-3-main-bg"
            className="absolute right-0 top-0 -z-10 w-[40%] -translate-y-[36%] translate-x-[30%] -rotate-90 -scale-x-100 opacity-20 min-[1258px]:w-[634px]"
          />

          <Image
            width={634}
            height={0}
            src={'/section-3-main-bg.png'}
            alt="section-3-main-bg"
            className="absolute bottom-0 left-0 -z-10 w-[40%] -translate-x-[25%] translate-y-[42%] -rotate-90 -scale-x-100 opacity-20 min-[1258px]:w-[634px]"
          />
        </div>
      </div>

      <div className="relative px-12 pb-[167px] min-[1258px]:px-0"></div>
    </section>
  );
}

export default Section3;
