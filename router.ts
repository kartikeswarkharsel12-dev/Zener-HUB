export type Intent =
  | 'coding'
  | 'research'
  | 'creative'
  | 'math'
  | 'casual'
  | 'image'
  | 'video'
  | 'audio'
  | 'legal'
  | 'medical'
  | 'finance'
  | 'science'
  | 'language'
  | 'summarize'
  | 'data'

export type ModelChoice =
  | 'gpt-4o'
  | 'perplexity'
  | 'gemini'
  | 'claude'
  | 'deepseek'
  | 'grok'
  | 'mistral'
  | 'llama'
  | 'dalle'
  | 'midjourney'
  | 'runway'
  | 'elevenlabs'
  | 'wolfram'
  | 'copilot'
  | 'cohere'
  | 'phi'
  | 'qwen'
  | 'solar'
  | 'yi'
  | 'gemma'

export interface RouteResult {
  intent: Intent
  model: ModelChoice
  reason: string
  confidence: 'high' | 'medium' | 'low'
  alternativeModel: ModelChoice
}

// ── KEYWORD BANKS ──────────────────────────────────────

const CODING_KEYWORDS = [
  'code', 'bug', 'error', 'fix', 'debug', 'function',
  'script', 'program', 'compile', 'loop', 'array',
  'api', 'backend', 'frontend', 'html', 'css',
  'react', 'node', 'git', 'typescript', 'python',
  'java', 'database', 'sql', 'deploy', 'server',
  'framework', 'library', 'component', 'class',
  'object', 'variable', 'syntax', 'runtime', 'build',
  'webpack', 'docker', 'kubernetes', 'cloud', 'aws',
  'firebase', 'mongodb', 'express', 'nextjs', 'redux',
  'algorithm', 'recursion', 'pointer', 'stack', 'queue',
  'linked list', 'binary', 'sorting', 'testing', 'jest',
  'flutter', 'swift', 'kotlin', 'rust', 'golang', 'php',
  'laravel', 'django', 'flask', 'spring', 'graphql',
  'rest', 'websocket', 'authentication', 'jwt', 'oauth',
  'refactor', 'optimize', 'performance', 'memory leak',
  'null pointer', 'undefined', 'import', 'export', 'module'
]

const RESEARCH_KEYWORDS = [
  'latest', 'news', 'current', 'today', 'recent',
  'who is', 'what is', 'when did', 'where is',
  'research', 'find', 'search', 'information',
  'statistics', 'data', 'study', 'report', 'article',
  'published', 'journal', 'paper', 'source', 'fact',
  'history', 'origin', 'discovered', 'invented', 'founded',
  'population', 'country', 'government', 'politics',
  'election', 'president', 'minister', 'law', 'policy',
  'economy', 'gdp', 'inflation', 'market', 'stock',
  'weather', 'temperature', 'forecast', 'climate',
  'sport', 'score', 'match', 'tournament', 'championship',
  'celebrity', 'movie', 'released', 'launched', 'announced',
  'breaking', 'update', 'trend', 'viral', 'happened'
]

const CREATIVE_KEYWORDS = [
  'write', 'story', 'poem', 'creative', 'imagine',
  'design', 'generate', 'create', 'invent', 'draft',
  'essay', 'blog', 'caption', 'script', 'lyrics',
  'fiction', 'fantasy', 'novel', 'character', 'plot',
  'dialogue', 'narrative', 'metaphor', 'rhyme', 'verse',
  'slogan', 'tagline', 'advertisement', 'pitch', 'bio',
  'cover letter', 'resume', 'proposal', 'email', 'letter',
  'joke', 'humor', 'parody', 'satire', 'comedy',
  'description', 'review', 'opinion', 'perspective',
  'brainstorm', 'ideas', 'suggestions', 'alternatives',
  'roleplay', 'pretend', 'act as', 'simulate', 'scenario'
]

const MATH_KEYWORDS = [
  'calculate', 'solve', 'equation', 'math', 'number',
  'formula', 'algebra', 'geometry', 'statistics',
  'probability', 'integral', 'derivative', 'proof',
  'matrix', 'vector', 'calculus', 'trigonometry',
  'logarithm', 'exponent', 'polynomial', 'fraction',
  'percentage', 'ratio', 'proportion', 'area', 'volume',
  'perimeter', 'circumference', 'angle', 'theorem',
  'pythagoras', 'quadratic', 'linear', 'differential',
  'graph', 'plot', 'function', 'domain', 'range',
  'set theory', 'logic', 'boolean', 'permutation',
  'combination', 'factorial', 'sequence', 'series',
  'converge', 'diverge', 'limit', 'infinity', 'prime'
]

const IMAGE_KEYWORDS = [
  'image', 'picture', 'photo', 'draw', 'illustration',
  'generate image', 'create image', 'paint', 'artwork',
  'portrait', 'landscape', 'render', 'visual', 'graphic',
  'logo', 'icon', 'banner', 'thumbnail', 'wallpaper',
  'realistic', 'anime', 'cartoon', 'abstract', 'sketch',
  'photorealistic', 'oil painting', '3d render', 'pixel art',
  'concept art', 'digital art', 'watercolor', 'pencil drawing'
]

const VIDEO_KEYWORDS = [
  'video', 'animation', 'motion', 'film', 'clip',
  'generate video', 'create video', 'animate', 'cinematic',
  'scene', 'footage', 'visual effects', 'vfx', 'cgi',
  'short film', 'reel', 'timelapse', 'slow motion'
]

const AUDIO_KEYWORDS = [
  'voice', 'audio', 'speech', 'sound', 'music',
  'generate voice', 'text to speech', 'tts', 'narrate',
  'podcast', 'voiceover', 'sing', 'song', 'melody',
  'compose', 'instrument', 'beat', 'tune', 'soundtrack'
]

const LEGAL_KEYWORDS = [
  'legal', 'law', 'contract', 'agreement', 'clause',
  'terms', 'conditions', 'rights', 'lawsuit', 'court',
  'judge', 'attorney', 'lawyer', 'compliance', 'regulation',
  'gdpr', 'copyright', 'trademark', 'patent', 'liability',
  'nda', 'privacy policy', 'terms of service', 'illegal',
  'crime', 'penalty', 'fine', 'dispute', 'settlement'
]

const MEDICAL_KEYWORDS = [
  'medical', 'health', 'disease', 'symptom', 'diagnosis',
  'treatment', 'medicine', 'drug', 'dosage', 'prescription',
  'doctor', 'hospital', 'surgery', 'therapy', 'vaccine',
  'virus', 'bacteria', 'infection', 'chronic', 'acute',
  'mental health', 'anxiety', 'depression', 'diet', 'nutrition',
  'exercise', 'fitness', 'calories', 'protein', 'supplement',
  'anatomy', 'organ', 'blood', 'heart', 'brain', 'cancer'
]

const FINANCE_KEYWORDS = [
  'finance', 'money', 'invest', 'stock', 'crypto',
  'bitcoin', 'trading', 'portfolio', 'dividend', 'profit',
  'loss', 'revenue', 'expense', 'budget', 'savings',
  'loan', 'interest', 'mortgage', 'tax', 'income',
  'balance sheet', 'cash flow', 'valuation', 'startup',
  'funding', 'vc', 'angel', 'ipo', 'startup', 'equity'
]

const SCIENCE_KEYWORDS = [
  'science', 'physics', 'chemistry', 'biology', 'space',
  'universe', 'planet', 'atom', 'molecule', 'element',
  'evolution', 'gravity', 'quantum', 'relativity', 'energy',
  'force', 'reaction', 'experiment', 'hypothesis', 'theory',
  'dna', 'gene', 'cell', 'ecosystem', 'climate', 'fossil',
  'telescope', 'microscope', 'laboratory', 'research'
]

const LANGUAGE_KEYWORDS = [
  'translate', 'language', 'french', 'spanish', 'german',
  'japanese', 'chinese', 'hindi', 'arabic', 'portuguese',
  'russian', 'korean', 'italian', 'grammar', 'vocabulary',
  'pronunciation', 'accent', 'dialect', 'fluent', 'learn language',
  'word meaning', 'definition', 'synonym', 'antonym', 'phrase'
]

const SUMMARIZE_KEYWORDS = [
  'summarize', 'summary', 'tldr', 'brief', 'shorten',
  'condense', 'overview', 'highlight', 'key points',
  'main idea', 'gist', 'recap', 'review', 'explain simply',
  'simplify', 'eli5', 'in short', 'quick overview'
]

const DATA_KEYWORDS = [
  'data', 'dataset', 'csv', 'excel', 'spreadsheet',
  'chart', 'graph', 'visualize', 'analyze', 'insight',
  'pattern', 'trend', 'correlation', 'regression', 'cluster',
  'machine learning', 'ml', 'ai model', 'train', 'predict',
  'classification', 'neural network', 'deep learning',
  'pandas', 'numpy', 'matplotlib', 'tableau', 'powerbi'
]

// ── SCORING ENGINE ─────────────────────────────────────

function score(prompt: string, keywords: string[]): number {
  const lower = prompt.toLowerCase()
  return keywords.filter(k => lower.includes(k)).length
}

function getConfidence(s: number): 'high' | 'medium' | 'low' {
  if (s >= 3) return 'high'
  if (s >= 1) return 'medium'
  return 'low'
}

// ── MAIN ROUTER ────────────────────────────────────────

export function detectIntent(prompt: string): RouteResult {
  const scores = {
    coding:    score(prompt, CODING_KEYWORDS),
    research:  score(prompt, RESEARCH_KEYWORDS),
    creative:  score(prompt, CREATIVE_KEYWORDS),
    math:      score(prompt, MATH_KEYWORDS),
    image:     score(prompt, IMAGE_KEYWORDS),
    video:     score(prompt, VIDEO_KEYWORDS),
    audio:     score(prompt, AUDIO_KEYWORDS),
    legal:     score(prompt, LEGAL_KEYWORDS),
    medical:   score(prompt, MEDICAL_KEYWORDS),
    finance:   score(prompt, FINANCE_KEYWORDS),
    science:   score(prompt, SCIENCE_KEYWORDS),
    language:  score(prompt, LANGUAGE_KEYWORDS),
    summarize: score(prompt, SUMMARIZE_KEYWORDS),
    data:      score(prompt, DATA_KEYWORDS),
  }

  const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]

  if (top[1] === 0) {
    return {
      intent: 'casual',
      model: 'claude',
      alternativeModel: 'gpt-4o',
      reason: 'General conversation — Claude handles best',
      confidence: 'medium'
    }
  }

  const routingMap: Record<string, { model: ModelChoice, alt: ModelChoice, reason: string }> = {
    coding:    { model: 'gpt-4o',      alt: 'copilot',     reason: 'Coding task — GPT-4o excels at technical problems' },
    research:  { model: 'perplexity',  alt: 'grok',        reason: 'Research query — Perplexity has real-time web access' },
    creative:  { model: 'claude',      alt: 'gpt-4o',      reason: 'Creative task — Claude excels at writing and imagination' },
    math:      { model: 'wolfram',     alt: 'gemini',      reason: 'Math problem — Wolfram Alpha for precise calculations' },
    image:     { model: 'midjourney',  alt: 'dalle',       reason: 'Image generation — Midjourney produces best visuals' },
    video:     { model: 'runway',      alt: 'gemini',      reason: 'Video generation — Runway ML leads in AI video' },
    audio:     { model: 'elevenlabs',  alt: 'gemini',      reason: 'Audio/voice task — ElevenLabs best for speech synthesis' },
    legal:     { model: 'claude',      alt: 'gpt-4o',      reason: 'Legal query — Claude best for nuanced legal reasoning' },
    medical:   { model: 'gemini',      alt: 'claude',      reason: 'Medical query — Gemini trained on medical literature' },
    finance:   { model: 'gpt-4o',      alt: 'perplexity',  reason: 'Finance query — GPT-4o best for financial analysis' },
    science:   { model: 'gemini',      alt: 'claude',      reason: 'Science query — Gemini excels at scientific reasoning' },
    language:  { model: 'gpt-4o',      alt: 'mistral',     reason: 'Language task — GPT-4o best multilingual model' },
    summarize: { model: 'claude',      alt: 'mistral',     reason: 'Summarization — Claude best at condensing content' },
    data:      { model: 'deepseek',    alt: 'gemini',      reason: 'Data analysis — DeepSeek excels at data reasoning' },
  }

  const route = routingMap[top[0]]

  return {
    intent: top[0] as Intent,
    model: route.model,
    alternativeModel: route.alt,
    reason: route.reason,
    confidence: getConfidence(top[1])
  }
}