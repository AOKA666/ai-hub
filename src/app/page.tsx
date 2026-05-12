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

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-200 hover:border-indigo-500/40 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-300 ring-1 ring-indigo-500/20">
            {tool.icon}
          </div>
          <div>
            <h3 className="font-semibold text-slate-100 text-sm md:text-base">{tool.name}</h3>
          </div>
        </div>
        <ArrowUpRight className="h-4 w-4 text-slate-500 transition-colors group-hover:text-indigo-400" />
      </div>
      <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{tool.desc}</p>
      {tool.tag && (
        <span className="absolute top-4 right-10 rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-medium text-indigo-300 ring-1 ring-indigo-500/20">
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
}: {
  title: string;
  icon: React.ReactNode;
  tools: Tool[];
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 px-1">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-indigo-400">
          {icon}
        </div>
        <h2 className="text-lg md:text-xl font-bold text-slate-100">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {tools.map((t) => (
          <ToolCard key={t.name} tool={t} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const allTools = [...textTools, ...imageTools, ...videoTools];
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
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-slate-950" />
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>汇集全球优质 AI 工具</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            AI Hub
          </h1>
          <p className="mx-auto max-w-xl text-sm md:text-base text-slate-400 leading-relaxed">
            发现、比较并使用最实用的 AI 工具，覆盖文本创作、图像生成、视频制作等核心领域
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜索工具名称或功能..."
                className="w-full rounded-xl border border-slate-800 bg-slate-900/80 py-2.5 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-0 transition-colors focus:border-indigo-500/40 focus:bg-slate-900"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pb-20 space-y-12">
        {filtered ? (
          <section className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <Search className="h-5 w-5 text-indigo-400" />
              <h2 className="text-lg md:text-xl font-bold text-slate-100">
                搜索结果
              </h2>
              <span className="text-xs text-slate-500">({filtered.length} 个)</span>
            </div>
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 py-12 text-center text-sm text-slate-500">
                未找到匹配的工具，请尝试其他关键词
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {filtered.map((t) => (
                  <ToolCard key={t.name} tool={t} />
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
            />
            <CategorySection
              title="图像工具"
              icon={<Image className="h-5 w-5" />}
              tools={imageTools}
            />
            <CategorySection
              title="视频工具"
              icon={<Video className="h-5 w-5" />}
              tools={videoTools}
            />
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 bg-slate-950 py-8">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs text-slate-500">
          <p> AI Hub. 仅作工具导航，请遵守各平台使用条款。</p>
        </div>
      </footer>
    </main>
  );
}
