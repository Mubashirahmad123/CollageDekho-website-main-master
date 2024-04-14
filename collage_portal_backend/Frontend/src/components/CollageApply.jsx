import '../../tailwind.apply.config';
import Worldwidelocation from '../images/worldwidelocation.png';
import Email from '../images/email.png';
import circledUserMaleSkinType from '../images/circledUserMaleSkinType.png';
import ringervolume from '../images/ringer-volume.png';
import cap from '../images/graduation-cap@2x.png';
import student from '../images/graduated-student@2x.png';

const ApplyForm = () => {
    return (
      <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-end pt-[147px] px-[231px] pb-[127px] box-border tracking-[normal] lg:pl-[115px] lg:pr-[115px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[57px] mq750:pr-[57px] mq750:box-border">
        <form className="m-0 w-[1025px] flex flex-col items-end justify-start pt-[57px] px-[306px] pb-[70px] box-border relative gap-[21px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pt-[37px] mq750:px-[76px] mq750:pb-[45px] mq750:box-border mq1050:pl-[153px] mq1050:pr-[153px] mq1050:box-border">
          <div className="w-[calc(100%_-_77px)] h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[77px] rounded-[18px] bg-olive" />
          <div className="w-[354px] flex flex-row items-start justify-end pt-0 px-[51px] pb-14 box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h2 className="m-0 h-[59px] flex-1 relative text-[36px] tracking-[0.08em] leading-[18px] font-normal font-fira-sans-extra-condensed text-white text-center flex items-center justify-center z-[1] mq450:text-[22px] mq450:leading-[11px] mq1050:text-[29px] mq1050:leading-[14px]">
              Apply Here
            </h2>
          </div>
          <div className="w-[399px] flex flex-row flex-wrap items-start justify-center pt-0 px-0 pb-[17px] box-border gap-[6px] max-w-full">
            <input
              className="w-[77px] [border:none] [outline:none] bg-[transparent] h-[45px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border font-fira-sans-extra-condensed text-xl text-white"
              placeholder=" Name"
              type="text"
            />
            <div className="flex-1 bg-gainsboro flex flex-row items-start justify-start py-0.5 px-px box-border min-w-[43px] z-[1]">
              <div className="h-[47px] w-[316px] relative bg-gainsboro hidden" />
              <img
                className="h-[43px] w-[43px] relative object-cover z-[2]"
                alt=""
                src={circledUserMaleSkinType}
              />
            </div>
          </div>
          <div className="w-[402px] flex flex-row items-end justify-start pt-0 px-0 pb-2 box-border gap-[6px] max-w-full">
            <input
              className="w-20 [border:none] [outline:none] bg-[transparent] h-[37px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border font-fira-sans-extra-condensed text-xl text-white"
              placeholder="Contact"
              type="text"
            />
            <div className="flex-1 bg-gainsboro flex flex-row items-start justify-start py-0.5 px-px z-[1]">
              <div className="h-[47px] w-[316px] relative bg-gainsboro hidden" />
              <img
                className="h-[43px] w-[43px] relative object-cover z-[2]"
                alt=""
                src={ringervolume}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start pt-0 px-0 pb-2 gap-[6px]">
            <div className="w-[90px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
              <div className="self-stretch flex flex-row items-start justify-start relative">
                <img
                  className="h-[404px] w-[242px] absolute !m-[0] bottom-[-194px] left-[-221px] object-cover z-[1]"
                  alt=""
                  src={student}
                />
                <input
                  className="w-[calc(100%_-_43px)] [border:none] [outline:none] font-fira-sans-extra-condensed text-xl bg-[transparent] h-9 flex-1 relative tracking-[0.08em] leading-[18px] text-whitesmoke text-center flex items-center justify-center min-w-[54px] p-0 z-[2] mq450:text-[16px] mq450:leading-[14px]"
                  placeholder="Email"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 bg-gainsboro flex flex-row items-start justify-start pt-px px-0 pb-0 box-border min-w-[43px] z-[1]">
              <div className="h-[47px] w-[316px] relative bg-gainsboro hidden" />
              <img
                className="h-[46px] w-[43px] relative object-cover z-[2]"
                alt=""
                src={Email}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start [row-gap:20px]">
            <input
              className="w-[98px] [border:none] [outline:none] bg-[transparent] h-[35px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border font-fira-sans-extra-condensed text-xl text-whitesmoke"
              placeholder="Stream"
              type="text"
            />
            <div className="flex-1 bg-gainsboro flex flex-row items-start justify-start pt-1 px-0.5 pb-0 box-border min-w-[43px] z-[1] ml-[-1px] mq450:ml-0">
              <div className="h-[47px] w-[316px] relative bg-gainsboro hidden" />
              <img
                className="h-[43px] w-[43px] relative object-cover z-[2]"
                alt=""
                src={cap}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start pt-0 px-0 pb-5 [row-gap:20px]">
            <input
              className="w-[91px] [border:none] [outline:none] bg-[transparent] h-10 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border font-fira-sans-extra-condensed text-xl text-whitesmoke"
              placeholder="Address"
              type="text"
            />
            <div className="flex-1 bg-gainsboro flex flex-row items-start justify-start pt-[3px] px-0 pb-0.5 box-border min-w-[42px] z-[1]">
              <div className="h-[47px] w-[316px] relative bg-gainsboro hidden" />
              <img
                className="h-[42px] w-[42px] relative object-cover z-[2]"
                alt=""
                src={Worldwidelocation}
              />
            </div>
          </div>
          <div className="w-[323px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <button className="cursor-pointer [border:none] pt-3.5 pb-[15px] pr-[22px] pl-[23px] bg-royalblue w-[121px] rounded-mid flex flex-row items-start justify-start box-border z-[1] hover:bg-dodgerblue">
              <div className="h-[52px] w-[121px] relative rounded-mid bg-royalblue hidden" />
              <b className="h-[23px] flex-1 relative text-[15px] tracking-[0.08em] leading-[18px] flex font-fira-sans-extra-condensed text-white text-center items-center justify-center z-[2]">
                SUBMIT
              </b>
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default ApplyForm;