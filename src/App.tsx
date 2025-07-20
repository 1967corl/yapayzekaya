import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Sparkles, MessageSquare, Image, Video, Code, Palette, Volume2, Music, FileText, Wrench, Zap, Star, TrendingUp, ArrowLeft, Brain } from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  website: string;
  category: string;
  featured?: boolean;
}

const tools: Tool[] = [
  // METİN
  {
    name: "ChatGPT",
    description: "OpenAI'nin geliştirdiği en popüler AI sohbet botu. Metin üretimi, analiz, özetleme ve yaratıcı yazım için güçlü yeteneklere sahip.",
    website: "https://chat.openai.com",
    category: "metin",
    featured: true
  },
  {
    name: "Claude",
    description: "Anthropic tarafından geliştirilen AI asistan. Uzun belgelerde daha fazla bağlam tutabilir, güvenlik odaklı tasarım.",
    website: "https://claude.ai/new",
    category: "metin",
    featured: true
  },
  {
    name: "Perplexity AI",
    description: "AI destekli arama motoru. Gerçek zamanlı bilgi erişimi ve kaynak referansları ile güvenilir yanıtlar sağlar.",
    website: "https://www.perplexity.ai/",
    category: "metin",
    featured: true
  },
  {
    name: "DeepSeek",
    description: "Güçlü açık kaynaklı AI modeli. Kod üretimi ve analiz konularında öne çıkan yeni nesil AI asistan.",
    website: "https://chat.deepseek.com/",
    category: "metin",
    featured: true
  },
  {
    name: "Gemini AI",
    description: "Google'ın gelişmiş AI modeli. Multimodal yetenekleri ile metin, görsel ve kod analizi yapabilen güçlü platform.",
    website: "https://gemini.google.com/",
    category: "metin",
    featured: true
  },
  {
    name: "Jasper",
    description: "Pazarlama odaklı AI içerik üretim platformu. Blog yazıları, reklam metinleri, e-posta kampanyaları için optimize edilmiş.",
    website: "https://www.jasper.ai",
    category: "metin"
  },
  {
    name: "Copy.ai",
    description: "Otomatik metin yazımı ve içerik üretimi için AI asistan. Sosyal medya içerikleri, ürün açıklamaları ve pazarlama metinleri.",
    website: "https://www.copy.ai",
    category: "metin"
  },
  {
    name: "DeepL Write",
    description: "AI destekli yazım asistanı. Dil bilgisi kontrolü, stil önerileri ve çeviri sonrası iyileştirme için etkili.",
    website: "https://www.deepl.com/write",
    category: "metin"
  },
  {
    name: "Monica",
    description: "Chrome eklentisi olarak çalışan AI asistan. Herhangi bir web sayfasında ChatGPT'yi kullanabilmenizi sağlar.",
    website: "https://monica.im",
    category: "metin"
  },
  {
    name: "Eightify",
    description: "YouTube videolarını hızlıca özetleyen AI araç. Uzun videoların ana noktalarını dakikalar içinde çıkarır.",
    website: "https://eightify.app",
    category: "metin"
  },
  {
    name: "Taskade",
    description: "AI destekli proje yönetimi ve işbirliği platformu. Görev oluşturma, plan yapma ve ekip çalışması için.",
    website: "https://www.taskade.com",
    category: "metin"
  },
  {
    name: "Dante AI",
    description: "Özel AI chatbot oluşturma platformu. Kendi verilerinizle eğitebileceğiniz chatbot sistemi.",
    website: "https://dante-ai.com",
    category: "metin"
  },
  {
    name: "SlidesAI",
    description: "Metinden otomatik sunum slayt oluşturan AI araç. Google Slides entegrasyonu ile hızlı sunum hazırlığı.",
    website: "https://www.slidesai.io",
    category: "metin"
  },
  {
    name: "Bearly",
    description: "Mac ve Windows için AI asistan uygulaması. Yazım, çeviri, özetleme ve araştırma için entegre çözüm.",
    website: "https://bearly.ai",
    category: "metin"
  },
  {
    name: "Scholarcy",
    description: "Akademik makaleleri özetleyen AI araç. Araştırmacılar için literatür taraması ve makale analizi.",
    website: "https://www.scholarcy.com",
    category: "metin"
  },
  {
    name: "Jenni",
    description: "Akademik yazım için AI asistan. Tez, makale ve araştırma yazılarında yardımcı olan platform.",
    website: "https://jenni.ai",
    category: "metin"
  },
  {
    name: "Paper-Digest",
    description: "Bilimsel makaleleri 3 dakikada özetleyen AI araç. Araştırmacılar için hızlı literatür taraması.",
    website: "https://www.paper-digest.com",
    category: "metin"
  },
  {
    name: "Notion AI",
    description: "Notion içinde entegre AI asistan. Not alma, yazım ve içerik organizasyonu için güçlü özellikler.",
    website: "https://www.notion.so/product/ai",
    category: "metin"
  },
  {
    name: "Grammarly",
    description: "AI destekli yazım ve dil bilgisi kontrolü. Profesyonel yazışmalar için stil ve ton önerileri.",
    website: "https://www.grammarly.com",
    category: "metin"
  },
  {
    name: "QuillBot",
    description: "AI ile metin yeniden yazma ve parafraz aracı. Akademik yazım ve içerik iyileştirme için ideal.",
    website: "https://quillbot.com",
    category: "metin"
  },

  // GÖRSEL
  {
    name: "DALL·E",
    description: "OpenAI'nin metinden görsel üretim modeli. Yaratıcı ve gerçekçi görseller oluşturmak için güçlü AI araç.",
    website: "https://openai.com/dall-e-3",
    category: "görsel",
    featured: true
  },
  {
    name: "Midjourney",
    description: "Sanatsal ve estetik görseller üretmede lider platform. Discord üzerinden çalışır, yüksek kaliteli sonuçlar verir.",
    website: "https://www.midjourney.com",
    category: "görsel",
    featured: true
  },
  {
    name: "Stable Diffusion",
    description: "Açık kaynaklı AI görsel üretim modeli. Özelleştirilebilir ve kendi stilinizi geliştirebilirsiniz.",
    website: "https://stability.ai",
    category: "görsel"
  },
  {
    name: "Adobe Firefly",
    description: "Adobe'nin AI görsel üretim aracı. Creative Cloud entegrasyonu ile ticari kullanım için güvenli.",
    website: "https://www.adobe.com/products/firefly.html",
    category: "görsel"
  },
  {
    name: "Canva Magic Design",
    description: "Canva'nın AI destekli tasarım önerisi sistemi. Kullanıcı dostu arayüzle hızlı grafik üretimi.",
    website: "https://www.canva.com/magic-design",
    category: "görsel"
  },
  {
    name: "Ideogram AI",
    description: "Metinden logo ve grafik tasarımı yapan AI araç. Özellikle tipografi ve logo tasarımında başarılı.",
    website: "https://ideogram.ai",
    category: "görsel"
  },
  {
    name: "Deep AI",
    description: "Çeşitli AI araçları sunan platform. Görsel üretimi, stil transferi ve görsel iyileştirme özellikleri.",
    website: "https://deepai.org",
    category: "görsel"
  },
  {
    name: "LeiaPix",
    description: "2D görselleri 3D derinlik haritasına dönüştüren AI araç. Fotoğraflarınıza derinlik efekti ekler.",
    website: "https://convert.leiapix.com",
    category: "görsel"
  },
  {
    name: "Stockimg AI",
    description: "AI ile stok fotoğraf, logo ve posterler oluşturan platform. Ticari kullanım için optimize edilmiş.",
    website: "https://stockimg.ai",
    category: "görsel"
  },
  {
    name: "DreamStudio",
    description: "Stability AI'nin resmi Stable Diffusion arayüzü. Profesyonel görsel üretimi için gelişmiş ayarlar.",
    website: "https://beta.dreamstudio.ai",
    category: "görsel"
  },
  {
    name: "Leonardo AI",
    description: "Oyun ve sanat odaklı AI görsel üretim platformu. Karakter tasarımı ve konsept sanatı için güçlü.",
    website: "https://leonardo.ai",
    category: "görsel"
  },
  {
    name: "Playground AI",
    description: "Kullanıcı dostu AI görsel üretim platformu. Çeşitli stil filtreleri ve düzenleme araçları.",
    website: "https://playgroundai.com",
    category: "görsel"
  },
  {
    name: "Artbreeder",
    description: "Genetik algoritma ile görsel karıştırma ve evrim platformu. Portre ve manzara üretimi için etkili.",
    website: "https://www.artbreeder.com",
    category: "görsel"
  },
  {
    name: "NightCafe",
    description: "AI sanat üretim topluluğu. Çeşitli stil seçenekleri ve sosyal paylaşım özellikleri.",
    website: "https://nightcafe.studio",
    category: "görsel"
  },

  // VİDEO
  {
    name: "Sora",
    description: "OpenAI'nin devrim niteliğindeki metinden video üretim modeli. Henüz halka açık değil ancak çığır açan teknoloji.",
    website: "https://openai.com/sora",
    category: "video",
    featured: true
  },
  {
    name: "Runway ML",
    description: "Metinden video oluşturma (Gen-2), video düzenleme ve AI destekli film yapım araçları sunan platform.",
    website: "https://runwayml.com",
    category: "video",
    featured: true
  },
  {
    name: "Pika Labs",
    description: "AI ile video oluşturma ve animasyon platformu. Kısa yaratıcı videolar için çok popüler.",
    website: "https://pika.art",
    category: "video"
  },
  {
    name: "Synthesia",
    description: "Avatar destekli konuşan videolar oluşturan platform. Eğitim, sunum ve kurumsal içerik için ideal.",
    website: "https://www.synthesia.io",
    category: "video"
  },
  {
    name: "HeyGen",
    description: "AI avatarlar ile konuşmalı video üretimi. Yüz animasyonu ve çoklu dil desteği güçlü.",
    website: "https://www.heygen.com",
    category: "video"
  },
  {
    name: "Pixverse AI",
    description: "Metinden video oluşturma platformu. Kullanıcı dostu arayüz ile hızlı video üretimi.",
    website: "https://pixverse.ai",
    category: "video"
  },
  {
    name: "Fliki",
    description: "Metinden video ve podcast oluşturan AI araç. Sesli anlatım ve görsel içerik bir arada.",
    website: "https://fliki.ai",
    category: "video"
  },
  {
    name: "Tavus",
    description: "Kişiselleştirilmiş AI video mesajları oluşturan platform. Satış ve pazarlama için optimize edilmiş.",
    website: "https://www.tavus.io",
    category: "video"
  },
  {
    name: "Windsor",
    description: "E-ticaret için kişiselleştirilmiş video mesajlar oluşturan AI araç. Müşteri deneyimini artırır.",
    website: "https://windsor.io",
    category: "video"
  },
  {
    name: "Vizard",
    description: "Uzun videoları kısa kliplere dönüştüren AI araç. Sosyal medya için optimize edilmiş içerik üretimi.",
    website: "https://vizard.ai",
    category: "video"
  },
  {
    name: "Lumen5",
    description: "Blog yazılarını ve metinleri videoya dönüştüren platform. Sosyal medya içerikleri için ideal.",
    website: "https://lumen5.com",
    category: "video"
  },
  {
    name: "Pictory",
    description: "Metinden otomatik video oluşturma platformu. Blog yazılarını ve scriptleri videoya dönüştürür.",
    website: "https://app.pictory.ai/login",
    category: "video"
  },
  {
    name: "InVideo",
    description: "AI destekli video düzenleme platformu. Şablon tabanlı hızlı video üretimi ve düzenleme.",
    website: "https://invideo.io",
    category: "video"
  },
  {
    name: "Descript",
    description: "AI destekli video ve podcast düzenleme platformu. Metin tabanlı düzenleme ile devrimci yaklaşım.",
    website: "https://www.descript.com",
    category: "video"
  },

  // KOD
  {
    name: "GitHub Copilot",
    description: "Microsoft ve OpenAI işbirliğiyle geliştirilen AI kodlama asistanı. VSCode ve JetBrains IDE entegrasyonu.",
    website: "https://github.com/features/copilot",
    category: "kod",
    featured: true
  },
  {
    name: "Lovable",
    description: "AI ile tam stack web uygulaması geliştirme platformu. Hızlı prototipleme ve deployment özellikleri.",
    website: "https://lovable.dev/",
    category: "kod",
    featured: true
  },
  {
    name: "Replit Ghostwriter",
    description: "Tarayıcı üzerinden AI destekli kodlama ortamı. Hızlı prototipleme ve öğrenme için ideal.",
    website: "https://replit.com/site/ghostwriter",
    category: "kod"
  },
  {
    name: "Amazon CodeWhisperer",
    description: "AWS uyumlu AI kodlama asistanı. Cloud tabanlı uygulamalar için optimize edilmiş öneriler.",
    website: "https://aws.amazon.com/codewhisperer",
    category: "kod"
  },
  {
    name: "Tabnine",
    description: "Makine öğrenmeli kod tamamlama aracı. Birçok IDE ile uyumlu, güçlü kod önerileri.",
    website: "https://www.tabnine.com",
    category: "kod"
  },
  {
    name: "Codeium",
    description: "Ücretsiz GitHub Copilot alternatifi. Kod tamamlama, açıklama ve çeviri özellikleri güçlü.",
    website: "https://codeium.com",
    category: "kod"
  },
  {
    name: "ChatGPT",
    description: "OpenAI'nin geliştirdiği en popüler AI sohbet botu. Kod yazımı, debugging ve programlama sorularında güçlü.",
    website: "https://chat.openai.com",
    category: "kod"
  },
  {
    name: "Claude",
    description: "Anthropic'in AI asistanı. Uzun kod dosyalarını analiz edebilir ve karmaşık programlama problemlerini çözebilir.",
    website: "https://claude.ai/new",
    category: "kod"
  },
  {
    name: "Gemini AI",
    description: "Google'ın gelişmiş AI modeli. Kod analizi, üretimi ve çoklu dosya işleme konularında başarılı.",
    website: "https://gemini.google.com/",
    category: "kod"
  },
  {
    name: "Bolt.new",
    description: "Tarayıcıda tam stack web uygulaması geliştirme platformu. Hızlı prototipleme ve deployment.",
    website: "https://bolt.new",
    category: "kod"
  },
  {
    name: "Cursor",
    description: "AI destekli kod editörü. Doğal dil ile kod yazma ve düzenleme özellikleri.",
    website: "https://cursor.sh",
    category: "kod"
  },
  {
    name: "CodeT5",
    description: "Salesforce'un açık kaynaklı kod üretim modeli. Kod özetleme ve çeviri için güçlü.",
    website: "https://github.com/salesforce/CodeT5",
    category: "kod"
  },
  {
    name: "Sourcegraph Cody",
    description: "Kod tabanı analizi ve AI destekli kod arama platformu. Büyük projeler için optimize edilmiş.",
    website: "https://sourcegraph.com/cody",
    category: "kod"
  },
  {
    name: "Blackbox AI",
    description: "Kod arama ve üretim platformu. GitHub entegrasyonu ile kod örnekleri ve çözümler.",
    website: "https://www.blackbox.ai",
    category: "kod"
  },

  // TASARIM
  {
    name: "Uizard",
    description: "Metinden otomatik UI tasarımı, wireframe ve mockup oluşturan AI platform. Hızlı prototipleme için ideal.",
    website: "https://uizard.io",
    category: "tasarim",
    featured: true
  },
  {
    name: "Figma AI",
    description: "Figma içinde AI tabanlı tasarım önerileri, bileşen yerleşimi ve içerik üretimi yapan eklentiler.",
    website: "https://www.figma.com",
    category: "tasarim"
  },
  {
    name: "Khroma",
    description: "AI destekli renk paleti önerileri ve renk uyumu analizi yapan tasarım aracı.",
    website: "http://khroma.co",
    category: "tasarim"
  },
  {
    name: "Looka",
    description: "AI ile logo ve marka tasarımı yapan platform. Kurumsal kimlik paketleri oluşturabilir.",
    website: "https://looka.com",
    category: "tasarim"
  },
  {
    name: "Galileo AI",
    description: "Metinden gerçekçi ve estetik UI tasarımı üreten platform. Henüz beta aşamasında ancak çok etkileyici.",
    website: "https://www.usegalileo.ai",
    category: "tasarim"
  },
  {
    name: "Framer AI",
    description: "AI destekli web sitesi tasarımı ve prototipleme platformu. No-code çözümler sunar.",
    website: "https://www.framer.com",
    category: "tasarim"
  },
  {
    name: "Designs.ai",
    description: "Logo, video, mockup ve grafik tasarımı için AI destekli tasarım paketi.",
    website: "https://designs.ai",
    category: "tasarim"
  },
  {
    name: "Brandmark",
    description: "AI ile logo tasarımı ve marka kimliği oluşturma platformu. Hızlı ve profesyonel sonuçlar.",
    website: "https://brandmark.io",
    category: "tasarim"
  },
  {
    name: "Booth AI",
    description: "Ürün fotoğrafçılığı için AI destekli arka plan ve sahne oluşturma aracı.",
    website: "https://www.booth.ai",
    category: "tasarim"
  },

  // SES
  {
    name: "ElevenLabs",
    description: "En gelişmiş doğal ses sentezi platformu. Ses klonlama ve çok dilli seslendirme konusunda lider.",
    website: "https://elevenlabs.io",
    category: "ses",
    featured: true
  },
  {
    name: "Play.ht",
    description: "Gerçekçi TTS (text-to-speech) çözümleri sunan platform. Podcast ve içerik üretimi için optimize edilmiş.",
    website: "https://play.ht",
    category: "ses"
  },
  {
    name: "Descript",
    description: "AI destekli ses düzenleme platformu. Podcast ve video için tüm ihtiyaçları karşılar.",
    website: "https://www.descript.com",
    category: "ses"
  },
  {
    name: "Voice.ai",
    description: "Canlı ses değiştirme ve AI ile ses klonlama teknolojileri sunan platform.",
    website: "https://voice.ai",
    category: "ses"
  },
  {
    name: "Resemble.ai",
    description: "Gerçek zamanlı ses klonlama ve sentetik ses üretimi için gelişmiş AI teknolojileri.",
    website: "https://www.resemble.ai",
    category: "ses"
  },
  {
    name: "Adobe Podcast",
    description: "Adobe'nin AI destekli podcast kayıt ve düzenleme aracı. Ses kalitesi artırma özellikleri güçlü.",
    website: "https://podcast.adobe.com",
    category: "ses"
  },
  {
    name: "Murf",
    description: "Doğal sesli TTS platformu. E-öğrenme, sunum ve reklam seslendirme için profesyonel çözümler.",
    website: "https://murf.ai",
    category: "ses"
  },
  {
    name: "Whisper Memos",
    description: "OpenAI Whisper teknolojisi ile sesli notları metne çeviren mobil uygulama.",
    website: "https://whispermemos.com",
    category: "ses"
  },
  {
    name: "Dictation.io",
    description: "Tarayıcı tabanlı ücretsiz ses tanıma aracı. Konuşmayı hızlıca metne çevirir.",
    website: "https://dictation.io",
    category: "ses"
  },
  {
    name: "Speechify",
    description: "Metni sese çeviren AI platform. Hızlı okuma ve erişilebilirlik için optimize edilmiş.",
    website: "https://speechify.com",
    category: "ses"
  },

  // MÜZİK
  {
    name: "Mureka",
    description: "AI ile müzik üretimi yapan platform. Çeşitli tarzlarda orijinal müzik kompozisyonları oluşturabilir.",
    website: "https://www.mureka.com",
    category: "müzik"
  },
  {
    name: "Soundful",
    description: "AI destekli müzik üretim platformu. Telifsiz müzik oluşturma ve özelleştirme özellikleri.",
    website: "https://soundful.com",
    category: "müzik"
  },
  {
    name: "AIVA",
    description: "Yapay zeka besteci. Klasik müzikten modern tarzlara kadar geniş yelpazede kompozisyon.",
    website: "https://www.aiva.ai",
    category: "müzik"
  },
  {
    name: "Amper Music",
    description: "AI ile özel müzik üretimi. Video ve podcast için telif hakkı endişesi olmayan müzikler.",
    website: "https://www.ampermusic.com",
    category: "müzik"
  },
  {
    name: "Boomy",
    description: "Kullanıcı dostu AI müzik üretim platformu. Hızlı şarkı oluşturma ve paylaşma özellikleri.",
    website: "https://boomy.com",
    category: "müzik"
  },
  {
    name: "Endel",
    description: "AI ile kişiselleştirilmiş odaklanma müziği. Çalışma, uyku ve rahatlama için adaptif sesler.",
    website: "https://endel.io",
    category: "müzik"
  },

  // DOKÜMAN
  {
    name: "Nanonets",
    description: "AI ile doküman işleme ve otomasyon platformu. OCR, veri çıkarma ve iş akışı otomasyonu.",
    website: "https://nanonets.com",
    category: "doküman"
  },
  {
    name: "Docsumo",
    description: "AI destekli doküman veri çıkarma platformu. Faturalar, makbuzlar ve formlar için otomasyon.",
    website: "https://docsumo.com",
    category: "doküman"
  },
  {
    name: "Rossum",
    description: "AI ile doküman işleme ve veri çıkarma platformu. Muhasebe ve finans süreçleri için optimize edilmiş.",
    website: "https://rossum.ai",
    category: "doküman"
  },
  {
    name: "Mindee",
    description: "API tabanlı doküman AI platformu. Geliştiriciler için kolay entegrasyon ve güçlü OCR.",
    website: "https://mindee.com",
    category: "doküman"
  },
  {
    name: "Hyperscience",
    description: "Kurumsal doküman otomasyon platformu. Büyük ölçekli veri işleme ve iş akışı yönetimi.",
    website: "https://www.hyperscience.com",
    category: "doküman"
  }
];

const categories = [
  { id: 'metin', name: 'Metin', icon: MessageSquare, description: 'Yazı üretme, özetleme, çeviri, içerik üretimi', color: 'from-blue-500 to-cyan-500' },
  { id: 'görsel', name: 'Görsel', icon: Image, description: 'Resim üretimi, düzenleme, stil transferi', color: 'from-purple-500 to-pink-500' },
  { id: 'video', name: 'Video', icon: Video, description: 'Otomatik video oluşturma, düzenleme, animasyon', color: 'from-red-500 to-orange-500' },
  { id: 'kod', name: 'Kod', icon: Code, description: 'Kod üretme, tamamlama, hata ayıklama', color: 'from-green-500 to-emerald-500' },
  { id: 'tasarim', name: 'Tasarım', icon: Palette, description: 'UI/UX, logo, web tasarımı, mockup', color: 'from-indigo-500 to-blue-500' },
  { id: 'ses', name: 'Ses', icon: Volume2, description: 'Metni sese çevirme, ses üretimi, sesli asistan', color: 'from-yellow-500 to-amber-500' },
  { id: 'müzik', name: 'Müzik', icon: Music, description: 'AI ile müzik üretimi ve kompozisyon', color: 'from-pink-500 to-rose-500' },
  { id: 'doküman', name: 'Doküman', icon: FileText, description: 'Doküman işleme ve otomasyon', color: 'from-teal-500 to-cyan-500' }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('metin');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = useMemo(() => {
    return tools.filter(tool => 
      tool.category === selectedCategory &&
      (tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       tool.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [selectedCategory, searchTerm]);

  const selectedCategoryInfo = categories.find(cat => cat.id === selectedCategory);
  const featuredTools = filteredTools.filter(tool => tool.featured);
  const regularTools = filteredTools.filter(tool => !tool.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative bg-black/20 backdrop-blur-xl border-b border-blue-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <button 
              onClick={() => {
                setSelectedCategory('');
                setSearchTerm('');
              }}
              className="flex items-center justify-center gap-4 mb-4 mx-auto hover:scale-105 transition-transform duration-300 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-75 animate-pulse group-hover:opacity-100"></div>
                <div className="relative p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 animate-pulse transition-all duration-500 group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-cyan-400 ${
                  selectedCategory ? 'text-3xl' : 'text-5xl'
                }`}>
                  YAPAYZEKAYA
                </h1>
                <p className={`text-blue-300 font-medium mt-2 transition-all duration-500 group-hover:text-cyan-200 ${
                  selectedCategory ? 'text-base' : 'text-lg'
                }`}>
                  Yapay Zeka Araçlarının En Kapsamlı Rehberi
                </p>
              </div>
            </button>
            
            {/* Search Bar */}
            <div className={`max-w-2xl mx-auto transition-all duration-500 ${
              selectedCategory ? 'mt-4' : 'mt-8'
            }`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative flex items-center">
                  <Search className="absolute left-6 text-blue-400 h-6 w-6 z-10" />
                  <input
                    type="text"
                    placeholder="Ne yapmak istiyorsunuz? (örn: logo tasarla, video oluştur, kod yaz...)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full pl-16 pr-6 bg-black/40 backdrop-blur-xl border border-blue-500/30 rounded-2xl text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition-all duration-300 ${
                      selectedCategory ? 'py-3 text-base' : 'py-5 text-lg'
                    }`}
                  />
                  <div className="absolute right-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Back Button */}
            {selectedCategory && (
              <div className="text-center mt-4">
                <button
                  onClick={() => setSelectedCategory('')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-xl text-blue-300 hover:text-white transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Kategorilere Dön
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Categories */}
        {!selectedCategory && (
        <section className="mb-16 animate-in fade-in duration-500">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Kategoriler</h2>
            <p className="text-blue-300 text-lg">İhtiyacınıza uygun AI araçlarını keşfedin</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    isSelected
                      ? 'bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-cyan-400 shadow-2xl shadow-cyan-500/25'
                      : 'bg-black/20 backdrop-blur-xl border-blue-500/20 hover:bg-black/30 hover:border-cyan-400/50'
                  }`}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                    isSelected ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl mb-4 transition-all duration-300 ${
                      isSelected 
                        ? `bg-gradient-to-r ${category.color}` 
                        : 'bg-blue-500/20 group-hover:bg-blue-500/30'
                    }`}>
                      <IconComponent className={`h-8 w-8 ${
                        isSelected ? 'text-white' : 'text-blue-400 group-hover:text-cyan-400'
                      } transition-colors duration-300`} />
                    </div>
                    <h3 className={`font-bold text-xl mb-2 transition-colors duration-300 ${
                      isSelected ? 'text-white' : 'text-blue-200 group-hover:text-white'
                    }`}>
                      {category.name}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      isSelected ? 'text-blue-100' : 'text-blue-400 group-hover:text-blue-300'
                    }`}>
                      {category.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
        )}

        {/* Category Info */}
        {selectedCategory && (
          <section className="mb-12 animate-in slide-in-from-bottom duration-500">
            <div className="text-center mb-8">
              <div className={`p-4 bg-gradient-to-r ${selectedCategoryInfo.color} rounded-2xl shadow-lg`}>
                <div>
                  <h2 className="text-4xl font-bold text-white">{selectedCategoryInfo.name} Araçları</h2>
                  <p className="text-blue-300 text-lg">{selectedCategoryInfo.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-blue-400">
                <TrendingUp className="h-5 w-5" />
                <span className="text-lg font-medium">{filteredTools.length} araç bulundu</span>
              </div>
            </div>
          </section>
        )}

        {/* Featured Tools */}
        {featuredTools.length > 0 && !selectedCategory && (
          <section className="mb-12 animate-in slide-in-from-bottom duration-700">
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-6 w-6 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Öne Çıkan Araçlar</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {featuredTools.map((tool, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-6 hover:border-yellow-400/60 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                >
                  {/* Featured badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Öne Çıkan
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                        {tool.name}
                      </h3>
                      <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-yellow-500/20 hover:bg-yellow-500 rounded-lg transition-all duration-300 hover:scale-110 group/link"
                      >
                        <ExternalLink className="h-4 w-4 text-yellow-400 group-hover/link:text-white transition-colors" />
                      </a>
                    </div>
                    
                    <p className="text-blue-200 leading-relaxed mb-4 text-sm">
                      {tool.description}
                    </p>
                    
                    <a
                      href={tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-4 py-2 rounded-lg hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 font-bold text-sm shadow-lg"
                    >
                      <Zap className="h-4 w-4" />
                      Hemen Kullan
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Regular Tools */}
        {(selectedCategory ? filteredTools : regularTools).length > 0 && (
          <section className="animate-in slide-in-from-bottom duration-1000">
            {featuredTools.length > 0 && !selectedCategory && (
              <h3 className="text-2xl font-bold text-white mb-8">Diğer Araçlar</h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory ? filteredTools : regularTools).map((tool, index) => (
                <div
                  key={index}
                  className="group relative bg-black/20 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:bg-black/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {tool.name}
                      </h3>
                      <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-500/20 hover:bg-blue-500 rounded-xl transition-all duration-300 hover:scale-110 group/link"
                      >
                        <ExternalLink className="h-4 w-4 text-blue-400 group-hover/link:text-white transition-colors" />
                      </a>
                    </div>
                    
                    <p className="text-blue-200 leading-relaxed mb-6">
                      {tool.description}
                    </p>
                    
                    <a
                      href={tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-3 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 font-medium shadow-lg"
                    >
                      <Wrench className="h-4 w-4" />
                      Kullan
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredTools.length === 0 && selectedCategory && (
          <div className="text-center py-20">
            <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-12 max-w-md mx-auto border border-blue-500/20">
              <Search className="h-16 w-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Sonuç Bulunamadı
              </h3>
              <p className="text-blue-300 text-lg mb-2">
                "{searchTerm}" için araç bulunamadı
              </p>
              <p className="text-blue-400">
                Farklı bir arama terimi deneyin
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 py-12 border-t border-blue-500/20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <h4 className="text-2xl font-bold text-white">YAPAYZEKAYA</h4>
            </div>
            <p className="text-blue-300 text-lg mb-2">
              AI araçlarının dünyasını keşfedin ve dijital dönüşümünüzü hızlandırın
            </p>
            <p className="text-blue-400">
              Güncel bilgiler ve yeni araçlar için düzenli olarak kontrol edin
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;