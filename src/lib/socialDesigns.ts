/* ---------------------------------------------------------------------------
 * Social media design collections — one entry per source folder.
 *
 * Source artwork lives untouched in docs/reference/social media designs/;
 * what ships is the optimised WebP set under public/images/social/<slug>/.
 * `count` matches the files actually on disk, so a gallery never points at a
 * frame that doesn't exist.
 *
 * Every description below is read off the artwork itself — the palette,
 * typography, framing device and carousel structure that are visibly there.
 * No invented clients, metrics, engagement numbers or campaign results: the
 * repository has no such data, so none is claimed.
 * ------------------------------------------------------------------------- */

export type SocialCollection = {
  slug: string;
  /** Series title as it reads on the artwork. */
  title: string;
  /** Brand or context the set was made for. */
  brand: string;
  /** Short line for the tile. */
  summary: string;
  /** Full portfolio description for the gallery. */
  description: string;
  /** Frame count — matches public/images/social/<slug>/. */
  count: number;
  /** Aspect ratio of the source artwork. */
  ratio: "1:1" | "4:5";
  /** 1-based frame used as the tile cover (the intended opening slide). */
  cover: number;
  /** Concise, inferable metadata for the tile. */
  meta: { category: string; format: string };
  /** Handwritten margin note (decorative). */
  note: string;
};

export const SOCIAL_COLLECTIONS: SocialCollection[] = [
  {
    slug: "matcha",
    title: "Blissful Brew Matcha",
    brand: "Café brand campaign",
    summary:
      "A launch kit that carries an audience from teaser to menu to a limited-time offer.",
    description:
      "A full launch kit for a matcha café rather than a single announcement post. The sequence moves from a dated “coming soon” teaser into a priced menu board and then a limited-time promotional frame, so the same audience is carried from curiosity through to an actual order. A restrained sage-and-marigold palette and a high-contrast serif hold the set together while the imagery shifts between flat illustration and real product photography.",
    count: 7,
    ratio: "1:1",
    cover: 1,
    meta: { category: "Campaign", format: "1:1 feed set" },
    note: "the launch set",
  },
  {
    slug: "when-teams-clash",
    title: "When Teams Clash",
    brand: "Legally Geminian",
    summary:
      "Dispute-resolution content framed as a friendly explainer, not a legal notice.",
    description:
      "Legal content framed as something approachable. Each frame sits inside a browser-window device, complete with traffic-light dots, which softens a workplace-conflict topic into an explainer rather than a warning. Mustard on olive keeps the palette warm, a heavyweight grotesque carries the hook at full width, and a persistent site URL plus a “swipe for more” control give every frame an obvious next step.",
    count: 4,
    ratio: "4:5",
    cover: 1,
    meta: { category: "Educational", format: "4:5 carousel" },
    note: "legal, but friendly",
  },
  {
    slug: "podcast",
    title: "The Evolution of the Avengers",
    brand: "Podcast series",
    summary:
      "Episode artwork plus audience-participation frames — a content kit, not just a cover.",
    description:
      "A podcast content kit that goes past cover art. Alongside episode titling — a script-and-caps lockup, a waveform motif running behind the host portrait, episode numbering and credits — the set includes audience-participation frames such as a guess-the-guest word puzzle with a clue. That turns a passive announcement into something followers can answer, while a muted grey base lets the violet accent and the guest photography carry the colour.",
    count: 9,
    ratio: "4:5",
    cover: 1,
    meta: { category: "Series branding", format: "4:5 carousel" },
    note: "the longest set",
  },
  {
    slug: "stress-management",
    title: "Stress Management Techniques",
    brand: "Wellness education",
    summary:
      "A listicle built for scanning: one technique per frame, threaded by a single line.",
    description:
      "A listicle carousel built for scanning. The cover commits to a number — an oversized navy “5” filling most of the frame — and each following frame takes a single technique, pairing an offset photographic block with a short, plain-language explanation. A thin connector line threads from frame to frame so the set reads as one continuous path, and the pale-blue-and-navy palette keeps a stress topic calm rather than urgent.",
    count: 7,
    ratio: "4:5",
    cover: 1,
    meta: { category: "Educational", format: "4:5 carousel" },
    note: "one idea per frame",
  },
  {
    slug: "control-your-audience",
    title: "Why Your Brand Isn't Converting",
    brand: "Control Your Audience",
    summary:
      "Opinionated brand strategy, set at thumb-stopping scale on near-black.",
    description:
      "Brand-strategy content written to stop a scroll. Oversized condensed caps in acid green sit on near-black, with a violet edge bar anchoring the right side and a single high-visibility arrow marking the swipe. The opening frame poses the problem, then each following frame lands one opinionated line — “clarity beats creativity” — supported by three-item checklists instead of paragraphs, so the argument stays readable at speed.",
    count: 5,
    ratio: "4:5",
    cover: 1,
    meta: { category: "Brand strategy", format: "4:5 carousel" },
    note: "loud on purpose",
  },
  {
    slug: "engagement-editorial",
    title: "Mastering Social Media Engagement",
    brand: "Direction one",
    summary:
      "The same copy as the set beside it — taken somewhere physical and textural.",
    description:
      "One of two directions explored for the same brief: the frames carry word-for-word the same body copy as the set beside it, art-directed somewhere entirely different. This version is physical — crumpled olive paper, a torn notebook strip held under a real paperclip, heavy condensed type set on a slight tilt, and hand-drawn arrows pointing at the hook. The texture does the attention-grabbing, so the typography itself can stay plain.",
    count: 5,
    ratio: "4:5",
    cover: 1,
    meta: { category: "Art direction", format: "4:5 carousel" },
    note: "same words, take one",
  },
  {
    slug: "engagement-bright",
    title: "Mastering Social Media Engagement",
    brand: "Direction two",
    summary:
      "Identical copy, opposite treatment: colour blocking, flat vectors, open white space.",
    description:
      "The second direction on identical copy. Flat vector reaction icons spill across open white space, hot pink and orange blocks structure each frame, and an italic serif heading gives the subject a lighter, friendlier read. Where the first direction leans on texture and grit to hold attention, this one leans on colour blocking and negative space — the same words, aimed at a different feed.",
    count: 5,
    ratio: "4:5",
    cover: 1,
    meta: { category: "Art direction", format: "4:5 carousel" },
    note: "same words, take two",
  },
];

/** Every frame path for a collection, in order. */
export function framesFor(c: SocialCollection): string[] {
  return Array.from(
    { length: c.count },
    (_, i) => `/images/social/${c.slug}/${i + 1}.webp`,
  );
}

/** The tile cover — the collection's intended opening slide. */
export function coverFor(c: SocialCollection): string {
  return `/images/social/${c.slug}/${c.cover}.webp`;
}

export const TOTAL_FRAMES = SOCIAL_COLLECTIONS.reduce((n, c) => n + c.count, 0);
