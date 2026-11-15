// All copy lives here so components hold no hard-coded strings (bilingual-ready).
// Names, figures, partners and stories are placeholders until real content is loaded.

export type Tone = "indigo" | "madder" | "tur" | "lac" | "neem";
export type Pattern = "jaal" | "twill" | "rangoli" | "weave";

export const nav = [
  { href: "/about", en: "About", hi: "केंद्र के बारे में" },
  { href: "/research", en: "Research", hi: "शोध" },
  { href: "/knowledge-hub", en: "Knowledge Hub", hi: "ज्ञान केंद्र" },
  { href: "/observatory", en: "Observatory", hi: "वेधशाला", soon: true },
  { href: "/policy-lab", en: "Policy Lab", hi: "नीति प्रयोगशाला" },
  { href: "/stories", en: "Stories", hi: "कहानियाँ" },
  { href: "/programmes", en: "Programmes", hi: "कार्यक्रम" },
  { href: "/partners", en: "Partners", hi: "साझेदार" },
] as const;

export const sectors = {
  living: [
    "Craft & textile clusters",
    "Performing arts & guru-shishya lineages",
    "Festivals, fairs & ritual economies",
    "Indigenous knowledge & ecology",
    "Informal cultural enterprise",
    "Food & culinary heritage",
  ],
  contemporary: [
    "Film & audiovisual",
    "Design & architecture",
    "Games & animation",
    "Music & sound",
    "Publishing & literature",
    "Digital creators & platforms",
  ],
};

export const clusters: {
  slug: string;
  name: string;
  tone: Tone;
  pat: Pattern;
  blurb: string;
  projects: number;
}[] = [
  { slug: "public-policy", name: "Creative Economy & Public Policy", tone: "indigo", pat: "weave", blurb: "How budgets, schemes and statistics see, or miss, creative work.", projects: 6 },
  { slug: "entrepreneurship", name: "Creative Entrepreneurship", tone: "tur", pat: "jaal", blurb: "What it takes for a studio, a collective or a one-person label to last.", projects: 4 },
  { slug: "technologies-ai", name: "Creative Technologies & AI", tone: "lac", pat: "twill", blurb: "Tools, platforms and generative systems, and who they work for.", projects: 5 },
  { slug: "creative-cities", name: "Creative Cities", tone: "neem", pat: "rangoli", blurb: "Neighbourhoods, markets and public space as creative infrastructure.", projects: 4 },
  { slug: "culture-heritage", name: "Culture & Heritage", tone: "madder", pat: "twill", blurb: "Living lineages, festivals and knowledge systems, and what sustains them.", projects: 5 },
  { slug: "livelihoods", name: "Creator Livelihoods", tone: "indigo", pat: "jaal", blurb: "Pay, pricing, contracts and social protection for creative workers.", projects: 7 },
  { slug: "leadership", name: "Creative Leadership", tone: "lac", pat: "rangoli", blurb: "Training the next generation of institution builders and cultural managers.", projects: 3 },
];

export const stories = [
  { slug: "lalitha-kumari", name: "Lalitha Kumari", role: "Kalamkari natural-dye artist", place: "Srikalahasti, Andhra Pradesh", region: "South", practice: "Artisans", quote: "The colour comes from the river as much as from the root.", tone: "madder" as Tone, pat: "jaal" as Pattern, shot: "Hands in an indigo and madder dye bath", cls: "" },
  { slug: "tenzing-dolma-bhutia", name: "Tenzing Dolma Bhutia", role: "Game developer", place: "Gangtok, Sikkim", region: "North-East", practice: "Creators", quote: "Our folktales deserve their own game engine.", tone: "neem" as Tone, pat: "rangoli" as Pattern, shot: "Studio desk, prototype of a Lepcha myth game", cls: "fig-wide" },
  { slug: "anand-mishra", name: "Pt. Anand Mishra", role: "Dhrupad guru", place: "Varanasi, Uttar Pradesh", region: "North", practice: "Musicians", quote: "A raga is not taught. It is lived beside.", tone: "lac" as Tone, pat: "weave" as Pattern, shot: "Morning riyaz, disciples in a circle", cls: "" },
  { slug: "ratnamma-hegde", name: "Ratnamma Hegde", role: "Kinhal lacquer-toy maker", place: "Koppal, Karnataka", region: "South", practice: "Artisans", quote: "My grandmother carved the toys. I carved the market.", tone: "tur" as Tone, pat: "twill" as Pattern, shot: "Lacquering a wooden toy on the lathe", cls: "fig-sun" },
  { slug: "meghna-iyer", name: "Meghna Iyer", role: "Documentary filmmaker", place: "Chennai, Tamil Nadu", region: "South", practice: "Filmmakers", quote: "The edit suite is where a village becomes a story.", tone: "indigo" as Tone, pat: "jaal" as Pattern, shot: "On location with a two-person crew", cls: "" },
  { slug: "abdul-rehman-khatri", name: "Abdul Rehman Khatri", role: "Block-printer", place: "Bagru, Rajasthan", region: "West", practice: "Artisans", quote: "Every block is a thumbprint of the family that cut it.", tone: "madder" as Tone, pat: "twill" as Pattern, shot: "Printing a dabu-resist length at the ghat", cls: "fig-sun" },
  { slug: "farah-qureshi", name: "Farah Qureshi", role: "Type designer", place: "Hyderabad, Telangana", region: "South", practice: "Designers", quote: "A script survives when people can type it on a phone.", tone: "neem" as Tone, pat: "weave" as Pattern, shot: "Drawing Nastaliq letterforms on a tablet", cls: "" },
  { slug: "kabir-sengupta", name: "Kabir Sengupta", role: "Poet and publisher", place: "Kolkata, West Bengal", region: "East", practice: "Writers", quote: "A small press is a long conversation.", tone: "lac" as Tone, pat: "rangoli" as Pattern, shot: "Hand-setting a chapbook cover", cls: "fig-wide" },
  { slug: "pooja-lakra", name: "Pooja Lakra", role: "Sohrai wall painter", place: "Hazaribagh, Jharkhand", region: "East", practice: "Artists", quote: "We paint the wall so the harvest knows it is welcome.", tone: "tur" as Tone, pat: "jaal" as Pattern, shot: "Comb-painting a Sohrai mural", cls: "" },
  { slug: "imran-wani", name: "Imran Wani", role: "Short-video creator", place: "Srinagar, Jammu & Kashmir", region: "North", practice: "Creators", quote: "My audience is a village I have never met.", tone: "indigo" as Tone, pat: "twill" as Pattern, shot: "Filming a walnut-wood carver at work", cls: "fig-sun" },
];

export const events = [
  { slug: "craft-clusters-summit", day: "14", mon: "Nov", month: 10, type: "Convening", place: "New Delhi", title: "Hastakala to Hyperlocal: the Craft Clusters Summit", tone: "madder" as Tone, status: "open" as const },
  { slug: "gurukul-lecture", day: "03", mon: "Dec", month: 11, type: "Public lecture", place: "Online", title: "Guru-shishya as institution: what policy can learn from the gurukul", tone: "lac" as Tone, status: "open" as const },
  { slug: "cei-2027", day: "18", mon: "Jan", month: 0, type: "Conference", place: "Jaipur, 2 days", title: "Creative Economy India 2027: call for talks now open", tone: "indigo" as Tone, status: "soon" as const },
  { slug: "pricing-your-craft", day: "09", mon: "Feb", month: 1, type: "Workshop", place: "Pune", title: "Pricing your craft: the Creator Livelihoods Lab", tone: "tur" as Tone, status: "open" as const },
  { slug: "field-school", day: "22", mon: "Mar", month: 2, type: "Field school", place: "Bhujodi, Kutch", title: "Field school on cluster mapping for students", tone: "neem" as Tone, status: "soon" as const },
  { slug: "fellowship-call", day: "30", mon: "Nov", month: 10, type: "Fellowship", place: "Applications online", title: "Creator Livelihoods Fellowship: applications close", tone: "indigo" as Tone, status: "closing" as const },
];

export const partners = [
  { mono: "A", name: "University partner", tone: "indigo" as Tone },
  { mono: "S", name: "State government", tone: "madder" as Tone },
  { mono: "C", name: "Craft council", tone: "tur" as Tone },
  { mono: "I", name: "Industry body", tone: "neem" as Tone },
  { mono: "T", name: "Technology partner", tone: "lac" as Tone },
  { mono: "F", name: "Festival network", tone: "madder" as Tone },
  { mono: "G", name: "Global institute", tone: "indigo" as Tone },
  { mono: "P", name: "Philanthropy", tone: "neem" as Tone },
];

export type Resource = {
  id: number;
  type: "Report" | "Dataset" | "Case study" | "Policy document" | "Recommended book" | "Global reference";
  title: string;
  theme: string;
  year: number;
  source: string;
  summary: string;
  action: string;
  tone: Tone;
};

export const resources: Resource[] = [
  { id: 1, type: "Report", title: "Mapping the Unmapped: informal creative enterprise in India", theme: "Creative Economy & Public Policy", year: 2026, source: "CCE, Policy cluster", summary: "How craft clusters, performing-arts lineages and festival economies earn, trade and pass on skill.", action: "Download PDF", tone: "indigo" },
  { id: 2, type: "Dataset", title: "Craft Cluster Register: a first open index", theme: "Culture & Heritage", year: 2026, source: "CCE Observatory (pilot)", summary: "Pilot index of craft clusters with location, craft and workforce fields. Sample release.", action: "Download CSV", tone: "neem" },
  { id: 3, type: "Policy document", title: "Fair pay for regional-language creators on platforms", theme: "Creator Livelihoods", year: 2026, source: "CCE Policy Lab", summary: "A brief proposing minimum disclosure and payment-timing norms for platform payouts.", action: "Read brief", tone: "madder" },
  { id: 4, type: "Case study", title: "A weaving cooperative moves to direct sales", theme: "Creative Entrepreneurship", year: 2025, source: "CCE field team", summary: "What changed, and what did not, when a handloom cooperative opened its own online channel.", action: "Read case", tone: "tur" },
  { id: 5, type: "Report", title: "Games from the margins: independent studios outside the metros", theme: "Creative Technologies & AI", year: 2025, source: "CCE, Technologies cluster", summary: "Funding, talent and distribution for small game studios in tier-2 and tier-3 cities.", action: "Download PDF", tone: "lac" },
  { id: 6, type: "Global reference", title: "Measuring cultural and creative industries: a comparative guide", theme: "Creative Economy & Public Policy", year: 2024, source: "International partner institute", summary: "How other countries define and count creative activity in national accounts.", action: "Visit source", tone: "indigo" },
  { id: 7, type: "Recommended book", title: "Reading list: markets, makers and meaning", theme: "Culture & Heritage", year: 2024, source: "CCE library", summary: "Twelve books on craft, labour and cultural policy, chosen by our research team.", action: "See the list", tone: "madder" },
  { id: 8, type: "Case study", title: "A street-food festival as a ritual economy", theme: "Creative Cities", year: 2024, source: "CCE field team", summary: "Who earns during a temple-town festival, and how the money moves through the week.", action: "Read case", tone: "neem" },
  { id: 9, type: "Dataset", title: "Creator pay survey, 2025 wave", theme: "Creator Livelihoods", year: 2025, source: "CCE with partner platforms", summary: "Anonymised responses on income range, payment delay and platform dependence. Sample release.", action: "Download CSV", tone: "tur" },
  { id: 10, type: "Report", title: "Leading cultural institutions: a practice guide", theme: "Creative Leadership", year: 2023, source: "CCE, Leadership cluster", summary: "Governance, fundraising and succession lessons from twenty cultural institutions.", action: "Download PDF", tone: "lac" },
];

export const policyItems = [
  { id: "PB-07", kind: "Policy brief", title: "Fair pay for regional-language creators on platforms", status: "open" as const, deadline: "Comments close 30 Nov", tone: "madder" as Tone, summary: "Proposes payout timing and disclosure norms for platforms working with regional-language creators." },
  { id: "PB-06", kind: "Policy brief", title: "Counting craft: an occupational code for artisans", status: "closed" as const, deadline: "Consultation closed", tone: "indigo" as Tone, summary: "Argues for a dedicated occupation family so artisan work shows up in labour surveys." },
  { id: "WP-02", kind: "White paper", title: "Public space as creative infrastructure", status: "soon" as const, deadline: "Opens 12 Jan", tone: "neem" as Tone, summary: "Frameworks for municipal permissions, markets and rehearsal space for informal performers." },
  { id: "RT-03", kind: "Roundtable", title: "Generative AI and traditional design vocabularies", status: "open" as const, deadline: "Register by 5 Dec", tone: "lac" as Tone, summary: "A closed-door conversation on consent, attribution and shared benefit." },
];

export const programmeTypes = ["Conference", "Workshop", "Fellowship", "Residency", "Public lecture", "Convening", "Field school"];
