"use client";

import {
  FileText,
  Image,
  Video,
  Sparkles,
  MessageSquare,
  PenTool,
  Languages,
  BookOpen,
  Wand2,
  Palette,
  Camera,
  Scissors,
  Clapperboard,
  Music,
  Mic,
  ArrowUpRight,
  Search,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface Tool {
  name: string;
  desc: string;
  url: string;
  icon: React.ReactNode;
  tag?: string;
}

type ThemeColor = "teal" | "rose" | "amber";

const themeStyles: Record<
  ThemeColor,
  {
    gradient: string;
    iconBg: string;
    iconText: string;
    ring: string;
    hoverBorder: string;
    hoverShadow: string;
    hoverText: string;
    tagBg: string;
    tagText: string;
    tagRing: string;
    categoryIconBg: string;
    categoryIconText: string;
    cardBorder: string;
    cardBg: string;
    hoverBg: string;
    glow: string;
  }
> = {
  teal: {
    gradient: "from-teal-500/10 to-emerald-500/5",
    iconBg: "bg-teal-500/10",
    iconText: "text-teal-300",
    ring: "ring-teal-500/20",
    hoverBorder: "hover:border-teal-500/40",
    hoverShadow: "hover:shadow-teal-500/10",
    hoverText: "group-hover:text-teal-300",
    tagBg: "bg-teal-500/10",
    tagText: "text-teal-300",
    tagRing: "ring-teal-500/20",
    categoryIconBg: "bg-teal-500/10",
    categoryIconText: "text-teal-400",
    cardBorder: "border-zinc-800/60",
    cardBg: "bg-zinc-900/40",
    hoverBg: "hover:bg-zinc-800/60",
    glow: "group-hover:shadow-teal-500/10",
  },
  rose: {
    gradient: "from-rose-500/10 to-pink-500/5",
    iconBg: "bg-rose-500/10",
    iconText: "text-rose-300",
    ring: "ring-rose-500/20",
    hoverBorder: "hover:border-rose-500/40",
    hoverShadow: "hover:shadow-rose-500/10",
    hoverText: "group-hover:text-rose-300",
    tagBg: "bg-rose-500/10",
    tagText: "text-rose-300",
    tagRing: "ring-rose-500/20",
    categoryIconBg: "bg-rose-500/10",
    categoryIconText: "text-rose-400",
    cardBorder: "border-zinc-800/60",
    cardBg: "bg-zinc-900/40",
    hoverBg: "hover:bg-zinc-800/60",
    glow: "group-hover:shadow-rose-500/10",
  },
  amber: {
    gradient: "from-amber-500/10 to-orange-500/5",
    iconBg: "bg-amber-500/10",
    iconText: "text-amber-300",
    ring: "ring-amber-500/20",
    hoverBorder: "hover:border-amber-500/40",
    hoverShadow: "hover:shadow-amber-500/10",
    hoverText: "group-hover:text-amber-300",
    tagBg: "bg-amber-500/10",
    tagText: "text-amber-300",
    tagRing: "ring-amber-500/20",
    categoryIconBg: "bg-amber-500/10",
    categoryIconText: "text-amber-400",
    cardBorder: "border-zinc-800/60",
    cardBg: "bg-zinc-900/40",
    hoverBg: "hover:bg-zinc-800/60",
    glow: "group-hover:shadow-amber-500/10",
  },
};

const textTools: Tool[] = [
  { name: "ChatGPT", desc: "OpenAI 开发的对话式 AI，支持文本生成与分析", url: "https://chatgpt.com", icon: <MessageSquare className="w-6 h-6" />, tag: "热门" },
  { name: "Claude", desc: "Anthropic 出品，擅长长文本理解与思维链", url: "https://claude.ai", icon: <BookOpen className="w-6 h-6" /> },
  { name: "Gemini", desc: "Google 多模态 AI，集成搜索与创作", url: "https://gemini.google.com", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Jasper", desc: "AI 营销文案写作，快速生成广告与博客", url: "https://www.jasper.ai", icon: <PenTool className="w-6 h-6" /> },
  { name: "DeepL Write", desc: "AI 写作助手，语法修正与文风优化", url: "https://www.deepl.com/write", icon: <Languages className="w-6 h-6" /> },
  { name: "Notion AI", desc: "Notion 集成的 AI 写作与知识管理", url: "https://www.notion.so/product/ai", icon: <FileText className="w-6 h-6" /> },
];

const imageTools: Tool[] = [
  { name: "Midjourney", desc: "艺术感十足的 AI 绘画，适合创意场景", url: "https://www.midjourney.com", icon: <Palette className="w-6 h-6" />, tag: "热门" },
  { name: "DALL·E 3", desc: "OpenAI 图像生成模型，跟随指令绘画", url: "https://openai.com/dall-e-3", icon: <Wand2 className="w-6 h-6" /> },
  { name: "Stable Diffusion", desc: "开源图像生成模型，可本地部署", url: "https://stability.ai", icon: <Image className="w-6 h-6" /> },
  { name: "Remove.bg", desc: "一键自动去除图片背景", url: "https://www.remove.bg", icon: <Camera className="w-6 h-6" /> },
  { name: "Upscayl", desc: "AI 图片无损放大，提升清晰度", url: "https://upscayl.org", icon: <Zap className="w-6 h-6" /> },
  { name: "Leonardo.ai", desc: "游戏资产与艺术创作 AI 平台", url: "https://leonardo.ai", icon: <Sparkles className="w-6 h-6" /> },
];

const videoTools: Tool[] = [
  { name: "Sora", desc: "OpenAI 文生视频模型，生成高质量短片", url: "https://openai.com/sora", icon: <Video className="w-6 h-6" />, tag: "热门" },
  { name: "Runway", desc: "专业 AI 视频编辑，含生成与特效", url: "https://runwayml.com", icon: <Clapperboard className="w-6 h-6" /> },
  { name: "Pika", desc: "快速文生视频，支持图片动画", url: "https://pika.art", icon: <Wand2 className="w-6 h-6" /> },
  { name: "HeyGen", desc: "AI 数字人视频，多语言口型同步", url: "https://www.heygen.com", icon: <Mic className="w-6 h-6" /> },
  { name: "CapCut", desc: "字节跳动出品，内置 AI 剪辑功能", url: "https://www.capcut.com", icon: <Scissors className="w-6 h-6" /> },
  { name: "Suno", desc: "AI 音乐生成，输入文字创作歌曲", url: "https://suno.ai", icon: <Music className="w-6 h-6" /> },
];

function ToolCard({ tool, theme }: { tool: Tool; theme: ThemeColor }) {
  const s = themeStyles[theme];
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col gap-3 rounded-2xl border ${s.cardBorder} ${s.cardBg} backdrop-blur-sm p-5 transition-all duration-300 ${s.hoverBorder} ${s.hoverBg} hover:shadow-lg ${s.glow} hover:-translate-y-1`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} ${s.iconText} ring-1 ${s.ring}`}>
            {tool.icon}
          </div>
          <div>
            <h3 className="font-semibold text-zinc-100 text-sm md:text-base">{tool.name}</h3>
          </div>
        </div>
        <ArrowUpRight className={`h-4 w-4 text-zinc-500 transition-colors ${s.hoverText}`} />
      </div>
      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">{tool.desc}</p>
      {tool.tag && (
        <span className={`absolute top-4 right-10 rounded-full ${s.tagBg} px-2 py-0.5 text-[10px] font-medium ${s.tagText} ring-1 ${s.tagRing}`}>
          {tool.tag}
        </span>
      )}
    </a>
  );
}

function CategorySection({
  title,
  icon,
  tools,
  theme,
}: {
  title: string;
  icon: React.ReactNode;
  tools: Tool[];
  theme: ThemeColor;
}) {
  const s = themeStyles[theme];
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 px-1">
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${s.categoryIconBg} ${s.categoryIconText}`}>
          {icon}
        </div>
        <h2 className="text-lg md:text-xl font-bold text-zinc-100">{title}</h2>
        <div className={`ml-2 h-1.5 w-1.5 rounded-full ${s.categoryIconText.replace("text-", "bg-")}`} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {tools.map((t) => (
          <ToolCard key={t.name} tool={t} theme={theme} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const allTools = [
    ...textTools.map((t) => ({ ...t, theme: "teal" as ThemeColor })),
    ...imageTools.map((t) => ({ ...t, theme: "rose" as ThemeColor })),
    ...videoTools.map((t) => ({ ...t, theme: "amber" as ThemeColor })),
  ];
  const filtered = query.trim()
    ? allTools.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.desc.toLowerCase().includes(query.toLowerCase())
      )
    : null;

  return (
    <main className="flex-1">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030712]" />
        {/* 多色光晕 */}
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-teal-600/15 blur-[100px]" />
        <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-rose-600/10 blur-[100px]" />
        <div className="absolute -bottom-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-600/10 blur-[100px]" />
        {/* 噪点纹理 */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        
        <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-900/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-zinc-300 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>汇集全球优质 AI 工具</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-white to-amber-300">
              AI Hub
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-sm md:text-base text-zinc-400 leading-relaxed">
            发现、比较并使用最实用的 AI 工具，覆盖文本创作、图像生成、视频制作等核心领域
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-md">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-zinc-300" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜索工具名称或功能..."
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 py-2.5 pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none ring-0 transition-all focus:border-zinc-600 focus:bg-zinc-900 backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" style={{ boxShadow: "0 0 20px rgba(255,255,255,0.03)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-20 space-y-14">
        {filtered ? (
          <section className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <Search className="h-5 w-5 text-zinc-400" />
              <h2 className="text-lg md:text-xl font-bold text-zinc-100">
                搜索结果
              </h2>
              <span className="text-xs text-zinc-500">({filtered.length} 个)</span>
            </div>
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 py-12 text-center text-sm text-zinc-500">
                未找到匹配的工具，请尝试其他关键词
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {filtered.map((t) => (
                  <ToolCard key={t.name} tool={t} theme={t.theme} />
                ))}
              </div>
            )}
          </section>
        ) : (
          <>
            <CategorySection
              title="文本工具"
              icon={<FileText className="h-5 w-5" />}
              tools={textTools}
              theme="teal"
            />
            <CategorySection
              title="图像工具"
              icon={<Image className="h-5 w-5" />}
              tools={imageTools}
              theme="rose"
            />
            <CategorySection
              title="视频工具"
              icon={<Video className="h-5 w-5" />}
              tools={videoTools}
              theme="amber"
            />
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800/40 bg-[#030712] py-8">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs text-zinc-600">
          <p>© AI Hub. 仅作工具导航，请遵守各平台使用条款。</p>
        </div>
      </footer>
    </main>
  );
}
