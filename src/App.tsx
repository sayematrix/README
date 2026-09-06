import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Download, 
  Eye, 
  Code, 
  Columns, 
  Moon, 
  Sun, 
  ExternalLink,
  BookOpen,
  Terminal,
  Layers,
  Sparkles,
  User,
  ShieldAlert
} from 'lucide-react';

const INITIAL_MARKDOWN = `# Hi, I'm Sayem 👋

**Entrepreneur • Investor • Developer • OS Builder • Creator**

> *I learn, research, build, and turn ideas into systems, products, and businesses.*

---

### About Me

I build at the intersection of **quantitative finance, artificial intelligence, software engineering, and financial technology**. 

My focus is centered on understanding hard problems from first principles, building practical and resilient systems, and translating research into enduring products and ventures.

\`\`\`
AI  ×  Quant Finance  ×  FinTech  ×  Algorithmic Trading  ×  Software  ×  Data  ×  Systems
\`\`\`

---

### Core Focus & Expertise

- **Primary Direction:** Quantitative Finance & Algorithmic / Systematic Trading
- **Focus Areas:** Financial Intelligence • AI & Machine Learning • Automation • FinTech • Data & Analytics • Product Development
- **Supporting Disciplines:** Quantitative Analysis • Digital Systems • Applied Research • Software & Systems Architecture

---

### What I'm Building

#### 🏛️ **SANR Corporation Limited**
The foundation for my long-term business ventures, future enterprises, technology initiatives, and strategic investments.

#### ⚡ **SAYEMATRIX**
My personal digital ecosystem for deep learning, active experimentation, system building, research, and knowledge synthesis.

---

### Current Interests & Exploration

- Systematic trading strategies, quantitative modeling, and risk frameworks
- Real-time automated systems and high-throughput data processing
- Applied artificial intelligence for financial intelligence and automated workflows
- Modular digital systems architecture and developer tooling

---

### Selected Areas

| Focus Area | Domains & Methodologies |
| :--- | :--- |
| **Quantitative Finance** | Algorithmic trading, statistical modeling, execution strategies, risk architecture |
| **AI & Automation** | Machine learning, data pipelines, workflow automation, intelligent decision systems |
| **Systems & Engineering** | High-reliability backends, scalable software architecture, data infrastructure |

---

### Connect

- **Website:** [sayematrix.com](https://example.com) *(placeholder)*
- **LinkedIn:** [linkedin.com/in/sayem](https://linkedin.com) *(placeholder)*
- **X / Twitter:** [@sayem](https://x.com) *(placeholder)*
- **Email:** [contact@sanrcorp.com](mailto:contact@sanrcorp.com) *(placeholder)*

---

<div align="center">
  <sub>Crafted for substance, clarity, and longevity.</sub>
</div>`;

export default function App() {
  const [markdown, setMarkdown] = useState<string>(INITIAL_MARKDOWN);
  const [copied, setCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'preview' | 'raw' | 'split'>('preview');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = markdown;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen font-sans ${isDark ? 'bg-[#0d1117] text-[#c9d1d9]' : 'bg-[#f6f8fa] text-[#24292f]'}`}>
      {/* Top Navigation Bar */}
      <header className={`sticky top-0 z-40 border-b px-4 py-2.5 backdrop-blur transition-colors ${
        isDark ? 'bg-[#161b22]/90 border-[#30363d]' : 'bg-white/90 border-[#d0d7de]'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              isDark ? 'bg-[#21262d] text-white border border-[#30363d]' : 'bg-[#eaeef2] text-[#24292f] border border-[#d0d7de]'
            }`}>
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight">Sayem</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  isDark ? 'bg-[#21262d] text-[#8b949e] border border-[#30363d]' : 'bg-[#eaeef2] text-[#57606a] border border-[#d0d7de]'
                }`}>
                  Profile README
                </span>
              </div>
              <p className={`text-xs ${isDark ? 'text-[#8b949e]' : 'text-[#57606a]'}`}>
                Quantitative Finance • FinTech • Systems Architecture • Entrepreneur
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {/* View Mode Toggle */}
            <div className={`flex items-center rounded-lg p-0.5 border ${
              isDark ? 'bg-[#0d1117] border-[#30363d]' : 'bg-[#eaeef2] border-[#d0d7de]'
            }`}>
              <button
                id="btn-view-preview"
                onClick={() => setViewMode('preview')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  viewMode === 'preview'
                    ? (isDark ? 'bg-[#21262d] text-white shadow-xs' : 'bg-white text-[#24292f] shadow-xs')
                    : (isDark ? 'text-[#8b949e] hover:text-[#c9d1d9]' : 'text-[#57606a] hover:text-[#24292f]')
                }`}
                title="Rendered GitHub preview"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Preview</span>
              </button>
              <button
                id="btn-view-split"
                onClick={() => setViewMode('split')}
                className={`hidden md:flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  viewMode === 'split'
                    ? (isDark ? 'bg-[#21262d] text-white shadow-xs' : 'bg-white text-[#24292f] shadow-xs')
                    : (isDark ? 'text-[#8b949e] hover:text-[#c9d1d9]' : 'text-[#57606a] hover:text-[#24292f]')
                }`}
                title="Split side-by-side view"
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Split</span>
              </button>
              <button
                id="btn-view-raw"
                onClick={() => setViewMode('raw')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  viewMode === 'raw'
                    ? (isDark ? 'bg-[#21262d] text-white shadow-xs' : 'bg-white text-[#24292f] shadow-xs')
                    : (isDark ? 'text-[#8b949e] hover:text-[#c9d1d9]' : 'text-[#57606a] hover:text-[#24292f]')
                }`}
                title="Raw Markdown editor"
              >
                <Code className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Raw Markdown</span>
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              id="btn-toggle-theme"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={`p-1.5 rounded-lg border transition-colors ${
                isDark 
                  ? 'bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d]' 
                  : 'bg-white border-[#d0d7de] text-[#24292f] hover:bg-[#eaeef2]'
              }`}
              title={`Switch to ${isDark ? 'GitHub Light' : 'GitHub Dark'} theme`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Download Button */}
            <button
              id="btn-download-readme"
              onClick={handleDownload}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                isDark
                  ? 'bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d]'
                  : 'bg-white border-[#d0d7de] text-[#24292f] hover:bg-[#eaeef2]'
              }`}
              title="Download README.md file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            {/* Copy Button */}
            <button
              id="btn-copy-readme"
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                copied
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-[#238636] hover:bg-[#2ea043] text-white shadow-sm'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy README.md'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: GitHub User Profile Sidebar Simulation */}
          <div className="lg:col-span-3 space-y-4">
            <div className={`p-4 rounded-xl border ${
              isDark ? 'bg-[#161b22] border-[#30363d]' : 'bg-white border-[#d0d7de]'
            }`}>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className={`w-24 h-24 rounded-full border-2 flex items-center justify-center text-3xl font-bold mb-3 shadow-inner ${
                  isDark ? 'bg-[#21262d] border-[#30363d] text-white' : 'bg-[#eaeef2] border-[#d0d7de] text-[#24292f]'
                }`}>
                  S
                </div>
                <h1 className="text-xl font-bold tracking-tight">Sayem</h1>
                <p className={`text-sm mb-3 ${isDark ? 'text-[#8b949e]' : 'text-[#57606a]'}`}>
                  sayem
                </p>
                <p className="text-xs leading-relaxed font-medium mb-4">
                  Entrepreneur • Investor • Developer • OS Builder • Creator
                </p>

                <div className={`w-full pt-3 border-t text-xs space-y-2.5 ${
                  isDark ? 'border-[#30363d] text-[#8b949e]' : 'border-[#d0d7de] text-[#57606a]'
                }`}>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>SANR Corporation Limited</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>SAYEMATRIX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Quant Finance × AI × Systems</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips Box */}
            <div className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
              isDark ? 'bg-[#161b22]/70 border-[#30363d] text-[#8b949e]' : 'bg-white border-[#d0d7de] text-[#57606a]'
            }`}>
              <div className="flex items-center gap-1.5 font-semibold mb-1.5 text-[#2ea043]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>How to use this README</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-[11px]">
                <li>Create a public repo on GitHub named <code className="px-1 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono">sayem</code></li>
                <li>Click <strong>Copy README.md</strong> above</li>
                <li>Paste it into <code className="px-1 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono">README.md</code> and commit</li>
              </ol>
            </div>
          </div>

          {/* Right Column: README Card Container */}
          <div className="lg:col-span-9 space-y-4">
            
            {/* Split or Single View layout */}
            <div className={`grid gap-4 ${viewMode === 'split' ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1'}`}>
              
              {/* Raw Markdown Editor (Visible in 'raw' or 'split' view) */}
              {(viewMode === 'raw' || viewMode === 'split') && (
                <div className={`rounded-xl border overflow-hidden flex flex-col ${
                  isDark ? 'bg-[#161b22] border-[#30363d]' : 'bg-white border-[#d0d7de]'
                }`}>
                  <div className={`flex items-center justify-between px-4 py-2 border-b text-xs font-mono font-medium ${
                    isDark ? 'bg-[#0d1117] border-[#30363d] text-[#8b949e]' : 'bg-[#f6f8fa] border-[#d0d7de] text-[#57606a]'
                  }`}>
                    <span>Raw Markdown (Editable)</span>
                    <span>{markdown.length} chars</span>
                  </div>
                  <textarea
                    id="raw-markdown-editor"
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    rows={viewMode === 'split' ? 32 : 24}
                    className={`w-full p-4 font-mono text-xs leading-relaxed resize-y focus:outline-hidden ${
                      isDark 
                        ? 'bg-[#0d1117] text-[#c9d1d9] focus:ring-1 focus:ring-[#58a6ff]' 
                        : 'bg-white text-[#24292f] focus:ring-1 focus:ring-[#0969da]'
                    }`}
                    spellCheck={false}
                  />
                </div>
              )}

              {/* Rendered GitHub Preview (Visible in 'preview' or 'split' view) */}
              {(viewMode === 'preview' || viewMode === 'split') && (
                <div className={`rounded-xl border overflow-hidden shadow-xs ${
                  isDark ? 'bg-[#0d1117] border-[#30363d]' : 'bg-white border-[#d0d7de]'
                }`}>
                  {/* GitHub README Box Header */}
                  <div className={`flex items-center justify-between px-4 py-2.5 border-b text-xs font-medium ${
                    isDark ? 'bg-[#161b22] border-[#30363d] text-[#8b949e]' : 'bg-[#f6f8fa] border-[#d0d7de] text-[#57606a]'
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-xs">sayem</span>
                      <span>/</span>
                      <span className="font-mono">README.md</span>
                    </div>
                    <span className="text-[11px] opacity-75">GitHub Profile Render</span>
                  </div>

                  {/* Rendered Content with GitHub Primer-like styling */}
                  <div className="p-6 md:p-8 space-y-6 text-sm leading-relaxed">
                    
                    {/* Header */}
                    <div>
                      <h1 className={`text-2xl md:text-3xl font-bold pb-2 tracking-tight ${
                        isDark ? 'text-white' : 'text-[#1f2328]'
                      }`}>
                        Hi, I'm Sayem 👋
                      </h1>
                      <p className={`text-base font-semibold mt-1 ${
                        isDark ? 'text-[#8b949e]' : 'text-[#57606a]'
                      }`}>
                        Entrepreneur • Investor • Developer • OS Builder • Creator
                      </p>
                    </div>

                    {/* Blockquote Tagline */}
                    <div className={`pl-4 py-1 border-l-4 italic text-sm ${
                      isDark 
                        ? 'border-[#388bfd] text-[#8b949e] bg-[#161b22]/40 rounded-r' 
                        : 'border-[#0969da] text-[#57606a] bg-[#f6f8fa] rounded-r'
                    }`}>
                      "I learn, research, build, and turn ideas into systems, products, and businesses."
                    </div>

                    <hr className={isDark ? 'border-[#30363d]' : 'border-[#d0d7de]'} />

                    {/* About Me */}
                    <div className="space-y-3">
                      <h2 className={`text-lg font-bold flex items-center gap-2 pb-1 border-b ${
                        isDark ? 'text-white border-[#21262d]' : 'text-[#1f2328] border-[#eaeef2]'
                      }`}>
                        About Me
                      </h2>
                      <p className={isDark ? 'text-[#c9d1d9]' : 'text-[#24292f]'}>
                        I build at the intersection of <strong className={isDark ? 'text-white font-semibold' : 'text-black font-semibold'}>quantitative finance, artificial intelligence, software engineering, and financial technology</strong>.
                      </p>
                      <p className={isDark ? 'text-[#8b949e]' : 'text-[#57606a]'}>
                        My focus is centered on understanding hard problems from first principles, building practical and resilient systems, and translating research into enduring products and ventures.
                      </p>

                      {/* Monospace banner */}
                      <div className={`p-3 rounded-lg font-mono text-xs overflow-x-auto text-center border ${
                        isDark 
                          ? 'bg-[#161b22] text-[#58a6ff] border-[#30363d]' 
                          : 'bg-[#f6f8fa] text-[#0969da] border-[#d0d7de]'
                      }`}>
                        AI &nbsp;×&nbsp; Quant Finance &nbsp;×&nbsp; FinTech &nbsp;×&nbsp; Algorithmic Trading &nbsp;×&nbsp; Software &nbsp;×&nbsp; Data &nbsp;×&nbsp; Systems
                      </div>
                    </div>

                    <hr className={isDark ? 'border-[#30363d]' : 'border-[#d0d7de]'} />

                    {/* Core Focus & Expertise */}
                    <div className="space-y-3">
                      <h2 className={`text-lg font-bold pb-1 border-b ${
                        isDark ? 'text-white border-[#21262d]' : 'text-[#1f2328] border-[#eaeef2]'
                      }`}>
                        Core Focus & Expertise
                      </h2>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>
                          <strong className={isDark ? 'text-white' : 'text-black'}>Primary Direction:</strong>{' '}
                          Quantitative Finance & Algorithmic / Systematic Trading
                        </li>
                        <li>
                          <strong className={isDark ? 'text-white' : 'text-black'}>Focus Areas:</strong>{' '}
                          Financial Intelligence • AI & Machine Learning • Automation • FinTech • Data & Analytics • Product Development
                        </li>
                        <li>
                          <strong className={isDark ? 'text-white' : 'text-black'}>Supporting Disciplines:</strong>{' '}
                          Quantitative Analysis • Digital Systems • Applied Research • Software & Systems Architecture
                        </li>
                      </ul>
                    </div>

                    <hr className={isDark ? 'border-[#30363d]' : 'border-[#d0d7de]'} />

                    {/* What I'm Building */}
                    <div className="space-y-4">
                      <h2 className={`text-lg font-bold pb-1 border-b ${
                        isDark ? 'text-white border-[#21262d]' : 'text-[#1f2328] border-[#eaeef2]'
                      }`}>
                        What I'm Building
                      </h2>
                      
                      <div className={`p-3.5 rounded-lg border ${
                        isDark ? 'bg-[#161b22]/50 border-[#30363d]' : 'bg-[#f6f8fa] border-[#d0d7de]'
                      }`}>
                        <div className="flex items-center gap-2 font-semibold text-sm mb-1">
                          <span>🏛️</span>
                          <span className={isDark ? 'text-white' : 'text-[#1f2328]'}>SANR Corporation Limited</span>
                        </div>
                        <p className={`text-xs leading-relaxed ${isDark ? 'text-[#8b949e]' : 'text-[#57606a]'}`}>
                          The foundation for my long-term business ventures, future enterprises, technology initiatives, and strategic investments.
                        </p>
                      </div>

                      <div className={`p-3.5 rounded-lg border ${
                        isDark ? 'bg-[#161b22]/50 border-[#30363d]' : 'bg-[#f6f8fa] border-[#d0d7de]'
                      }`}>
                        <div className="flex items-center gap-2 font-semibold text-sm mb-1">
                          <span>⚡</span>
                          <span className={isDark ? 'text-white' : 'text-[#1f2328]'}>SAYEMATRIX</span>
                        </div>
                        <p className={`text-xs leading-relaxed ${isDark ? 'text-[#8b949e]' : 'text-[#57606a]'}`}>
                          My personal digital ecosystem for deep learning, active experimentation, system building, research, and knowledge synthesis.
                        </p>
                      </div>
                    </div>

                    <hr className={isDark ? 'border-[#30363d]' : 'border-[#d0d7de]'} />

                    {/* Current Interests & Exploration */}
                    <div className="space-y-3">
                      <h2 className={`text-lg font-bold pb-1 border-b ${
                        isDark ? 'text-white border-[#21262d]' : 'text-[#1f2328] border-[#eaeef2]'
                      }`}>
                        Current Interests & Exploration
                      </h2>
                      <ul className="space-y-1.5 list-disc list-inside text-xs leading-relaxed">
                        <li>Systematic trading strategies, quantitative modeling, and risk frameworks</li>
                        <li>Real-time automated systems and high-throughput data processing</li>
                        <li>Applied artificial intelligence for financial intelligence and automated workflows</li>
                        <li>Modular digital systems architecture and developer tooling</li>
                      </ul>
                    </div>

                    <hr className={isDark ? 'border-[#30363d]' : 'border-[#d0d7de]'} />

                    {/* Selected Areas (Table) */}
                    <div className="space-y-3">
                      <h2 className={`text-lg font-bold pb-1 border-b ${
                        isDark ? 'text-white border-[#21262d]' : 'text-[#1f2328] border-[#eaeef2]'
                      }`}>
                        Selected Areas
                      </h2>
                      <div className="overflow-x-auto">
                        <table className={`w-full text-xs text-left border-collapse border rounded-lg ${
                          isDark ? 'border-[#30363d]' : 'border-[#d0d7de]'
                        }`}>
                          <thead>
                            <tr className={isDark ? 'bg-[#161b22]' : 'bg-[#f6f8fa]'}>
                              <th className={`p-2.5 font-semibold border ${isDark ? 'border-[#30363d] text-white' : 'border-[#d0d7de] text-[#1f2328]'}`}>
                                Focus Area
                              </th>
                              <th className={`p-2.5 font-semibold border ${isDark ? 'border-[#30363d] text-white' : 'border-[#d0d7de] text-[#1f2328]'}`}>
                                Domains & Methodologies
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className={`p-2.5 font-medium border ${isDark ? 'border-[#30363d] text-white' : 'border-[#d0d7de] text-[#1f2328]'}`}>
                                Quantitative Finance
                              </td>
                              <td className={`p-2.5 border ${isDark ? 'border-[#30363d] text-[#8b949e]' : 'border-[#d0d7de] text-[#57606a]'}`}>
                                Algorithmic trading, statistical modeling, execution strategies, risk architecture
                              </td>
                            </tr>
                            <tr className={isDark ? 'bg-[#161b22]/30' : 'bg-[#f6f8fa]/50'}>
                              <td className={`p-2.5 font-medium border ${isDark ? 'border-[#30363d] text-white' : 'border-[#d0d7de] text-[#1f2328]'}`}>
                                AI & Automation
                              </td>
                              <td className={`p-2.5 border ${isDark ? 'border-[#30363d] text-[#8b949e]' : 'border-[#d0d7de] text-[#57606a]'}`}>
                                Machine learning, data pipelines, workflow automation, intelligent decision systems
                              </td>
                            </tr>
                            <tr>
                              <td className={`p-2.5 font-medium border ${isDark ? 'border-[#30363d] text-white' : 'border-[#d0d7de] text-[#1f2328]'}`}>
                                Systems & Engineering
                              </td>
                              <td className={`p-2.5 border ${isDark ? 'border-[#30363d] text-[#8b949e]' : 'border-[#d0d7de] text-[#57606a]'}`}>
                                High-reliability backends, scalable software architecture, data infrastructure
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <hr className={isDark ? 'border-[#30363d]' : 'border-[#d0d7de]'} />

                    {/* Connect Section */}
                    <div className="space-y-3">
                      <h2 className={`text-lg font-bold pb-1 border-b ${
                        isDark ? 'text-white border-[#21262d]' : 'text-[#1f2328] border-[#eaeef2]'
                      }`}>
                        Connect
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className={`p-2 rounded border flex items-center justify-between ${
                          isDark ? 'bg-[#161b22]/50 border-[#30363d]' : 'bg-[#f6f8fa] border-[#d0d7de]'
                        }`}>
                          <span className="font-semibold">Website</span>
                          <span className={`font-mono ${isDark ? 'text-[#58a6ff]' : 'text-[#0969da]'}`}>sayematrix.com</span>
                        </div>
                        <div className={`p-2 rounded border flex items-center justify-between ${
                          isDark ? 'bg-[#161b22]/50 border-[#30363d]' : 'bg-[#f6f8fa] border-[#d0d7de]'
                        }`}>
                          <span className="font-semibold">LinkedIn</span>
                          <span className={`font-mono ${isDark ? 'text-[#58a6ff]' : 'text-[#0969da]'}`}>linkedin.com/in/sayem</span>
                        </div>
                        <div className={`p-2 rounded border flex items-center justify-between ${
                          isDark ? 'bg-[#161b22]/50 border-[#30363d]' : 'bg-[#f6f8fa] border-[#d0d7de]'
                        }`}>
                          <span className="font-semibold">X / Twitter</span>
                          <span className={`font-mono ${isDark ? 'text-[#58a6ff]' : 'text-[#0969da]'}`}>@sayem</span>
                        </div>
                        <div className={`p-2 rounded border flex items-center justify-between ${
                          isDark ? 'bg-[#161b22]/50 border-[#30363d]' : 'bg-[#f6f8fa] border-[#d0d7de]'
                        }`}>
                          <span className="font-semibold">Email</span>
                          <span className={`font-mono ${isDark ? 'text-[#58a6ff]' : 'text-[#0969da]'}`}>contact@sanrcorp.com</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className={`pt-4 border-t text-center text-xs ${
                      isDark ? 'border-[#30363d] text-[#8b949e]' : 'border-[#d0d7de] text-[#57606a]'
                    }`}>
                      <sub>Crafted for substance, clarity, and longevity.</sub>
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
