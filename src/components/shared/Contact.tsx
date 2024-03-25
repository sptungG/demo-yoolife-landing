type TContactProps = {};

const Contact = ({}: TContactProps) => {
  return (
    <div
      id="contact-us"
      className="mx-auto mb-14 mt-auto max-w-[1280px] -translate-y-[32px] px-3 lg:px-12"
    >
      <h3 className="mb-[18px] text-center text-[2.2rem] font-[700] leading-[1.2] text-gray-50 sm:text-[2.8125rem]">
        Liên hệ với chúng tôi
      </h3>
      <div className="mb-11 text-center text-[1.25rem] font-[300] text-gray-50">
        Tham gia ngay bây giờ để ưu đãi đặc biệt và được tư vấn một cách tốt
        nhất!
      </div>
      <form className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row xl:px-12">
        <input
          type="email"
          defaultValue=""
          className="min-h-12 flex-auto self-stretch rounded-full bg-gray-300/10 px-6 py-4 text-gray-50 outline-none backdrop-blur-sm placeholder:text-[1.25rem] hover:ring-1 focus:ring-1 focus:ring-green2"
          placeholder="Nhập Email của bạn..."
        />
        <button className="min-h-12 rounded-full bg-gradient-building px-8 py-4 text-[1.25rem] font-[500] text-gray-900">
          Gửi Email
        </button>
      </form>
    </div>
  );
};

export default Contact;
