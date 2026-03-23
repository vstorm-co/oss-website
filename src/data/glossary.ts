/**
 * Glossary data — AI / ML / LLM / Agent terminology
 *
 * Each entry has a kebab-case slug, display name, 2-4 sentence definition,
 * category, and related-term slugs for cross-linking.
 */

export type GlossaryCategory =
  | "ai-fundamentals"
  | "llm"
  | "rag"
  | "frameworks"
  | "infrastructure"
  | "agents"
  | "mlops"
  | "voice-ai"
  | "cloud"
  | "frontend"
  | "python-backend"
  | "security";

export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  category: GlossaryCategory;
  relatedTerms: string[];
}

export const categoryLabels: Record<GlossaryCategory, string> = {
  "ai-fundamentals": "AI Fundamentals",
  llm: "LLM / Models",
  rag: "RAG",
  frameworks: "Frameworks & Tools",
  infrastructure: "Infrastructure",
  agents: "AI Agents",
  mlops: "MLOps",
  "voice-ai": "Voice AI",
  cloud: "Cloud & Deployment",
  frontend: "Next.js & Frontend",
  "python-backend": "FastAPI & Python",
  security: "AI Security & Ethics",
};

export const categoryColors: Record<GlossaryCategory, string> = {
  "ai-fundamentals": "text-blue-700 bg-blue-100 border border-blue-200",
  llm: "text-purple-700 bg-purple-100 border border-purple-200",
  rag: "text-emerald-700 bg-emerald-100 border border-emerald-200",
  frameworks: "text-amber-700 bg-amber-100 border border-amber-200",
  infrastructure: "text-rose-700 bg-rose-100 border border-rose-200",
  agents: "text-indigo-700 bg-indigo-100 border border-indigo-200",
  mlops: "text-teal-700 bg-teal-100 border border-teal-200",
  "voice-ai": "text-pink-700 bg-pink-100 border border-pink-200",
  cloud: "text-sky-700 bg-sky-100 border border-sky-200",
  frontend: "text-orange-700 bg-orange-100 border border-orange-200",
  "python-backend": "text-lime-700 bg-lime-100 border border-lime-200",
  security: "text-red-700 bg-red-100 border border-red-200",
};

export const glossaryTerms: GlossaryTerm[] = [
  // ── AI Fundamentals ─────────────────────────────────────────────────────────

  {
    slug: "artificial-intelligence",
    term: "Artificial Intelligence",
    definition:
      "Artificial Intelligence (AI) is the broad field of computer science focused on creating systems capable of performing tasks that typically require human intelligence, such as reasoning, learning, perception, and decision-making. Modern AI encompasses a wide range of techniques from rule-based expert systems to statistical machine learning and deep neural networks. The field has seen explosive growth since the advent of large-scale deep learning, enabling breakthroughs in language understanding, image recognition, and autonomous decision-making.",
    category: "ai-fundamentals",
    relatedTerms: ["machine-learning", "deep-learning", "generative-ai", "natural-language-processing"],
  },
  {
    slug: "machine-learning",
    term: "Machine Learning",
    definition:
      "Machine Learning (ML) is a subset of artificial intelligence where algorithms learn patterns from data rather than being explicitly programmed with rules. ML systems improve their performance on a task as they are exposed to more data, using techniques such as supervised learning (labeled examples), unsupervised learning (pattern discovery), and reinforcement learning (reward signals). It forms the foundational layer for modern AI applications including recommendation systems, fraud detection, and natural language processing.",
    category: "ai-fundamentals",
    relatedTerms: ["deep-learning", "artificial-intelligence", "reinforcement-learning", "overfitting"],
  },
  {
    slug: "deep-learning",
    term: "Deep Learning",
    definition:
      "Deep Learning is a specialized subset of machine learning that uses artificial neural networks with multiple layers (hence 'deep') to model complex patterns in data. These networks automatically learn hierarchical feature representations, eliminating the need for manual feature engineering. Deep learning powers the most advanced AI systems today, including large language models, computer vision systems, and speech recognition engines. Its success is driven by the combination of large datasets, powerful GPU hardware, and algorithmic innovations like transformers.",
    category: "ai-fundamentals",
    relatedTerms: ["machine-learning", "transformer-architecture", "large-language-models", "computer-vision"],
  },
  {
    slug: "natural-language-processing",
    term: "Natural Language Processing",
    definition:
      "Natural Language Processing (NLP) is the branch of AI concerned with enabling computers to understand, interpret, and generate human language. It encompasses tasks like text classification, named entity recognition, sentiment analysis, machine translation, question answering, and text summarization. Modern NLP is dominated by transformer-based models that learn contextual representations of language from massive text corpora. NLP is the core technology behind chatbots, search engines, and AI assistants.",
    category: "ai-fundamentals",
    relatedTerms: ["large-language-models", "tokenization", "transformer-architecture", "embedding-model"],
  },
  {
    slug: "computer-vision",
    term: "Computer Vision",
    definition:
      "Computer Vision (CV) is a field of AI that enables machines to interpret and understand visual information from images and videos. It covers tasks such as image classification, object detection, semantic segmentation, facial recognition, and image generation. Modern computer vision relies heavily on deep convolutional neural networks and, increasingly, vision transformers. Applications range from autonomous vehicles and medical imaging to quality control in manufacturing.",
    category: "ai-fundamentals",
    relatedTerms: ["deep-learning", "artificial-intelligence", "multimodal-embeddings"],
  },
  {
    slug: "transfer-learning",
    term: "Transfer Learning",
    definition:
      "Transfer Learning is a machine learning technique where a model trained on one task is repurposed as the starting point for a model on a different but related task. Instead of training from scratch, the pre-trained model's learned representations are fine-tuned on a smaller, task-specific dataset. This dramatically reduces the data and compute requirements for training. Transfer learning is the foundation of the modern LLM paradigm: large models are pre-trained on general text and then fine-tuned or prompted for specific applications.",
    category: "ai-fundamentals",
    relatedTerms: ["fine-tuning", "large-language-models", "few-shot-learning", "deep-learning"],
  },
  {
    slug: "reinforcement-learning",
    term: "Reinforcement Learning",
    definition:
      "Reinforcement Learning (RL) is a machine learning paradigm where an agent learns to make decisions by interacting with an environment and receiving reward or penalty signals. The agent aims to maximize cumulative reward over time by discovering optimal policies through trial and error. RL has been pivotal in training game-playing AIs (like AlphaGo) and is a key component of RLHF (Reinforcement Learning from Human Feedback), which is used to align large language models with human preferences.",
    category: "ai-fundamentals",
    relatedTerms: ["machine-learning", "alignment", "ai-agent"],
  },
  {
    slug: "generative-ai",
    term: "Generative AI",
    definition:
      "Generative AI refers to artificial intelligence systems capable of creating new content — text, images, audio, video, or code — that resembles human-produced output. These systems learn the statistical patterns and structure of their training data and can produce novel, coherent outputs on demand. The most prominent examples include large language models (GPT, Claude) for text generation and diffusion models (Stable Diffusion, DALL-E) for image synthesis. Generative AI is transforming industries from software development to creative arts.",
    category: "ai-fundamentals",
    relatedTerms: ["large-language-models", "gpt", "claude", "transformer-architecture"],
  },
  {
    slug: "transformer-architecture",
    term: "Transformer Architecture",
    definition:
      "The Transformer is a neural network architecture introduced in the 2017 paper 'Attention Is All You Need' that revolutionized natural language processing and beyond. It relies entirely on self-attention mechanisms to process input sequences in parallel, rather than sequentially like RNNs, enabling vastly more efficient training on large datasets. The architecture consists of encoder and decoder blocks, each containing multi-head self-attention layers and feed-forward networks. Transformers are the foundation of virtually all modern large language models, including GPT, Claude, Gemini, and Llama.",
    category: "ai-fundamentals",
    relatedTerms: ["self-attention", "feed-forward-network", "large-language-models", "encoder-decoder-model"],
  },
  {
    slug: "tokenization",
    term: "Tokenization",
    definition:
      "Tokenization is the process of converting raw text into a sequence of discrete units called tokens that a language model can process. Tokens may represent whole words, subwords, or individual characters, depending on the tokenization algorithm (e.g., BPE, SentencePiece, WordPiece). The choice of tokenizer directly affects a model's vocabulary size, context window utilization, and multilingual capability. Tokenization is a critical preprocessing step because the model's understanding of language is fundamentally shaped by how text is segmented into tokens.",
    category: "ai-fundamentals",
    relatedTerms: ["input-tokens", "output-tokens", "context-window", "large-language-models"],
  },
  {
    slug: "embedding-model",
    term: "Embedding Model",
    definition:
      "An embedding model is a neural network trained to convert high-dimensional discrete data (such as text, images, or code) into dense, fixed-size numerical vectors (embeddings) that capture semantic meaning. Similar items produce vectors that are close together in the embedding space, enabling tasks like semantic search, clustering, and retrieval. Popular text embedding models include OpenAI's text-embedding-3, Cohere's Embed, and open-source alternatives like E5 and BGE. Embedding models are a cornerstone of RAG systems, powering the similarity search that retrieves relevant context for LLM generation.",
    category: "ai-fundamentals",
    relatedTerms: ["vector-embedding", "semantic-search", "vector-database", "embedding-dimensions"],
  },
  {
    slug: "vector-embedding",
    term: "Vector Embedding",
    definition:
      "A vector embedding is a dense numerical representation of a piece of data (text, image, audio) in a continuous vector space, typically with hundreds or thousands of dimensions. Embeddings encode semantic relationships such that similar concepts map to nearby points in the vector space. They are produced by embedding models and stored in vector databases for efficient similarity search. Vector embeddings are the bridge between unstructured data and the mathematical operations that power modern retrieval and recommendation systems.",
    category: "ai-fundamentals",
    relatedTerms: ["embedding-model", "embedding-dimensions", "vector-database", "semantic-search"],
  },
  {
    slug: "fine-tuning",
    term: "Fine-Tuning",
    definition:
      "Fine-tuning is the process of further training a pre-trained model on a specific, smaller dataset to adapt it for a particular task or domain. The model's weights are updated using the new data, allowing it to specialize while retaining the general knowledge acquired during pre-training. Fine-tuning is significantly cheaper and faster than training from scratch. Common approaches include full fine-tuning (updating all weights), LoRA (low-rank adaptation), and QLoRA (quantized LoRA), each offering different trade-offs between performance and computational cost.",
    category: "ai-fundamentals",
    relatedTerms: ["transfer-learning", "large-language-models", "quantization", "few-shot-learning"],
  },
  {
    slug: "few-shot-learning",
    term: "Few-Shot Learning",
    definition:
      "Few-shot learning is a technique where a model performs a new task after being given only a small number of examples (typically 1-10) in its input prompt, without any weight updates. The examples serve as demonstrations that help the model understand the expected input-output format and task semantics. Few-shot learning leverages the general knowledge encoded in large pre-trained models and is one of the key capabilities that distinguishes modern LLMs. It provides a middle ground between zero-shot (no examples) and fine-tuning (many examples with weight updates).",
    category: "ai-fundamentals",
    relatedTerms: ["zero-shot-learning", "prompt-engineering", "large-language-models", "transfer-learning"],
  },
  {
    slug: "zero-shot-learning",
    term: "Zero-Shot Learning",
    definition:
      "Zero-shot learning is the ability of a model to perform a task it has never been explicitly trained on, without being given any examples at inference time. The model relies solely on its pre-training knowledge and the task description provided in the prompt. Large language models exhibit strong zero-shot capabilities because they have been exposed to vast and diverse training corpora during pre-training. Zero-shot performance is a key benchmark for evaluating how well an LLM generalizes across tasks.",
    category: "ai-fundamentals",
    relatedTerms: ["few-shot-learning", "prompt-engineering", "large-language-models"],
  },
  {
    slug: "prompt-engineering",
    term: "Prompt Engineering",
    definition:
      "Prompt engineering is the practice of designing and optimizing the text instructions (prompts) given to a language model to elicit the desired output. Effective prompts can dramatically improve model performance without any fine-tuning or weight changes. Techniques include providing clear instructions, specifying output formats, using system prompts, few-shot examples, and chain-of-thought reasoning. Prompt engineering has become a critical skill in AI application development, directly impacting the quality, reliability, and safety of LLM-powered systems.",
    category: "ai-fundamentals",
    relatedTerms: ["chain-of-thought-prompting", "few-shot-learning", "zero-shot-learning", "large-language-models"],
  },
  {
    slug: "chain-of-thought-prompting",
    term: "Chain of Thought Prompting",
    definition:
      "Chain of Thought (CoT) prompting is a technique that encourages a language model to break down complex reasoning tasks into explicit intermediate steps before arriving at a final answer. By instructing the model to 'think step by step,' CoT prompting significantly improves performance on math, logic, and multi-step reasoning tasks. The approach works because it forces the model to use its token generation budget on reasoning rather than jumping directly to a conclusion. Variants include zero-shot CoT (just adding 'Let's think step by step') and few-shot CoT (providing worked examples).",
    category: "ai-fundamentals",
    relatedTerms: ["prompt-engineering", "large-language-models", "agent-planning"],
  },
  {
    slug: "hallucination",
    term: "Hallucination",
    definition:
      "Hallucination in AI refers to the phenomenon where a language model generates content that sounds plausible and confident but is factually incorrect, fabricated, or not grounded in its training data or provided context. Hallucinations arise because LLMs are statistical next-token predictors — they optimize for fluency, not factual accuracy. This is one of the most significant challenges in deploying LLMs in production, particularly for applications requiring high factual reliability. Mitigation strategies include RAG (grounding outputs in retrieved documents), guardrails, and citation verification.",
    category: "ai-fundamentals",
    relatedTerms: ["rag-retrieval-augmented-generation", "guardrails", "alignment", "large-language-models"],
  },
  {
    slug: "alignment",
    term: "Alignment",
    definition:
      "Alignment refers to the ongoing research and engineering effort to ensure that AI systems behave in accordance with human values, intentions, and safety requirements. In the context of LLMs, alignment typically involves techniques like RLHF (Reinforcement Learning from Human Feedback), Constitutional AI, and DPO (Direct Preference Optimization) to steer model behavior. A well-aligned model refuses harmful requests, follows instructions faithfully, and acknowledges uncertainty. Alignment is considered one of the most critical challenges in AI safety as models become more capable.",
    category: "ai-fundamentals",
    relatedTerms: ["reinforcement-learning", "guardrails", "hallucination", "large-language-models"],
  },
  {
    slug: "knowledge-distillation",
    term: "Knowledge Distillation",
    definition:
      "Knowledge distillation is a model compression technique where a smaller 'student' model is trained to replicate the behavior of a larger, more capable 'teacher' model. The student learns not just from the hard labels but from the teacher's soft probability distributions (logits), capturing nuanced knowledge about inter-class relationships. This produces compact models that retain much of the teacher's performance while being significantly faster and cheaper to run. Knowledge distillation is widely used to create efficient production models from large research models.",
    category: "ai-fundamentals",
    relatedTerms: ["quantization", "fine-tuning", "inference", "large-language-models"],
  },
  {
    slug: "overfitting",
    term: "Overfitting",
    definition:
      "Overfitting occurs when a machine learning model learns the training data too well, including its noise and idiosyncrasies, resulting in poor generalization to new unseen data. An overfit model has high accuracy on training data but significantly worse performance on validation or test data. Common signs include a widening gap between training and validation loss curves. Mitigation techniques include regularization (dropout, weight decay), early stopping, data augmentation, and using held-out validation sets.",
    category: "ai-fundamentals",
    relatedTerms: ["machine-learning", "fine-tuning", "deep-learning"],
  },
  {
    slug: "quantization",
    term: "Quantization",
    definition:
      "Quantization is a model optimization technique that reduces the numerical precision of a neural network's weights and activations — for example, from 32-bit floating point (FP32) to 8-bit integers (INT8) or even 4-bit representations. This dramatically reduces model size, memory usage, and inference latency with minimal impact on accuracy. Quantization is essential for deploying large language models on consumer hardware or edge devices. Common approaches include post-training quantization (PTQ), quantization-aware training (QAT), and GPTQ/AWQ methods specific to LLMs.",
    category: "ai-fundamentals",
    relatedTerms: ["inference", "knowledge-distillation", "large-language-models", "model-serving"],
  },
  {
    slug: "inference",
    term: "Inference",
    definition:
      "Inference is the process of using a trained machine learning model to generate predictions or outputs from new input data. Unlike training, which involves updating model weights, inference uses the frozen weights to process inputs through the network's forward pass. In the context of LLMs, inference involves autoregressive token generation — producing one token at a time, each conditioned on all previous tokens. Inference optimization (batching, caching, quantization, speculative decoding) is critical for production deployments because it directly impacts latency, throughput, and cost.",
    category: "ai-fundamentals",
    relatedTerms: ["quantization", "model-serving", "next-token-prediction", "large-language-models"],
  },

  // ── LLM / Models ────────────────────────────────────────────────────────────

  {
    slug: "large-language-models",
    term: "Large Language Models",
    definition:
      "Large Language Models (LLMs) are deep neural networks with billions of parameters trained on vast text corpora to understand and generate human language. They use the transformer architecture and learn to predict the next token in a sequence, which gives them emergent abilities in reasoning, coding, translation, and creative writing. Prominent examples include GPT-4, Claude, Gemini, Llama, and Mistral. LLMs form the backbone of modern AI applications, from chatbots and code assistants to autonomous agents.",
    category: "llm",
    relatedTerms: ["transformer-architecture", "gpt", "claude", "next-token-prediction", "context-window"],
  },
  {
    slug: "gpt",
    term: "GPT",
    definition:
      "GPT (Generative Pre-trained Transformer) is a family of large language models created by OpenAI, based on the decoder-only transformer architecture. Starting with GPT-1 (2018), the series has scaled through GPT-2, GPT-3, GPT-3.5, and GPT-4, each dramatically increasing in parameters and capability. GPT models are pre-trained on large internet text corpora using next-token prediction and then fine-tuned with RLHF for instruction following and safety. GPT-4 and its variants power ChatGPT and are among the most widely used commercial LLMs.",
    category: "llm",
    relatedTerms: ["large-language-models", "generative-pre-trained-transformer", "decoder-only-model", "claude"],
  },
  {
    slug: "claude",
    term: "Claude",
    definition:
      "Claude is a family of large language models developed by Anthropic, designed with a strong emphasis on safety, helpfulness, and honesty. Claude models use Constitutional AI and RLHF techniques for alignment and are available in multiple tiers (Haiku, Sonnet, Opus) offering different capability and cost trade-offs. Claude is known for long context windows (up to 200K+ tokens), strong instruction following, and nuanced reasoning. It is accessible via the Anthropic API and is a popular choice for building production AI agents and applications.",
    category: "llm",
    relatedTerms: ["large-language-models", "alignment", "context-window", "gpt"],
  },
  {
    slug: "gemini",
    term: "Gemini",
    definition:
      "Gemini is Google DeepMind's family of multimodal large language models, capable of processing and generating text, images, audio, and video. The Gemini family includes models of varying sizes (Nano, Flash, Pro, Ultra) optimized for different deployment scenarios from on-device to cloud. Gemini models are natively multimodal, meaning they were trained from the ground up on multiple modalities rather than bolting image understanding onto a text model. They power Google's AI products and are available through the Gemini API and Google Cloud's Vertex AI platform.",
    category: "llm",
    relatedTerms: ["large-language-models", "gpt", "claude", "multimodal-embeddings"],
  },
  {
    slug: "llama",
    term: "Llama",
    definition:
      "Llama (Large Language Model Meta AI) is Meta's family of open-weight large language models released for research and commercial use. Starting with Llama 1 (2023), Meta has released increasingly capable versions (Llama 2, Llama 3) that rival proprietary models on many benchmarks. Llama models are decoder-only transformers available in multiple sizes (7B, 13B, 70B, 405B parameters), enabling deployment across different hardware budgets. Their open-weight nature has made them the foundation for a thriving ecosystem of fine-tuned variants and the default choice for self-hosted LLM deployments.",
    category: "llm",
    relatedTerms: ["large-language-models", "decoder-only-model", "mistral", "fine-tuning"],
  },
  {
    slug: "mistral",
    term: "Mistral",
    definition:
      "Mistral is a family of open-weight and commercial large language models developed by Mistral AI, a French AI company. Mistral models are known for their efficiency — achieving competitive performance with fewer parameters through architectural innovations like Grouped-Query Attention and Sliding Window Attention. The Mistral lineup includes open models (Mistral 7B, Mixtral 8x7B) and commercial offerings (Mistral Large, Mistral Medium). Mixtral popularized the Mixture of Experts (MoE) approach for LLMs, where only a subset of parameters is active for each token.",
    category: "llm",
    relatedTerms: ["large-language-models", "llama", "decoder-only-model", "parameter-count"],
  },
  {
    slug: "generative-pre-trained-transformer",
    term: "Generative Pre-trained Transformer",
    definition:
      "Generative Pre-trained Transformer (GPT) refers to the class of language models that combine three key ideas: generative modeling (producing text token by token), pre-training on large unsupervised text corpora, and the transformer neural network architecture. The 'pre-trained' aspect means the model first learns general language representations before being fine-tuned or prompted for specific tasks. This paradigm, pioneered by OpenAI, has become the dominant approach in NLP and forms the basis for most modern large language models.",
    category: "llm",
    relatedTerms: ["gpt", "transformer-architecture", "next-token-prediction", "decoder-only-model"],
  },
  {
    slug: "decoder-only-model",
    term: "Decoder-Only Model",
    definition:
      "A decoder-only model is a transformer architecture variant that uses only the decoder component (with causal/masked self-attention) to generate text autoregressively — one token at a time, left to right. Unlike encoder-decoder models, decoder-only architectures process input and generate output in a single unified sequence. This design simplifies training and scaling, which is why virtually all modern large language models (GPT, Claude, Llama, Mistral) use decoder-only architectures. The causal attention mask ensures each token can only attend to previous tokens, maintaining the autoregressive property.",
    category: "llm",
    relatedTerms: ["encoder-decoder-model", "self-attention", "transformer-architecture", "next-token-prediction"],
  },
  {
    slug: "encoder-decoder-model",
    term: "Encoder-Decoder Model",
    definition:
      "An encoder-decoder model is a transformer architecture with two distinct components: an encoder that processes the input sequence into contextualized representations, and a decoder that generates the output sequence autoregressively while attending to the encoder's output via cross-attention. This architecture excels at sequence-to-sequence tasks like translation, summarization, and question answering. Notable examples include T5, BART, and the original Transformer. While encoder-decoder models were historically dominant, most modern LLMs have shifted to decoder-only architectures for simplicity and scalability.",
    category: "llm",
    relatedTerms: ["decoder-only-model", "transformer-architecture", "self-attention"],
  },
  {
    slug: "self-attention",
    term: "Self-Attention",
    definition:
      "Self-attention (also called scaled dot-product attention) is the core mechanism of the transformer architecture that allows each position in a sequence to attend to all other positions, computing a weighted representation based on relevance. It works by projecting each token into query (Q), key (K), and value (V) vectors, computing attention scores as the dot product of Q and K, and using these scores to create weighted sums of V. Multi-head attention runs this process in parallel across multiple subspaces, allowing the model to capture different types of relationships simultaneously. Self-attention is what gives transformers their ability to model long-range dependencies in text.",
    category: "llm",
    relatedTerms: ["transformer-architecture", "decoder-only-model", "feed-forward-network"],
  },
  {
    slug: "feed-forward-network",
    term: "Feed-Forward Network",
    definition:
      "In the context of transformers, the feed-forward network (FFN) is a component that follows the self-attention layer within each transformer block. It typically consists of two linear transformations with a non-linear activation (ReLU or GELU) in between, applied independently to each token position. The FFN is where much of the model's factual knowledge and pattern recognition is believed to be stored, acting as a key-value memory. FFN layers account for roughly two-thirds of a transformer's total parameters and are a primary target for efficiency optimizations like Mixture of Experts.",
    category: "llm",
    relatedTerms: ["self-attention", "transformer-architecture", "parameter-count"],
  },
  {
    slug: "next-token-prediction",
    term: "Next-Token Prediction",
    definition:
      "Next-token prediction is the fundamental training objective of autoregressive language models: given a sequence of tokens, predict the probability distribution over the vocabulary for the next token. The model is trained to minimize the cross-entropy loss between its predicted distribution and the actual next token across billions of training examples. Despite the apparent simplicity of this objective, it gives rise to emergent capabilities in reasoning, knowledge recall, and language understanding. At inference time, the model generates text by repeatedly sampling from the predicted next-token distribution.",
    category: "llm",
    relatedTerms: ["large-language-models", "decoder-only-model", "temperature", "perplexity"],
  },
  {
    slug: "parameter-count",
    term: "Parameter Count",
    definition:
      "Parameter count refers to the total number of learnable weights in a neural network, commonly used as a proxy for model size and capability. In LLMs, parameter counts range from millions (small models) to hundreds of billions (frontier models like GPT-4). More parameters generally enable greater knowledge storage and more nuanced reasoning, but with diminishing returns and increased computational cost. Parameter count alone does not determine model quality — training data, architecture, and optimization all play critical roles.",
    category: "llm",
    relatedTerms: ["large-language-models", "quantization", "inference", "feed-forward-network"],
  },
  {
    slug: "context-window",
    term: "Context Window",
    definition:
      "The context window (or context length) is the maximum number of tokens a language model can process in a single input-output interaction, including both the prompt and the generated response. Larger context windows allow the model to process longer documents, maintain longer conversations, and work with more code at once. Context windows have grown dramatically — from 2K tokens (early GPT-3) to 200K+ tokens (Claude) and 1M+ tokens (Gemini). However, model performance and attention to detail can degrade as context length increases, a phenomenon known as the 'lost in the middle' problem.",
    category: "llm",
    relatedTerms: ["input-tokens", "output-tokens", "large-language-models", "tokenization"],
  },
  {
    slug: "temperature",
    term: "Temperature",
    definition:
      "Temperature is a sampling parameter that controls the randomness and creativity of a language model's output by scaling the logits (raw prediction scores) before applying softmax. A temperature of 0 makes the model deterministic (always picking the highest-probability token), while higher values (e.g., 1.0-2.0) increase randomness and diversity. Low temperature (0.1-0.3) is preferred for factual, deterministic tasks like code generation and data extraction, while higher temperature suits creative writing and brainstorming. Temperature works in conjunction with other sampling parameters like top-k and top-p.",
    category: "llm",
    relatedTerms: ["top-k-sampling", "top-p-sampling", "next-token-prediction", "large-language-models"],
  },
  {
    slug: "top-k-sampling",
    term: "Top-K Sampling",
    definition:
      "Top-K sampling is a text generation strategy that restricts the model's choices to the K most probable next tokens at each generation step, redistributing probability mass only among those top candidates. For example, with K=50, only the 50 highest-probability tokens are considered, regardless of how much total probability they represent. This prevents the model from selecting extremely unlikely tokens that could produce incoherent text. Top-K sampling provides a simple way to control the trade-off between coherence and diversity in generated text.",
    category: "llm",
    relatedTerms: ["top-p-sampling", "temperature", "next-token-prediction"],
  },
  {
    slug: "top-p-sampling",
    term: "Top-P Sampling",
    definition:
      "Top-P sampling (also called nucleus sampling) is a text generation strategy that dynamically selects the smallest set of tokens whose cumulative probability exceeds a threshold P. For example, with P=0.9, the model considers only enough top tokens to cover 90% of the probability mass. Unlike top-K (which uses a fixed number), top-P adapts: for high-confidence predictions it considers fewer tokens, and for uncertain predictions it considers more. This makes it generally more robust than top-K across different contexts and is the default sampling strategy for many LLM APIs.",
    category: "llm",
    relatedTerms: ["top-k-sampling", "temperature", "next-token-prediction"],
  },
  {
    slug: "input-tokens",
    term: "Input Tokens",
    definition:
      "Input tokens (also called prompt tokens) are the tokens that make up the user's prompt, system instructions, and any context provided to the language model before it begins generating a response. The number of input tokens directly affects cost (most API providers charge per token) and latency (more tokens take longer to process through the attention mechanism). Input tokens include the system prompt, conversation history, retrieved context (in RAG), and the current user message. Managing input token count is critical for controlling costs and staying within context window limits.",
    category: "llm",
    relatedTerms: ["output-tokens", "context-window", "tokenization", "token-budget"],
  },
  {
    slug: "output-tokens",
    term: "Output Tokens",
    definition:
      "Output tokens (also called completion tokens) are the tokens generated by the language model in response to the input prompt. Each output token is generated autoregressively — the model produces one token at a time, each conditioned on all previous tokens (both input and already-generated output). Output tokens are typically more expensive than input tokens in API pricing because each requires a full forward pass through the model. The maximum number of output tokens can usually be configured, and hitting this limit causes the response to be truncated.",
    category: "llm",
    relatedTerms: ["input-tokens", "context-window", "next-token-prediction", "token-budget"],
  },
  {
    slug: "perplexity",
    term: "Perplexity",
    definition:
      "Perplexity is a standard evaluation metric for language models that measures how well the model predicts a test dataset. It is the exponentiation of the average negative log-likelihood per token — intuitively, it represents the 'effective number of equally likely next tokens' the model considers at each step. Lower perplexity indicates better prediction and a more confident model. While perplexity correlates with language modeling quality, it does not directly measure usefulness for downstream tasks like instruction following or reasoning.",
    category: "llm",
    relatedTerms: ["next-token-prediction", "large-language-models", "tokenization"],
  },

  // ── RAG ──────────────────────────────────────────────────────────────────────

  {
    slug: "rag-retrieval-augmented-generation",
    term: "RAG (Retrieval-Augmented Generation)",
    definition:
      "Retrieval-Augmented Generation (RAG) is an architecture pattern that enhances LLM outputs by first retrieving relevant documents from an external knowledge base and including them in the prompt as context. This grounds the model's responses in actual data, reducing hallucination and enabling the model to answer questions about information not present in its training data. A typical RAG pipeline involves document ingestion, chunking, embedding, vector storage, retrieval (via semantic or hybrid search), and generation with the retrieved context. RAG has become the de facto standard for building knowledge-intensive AI applications.",
    category: "rag",
    relatedTerms: ["vector-database", "semantic-search", "document-chunking", "hybrid-search"],
  },
  {
    slug: "vector-database",
    term: "Vector Database",
    definition:
      "A vector database is a specialized database designed to efficiently store, index, and query high-dimensional vector embeddings. Unlike traditional databases that use exact matching, vector databases use approximate nearest neighbor (ANN) algorithms (such as HNSW, IVF, or DiskANN) to find vectors similar to a query vector. They are the core infrastructure component of RAG systems, enabling fast semantic search over millions or billions of embeddings. Popular vector databases include Qdrant, Milvus, Pinecone, ChromaDB, and PostgreSQL with pgvector.",
    category: "rag",
    relatedTerms: ["vector-embedding", "semantic-search", "qdrant", "milvus", "pinecone", "chromadb", "pgvector"],
  },
  {
    slug: "hybrid-search",
    term: "Hybrid Search",
    definition:
      "Hybrid search combines dense vector (semantic) search with traditional sparse keyword (lexical) search to achieve better retrieval quality than either method alone. Dense search excels at understanding meaning and synonyms, while sparse search (e.g., BM25) is better at exact term matching and handling rare or technical terms. Hybrid search typically retrieves results from both methods and merges them using score fusion techniques like Reciprocal Rank Fusion (RRF). This approach is considered best practice for production RAG systems because it provides more robust and comprehensive retrieval.",
    category: "rag",
    relatedTerms: ["semantic-search", "bm25", "reciprocal-rank-fusion", "sparse-vs-dense-retrieval"],
  },
  {
    slug: "document-chunking",
    term: "Document Chunking",
    definition:
      "Document chunking is the process of splitting large documents into smaller, semantically meaningful segments (chunks) for embedding and retrieval in a RAG pipeline. Chunk size is a critical design decision — too large and the retrieved context may contain irrelevant information, too small and important context may be split across chunks. Common strategies include fixed-size chunking with overlap, recursive character splitting, semantic chunking (splitting at topic boundaries), and sentence-level chunking. Advanced techniques use hierarchical chunking or parent-child relationships to maintain context while enabling precise retrieval.",
    category: "rag",
    relatedTerms: ["rag-retrieval-augmented-generation", "indexing-pipeline", "embedding-model", "vector-database"],
  },
  {
    slug: "semantic-search",
    term: "Semantic Search",
    definition:
      "Semantic search is a retrieval technique that finds documents based on meaning rather than exact keyword matching. It works by encoding both the query and the documents as vector embeddings using an embedding model, then finding documents whose vectors are closest to the query vector (using cosine similarity, dot product, or Euclidean distance). This enables the system to match on synonyms, paraphrases, and conceptually related content. Semantic search is the primary retrieval mechanism in most RAG implementations and is far more effective than keyword search for natural language queries.",
    category: "rag",
    relatedTerms: ["embedding-model", "vector-database", "similarity-scoring", "hybrid-search"],
  },
  {
    slug: "re-ranking",
    term: "Re-Ranking",
    definition:
      "Re-ranking is a second-stage retrieval step in RAG systems where an initial set of candidate documents (retrieved by vector search or keyword search) is re-scored by a more powerful cross-encoder model to improve relevance ordering. Cross-encoders process the query and each document together (rather than independently), enabling more accurate relevance assessment at the cost of higher latency. Re-ranking significantly improves retrieval precision, especially when the initial retrieval pool is noisy. Popular re-ranking models include Cohere Rerank, BGE Reranker, and ColBERT.",
    category: "rag",
    relatedTerms: ["semantic-search", "hybrid-search", "reciprocal-rank-fusion", "rag-retrieval-augmented-generation"],
  },
  {
    slug: "similarity-scoring",
    term: "Similarity Scoring",
    definition:
      "Similarity scoring is the mathematical process of quantifying how close two vector embeddings are in the embedding space, used to rank retrieval results in semantic search. Common metrics include cosine similarity (measuring the angle between vectors, scale-invariant), dot product (combining magnitude and direction), and Euclidean distance (measuring straight-line distance). The choice of metric should match the embedding model's training objective. Similarity scores are fundamental to vector search and directly determine which documents are returned as relevant in a RAG pipeline.",
    category: "rag",
    relatedTerms: ["semantic-search", "vector-embedding", "vector-database"],
  },
  {
    slug: "sparse-vs-dense-retrieval",
    term: "Sparse vs Dense Retrieval",
    definition:
      "Sparse retrieval uses high-dimensional, mostly-zero vectors (like TF-IDF or BM25 term frequency vectors) where each dimension corresponds to a vocabulary term. Dense retrieval uses low-dimensional, continuous vectors produced by neural embedding models where every dimension carries information. Sparse methods are fast, interpretable, and excellent at exact term matching; dense methods capture semantic meaning and handle synonyms. In practice, the best RAG systems combine both approaches through hybrid search, leveraging the strengths of each retrieval paradigm.",
    category: "rag",
    relatedTerms: ["hybrid-search", "bm25", "semantic-search", "vector-embedding"],
  },
  {
    slug: "knowledge-base",
    term: "Knowledge Base",
    definition:
      "A knowledge base is a structured or semi-structured collection of information that serves as the external data source for RAG systems and AI agents. It can include documents, FAQs, product manuals, code repositories, database records, or any domain-specific content that the LLM needs to reference. In production systems, knowledge bases are typically ingested through indexing pipelines that chunk, embed, and store the content in vector databases. Keeping the knowledge base current, accurate, and well-organized directly impacts the quality of AI-generated responses.",
    category: "rag",
    relatedTerms: ["rag-retrieval-augmented-generation", "knowledge-graph", "indexing-pipeline", "document-chunking"],
  },
  {
    slug: "knowledge-graph",
    term: "Knowledge Graph",
    definition:
      "A knowledge graph is a structured representation of information as a network of entities (nodes) and their relationships (edges), enabling complex relational queries and reasoning. Unlike flat document stores, knowledge graphs capture how concepts relate to each other — for example, 'Python IS_A programming_language' or 'FastAPI USES Pydantic.' In AI applications, knowledge graphs enhance retrieval by enabling multi-hop reasoning (traversing multiple relationships) and providing structured context to LLMs. They are increasingly used alongside vector search in advanced RAG architectures.",
    category: "rag",
    relatedTerms: ["graph-rag", "knowledge-base", "rag-retrieval-augmented-generation"],
  },
  {
    slug: "graph-rag",
    term: "Graph RAG",
    definition:
      "Graph RAG is an advanced retrieval-augmented generation approach that combines knowledge graph traversal with traditional vector search to provide richer, more structured context to LLMs. Instead of retrieving flat text chunks, Graph RAG follows entity relationships in a knowledge graph to gather connected information across multiple hops. This enables better handling of complex queries that require synthesizing information from multiple related topics. Graph RAG architectures typically build entity graphs during indexing and use community detection or subgraph extraction during retrieval.",
    category: "rag",
    relatedTerms: ["knowledge-graph", "rag-retrieval-augmented-generation", "knowledge-base"],
  },
  {
    slug: "indexing-pipeline",
    term: "Indexing Pipeline",
    definition:
      "An indexing pipeline (or ingestion pipeline) is the automated workflow that processes raw documents into a format suitable for retrieval in a RAG system. It typically involves loading documents from various sources, cleaning and preprocessing text, splitting into chunks, generating vector embeddings, and storing both the vectors and metadata in a vector database. Production pipelines also handle incremental updates, deduplication, metadata extraction, and quality checks. Well-designed indexing pipelines are critical for RAG quality because retrieval can only be as good as the indexed data.",
    category: "rag",
    relatedTerms: ["document-chunking", "embedding-model", "vector-database", "rag-retrieval-augmented-generation"],
  },
  {
    slug: "bm25",
    term: "BM25",
    definition:
      "BM25 (Best Matching 25) is a probabilistic ranking function used in information retrieval that scores documents based on the frequency of query terms appearing in each document. It improves on simple TF-IDF by incorporating document length normalization and term frequency saturation (diminishing returns for repeated terms). BM25 remains the gold standard for lexical/sparse retrieval and is widely used as the keyword search component in hybrid search RAG systems. It excels at matching exact terms, technical jargon, and proper nouns that semantic search may miss.",
    category: "rag",
    relatedTerms: ["hybrid-search", "sparse-vs-dense-retrieval", "semantic-search", "reciprocal-rank-fusion"],
  },
  {
    slug: "reciprocal-rank-fusion",
    term: "Reciprocal Rank Fusion",
    definition:
      "Reciprocal Rank Fusion (RRF) is a score combination method used in hybrid search to merge ranked result lists from different retrieval systems (e.g., vector search and BM25). RRF assigns each document a score of 1/(k + rank) for each list, where k is a constant (typically 60), and sums the scores across all lists. It is simple, effective, and does not require score normalization between different retrieval methods. RRF has become the default fusion strategy in production hybrid search systems due to its robustness and ease of implementation.",
    category: "rag",
    relatedTerms: ["hybrid-search", "bm25", "re-ranking", "semantic-search"],
  },
  {
    slug: "embedding-dimensions",
    term: "Embedding Dimensions",
    definition:
      "Embedding dimensions refer to the number of numerical values in a vector embedding, determining the resolution and capacity of the representation. Common embedding dimensions range from 256 to 3072 (e.g., OpenAI text-embedding-3-small uses 1536 dimensions, text-embedding-3-large uses 3072). Higher dimensions can capture more nuanced semantic relationships but increase storage, memory, and computation costs. Some modern embedding models support Matryoshka representations, allowing you to truncate embeddings to fewer dimensions with graceful performance degradation.",
    category: "rag",
    relatedTerms: ["vector-embedding", "embedding-model", "vector-database"],
  },
  {
    slug: "multimodal-embeddings",
    term: "Multimodal Embeddings",
    definition:
      "Multimodal embeddings are vector representations that encode data from multiple modalities (text, images, audio, video) into a shared embedding space. This enables cross-modal retrieval — for example, searching for images using text descriptions or finding related audio clips from text queries. Models like CLIP (text + images) and ImageBind (six modalities) create aligned embedding spaces where semantically similar items across different modalities are close together. Multimodal embeddings are increasingly important for RAG systems that need to handle documents with images, diagrams, and mixed content.",
    category: "rag",
    relatedTerms: ["vector-embedding", "embedding-model", "semantic-search", "computer-vision"],
  },

  // ── Frameworks & Tools ──────────────────────────────────────────────────────

  {
    slug: "pydantic-ai",
    term: "Pydantic AI",
    definition:
      "Pydantic AI is a Python agent framework built by the creators of Pydantic, designed for building production-grade AI agent applications with type safety and validation at the core. It provides a model-agnostic interface supporting OpenAI, Anthropic, Google, Groq, and other providers, with first-class support for structured outputs validated by Pydantic models. Key features include dependency injection, tool registration, streaming responses, and integration with Logfire for observability. Pydantic AI emphasizes developer experience with familiar Python patterns rather than complex abstractions.",
    category: "frameworks",
    relatedTerms: ["pydantic", "ai-agent", "tool-calling", "logfire", "fastapi"],
  },
  {
    slug: "langchain",
    term: "LangChain",
    definition:
      "LangChain is a popular open-source framework for building applications with large language models. It provides abstractions for chains (sequential LLM calls), tools, memory, retrieval, and output parsing. LangChain supports a wide range of LLM providers and integrations, making it a versatile toolkit for prototyping. While its flexibility makes it easy to get started, its extensive abstraction layers can add complexity and make debugging difficult in production systems. LangChain has a large community and ecosystem, including LangSmith for observability and LangGraph for agent orchestration.",
    category: "frameworks",
    relatedTerms: ["langgraph", "large-language-models", "rag-retrieval-augmented-generation", "pydantic-ai"],
  },
  {
    slug: "langgraph",
    term: "LangGraph",
    definition:
      "LangGraph is a library built on top of LangChain for constructing stateful, multi-agent AI applications using graph-based workflows. It models agent logic as a directed graph where nodes represent actions (LLM calls, tool usage, human input) and edges represent transitions between states. LangGraph supports cycles, conditional branching, parallel execution, and persistent state, making it suitable for complex agentic workflows. It provides built-in support for human-in-the-loop interactions and can be deployed via LangGraph Platform for production use.",
    category: "frameworks",
    relatedTerms: ["langchain", "multi-agent-system", "agentic-workflow", "agent-orchestration"],
  },
  {
    slug: "crewai",
    term: "CrewAI",
    definition:
      "CrewAI is a framework for building multi-agent AI systems where autonomous agents collaborate as a 'crew' to accomplish complex tasks. Each agent has a defined role, goal, and backstory, and they communicate with each other to divide and conquer tasks. CrewAI provides abstractions for sequential, hierarchical, and consensual process flows. It focuses on making multi-agent systems accessible by using a role-playing metaphor that is intuitive for developers to reason about.",
    category: "frameworks",
    relatedTerms: ["multi-agent-system", "agent-orchestration", "ai-agent", "pydantic-ai"],
  },
  {
    slug: "fastapi",
    term: "FastAPI",
    definition:
      "FastAPI is a modern, high-performance Python web framework for building APIs, built on top of Starlette (for async HTTP) and Pydantic (for data validation). It automatically generates interactive API documentation (Swagger/OpenAPI), provides type-safe request/response handling, and supports async/await for concurrent operations. FastAPI has become the go-to choice for building AI agent backends and LLM-powered API services because of its speed, developer experience, and native Pydantic integration. It handles WebSocket connections for streaming LLM responses and integrates seamlessly with Python AI libraries.",
    category: "frameworks",
    relatedTerms: ["pydantic", "pydantic-ai", "websocket-streaming", "api-gateway"],
  },
  {
    slug: "nextjs",
    term: "Next.js",
    definition:
      "Next.js is a React framework for building full-stack web applications with features like server-side rendering (SSR), static site generation (SSG), API routes, and edge functions. It provides file-based routing, automatic code splitting, and built-in optimization for images and fonts. In the AI agent ecosystem, Next.js is commonly used as the frontend framework for building chat interfaces, dashboards, and admin panels that connect to Python/FastAPI AI backends. It handles real-time streaming UI updates via Server-Sent Events or WebSockets.",
    category: "frameworks",
    relatedTerms: ["fastapi", "server-sent-events", "websocket-streaming"],
  },
  {
    slug: "docker",
    term: "Docker",
    definition:
      "Docker is a containerization platform that packages applications and their dependencies into portable, isolated containers that run consistently across any environment. Containers use OS-level virtualization to share the host kernel while maintaining process and filesystem isolation. In AI development, Docker is essential for reproducible environments (consistent Python versions, CUDA drivers, model dependencies), local development that mirrors production, and deploying multi-service architectures (API server, worker processes, vector database, cache). Docker Compose orchestrates multi-container setups for local development.",
    category: "frameworks",
    relatedTerms: ["kubernetes", "containerization", "ci-cd-pipeline", "agent-sandbox"],
  },
  {
    slug: "kubernetes",
    term: "Kubernetes",
    definition:
      "Kubernetes (K8s) is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications. It handles service discovery, load balancing, automated rollouts and rollbacks, self-healing, and secret management. For AI applications, Kubernetes manages the complex infrastructure of LLM-powered services — scaling worker pods based on queue depth, managing GPU resources, and coordinating multiple services (API servers, model servers, vector databases). It is the standard for production AI deployments at scale.",
    category: "frameworks",
    relatedTerms: ["docker", "containerization", "load-balancing", "infrastructure-as-code"],
  },
  {
    slug: "celery",
    term: "Celery",
    definition:
      "Celery is a distributed task queue library for Python that enables asynchronous execution of long-running tasks outside of the main application process. It supports multiple message brokers (Redis, RabbitMQ) and result backends, with features like task routing, retries, rate limiting, and scheduled tasks. In AI applications, Celery handles background processing of LLM calls, document ingestion pipelines, batch embedding generation, and other compute-intensive operations that would block the API server. It allows horizontal scaling by adding more worker processes.",
    category: "frameworks",
    relatedTerms: ["redis", "fastapi", "data-pipeline"],
  },
  {
    slug: "redis",
    term: "Redis",
    definition:
      "Redis is an open-source, in-memory data structure store used as a database, cache, message broker, and streaming engine. It supports strings, hashes, lists, sets, sorted sets, and streams with sub-millisecond latency. In AI agent systems, Redis serves multiple roles: caching LLM responses to reduce cost and latency, storing conversation history and agent state, acting as a message broker for Celery task queues, managing rate limiting, and providing pub/sub for real-time event streaming. Redis is a critical infrastructure component in production AI architectures.",
    category: "frameworks",
    relatedTerms: ["celery", "agent-memory", "rate-limiting", "fastapi"],
  },
  {
    slug: "postgresql",
    term: "PostgreSQL",
    definition:
      "PostgreSQL is an advanced open-source relational database known for its reliability, feature richness, and extensibility. It supports JSON/JSONB for semi-structured data, full-text search, and a vast ecosystem of extensions. In AI applications, PostgreSQL serves as the primary data store for application data, user information, conversation logs, and audit trails. With the pgvector extension, it also doubles as a vector database, enabling a single-database architecture for both relational and vector data. This simplifies infrastructure and reduces operational complexity.",
    category: "frameworks",
    relatedTerms: ["pgvector", "database-migration", "fastapi"],
  },
  {
    slug: "pgvector",
    term: "pgvector",
    definition:
      "pgvector is a PostgreSQL extension that adds vector similarity search capabilities to PostgreSQL, enabling it to function as a vector database within your existing relational database. It supports storing embeddings as vector columns, creating HNSW or IVFFlat indexes for approximate nearest neighbor search, and filtering by metadata using standard SQL WHERE clauses. pgvector is popular for small to medium RAG deployments because it eliminates the need for a separate vector database — you can store both application data and embeddings in one place. It supports cosine distance, L2 distance, and inner product similarity metrics.",
    category: "frameworks",
    relatedTerms: ["postgresql", "vector-database", "vector-embedding", "rag-retrieval-augmented-generation"],
  },
  {
    slug: "milvus",
    term: "Milvus",
    definition:
      "Milvus is an open-source, cloud-native vector database built for scalable similarity search and AI applications. It supports billion-scale vector storage with multiple index types (HNSW, IVF, DiskANN), hybrid search combining vector and scalar filtering, and multi-tenancy. Milvus is designed for high-throughput production workloads and offers features like data partitioning, replicas, and dynamic schema. It is available as a self-hosted solution or as a managed cloud service (Zilliz Cloud), making it suitable for large-scale RAG and recommendation systems.",
    category: "frameworks",
    relatedTerms: ["vector-database", "rag-retrieval-augmented-generation", "semantic-search", "qdrant"],
  },
  {
    slug: "qdrant",
    term: "Qdrant",
    definition:
      "Qdrant is an open-source vector database and similarity search engine written in Rust, designed for high performance and production reliability. It supports payload (metadata) filtering, multi-vector storage, quantization for reduced memory usage, and HNSW indexing for fast approximate nearest neighbor search. Qdrant offers a rich filtering query language, collection aliasing for zero-downtime updates, and horizontal scaling via sharding. It is available as a self-hosted Docker image or a managed cloud service and is popular in production RAG deployments.",
    category: "frameworks",
    relatedTerms: ["vector-database", "milvus", "pinecone", "chromadb"],
  },
  {
    slug: "chromadb",
    term: "ChromaDB",
    definition:
      "ChromaDB is an open-source embedding database designed for simplicity and ease of use in AI applications. It provides a Python-first API for storing, querying, and filtering vector embeddings with minimal setup — just pip install and go. ChromaDB supports in-memory storage for development, persistent storage for production, and includes built-in document embedding using default models. While not designed for billion-scale deployments, ChromaDB excels as a lightweight solution for prototyping, small to medium RAG applications, and local development.",
    category: "frameworks",
    relatedTerms: ["vector-database", "qdrant", "pinecone", "rag-retrieval-augmented-generation"],
  },
  {
    slug: "pinecone",
    term: "Pinecone",
    definition:
      "Pinecone is a fully managed, cloud-native vector database service that handles infrastructure operations like scaling, replication, and backups automatically. It provides a simple API for upserting, querying, and filtering vectors with metadata, and supports namespaces for multi-tenancy. Pinecone offers serverless and pod-based deployment options and integrates with major AI frameworks and embedding providers. Its managed nature makes it a popular choice for teams that want vector search capabilities without the operational overhead of running a self-hosted vector database.",
    category: "frameworks",
    relatedTerms: ["vector-database", "qdrant", "milvus", "chromadb"],
  },
  {
    slug: "llamaindex",
    term: "LlamaIndex",
    definition:
      "LlamaIndex (formerly GPT Index) is a data framework for building LLM-powered applications that connect to external data sources. It specializes in data ingestion, indexing, and retrieval, providing connectors for 160+ data sources (PDFs, databases, APIs, Slack, Notion, etc.) and various index structures (vector, keyword, knowledge graph, tree). LlamaIndex handles the RAG pipeline from document loading through query engines, with built-in re-ranking, query transformation, and response synthesis. It is often used alongside agent frameworks like Pydantic AI or LangChain for the retrieval layer.",
    category: "frameworks",
    relatedTerms: ["rag-retrieval-augmented-generation", "vector-database", "document-chunking", "langchain"],
  },
  {
    slug: "logfire",
    term: "Logfire",
    definition:
      "Logfire is an observability platform by Pydantic that provides deep visibility into Python applications, with first-class support for AI/LLM workloads. It captures structured logs, traces, and metrics with automatic instrumentation for Pydantic AI agents, FastAPI endpoints, database queries, and HTTP calls. Logfire displays LLM calls with full prompt/response content, token usage, latency, and cost breakdowns. Built on OpenTelemetry, it integrates with the existing observability ecosystem while providing a specialized UI for AI application debugging and monitoring.",
    category: "frameworks",
    relatedTerms: ["opentelemetry", "pydantic-ai", "agent-observability", "pydantic"],
  },
  {
    slug: "opentelemetry",
    term: "OpenTelemetry",
    definition:
      "OpenTelemetry (OTel) is a vendor-neutral, open-source observability framework for generating, collecting, and exporting telemetry data — traces, metrics, and logs — from applications. It provides auto-instrumentation libraries for popular frameworks and a standardized protocol (OTLP) for sending data to any compatible backend (Logfire, Jaeger, Datadog, Grafana). In AI applications, OpenTelemetry traces the full lifecycle of agent requests — from API call through LLM invocation, tool execution, and database queries — providing critical visibility into latency, errors, and resource usage.",
    category: "frameworks",
    relatedTerms: ["logfire", "agent-observability", "fastapi"],
  },
  {
    slug: "pydantic",
    term: "Pydantic",
    definition:
      "Pydantic is the most widely used data validation library for Python, using type annotations to define data schemas and automatically validate, serialize, and transform data. It is the validation backbone of FastAPI and is used extensively in AI applications for defining structured LLM outputs, API request/response models, configuration management, and data pipeline schemas. Pydantic v2, rewritten with a Rust core, offers significant performance improvements. The library's emphasis on type safety and developer experience has made it fundamental to the Python AI ecosystem.",
    category: "frameworks",
    relatedTerms: ["pydantic-ai", "fastapi", "logfire"],
  },

  // ── AI Agents ───────────────────────────────────────────────────────────────

  {
    slug: "ai-agent",
    term: "AI Agent",
    definition:
      "An AI agent is a software system that uses a large language model as its reasoning engine to autonomously plan and execute multi-step tasks. Unlike simple LLM calls that produce a single response, agents operate in a loop — they observe their environment, decide what action to take (including which tools to call), execute the action, and iterate until the task is complete. Agents can browse the web, write code, query databases, call APIs, and delegate to other agents. The key distinction from basic LLM usage is the agent's ability to take actions and adapt its plan based on intermediate results.",
    category: "agents",
    relatedTerms: ["agentic-ai", "tool-calling", "agent-planning", "agentic-workflow"],
  },
  {
    slug: "agentic-ai",
    term: "Agentic AI",
    definition:
      "Agentic AI is a paradigm in artificial intelligence where systems exhibit autonomous, goal-directed behavior — planning sequences of actions, using tools, adapting to feedback, and persisting across multiple interactions. Unlike traditional AI that responds to single prompts, agentic AI systems maintain state, break down complex goals into subtasks, and can operate with minimal human supervision. The agentic approach represents a shift from AI as a tool to AI as a collaborator that can independently navigate complex workflows.",
    category: "agents",
    relatedTerms: ["ai-agent", "agentic-workflow", "agent-orchestration", "multi-agent-system"],
  },
  {
    slug: "agentic-workflow",
    term: "Agentic Workflow",
    definition:
      "An agentic workflow is a structured process where one or more AI agents execute a sequence of tasks with decision-making, branching, and iteration to accomplish a complex goal. Unlike linear pipelines, agentic workflows include conditional logic, error handling, retry mechanisms, and dynamic tool selection based on intermediate results. They often combine deterministic business logic (fixed steps, validation rules) with non-deterministic LLM reasoning (content generation, data extraction). Designing effective agentic workflows requires balancing agent autonomy with reliability and cost control.",
    category: "agents",
    relatedTerms: ["ai-agent", "agent-orchestration", "human-in-the-loop", "langgraph"],
  },
  {
    slug: "multi-agent-system",
    term: "Multi-Agent System",
    definition:
      "A multi-agent system (MAS) is an architecture where multiple specialized AI agents collaborate to solve complex problems, each with distinct roles, capabilities, and toolsets. Agents may communicate through direct messaging, shared memory, or an orchestrator that coordinates task delegation. MAS architectures enable separation of concerns — for example, a research agent handles information gathering, an analysis agent processes data, and a writing agent produces reports. This approach improves reliability (agents can be tested independently), enables parallel execution, and allows different models for different tasks.",
    category: "agents",
    relatedTerms: ["agent-orchestration", "subagent-delegation", "crewai", "langgraph"],
  },
  {
    slug: "agent-orchestration",
    term: "Agent Orchestration",
    definition:
      "Agent orchestration is the process of coordinating, managing, and directing multiple AI agents or agent steps to accomplish a complex task. An orchestrator decides which agent to invoke, passes context between agents, handles failures and retries, manages state across the workflow, and aggregates results. Orchestration patterns range from simple sequential chains to complex directed acyclic graphs (DAGs) with parallel execution and conditional branching. Effective orchestration balances agent autonomy with reliability, cost control, and human oversight.",
    category: "agents",
    relatedTerms: ["multi-agent-system", "agentic-workflow", "subagent-delegation", "langgraph"],
  },
  {
    slug: "tool-calling",
    term: "Tool Calling",
    definition:
      "Tool calling (also called function calling) is the mechanism by which an LLM invokes external functions or APIs to interact with the outside world — reading databases, calling APIs, executing code, or performing calculations. The model receives a description of available tools (name, parameters, purpose), decides which tool to use based on the user's request, outputs a structured tool call (function name + arguments), and the application executes it and returns the result. Tool calling is the foundation of agent capability, transforming passive language models into active systems that can take real-world actions.",
    category: "agents",
    relatedTerms: ["function-calling", "ai-agent", "pydantic-ai", "mcp-model-context-protocol"],
  },
  {
    slug: "function-calling",
    term: "Function Calling",
    definition:
      "Function calling is the specific API mechanism provided by LLM providers (OpenAI, Anthropic, Google) that enables models to generate structured JSON outputs matching predefined function schemas. The developer defines functions with typed parameters and descriptions, and the model returns a JSON object specifying which function to call with what arguments. Function calling is the technical implementation of tool calling — it provides the structured interface between the model's decisions and application code. It is the basis for building reliable, type-safe agent systems.",
    category: "agents",
    relatedTerms: ["tool-calling", "ai-agent", "pydantic-ai", "mcp-model-context-protocol"],
  },
  {
    slug: "human-in-the-loop",
    term: "Human-in-the-Loop",
    definition:
      "Human-in-the-loop (HITL) is a design pattern where an AI agent pauses execution at critical decision points to request human review, approval, or input before proceeding. This is essential for high-stakes actions like sending emails, making purchases, modifying production data, or approving generated content. HITL systems typically present the agent's proposed action to a human via a UI, wait for approval or modification, and then continue execution. It provides a safety net against hallucination, prompt injection, and unintended actions while still leveraging AI automation for the bulk of the work.",
    category: "agents",
    relatedTerms: ["ai-agent", "guardrails", "agentic-workflow", "agent-orchestration"],
  },
  {
    slug: "agent-memory",
    term: "Agent Memory",
    definition:
      "Agent memory refers to the mechanisms by which AI agents store, retrieve, and use information across interactions and sessions. Short-term memory (conversation history within a session) is typically managed via the LLM's context window. Long-term memory (persisting across sessions) uses external storage like vector databases, key-value stores, or relational databases to save facts, user preferences, and past interactions. Working memory (active task state) tracks the agent's current plan, completed steps, and intermediate results. Effective memory management is critical for agents that need continuity, personalization, and learning over time.",
    category: "agents",
    relatedTerms: ["ai-agent", "vector-database", "redis", "context-window"],
  },
  {
    slug: "agent-planning",
    term: "Agent Planning",
    definition:
      "Agent planning is the process by which an AI agent decomposes a high-level goal into a sequence of actionable steps, determines the order of execution, and adapts the plan as new information emerges. Planning can be implicit (the LLM reasons about steps in its chain of thought) or explicit (the agent generates a structured plan as a first step). Advanced planning techniques include plan-and-execute (generate a plan, then execute each step), reflexion (self-critique and plan revision), and tree-of-thought (exploring multiple plan branches). Good planning directly correlates with agent reliability and task completion rates.",
    category: "agents",
    relatedTerms: ["ai-agent", "chain-of-thought-prompting", "agentic-workflow", "agent-orchestration"],
  },
  {
    slug: "subagent-delegation",
    term: "Subagent Delegation",
    definition:
      "Subagent delegation is a pattern where a primary (orchestrator) agent breaks down a complex task and assigns subtasks to specialized child agents, each with their own system prompts, tools, and context. The orchestrator sends a task description to a subagent, receives the result, and incorporates it into the broader workflow. This pattern enables separation of concerns, context isolation (subagents only see relevant data), and the ability to use different LLM models for different subtasks based on their requirements. It is a core pattern in production multi-agent architectures.",
    category: "agents",
    relatedTerms: ["multi-agent-system", "agent-orchestration", "ai-agent"],
  },
  {
    slug: "mcp-model-context-protocol",
    term: "MCP (Model Context Protocol)",
    definition:
      "MCP (Model Context Protocol) is an open standard created by Anthropic for connecting AI agents and applications to external data sources and tools. MCP defines a client-server protocol where MCP servers expose resources (data) and tools (actions) through a standardized interface, and MCP clients (AI applications) can discover and use them. This eliminates the need for custom integrations for each tool — an agent that supports MCP can connect to any MCP server. MCP is gaining rapid adoption as a universal 'USB-C for AI,' enabling a plug-and-play ecosystem of tools and data sources.",
    category: "agents",
    relatedTerms: ["tool-calling", "function-calling", "ai-agent", "deferred-tools"],
  },
  {
    slug: "deferred-tools",
    term: "Deferred Tools",
    definition:
      "Deferred tools is a pattern where an AI agent's available tools are not all loaded into memory at startup, but are dynamically discovered and loaded on demand when the agent needs them. This is particularly useful in MCP-based architectures where a large catalog of tools exists but only a few are relevant for any given task. The agent starts with tool descriptions (name and purpose) and fetches full schemas (parameters, types) only when it decides to use a specific tool. Deferred tools reduce prompt size, improve performance, and enable scalable tool ecosystems.",
    category: "agents",
    relatedTerms: ["mcp-model-context-protocol", "tool-calling", "ai-agent"],
  },
  {
    slug: "prompt-injection",
    term: "Prompt Injection",
    definition:
      "Prompt injection is a security vulnerability where an attacker crafts malicious input that manipulates an LLM's behavior by overriding or altering its system prompt or instructions. Direct injection inserts adversarial instructions in user input; indirect injection hides malicious instructions in retrieved documents, web pages, or other data the agent processes. Successful prompt injection can cause the agent to leak system prompts, exfiltrate data, or perform unauthorized actions. Defending against prompt injection requires multiple layers: input sanitization, output validation, least-privilege tool access, and monitoring for anomalous behavior.",
    category: "agents",
    relatedTerms: ["guardrails", "agent-sandbox", "ai-agent", "alignment"],
  },
  {
    slug: "guardrails",
    term: "Guardrails",
    definition:
      "Guardrails are safety mechanisms and validation layers applied to AI agent inputs, outputs, and actions to ensure they remain within acceptable boundaries. Input guardrails filter or reject harmful, off-topic, or injection-attempt prompts. Output guardrails validate that generated content meets format, factuality, and safety requirements before delivery to the user. Action guardrails constrain which tools an agent can call, what parameters are allowed, and what side effects are permitted. Guardrails are essential for production AI deployments, providing defense-in-depth against hallucination, prompt injection, and unintended behavior.",
    category: "agents",
    relatedTerms: ["prompt-injection", "human-in-the-loop", "alignment", "ai-agent"],
  },
  {
    slug: "agent-sandbox",
    term: "Agent Sandbox",
    definition:
      "An agent sandbox is an isolated execution environment where an AI agent runs with restricted permissions, preventing it from affecting the broader system in unintended ways. Sandboxes limit filesystem access, network connectivity, system calls, and resource usage (CPU, memory, time). Common implementations use Docker containers, gVisor, Firecracker micro-VMs, or WebAssembly runtimes. Sandboxing is critical for agents that execute generated code or use tools with side effects, providing a safety boundary between the agent's actions and the host system.",
    category: "agents",
    relatedTerms: ["docker", "ai-agent", "guardrails", "containerization"],
  },
  {
    slug: "agent-observability",
    term: "Agent Observability",
    definition:
      "Agent observability is the practice of instrumenting AI agents with monitoring, logging, and tracing to understand their behavior, diagnose issues, and optimize performance in production. It goes beyond traditional APM to include LLM-specific telemetry: prompt/response content, token usage, tool call sequences, decision paths, latency breakdowns, cost tracking, and quality metrics. Observability is essential for debugging agent failures (why did it choose the wrong tool?), optimizing costs (which calls are unnecessary?), and ensuring quality (are responses accurate?). Tools like Logfire and LangSmith provide specialized agent observability capabilities.",
    category: "agents",
    relatedTerms: ["logfire", "opentelemetry", "cost-tracking", "ai-agent"],
  },
  {
    slug: "cost-tracking",
    term: "Cost Tracking",
    definition:
      "Cost tracking in AI applications involves monitoring and attributing the financial costs of LLM API calls, embedding generation, vector database queries, and compute resources to specific users, features, or agent runs. Each LLM call has a cost determined by the model used and the number of input/output tokens consumed. Without cost tracking, a single poorly-designed agent loop can generate unexpectedly large bills. Production systems implement cost tracking at the request level, set per-user and per-agent budgets, and alert on anomalous spending patterns.",
    category: "agents",
    relatedTerms: ["token-budget", "agent-observability", "input-tokens", "output-tokens"],
  },
  {
    slug: "token-budget",
    term: "Token Budget",
    definition:
      "A token budget is a configurable limit on the total number of tokens (input + output) an AI agent or request is allowed to consume. It serves as a cost control mechanism, preventing runaway agent loops or unexpectedly long responses from generating large API bills. Token budgets can be set at the request level, per agent run, per user, or per time period. When a budget is exhausted, the agent must either complete its current task with a summary or gracefully terminate. Token budgets are a critical production safety measure alongside rate limiting and cost tracking.",
    category: "agents",
    relatedTerms: ["cost-tracking", "input-tokens", "output-tokens", "rate-limiting"],
  },

  // ── Infrastructure ──────────────────────────────────────────────────────────

  {
    slug: "websocket-streaming",
    term: "WebSocket Streaming",
    definition:
      "WebSocket streaming uses the WebSocket protocol to establish a persistent, full-duplex communication channel between the client and server, enabling real-time bidirectional data flow. In AI applications, WebSockets stream LLM-generated tokens to the client as they are produced, providing a responsive 'typing' experience rather than waiting for the complete response. WebSockets also allow the client to send interruption signals (stop generation) and receive structured events (tool calls, status updates) during agent execution. They are the preferred transport for interactive AI chat applications.",
    category: "infrastructure",
    relatedTerms: ["server-sent-events", "fastapi", "nextjs"],
  },
  {
    slug: "server-sent-events",
    term: "Server-Sent Events",
    definition:
      "Server-Sent Events (SSE) is a standard HTTP-based protocol for server-to-client streaming, where the server pushes events over a long-lived HTTP connection. SSE is simpler than WebSockets — it uses standard HTTP, works through proxies and load balancers without special configuration, and automatically reconnects on disconnection. In AI applications, SSE is commonly used to stream LLM token generation to the client. While it only supports server-to-client communication (unlike WebSocket's bidirectional flow), this is sufficient for most LLM streaming use cases. Many LLM APIs (OpenAI, Anthropic) use SSE as their streaming format.",
    category: "infrastructure",
    relatedTerms: ["websocket-streaming", "fastapi", "api-gateway"],
  },
  {
    slug: "api-gateway",
    term: "API Gateway",
    definition:
      "An API gateway is a reverse proxy that sits between clients and backend services, providing a single entry point for API requests. It handles cross-cutting concerns like authentication, rate limiting, request routing, load balancing, SSL termination, request/response transformation, and monitoring. In AI architectures, API gateways manage access to LLM endpoints, enforce per-user rate limits and token budgets, route requests to different model providers, and provide a unified API surface for multiple backend services. Popular options include Kong, Traefik, AWS API Gateway, and Nginx.",
    category: "infrastructure",
    relatedTerms: ["rate-limiting", "authentication-jwt", "reverse-proxy", "load-balancing"],
  },
  {
    slug: "rate-limiting",
    term: "Rate Limiting",
    definition:
      "Rate limiting is a technique for controlling the frequency of requests a client can make to an API or service within a specified time window. It protects services from abuse, ensures fair resource allocation among users, and prevents downstream services (like LLM APIs) from being overwhelmed. Common algorithms include fixed window, sliding window, token bucket, and leaky bucket. In AI applications, rate limiting is applied at multiple layers: API gateway (requests per minute), LLM proxy (tokens per minute), and application level (agent runs per user per day).",
    category: "infrastructure",
    relatedTerms: ["api-gateway", "token-budget", "cost-tracking", "load-balancing"],
  },
  {
    slug: "authentication-jwt",
    term: "Authentication (JWT)",
    definition:
      "JWT (JSON Web Token) authentication is a stateless authentication mechanism where the server issues a digitally signed token containing user identity claims after successful login. The client includes this token in subsequent requests (typically in the Authorization header), and the server verifies the signature without needing to query a session store. JWTs are self-contained, carry an expiration time, and can include custom claims like user roles and permissions. In AI applications, JWT authentication secures API endpoints, identifies users for cost tracking, and enforces per-user rate limits and token budgets.",
    category: "infrastructure",
    relatedTerms: ["oauth", "api-gateway", "rate-limiting"],
  },
  {
    slug: "oauth",
    term: "OAuth",
    definition:
      "OAuth 2.0 is an authorization framework that enables third-party applications to access resources on behalf of a user without exposing their credentials. It uses access tokens issued by an authorization server after the user grants permission, supporting flows like Authorization Code (web apps), Client Credentials (service-to-service), and PKCE (mobile/SPA). In AI applications, OAuth enables secure integration with external services (Google, GitHub, Slack), allows agents to act on behalf of users in other systems, and provides the standard authentication layer for MCP servers accessing user data.",
    category: "infrastructure",
    relatedTerms: ["authentication-jwt", "api-gateway", "mcp-model-context-protocol"],
  },
  {
    slug: "cors",
    term: "CORS",
    definition:
      "CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls which web origins can make requests to your API. By default, browsers block cross-origin requests (e.g., a frontend at app.example.com calling an API at api.example.com). CORS headers configure which origins, HTTP methods, and headers are allowed. In AI applications with separate frontend and backend services, proper CORS configuration is essential for the frontend to communicate with the API server, WebSocket endpoints, and SSE streams. Misconfigured CORS is a common source of deployment issues.",
    category: "infrastructure",
    relatedTerms: ["api-gateway", "content-security-policy", "fastapi"],
  },
  {
    slug: "content-security-policy",
    term: "Content Security Policy",
    definition:
      "Content Security Policy (CSP) is a browser security standard that defines which resources (scripts, styles, images, connections) a web page is allowed to load. It is delivered via HTTP headers and helps prevent cross-site scripting (XSS), data injection, and other code injection attacks. In AI applications, CSP is particularly important because chat interfaces may render LLM-generated content — a strict CSP prevents any injected scripts from executing. CSP also controls which origins can be connected to via WebSocket or fetch, adding defense-in-depth for streaming AI interfaces.",
    category: "infrastructure",
    relatedTerms: ["cors", "prompt-injection", "api-gateway"],
  },
  {
    slug: "ci-cd-pipeline",
    term: "CI/CD Pipeline",
    definition:
      "A CI/CD (Continuous Integration / Continuous Deployment) pipeline automates the process of building, testing, and deploying software changes. CI automatically runs tests, linting, and type checking on every commit. CD automatically deploys validated changes to staging or production environments. In AI applications, CI/CD pipelines additionally handle model validation, prompt regression testing, embedding model updates, and vector database re-indexing. Popular tools include GitHub Actions, GitLab CI, and Jenkins. Well-designed CI/CD is critical for maintaining the reliability of production AI systems through frequent, safe updates.",
    category: "infrastructure",
    relatedTerms: ["docker", "infrastructure-as-code", "containerization"],
  },
  {
    slug: "infrastructure-as-code",
    term: "Infrastructure as Code",
    definition:
      "Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable configuration files rather than manual processes. IaC enables version-controlled, reproducible, and auditable infrastructure changes — the same code always produces the same infrastructure. Tools include Terraform (multi-cloud), Pulumi (general-purpose programming languages), and cloud-specific tools like AWS CDK and Google Deployment Manager. In AI deployments, IaC manages GPU instances, vector database clusters, load balancers, and networking configurations that make up complex AI serving infrastructure.",
    category: "infrastructure",
    relatedTerms: ["kubernetes", "docker", "ci-cd-pipeline", "containerization"],
  },
  {
    slug: "containerization",
    term: "Containerization",
    definition:
      "Containerization is the process of packaging an application and all its dependencies (runtime, libraries, system tools, configuration) into a standardized, portable unit called a container. Containers share the host OS kernel but maintain isolated process and filesystem environments, making them lighter than virtual machines. Containerization ensures that applications run identically across development, testing, and production environments. In AI development, containerization is essential for managing complex dependency chains (CUDA, PyTorch, model files), enabling reproducible builds, and deploying multi-service architectures.",
    category: "infrastructure",
    relatedTerms: ["docker", "kubernetes", "agent-sandbox", "ci-cd-pipeline"],
  },
  {
    slug: "reverse-proxy",
    term: "Reverse Proxy",
    definition:
      "A reverse proxy is a server that sits in front of backend services and forwards client requests to the appropriate backend, adding capabilities like SSL termination, load balancing, caching, and request routing. Unlike a forward proxy (which acts on behalf of clients), a reverse proxy acts on behalf of servers. In AI architectures, reverse proxies (Nginx, Caddy, Traefik) handle SSL, route traffic to different services (API, WebSocket, static files), provide rate limiting, and enable zero-downtime deployments through upstream switching.",
    category: "infrastructure",
    relatedTerms: ["load-balancing", "api-gateway", "websocket-streaming"],
  },
  {
    slug: "load-balancing",
    term: "Load Balancing",
    definition:
      "Load balancing distributes incoming network traffic across multiple backend server instances to ensure no single server becomes a bottleneck, improving application availability and responsiveness. Algorithms include round-robin, least connections, IP hash, and weighted distribution. In AI applications, load balancing distributes LLM inference requests across multiple model-serving instances, routes WebSocket connections for streaming, and manages traffic spikes during high-usage periods. Health checks automatically remove unhealthy instances from the pool, ensuring requests only reach functional servers.",
    category: "infrastructure",
    relatedTerms: ["reverse-proxy", "api-gateway", "health-check", "kubernetes"],
  },
  {
    slug: "health-check",
    term: "Health Check",
    definition:
      "A health check is an endpoint or probe that reports whether a service is running and ready to accept requests. Health checks come in two flavors: liveness probes (is the process alive?) and readiness probes (is the service ready to handle traffic?). In AI deployments, health checks verify not only that the API server is running but also that model files are loaded, database connections are active, and vector database indexes are available. Kubernetes, load balancers, and orchestration systems use health checks to automatically restart failed services and route traffic away from unhealthy instances.",
    category: "infrastructure",
    relatedTerms: ["load-balancing", "kubernetes", "model-serving"],
  },
  {
    slug: "database-migration",
    term: "Database Migration",
    definition:
      "Database migration is the process of evolving a database schema over time through versioned, incremental change scripts that can be applied (and often rolled back) in order. Migration tools like Alembic (Python/SQLAlchemy), Prisma Migrate (TypeScript), and Flyway track which migrations have been applied and ensure consistent schema across environments. In AI applications, migrations manage conversation history tables, vector storage schemas, user preferences, agent run logs, and cost tracking records. Automated migration as part of CI/CD ensures database schema stays in sync with application code.",
    category: "infrastructure",
    relatedTerms: ["postgresql", "ci-cd-pipeline", "fastapi"],
  },

  // ── MLOps ───────────────────────────────────────────────────────────────────

  {
    slug: "mlops",
    term: "MLOps",
    definition:
      "MLOps (Machine Learning Operations) is a set of practices for automating and operationalizing the full lifecycle of machine learning systems — from data preparation and model training through deployment, monitoring, and retraining. It applies DevOps principles (CI/CD, infrastructure as code, monitoring) to ML-specific challenges like data versioning, experiment tracking, model registry, feature stores, and model drift detection. MLOps aims to bridge the gap between ML experimentation and production deployment, reducing the time from model development to business value.",
    category: "mlops",
    relatedTerms: ["llmops", "model-serving", "experiment-tracking", "model-monitoring"],
  },
  {
    slug: "llmops",
    term: "LLMOps",
    definition:
      "LLMOps is an emerging discipline focused on the operational aspects specific to deploying and managing large language model applications in production. Unlike traditional MLOps (which focuses on model training and retraining), LLMOps addresses prompt management and versioning, evaluation of non-deterministic outputs, cost optimization, provider management, context window optimization, guardrails configuration, and observability of LLM-specific metrics (token usage, latency, hallucination rates). LLMOps acknowledges that most teams consume LLMs via APIs rather than training them, shifting focus from training pipelines to inference optimization and application quality.",
    category: "mlops",
    relatedTerms: ["mlops", "agent-observability", "cost-tracking", "model-serving"],
  },
  {
    slug: "model-serving",
    term: "Model Serving",
    definition:
      "Model serving is the infrastructure and systems responsible for hosting trained machine learning models and making them available for inference via APIs. It handles model loading, request batching, GPU memory management, scaling, version routing, and health monitoring. For LLMs, model serving platforms like vLLM, TGI (Text Generation Inference), and Triton optimize throughput through techniques like continuous batching, PagedAttention, and speculative decoding. Model serving is the bridge between a trained model artifact and a production application that needs predictions.",
    category: "mlops",
    relatedTerms: ["inference", "quantization", "a-b-testing", "health-check"],
  },
  {
    slug: "a-b-testing",
    term: "A/B Testing",
    definition:
      "A/B testing in AI applications is the practice of comparing two or more variants (different models, prompts, configurations, or features) by randomly assigning users to each variant and measuring the impact on key metrics. In LLM applications, A/B tests can compare different models (GPT-4 vs Claude), prompt variations, temperature settings, retrieval strategies, or UI presentations. A/B testing is essential for making data-driven decisions about model selection, prompt engineering, and feature rollouts, replacing subjective judgment with statistical evidence.",
    category: "mlops",
    relatedTerms: ["experiment-tracking", "model-serving", "model-monitoring"],
  },
  {
    slug: "feature-store",
    term: "Feature Store",
    definition:
      "A feature store is a centralized repository for storing, managing, and serving machine learning features (engineered input variables) consistently across training and inference. It ensures that the same feature computation logic is used in both environments, preventing training-serving skew. Feature stores provide feature versioning, online (low-latency) and offline (batch) serving, feature sharing across teams, and lineage tracking. While less relevant for pure LLM applications, feature stores are important in hybrid systems that combine traditional ML models with LLM-powered agents.",
    category: "mlops",
    relatedTerms: ["mlops", "data-pipeline", "model-registry"],
  },
  {
    slug: "model-registry",
    term: "Model Registry",
    definition:
      "A model registry is a centralized store for managing the lifecycle of trained machine learning models. It tracks model versions, metadata (hyperparameters, training data, metrics), lineage (which data and code produced the model), and deployment status (staging, production, archived). Model registries enable reproducibility, governance, and audit trails. For LLM applications using hosted APIs, the model registry concept extends to tracking prompt versions, system configurations, and fine-tuned model identifiers alongside their evaluation metrics.",
    category: "mlops",
    relatedTerms: ["mlops", "experiment-tracking", "model-serving", "model-monitoring"],
  },
  {
    slug: "data-pipeline",
    term: "Data Pipeline",
    definition:
      "A data pipeline is an automated workflow that extracts data from sources, transforms it through processing stages, and loads it into destination systems (ETL/ELT). In AI applications, data pipelines handle document ingestion for RAG systems, training data preparation, feature computation, log aggregation for analytics, and feedback loop processing. Modern data pipelines are orchestrated by tools like Airflow, Prefect, or Dagster and must handle data quality checks, schema validation, and lineage tracking. Reliable data pipelines are the foundation of trustworthy AI systems.",
    category: "mlops",
    relatedTerms: ["indexing-pipeline", "feature-store", "mlops", "celery"],
  },
  {
    slug: "experiment-tracking",
    term: "Experiment Tracking",
    definition:
      "Experiment tracking is the systematic recording and comparison of machine learning experiment configurations, parameters, metrics, and artifacts. It answers 'what changed and what was the result?' across hundreds or thousands of experiment runs. Tools like MLflow, Weights & Biases, and Neptune.ai log hyperparameters, training curves, evaluation metrics, model checkpoints, and environment details. For LLM applications, experiment tracking extends to logging prompt versions, model configurations, evaluation scores (BLEU, ROUGE, human ratings), and cost/latency metrics for different setups.",
    category: "mlops",
    relatedTerms: ["mlops", "model-registry", "a-b-testing", "model-monitoring"],
  },
  {
    slug: "model-monitoring",
    term: "Model Monitoring",
    definition:
      "Model monitoring is the continuous surveillance of a deployed machine learning model's performance, behavior, and health in production. It tracks prediction quality metrics, latency, throughput, error rates, and resource utilization over time. Model monitoring detects performance degradation (due to data drift, concept drift, or system issues) and triggers alerts or automated retraining. For LLM applications, monitoring includes tracking response quality (user ratings, hallucination rates), token usage trends, cost anomalies, and safety metric violations. It is the production safety net that ensures AI systems continue to perform as expected.",
    category: "mlops",
    relatedTerms: ["drift-detection", "mlops", "agent-observability", "experiment-tracking"],
  },
  {
    slug: "drift-detection",
    term: "Drift Detection",
    definition:
      "Drift detection monitors changes in the statistical properties of input data (data drift) or the relationship between inputs and outputs (concept drift) that can cause a deployed model's performance to degrade over time. Data drift occurs when real-world data distributions shift away from training data (e.g., new topics, changed user behavior). Concept drift occurs when the underlying pattern the model learned changes (e.g., market conditions evolve). For LLM applications, drift detection monitors changes in query distributions, topic frequencies, and response quality metrics to flag when re-evaluation or prompt updates are needed.",
    category: "mlops",
    relatedTerms: ["model-monitoring", "mlops", "a-b-testing"],
  },

  // ── AI Fundamentals (new) ───────────────────────────────────────────────────

  {
    slug: "artificial-general-intelligence",
    term: "Artificial General Intelligence (AGI)",
    definition:
      "Artificial General Intelligence (AGI) refers to a hypothetical AI system that possesses the ability to understand, learn, and apply knowledge across any intellectual task that a human can perform. Unlike narrow AI, which excels at specific tasks, AGI would demonstrate flexible reasoning, transfer learning across domains, and common-sense understanding without task-specific training. AGI remains a long-term research goal and is the subject of significant debate regarding its feasibility, timeline, and safety implications.",
    category: "ai-fundamentals",
    relatedTerms: ["artificial-intelligence", "artificial-narrow-intelligence", "artificial-superintelligence"],
  },
  {
    slug: "artificial-narrow-intelligence",
    term: "Artificial Narrow Intelligence (ANI)",
    definition:
      "Artificial Narrow Intelligence (ANI), also known as weak AI, describes AI systems designed and optimized for a single specific task or a narrow set of related tasks. All current AI systems, including large language models, image classifiers, and game-playing engines, are forms of ANI. While these systems can vastly outperform humans within their domain, they lack the general-purpose reasoning and adaptability that would characterize AGI.",
    category: "ai-fundamentals",
    relatedTerms: ["artificial-intelligence", "artificial-general-intelligence", "machine-learning"],
  },
  {
    slug: "artificial-superintelligence",
    term: "Artificial Superintelligence (ASI)",
    definition:
      "Artificial Superintelligence (ASI) is a theoretical level of AI that surpasses the cognitive abilities of all humans in virtually every domain, including scientific creativity, social intelligence, and general wisdom. ASI would not only match human performance but exceed it by orders of magnitude. The concept is central to AI safety research, as a superintelligent system's goals and values would need to be carefully aligned with humanity's interests to prevent catastrophic outcomes.",
    category: "ai-fundamentals",
    relatedTerms: ["artificial-general-intelligence", "alignment", "ai-safety"],
  },
  {
    slug: "supervised-learning",
    term: "Supervised Learning",
    definition:
      "Supervised learning is a machine learning paradigm where models are trained on labeled datasets — input-output pairs where the correct answer is provided. The algorithm learns a mapping function from inputs to outputs by minimizing the error between its predictions and the true labels. Common supervised learning tasks include classification (assigning categories) and regression (predicting continuous values). It is the most widely used ML paradigm and forms the basis for training many components of modern AI systems.",
    category: "ai-fundamentals",
    relatedTerms: ["unsupervised-learning", "machine-learning", "loss-function", "deep-learning"],
  },
  {
    slug: "unsupervised-learning",
    term: "Unsupervised Learning",
    definition:
      "Unsupervised learning is a machine learning paradigm where models learn patterns and structure from unlabeled data without explicit target outputs. The algorithm discovers hidden relationships, clusters, and distributions in the data on its own. Common techniques include clustering (K-means, DBSCAN), dimensionality reduction (PCA, t-SNE), and generative modeling (autoencoders, GANs). Pre-training of large language models on raw text is a form of self-supervised learning, closely related to unsupervised learning.",
    category: "ai-fundamentals",
    relatedTerms: ["supervised-learning", "machine-learning", "deep-learning", "generative-adversarial-network"],
  },
  {
    slug: "neural-network",
    term: "Neural Network",
    definition:
      "A neural network is a computational model inspired by biological neurons, consisting of layers of interconnected nodes (neurons) that process information by applying weighted transformations and non-linear activation functions. The network learns by adjusting these weights during training to minimize a loss function via backpropagation and gradient descent. Neural networks form the foundation of deep learning, with architectures ranging from simple feedforward networks to complex transformers, CNNs, and RNNs used in modern AI applications.",
    category: "ai-fundamentals",
    relatedTerms: ["deep-learning", "backpropagation", "gradient-descent", "loss-function"],
  },
  {
    slug: "lora",
    term: "LoRA",
    definition:
      "LoRA (Low-Rank Adaptation) is a parameter-efficient fine-tuning technique that freezes the pre-trained model weights and injects trainable low-rank decomposition matrices into each transformer layer. Instead of updating all parameters during fine-tuning, LoRA only trains these small adapter matrices, reducing trainable parameters by 10,000x or more while achieving performance comparable to full fine-tuning. LoRA adapters are small files (typically megabytes vs. gigabytes for full models) that can be swapped at inference time, enabling a single base model to serve multiple specialized tasks.",
    category: "ai-fundamentals",
    relatedTerms: ["qlora", "fine-tuning", "transfer-learning", "large-language-models"],
  },
  {
    slug: "qlora",
    term: "QLoRA",
    definition:
      "QLoRA (Quantized LoRA) combines quantization with LoRA to enable fine-tuning of large language models on consumer-grade hardware. It first quantizes the pre-trained model to 4-bit precision using NormalFloat (NF4) data type, then applies LoRA adapters on top of the quantized base. QLoRA introduces innovations like double quantization and paged optimizers to reduce memory usage further. This technique makes it possible to fine-tune a 65B parameter model on a single 48GB GPU while maintaining performance close to full 16-bit fine-tuning.",
    category: "ai-fundamentals",
    relatedTerms: ["lora", "quantization", "fine-tuning", "large-language-models"],
  },
  {
    slug: "rlhf",
    term: "RLHF",
    definition:
      "RLHF (Reinforcement Learning from Human Feedback) is a training technique used to align language models with human preferences and values. The process involves three stages: supervised fine-tuning on high-quality demonstrations, training a reward model on human preference rankings of model outputs, and optimizing the language model against this reward model using reinforcement learning (typically PPO). RLHF is responsible for making models like ChatGPT helpful, harmless, and honest, transforming base models into instruction-following assistants.",
    category: "ai-fundamentals",
    relatedTerms: ["alignment", "reinforcement-learning", "dpo", "constitutional-ai"],
  },
  {
    slug: "dpo",
    term: "DPO",
    definition:
      "DPO (Direct Preference Optimization) is an alignment technique that simplifies RLHF by eliminating the need for a separate reward model and reinforcement learning phase. DPO directly optimizes the language model on human preference data using a classification-style loss function derived from the theoretical optimal RL solution. It is simpler to implement, more stable to train, and computationally cheaper than RLHF while achieving comparable alignment quality. DPO has become increasingly popular for fine-tuning open-weight models to follow instructions and align with human preferences.",
    category: "ai-fundamentals",
    relatedTerms: ["rlhf", "alignment", "fine-tuning", "large-language-models"],
  },
  {
    slug: "bias",
    term: "Bias",
    definition:
      "Bias in AI refers to systematic errors or unfair prejudices in model outputs that arise from imbalanced training data, flawed assumptions in model design, or societal biases encoded in the data. Bias can manifest as demographic stereotypes, underrepresentation of minority groups, or skewed predictions that disproportionately affect certain populations. Addressing bias requires careful data curation, bias auditing tools, diverse evaluation benchmarks, and ongoing monitoring. Bias mitigation is a critical concern for responsible AI deployment, particularly in high-stakes domains like hiring, lending, and healthcare.",
    category: "ai-fundamentals",
    relatedTerms: ["alignment", "explainable-ai", "bias-auditing", "responsible-ai"],
  },
  {
    slug: "explainable-ai",
    term: "Explainable AI (XAI)",
    definition:
      "Explainable AI (XAI) is a set of techniques and methods that make AI system decisions understandable and interpretable to humans. XAI addresses the 'black box' problem of complex models like deep neural networks, where the reasoning behind predictions is opaque. Techniques include attention visualization, SHAP values, LIME, saliency maps, and chain-of-thought reasoning in LLMs. Explainability is increasingly required by regulations (EU AI Act) and is essential for building trust in AI systems used for consequential decisions.",
    category: "ai-fundamentals",
    relatedTerms: ["bias", "ai-ethics", "ai-governance", "responsible-ai"],
  },
  {
    slug: "diffusion-model",
    term: "Diffusion Model",
    definition:
      "A diffusion model is a class of generative AI model that creates data (typically images) by learning to reverse a gradual noising process. During training, the model learns to denoise data that has been progressively corrupted with Gaussian noise. During generation, it starts from pure noise and iteratively denoises it into a coherent output guided by text or other conditioning signals. Diffusion models power state-of-the-art image generators like Stable Diffusion, DALL-E 3, and Midjourney, and are being extended to video, audio, and 3D generation.",
    category: "ai-fundamentals",
    relatedTerms: ["generative-ai", "generative-adversarial-network", "deep-learning"],
  },
  {
    slug: "convolutional-neural-network",
    term: "Convolutional Neural Network (CNN)",
    definition:
      "A Convolutional Neural Network (CNN) is a deep learning architecture designed for processing grid-structured data like images, using convolutional layers that apply learnable filters to detect spatial features such as edges, textures, and shapes. CNNs use weight sharing and local connectivity to dramatically reduce parameters compared to fully connected networks, making them efficient for image processing. While vision transformers have gained prominence, CNNs remain widely used in computer vision tasks including image classification, object detection, and medical imaging.",
    category: "ai-fundamentals",
    relatedTerms: ["deep-learning", "computer-vision", "neural-network", "object-detection"],
  },
  {
    slug: "recurrent-neural-network",
    term: "Recurrent Neural Network (RNN)",
    definition:
      "A Recurrent Neural Network (RNN) is a neural network architecture designed for sequential data, where connections between nodes form a directed cycle that allows information to persist across time steps. RNNs process sequences one element at a time, maintaining a hidden state that captures context from previous inputs. While historically important for NLP, speech recognition, and time series analysis, vanilla RNNs suffer from vanishing gradient problems with long sequences. They have been largely superseded by LSTMs, GRUs, and ultimately transformers for most sequence modeling tasks.",
    category: "ai-fundamentals",
    relatedTerms: ["lstm", "neural-network", "transformer-architecture", "deep-learning"],
  },
  {
    slug: "lstm",
    term: "LSTM",
    definition:
      "LSTM (Long Short-Term Memory) is a specialized recurrent neural network architecture that addresses the vanishing gradient problem through a gating mechanism consisting of input, forget, and output gates. These gates control what information to store, discard, and output from the cell state, enabling the network to learn long-range dependencies in sequential data. LSTMs were the dominant architecture for NLP tasks before transformers, used in machine translation, speech recognition, and text generation. They remain useful in applications requiring real-time sequential processing with limited compute.",
    category: "ai-fundamentals",
    relatedTerms: ["recurrent-neural-network", "neural-network", "transformer-architecture"],
  },
  {
    slug: "multi-head-attention",
    term: "Multi-Head Attention",
    definition:
      "Multi-head attention is a mechanism in the transformer architecture where the self-attention operation is performed multiple times in parallel across different learned linear projections (heads) of the queries, keys, and values. Each head can attend to different aspects of the input — one might focus on syntactic relationships while another captures semantic similarity. The outputs of all heads are concatenated and linearly projected to produce the final result. Multi-head attention enables transformers to capture diverse types of relationships in a single layer.",
    category: "ai-fundamentals",
    relatedTerms: ["self-attention", "attention-mechanism", "transformer-architecture"],
  },
  {
    slug: "attention-mechanism",
    term: "Attention Mechanism",
    definition:
      "An attention mechanism is a neural network component that allows a model to dynamically focus on the most relevant parts of its input when producing each element of its output. It computes a weighted combination of input representations, where the weights (attention scores) indicate the relevance of each input element to the current computation. Attention was originally introduced for sequence-to-sequence models and became the foundational building block of the transformer architecture. Variants include self-attention, cross-attention, and causal attention.",
    category: "ai-fundamentals",
    relatedTerms: ["self-attention", "multi-head-attention", "transformer-architecture"],
  },
  {
    slug: "beam-search",
    term: "Beam Search",
    definition:
      "Beam search is a text generation decoding strategy that maintains the top-K most promising partial sequences (beams) at each step, expanding them in parallel and pruning to keep only the highest-scoring candidates. Unlike greedy decoding (which picks the single best token at each step), beam search explores multiple paths to find sequences with higher overall probability. Beam search is particularly effective for tasks requiring structured, deterministic output like machine translation and code generation. The beam width parameter controls the trade-off between exploration breadth and computational cost.",
    category: "ai-fundamentals",
    relatedTerms: ["top-k-sampling", "top-p-sampling", "temperature", "next-token-prediction"],
  },
  {
    slug: "loss-function",
    term: "Loss Function",
    definition:
      "A loss function (also called cost function or objective function) is a mathematical function that quantifies the difference between a model's predictions and the actual target values during training. The training process aims to minimize this loss through gradient descent and backpropagation. Common loss functions include cross-entropy loss (for classification), mean squared error (for regression), and contrastive loss (for embedding learning). For language models, the primary loss is cross-entropy between predicted token probabilities and actual next tokens.",
    category: "ai-fundamentals",
    relatedTerms: ["gradient-descent", "backpropagation", "neural-network", "supervised-learning"],
  },
  {
    slug: "gradient-descent",
    term: "Gradient Descent",
    definition:
      "Gradient descent is the primary optimization algorithm used to train neural networks, iteratively adjusting model weights in the direction that reduces the loss function. The gradient (vector of partial derivatives) indicates the steepest direction of loss increase, so the algorithm steps in the opposite direction. Variants include stochastic gradient descent (SGD, using single samples), mini-batch gradient descent (using small batches), and advanced optimizers like Adam and AdamW that adapt learning rates per parameter. Gradient descent is the engine that powers all deep learning training.",
    category: "ai-fundamentals",
    relatedTerms: ["backpropagation", "loss-function", "learning-rate", "neural-network"],
  },
  {
    slug: "backpropagation",
    term: "Backpropagation",
    definition:
      "Backpropagation (backward propagation of errors) is the algorithm used to compute gradients of the loss function with respect to each weight in a neural network, enabling gradient descent optimization. It works by applying the chain rule of calculus, propagating error signals backward from the output layer through each hidden layer to efficiently compute all gradients in a single pass. Backpropagation is the fundamental training algorithm that makes deep learning possible, as it provides the gradient information needed to update billions of parameters in modern neural networks.",
    category: "ai-fundamentals",
    relatedTerms: ["gradient-descent", "loss-function", "neural-network", "deep-learning"],
  },
  {
    slug: "hyperparameter",
    term: "Hyperparameter",
    definition:
      "A hyperparameter is a configuration value set before training begins that controls the learning process rather than being learned from data. Examples include learning rate, batch size, number of epochs, number of layers, dropout rate, and optimizer choice. Unlike model parameters (weights and biases) that are optimized during training, hyperparameters must be tuned through experimentation, grid search, random search, or Bayesian optimization. Poor hyperparameter choices can lead to underfitting, overfitting, or failed training convergence.",
    category: "ai-fundamentals",
    relatedTerms: ["learning-rate", "batch-size", "epoch", "overfitting"],
  },
  {
    slug: "epoch",
    term: "Epoch",
    definition:
      "An epoch is one complete pass through the entire training dataset during model training. During each epoch, the model sees every training example once, updating its weights via backpropagation after each mini-batch. Training typically requires multiple epochs for the model to converge, but too many epochs can lead to overfitting. The optimal number of epochs is determined by monitoring validation loss — training stops when validation performance begins to degrade (early stopping). Modern LLM pre-training may use only 1-2 epochs over massive datasets.",
    category: "ai-fundamentals",
    relatedTerms: ["batch-size", "hyperparameter", "overfitting", "learning-rate"],
  },
  {
    slug: "batch-size",
    term: "Batch Size",
    definition:
      "Batch size is the number of training examples processed together in a single forward and backward pass before the model's weights are updated. Larger batch sizes provide more stable gradient estimates and better GPU utilization, but require more memory and may converge to sharper (less generalizable) minima. Smaller batch sizes introduce beneficial noise that can help escape local minima but are less computationally efficient. Common batch sizes range from 8 to 4096, and techniques like gradient accumulation allow effective large batch training on limited GPU memory.",
    category: "ai-fundamentals",
    relatedTerms: ["epoch", "hyperparameter", "gradient-descent", "learning-rate"],
  },
  {
    slug: "learning-rate",
    term: "Learning Rate",
    definition:
      "The learning rate is a hyperparameter that controls how much model weights are adjusted in response to the computed gradient during each optimization step. A learning rate too high causes training to diverge or oscillate; too low causes training to converge painfully slowly or get stuck in poor local minima. Modern training uses learning rate schedules (warmup followed by cosine decay) and adaptive optimizers (Adam, AdamW) that adjust the effective learning rate per parameter. The learning rate is often considered the single most important hyperparameter to tune.",
    category: "ai-fundamentals",
    relatedTerms: ["gradient-descent", "hyperparameter", "batch-size", "epoch"],
  },
  {
    slug: "data-augmentation",
    term: "Data Augmentation",
    definition:
      "Data augmentation is a technique for artificially increasing the size and diversity of training data by applying transformations to existing examples. For images, this includes rotation, flipping, cropping, color jittering, and mixup. For text, augmentations include synonym replacement, back-translation, paraphrasing, and random deletion. Data augmentation reduces overfitting, improves model generalization, and is particularly valuable when labeled data is scarce. Modern approaches also use generative AI to synthesize entirely new training examples (synthetic data augmentation).",
    category: "ai-fundamentals",
    relatedTerms: ["synthetic-data", "overfitting", "supervised-learning", "machine-learning"],
  },
  {
    slug: "synthetic-data",
    term: "Synthetic Data",
    definition:
      "Synthetic data is artificially generated data that mimics the statistical properties and patterns of real-world data without containing actual sensitive information. It is created using generative models, simulation engines, or rule-based systems and is used for training ML models when real data is scarce, expensive, or privacy-sensitive. In the LLM ecosystem, synthetic data generated by stronger models is increasingly used to train or fine-tune smaller models (a form of knowledge distillation). Synthetic data raises quality concerns — models trained on model-generated data can amplify biases and errors.",
    category: "ai-fundamentals",
    relatedTerms: ["data-augmentation", "knowledge-distillation", "fine-tuning", "differential-privacy"],
  },
  {
    slug: "federated-learning",
    term: "Federated Learning",
    definition:
      "Federated learning is a distributed machine learning approach where models are trained across multiple decentralized devices or servers holding local data, without exchanging the raw data itself. Each participant trains a local model on their data and shares only model updates (gradients or weights) with a central server, which aggregates them into a global model. This preserves data privacy and complies with regulations like GDPR. Federated learning is used in mobile keyboard prediction, healthcare (training on hospital data without sharing patient records), and edge AI applications.",
    category: "ai-fundamentals",
    relatedTerms: ["differential-privacy", "edge-computing", "machine-learning", "privacy-enhancing-technologies"],
  },
  {
    slug: "edge-computing",
    term: "Edge Computing",
    definition:
      "Edge computing is a distributed computing paradigm that processes data near the source of data generation (edge devices) rather than in a centralized cloud data center. For AI applications, edge computing enables running inference locally on devices like smartphones, IoT sensors, robots, and embedded systems, reducing latency, bandwidth costs, and privacy risks. Edge AI requires optimized, smaller models (via quantization, distillation, or pruning) that can run within the memory and compute constraints of edge hardware. It is essential for real-time applications like autonomous vehicles and voice assistants.",
    category: "ai-fundamentals",
    relatedTerms: ["inference", "quantization", "knowledge-distillation", "edge-deployment"],
  },
  {
    slug: "turing-test",
    term: "Turing Test",
    definition:
      "The Turing Test, proposed by Alan Turing in 1950, is a benchmark for machine intelligence where a human evaluator engages in natural language conversations with both a human and a machine without knowing which is which. If the evaluator cannot reliably distinguish the machine from the human, the machine is said to have passed the test. While modern LLMs can produce remarkably human-like text, the Turing Test is considered an imperfect measure of intelligence — it tests conversational mimicry rather than genuine understanding, reasoning, or consciousness.",
    category: "ai-fundamentals",
    relatedTerms: ["artificial-intelligence", "artificial-general-intelligence", "large-language-models"],
  },
  {
    slug: "emergent-behavior",
    term: "Emergent Behavior",
    definition:
      "Emergent behavior in AI refers to capabilities that arise in large models that were not explicitly programmed or anticipated from the training objective. For example, LLMs trained solely on next-token prediction spontaneously develop abilities like arithmetic reasoning, code generation, and multi-step logical deduction at sufficient scale. These emergent properties often appear abruptly as models cross certain parameter or data thresholds, making them difficult to predict. Understanding and harnessing emergent behavior is a key research area, as it suggests that scale alone can unlock qualitatively new capabilities.",
    category: "ai-fundamentals",
    relatedTerms: ["large-language-models", "next-token-prediction", "artificial-general-intelligence"],
  },
  {
    slug: "stochastic-parrot",
    term: "Stochastic Parrot",
    definition:
      "The 'stochastic parrot' metaphor, coined in a 2021 paper by Bender et al., describes large language models as systems that stitch together sequences of linguistic forms from their training data based on probabilistic patterns without genuine understanding of meaning. The term highlights concerns that LLMs produce fluent text by statistical pattern matching rather than comprehension, and that their impressive outputs can mask fundamental limitations in reasoning, factual accuracy, and causal understanding. The debate around this characterization reflects deeper questions about the nature of language understanding in AI.",
    category: "ai-fundamentals",
    relatedTerms: ["large-language-models", "hallucination", "emergent-behavior", "next-token-prediction"],
  },
  {
    slug: "confusion-matrix",
    term: "Confusion Matrix",
    definition:
      "A confusion matrix is a tabular visualization for evaluating classification model performance that shows the counts of true positives, true negatives, false positives, and false negatives. Each row represents the actual class while each column represents the predicted class (or vice versa). From the confusion matrix, key metrics like accuracy, precision, recall, and F1 score can be calculated. For multi-class problems, the matrix extends to NxN dimensions. Confusion matrices are essential for understanding not just overall accuracy but the types of errors a model makes.",
    category: "ai-fundamentals",
    relatedTerms: ["f1-score", "precision-and-recall", "supervised-learning", "machine-learning"],
  },
  {
    slug: "f1-score",
    term: "F1 Score",
    definition:
      "The F1 score is the harmonic mean of precision and recall, providing a single metric that balances both concerns. It ranges from 0 to 1, where 1 indicates perfect precision and recall. The F1 score is particularly useful when class distribution is imbalanced — unlike accuracy, it does not reward a model for simply predicting the majority class. Variants include macro F1 (averaging F1 across all classes equally), micro F1 (aggregating contributions from all classes), and weighted F1 (weighting by class frequency).",
    category: "ai-fundamentals",
    relatedTerms: ["precision-and-recall", "confusion-matrix", "supervised-learning"],
  },
  {
    slug: "precision-and-recall",
    term: "Precision and Recall",
    definition:
      "Precision and recall are complementary evaluation metrics for classification tasks. Precision measures the proportion of positive predictions that are actually correct (how many selected items are relevant), while recall measures the proportion of actual positives that are correctly identified (how many relevant items are selected). There is typically a trade-off between the two — increasing one often decreases the other. In AI applications, the choice of which to prioritize depends on the cost of errors: high precision is critical when false positives are costly, while high recall matters when missing positives is dangerous.",
    category: "ai-fundamentals",
    relatedTerms: ["f1-score", "confusion-matrix", "supervised-learning", "machine-learning"],
  },
  {
    slug: "generative-adversarial-network",
    term: "Generative Adversarial Network (GAN)",
    definition:
      "A Generative Adversarial Network (GAN) is a generative model architecture consisting of two neural networks — a generator that creates synthetic data and a discriminator that tries to distinguish real data from generated data — trained in an adversarial game. The generator improves by trying to fool the discriminator, while the discriminator improves by detecting fakes, driving both to higher performance. GANs revolutionized image generation before diffusion models and remain important for tasks like image-to-image translation, super-resolution, and data augmentation. Training GANs can be challenging due to mode collapse and training instability.",
    category: "ai-fundamentals",
    relatedTerms: ["generative-ai", "diffusion-model", "deep-learning", "unsupervised-learning"],
  },

  // ── LLM / Models (new) ──────────────────────────────────────────────────────

  {
    slug: "gpt-4o",
    term: "GPT-4o",
    definition:
      "GPT-4o (omni) is OpenAI's multimodal flagship model that natively processes and generates text, audio, images, and video within a single unified architecture. The 'o' stands for omni, reflecting its ability to accept and produce multiple modalities. GPT-4o matches GPT-4 Turbo's text intelligence while being significantly faster and cheaper, with improved non-English language performance and vision capabilities. It powers ChatGPT's voice mode and is available via the OpenAI API for building multimodal applications.",
    category: "llm",
    relatedTerms: ["gpt", "large-language-models", "multimodal-large-language-model", "vision-language-model"],
  },
  {
    slug: "o1-reasoning-models",
    term: "o1 Reasoning Models",
    definition:
      "The o1 family (o1, o1-mini, o1-pro) are OpenAI's reasoning-focused models that use internal chain-of-thought processing to 'think' before responding, spending additional compute at inference time to solve complex problems. Unlike standard GPT models, o1 models generate hidden reasoning tokens before producing the visible response, enabling stronger performance on math, science, coding, and multi-step logical problems. This represents a paradigm shift from scaling training compute to scaling inference compute, trading higher latency and cost for significantly improved reasoning accuracy.",
    category: "llm",
    relatedTerms: ["gpt", "large-language-models", "chain-of-thought-prompting", "large-reasoning-models"],
  },
  {
    slug: "claude-3-5-sonnet",
    term: "Claude 3.5 Sonnet",
    definition:
      "Claude 3.5 Sonnet is Anthropic's mid-tier model that delivers state-of-the-art performance at a balance of capability and cost. It outperforms many larger models on coding, reasoning, and instruction-following benchmarks while being significantly faster and cheaper than the Opus tier. Claude 3.5 Sonnet supports a 200K token context window, vision capabilities, and tool use. It is the most popular model in the Claude family for production applications due to its excellent quality-to-cost ratio.",
    category: "llm",
    relatedTerms: ["claude", "large-language-models", "anthropic", "context-window"],
  },
  {
    slug: "llama-3",
    term: "Llama 3",
    definition:
      "Llama 3 is Meta's third-generation open-weight large language model family, released in sizes from 8B to 405B parameters. It features an expanded vocabulary (128K tokens), grouped query attention, and training on over 15 trillion tokens. Llama 3 models achieve performance competitive with proprietary models like GPT-4 on many benchmarks while being freely available for research and commercial use. The 405B variant was one of the first open-weight models to rival frontier closed models, and Llama 3 serves as the foundation for thousands of community fine-tunes and deployments.",
    category: "llm",
    relatedTerms: ["llama", "large-language-models", "open-weights-model", "fine-tuning"],
  },
  {
    slug: "bert",
    term: "BERT",
    definition:
      "BERT (Bidirectional Encoder Representations from Transformers) is a transformer-based model developed by Google that introduced bidirectional pre-training for language understanding. Unlike GPT's left-to-right approach, BERT uses masked language modeling — predicting randomly masked tokens using context from both directions — producing deep bidirectional representations. BERT revolutionized NLP benchmarks upon release and remains widely used for classification, named entity recognition, question answering, and as an embedding backbone. It is an encoder-only model, making it suited for understanding tasks rather than text generation.",
    category: "llm",
    relatedTerms: ["transformer-architecture", "encoder-decoder-model", "large-language-models", "natural-language-processing"],
  },
  {
    slug: "t5",
    term: "T5",
    definition:
      "T5 (Text-to-Text Transfer Transformer) is a Google Research model that frames all NLP tasks as text-to-text problems — both input and output are text strings. For example, translation becomes 'translate English to German: [text]' and classification becomes 'classify: [text]' with the label as output text. T5 uses an encoder-decoder transformer architecture and was trained on the Colossal Clean Crawled Corpus (C4). This unified text-to-text framework simplified multi-task learning and influenced the design of subsequent instruction-tuned models.",
    category: "llm",
    relatedTerms: ["encoder-decoder-model", "transformer-architecture", "bert", "sequence-to-sequence"],
  },
  {
    slug: "sequence-to-sequence",
    term: "Sequence-to-Sequence",
    definition:
      "Sequence-to-sequence (seq2seq) is a neural network architecture pattern that maps an input sequence to an output sequence of potentially different length. The encoder processes the input into a context representation, and the decoder generates the output token by token. Seq2seq models are the foundation for machine translation, text summarization, speech recognition, and conversational AI. While originally implemented with RNNs/LSTMs, modern seq2seq models use the transformer's encoder-decoder architecture, with models like T5 and BART being prominent examples.",
    category: "llm",
    relatedTerms: ["encoder-decoder-model", "t5", "transformer-architecture", "machine-translation"],
  },
  {
    slug: "encoder",
    term: "Encoder",
    definition:
      "In transformer architectures, the encoder is the component that processes the full input sequence bidirectionally using self-attention, producing contextualized representations where each token's embedding incorporates information from all other tokens. Encoder-only models (like BERT) excel at understanding tasks — classification, entity recognition, and embedding generation. In encoder-decoder models (like T5), the encoder's output is passed to the decoder via cross-attention. Encoders are also central to embedding models used in RAG systems for converting text into dense vector representations.",
    category: "llm",
    relatedTerms: ["encoder-decoder-model", "bert", "transformer-architecture", "self-attention"],
  },
  {
    slug: "pre-training",
    term: "Pre-training",
    definition:
      "Pre-training is the initial, large-scale training phase where a model learns general representations from massive unlabeled datasets before being adapted for specific tasks. For LLMs, pre-training involves predicting the next token on trillions of tokens of web text, code, and books, which teaches the model language structure, factual knowledge, and reasoning patterns. Pre-training is the most computationally expensive phase (costing millions of dollars for frontier models) but produces a versatile foundation model that can be fine-tuned or prompted for countless downstream tasks.",
    category: "llm",
    relatedTerms: ["fine-tuning", "foundation-model", "transfer-learning", "large-language-models"],
  },
  {
    slug: "instruction-tuning",
    term: "Instruction Tuning",
    definition:
      "Instruction tuning is a fine-tuning technique that trains language models on datasets of (instruction, response) pairs to improve their ability to follow natural language instructions. It transforms a base model (which simply predicts next tokens) into an assistant that can answer questions, follow directions, and complete tasks as instructed. Instruction tuning datasets include diverse task types — summarization, coding, math, creative writing — teaching the model to generalize across instruction formats. Models like FLAN-T5, ChatGPT, and Llama Chat are produced through instruction tuning.",
    category: "llm",
    relatedTerms: ["fine-tuning", "rlhf", "pre-training", "large-language-models"],
  },
  {
    slug: "in-context-learning",
    term: "In-Context Learning",
    definition:
      "In-context learning (ICL) is the ability of large language models to learn and perform new tasks from examples provided within the input prompt, without any parameter updates. The model identifies patterns in the provided examples and applies them to new inputs in the same prompt. ICL is an emergent capability of sufficiently large LLMs and is the mechanism behind few-shot and zero-shot prompting. It is remarkable because the model effectively 'learns' at inference time purely through attention over the context, challenging traditional notions of what constitutes learning in machine learning.",
    category: "llm",
    relatedTerms: ["few-shot-learning", "zero-shot-learning", "prompt-engineering", "large-language-models"],
  },
  {
    slug: "tree-of-thoughts",
    term: "Tree of Thoughts",
    definition:
      "Tree of Thoughts (ToT) is an advanced prompting framework that extends chain-of-thought reasoning by having the model explore multiple reasoning paths simultaneously, structured as a tree. At each step, the model generates several possible 'thoughts' (intermediate reasoning steps), evaluates which are most promising, and can backtrack from dead ends — mimicking how humans deliberate over complex problems. ToT uses search algorithms like BFS or DFS to navigate the reasoning tree and has shown significant improvements over linear chain-of-thought on tasks requiring planning and exploration.",
    category: "llm",
    relatedTerms: ["chain-of-thought-prompting", "prompt-engineering", "agent-planning", "self-consistency"],
  },
  {
    slug: "self-consistency",
    term: "Self-Consistency",
    definition:
      "Self-consistency is a prompting technique that improves LLM reasoning by sampling multiple diverse chain-of-thought reasoning paths for the same problem and selecting the most common final answer through majority voting. Instead of relying on a single greedy reasoning trace, self-consistency leverages the intuition that correct reasoning paths are more likely to converge on the same answer. It significantly improves accuracy on arithmetic, commonsense, and symbolic reasoning tasks with the trade-off of higher compute cost from multiple samples.",
    category: "llm",
    relatedTerms: ["chain-of-thought-prompting", "tree-of-thoughts", "prompt-engineering", "temperature"],
  },
  {
    slug: "system-prompt",
    term: "System Prompt",
    definition:
      "A system prompt is a special instruction block provided at the beginning of a conversation that defines the AI model's behavior, persona, capabilities, constraints, and response format. It is processed before any user messages and shapes all subsequent interactions. System prompts are used to configure AI assistants (tone, expertise, safety guidelines), define agent capabilities (available tools, response schemas), and enforce guardrails (content policies, output restrictions). Well-crafted system prompts are critical for production AI applications and are a key component of prompt engineering.",
    category: "llm",
    relatedTerms: ["prompt-engineering", "guardrails", "large-language-models", "meta-prompting"],
  },
  {
    slug: "meta-prompting",
    term: "Meta Prompting",
    definition:
      "Meta prompting is a technique where an LLM is used to generate, refine, or optimize prompts for itself or other models. Instead of manually crafting prompts, a meta-prompt instructs the model to analyze the task requirements and produce an optimal prompt, potentially iterating through multiple versions and evaluating their effectiveness. Meta prompting can also involve using one model to create system prompts for another model, or automatically adapting prompts based on performance feedback. It represents a shift from manual prompt engineering toward automated prompt optimization.",
    category: "llm",
    relatedTerms: ["prompt-engineering", "system-prompt", "large-language-models"],
  },
  {
    slug: "least-to-most-prompting",
    term: "Least-to-Most Prompting",
    definition:
      "Least-to-most prompting is a technique that breaks complex problems into progressively more difficult subproblems, solving each one sequentially with the solutions to previous subproblems available as context. First, the model decomposes the original problem into a series of simpler subquestions. Then, it solves each subquestion in order, from easiest to hardest, appending each answer to the context for subsequent questions. This approach enables LLMs to solve problems requiring compositional generalization — tasks more complex than any seen in the training examples.",
    category: "llm",
    relatedTerms: ["chain-of-thought-prompting", "prompt-engineering", "tree-of-thoughts"],
  },
  {
    slug: "sentiment-analysis",
    term: "Sentiment Analysis",
    definition:
      "Sentiment analysis is an NLP task that identifies and classifies the emotional tone or opinion expressed in text as positive, negative, neutral, or more granular categories. It is widely used in business for analyzing customer reviews, social media monitoring, brand reputation tracking, and market research. Modern sentiment analysis uses transformer-based models (fine-tuned BERT, or LLMs via prompting) that understand context, sarcasm, and nuance far better than earlier bag-of-words approaches. It can operate at the document, sentence, or aspect level.",
    category: "llm",
    relatedTerms: ["text-classification", "natural-language-processing", "bert", "large-language-models"],
  },
  {
    slug: "text-classification",
    term: "Text Classification",
    definition:
      "Text classification is the NLP task of assigning predefined categories or labels to text documents based on their content. Applications include spam detection, topic categorization, intent recognition, content moderation, and language identification. Modern text classification uses fine-tuned transformer models or LLM-based zero-shot classification where the model assigns labels based on natural language descriptions without task-specific training. Text classification is one of the most common production NLP tasks and serves as a building block for more complex systems.",
    category: "llm",
    relatedTerms: ["sentiment-analysis", "natural-language-processing", "bert", "named-entity-recognition"],
  },
  {
    slug: "named-entity-recognition",
    term: "Named Entity Recognition",
    definition:
      "Named Entity Recognition (NER) is an NLP task that identifies and classifies named entities in text into predefined categories such as persons, organizations, locations, dates, monetary values, and products. NER is a foundational component of information extraction pipelines, knowledge graph construction, and search systems. Modern NER uses transformer-based models that achieve near-human accuracy on standard benchmarks. In AI applications, NER is used to extract structured data from unstructured text, enabling downstream tasks like entity linking, relation extraction, and knowledge base population.",
    category: "llm",
    relatedTerms: ["natural-language-processing", "text-classification", "bert", "knowledge-graph"],
  },
  {
    slug: "machine-translation",
    term: "Machine Translation",
    definition:
      "Machine translation is the automated conversion of text or speech from one language to another. Modern neural machine translation uses encoder-decoder transformer architectures (or decoder-only LLMs) trained on parallel text corpora to produce fluent, contextually appropriate translations. Systems like Google Translate, DeepL, and LLM-based translators handle 100+ languages with increasing quality. LLMs have advanced the field further by enabling context-aware translation that considers document-level coherence, style preservation, and domain-specific terminology.",
    category: "llm",
    relatedTerms: ["sequence-to-sequence", "encoder-decoder-model", "natural-language-processing", "large-language-models"],
  },
  {
    slug: "text-summarization",
    term: "Text Summarization",
    definition:
      "Text summarization is the NLP task of producing a concise, coherent summary that captures the key information from a longer document. Extractive summarization selects and combines important sentences from the source, while abstractive summarization generates new sentences that paraphrase and condense the content. Modern LLMs excel at abstractive summarization and can be guided by prompts to control summary length, focus, and style. Summarization is a core capability in RAG systems, document processing pipelines, and AI-powered research tools.",
    category: "llm",
    relatedTerms: ["natural-language-processing", "large-language-models", "rag-retrieval-augmented-generation"],
  },
  {
    slug: "tf-idf",
    term: "TF-IDF",
    definition:
      "TF-IDF (Term Frequency-Inverse Document Frequency) is a statistical measure that evaluates how important a word is to a document within a collection. Term frequency measures how often a word appears in a document, while inverse document frequency measures how rare the word is across all documents. Words that appear frequently in one document but rarely elsewhere receive high TF-IDF scores. While superseded by neural embeddings for most semantic tasks, TF-IDF remains useful for keyword extraction, sparse retrieval components in hybrid search, and as a baseline for text similarity.",
    category: "llm",
    relatedTerms: ["bm25", "sparse-vs-dense-retrieval", "word2vec", "natural-language-processing"],
  },
  {
    slug: "word2vec",
    term: "Word2Vec",
    definition:
      "Word2Vec is a pioneering word embedding technique developed by Google that learns dense vector representations of words by training a shallow neural network on word co-occurrence patterns in large text corpora. It introduced two architectures: Skip-gram (predicting context words from a target word) and CBOW (predicting a target word from context). Word2Vec demonstrated that vector arithmetic captures semantic relationships (e.g., 'king - man + woman = queen'). While superseded by contextual embeddings from transformers, Word2Vec laid the conceptual foundation for modern embedding models.",
    category: "llm",
    relatedTerms: ["vector-embedding", "embedding-model", "tf-idf", "natural-language-processing"],
  },
  {
    slug: "open-weights-model",
    term: "Open Weights Model",
    definition:
      "An open weights model is a large language model whose trained parameters (weights) are publicly released, allowing anyone to download, run, fine-tune, and deploy the model. Unlike open-source (which implies full access to training code and data), open weights specifically refers to releasing the model artifacts. Examples include Llama, Mistral, and Gemma. Open weights models enable self-hosted deployments with full control over data privacy, custom fine-tuning, and no per-token API costs, though they require infrastructure to run and may have restrictive licenses.",
    category: "llm",
    relatedTerms: ["llama", "mistral", "closed-source-llm", "fine-tuning"],
  },
  {
    slug: "closed-source-llm",
    term: "Closed-Source LLM",
    definition:
      "A closed-source LLM is a large language model whose weights, training data, and architecture details are proprietary and not publicly available. Users interact with the model only through an API, with no ability to inspect, modify, or self-host it. Examples include GPT-4, Claude, and Gemini Ultra. Closed-source models typically offer the highest performance and are continuously updated by the provider, but come with trade-offs: per-token API costs, data privacy concerns (inputs may be processed by the provider), vendor lock-in, and no ability to customize the model's behavior beyond prompting.",
    category: "llm",
    relatedTerms: ["open-weights-model", "gpt", "claude", "large-language-models"],
  },
  {
    slug: "multimodal-large-language-model",
    term: "Multimodal Large Language Model",
    definition:
      "A multimodal large language model (MLLM) is an LLM that can process and generate content across multiple data modalities — text, images, audio, video, and code — within a unified architecture. Unlike text-only LLMs that require separate models for each modality, MLLMs natively understand the relationships between modalities (e.g., describing what's in an image or generating images from text). Examples include GPT-4o, Gemini, and Claude 3.5's vision capabilities. MLLMs enable richer AI applications that can reason about visual content, documents with images, and real-world scenes.",
    category: "llm",
    relatedTerms: ["vision-language-model", "gpt-4o", "gemini", "large-language-models"],
  },
  {
    slug: "vision-language-model",
    term: "Vision Language Model",
    definition:
      "A vision language model (VLM) is a multimodal AI model that can jointly understand and reason about both images and text. VLMs typically combine a visual encoder (processing images into feature representations) with a language model (generating text conditioned on both visual and textual inputs). They enable tasks like image captioning, visual question answering, document understanding, and GUI interaction. VLMs are increasingly used in AI agents that need to interpret screenshots, read documents with diagrams, or navigate visual interfaces.",
    category: "llm",
    relatedTerms: ["multimodal-large-language-model", "computer-vision", "large-language-models", "gpt-4o"],
  },
  {
    slug: "throughput",
    term: "Throughput",
    definition:
      "Throughput in the context of LLM serving refers to the number of tokens or requests a system can process per unit of time. It is typically measured in tokens per second (tok/s) across all concurrent requests. High throughput is critical for production deployments serving many users simultaneously. Throughput optimization techniques include continuous batching, PagedAttention, speculative decoding, tensor parallelism, and quantization. There is often a trade-off between throughput and latency — batching more requests increases throughput but may increase per-request latency.",
    category: "llm",
    relatedTerms: ["inference", "model-serving", "token-usage", "quantization"],
  },
  {
    slug: "token-usage",
    term: "Token Usage",
    definition:
      "Token usage refers to the total number of tokens consumed during an LLM API interaction, comprising both input tokens (prompt, system message, context) and output tokens (model response). Token usage directly determines cost (providers charge per token), latency (more tokens = more processing time), and context window consumption. Monitoring and optimizing token usage is essential for production AI applications — strategies include prompt compression, caching repeated prompts, truncating unnecessary context, and choosing appropriately-sized models for each task.",
    category: "llm",
    relatedTerms: ["input-tokens", "output-tokens", "cost-tracking", "context-window"],
  },
  {
    slug: "training-data",
    term: "Training Data",
    definition:
      "Training data is the dataset used to teach a machine learning model patterns, relationships, and knowledge through the training process. For LLMs, training data typically consists of trillions of tokens from web crawls, books, academic papers, code repositories, and curated datasets. The quality, diversity, and size of training data fundamentally determine model capabilities and limitations — biases in training data propagate to model outputs, missing domains result in knowledge gaps, and data contamination can inflate benchmark scores. Training data curation and governance are critical concerns in responsible AI development.",
    category: "llm",
    relatedTerms: ["pre-training", "fine-tuning", "bias", "synthetic-data"],
  },
  {
    slug: "foundation-model",
    term: "Foundation Model",
    definition:
      "A foundation model is a large AI model trained on broad, diverse data at scale that can be adapted (via fine-tuning, prompting, or RAG) to a wide range of downstream tasks. The term, coined by Stanford's Center for Research on Foundation Models, emphasizes that these models serve as a common foundation for many applications rather than being task-specific. Foundation models include large language models (GPT-4, Claude), vision models (CLIP, DINOv2), and multimodal models (Gemini). Their emergence has shifted AI development from training task-specific models to adapting general-purpose foundations.",
    category: "llm",
    relatedTerms: ["large-language-models", "pre-training", "transfer-learning", "fine-tuning"],
  },
  {
    slug: "mixture-of-experts",
    term: "Mixture of Experts (MoE)",
    definition:
      "Mixture of Experts (MoE) is a neural network architecture where the model consists of multiple specialized sub-networks (experts) and a gating mechanism (router) that selects which experts to activate for each input. Only a subset of experts processes each token, making MoE models computationally efficient — a 100B parameter MoE model might activate only 13B parameters per forward pass. This enables larger total model capacity without proportionally increasing compute costs. Mixtral (8x7B) and GPT-4 (rumored) use MoE architectures, making it a key technique for scaling LLMs efficiently.",
    category: "llm",
    relatedTerms: ["large-language-models", "feed-forward-network", "parameter-count", "mistral"],
  },
  {
    slug: "constitutional-ai",
    term: "Constitutional AI",
    definition:
      "Constitutional AI (CAI) is an Anthropic-developed alignment technique where AI behavior is guided by a set of principles (a 'constitution') rather than relying solely on human preference labels. The process involves generating responses, having the AI critique and revise them based on the constitutional principles, and then using this self-revised data for RLHF training. CAI reduces the need for extensive human labeling while producing models that are transparent about their guidelines. It is a key technique behind Claude's safety properties and represents a scalable approach to AI alignment.",
    category: "llm",
    relatedTerms: ["alignment", "rlhf", "claude", "anthropic"],
  },
  {
    slug: "agentic-rag",
    term: "Agentic RAG",
    definition:
      "Agentic RAG is an advanced retrieval-augmented generation pattern where an AI agent dynamically decides when, what, and how to retrieve information rather than following a fixed retrieval pipeline. The agent can reformulate queries, choose between multiple retrieval sources, evaluate retrieved results for relevance, perform multi-hop retrieval (using one retrieved result to formulate the next query), and decide when it has enough information to answer. This approach significantly outperforms static RAG on complex questions that require iterative search, multi-source synthesis, or adaptive retrieval strategies.",
    category: "llm",
    relatedTerms: ["rag-retrieval-augmented-generation", "ai-agent", "semantic-search", "hybrid-search"],
  },
  {
    slug: "llm-as-a-judge",
    term: "LLM-as-a-Judge",
    definition:
      "LLM-as-a-Judge is an evaluation paradigm where a large language model is used to assess the quality of outputs from other LLMs or AI systems. The judge model evaluates responses on criteria like helpfulness, accuracy, harmlessness, relevance, and coherence, providing scores and explanations. This approach scales evaluation beyond expensive human annotation while showing high correlation with human judgments. It is used for model comparison, prompt optimization, RLHF data generation, and automated quality monitoring in production. Challenges include judge model biases and the need for careful rubric design.",
    category: "llm",
    relatedTerms: ["evaluation-of-agents", "rlhf", "alignment", "large-language-models"],
  },
  {
    slug: "llm-red-teaming",
    term: "LLM Red Teaming",
    definition:
      "LLM red teaming is the adversarial testing practice of systematically probing language models to discover vulnerabilities, failure modes, and safety issues before deployment. Red teamers attempt to elicit harmful outputs, find prompt injection vectors, test guardrail bypasses, expose biases, and trigger unexpected behaviors. Red teaming can be manual (human experts) or automated (using other LLMs to generate adversarial inputs). It is a critical component of responsible AI deployment, required by frameworks like the EU AI Act, and is performed by organizations like Anthropic, OpenAI, and independent safety labs.",
    category: "llm",
    relatedTerms: ["prompt-injection", "guardrails", "ai-safety", "alignment"],
  },
  {
    slug: "large-reasoning-models",
    term: "Large Reasoning Models",
    definition:
      "Large reasoning models are a class of LLMs specifically designed or trained to excel at complex multi-step reasoning tasks by allocating additional computation at inference time. Unlike standard LLMs that generate responses in a single forward pass, reasoning models employ techniques like extended chain-of-thought, search over reasoning paths, and self-verification to arrive at more accurate conclusions. Examples include OpenAI's o1/o3 and DeepSeek-R1. These models trade increased inference cost and latency for substantially improved performance on math, science, coding, and logical reasoning problems.",
    category: "llm",
    relatedTerms: ["o1-reasoning-models", "chain-of-thought-prompting", "large-language-models", "tree-of-thoughts"],
  },

  // ── AI Agents (new) ─────────────────────────────────────────────────────────

  {
    slug: "autonomous-agents",
    term: "Autonomous Agents",
    definition:
      "Autonomous agents are AI systems that operate independently to achieve goals with minimal or no human intervention, making decisions, executing actions, and adapting their strategies in real-time. They combine LLM reasoning with tool use, memory, and planning to handle complex, multi-step tasks end-to-end. Examples include coding agents that autonomously implement features, research agents that gather and synthesize information, and DevOps agents that diagnose and fix production issues. The key challenge with autonomous agents is ensuring reliability, safety, and alignment as their independence increases.",
    category: "agents",
    relatedTerms: ["ai-agent", "agentic-ai", "agent-planning", "agent-alignment"],
  },
  {
    slug: "agent-swarm",
    term: "Agent Swarm",
    definition:
      "An agent swarm is a multi-agent architecture where a large number of relatively simple agents work together in a decentralized manner, without a single orchestrator, to solve complex tasks through emergent collective behavior. Inspired by swarm intelligence in nature (ant colonies, bee hives), agent swarms rely on local interactions, shared memory, and simple rules to produce sophisticated group behavior. This pattern is suited for tasks that benefit from parallel exploration, diverse perspectives, and fault tolerance, though it can be harder to control and debug than hierarchical agent architectures.",
    category: "agents",
    relatedTerms: ["multi-agent-system", "autonomous-agents", "agent-orchestration"],
  },
  {
    slug: "task-decomposition",
    term: "Task Decomposition",
    definition:
      "Task decomposition is the process of breaking down a complex, high-level task into smaller, manageable subtasks that can be executed individually or delegated to specialized agents. Effective decomposition is fundamental to agent planning — it determines the execution strategy, parallelization opportunities, and the tools or subagents needed for each step. Techniques include LLM-driven decomposition (asking the model to outline steps), recursive decomposition (breaking subtasks into sub-subtasks), and template-based decomposition (using predefined workflow patterns for common task types).",
    category: "agents",
    relatedTerms: ["agent-planning", "ai-agent", "subagent-delegation", "agentic-workflow"],
  },
  {
    slug: "react",
    term: "ReAct",
    definition:
      "ReAct (Reasoning and Acting) is an agent framework that interleaves reasoning traces and action execution in a synergistic loop. At each step, the agent generates a thought (reasoning about what to do), takes an action (calling a tool or API), and observes the result, using this observation to inform the next thought. ReAct combines the benefits of chain-of-thought reasoning (structured thinking) with action-based learning (interacting with the environment). It is one of the most widely adopted patterns for building LLM agents and directly influenced frameworks like LangChain and Pydantic AI.",
    category: "agents",
    relatedTerms: ["ai-agent", "tool-calling", "chain-of-thought-prompting", "reflexion"],
  },
  {
    slug: "reflexion",
    term: "Reflexion",
    definition:
      "Reflexion is an agent architecture that improves performance through verbal self-reflection — the agent evaluates its own outputs, identifies errors or suboptimal decisions, and uses this self-critique to improve subsequent attempts. After completing a task, the agent generates a reflection noting what went wrong and what to do differently, storing this in memory for future reference. Reflexion enables agents to learn from mistakes within a single task episode without weight updates, functioning as a form of in-context reinforcement learning. It significantly improves success rates on coding, reasoning, and decision-making tasks.",
    category: "agents",
    relatedTerms: ["react", "agent-planning", "agent-memory", "ai-agent"],
  },
  {
    slug: "stategraph",
    term: "StateGraph",
    definition:
      "StateGraph is LangGraph's core abstraction for defining agent workflows as directed graphs with typed state. Developers define nodes (functions that process and update state), edges (transitions between nodes, which can be conditional), and a shared state schema that flows through the graph. StateGraph supports cycles (enabling agent loops), conditional branching (routing based on state), and parallel execution. It compiles into a runnable application with built-in support for streaming, persistence, and human-in-the-loop interactions, making it the primary building block for complex agentic workflows in the LangChain ecosystem.",
    category: "agents",
    relatedTerms: ["langgraph", "node", "edge", "graph-state"],
  },
  {
    slug: "node",
    term: "Node",
    definition:
      "In graph-based agent frameworks like LangGraph, a node is a discrete processing unit within a workflow graph that performs a specific action — such as calling an LLM, executing a tool, validating data, or making a decision. Each node receives the current graph state as input, performs its computation, and returns an updated state. Nodes can be synchronous or asynchronous, and the graph orchestrator manages their execution order based on the defined edges. Well-designed nodes are atomic, focused on a single responsibility, and composable into complex workflows.",
    category: "agents",
    relatedTerms: ["stategraph", "edge", "graph-state", "langgraph"],
  },
  {
    slug: "edge",
    term: "Edge",
    definition:
      "In graph-based agent architectures, an edge defines a transition between two nodes in the workflow graph. Edges can be unconditional (always transitioning from node A to node B) or conditional (routing to different nodes based on the current state, using a routing function). Conditional edges enable branching logic — for example, routing to a retry node on error, a human review node for sensitive actions, or an exit node when the task is complete. Edges define the control flow of the agent and are what distinguish graph-based architectures from simple sequential chains.",
    category: "agents",
    relatedTerms: ["stategraph", "node", "graph-state", "langgraph"],
  },
  {
    slug: "checkpoint",
    term: "Checkpoint",
    definition:
      "In agentic AI systems, a checkpoint is a saved snapshot of the agent's complete state at a specific point during workflow execution. Checkpoints enable resumability (continuing from where the agent left off after interruption), time-travel debugging (inspecting the agent's state at any past step), human-in-the-loop patterns (pausing at decision points and resuming after approval), and fault tolerance (recovering from crashes without restarting). LangGraph and similar frameworks provide built-in checkpoint persistence using databases or file systems.",
    category: "agents",
    relatedTerms: ["stategraph", "graph-state", "human-in-the-loop", "langgraph"],
  },
  {
    slug: "graph-state",
    term: "Graph State",
    definition:
      "Graph state is the typed data structure that flows through a graph-based agent workflow, carrying all the information needed for nodes to make decisions and perform actions. It typically includes conversation messages, intermediate results, tool outputs, counters, and flags. In LangGraph, graph state is defined as a TypedDict with optional reducers that control how updates from parallel nodes are merged. Well-designed graph state serves as the shared memory of the workflow, enabling nodes to communicate without direct coupling.",
    category: "agents",
    relatedTerms: ["stategraph", "node", "edge", "langgraph"],
  },
  {
    slug: "pydantic-basemodel",
    term: "Pydantic BaseModel",
    definition:
      "Pydantic BaseModel is the core class in the Pydantic library for defining data schemas using Python type annotations, with automatic validation, serialization, and documentation generation. In AI applications, BaseModel is used extensively to define structured LLM outputs (the model returns data matching a schema), API request/response types (FastAPI endpoint definitions), tool parameter schemas (function calling arguments), and agent state types. Its JSON Schema generation capability directly powers LLM function calling, as the schema is sent to the model to describe expected output structures.",
    category: "agents",
    relatedTerms: ["pydantic", "structured-output", "pydantic-ai", "fastapi"],
  },
  {
    slug: "structured-output",
    term: "Structured Output",
    definition:
      "Structured output is the technique of constraining an LLM to generate responses that conform to a specific data schema (JSON, XML, or typed objects) rather than free-form text. This is achieved through function calling APIs, JSON mode, or grammar-constrained decoding. Structured outputs are essential for production AI systems that need to parse model responses programmatically — extracting data, populating databases, triggering actions, or passing information between pipeline stages. Pydantic AI and similar frameworks validate structured outputs against type-annotated schemas, ensuring type safety and data integrity.",
    category: "agents",
    relatedTerms: ["pydantic-basemodel", "function-calling", "pydantic-ai", "tool-calling"],
  },
  {
    slug: "run-context",
    term: "RunContext",
    definition:
      "RunContext in Pydantic AI is a typed container that provides dependency-injected services and configuration to agent tools and system prompts at runtime. It allows tools to access external resources (database connections, API clients, user session data) without hard-coding dependencies, making agents testable and configurable. RunContext is parameterized with a generic type (e.g., RunContext[MyDeps]) so tools receive properly typed dependencies. This pattern decouples agent logic from infrastructure, enabling the same agent to run in testing, development, and production environments with different dependencies.",
    category: "agents",
    relatedTerms: ["pydantic-ai", "dependency-injection", "tool-calling", "ai-agent"],
  },
  {
    slug: "dependency-injection",
    term: "Dependency Injection",
    definition:
      "Dependency injection (DI) is a design pattern where an object's dependencies are provided from the outside rather than created internally, enabling loose coupling, testability, and configurability. In AI agent frameworks, DI provides tools and system prompts with access to external services (databases, APIs, configuration) without hard-coding them. Pydantic AI uses DI through its RunContext system, while FastAPI uses its Depends mechanism. DI is critical for building maintainable, testable AI applications — agents can be tested with mock dependencies and deployed with real ones without code changes.",
    category: "agents",
    relatedTerms: ["run-context", "pydantic-ai", "dependency-injection-fastapi", "fastapi"],
  },
  {
    slug: "vertical-llm-agent",
    term: "Vertical LLM Agent",
    definition:
      "A vertical LLM agent is a specialized AI agent designed for a specific industry domain or use case (e.g., legal document review, medical diagnosis assistance, financial analysis, customer support). Unlike general-purpose agents, vertical agents incorporate domain-specific knowledge, tools, compliance requirements, and workflows. They typically use domain-specialized RAG with curated knowledge bases, custom tool integrations (e.g., FHIR APIs for healthcare), and industry-specific guardrails. Vertical agents deliver higher accuracy and reliability in their domain than generic agents because their scope is constrained and optimizable.",
    category: "agents",
    relatedTerms: ["ai-agent", "rag-retrieval-augmented-generation", "guardrails", "agentic-workflow"],
  },
  {
    slug: "intent-achievement-rate",
    term: "Intent Achievement Rate",
    definition:
      "Intent achievement rate is a key performance metric for AI agents that measures the percentage of user requests where the agent successfully accomplishes the user's intended goal. Unlike simple accuracy metrics, intent achievement evaluates end-to-end task completion — did the agent actually do what the user wanted? It is measured through automated evaluation (comparing outcomes against expected results), human assessment (reviewers rating task completion), or user feedback (thumbs up/down, satisfaction surveys). Intent achievement rate is the North Star metric for production agent quality.",
    category: "agents",
    relatedTerms: ["evaluation-of-agents", "ai-agent", "agent-observability"],
  },
  {
    slug: "agent-alignment",
    term: "Agent Alignment",
    definition:
      "Agent alignment refers to ensuring that autonomous AI agents act in accordance with their intended purpose, user expectations, and safety constraints while pursuing goals. This is more challenging than LLM alignment because agents take real-world actions — misaligned goals can lead to unintended side effects, resource waste, or harmful actions. Agent alignment involves constraining the action space (limiting available tools), implementing oversight mechanisms (human-in-the-loop), defining clear success criteria, and monitoring for goal drift. As agents become more autonomous, alignment becomes increasingly critical for safe deployment.",
    category: "agents",
    relatedTerms: ["alignment", "autonomous-agents", "guardrails", "human-in-the-loop"],
  },
  {
    slug: "evaluation-of-agents",
    term: "Evaluation of Agents",
    definition:
      "Evaluation of agents encompasses the methods, metrics, and frameworks used to assess AI agent performance across multiple dimensions: task completion accuracy, tool usage efficiency, reasoning quality, cost effectiveness, latency, safety compliance, and user satisfaction. Agent evaluation is more complex than LLM evaluation because agents interact with environments, make multi-step decisions, and produce side effects. Evaluation approaches include benchmark suites (SWE-bench, WebArena), human evaluation, automated scoring with LLM-as-a-judge, and production monitoring of real user interactions.",
    category: "agents",
    relatedTerms: ["llm-as-a-judge", "intent-achievement-rate", "agent-observability", "a-b-testing"],
  },

  // ── OpenAI / Anthropic ──────────────────────────────────────────────────────

  {
    slug: "openai-api",
    term: "OpenAI API",
    definition:
      "The OpenAI API is a cloud-based interface for accessing OpenAI's AI models, including GPT-4, GPT-4o, o1, DALL-E, Whisper, and text embedding models. It provides endpoints for chat completions, image generation, audio transcription, embeddings, fine-tuning, and batch processing. The API supports streaming responses, function calling, JSON mode, and vision inputs. It is one of the most widely used LLM APIs and serves as the de facto standard that other providers emulate. Pricing is token-based, varying by model and modality.",
    category: "llm",
    relatedTerms: ["gpt", "gpt-4o", "embeddings-api", "assistants-api"],
  },
  {
    slug: "assistants-api",
    term: "Assistants API",
    definition:
      "The Assistants API is OpenAI's managed platform for building AI agent applications with persistent threads, built-in tools (code interpreter, file search, function calling), and file handling. It manages conversation state, tool execution, and file processing server-side, reducing the complexity of building agent systems. The Assistants API supports multi-turn conversations with automatic context management, retrieval from uploaded files, and code execution in a sandboxed environment. While convenient, it offers less control than building agents from scratch with the Chat Completions API.",
    category: "llm",
    relatedTerms: ["openai-api", "ai-agent", "tool-calling", "function-calling"],
  },
  {
    slug: "chatgpt",
    term: "ChatGPT",
    definition:
      "ChatGPT is OpenAI's consumer AI assistant product that provides a conversational interface to GPT models. Launched in November 2022, it reached 100 million users faster than any previous consumer application, catalyzing the current AI boom. ChatGPT supports text, image, audio, and file interactions, web browsing, code execution, DALL-E image generation, and custom GPTs. While the free tier uses GPT-4o mini, paid subscriptions (Plus, Team, Enterprise) provide access to GPT-4o, o1, and advanced features. ChatGPT is distinct from the OpenAI API — it is a product, not a development platform.",
    category: "llm",
    relatedTerms: ["gpt", "openai-api", "gpt-4o", "large-language-models"],
  },
  {
    slug: "dall-e",
    term: "DALL-E",
    definition:
      "DALL-E is OpenAI's image generation model that creates images from natural language text descriptions. DALL-E 3, the latest version, is integrated into ChatGPT and available via the OpenAI API, producing high-quality images with strong text rendering and accurate following of complex prompts. Unlike earlier versions, DALL-E 3 is built on a diffusion model architecture and uses GPT-4 to enhance user prompts before generation. It competes with Midjourney, Stable Diffusion, and other image generators in the rapidly evolving generative image AI space.",
    category: "llm",
    relatedTerms: ["generative-ai", "diffusion-model", "openai-api", "gpt"],
  },
  {
    slug: "embeddings-api",
    term: "Embeddings API",
    definition:
      "The Embeddings API is OpenAI's service for generating vector embeddings from text input, commonly used to power semantic search, RAG systems, clustering, and classification. Models include text-embedding-3-small (1536 dimensions, cost-efficient) and text-embedding-3-large (3072 dimensions, higher accuracy), both supporting Matryoshka dimension reduction. The API accepts text and returns dense float vectors that capture semantic meaning. OpenAI's embedding models are among the most widely used in production RAG applications, though open-source alternatives like E5 and BGE offer competitive quality.",
    category: "llm",
    relatedTerms: ["embedding-model", "vector-embedding", "openai-api", "rag-retrieval-augmented-generation"],
  },
  {
    slug: "claude-code",
    term: "Claude Code",
    definition:
      "Claude Code is Anthropic's official CLI-based AI coding assistant that operates as an agentic coding tool directly in the developer's terminal. It can read and write files, execute shell commands, search codebases, manage git operations, and interact with GitHub — all guided by natural language instructions. Claude Code uses CLAUDE.md files for project-specific context and conventions, supports multi-turn conversations, and maintains awareness of the entire codebase. It represents the agentic coding paradigm where the AI operates within the developer's actual environment rather than a sandboxed editor.",
    category: "agents",
    relatedTerms: ["ai-agent", "claude", "anthropic", "claude-md"],
  },
  {
    slug: "claude-md",
    term: "CLAUDE.md",
    definition:
      "CLAUDE.md is a project-level configuration file used by Claude Code and other Claude-powered tools to provide persistent, project-specific instructions and context. It contains coding conventions, architecture decisions, preferred patterns, and codebase-specific knowledge that the AI should follow when working on the project. CLAUDE.md files can be placed at the repository root, in subdirectories, or in user-level config directories, with hierarchical inheritance. This file serves as the 'constitution' for AI behavior within a project, ensuring consistent adherence to team standards.",
    category: "agents",
    relatedTerms: ["claude-code", "claude", "system-prompt", "anthropic"],
  },
  {
    slug: "anthropic",
    term: "Anthropic",
    definition:
      "Anthropic is an AI safety company founded in 2021 by former OpenAI researchers, focused on building reliable, interpretable, and steerable AI systems. Anthropic develops the Claude family of large language models, pioneered Constitutional AI for alignment, created the Model Context Protocol (MCP) for tool integration, and builds Claude Code for agentic coding. The company's research-driven approach emphasizes safety as a core design principle rather than an afterthought, contributing foundational work on alignment, interpretability, and responsible AI scaling.",
    category: "llm",
    relatedTerms: ["claude", "constitutional-ai", "mcp-model-context-protocol", "claude-code"],
  },
  {
    slug: "google-gemini",
    term: "Google Gemini",
    definition:
      "Google Gemini (formerly Bard) is Google DeepMind's family of multimodal AI models and the consumer AI assistant product built on them. The Gemini model family (Nano, Flash, Pro, Ultra) is natively multimodal, processing text, images, audio, video, and code. Gemini powers Google's AI features across Search, Workspace, Android, and Cloud. The Gemini API is available through Google AI Studio and Vertex AI, offering competitive pricing, long context windows (up to 1M tokens for Gemini 1.5 Pro), and integration with Google's cloud infrastructure.",
    category: "llm",
    relatedTerms: ["gemini", "large-language-models", "multimodal-large-language-model", "gpt"],
  },
  {
    slug: "microsoft-copilot",
    term: "Microsoft Copilot",
    definition:
      "Microsoft Copilot is a family of AI assistant products from Microsoft, powered by OpenAI models integrated across Microsoft's product ecosystem. GitHub Copilot provides AI-powered code completion and generation in IDEs. Microsoft 365 Copilot assists with writing, analysis, and productivity across Word, Excel, PowerPoint, and Teams. Windows Copilot provides system-wide AI assistance. Each Copilot variant combines OpenAI's GPT models with Microsoft's enterprise data connectors, security controls, and domain-specific optimization, representing the largest enterprise AI assistant deployment.",
    category: "llm",
    relatedTerms: ["gpt", "openai-api", "large-language-models", "chatgpt"],
  },

  // ── FastAPI & Python (python-backend) ───────────────────────────────────────

  {
    slug: "fastapi-framework",
    term: "FastAPI",
    definition:
      "FastAPI is a modern, high-performance Python web framework for building APIs, leveraging Python type hints and Pydantic for automatic request validation, serialization, and OpenAPI documentation generation. It is built on Starlette for async HTTP handling and Uvicorn as the ASGI server, achieving performance comparable to Node.js and Go. FastAPI's native async support makes it ideal for AI backends that need to handle concurrent LLM API calls, streaming responses, and WebSocket connections. It has become the standard Python framework for building AI agent API services.",
    category: "python-backend",
    relatedTerms: ["pydantic", "uvicorn", "asgi", "openapi-schema"],
  },
  {
    slug: "api-router",
    term: "APIRouter",
    definition:
      "APIRouter is a FastAPI class for organizing API endpoints into modular, reusable groups that can be included in the main application with a shared prefix, tags, and dependencies. It enables code organization by separating routes into different files by feature or domain — for example, separating chat endpoints, admin endpoints, and health check endpoints. APIRouter supports the same decorators and dependency injection as the main FastAPI app, promoting clean separation of concerns in large AI backend applications.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "depends", "path-parameter", "query-parameter"],
  },
  {
    slug: "depends",
    term: "Depends",
    definition:
      "Depends is FastAPI's dependency injection function that declares dependencies for route handlers, enabling automatic resolution and injection of shared resources. Dependencies can be functions or classes that provide database sessions, authentication, configuration, rate limiters, or any reusable logic. They support nesting (dependencies can depend on other dependencies), caching within a request, and yield-based cleanup (for resource management). Depends is central to FastAPI's architecture and is used extensively in AI backends for injecting LLM clients, vector database connections, and user context.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "dependency-injection-fastapi", "api-router"],
  },
  {
    slug: "path-parameter",
    term: "Path Parameter",
    definition:
      "A path parameter is a variable segment in a URL path that is extracted and passed to the route handler function — for example, /agents/{agent_id} extracts the agent_id value from the URL. In FastAPI, path parameters are declared as function parameters with type annotations and are automatically validated and converted to the specified type. They support enums for constrained values and Pydantic types for complex validation. Path parameters are used in RESTful API design to identify specific resources like conversations, agents, or documents.",
    category: "python-backend",
    relatedTerms: ["query-parameter", "fastapi-framework", "api-router"],
  },
  {
    slug: "query-parameter",
    term: "Query Parameter",
    definition:
      "A query parameter is a key-value pair appended to a URL after the '?' character (e.g., /search?q=vector+database&limit=10) used to filter, sort, paginate, or configure API responses. In FastAPI, query parameters are automatically extracted from any function parameter not in the path, with type validation, default values, and optional/required control. They are commonly used in AI APIs for specifying model selection, temperature, max tokens, search filters, and pagination of results.",
    category: "python-backend",
    relatedTerms: ["path-parameter", "fastapi-framework", "api-router"],
  },
  {
    slug: "http-exception",
    term: "HTTPException",
    definition:
      "HTTPException is FastAPI's mechanism for returning HTTP error responses with specific status codes and detail messages. It is raised within route handlers or dependencies to signal errors like 404 Not Found, 401 Unauthorized, 422 Validation Error, or 429 Too Many Requests. HTTPException automatically formats the error as a JSON response with the appropriate HTTP status code. In AI backends, it is used to handle cases like missing conversations, exhausted token budgets, rate limit violations, and invalid model configurations.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "status-code", "response-model"],
  },
  {
    slug: "status-code",
    term: "Status Code",
    definition:
      "HTTP status codes are three-digit numbers returned by a server indicating the result of an HTTP request. They are grouped into five classes: 1xx (informational), 2xx (success — 200 OK, 201 Created), 3xx (redirection), 4xx (client errors — 400 Bad Request, 401 Unauthorized, 404 Not Found, 429 Too Many Requests), and 5xx (server errors — 500 Internal Server Error, 503 Service Unavailable). In AI API design, proper status codes communicate to clients whether requests succeeded, what went wrong, and how to respond — for example, 429 signals the client to back off due to rate limiting.",
    category: "python-backend",
    relatedTerms: ["http-exception", "fastapi-framework", "rate-limiting"],
  },
  {
    slug: "response-model",
    term: "Response Model",
    definition:
      "In FastAPI, response_model is a parameter on route decorators that specifies a Pydantic model defining the shape and types of the API response. FastAPI uses this model to validate the response data, filter out any fields not in the schema (preventing data leakage), generate OpenAPI documentation, and provide IDE autocompletion for API clients. Response models ensure that your AI API always returns consistent, documented data structures. They can use model inheritance and Field configurations to handle different response scenarios.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "pydantic", "openapi-schema", "pydantic-basemodel"],
  },
  {
    slug: "openapi-schema",
    term: "OpenAPI Schema",
    definition:
      "OpenAPI Schema (formerly Swagger) is a standard specification for describing REST APIs in a machine-readable JSON/YAML format. It documents endpoints, request/response schemas, authentication methods, and error codes. FastAPI automatically generates an OpenAPI schema from route definitions and Pydantic models, providing interactive documentation UIs (Swagger UI, ReDoc) for free. In AI applications, the OpenAPI schema enables automatic client SDK generation, API testing, and serves as the foundation for LLM function calling — models use the schema to understand how to call your API.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "response-model", "pydantic", "function-calling"],
  },
  {
    slug: "uvicorn",
    term: "Uvicorn",
    definition:
      "Uvicorn is a lightning-fast ASGI (Asynchronous Server Gateway Interface) server implementation for Python, built on uvloop and httptools for maximum performance. It is the recommended server for running FastAPI applications in production, handling HTTP/1.1 and WebSocket connections with async I/O. Uvicorn supports auto-reload for development, SSL/TLS, and can be paired with Gunicorn as a process manager for multi-worker production deployments. In AI backends, Uvicorn's async capabilities are essential for efficiently handling concurrent LLM API calls and streaming responses.",
    category: "python-backend",
    relatedTerms: ["asgi", "fastapi-framework", "websocket-streaming"],
  },
  {
    slug: "asgi",
    term: "ASGI",
    definition:
      "ASGI (Asynchronous Server Gateway Interface) is the Python standard for building asynchronous web applications and servers, succeeding the synchronous WSGI standard. ASGI supports long-lived connections (WebSockets, Server-Sent Events), HTTP/2, and concurrent request handling through Python's async/await. It defines how the web server communicates with the Python application, enabling frameworks like FastAPI and Starlette to handle thousands of concurrent connections efficiently. ASGI is essential for AI backends that need to stream LLM responses, handle WebSocket chat connections, and make concurrent API calls.",
    category: "python-backend",
    relatedTerms: ["uvicorn", "fastapi-framework", "websocket-streaming", "middleware"],
  },
  {
    slug: "middleware",
    term: "Middleware",
    definition:
      "Middleware is a software layer that intercepts and processes HTTP requests and responses as they flow between the client and the application's route handlers. Middleware can modify requests (adding headers, authentication), modify responses (CORS, compression), perform cross-cutting concerns (logging, timing, error handling), or short-circuit the pipeline (blocking unauthorized requests). In FastAPI AI backends, middleware handles CORS configuration, request logging, authentication, rate limiting, token usage tracking, and adding observability traces to every request.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "cors", "rate-limiting", "asgi"],
  },
  {
    slug: "cors-fastapi",
    term: "CORS",
    definition:
      "CORS (Cross-Origin Resource Sharing) middleware in FastAPI configures which web origins, HTTP methods, and headers are permitted for cross-origin API requests. It adds the necessary Access-Control-Allow-* headers to responses and handles preflight OPTIONS requests. In AI applications with separate frontend (e.g., Next.js on localhost:3000) and backend (FastAPI on localhost:8000) services, CORS middleware is essential — without it, browsers block the frontend from calling the API. Production CORS configuration should whitelist specific origins rather than allowing all origins.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "middleware", "api-gateway"],
  },
  {
    slug: "dependency-injection-fastapi",
    term: "Dependency Injection (FastAPI)",
    definition:
      "Dependency Injection in FastAPI is the framework's built-in system for declaring, resolving, and injecting shared resources and logic into route handlers using the Depends() function. Dependencies can be simple functions, async functions, or classes that provide database sessions, authenticated users, configuration, LLM clients, or any reusable logic. FastAPI supports hierarchical dependencies, yield-based dependencies for cleanup, request-scoped caching, and dependency overrides for testing. This system is the backbone of well-structured AI backends, separating infrastructure from business logic.",
    category: "python-backend",
    relatedTerms: ["depends", "fastapi-framework", "dependency-injection"],
  },
  {
    slug: "webhook",
    term: "Webhook",
    definition:
      "A webhook is an HTTP callback mechanism where a server sends an automated POST request to a client-specified URL when a specific event occurs. Unlike polling (repeatedly checking for updates), webhooks push notifications in real-time. In AI applications, webhooks are used for async processing notifications (LLM batch job completed), payment events (Stripe subscription changes), external service integrations (GitHub PR events triggering agent analysis), and MCP tool callbacks. Webhook receivers must validate payloads (using signatures), handle retries, and be idempotent.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "api-router", "server-sent-events"],
  },
  {
    slug: "python-async-await",
    term: "Python Async Await",
    definition:
      "Python's async/await syntax enables cooperative multitasking through coroutines — functions that can pause execution (await) while waiting for I/O operations (network calls, file reads, database queries) and resume when the result is ready. This allows a single thread to handle thousands of concurrent operations efficiently. In AI backends, async/await is essential for concurrently calling multiple LLM APIs, streaming responses to multiple clients, performing parallel vector database queries, and handling WebSocket connections without blocking. FastAPI natively supports async route handlers.",
    category: "python-backend",
    relatedTerms: ["fastapi-framework", "asgi", "uvicorn"],
  },
  {
    slug: "typeddict",
    term: "TypedDict",
    definition:
      "TypedDict is a Python typing construct that defines dictionaries with a fixed set of string keys, each associated with a specific value type. Unlike Pydantic BaseModel (which validates at runtime), TypedDict provides static type checking without runtime overhead. In AI applications, TypedDict is used for LangGraph state schemas, function return types, LLM response parsing, and API payloads where runtime validation is handled elsewhere. TypedDict offers lighter weight than Pydantic models while still providing full IDE autocompletion and type checker support.",
    category: "python-backend",
    relatedTerms: ["pydantic-basemodel", "pydantic", "graph-state", "json-schema"],
  },
  {
    slug: "json-schema",
    term: "JSON Schema",
    definition:
      "JSON Schema is a standard for describing the structure, constraints, and validation rules of JSON data. It specifies property types, required fields, value ranges, string patterns, array constraints, and nested structures in a machine-readable format. In AI applications, JSON Schema is foundational for LLM structured outputs (models generate JSON matching a schema), OpenAPI specifications (API documentation), Pydantic model definitions (which auto-generate JSON Schema), and tool/function definitions for function calling. JSON Schema is the universal language for describing data shapes in the AI stack.",
    category: "python-backend",
    relatedTerms: ["openapi-schema", "pydantic", "structured-output", "function-calling"],
  },
  {
    slug: "sdk",
    term: "SDK",
    definition:
      "An SDK (Software Development Kit) is a collection of tools, libraries, documentation, and code samples that simplifies integration with a service or platform. LLM providers offer SDKs in multiple languages — OpenAI's Python SDK, Anthropic's TypeScript SDK — that handle authentication, request formatting, streaming, error handling, and type definitions. SDKs abstract away low-level HTTP details, providing idiomatic interfaces (e.g., client.chat.completions.create()). In the AI ecosystem, SDKs also exist for vector databases, observability platforms, and agent frameworks, reducing integration time from days to minutes.",
    category: "python-backend",
    relatedTerms: ["openai-api", "fastapi-framework", "json-schema"],
  },

  // ── Next.js & Frontend (frontend) ───────────────────────────────────────────

  {
    slug: "nextjs-framework",
    term: "Next.js",
    definition:
      "Next.js is a React-based full-stack framework developed by Vercel that provides server-side rendering (SSR), static site generation (SSG), API routes, and edge functions out of the box. Its App Router architecture uses React Server Components for efficient server-side data fetching and streaming. Next.js is the dominant frontend framework for AI applications, powering chat interfaces, dashboards, and admin panels that connect to Python/FastAPI AI backends. It handles streaming UI updates, image optimization, SEO, and deployment to serverless platforms seamlessly.",
    category: "frontend",
    relatedTerms: ["app-router", "server-component", "vercel", "react-server-components"],
  },
  {
    slug: "app-router",
    term: "App Router",
    definition:
      "The App Router is Next.js's file-system-based routing architecture (introduced in Next.js 13) that uses React Server Components by default, supports nested layouts, loading states, error boundaries, and parallel routes. Routes are defined by directory structure in the app/ folder, with special files like page.tsx, layout.tsx, loading.tsx, and error.tsx. The App Router replaces the older Pages Router, offering improved performance through server-side rendering, streaming, and partial prerendering. It is the recommended architecture for new Next.js applications.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "server-component", "route-handler", "react-server-components"],
  },
  {
    slug: "server-component",
    term: "Server Component",
    definition:
      "A React Server Component (RSC) is a component that renders exclusively on the server, with its output (HTML) streamed to the client without sending its JavaScript to the browser. Server Components can directly access databases, file systems, and internal APIs without exposing credentials to the client, and they reduce the JavaScript bundle sent to the browser. In Next.js App Router, all components are Server Components by default unless marked with 'use client'. They are ideal for data-fetching pages, layouts, and any component that doesn't need client-side interactivity.",
    category: "frontend",
    relatedTerms: ["client-component", "react-server-components", "nextjs-framework", "app-router"],
  },
  {
    slug: "client-component",
    term: "Client Component",
    definition:
      "A Client Component in Next.js is a React component that runs in the browser, enabling interactivity through event handlers, state management (useState, useEffect), and browser APIs. Client Components are designated with the 'use client' directive at the top of the file. They are necessary for chat input forms, real-time message streaming displays, drag-and-drop interfaces, and any UI that responds to user interactions. In AI applications, Client Components handle the interactive chat UI while Server Components handle data fetching and initial rendering.",
    category: "frontend",
    relatedTerms: ["server-component", "nextjs-framework", "react-server-components"],
  },
  {
    slug: "server-action",
    term: "Server Action",
    definition:
      "Server Actions are async functions in Next.js that execute on the server but can be invoked directly from Client Components, eliminating the need to manually create API endpoints for form submissions and data mutations. Defined with the 'use server' directive, they handle form submissions, database writes, and cache revalidation. Server Actions provide type-safe server-client communication, automatic request handling, and progressive enhancement (forms work without JavaScript). In AI applications, they can trigger agent runs, save conversation feedback, or update user preferences.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "server-component", "route-handler", "app-router"],
  },
  {
    slug: "route-handler",
    term: "Route Handler",
    definition:
      "Route Handlers in Next.js are API endpoints defined using Web API Request and Response objects in route.ts files within the app/ directory. They support all HTTP methods (GET, POST, PUT, DELETE), streaming responses, cookies, headers, and dynamic segments. Route Handlers replace the older API Routes from the Pages Router and can run on both Node.js and Edge runtimes. In AI frontends, Route Handlers proxy requests to Python backends, handle authentication callbacks, serve SSE streams for chat responses, and implement BFF (Backend for Frontend) patterns.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "api-route", "app-router", "server-action"],
  },
  {
    slug: "api-route",
    term: "API Route",
    definition:
      "API Routes are server-side endpoints in Next.js that handle HTTP requests, enabling the frontend application to implement backend logic without a separate server. In the Pages Router, they are defined in pages/api/ directory, while in the App Router they are implemented as Route Handlers. API Routes can connect to databases, call external APIs, process form submissions, and handle authentication. In AI applications, they serve as a BFF (Backend for Frontend) layer that proxies requests to AI backends, handles streaming, and manages client authentication.",
    category: "frontend",
    relatedTerms: ["route-handler", "nextjs-framework", "server-action"],
  },
  {
    slug: "react-server-components",
    term: "React Server Components",
    definition:
      "React Server Components (RSC) is a React architecture where components render on the server by default, sending only HTML and a minimal serialized component tree to the client. RSCs can access server-side resources directly (databases, file systems, environment variables) and produce zero client-side JavaScript for non-interactive content. They interoperate with Client Components through a clear boundary — server components can pass serializable props to client components. RSC is the foundation of Next.js App Router and enables faster page loads, smaller bundles, and improved SEO for AI application frontends.",
    category: "frontend",
    relatedTerms: ["server-component", "client-component", "nextjs-framework", "app-router"],
  },
  {
    slug: "vercel",
    term: "Vercel",
    definition:
      "Vercel is a cloud platform optimized for deploying frontend applications, particularly Next.js, with automatic CI/CD, global CDN, serverless functions, and edge computing. It provides zero-configuration deployment, preview deployments for every PR, analytics, and speed insights. Vercel's infrastructure automatically scales serverless functions and edge functions, handles SSL, and optimizes asset delivery. For AI applications, Vercel offers the AI SDK for building streaming chat UIs, edge-compatible AI middleware, and seamless integration with AI backends through serverless proxy functions.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "serverless", "edge-runtime", "streaming-frontend"],
  },
  {
    slug: "serverless",
    term: "Serverless",
    definition:
      "Serverless computing is a cloud execution model where the cloud provider dynamically manages server allocation, scaling, and infrastructure — developers deploy functions that run on demand without provisioning servers. Functions are triggered by events (HTTP requests, queue messages, schedules) and scale automatically from zero to thousands of concurrent instances. Serverless platforms include AWS Lambda, Google Cloud Functions, Vercel Functions, and Cloudflare Workers. In AI applications, serverless handles API request processing, webhook handlers, and lightweight inference, though cold starts and execution time limits can be challenging for long-running LLM calls.",
    category: "frontend",
    relatedTerms: ["vercel", "edge-runtime", "aws-lambda", "serverless-function"],
  },
  {
    slug: "edge-runtime",
    term: "Edge Runtime",
    definition:
      "Edge runtime refers to lightweight JavaScript/WebAssembly execution environments deployed to edge locations (CDN nodes) around the world, enabling code to run geographically close to users with minimal latency. Next.js and Vercel support edge runtime for Route Handlers and Middleware, providing sub-millisecond cold starts and access to Web API standards. Edge runtime has limitations — no Node.js APIs, restricted package support, and smaller memory limits. In AI applications, edge runtime is used for authentication, request routing, A/B testing, and lightweight request transformation before proxying to AI backends.",
    category: "frontend",
    relatedTerms: ["vercel", "serverless", "nextjs-framework", "middleware-nextjs"],
  },
  {
    slug: "middleware-nextjs",
    term: "Middleware (Next.js)",
    definition:
      "Next.js Middleware is a function that runs before every request is processed, executing on the Edge Runtime at the CDN level. It can rewrite URLs, redirect users, modify headers, set cookies, and implement authentication checks — all before the page or API route handler executes. Middleware runs at the edge for minimal latency and is defined in a single middleware.ts file at the project root. In AI applications, middleware handles authentication guards, locale detection, bot filtering, and request logging across all routes.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "edge-runtime", "app-router", "middleware"],
  },
  {
    slug: "streaming-frontend",
    term: "Streaming (Frontend)",
    definition:
      "Frontend streaming in Next.js and React refers to progressively sending rendered HTML and data to the client as it becomes available, rather than waiting for the entire page to be ready. Next.js implements streaming through React Suspense boundaries — loading.tsx files show fallback UI while server components fetch data. For AI chat interfaces, streaming is critical: LLM tokens are displayed to the user as they arrive (via SSE or WebSocket), providing a responsive 'typing' experience. The Vercel AI SDK provides React hooks for easy streaming chat UI implementation.",
    category: "frontend",
    relatedTerms: ["server-sent-events", "websocket-streaming", "nextjs-framework", "server-component"],
  },
  {
    slug: "image-optimization",
    term: "Image Optimization",
    definition:
      "Image Optimization in Next.js is the automatic processing of images to serve the optimal format (WebP, AVIF), size, and quality for each user's device and viewport. The next/image component provides lazy loading (images load when entering the viewport), responsive sizing (serving different resolutions for different screen sizes), and automatic format conversion. Images are processed on-demand and cached for subsequent requests. This is relevant for AI applications that generate or display images, dashboards with data visualizations, and content-rich AI-powered applications.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "vercel"],
  },
  {
    slug: "metadata-nextjs",
    term: "Metadata",
    definition:
      "Metadata in Next.js refers to the system for defining HTML metadata (title, description, Open Graph tags, icons, robots directives) for pages using either a static metadata object or a dynamic generateMetadata function. This metadata is critical for SEO, social media sharing, and browser tab display. In AI-powered websites, dynamic metadata is used to generate unique titles and descriptions for each glossary page, blog post, or project page, improving search engine visibility. Next.js automatically handles metadata merging across nested layouts.",
    category: "frontend",
    relatedTerms: ["nextjs-framework", "app-router", "server-component"],
  },

  // ── Voice AI (voice-ai) ─────────────────────────────────────────────────────

  {
    slug: "text-to-speech",
    term: "Text-to-Speech (TTS)",
    definition:
      "Text-to-Speech (TTS) is the technology that converts written text into natural-sounding spoken audio. Modern neural TTS systems use deep learning models (transformers, diffusion models) to produce speech with realistic intonation, emotion, and rhythm, far surpassing the robotic output of older concatenative and parametric systems. TTS is essential for voice AI agents, accessibility features, audiobook generation, and conversational AI interfaces. Leading TTS systems include ElevenLabs, OpenAI TTS, Google Cloud TTS, and Amazon Polly, with an increasing focus on real-time, low-latency generation.",
    category: "voice-ai",
    relatedTerms: ["speech-to-text", "voice-ai-agent", "voice-cloning"],
  },
  {
    slug: "speech-to-text",
    term: "Speech-to-Text (STT)",
    definition:
      "Speech-to-Text (STT), also called automatic speech recognition (ASR), is the technology that converts spoken audio into written text. Modern STT systems use transformer-based models trained on hundreds of thousands of hours of audio to achieve near-human transcription accuracy across languages and accents. STT is the input pipeline for voice AI agents, enabling users to interact through speech. Leading systems include OpenAI Whisper (open-source), Google Speech-to-Text, and Deepgram, with capabilities including real-time streaming transcription, speaker diarization, and word-level timestamps.",
    category: "voice-ai",
    relatedTerms: ["text-to-speech", "automatic-speech-recognition", "voice-ai-agent"],
  },
  {
    slug: "voice-cloning",
    term: "Voice Cloning",
    definition:
      "Voice cloning is the process of creating a synthetic copy of a specific person's voice using AI, enabling TTS systems to generate speech that sounds like a particular individual. Modern voice cloning requires as little as a few seconds of reference audio to capture the speaker's timbre, accent, and speaking style. Applications include personalized AI assistants, content localization (dubbing in the speaker's own voice), accessibility tools, and entertainment. Voice cloning raises significant ethical concerns around consent, deepfakes, and voice-based authentication fraud.",
    category: "voice-ai",
    relatedTerms: ["text-to-speech", "voice-ai-agent", "ai-ethics"],
  },
  {
    slug: "automatic-speech-recognition",
    term: "Automatic Speech Recognition (ASR)",
    definition:
      "Automatic Speech Recognition (ASR) is the broader field encompassing speech-to-text technology, covering the full pipeline from audio signal processing to language understanding. Modern ASR systems combine acoustic modeling (converting audio features to phonemes), language modeling (predicting likely word sequences), and end-to-end transformer architectures that handle the entire pipeline jointly. Key challenges include handling background noise, multiple speakers, code-switching between languages, and domain-specific terminology. ASR accuracy is measured by Word Error Rate (WER) and has reached 5-10% on standard benchmarks.",
    category: "voice-ai",
    relatedTerms: ["speech-to-text", "voice-ai-agent", "natural-language-processing"],
  },
  {
    slug: "voice-ai-agent",
    term: "Voice AI Agent",
    definition:
      "A Voice AI Agent is an autonomous AI system that interacts with users through spoken conversation, combining speech-to-text (understanding spoken input), LLM reasoning (processing and generating responses), and text-to-speech (delivering spoken output) in a real-time pipeline. Voice AI agents handle phone calls, customer service, virtual reception, and hands-free AI assistance. Key technical challenges include latency management (users expect sub-second response times), turn-taking, handling interruptions, and maintaining natural conversational flow. Platforms include LiveKit, Retell AI, and Bland.ai.",
    category: "voice-ai",
    relatedTerms: ["text-to-speech", "speech-to-text", "ai-agent", "backchanneling"],
  },
  {
    slug: "backchanneling",
    term: "Backchanneling",
    definition:
      "Backchanneling in voice AI refers to the conversational signals a listener produces to indicate engagement and understanding while the other party is speaking — such as 'mm-hmm,' 'right,' 'I see,' and other verbal affirmations. In voice AI agents, implementing backchanneling makes conversations feel more natural and human-like, as users perceive the agent as actively listening rather than waiting silently. Advanced voice AI systems detect appropriate moments for backchanneling based on prosody, pauses, and semantic content, significantly improving the perceived quality of voice interactions.",
    category: "voice-ai",
    relatedTerms: ["voice-ai-agent", "endpointing", "text-to-speech"],
  },
  {
    slug: "endpointing",
    term: "Endpointing",
    definition:
      "Endpointing (also called voice activity detection or end-of-utterance detection) is the process of determining when a speaker has finished their turn in a conversation. Accurate endpointing is critical for voice AI agents — cutting in too early interrupts the user, while waiting too long creates awkward silences. Modern endpointing combines acoustic features (silence duration, pitch drop), linguistic cues (complete sentences, falling intonation), and semantic understanding (the utterance forms a complete thought). Getting endpointing right is one of the most challenging aspects of building natural-feeling voice AI interactions.",
    category: "voice-ai",
    relatedTerms: ["voice-ai-agent", "backchanneling", "speech-to-text"],
  },

  // ── Cloud & Deployment (cloud) ──────────────────────────────────────────────

  {
    slug: "aws",
    term: "AWS",
    definition:
      "Amazon Web Services (AWS) is the world's largest cloud computing platform, providing over 200 services including computing (EC2, Lambda), storage (S3), databases (RDS, DynamoDB), machine learning (SageMaker, Bedrock), and networking. For AI applications, AWS offers GPU instances for model training/inference, Bedrock for managed LLM access, SageMaker for MLOps, and a comprehensive ecosystem of supporting services. AWS's global infrastructure spans 30+ regions, providing the scale and reliability needed for production AI deployments.",
    category: "cloud",
    relatedTerms: ["aws-lambda", "google-cloud-platform", "azure", "kubernetes"],
  },
  {
    slug: "azure",
    term: "Azure",
    definition:
      "Microsoft Azure is a comprehensive cloud platform that provides strong AI capabilities through its partnership with OpenAI. Azure OpenAI Service offers enterprise-grade access to GPT-4, DALL-E, and Whisper models with data privacy guarantees, content filtering, and VNet integration. Azure also provides Azure Machine Learning for MLOps, Azure AI Search (formerly Cognitive Search) for RAG, and GPU computing for model training. Azure is particularly popular in enterprise AI deployments due to Microsoft's existing corporate relationships and compliance certifications.",
    category: "cloud",
    relatedTerms: ["aws", "google-cloud-platform", "microsoft-copilot", "openai-api"],
  },
  {
    slug: "google-cloud-platform",
    term: "Google Cloud Platform",
    definition:
      "Google Cloud Platform (GCP) is Google's suite of cloud computing services, with particular strength in AI/ML through services like Vertex AI (MLOps platform), Gemini API, Cloud TPUs (custom AI accelerators), BigQuery (serverless data warehouse), and Cloud Run (serverless containers). GCP provides access to Google's Gemini models through Vertex AI, along with managed services for the full ML lifecycle. Google's expertise in AI research (the Transformer paper originated at Google) translates into cutting-edge cloud AI services and infrastructure.",
    category: "cloud",
    relatedTerms: ["aws", "azure", "google-gemini", "cloud-run"],
  },
  {
    slug: "aws-lambda",
    term: "AWS Lambda",
    definition:
      "AWS Lambda is Amazon's serverless compute service that runs code in response to events without provisioning or managing servers. Functions are triggered by HTTP requests (via API Gateway), queue messages (SQS), file uploads (S3), schedules (EventBridge), and 200+ other event sources. Lambda automatically scales from zero to thousands of concurrent executions. For AI applications, Lambda handles webhook processing, lightweight API endpoints, async task triggering, and event-driven pipelines. Limitations include 15-minute execution timeout, 10GB memory limit, and cold start latency.",
    category: "cloud",
    relatedTerms: ["serverless-function", "aws", "serverless", "api-gateway"],
  },
  {
    slug: "kubernetes-cloud",
    term: "Kubernetes",
    definition:
      "Kubernetes (K8s) is the industry-standard container orchestration platform for deploying, scaling, and managing containerized applications in production. It automates container placement, load balancing, health monitoring, rolling updates, and secret management across clusters of machines. Managed Kubernetes services (EKS on AWS, GKE on GCP, AKS on Azure) reduce operational overhead. For AI workloads, Kubernetes manages GPU scheduling, model serving replicas, vector database clusters, and the complex multi-service architectures typical of production AI systems.",
    category: "cloud",
    relatedTerms: ["docker-cloud", "helm", "terraform", "container"],
  },
  {
    slug: "docker-cloud",
    term: "Docker",
    definition:
      "Docker is the standard containerization platform for packaging applications and dependencies into portable, isolated containers. A Dockerfile defines the container image (base OS, dependencies, application code), and Docker Compose orchestrates multi-container applications locally. For AI development, Docker ensures reproducible environments across teams and deployment stages — the same Python version, CUDA drivers, and library versions everywhere. Docker images are the deployment unit for Kubernetes, Cloud Run, and other orchestration platforms, making Docker the foundation of modern AI deployment workflows.",
    category: "cloud",
    relatedTerms: ["container", "kubernetes-cloud", "helm", "ci-cd-pipeline"],
  },
  {
    slug: "container",
    term: "Container",
    definition:
      "A container is a lightweight, standalone, executable package that includes an application and all its dependencies (runtime, libraries, system tools, configuration) isolated from the host system through OS-level virtualization. Containers share the host kernel but maintain separate process and filesystem namespaces, making them much lighter than virtual machines. In AI deployments, containers package model servers, API services, vector databases, and worker processes into portable units that run identically across development laptops, CI servers, and production clouds.",
    category: "cloud",
    relatedTerms: ["docker-cloud", "kubernetes-cloud", "containerization"],
  },
  {
    slug: "helm",
    term: "Helm",
    definition:
      "Helm is the package manager for Kubernetes, using 'charts' (templated YAML configurations) to define, version, and deploy complex multi-component applications. A Helm chart packages all Kubernetes resources (deployments, services, config maps, secrets, ingress) needed for an application with configurable values for different environments. For AI deployments, Helm charts manage the deployment of entire AI stacks — API server, model server, vector database, Redis cache, and monitoring — with environment-specific configurations for staging and production.",
    category: "cloud",
    relatedTerms: ["kubernetes-cloud", "terraform", "docker-cloud", "infrastructure-as-code"],
  },
  {
    slug: "terraform",
    term: "Terraform",
    definition:
      "Terraform is an open-source infrastructure-as-code tool by HashiCorp that enables declarative provisioning and management of cloud resources across multiple providers (AWS, Azure, GCP) using HCL (HashiCorp Configuration Language). Terraform tracks infrastructure state, plans changes before applying them, and supports modules for reusable infrastructure patterns. For AI deployments, Terraform provisions GPU instances, VPCs, load balancers, managed databases, Kubernetes clusters, and all supporting infrastructure needed for production AI systems, ensuring reproducible and version-controlled infrastructure.",
    category: "cloud",
    relatedTerms: ["infrastructure-as-code", "helm", "kubernetes-cloud", "aws"],
  },
  {
    slug: "serverless-function",
    term: "Serverless Function",
    definition:
      "A serverless function is a single-purpose piece of code deployed to a serverless platform that executes in response to events, automatically scaling from zero with no infrastructure management. Functions are stateless, short-lived, and billed only for actual execution time. Platforms include AWS Lambda, Google Cloud Functions, Azure Functions, and Vercel Functions. In AI applications, serverless functions handle webhook receivers, lightweight API proxies, scheduled tasks, and event processing. They are less suited for long-running LLM inference or GPU workloads due to timeout and resource limits.",
    category: "cloud",
    relatedTerms: ["aws-lambda", "serverless", "cloud-run", "vercel"],
  },
  {
    slug: "cloud-run",
    term: "Cloud Run",
    definition:
      "Google Cloud Run is a managed serverless platform that runs containerized applications with automatic scaling, including scale-to-zero. Unlike traditional serverless functions with strict size and time limits, Cloud Run supports any Docker container with configurable memory (up to 32GB), CPU, timeout (up to 60 minutes), and concurrency settings. For AI applications, Cloud Run is well-suited for hosting FastAPI backends, model serving endpoints, and RAG services because it supports long-running requests, WebSocket connections, and custom containers with GPU support.",
    category: "cloud",
    relatedTerms: ["google-cloud-platform", "docker-cloud", "serverless", "kubernetes-cloud"],
  },
  {
    slug: "hybrid-cloud",
    term: "Hybrid Cloud",
    definition:
      "Hybrid cloud is an IT architecture that combines on-premises infrastructure or private cloud with public cloud services, allowing workloads and data to move between them. Organizations use hybrid cloud for AI when they need to keep sensitive data on-premises (for compliance or privacy), leverage GPU compute from public clouds for training, run inference close to data sources, or gradually migrate workloads to the cloud. Kubernetes enables hybrid cloud by providing a consistent orchestration layer across on-premises and cloud environments.",
    category: "cloud",
    relatedTerms: ["private-cloud", "aws", "kubernetes-cloud", "edge-deployment"],
  },
  {
    slug: "private-cloud",
    term: "Private Cloud",
    definition:
      "A private cloud is a cloud computing environment dedicated exclusively to a single organization, either hosted on-premises or by a third-party provider. Private clouds provide the same cloud benefits (elasticity, self-service, automation) with enhanced security, compliance, and control over data residency. For AI applications handling sensitive data (healthcare, finance, government), private clouds ensure that training data, model weights, and inference requests never leave the organization's controlled environment. Running open-weight LLMs on private infrastructure eliminates concerns about data exposure to third-party API providers.",
    category: "cloud",
    relatedTerms: ["hybrid-cloud", "edge-deployment", "open-weights-model"],
  },
  {
    slug: "edge-deployment",
    term: "Edge Deployment",
    definition:
      "Edge deployment refers to running AI models and applications on edge devices or edge servers located close to end users or data sources, rather than in centralized cloud data centers. This reduces latency, minimizes bandwidth usage, enables offline operation, and keeps data local for privacy. Edge AI deployment requires optimized models (quantized, distilled, or pruned) that fit within edge hardware constraints. Common edge targets include smartphones, IoT gateways, retail kiosks, autonomous vehicles, and regional edge servers. Technologies like ONNX Runtime, TensorRT, and Core ML enable efficient edge model execution.",
    category: "cloud",
    relatedTerms: ["edge-computing", "quantization", "inference", "private-cloud"],
  },
  {
    slug: "inference-pipeline",
    term: "Inference Pipeline",
    definition:
      "An inference pipeline is a production system that orchestrates the complete flow of processing an AI prediction request — from receiving input, through preprocessing, model inference, postprocessing, and returning results. For LLM applications, the inference pipeline includes prompt assembly (combining system prompt, user input, retrieved context), model invocation (with retry and fallback logic), output parsing (extracting structured data), guardrail validation, and response formatting. Production inference pipelines include caching, load balancing, cost tracking, and observability at each stage.",
    category: "cloud",
    relatedTerms: ["inference", "model-serving", "rag-retrieval-augmented-generation", "data-pipeline"],
  },

  // ── Security & Ethics (security) ────────────────────────────────────────────

  {
    slug: "ai-ethics",
    term: "AI Ethics",
    definition:
      "AI ethics is the interdisciplinary field studying the moral implications of developing and deploying artificial intelligence systems. It addresses fairness (preventing discrimination), transparency (explainable decisions), privacy (protecting personal data), accountability (who is responsible for AI actions), and beneficence (ensuring AI benefits humanity). AI ethics frameworks guide organizations in developing responsible AI policies, conducting impact assessments, and implementing safeguards. As AI systems become more powerful and pervasive, ethical considerations are increasingly codified into regulations like the EU AI Act.",
    category: "security",
    relatedTerms: ["ai-safety", "ai-governance", "responsible-ai", "bias"],
  },
  {
    slug: "ai-safety",
    term: "AI Safety",
    definition:
      "AI safety is the research field focused on ensuring that AI systems behave safely and as intended, particularly as they become more capable. It encompasses alignment (ensuring AI goals match human values), robustness (maintaining safe behavior under adversarial conditions), interpretability (understanding model decisions), and containment (preventing unsafe actions). AI safety research includes red teaming, Constitutional AI, RLHF, guardrails, and formal verification. The field has gained urgency as frontier models approach capabilities that could cause significant harm if misaligned or misused.",
    category: "security",
    relatedTerms: ["ai-ethics", "alignment", "ai-governance", "llm-red-teaming"],
  },
  {
    slug: "ai-governance",
    term: "AI Governance",
    definition:
      "AI governance encompasses the policies, frameworks, regulations, and organizational structures that guide the development, deployment, and use of AI systems. It includes internal governance (model risk management, ethical review boards, responsible AI policies), industry standards (ISO 42001, NIST AI RMF), and governmental regulations (EU AI Act, Executive Order on AI). AI governance ensures accountability, transparency, and compliance throughout the AI lifecycle. Organizations implementing AI governance establish clear roles, risk assessments, documentation requirements, and monitoring procedures for their AI systems.",
    category: "security",
    relatedTerms: ["ai-ethics", "ai-safety", "responsible-ai", "bias-auditing"],
  },
  {
    slug: "data-poisoning",
    term: "Data Poisoning",
    definition:
      "Data poisoning is an adversarial attack where an attacker intentionally corrupts training data to manipulate a model's behavior. By injecting carefully crafted examples into the training set, attackers can introduce backdoors (the model behaves normally except on trigger inputs), degrade overall performance, or bias the model toward specific outputs. For LLMs, data poisoning risks include corrupted web-scraped training data, manipulated fine-tuning datasets, and poisoned RAG knowledge bases. Defenses include data validation, anomaly detection, and training data provenance tracking.",
    category: "security",
    relatedTerms: ["ai-safety", "prompt-injection", "training-data", "bias"],
  },
  {
    slug: "differential-privacy",
    term: "Differential Privacy",
    definition:
      "Differential privacy is a mathematical framework for quantifying and limiting the privacy risk of individual data points when sharing aggregate statistics or training machine learning models. It works by adding calibrated noise to computations, ensuring that the output does not significantly change whether any individual's data is included or not. Differential privacy is used in federated learning, census data, and model training to provide provable privacy guarantees. It enables organizations to derive insights from sensitive data while protecting individual privacy, with an epsilon parameter controlling the privacy-utility trade-off.",
    category: "security",
    relatedTerms: ["federated-learning", "privacy-enhancing-technologies", "ai-governance", "zero-data-retention"],
  },
  {
    slug: "zero-data-retention",
    term: "Zero Data Retention",
    definition:
      "Zero data retention (ZDR) is a data handling policy where an AI service provider commits to not storing, logging, or using customer input data and model outputs after the API request is completed. This is critical for organizations handling sensitive data (healthcare, legal, financial) that need LLM capabilities without the risk of data exposure. Major LLM providers offer ZDR options, typically at enterprise tiers — OpenAI's Enterprise API and Anthropic's API both offer ZDR commitments. ZDR policies must be verified through contracts, audits, and compliance certifications.",
    category: "security",
    relatedTerms: ["differential-privacy", "hipaa-compliance", "ai-governance", "privacy-enhancing-technologies"],
  },
  {
    slug: "hipaa-compliance",
    term: "HIPAA Compliance",
    definition:
      "HIPAA (Health Insurance Portability and Accountability Act) compliance in AI refers to meeting the regulatory requirements for handling protected health information (PHI) when building AI systems for healthcare. HIPAA-compliant AI deployments require encrypted data transmission and storage, access controls, audit logging, Business Associate Agreements (BAAs) with cloud and LLM providers, and policies preventing PHI from being used in model training. Running open-weight models on private infrastructure or using HIPAA-eligible managed services (Azure OpenAI, AWS HealthLake) are common approaches for compliant healthcare AI.",
    category: "security",
    relatedTerms: ["ai-governance", "zero-data-retention", "private-cloud", "differential-privacy"],
  },
  {
    slug: "privacy-enhancing-technologies",
    term: "Privacy-Enhancing Technologies",
    definition:
      "Privacy-Enhancing Technologies (PETs) are a collection of techniques and tools designed to protect personal data while still enabling useful computation and AI model training. PETs include differential privacy (adding noise to preserve individual privacy), federated learning (training models without centralizing data), homomorphic encryption (computing on encrypted data), secure multi-party computation (jointly computing without revealing inputs), and synthetic data generation. PETs are increasingly important for AI applications that process sensitive data, enabling organizations to leverage AI while complying with privacy regulations like GDPR.",
    category: "security",
    relatedTerms: ["differential-privacy", "federated-learning", "zero-data-retention", "ai-governance"],
  },
  {
    slug: "bias-auditing",
    term: "Bias Auditing",
    definition:
      "Bias auditing is the systematic evaluation of AI systems for unfair or discriminatory behavior across different demographic groups, use cases, and input distributions. It involves testing model outputs for disparities based on race, gender, age, language, and other protected attributes, using both automated metrics and human evaluation. Bias audits examine training data composition, model predictions, and downstream impact. Regulatory frameworks (EU AI Act, NYC Local Law 144) increasingly require bias audits for AI systems used in consequential decisions. Tools include Fairlearn, AI Fairness 360, and custom evaluation pipelines.",
    category: "security",
    relatedTerms: ["bias", "responsible-ai", "ai-governance", "ai-ethics"],
  },
  {
    slug: "responsible-ai",
    term: "Responsible AI",
    definition:
      "Responsible AI is an organizational approach to developing and deploying AI systems that are fair, transparent, accountable, safe, and privacy-preserving. It encompasses the full lifecycle — from data collection and model training through deployment and monitoring — with practices including bias auditing, explainability, human oversight, security testing, and environmental impact assessment. Responsible AI frameworks (Google's AI Principles, Microsoft's Responsible AI Standard, NIST AI RMF) provide structured approaches for organizations to implement AI governance. It is both an ethical imperative and increasingly a regulatory requirement.",
    category: "security",
    relatedTerms: ["ai-ethics", "ai-governance", "bias-auditing", "ai-safety"],
  },

  // ── Tools & Data (various categories) ───────────────────────────────────────

  {
    slug: "jupyter-notebook",
    term: "Jupyter Notebook",
    definition:
      "Jupyter Notebook is an open-source interactive computing environment that combines executable code, rich text, equations, and visualizations in a single document (notebook). It supports over 40 programming languages with Python being the most common. Jupyter Notebooks are the standard tool for data exploration, ML experimentation, model prototyping, and educational content in AI/ML. JupyterLab provides a more modern IDE-like experience, and Google Colab offers free cloud-hosted notebooks with GPU access. Notebooks are widely used for sharing reproducible AI research and tutorials.",
    category: "frameworks",
    relatedTerms: ["pandas", "numpy", "pytorch", "scikit-learn"],
  },
  {
    slug: "pandas",
    term: "Pandas",
    definition:
      "Pandas is the foundational Python library for data manipulation and analysis, providing the DataFrame data structure for working with tabular data. It supports reading/writing CSV, JSON, SQL, Excel, and Parquet formats, along with powerful operations for filtering, grouping, joining, pivoting, and aggregating data. In AI workflows, Pandas is used for data preprocessing, feature engineering, training data preparation, evaluation result analysis, and exploratory data analysis. While not designed for big data (use Polars or Spark for that), Pandas is the default tool for datasets that fit in memory.",
    category: "frameworks",
    relatedTerms: ["numpy", "jupyter-notebook", "scikit-learn", "big-data"],
  },
  {
    slug: "numpy",
    term: "NumPy",
    definition:
      "NumPy (Numerical Python) is the foundational Python library for numerical computing, providing efficient multi-dimensional array operations and mathematical functions. It is the backbone of the entire Python scientific computing ecosystem — Pandas, scikit-learn, PyTorch, and TensorFlow all build on NumPy arrays and conventions. NumPy's vectorized operations execute in optimized C code, providing orders-of-magnitude speedups over pure Python loops. In AI applications, NumPy handles vector operations, matrix mathematics, embedding manipulation, and data preprocessing.",
    category: "frameworks",
    relatedTerms: ["pandas", "pytorch", "tensorflow", "scikit-learn"],
  },
  {
    slug: "pytorch",
    term: "PyTorch",
    definition:
      "PyTorch is the dominant open-source deep learning framework, developed by Meta AI, used for research and production training of neural networks including large language models. It provides dynamic computational graphs (define-by-run), GPU acceleration via CUDA, automatic differentiation, and a rich ecosystem of model architectures and tools. PyTorch is the framework of choice for training LLMs, fine-tuning models (with libraries like Hugging Face Transformers, PEFT), and building custom neural architectures. Its eager execution mode and Pythonic API make it preferred for research, while TorchScript and torch.compile enable production optimization.",
    category: "frameworks",
    relatedTerms: ["tensorflow", "deep-learning", "numpy", "fine-tuning"],
  },
  {
    slug: "tensorflow",
    term: "TensorFlow",
    definition:
      "TensorFlow is an open-source deep learning framework developed by Google that provides tools for training and deploying machine learning models. It supports distributed training, model optimization, and deployment across platforms from mobile (TensorFlow Lite) to production servers (TensorFlow Serving) to browsers (TensorFlow.js). While PyTorch has become more popular for research, TensorFlow maintains a strong presence in production deployments, particularly in Google's ecosystem and enterprise environments. TensorFlow's Keras API provides a high-level interface for rapid model prototyping and training.",
    category: "frameworks",
    relatedTerms: ["pytorch", "deep-learning", "numpy", "model-serving"],
  },
  {
    slug: "scikit-learn",
    term: "Scikit-learn",
    definition:
      "Scikit-learn is the most widely used Python library for traditional machine learning, providing consistent APIs for classification, regression, clustering, dimensionality reduction, and model evaluation. It includes implementations of SVM, random forests, gradient boosting, K-means, PCA, and dozens of other algorithms, along with tools for data preprocessing, feature selection, cross-validation, and hyperparameter tuning. While deep learning frameworks handle neural networks, scikit-learn remains essential for classical ML tasks, baseline models, and the many production use cases where simpler models outperform deep learning.",
    category: "frameworks",
    relatedTerms: ["pandas", "numpy", "machine-learning", "supervised-learning"],
  },
  {
    slug: "big-data",
    term: "Big Data",
    definition:
      "Big data refers to datasets so large, fast-moving, or complex that traditional data processing tools cannot handle them effectively. It is characterized by the three Vs: volume (terabytes to petabytes), velocity (real-time or near-real-time), and variety (structured, semi-structured, unstructured). In AI, big data is both the fuel (massive datasets for training LLMs) and the challenge (processing billions of documents for RAG indexing). Technologies like Apache Spark, Hadoop, and cloud data warehouses enable processing at this scale, while data lakes store raw data in its native format.",
    category: "mlops",
    relatedTerms: ["data-lake", "data-warehouse", "etl", "data-pipeline"],
  },
  {
    slug: "data-lake",
    term: "Data Lake",
    definition:
      "A data lake is a centralized storage repository that holds raw data in its native format — structured (tables), semi-structured (JSON, XML), and unstructured (text, images, audio) — at any scale. Unlike data warehouses that require schema-on-write, data lakes use schema-on-read, providing flexibility to store all data first and define structure when querying. For AI applications, data lakes store training data, document corpora for RAG indexing, conversation logs, and telemetry data. Technologies include AWS S3, Azure Data Lake, Google Cloud Storage, and open formats like Apache Iceberg and Delta Lake.",
    category: "mlops",
    relatedTerms: ["data-warehouse", "big-data", "etl", "data-pipeline"],
  },
  {
    slug: "data-warehouse",
    term: "Data Warehouse",
    definition:
      "A data warehouse is a centralized repository of structured, processed data optimized for analytical queries and business intelligence. Unlike data lakes (raw data, any format), data warehouses store cleaned, transformed, schema-enforced data in columnar formats for fast aggregation and reporting. Modern cloud data warehouses (Snowflake, BigQuery, Redshift) support semi-structured data and ML model training directly on warehouse data. For AI applications, data warehouses store analytics on agent performance, cost tracking aggregations, user behavior patterns, and evaluation metrics.",
    category: "mlops",
    relatedTerms: ["data-lake", "big-data", "etl", "data-pipeline"],
  },
  {
    slug: "etl",
    term: "ETL",
    definition:
      "ETL (Extract, Transform, Load) is a data integration process that extracts data from source systems, transforms it (cleaning, enriching, aggregating, reformatting), and loads it into a destination system like a data warehouse or vector database. In AI applications, ETL pipelines handle document ingestion for RAG (extracting text from PDFs, transforming via chunking and embedding, loading into vector databases), training data preparation, and analytics aggregation. Modern approaches often use ELT (loading raw data first, then transforming), enabled by the compute power of cloud data warehouses.",
    category: "mlops",
    relatedTerms: ["data-pipeline", "data-lake", "data-warehouse", "indexing-pipeline"],
  },
  {
    slug: "workflow-automation",
    term: "Workflow Automation",
    definition:
      "Workflow automation uses software to execute multi-step business processes with minimal human intervention, routing tasks, triggering actions, and enforcing rules automatically. In the AI era, workflow automation increasingly incorporates LLM agents that handle unstructured tasks (reading emails, classifying documents, drafting responses) within otherwise deterministic workflows. Tools range from no-code platforms (Zapier, Make) to code-based orchestrators (Temporal, Airflow) to AI-native workflow engines. The combination of traditional automation with AI reasoning creates systems that handle both predictable and novel scenarios.",
    category: "agents",
    relatedTerms: ["business-process-automation", "agentic-workflow", "ai-agent"],
  },
  {
    slug: "business-process-automation",
    term: "Business Process Automation",
    definition:
      "Business Process Automation (BPA) uses technology to automate repetitive, rule-based business processes end-to-end, reducing manual effort, errors, and processing time. Traditional BPA handles structured workflows like invoice processing, employee onboarding, and order fulfillment. AI-powered BPA extends this to unstructured processes — document understanding, customer inquiry routing, content generation, and decision support. The integration of LLM agents into BPA systems enables handling exceptions, understanding natural language inputs, and making contextual decisions that previously required human judgment.",
    category: "agents",
    relatedTerms: ["workflow-automation", "agentic-workflow", "ai-agent", "chatbot"],
  },
  {
    slug: "chatbot",
    term: "Chatbot",
    definition:
      "A chatbot is a software application that conducts conversations with users through text or voice, simulating human-like interaction. Modern chatbots range from simple rule-based systems (decision trees, keyword matching) to sophisticated LLM-powered conversational AI that understands context, handles complex queries, and takes actions. LLM-based chatbots use RAG for knowledge grounding, tool calling for system integration, and conversation memory for multi-turn coherence. They are deployed for customer support, sales assistance, internal help desks, and as frontend interfaces for AI agent systems.",
    category: "agents",
    relatedTerms: ["conversational-ai", "virtual-assistant", "ai-agent", "rag-retrieval-augmented-generation"],
  },
  {
    slug: "virtual-assistant",
    term: "Virtual Assistant",
    definition:
      "A virtual assistant is an AI-powered software agent that performs tasks and provides information based on user commands and context. Virtual assistants combine natural language understanding, task execution, proactive suggestions, and personalization to serve as AI-powered personal aides. They range from consumer products (Siri, Alexa, Google Assistant) to enterprise assistants (Microsoft Copilot, custom AI agents). Modern virtual assistants leverage LLMs for nuanced understanding, tools for real-world actions, and long-term memory for personalization, evolving from simple Q&A systems into capable agentic systems.",
    category: "agents",
    relatedTerms: ["chatbot", "conversational-ai", "ai-agent", "voice-ai-agent"],
  },
  {
    slug: "conversational-ai",
    term: "Conversational AI",
    definition:
      "Conversational AI is the technology enabling natural, human-like dialogue between users and machines across text and voice channels. It encompasses natural language understanding (parsing user intent and entities), dialogue management (maintaining context and managing conversation flow), natural language generation (producing coherent responses), and integration with backend systems for action execution. Modern conversational AI is powered by LLMs that handle the full pipeline end-to-end, replacing the patchwork of specialized components used in traditional dialogue systems.",
    category: "agents",
    relatedTerms: ["chatbot", "virtual-assistant", "natural-language-processing", "voice-ai-agent"],
  },
  {
    slug: "recommender-system",
    term: "Recommender System",
    definition:
      "A recommender system is an AI system that predicts and suggests items (products, content, connections) that a user is likely to find relevant or interesting. Approaches include collaborative filtering (finding similar users or items based on interaction patterns), content-based filtering (matching item features to user preferences), and hybrid methods combining both. Modern recommender systems increasingly use deep learning and LLMs for understanding content semantics, generating explanations, and handling cold-start problems. They power the core experiences of Netflix, Spotify, Amazon, and social media platforms.",
    category: "ai-fundamentals",
    relatedTerms: ["machine-learning", "vector-embedding", "semantic-search", "deep-learning"],
  },
  {
    slug: "anomaly-detection",
    term: "Anomaly Detection",
    definition:
      "Anomaly detection is the identification of data points, patterns, or events that deviate significantly from expected behavior. Techniques include statistical methods (z-scores, IQR), isolation forests, autoencoders, and time-series models that learn normal patterns and flag deviations. In AI operations, anomaly detection monitors for unusual token usage (possible prompt injection), cost spikes, latency degradation, unexpected model behavior, and data drift. It is also used in cybersecurity (intrusion detection), finance (fraud detection), and manufacturing (quality control).",
    category: "ai-fundamentals",
    relatedTerms: ["machine-learning", "model-monitoring", "drift-detection", "unsupervised-learning"],
  },
  {
    slug: "object-detection",
    term: "Object Detection",
    definition:
      "Object detection is a computer vision task that identifies and localizes objects within images or video frames, outputting both the class label and bounding box coordinates for each detected object. Modern object detectors use deep learning architectures like YOLO (real-time, single-stage), Faster R-CNN (two-stage, high accuracy), and DETR (transformer-based). Object detection powers applications from autonomous driving (detecting pedestrians, vehicles, signs) and surveillance to retail analytics and medical imaging. It is increasingly combined with LLMs in vision-language models for open-vocabulary detection.",
    category: "ai-fundamentals",
    relatedTerms: ["computer-vision", "convolutional-neural-network", "deep-learning"],
  },
  {
    slug: "ocr",
    term: "OCR",
    definition:
      "OCR (Optical Character Recognition) is the technology that extracts text from images, scanned documents, PDFs, and handwritten notes. Modern OCR systems use deep learning (CNNs for feature extraction, transformers for sequence recognition) to achieve high accuracy across fonts, languages, and document layouts. In AI applications, OCR is a critical component of document processing pipelines — converting invoices, contracts, forms, and research papers into machine-readable text that can be indexed in RAG systems, analyzed by LLMs, or stored in databases. Tools include Tesseract, Google Document AI, and AWS Textract.",
    category: "ai-fundamentals",
    relatedTerms: ["computer-vision", "natural-language-processing", "rag-retrieval-augmented-generation"],
  },

  // ── RAG (new) ───────────────────────────────────────────────────────────────

  {
    slug: "faiss",
    term: "FAISS",
    definition:
      "FAISS (Facebook AI Similarity Search) is an open-source library developed by Meta AI for efficient similarity search and clustering of dense vectors. It provides highly optimized implementations of approximate nearest neighbor (ANN) algorithms including IVF (Inverted File Index), HNSW, and PQ (Product Quantization) that can search billions of vectors on GPU or CPU. FAISS is a library (not a database), making it ideal for embedding into applications, batch processing, and research. It is widely used as the vector search backend in RAG systems and recommendation engines.",
    category: "rag",
    relatedTerms: ["vector-database", "semantic-search", "weaviate", "similarity-scoring"],
  },
  {
    slug: "weaviate",
    term: "Weaviate",
    definition:
      "Weaviate is an open-source vector database that combines vector search with structured filtering, keyword search, and built-in AI module integrations. It supports automatic vectorization (embedding generation at ingest time using configured models), multi-tenancy, replication, and hybrid search combining BM25 and vector retrieval. Weaviate's GraphQL API provides flexible querying, and its module system integrates with OpenAI, Cohere, Hugging Face, and other model providers. It is available as a self-hosted solution or managed cloud service and is popular for production RAG applications requiring rich query capabilities.",
    category: "rag",
    relatedTerms: ["vector-database", "hybrid-search", "qdrant", "faiss"],
  },
  {
    slug: "rag-as-a-service",
    term: "RAG as a Service",
    definition:
      "RAG as a Service refers to managed platforms that provide the complete retrieval-augmented generation pipeline — document ingestion, chunking, embedding, vector storage, retrieval, and LLM generation — as a hosted service. These platforms abstract away the infrastructure complexity of building RAG systems, offering APIs for uploading documents and querying knowledge bases. Examples include OpenAI's Retrieval tool, Pinecone's Assistant, and various enterprise AI platforms. While convenient, managed RAG services offer less control over chunking strategies, embedding models, and retrieval logic compared to custom implementations.",
    category: "rag",
    relatedTerms: ["rag-retrieval-augmented-generation", "vector-database", "document-chunking", "semantic-search"],
  },
  {
    slug: "unstructured-rag",
    term: "Unstructured RAG",
    definition:
      "Unstructured RAG refers to retrieval-augmented generation systems designed to handle documents that lack consistent structure — PDFs with mixed layouts, images with embedded text, presentations, spreadsheets, and web pages with complex formatting. Unlike RAG on clean text, unstructured RAG requires sophisticated document parsing (extracting text, tables, and images), layout understanding, multi-modal embedding, and metadata extraction. Tools like Unstructured.io, LlamaParse, and Azure Document Intelligence specialize in preprocessing unstructured documents for RAG ingestion.",
    category: "rag",
    relatedTerms: ["rag-retrieval-augmented-generation", "document-chunking", "ocr", "indexing-pipeline"],
  },
  {
    slug: "continual-learning",
    term: "Continual Learning",
    definition:
      "Continual learning (also called lifelong learning or incremental learning) is the ability of an AI system to continuously learn from new data while retaining previously acquired knowledge, without catastrophic forgetting. For RAG systems, continual learning means seamlessly updating the knowledge base with new documents without reprocessing the entire corpus. For agents, it means improving from interaction feedback over time. Techniques include elastic weight consolidation, replay buffers, modular architectures, and RAG-based approaches where the knowledge base serves as an extensible external memory.",
    category: "rag",
    relatedTerms: ["rag-retrieval-augmented-generation", "agent-memory", "knowledge-base", "fine-tuning"],
  },
  {
    slug: "federated-search",
    term: "Federated Search",
    definition:
      "Federated search is a retrieval approach that simultaneously queries multiple distinct search indexes, databases, or data sources and combines the results into a unified ranked list. In RAG systems, federated search enables querying across multiple vector databases, structured databases, knowledge graphs, and external APIs in a single retrieval step. This is essential for enterprise applications where knowledge is distributed across many systems (SharePoint, Confluence, Notion, databases, code repositories). Result fusion uses techniques like reciprocal rank fusion to merge rankings from heterogeneous sources.",
    category: "rag",
    relatedTerms: ["hybrid-search", "reciprocal-rank-fusion", "rag-retrieval-augmented-generation", "knowledge-base"],
  },
];

// ── Helper functions ────────────────────────────────────────────────────────

export function getAllGlossarySlugs(): string[] {
  return glossaryTerms.map((t) => t.slug);
}

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getGlossaryTermsByCategory(category: GlossaryCategory): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}

export function getRelatedTerms(term: GlossaryTerm): GlossaryTerm[] {
  return term.relatedTerms
    .map((slug) => getGlossaryTermBySlug(slug))
    .filter((t): t is GlossaryTerm => t !== undefined);
}

/** Terms grouped by first letter, sorted alphabetically */
export function getTermsGroupedByLetter(): Map<string, GlossaryTerm[]> {
  const sorted = [...glossaryTerms].sort((a, b) =>
    a.term.localeCompare(b.term, "en", { sensitivity: "base" }),
  );
  const groups = new Map<string, GlossaryTerm[]>();
  for (const term of sorted) {
    const letter = term.term[0].toUpperCase();
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(term);
  }
  return groups;
}

/** Map of term slugs to relevant Vstorm project slugs */
export const termToProjectMap: Record<string, { slug: string; name: string }[]> = {
  "pydantic-ai": [
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
    { slug: "subagents-pydantic-ai", name: "Subagents for Pydantic AI" },
    { slug: "pydantic-ai-todo", name: "Pydantic AI Todo" },
  ],
  "ai-agent": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "agentic-ai": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
  "multi-agent-system": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "subagents-pydantic-ai", name: "Subagents for Pydantic AI" },
  ],
  "subagent-delegation": [
    { slug: "subagents-pydantic-ai", name: "Subagents for Pydantic AI" },
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
  "agent-orchestration": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
  "agentic-workflow": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "tool-calling": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "function-calling": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "human-in-the-loop": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
  "agent-memory": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
  ],
  "guardrails": [
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "agent-observability": [
    { slug: "logfire-assistant", name: "Logfire Assistant" },
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "cost-tracking": [
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
    { slug: "logfire-assistant", name: "Logfire Assistant" },
  ],
  "token-budget": [
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "logfire": [
    { slug: "logfire-assistant", name: "Logfire Assistant" },
  ],
  "opentelemetry": [
    { slug: "logfire-assistant", name: "Logfire Assistant" },
  ],
  "rag-retrieval-augmented-generation": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
  ],
  "vector-database": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "semantic-search": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "fastapi": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
  ],
  "docker": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "websocket-streaming": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
  ],
  "pydantic": [
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "prompt-injection": [
    { slug: "pydantic-ai-middleware", name: "Pydantic AI Middleware" },
  ],
  "postgresql": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
    { slug: "database-pydantic-ai", name: "Database Pydantic AI" },
  ],
  "pgvector": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "celery": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "redis": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "agent-sandbox": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
  "large-language-models": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "mcp-model-context-protocol": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
  "document-chunking": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "hybrid-search": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "summarization-pydantic-ai": [
    { slug: "summarization-pydantic-ai", name: "Summarization Agent" },
  ],
  "database-migration": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "authentication-jwt": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
    { slug: "pydantic-ai-backend", name: "Pydantic AI Backend" },
  ],
  "ci-cd-pipeline": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "containerization": [
    { slug: "full-stack-ai-agent-template", name: "Full-Stack AI Agent Template" },
  ],
  "agent-planning": [
    { slug: "pydantic-deepagents", name: "Pydantic Deep Agents" },
  ],
};
