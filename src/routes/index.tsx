import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import {
  Award, BookOpen, Building2, Globe2, GraduationCap, Heart, Instagram,
  Landmark, Link as LinkIcon, MapPin, Quote, ShieldCheck, Sparkles,
  Star, Users, CalendarDays, ArrowUpRight, Briefcase, Scale, Megaphone,
} from "lucide-react";
import portrait from "@/assets/leader-portrait.jpg";

export const Route = createFileRoute("/")({ component: Index });

const roles = [
  { icon: ShieldCheck, label: "Human Rights Advocate" },
  { icon: Landmark, label: "Founder & Chairman — WHRC" },
  { icon: Globe2, label: "Country Director — UNPKFC India" },
  { icon: Briefcase, label: "Entrepreneur" },
  { icon: Sparkles, label: "UN Geneva Representative" },
];

const stats = [
  { value: "2017", label: "WHRC founded" },
  { value: "4,000+", label: "Youth mobilised for peace" },
  { value: "8+", label: "Years of advocacy" },
  { value: "76th", label: "CESCR session, UN Geneva" },
  { value: "3", label: "National & global awards" },
  { value: "2", label: "States covered (AP & TS)" },
];

const bio = [
  { k: "Name", v: "Dr. Ravuri Balaraju" },
  { k: "Place of birth", v: "Andhra Pradesh, India" },
  { k: "Education", v: "MA Sociology, Dr. B.R. Ambedkar University (2007–2009)" },
  { k: "Schooling", v: "St. Paul's High School" },
  { k: "Current designation", v: "Founder & Chairman, World Human Rights Council (WHRC)" },
  { k: "Present location", v: "Hyderabad, Telangana, India" },
  { k: "Organisation website", v: "whrcheadquarters.org · whrc.co.in" },
  { k: "Instagram", v: "@dr.ravuribalaraju" },
  { k: "Profession", v: "Social reformer, Human rights advocate, Entrepreneur" },
  { k: "Philosophy", v: "Inspired by Dr. B.R. Ambedkar — servant-leadership, education, self-reliance" },
];

const timeline = [
  { 
    period: "May 2017 – Present", 
    title: "Founder & Chairman — World Human Rights Council (WHRC)", 
    body: "Built WHRC from the ground up into a comprehensive human rights body operating across Andhra Pradesh and Telangana, with international partnerships and UN representation.",
    highlight: "Founded grassroots movement",
    icon: ShieldCheck,
    span: "lg:col-span-2"
  },
  { 
    period: "Jan 2023 – Sep 2025", 
    title: "Country Director India — UNPKFC", 
    body: "Mobilised 4,000+ youth for peace initiatives and represented India at UN Geneva during the 76th CESCR session — a historic milestone.",
    highlight: "UN Geneva Representative",
    icon: Globe2,
    span: "lg:col-span-1"
  },
  { 
    period: "2024 – Present", 
    title: "Managing Director — Winbal Integrated India", 
    body: "Heads Winbal Integrated India, overseeing diversified operations across the real estate and integrated services sector.",
    highlight: "Strategic Business Leadership",
    icon: Briefcase,
    span: "lg:col-span-1"
  },
  { 
    period: "2021 – Present", 
    title: "Director — Winbal Windows Private Limited", 
    body: "Leads business operations and strategic planning, integrating corporate growth with community-responsible business practices.",
    highlight: "Ethical Entrepreneurship",
    icon: Building2,
    span: "lg:col-span-1"
  },
  { 
    period: "Ongoing", 
    title: "Regional Director — IHRA (AP & Telangana)", 
    body: "Coordinating regional advocacy programs and connecting local communities with global human rights frameworks.",
    highlight: "Global Advocacy Link",
    icon: MapPin,
    span: "lg:col-span-1"
  },
];

const orgFocus = [
  "Grievance redressal", "Legal aid", "Women & child rights",
  "Farmers' welfare", "Awareness campaigns", "International affairs",
];

const initiatives = [
  { icon: Megaphone, title: "Anti-drug awareness drives", body: "WHRC has conducted large-scale anti-drug awareness campaigns across Telangana and coastal Andhra, targeting youth in schools, colleges, and rural communities. The drives aim to prevent substance abuse through education, peer engagement, and community leadership programs." },
  { icon: Users, title: "Youth empowerment & peace mobilisation", body: "As Country Director of UNPKFC India, Dr. Balaraju mobilised over 4,000 youth for peace-building activities. WHRC also runs leadership workshops and entrepreneurship awareness sessions, most recently supporting student entrepreneurs at programs in Addanki." },
  { icon: Heart, title: "Rural & farmers' welfare", body: "Dedicated rural upliftment schemes for farming communities in Andhra Pradesh and Telangana, including awareness on government schemes, legal rights, and access to institutional support. Special focus on small and marginal farmers in coastal Andhra districts." },
  { icon: Scale, title: "Legal aid for the marginalised", body: "WHRC provides free legal guidance and representation support for victims of discrimination, rights violations, and social injustice. This includes women facing domestic abuse, Dalit communities facing caste discrimination, and labourers facing exploitation." },
  { icon: Globe2, title: "UNPKFC India office — 2025", body: "A landmark achievement in Dr. Balaraju's international advocacy work: the formal opening of the UNPKFC India office in 2025, establishing a permanent institutional presence for peace and conflict resolution activities in India under his leadership." },
  { icon: ShieldCheck, title: "Visakhapatnam awareness drives", body: "WHRC has conducted focused civic rights education and anti-discrimination campaigns in Visakhapatnam, expanding its reach to coastal Andhra communities. These drives cover constitutional rights, women's safety, and access to government welfare schemes." },
];

const awards = [
  { 
    year: "2017", 
    title: "Best Social Service Award", 
    org: "Karnataka Chalanachitra Parisrama", 
    body: "Recognised for outstanding commitment to grassroots community welfare and social reform during the inaugural year of WHRC.",
    img: "/assets/1.png"
  },
  { 
    year: "2025", 
    title: "Global Leadership Achievement", 
    org: "International Recognition", 
    body: "Conferred for exceptional leadership in international human rights advocacy, bridging local community needs with global policy frameworks.",
    img: "/assets/2.jpeg"
  },
  { 
    year: "2025", 
    title: "Royal Maharlika Award", 
    org: "Global Honours", 
    body: "A prestigious international honor recognizing humanitarian excellence and a lifelong dedication to upholding global human dignity and peace.",
    img: "/assets/3.jpeg"
  },
  { 
    year: "2025", 
    title: "UN Geneva Representation", 
    org: "76th CESCR Session · UN HQ", 
    body: "Honored for representing India at the 76th CESCR session at the United Nations Headquarters, bringing the voices of Telangana and AP to the world stage.",
    img: "/assets/4.jpeg"
  },
  { 
    year: "2025", 
    title: "Peace Mobilisation Award", 
    org: "UNPKFC India", 
    body: "Awarded by UNPKFC India for the successful mobilization of over 4,000 youth in national peace-building and conflict resolution initiatives.",
    img: "/assets/5.jpeg"
  },
  { 
    year: "2025", 
    title: "Social Reformer Excellence", 
    org: "State Level Recognition", 
    body: "State-level recognition for transformative social impact and dedicated service towards the upliftment of marginalized communities in rural India.",
    img: "/assets/6.jpeg"
  },
  { 
    year: "2025", 
    title: "Humanitarian Service Medal", 
    org: "International Human Rights Council", 
    body: "Conferred by the International Human Rights Council for unwavering dedication to providing legal aid and protection to victims of rights violations.",
    img: "/assets/7.jpeg"
  },
  { 
    year: "2025", 
    title: "Community Upliftment Honour", 
    org: "Farmers Welfare Association", 
    body: "Recognized by the Farmers Welfare Association for pioneering work in sustainable rural development and advocating for the rights of small-scale farmers.",
    img: "/assets/8.jpeg"
  },
  { 
    year: "2025", 
    title: "Youth Icon Award", 
    org: "National Youth Leadership Forum", 
    body: "Honored by the National Youth Leadership Forum as a leading inspiration for the next generation of social reformers and human rights advocates.",
    img: "/assets/9.jpeg"
  },
  { 
    year: "2025", 
    title: "Constitutional Awareness Award", 
    org: "Legal Literacy Mission", 
    body: "Awarded for extensive legal literacy campaigns that educated thousands of coastal Andhra residents on their fundamental constitutional rights.",
    img: "/assets/10.jpeg"
  },
  { 
    year: "2025", 
    title: "Institutional Builder Award", 
    org: "Leadership Excellence Summit", 
    body: "Recognizing the strategic vision and leadership required to scale WHRC into a multi-program advocacy platform with global partnerships.",
    img: "/assets/11.jpeg"
  },
  { 
    year: "2022", 
    title: "Dr.B.R.Ambedkar Statue Inauguration", 
    org: "Special Guest · Varagani", 
    body: "Invited as a Special Guest for the historic inauguration of the Dr. B.R. Ambedkar statue, honoring the legacy of India's social visionary.",
    img: "/assets/13.jpeg"
  },
  { 
    year: "2017", 
    title: "Shanthi Bharath Award", 
    org: "Sikharam Art Theatres · Hyderabad", 
    body: "Conferred for significant contributions to social peace and cultural harmony through dedicated community service.",
    img: "/assets/14.jpeg"
  },
  { 
    year: "2017", 
    title: "Bharath World Records Certificate", 
    org: "Bharath Arts Academy & ABC Foundation", 
    body: "Achieved a world record recognition at Ravindra Bharathi, Hyderabad, for outstanding humanitarian and cultural contributions.",
    img: "/assets/15.jpeg"
  },
  { 
    year: "2017", 
    title: "Cultural Book of Records Certificate", 
    org: "Bharath Arts Academy & ABC Foundation", 
    body: "Recognized for cultural excellence and leadership in social advocacy at the Ravindra Bharathi national-level ceremony.",
    img: "/assets/16.jpeg"
  },
  { 
    year: "2021", 
    title: "The Degree of Doctor of Philosophy", 
    org: "The American University USA", 
    body: "Conferred with an honorary Doctorate for a lifetime of commitment to human rights, social reform, and international advocacy.",
    img: "/assets/17.jpeg"
  },
];

const recent = [
  { title: "UNPKFC India office inauguration — 2025", body: "Dr. Balaraju led the formal establishment and inauguration of the UNPKFC India office in 2025, marking a major milestone in institutionalising India's presence in global peace-keeping frameworks." },
  { title: "Student entrepreneurship program — Addanki", body: "Attended and addressed a student entrepreneurship awareness program in Addanki, Andhra Pradesh, guiding aspiring student entrepreneurs on leadership and social responsibility." },
  { title: "Rights awareness drive — Visakhapatnam", body: "Conducted human rights awareness campaigns in Visakhapatnam covering constitutional rights education, anti-discrimination outreach, and access to legal support." },
  { title: "CSR leadership conference participation", body: "Actively participated in Corporate Social Responsibility (CSR) leadership events, representing the intersection of business and social impact." },
  { title: "UN Geneva — 76th CESCR session representation", body: "Represented India at the United Nations Headquarters in Geneva during the 76th session of the Committee on Economic, Social and Cultural Rights." },
];

const inspirations = [
  { name: "Dr. B.R. Ambedkar", quote: "A great man is different from an eminent one in that he is ready to be the servant of the society.", body: "Dr. Ambedkar's servant-leadership model underpins every initiative Dr. Balaraju undertakes through WHRC." },
  { name: "Mahatma Jyotiba Phule", quote: "Education for all, dignity for all.", body: "Phule's lifelong fight against caste discrimination and advocacy for women's education resonates deeply in Dr. Balaraju's focus on gender rights and constitutional awareness campaigns." },
  { name: "Vasudhaiva Kutumbakam", quote: "The world as one family.", body: "The ancient Indian philosophy forms the global vision of WHRC — that human dignity transcends borders, caste, religion, and nationality." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 chip border-[#7BA4D0]/30! bg-[#7BA4D0]/5! mb-5 shadow-[0_4px_20px_-5px_rgba(123,164,208,0.2)]">
      <Sparkles className="size-3.5 text-[#7BA4D0]" />
      <span className="tracking-wide uppercase text-[11px] font-bold text-[#7BA4D0]">{children}</span>
    </div>
  );
}

function Index() {
  const [activeRole, setActiveRole] = useState(0);
  const currentRole = timeline[activeRole];

  return (
    <main className="relative overflow-hidden text-foreground">
      {/* Ambient background blobs */}
      <div className="blob bg-[#2E5E99] w-[620px] h-[620px] -top-40 -right-32 opacity-30" />
      <div className="blob bg-[#7BA4D0] w-[520px] h-[520px] top-[10%] -left-32 opacity-15" />
      <div className="blob bg-[#2E5E99] w-[620px] h-[620px] top-[40%] -right-32 opacity-20" />
      <div className="blob bg-[#7BA4D0] w-[700px] h-[700px] bottom-[-200px] left-[10%] opacity-10" />

      {/* NAV */}
      <header className="sticky top-0 z-50 transition-all duration-300 bg-midnight/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-2xl btn-premium grid place-items-center">
              <Globe2 className="size-4 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-[17px] text-sky">WHRC · Leader Profile</div>
              <div className="text-[13px] text-foreground/60">Verified global identity</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 glass-strong rounded-full px-2 py-1.5 border-white/10 shadow-2xl backdrop-blur-3xl">
            {["Profile", "Timeline", "Initiatives", "Awards", "Vision"].map(i => (
              <a key={i} href={`#${i.toLowerCase()}`} className="px-5 py-2 text-[14px] rounded-full hover:bg-white/10 hover:text-white transition text-foreground/90 font-semibold tracking-wide">{i}</a>
            ))}
          </div>
          <a href="#connect" className="bg-linear-to-br from-[#7BA4D0] to-[#2E5E99] text-white shadow-[0_10px_30px_-10px_rgba(46,94,153,0.5)] rounded-full px-6 py-3 text-base font-medium inline-flex items-center gap-2 hover:scale-105 transition-transform">
            Connect <ArrowUpRight className="size-4" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 fade-up">
            <div className="chip mb-6">
              <ShieldCheck className="size-3.5" /> Verified leader profile · World Human Rights Council
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              <span className="text-gradient">Dr. Ravuri Balaraju</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-foreground/75 max-w-2xl leading-relaxed">
              Founder & Chairman, World Human Rights Council · Social Reformer & Entrepreneur · Hyderabad, Telangana.
            </p>
            <div className="mt-3 flex items-center gap-2 text-base text-[#7BA4D0]/80 font-medium">
              <GraduationCap className="size-5" /> MA Sociology · Dr. B.R. Ambedkar University
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {roles.map(({ icon: Icon, label }) => (
                <span key={label} className="chip">
                  <Icon className="size-3.5" /> {label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href="#connect" className="btn-premium rounded-full px-8 py-4 text-base font-semibold inline-flex items-center gap-2.5">
                Get in touch <ArrowUpRight className="size-5" />
              </a>
              <a href="#timeline" className="glass rounded-full px-8 py-4 text-base font-medium inline-flex items-center gap-2.5 text-foreground hover:bg-white/10 transition">
                View leadership story
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2.5"><MapPin className="size-4" /> Hyderabad, Telangana</div>
              <div className="hidden sm:flex items-center gap-2.5"><Globe2 className="size-4" /> Active in 2 states · UN partnered</div>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5 relative fade-up" style={{ animationDelay: ".15s" }}>
            <div className="relative mx-auto w-[320px] sm:w-[380px] lg:w-[420px] aspect-4/5">
              <div className="absolute -inset-10 rounded-full bg-linear-to-tr from-[#2E5E99] to-[#7BA4D0] opacity-20 blur-[100px] animate-pulse" />
              <div className="ring-halo absolute -inset-6 rounded-[80px] opacity-40 blur-2xl" />
              <div className="ring-halo absolute -inset-2 rounded-[80px] opacity-60" />
              <div className="absolute inset-0 rounded-[80px] overflow-hidden glass-strong p-2">
                <img
                  src={portrait}
                  alt="Portrait of Dr. Ravuri Balaraju"
                  width={1024} height={1024}
                  className="w-full h-full object-cover rounded-[72px] object-top"
                />
              </div>

              <div className="float absolute -left-8 sm:-left-20 top-[55%] glass rounded-2xl p-4 pr-5 flex items-center gap-4 shadow-lg">
                <div className="size-11 rounded-xl btn-premium grid place-items-center"><Star className="size-5 text-white" /></div>
                <div>
                  <div className="text-[13px] text-foreground/60">Global award</div>
                  <div className="text-[15px] font-bold text-sky">Royal Maharlika · 2025</div>
                </div>
              </div>
              <div className="float absolute -right-4 sm:-right-12 bottom-10 glass rounded-2xl p-4 pr-5 flex items-center gap-4" style={{ animationDelay: "1.5s" }}>
                <div className="size-11 rounded-xl btn-premium grid place-items-center"><Users className="size-5 text-white" /></div>
                <div className="size-11 rounded-xl bg-linear-to-br from-[#7BA4D0] to-[#2E5E99] grid place-items-center"><Users className="size-5 text-white" /></div>
                <div>
                  <div className="text-[13px] text-foreground/60">Mobilised</div>
                  <div className="text-[15px] font-bold text-sky">4,000+ youth for peace</div>
                </div>
              </div>
              <div className="float absolute -right-6 -top-4 glass rounded-2xl px-4 py-2.5 text-foreground flex items-center gap-2.5 font-bold border-[#7BA4D0]/40 shadow-[0_4px_20px_-5px_rgba(123,164,208,0.3)]" style={{ animationDelay: ".8s" }}>
                <span className="size-2 rounded-full bg-[#7BA4D0] animate-pulse shadow-[0_0_8px_#7BA4D0]" /> Verified · WHRC
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 -mt-6 pb-20">
        <div className="glass-strong rounded-2xl p-8 lg:p-10">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <SectionLabel>Impact at a glance</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient">Eight years. Two states. A global stage.</h2>
            </div>
            <div className="text-base text-foreground/60 max-w-sm leading-relaxed">A snapshot of the institutional and humanitarian footprint built since founding WHRC in 2017.</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map(s => (
              <div key={s.label} className="shimmer-card rounded-2xl bg-white/5 border border-white/10 p-6 hover:translate-y-[-3px] transition text-center group">
                <div className="font-display text-4xl font-bold text-sky group-hover:scale-110 transition-transform">{s.value}</div>
                <div className="text-[13px] text-foreground/50 mt-2.5 leading-snug font-bold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE / BIODATA */}
      <section id="profile" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <SectionLabel>Personal information</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient">Biodata</h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">A verified record of identity, education, and current professional standing.</p>
            <div className="mt-8 glass rounded-3xl p-6 flex items-center gap-4">
              <Quote className="size-8 text-gold shrink-0" />
              <p className="font-display italic text-foreground">"Vasudhaiva Kutumbakam — the world as one family."</p>
            </div>
          </div>
          <div className="lg:col-span-7 glass-strong rounded-xl p-2">
            <div className="rounded-[28px] bg-white/5 divide-y divide-[#7BA4D0]/15">
              {bio.map((b) => (
                <div key={b.k} className="grid grid-cols-3 gap-6 px-8 py-5">
                  <div className="text-[13px] text-gold font-bold uppercase tracking-wider">{b.k}</div>
                  <div className="col-span-2 text-base lg:text-lg font-medium text-foreground">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <SectionLabel>Biography</SectionLabel>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient max-w-3xl">Early life & education</h2>
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <article className="glass rounded-xl p-10">
            <div className="flex items-center gap-2.5 text-base font-bold text-gold mb-4"><BookOpen className="size-5" /> Early life & education</div>
            <p className="text-lg text-foreground/80 leading-relaxed">Dr. Ravuri Balaraju was born in Andhra Pradesh to a family that instilled in him a deep sense of community and social responsibility.</p>
          </article>
          <article className="glass rounded-xl p-10">
            <div className="flex items-center gap-2.5 text-base font-bold text-gold mb-4"><Briefcase className="size-5" /> Career & professional journey</div>
            <p className="text-lg text-foreground/80 leading-relaxed">Dr. Balaraju founded the World Human Rights Council (WHRC) in May 2017 to bridge the gap between grassroots communities and global human rights.</p>
          </article>
        </div>
      </section>

      {/* LEADERSHIP ROLES - INTERACTIVE DEEP DIVE */}
      <section id="timeline" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <SectionLabel>Leadership ecosystem</SectionLabel>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient">Strategic roles & impact</h2>
        
        <div className="mt-12 glass-strong rounded-[40px] p-2 lg:p-4 overflow-hidden">
          <div className="grid lg:grid-cols-12 min-h-[600px]">
            {/* Left Column: Role Selection */}
            <div className="lg:col-span-5 bg-white/5 rounded-xl p-6 lg:p-8 space-y-3">
              <div className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest mb-6 px-4">Select a role to explore</div>
              {timeline.map((t, i) => (
                <button
                  key={t.title}
                  onClick={() => setActiveRole(i)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 group flex items-center gap-4 ${
                    activeRole === i 
                    ? "bg-linear-to-br from-[#0D2440] to-[#2E5E99] text-white shadow-xl scale-[1.02]" 
                    : "hover:bg-white/10 text-foreground/70"
                  }`}
                >
                  <div className={`size-12 rounded-xl grid place-items-center transition-colors ${
                    activeRole === i ? "bg-white/10" : "bg-[#7BA4D0]/5"
                  }`}>
                    <t.icon className={`size-6 ${activeRole === i ? "text-gold" : "text-[#7BA4D0]/60"}`} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-[11px] font-bold uppercase tracking-tighter ${activeRole === i ? "text-gold" : "text-[#7BA4D0]/40"}`}>
                      {t.period}
                    </div>
                    <div className="font-bold text-[15px] lg:text-[16px] leading-tight mt-1 truncate max-w-[200px]">
                      {t.title.split("—")[0]}
                    </div>
                  </div>
                  {activeRole === i && <ArrowUpRight className="size-4 text-gold" />}
                </button>
              ))}
            </div>

            {/* Right Column: Detailed Content */}
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Animated background element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-black text-foreground/5 select-none pointer-events-none">
                0{activeRole + 1}
              </div>

              <div key={activeRole} className="relative z-10 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7BA4D0]/10 border border-[#7BA4D0]/20 text-[#7BA4D0] text-xs font-bold uppercase tracking-widest mb-8">
                  <Sparkles className="size-3.5" /> Strategic highlight
                </div>
                
                <h3 className="text-3xl lg:text-5xl font-display font-bold text-sky leading-[1.1] mb-6">
                  {currentRole.title}
                </h3>
                
                <div className="text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-10 max-w-xl">
                  {currentRole.body}
                </div>

                <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-xs font-bold text-gold/60 uppercase tracking-widest mb-2">Primary Impact</div>
                    <div className="text-lg font-bold text-sky">{currentRole.highlight}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gold/60 uppercase tracking-widest mb-2">Duration</div>
                    <div className="text-lg font-bold text-foreground">{currentRole.period}</div>
                  </div>
                </div>

                <button className="mt-12 btn-premium rounded-full px-8 py-4 text-base font-bold inline-flex items-center gap-3 hover:scale-105 transition-transform">
                  Explore full initiative <ArrowUpRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZATION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="glass-strong rounded-[40px] p-8 lg:p-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionLabel>Organisation</SectionLabel>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gradient">About World Human Rights Council</h2>
            <div className="mt-4 text-sm text-gold/60">Founded May 2017 · Hyderabad, Telangana</div>
            <a href="https://whrcheadquarters.org" className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-sky hover:underline">
              <LinkIcon className="size-3.5" /> whrcheadquarters.org
            </a>
            <p className="mt-6 text-foreground/80 leading-relaxed">A Hyderabad-based human rights organisation founded by Dr. Ravuri Balaraju with the guiding principle of "Vasudhaiva Kutumbakam."</p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-3">
              {orgFocus.map(f => (
                <div key={f} className="glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:translate-y-[-2px] transition">
                  <div className="size-9 rounded-xl btn-premium grid place-items-center"><ShieldCheck className="size-4 text-white" /></div>
                  <span className="font-medium text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section id="initiatives" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <SectionLabel>Programs</SectionLabel>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient">Key initiatives & programs</h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map(({ icon: Icon, title, body }) => (
              <article key={title} className="glass rounded-[28px] p-6 hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.15)] hover:-translate-y-1 transition border-white/5">
                <div className="size-12 rounded-2xl btn-premium grid place-items-center mb-5"><Icon className="size-5 text-white" /></div>
                <h3 className="font-display text-lg font-semibold text-gold">{title}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{body}</p>
              </article>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <SectionLabel>Recognition</SectionLabel>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient">Awards & recognition</h2>
        <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          {awards.map(a => (
            <article key={a.title} className="glass rounded-lg overflow-hidden flex flex-col hover:shadow-(--shadow-glow) hover:-translate-y-1 transition group">
              {a.img && (
                <div className="aspect-4/3 w-full overflow-hidden border-b border-[#7BA4D0]/10">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-5 flex gap-4">
                <div className="shrink-0 size-11 rounded-xl btn-premium grid place-items-center"><Award className="size-5 text-white" /></div>
                <div>
                  <div className="text-[12px] font-bold text-sky tracking-wider uppercase">{a.year} · {a.org}</div>
                  <h3 className="mt-1 font-display text-lg font-bold text-gold">{a.title}</h3>
                  <p className="mt-2 text-base text-foreground/75 leading-relaxed">{a.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RECENT ACTIVITIES */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <SectionLabel>Recent activities</SectionLabel>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient">On the global stage</h2>
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {recent.map((r, i) => (
            <article key={r.title} className="glass rounded-[28px] p-6 hover:-translate-y-1 transition">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="chip py-1! px-3!">#{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="vision" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="glass-strong rounded-[40px] p-8 lg:p-12">
          <SectionLabel>Philosophy & inspirations</SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient max-w-3xl">"Educate. Agitate. Organise."</h2>
          <p className="mt-4 max-w-3xl text-foreground/80 leading-relaxed">Dr. Balaraju's worldview is deeply rooted in the Ambedkarite tradition.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {inspirations.map(i => (
              <div key={i.name} className="rounded-[28px] bg-white/5 border border-white/10 p-6">
                <Quote className="size-6 text-[#7BA4D0]/40" />
                <p className="mt-3 font-display italic text-foreground leading-snug">"{i.quote}"</p>
                <div className="mt-5 text-sm font-semibold text-sky">{i.name}</div>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{i.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] p-6 lg:p-8 bg-linear-to-br from-[#0D2440] to-[#2E5E99] text-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
            <p className="text-base lg:text-lg leading-relaxed text-white/90">
              Dr. Balaraju firmly believes that self-reliance, built on the foundation of education and community organisation, is the only sustainable path to social justice. His future vision focuses on expanding WHRC's global footprint, fostering equal opportunities for all, and building sustainable community programs that outlast individual leadership.
            </p>
          </div>
        </div>
      </section>

      {/* CONNECT / FOOTER */}
      <footer id="connect" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="glass-strong rounded-[40px] p-8 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Connect</SectionLabel>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gradient">Engage with a global leadership identity.</h2>
              <p className="mt-3 text-foreground/70 max-w-xl">For partnerships, speaking engagements, and institutional collaboration.</p>
            </div>
            <div className="lg:col-span-5 grid gap-3">
              <a href="https://instagram.com/dr.ravuribalaraju" className="glass rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/10 transition">
                <div className="size-10 rounded-xl btn-premium grid place-items-center"><Instagram className="size-5 text-white" /></div>
                <div className="flex-1">
                  <div className="text-xs text-gold/60">Instagram</div>
                  <div className="font-semibold text-foreground">@dr.ravuribalaraju</div>
                </div>
                <ArrowUpRight className="size-4 text-sky" />
              </a>
              <a href="https://whrcheadquarters.org" className="glass rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/10 transition">
                <div className="size-10 rounded-xl btn-premium grid place-items-center"><Globe2 className="size-5 text-white" /></div>
                <div className="flex-1">
                  <div className="text-xs text-gold/60">Website</div>
                  <div className="font-semibold text-foreground">whrcheadquarters.org</div>
                </div>
                <ArrowUpRight className="size-4 text-sky" />
              </a>
              <a href="https://whrc.co.in" className="glass rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/10 transition">
                <div className="size-10 rounded-xl btn-premium grid place-items-center"><Building2 className="size-5 text-white" /></div>
                <div className="flex-1">
                  <div className="text-xs text-gold/60">Council</div>
                  <div className="font-semibold text-foreground">whrc.co.in</div>
                </div>
                <ArrowUpRight className="size-4 text-sky" />
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} World Human Rights Council · All rights reserved.</div>
            <div className="flex items-center gap-2 font-bold text-[#7BA4D0]"><ShieldCheck className="size-3.5" /> Verified leader identity · Sapphire Veil premium profile</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
