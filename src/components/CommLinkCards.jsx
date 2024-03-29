import Link from 'next/link'
import moment from 'moment'

const OneThird = ({
  typeicon,
  typename,
  image,
  title,
  channel,
  posted,
  description,
  id,
}) => {
  return (
    <Link legacyBehavior href={'/comm-link/transmission/' + id}>
      <a
        className="hover:no-underline mt-10 md:mx-[30px] lg:mx-0 lg:mr-[30px] h-[315px] block p-[10px] float-left border-[1px] border-primary boder-solid border-opacity-20 relative box-content group cursor-pointer"
        aria-label={'Comm-Link: ' + title}
      >
        <div className="float-right h-[33px] w-[120px] absolute right-[10px] z-5 opacity-60 bg-type-bg bg-no-repeat">
          <div
            className={
              'bg-type-post float-left w-[14px] h-[14px] bg-center bg-no-repeat block mt-[7px] ml-[40px] mr-[8px]'
            }
          ></div>
          <span className="mt-[7px] text-primary text-[11px] italic capitalize">
            {typename}
          </span>
        </div>
        <div
          className={
            'bg-cover relative bg-center opacity-100 w-[338px] h-[210px]'
          }
          style={{
            backgroundImage: 'url(//cms.ariscorp.de/assets/' + image + ')',
          }}
        ></div>
        <div className="block align-middle absolute mt-[26px] w-full">
          <div className="text-lg text-white">{title}</div>
        </div>
        <div className="absolute w-[338px] h-[90px] mt-[10px]">
          <div className="pl-[18px] pb-[3px] font-bold float-right text-[11px] text-[#5e7a8d] absolute right-0">
            Channel: <span className="font-normal text-primary">{channel}</span>
          </div>
          <div className="absolute mt-20 text-[#5e7a8d] text-[11px] font-bold border-r-[1px] border-solid border-[#4a4241] float-left pr-[13px]">
            Posted: <span className="font-normal text-primary">{moment(posted).from((moment().add(930, 'years')))}</span>
          </div>
        </div>
        <div className="w-[338px] h-[315px] transition-opacity duration-200 opacity-0 group-hover:opacity-90 bg-lines absolute overflow-hidden z-10 top-[10px]">
          <div className="px-[30px] transition duration-300 opacity-0 group-hover:opacity-100 text-center table h-full">
            <div className="relative ease-in transition-all duration-100 group-hover:pt-0 delay-200 text-[#7e98a2] text-xs table-cell align-middle pt-[30px] opacity-0 group-hover:opacity-100">
              {description}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

const TwoThirds = ({
  typeicon,
  typename,
  image,
  title,
  channel,
  posted,
  description,
  id,
}) => {
  return (
    <Link legacyBehavior href={'/comm-link/transmission/' + id}>
      <a
        className="hover:no-underline mt-10 mr-[30px] xl:w-[729px] h-[315px] block p-[10px] float-left border-[1px] border-primary boder-solid border-opacity-20 relative box-content group cursor-pointer"
        aria-label={'Comm-Link: ' + title}
      >
        <div className="float-right h-[33px] w-[120px] absolute right-[10px] z-5 opacity-60 bg-type-bg bg-no-repeat xl:scale-0">
          <div
            className={
              'bg-' +
              typeicon +
              ' float-left w-[14px] h-[14px] bg-center bg-no-repeat block mt-[7px] ml-[40px] mr-[8px]'
            }
          ></div>
          <span className="mt-[7px] text-primary text-[11px] italic capitalize">
            {typename}
          </span>
        </div>
        <div
          className={
            'xl:bg-cover relative xl:absolute xl:bg-center opacity-60 bg-center bg-cover w-[338px] h-[210px] xl:w-[729px] xl:h-[315px]'
          }
          style={{
            backgroundImage: 'url(//cms.ariscorp.de/assets/' + image + ')',
          }}
        ></div>
        <div className="scale-0 xl:scale-100 float-right h-[33px] w-[120px] absolute right-[10px] z-5 opacity-60 bg-type-bg bg-no-repeat">
          <div
            className={
              'bg-type-post float-left w-[14px] h-[14px] bg-center bg-no-repeat block mt-[7px] ml-[40px] mr-[8px]'
            }
          ></div>
          <span className="mt-[7px] text-primary text-[11px] italic capitalize">
            {typename}
          </span>
        </div>
        <div className="xl:table-cell xl:align-middle absolute w-[338px] h-[90px] mt-[10px] xl:relative xl:w-[729px] xl:h-[315px] xl:mt-0">
          <div className="block align-middle xl:align-baseline absolute xl:static mt-[26px] w-full xl:mt-0 xl:w-[729px] text-white xl:text-6xl xl:uppercase xl:text-center text-lg">
            {title}
          </div>
        </div>
        <div className="w-[338px] h-[90px] mt-[10px] xl:bg-black xl:bg-repeat xl:bg-opacity-80 xl:p-[20px] xl:h-[10px] xl:w-[689px] absolute xl:text-xs xl:mt-[-50px] xl:box-content">
          <div className="pl-[18px] pb-[3px] font-bold float-right text-[11px] text-[#5e7a8d]">
            Channel: <span className="font-normal text-primary">{channel}</span>
          </div>
          <div className="text-[#5e7a8d] text-[11px] xl:text-xs font-bold border-r-[1px] border-solid border-[#4a4241] float-left pr-[13px]">
            Posted: <span className="font-normal text-primary">{moment(posted).from((moment().add(930, 'years')))}</span>
          </div>
        </div>
        <div className="w-[338px] h-[315px] xl:w-[729px] xl:h-[315px] transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-lines absolute overflow-hidden z-10 top-[10px]">
          <div className="xl:w-[669px] px-[30px] transition duration-300 opacity-0 group-hover:opacity-100 text-center table h-full">
            <div className="relative ease-in transition-all duration-100 group-hover:pt-0 delay-200 text-[#7e98a2] text-xs xl:text-md table-cell align-middle pt-[30px] opacity-0 group-hover:opacity-100">
              {description}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

const ThreeThirds = ({
  typeicon,
  typename,
  image,
  title,
  channel,
  posted,
  description,
  id,
}) => {
  return (
    <Link legacyBehavior href={'/comm-link/transmission/' + id}>
      <a
        className="hover:no-underline mt-10 md:mx-[30px] lg:mx-0 lg:mr-[30px] lg:w-[729px] xl:w-[1119px] h-[315px] block p-[10px] float-left border-[1px] border-primary boder-solid border-opacity-20 relative box-content group cursor-pointer"
        aria-label={'Comm-Link: ' + title}
      >
        <div className="float-right h-[33px] w-[120px] absolute right-[10px] z-5 opacity-60 bg-type-bg bg-no-repeat lg:scale-0">
          <div
            className={
              'bg-' +
              typeicon +
              ' float-left w-[14px] h-[14px] bg-center bg-no-repeat block mt-[7px] ml-[40px] mr-[8px] '
            }
          ></div>
          <span className="mt-[7px] text-primary text-[11px] italic capitalize">
            {typename}
          </span>
        </div>
        <div
          className={
            'lg:bg-cover relative lg:absolute bg-center bg-cover lg:bg-center opacity-80 w-[338px] lg:w-[729px] xl:w-[1119px] h-[210px] lg:h-[315px]'
          }
          style={{
            backgroundImage: 'url(//cms.ariscorp.de/assets/' + image + ')',
          }}
        ></div>
        <div className="scale-0 lg:scale-100 float-right h-[33px] w-[120px] absolute right-[10px] z-5 opacity-60 bg-type-bg bg-no-repeat">
          <div
            className={
              'bg-type-post float-left w-[14px] h-[14px] bg-center bg-no-repeat block mt-[7px] ml-[40px] mr-[8px] '
            }
          ></div>
          <span className="mt-[7px] text-primary text-[11px] italic capitalize">
            {typename}
          </span>
        </div>
        <div className="lg:table-cell lg:align-middle absolute lg:relative w-[338px] h-[90px] mt-[10px] lg:w-[729px] lg:h-[315px] lg:mt-0 xl:w-[1119px] xl:h-[315px]">
          <div className="block align-middle absolute lg:static mt-[26px] w-full lg:mt-0 lg:w-[729px] xl:w-[1119px] text-white lg:text-6xl lg:uppercase lg:text-center text-lg">
            {title}
          </div>
        </div>
        <div className="w-[338px] h-[90px] mt-[10px] lg:bg-black lg:bg-repeat lg:bg-opacity-80 lg:p-[20px] lg:h-[10px] lg:w-[689px] xl:w-[1079px] absolute lg:text-xs lg:mt-[-50px] lg:box-content">
          <div className="pl-[18px] pb-[3px] font-bold float-right text-[11px] text-[#5e7a8d]">
            Channel: <span className="font-normal text-primary">{channel}</span>
          </div>
          <div className="text-[#5e7a8d] text-[11px] lg:text-xs font-bold border-r-[1px] border-solid border-[#4a4241] float-left pr-[13px]">
            Posted: <span className="font-normal text-primary">{moment(posted).from((moment().add(930, 'years')))}</span>
          </div>
        </div>
        <div className="w-[338px] h-[315px] lg:w-[729px] lg:h-[315px] xl:w-[1119px] xl:h-[315px] transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-lines absolute overflow-hidden z-10 top-[10px]">
          <div className="lg:w-[669px] xl:w-[1059px] px-[30px] transition duration-300 opacity-0 group-hover:opacity-100 text-center table h-full">
            <div className="relative ease-in transition-all duration-100 group-hover:pt-0 delay-200 text-[#7e98a2] text-xs lg:text-md table-cell align-middle pt-[30px] opacity-0 group-hover:opacity-100">
              {description}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export { OneThird, TwoThirds, ThreeThirds }
