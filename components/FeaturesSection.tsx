"use client";

import { motion } from "framer-motion";
import { Code2, Shapes, LineChart } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Tư duy Lập trình",
    description: "Giải quyết các câu đố logic để điều khiển phi thuyền. Xây dựng tư duy thuật toán tự nhiên không cần viết code khô khan.",
    icon: <Code2 className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-500/20 to-transparent",
    borderColor: "border-emerald-500/20",
    imagePlaceholder: "Màn hình Game Giải đố Code",
    align: "left",
  },
  {
    id: 2,
    title: "Toán học Trực quan",
    description: "Khám phá các hành tinh thông qua thử thách tìm phân số, nhận diện hình học và logic toán học cơ bản.",
    icon: <Shapes className="w-8 h-8 text-amber-400" />,
    color: "from-amber-500/20 to-transparent",
    borderColor: "border-amber-500/20",
    imagePlaceholder: "Màn hình Trò chơi Tìm Phân số",
    align: "right",
  },
  {
    id: 3,
    title: "Góc Phụ Huynh Data-Driven",
    description: "Theo dõi tiến độ học tập, điểm mạnh và các kỹ năng cần cải thiện của trẻ qua bảng điều khiển chi tiết.",
    icon: <LineChart className="w-8 h-8 text-violet-400" />,
    color: "from-violet-500/20 to-transparent",
    borderColor: "border-violet-500/20",
    imagePlaceholder: "Dashboard Báo cáo Phụ huynh",
    align: "left",
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative z-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Hành trang cho <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Phi hành gia nhí</span></h2>
          <p className="text-slate-400 text-lg">Phương pháp học tập qua trò chơi được thiết kế bởi các chuyên gia giáo dục.</p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex flex-col ${feature.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
            >
              <div className="flex-1 w-full">
                <div className={`p-8 rounded-3xl backdrop-blur-xl bg-slate-900/40 border ${feature.borderColor} shadow-2xl relative overflow-hidden group`}>
                  <div className={`absolute top-0 ${feature.align === 'left' ? 'left-0' : 'right-0'} w-64 h-64 bg-gradient-to-br ${feature.color} blur-[80px] -z-10 group-hover:opacity-75 transition-opacity opacity-50`} />
                  
                  <div className="bg-slate-950/50 p-3 rounded-2xl inline-block mb-6 border border-white/5">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/50 to-slate-700/50" />
                  <div className="relative z-10 text-slate-400 font-medium flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-slate-500 rounded-sm border-dashed" />
                    </div>
                    {feature.imagePlaceholder}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
