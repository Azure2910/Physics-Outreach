"use client";

const benefits = [
  {
    title: "Học mà chơi",
    color: "text-[#03A9F4]",
    desc: "Các bài học được thiết kế như những trò chơi, giúp bạn tiếp thu kiến thức một cách tự nhiên mà không cảm thấy chán.",
  },
  {
    title: "Thực hành là chính",
    color: "text-[#FF9800]",
    desc: "Hơn 80% thời lượng khóa học là các thí nghiệm thực tế, giúp bạn hiểu rõ nguyên lý và ứng dụng của vật lý.",
  },
  {
    title: "Phát triển tư duy",
    color: "text-[#F44336]",
    desc: "Các bài tập được thiết kế để rèn luyện tư duy logic, khả năng giải quyết vấn đề và sự sáng tạo.",
  },
  {
    title: "Giáo viên giỏi",
    color: "text-[#4CAF50]",
    desc: "Đội ngũ giáo viên giàu kinh nghiệm, yêu trẻ, và có khả năng truyền cảm hứng, luôn sẵn sàng hỗ trợ bạn trên con đường chinh phục vật lý.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white my-10 md:my-20">
      <div className="w-full mx-auto px-5 md:px-10 max-w-[1280px]">
        <div className="mb-12">
          <p className="text-base font-semibold text-[#FF7F36] uppercase mb-2">
            Lợi ích khi tham gia
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Vững kiến thức, Tỏa sáng tương lai
          </h2>
          <p className="text-[#637381] text-base md:text-xl">
            Tham gia các khóa học, bạn sẽ nhận được những giá trị đặc biệt
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <div key={i} className="space-y-[20px]">
              <h3 className={`text-2xl ${item.color}`}>
                {item.title}
              </h3>
              <p className="text-[#637381]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
