# Prose style research: bilingual expository mathematics

Target document: the lollipop / parallel-transport / holonomy / anisotropic-kernel /
non-negative-least-squares essay, in English
(`src/content/blog/anisotropic-kernels-frame-bundle.mdx`) and Traditional Chinese
(`src/content/blog/anisotropic-kernels-frame-bundle-zh.mdx`).

Everything below is prescriptive. Where a rule cites a source, I fetched and read
that source; where I could not fetch it, it is marked **(unverified)** and I describe
the pattern rather than attributing words to the author. No quotation in this document
is invented. All "before" examples are lifted from the two current drafts; all "after"
examples are mine, written to show the shape of the fix, not to be pasted verbatim.

---

## Read this first

### Diagnosis of the current drafts (measured, not impressionistic)

English draft, 189 sentences: mean 13.9 words, median 13, standard deviation 6.6.
**104 of 189 sentences (55%) fall in the 7–14 word band.** Sixteen are ≤6 words,
fourteen are >25. That unimodal hump is the single loudest signal. Human expository
prose in this genre has a much flatter distribution: a lot of four-word sentences and a
handful of forty-word ones.

Other measurements:

- 30 sentences begin with "The". 6 begin with "This". One sentence in the whole essay
  begins with "I" — zero, in fact; the title says "Taught Me" and there is no *me*.
- ~20 instances of the negation-contrast frame (`is not X; it is Y`, `rather than`,
  `cannot tell us`, `does not claim`, `is not yet`, `does not always mean`). This is
  the essay's dominant rhythm.
- All 12 section headers are declarative mini-theses or self-answering questions.
  Not one is a flat noun phrase.
- Nine sections open with an imperative ("Begin with", "Now stretch", "Imagine",
  "Compare", "Expand", "Consider"). It reads as a template.
- No footnote, no named person (until the bibliography), no anecdote, no aside,
  no admission of a wrong first attempt, no joke after the first paragraph.
- Numbers appear and nobody reacts to them. "approximately 1.840302369021 radians"
  and "slope is 0.999973" are stated flat.
- Prose-spelled mathematics where symbols would be clearer: "epsilon equal to b
  divided by a", "1.3 times ten to the minus fourteen", "cosine to the fourth power".

Chinese draft, 109 sentences, mean 34.8 characters; 267 clauses, mean 13.5 characters
(that part is fine — see §3). The problems are different:

- 16 × 我 (good), but **0 × 呢, 0 × 才, 0 × 至於, 0 × 倒是, 0 × 可是, 0 × 不過, 0 × 究竟**.
  Those are precisely the particles that carry argumentative turn in Chinese. Their
  total absence is the "translated from English" fingerprint.
- Section headers map one-to-one onto the English headers, in the same order, with the
  same count. Structural isomorphism is the strongest evidence a reader has that the
  Chinese is a translation.
- 26 half-width `(` against 6 full-width `（`. Inconsistent.
- No Taiwanese anchor anywhere: no place, no shop, no schoolroom, no named colleague.

### English: the 10 highest-leverage rules

1. **Break the 7–14 word hump.** Every paragraph must contain at least one sentence
   under 7 words or over 25. Target stdev ≥ 11, not 6.6.
2. **Put a person in it.** The title promises "Taught Me". Deliver an *I* in the first
   200 words, and at least four more times: where you got it wrong, what you tried
   first, who told you something, what you still don't understand.
3. **Cap the negation-contrast frame at three uses in the whole essay.** Replace the
   other seventeen with a plain assertion, or with a question, or with an example.
4. **Flatten most section headers to noun phrases.** Keep at most two question headers
   and at most one witty thesis header.
5. **Vary paragraph length deliberately.** Include at least two one-sentence paragraphs
   and one paragraph over nine sentences.
6. **React to your own numbers.** After a twelve-digit figure, say something about the
   fact that it is twelve digits.
7. **Use symbols where symbols are shorter.** `ε = b/a`, `1.3 × 10⁻¹⁴`, `cos⁴θ`.
   Spelling mathematics out in words to look accessible reads as machine hedging.
8. **Push one analogy until it breaks; delete the other four.** Paint tin, musical
   notes, bell curve, sheet of paper, mixing paint — five one-shot analogies is worse
   than one analogy used four times and then explicitly retired.
9. **Put two things in footnotes.** Not parentheses — actual footnotes, carrying real
   content (a derivation you skipped, a reference with a page number, a complaint).
10. **End sections on a forward edge, not a summary.** No section may close by
    restating what the section said.

### Traditional Chinese: the 10 highest-leverage rules

1. **Restructure, don't translate.** Different section count, different section order
   at least once, and at least one section the English version does not have (and vice
   versa). See §5.
2. **Install the missing particles.** Budget roughly: 呢 ×3–5, 才 ×4–6, 就 ×10–15,
   卻 ×3–5, 其實 ×2–3, 至於 ×2–3, 倒是 ×1–2, 不過/可是 ×4–6, 究竟 ×1–2, 反而 ×1–2.
   These are load-bearing, not decoration.
3. **Shorten clauses to 6–12 characters and chain them with ，.** 張海潮's mode:
   「先介紹佛科 (Foucault), 他是法國人, 本來學醫, 後來做實驗物理。」
   Four clauses, 4–7 characters each, subject dropped after the first.
4. **Drop 它/這個 as subject wherever the topic is already established.** Chinese runs
   on topic-comment, not subject-verb.
5. **Kill every 進行／作出／使得／加以／透過 you can.** 余光中's canonical fix:
   「本校的校友對社會作出了重大的貢獻」→「本校的校友對社會貢獻很大」.
6. **One 的 per noun phrase.** Two is a warning, three is a rewrite.
7. **Use a bare rhetorical question with 呢 to open a hard step, then answer with 因為.**
   張海潮: 「在錐面上看平移就很簡單了, 為什麼呢? 因為錐面攤開就是一個平面…」
8. **Gloss technical terms Chinese-first with English in （）; leave Western personal
   names in Latin script.** 共變微分（covariant differentiation）, but `Gauss–Bonnet`,
   `Levi-Civita`, `Bessel` stay as they are. See §5.
9. **Anchor in something Taiwanese and specific.** 蔡聰明 opens a vector-calculus article
   by asking for the area of 醉月湖 — the lake on the NTU campus. Find the local
   equivalent for a lollipop.
10. **End on an open question addressed to the reader, or on someone else's sharp
    sentence — not on a recap.** 張海潮 ends a parallel-transport article with
    「親愛的讀者, 你想, Levi-Civita 會受到佛科擺的啟發嗎?」

---

## 1. English: what to do

### 1.1 Sentence rhythm — earn the long sentence with short ones

Baez alternates violently. In *This Week's Finds* week 300 the punchline sentences are
tiny and the setup sentences sprawl; the effect is momentum, and short sentences are
where the surprises land. Mazur goes the other direction: single sentences running four
lines with three appositions, then a six-word verdict. In *When is one thing equal to
some other thing?* his opening sentence runs about 25 words, and the very next
"sentence" is a one-word fragment picking up its last adjective and expanding on it —
a move worth stealing.

**Actionable**: in each paragraph of the rewrite, write the shortest sentence first,
then build the long one around it.

Before (from the draft — five sentences, 11/14/13/16/12 words):

> Holonomy tells us an angle, but an angle is not yet a physical consequence. A
> perfectly circular lick can rotate by any amount and look identical. An elliptical
> lick changes. We need a number that measures how different the two removal patterns
> are.

After (4/34/5):

> An angle is not a consequence. Rotate a perfectly circular lick by any amount you
> like and it removes exactly the same candy, which means the holonomy angle I worked
> so hard for can be, for the wrong footprint, completely invisible — and I want a
> number that can tell those two cases apart. So: how different are two licks?

Sources: [Baez, *This Week's Finds* week 300](https://math.ucr.edu/home/baez/week300.html);
[Mazur, *When is one thing equal to some other thing?*](https://people.math.osu.edu/cogdell.1/6112-Mazur-www.pdf).

### 1.2 First person — use it to carry error, preference, and ignorance

Three distinct registers are available, and they do different jobs:

- **Tao** uses almost no *I* in his advice essays; he goes to *you* and to an impersonal
  voice. That works for prescription, not for "what a lollipop taught me."
  ([source](https://terrytao.wordpress.com/career-advice/theres-more-to-mathematics-than-rigour-and-proofs/))
- **Baez** uses *I* constantly, and specifically to mark learning and uncertainty —
  the "I'm not sure, that could be infinite too" move.
- **Mazur** uses *I* to mark the limits of the literature: he says his points are borne
  out by working mathematicians' daily practice but that he hasn't found them formulated
  anywhere, and that he doesn't see how the questions can even be raised in the standard
  vocabulary. Two admissions of a gap, in his own voice, in two sentences.
- **Matuschak & Nielsen** (quantum.country) use *we* for the walk-through and *I* for
  confession; one of them writes that he must confess he doesn't understand what people
  mean by a standard popular explanation of quantum mechanics.
  ([source](https://quantum.country/qcvc))

**Actionable**: the essay needs five *I*-sentences of these kinds:

1. The wrong first guess. ("I assumed the answer was the total volume divided by the
   number of licks. It is not, and the reason it is not took me a week.")
2. A preference with no justification offered. ("I find the cutoff function ugly. I use
   it anyway, because the alternative is arguing about the antipode.")
3. A thing you still don't know. ("I do not know whether the 60° coincidence generalises,
   and I could not find it stated anywhere.")
4. A person. ("A friend who polishes telescope mirrors told me this was obvious to
   opticians, which was deflating and also encouraging.")
5. A methodological confession. ("I did not derive the second-order term. I checked it
   numerically and moved on.")

### 1.3 Signalling a hard step — announce the difficulty, not the payoff

Gowers's method in *How to work out proofs in Analysis I* is to flag the difficulty at
the exact moment it arrives, in flat language — a "now things become slightly harder"
marker — and then to keep narrating. He also names his moves out loud ("the 'let' move")
and commits to them procedurally before knowing they will work.
([source](https://gowers.wordpress.com/2014/02/03/how-to-work-out-proofs-in-analysis-i/))

Matuschak & Nielsen explicitly stop the reader: they tell the reader to take a minute
and guess before they compute, and they say outright that learning the material is
challenging.

The current draft does the opposite. It says things like "This note follows that chain
all the way to a formula" and "The result has three independent checks rather than one
impressive-looking output number" — announcing that a payoff is coming, before it comes.

**Actionable**:

| Move | Do | Don't |
|---|---|---|
| Hard step | "This next bit is where I got stuck for a week." | "This distinction matters later." |
| Before a computation | "Guess the answer before you read on. Mine was wrong." | "Its structure already tells us the important qualitative facts." |
| Structural signpost | (delete it; just do the thing) | "This note follows that chain all the way to a formula." |
| Naming a trick | "Call this the cone trick. It is the only reason the integral is doable." | "Naming it lets a two-dimensional surface calculation collapse." |

### 1.4 Rhetorical questions — ask ones you do not immediately answer

The draft's questions are all answered in the next sentence, which makes them
decorative. Compare 張海潮's use in the Chinese literature (§3.3) and Baez's, where the
question is left hanging as an invitation.

**Rule**: of the questions in the rewrite, at least two must go unanswered for more than
a paragraph, and at least one must go unanswered in the whole essay. The 60°-coincidence
question is the natural candidate for the unanswered one.

### 1.5 Admitting that something is ugly, arbitrary, or a choice

Arnold does this with contempt — his essay *On teaching mathematics* uses phrases like
"ugly mathematics has no permanent place under the Sun" and calls axiomatisers criminal.
([source](https://www.karlin.mff.cuni.cz/~spurny/doc/articles/arnold.htm)) That register
is too hot here, but the *willingness* is the model.

3Blue1Brown's *Essence of Calculus* lesson page defends its treatment of `dx` as an
actual small number, and openly flags that this is a choice against convention — with an
explicit "it's my house and my rules" for a notational decision.
([source](https://www.3blue1brown.com/lessons/essence-of-calculus/))

Mahajan puts the moral of a section in a box, in the imperative, with no hedging: "Do
not rob a quantity of its intrinsic dimensions." He also uses colloquial idiom inside a
technical sentence ("For dimensional analysis to have a prayer of helping, α needs
dimensions") and instructs the reader to pretend: "Pretend that x is a length, as its
name suggests."
([source, ch.1](https://engineering.purdue.edu/~ce474/Docs/Street-fighting%20mathematics.pdf))

**Actionable**: the draft has three places crying out for this and taking none of them.

- The smooth cutoff χ(r). Say it is a fudge. "This is a fudge to keep the logarithm map
  single-valued, and I have never liked it."
- The redundant frame (an ellipse doesn't distinguish an axis from its reverse, so SO(3)
  carries more than the footprint needs). The draft says keeping it is "convenient".
  Say instead: "I am carrying information the ellipse does not have. That is sloppy, and
  it is also the only reason transport is easy to write down."
- The 0.471593 residual. The draft calls it "fairly large residuals." Be blunt: "That is
  a bad fit. Twelve centres is not enough and I knew that before I ran it."

### 1.6 Concrete numbers — react to them

Arnold grounds abstractions in absurdly specific facts: a French pupil who could not
answer 2 + 3; the sequence 1, 2, 4, 8, 16 then 29. 張海潮 does the same in Chinese: a
pendulum 67 metres long, a 28-kilogram steel ball, light speed to one part in a hundred,
and — best of all — a pointer to where the reader can find the derivation as an exercise
(Goldstein, page 142).

**Actionable rewrites:**

Before:

> At a colatitude of 45 degrees the answer is approximately 1.840302369021 radians,
> or 105.44 degrees.

After:

> At 45° colatitude the arrow comes back 105.44° off. I can give you that as
> 1.840302369021 radians if you want, and the twelve digits are not showing off — they
> are the only cheap way to catch an integrator bug, which is the one reason anybody
> ever prints twelve digits.

Before:

> The measured logarithmic slope is 0.999973, extremely close to the predicted value
> of one.

After:

> The slope came out 0.999973. I wanted 1. The gap is quadrature error and it is boring,
> which is exactly what you want from that gap.

Also: give the reader a page number somewhere. A parenthetical "(Do Carmo works this out
on p. 242 if you want the general surface)" does more for credibility than any hedge.

### 1.7 Asides, parentheticals, and footnotes

Tao's parentheticals are load-bearing, not afterthoughts: examples, cross-references,
texture, mid-sentence. Mazur puts real content in footnotes — an Aristotle book-and-line
citation, a block quotation from Plato's *Republic* — so the footnotes are worth reading
on their own.

**Actionable**: this site's Markdown supports footnotes. Use exactly two or three:

- one carrying the second-order `cos⁴θ` term the draft currently mentions and abandons
  in the body;
- one carrying a grumble (about the cutoff, about WGS84's absurd 12-significant-figure
  inverse flattening, about the word "holonomy");
- one carrying a reference with a page number.

Never use a footnote for a definition that the body needs.

### 1.8 How to end a section

The draft ends sections by restating them. Real endings push forward, or stop mid-stride.

Tao ends sections with a directive. Matuschak & Nielsen end with a hook forward ("we'll
come back and think harder about…") or with a task. Gowers ends with a readiness
checkpoint ("We are now in a position to choose N"). Baez ends with a shrug or a joke.

**Actionable** — four endings to write, one of each kind:

- Directive: "Before the next section, decide which latitude you think is worst. Write
  it down."
- Hook: "Which leaves the question I have been avoiding since the second paragraph."
- Checkpoint: "That is everything needed to write the integral down. The rest is
  Bessel."
- Deflation: "Anyway, it's a lollipop."

### 1.9 What the draft is missing entirely: a surprise

This is the hardest rule and the most important. The current English draft has no
moment where the reader's expectation is violated *and the text notices*. The 60°
coincidence — holonomy of exactly 180°, and yet the footprint is literally unchanged —
is a genuine surprise, and the draft buries it under a section header
("Here is the exception that a purely qualitative description can miss") that defuses it
before it lands.

**Actionable**: restructure so the 60° case arrives *as a failure*. Something like:
present the mismatch formula, assert the obvious conclusion that more holonomy means
more damage, then break it. "So the worst latitude is the one with the most holonomy.
Except at 60°, where the frame comes back rotated a full half-turn and the lick is
*identical*. I spent an afternoon convinced the code was broken."

One earned surprise is worth more than every stylistic fix in this document.

---

## 2. English: banned constructions, with rewrites

Each item: the pattern, why it reads as generated, and a rewrite of an actual sentence
from the draft.

### 2.1 The negation-contrast frame (`It's not X, it's Y` and relatives)

Wikipedia's *Signs of AI writing* catalogues this family explicitly as "negative
parallelisms": `not only X, but Y`, `not X, but Y`, `rather than X`.
([source](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing))
It is the draft's single most frequent rhythm — roughly twenty instances.

**Before**: "This is not slippage; it is curvature."
**After**: "Nothing slipped. The sphere is curved, and that is the whole of it."

**Before**: "That tells us the total amount of candy. It cannot tell us a licking
strategy, for the same reason that knowing how much paint is in a tin does not tell us
what picture to paint."
**After**: "Now I know how much candy. A tin of paint knows its own volume and has no
opinion about the painting."

**Before**: "Its state is not just a dot on the sphere. We must also remember an arrow
lying flat against the surface."
**After**: "A dot is not enough. There is also an arrow, lying flat on the candy, and it
has to come along."

Budget: three in the whole essay. Spend them where the contrast is genuinely the point.

### 2.2 Rule-of-three lists and tricolons

The draft opens with three numbered questions and then resolves them in three parallel
sentences ("The first is a volume calculation. The second is a problem of… The third is
the trapdoor."). Later: "three independent checks", then "First… Second… Third…". Listed
in the Wikipedia guide as the "rule of three".

**Fix**: make it two, or four, or three-with-one-broken.

**Before**: "1. How much candy must be removed? 2. Where on the surface should it be
removed? 3. If a lick leaves an elongated mark, which way should that mark point?"
followed by three parallel answers.
**After**: keep the three questions (they are genuinely three), but refuse the parallel
resolution. "The first is arithmetic and I will do it in a paragraph. The second is
harder. The third one is the reason this essay exists, and I did not see it coming."

For the three verification checks: merge two of them and let the third stand alone, or
present them as unequal — "two of these are routine and one of them is the only reason I
trust the answer."

### 2.3 Em dashes

Seven in the draft, including two inside section headers. Wikipedia's guide flags em-dash
density as a structural signal. Header em dashes are the worst offenders because they
make every header the same shape.

**Before**: `## Almost circular means almost insensitive—but at what rate?`
**After**: `## The rate at which orientation stops mattering`

**Before**: `## What this calculation establishes—and what it does not`
**After**: `## What is actually proved`

**Before**: "The difference is small—about one part in 298—but not zero."
**After**: "The difference is one part in 298. Small. Not zero."

Budget: two em dashes in the body, zero in headers.

### 2.4 Thesis-statement section headers

Every header in the draft is a clever declarative or a question that the section
immediately answers. Twelve for twelve. That uniformity is the tell, not any individual
header.

**Fix**: at most two question headers, at most one thesis header, the rest flat noun
phrases.

| Before | After |
|---|---|
| Knowing how much is not knowing where | How much, and then where |
| The target is simpler than it looks | Two notes |
| A dot cannot remember which way the lick points | The state of a lick |
| Give the lick a bell-shaped footprint | An elliptical Gaussian on a sphere |
| Walk an arrow around the sphere | Parallel transport |
| Turn the returning arrow into a measurable difference | Measuring the damage |
| Can a stronger wrong-way lick compensate? | *(keep as a question — it's a real one)* |
| From one lick to a strategy | Twelve centres |
| What is new here, and what came before | Prior work |

### 2.5 Announcing the payoff before delivering it

**Before**: "This note follows that chain all the way to a formula for the change in the
removal footprint."
**After**: delete. The reader is already reading.

**Before**: "This is the paper's central formula. A computer can evaluate it quickly, but
its structure already tells us the important qualitative facts."
**After**: "That is the formula. Read it for a moment before I tell you what is in it."

**Before**: "The result has three independent checks rather than one impressive-looking
output number."
**After**: "Three checks. The second one is the only one I would defend in a seminar."

### 2.6 Hedging pile-ups and scope-disclaimer endings

Every section in the draft ends with a scope caveat, in identical shape: "Actual candy
dissolution would need its own experimental contact law", "it does not solve the original
lollipop design problem", "Those extensions require additional assumptions and
calculations", "They do not claim to solve the evolving physical lollipop."

The caveats are correct and there are too many of them in the same shape. Collect them.

**Fix**: one honest paragraph, early, that fences the model off once — and then no more
fencing. Make it specific and slightly funny rather than uniformly grave:

> The model is a fixed sphere, additive removal, and no saliva. Real candy dissolves,
> the tongue is warm and wet, and the shape changes while you work on it. Everything
> after this sentence is about a sphere that does not care.

Then delete the other five disclaimers.

### 2.7 Banned vocabulary

These words are in every published list of LLM lexical markers (Wikipedia's *Signs of AI
writing*; the "focal words" literature on ChatGPT-inflated scientific English):
*delve, underscore, crucial, nuanced, landscape, testament, tapestry, intricate,
meticulous, pivotal, realm, foster, elevate, showcase, align with, robust* (as praise),
*leverage* (as a verb), *vibrant, seamless, comprehensive, holistic, paramount,
compelling, resonate*.

Also banned in this document specifically, because they are the draft's own hedge
vocabulary:

| Banned | Replace with |
|---|---|
| "It is worth noting that" | delete the phrase, keep the sentence |
| "This distinction matters later" | say where, or cut |
| "Importantly," / "Notably," | delete |
| "In this section we will" | delete |
| "Here is the exception that…" | just state the exception |
| "particularly simple" | "short" |
| "especially short expansion" | "two terms" |
| "fairly large residuals" | "a bad fit" |
| "modestly better" | give the number |
| "extremely close to" | give the gap |
| "somewhat", "relatively", "quite" | delete or quantify |

Copula avoidance is also on the Wikipedia list: prefer *is* over *serves as, functions
as, stands as, represents, marks*.

### 2.8 Bolded lead sentences

The draft's first line is a bolded question. One bold opener is a legitimate hook; the
draft also bolds "**first-order target**" and "**and the route that carries their
orientations**" mid-paragraph. Cut the mid-paragraph bolds — use italics for a term's
first appearance (which the draft already does correctly with *oblate spheroid*,
*holonomy*, *tangent vectors*) and nothing for emphasis.

### 2.9 Uniform paragraph shape

Nearly every paragraph in the draft is 3–5 lines. **Fix by construction**: after the
rewrite, count lines per paragraph. The sequence must not be monotonous. A good target
shape for a section: `9, 2, 1, 6, 4, 11, 1`.

At least two paragraphs in the essay must be a single sentence. At least one must run
past nine sentences (the historical/prior-work section is the natural home for it, and
it can be a genuine ramble).

### 2.10 Prose-spelled mathematics

**Before**: "write the contrast as epsilon equal to b divided by a"
**After**: "write $\varepsilon = b/a$"

**Before**: "The largest discrepancy in the table is below 1.3 times ten to the minus
fourteen."
**After**: "Worst disagreement in the table: $1.3\times10^{-14}$. That is double
precision complaining, not a disagreement."

**Before**: "a term proportional to cosine to the fourth power appears"
**After**: "a $\cos^4\theta$ term shows up"

**Before**: "the mean precision is 16 and the cutoff radius is 1.2 radians"
**After**: "$a=16$, $r_c=1.2$."

**Before**: "The second Legendre polynomial satisfies" (for a displayed identity)
**After**: "$P_2$ is the one you want:"

### 2.11 The imperative-opener template

Nine sections open with a bare imperative. Vary the openers: one section should open
with a number, one with a question, one with a name, one mid-thought.

- Number: "Twelve centres. That is what the numerical experiment uses, and it is not
  enough."
- Name: "Levi-Civita gets the credit for what happens next, though Foucault had the
  physical version eighty years earlier."
- Mid-thought: "Which brings back the arrow."

---

## 3. Traditional Chinese: what to do

Register target: 《數學傳播》 / 《科學人》 expository, Taiwan conventions. The two model
authors are 張海潮 (mathematical, very short clauses, dry, ends on a question) and
高涌泉 (physics, scare-quotes, blunt verdicts, ends on the opponent's voice).
蔡聰明 supplies the historical/lyrical register and the "local concrete anchor" move.

**Important negative model**: 《數學傳播》 also publishes Mainland-style academic prose,
and the contrast is instructive. Compare 喻平, 〈論數學解題教學的現代理論基礎〉
([PDF](https://www.math.sinica.edu.tw/media/pdf/d264/26406.pdf)), whose opening sentence
runs 「教學理論的演變受制於社會的發展, 本文不去辨析對教學理論產生影響的複雜因素, 只從數學觀的
變革和現代學習心理學的發展去梳理解題教學觀的演化」 — long, nominalised, 的-chained,
subject-heavy. **That is the register to avoid**, and it is much closer to the current
Chinese draft than 張海潮 is.

### 3.1 Clause length: 6–12 characters, chained with ，

張海潮, 〈Foucault(1819-1868) 和 Levi-Civita(1873-1941)〉, 《數學傳播》 23:4 (1999)
([PDF](https://www.math.sinica.edu.tw/media/pdf/d234/23401.pdf)), opens:

> 先介紹佛科 (Foucault), 他是法國人, 本來學醫, 後來做實驗物理。 早先他與菲索 (Fizeau)
> 一起測光速。

Count the clauses: 5 / 5 / 4 / 7 characters. Subject dropped after the first clause.
Then a short full sentence. This is the baseline rhythm.

The current Chinese draft's clause mean is 13.5 characters, which is close — but its
*sentences* average 34.8 characters and cluster tightly. Fix by splitting at ，more
often and by admitting some very short full sentences.

**Before** (draft): 「這個答案只告訴我們總共要移除多少糖。它沒有告訴我們位置，就像知道一罐油漆的容量，仍不知道最後要畫什麼。」
**After**: 「這只告訴我們總量。至於位置，它一個字也沒說。一罐油漆知道自己有幾公升，卻不知道要畫什麼。」

(Three sentences: 7 / 13 / 21 characters. 至於 does the topic shift. 卻 does the turn.
它 is dropped once and kept once, where it earns its place.)

### 3.2 我 and 我們 — 我 for judgement, 我們 for the walk

張海潮 uses 我 for opinion and for doubt:

> 我以為這個定義方程式是伯努利在一六九八年給萊布尼茲的信裡首先提出的。

我以為 — "I take it that", carrying a real hedge, followed by a specific year and a
specific letter. And, at the end of the Foucault article, he names a colleague and
admits a hole in the literature:

> 但是很奇怪的, 早先我的同事王藹農告訴我 Levi-Civita 和佛科擺的關聯, 但是在文獻上卻一直看
> 不到。 在力學的書中不提 Levi-Civita, 而在微分幾何的書裡, 也不提佛科。

我們 is for the shared procedure: 「我們不準備做物理上的計算」 — first person plural used
to *refuse* a calculation, which is a move the draft never makes.

**Actionable**: the Chinese draft has 16 × 我, which is good in count and wrong in kind —
they are all 我 + procedural verb (我用、我把、我檢查). Convert at least five to judgement
or ignorance:

- 「我一直不喜歡這個截斷函數。」
- 「我以為這個 180° 的例外應該有人寫過，可是我沒找到。」
- 「這一步我想了一個星期。」
- 「這個殘差很難看，我知道 12 個中心不夠。」
- 「我不準備算第二階。我只用數值檢查，就過去了。」

### 3.3 The 呢-question, then 因為

張海潮's standard device for a hard step — three instances in one short article:

> 這個方向差究竟是多少呢? 因為地球不是平面因此直接計算有點困難。 不過, 因為球的特殊形狀,
> 我們可以在球面上沿這個緯圓套上一個錐面…

> 在錐面上看平移就很簡單了, 為什麼呢? 因為錐面攤開就是一個平面…

> 這跟佛科擺有什麼關係呢? 我們假設擺動的方向是向量場 V。

Note 究竟…呢 for "just how much, exactly", and note that the answer starts by admitting
the difficulty (有點困難) before the 不過 that rescues it.

**Actionable**: the draft has zero 呢. Install three, at the three hard steps:

- 「那麼，一口舔痕的狀態究竟要記多少東西呢?」
- 「為什麼角度積分會化成貝塞爾函數呢? 因為兩個指數相乘之後…」
- 「這跟地球的扁率有什麼關係呢?」

### 3.4 看似…其實不過是…罷了 — the deflation pattern

張海潮, 〈球面三角形的 AAA 定理〉, 《數學傳播》 28:1
([PDF](https://www.math.sinica.edu.tw/media/pdf/d281/28104.pdf)):

> 為何如此? 一個球面三角形, 看似複雜, 其實不過是三個單位長的向量 α, β, γ 罷了。

為何如此? as a bare mid-section question (more 文言 than 為什麼呢, and it lands harder).
Then 看似 X, 其實不過是 Y 罷了 — four beats, compressing a whole argument. This is the
single most useful Chinese sentence pattern for this essay, and the draft uses 其實 only
once.

**Actionable**:
「一個舔痕，看似只是球面上的一塊斑，其實不過是 SO(3) 裡的一個點罷了。」
「標架叢聽起來嚇人，其實不過是「每一點，加上貼在那裡的兩支箭頭」罷了。」

Also from that article, the 倒是 topic shift and the evaluative aside:

> 倒是球面三角還有一個角餘弦律, 又稱對偶餘弦律, 特別神奇, 為球面三角學所獨有, 值得一提。

特別神奇 — "especially magical", stated flatly as the author's own reaction. The draft
never once says a result is nice.

### 3.5 Homely physical verbs

This is where Chinese expository maths beats the English draft outright. 張海潮's verbs:

- 躺: 「原來這個向量場躺在曲面的切平面上」 — the vector field *lies down* on the tangent plane.
- 搭: 「想像 αβ 平面, βγ 平面, γα 平面都搭好了」 — the planes are *put up* like scaffolding.
- 套: 「我們可以在球面上沿這個緯圓套上一個錐面」 — *slip* a cone over the sphere.
- 攤: 「錐面攤開就是一個平面」 — *spread out* the cone.
- 疊回: 「再把攤開的扇形疊回原來的錐面」 — *fold it back*.
- 爬上爬下: 「只是為了適應地形而爬上爬下」 — of a geodesic's acceleration.
- 悄悄地: 「「三角形內角和等於 180°」 的事實已經被悄悄地引用了」 — the fact was *quietly* used.
- 乾脆: 「因此曲面上測地線的意義在數學上就乾脆定成是滿足測地線方程式的曲線」 — mathematics
  *just went ahead and* defined it that way. An admission that the definition is a
  convenience.

**Actionable**: the draft says 「把接觸點附近的小區域攤到切平面」 (good, 攤 already), but
elsewhere reverts to 描述、控制、決定. Replace with physical verbs:

- 「兩支箭頭貼在球面上」 → keep 貼, it is right.
- 「$a$ 控制平均寬窄」 → 「$a$ 管寬窄，$b$ 管兩邊差多少」 (管 is more colloquial than 控制)
- 「$\chi(r)$ 是平滑截斷」 → 「$\chi(r)$ 把核函數關在一個小帽子裡」 (關 = shut in)
- 「論文證明最小值一定存在」 → 「論文把最小值逼出來了」
- Add a 乾脆 somewhere: 「與其和對映點糾纏，數學上就乾脆把核函數截斷。」

### 3.6 四字格 — sparingly, and never as filler

蔡聰明, 〈從醉月湖的面積談起: 向量微積分簡介〉, 《數學傳播》 21:2
([PDF](https://www.math.sinica.edu.tw/media/pdf/d212/21201.pdf)), uses 各式各樣 twice in
one paragraph and then stops. His 四字格 do work: they either compress a list (各式各樣)
or carry an evaluation (行不通, 太局限了).

He also uses one deliberately odd allusion per article rather than a string of idioms:

> 不合數學追尋普遍的“萬人敵”之道

萬人敵 — from 項羽's biography, "the art of fighting ten thousand men", for a formula that
works in general rather than case by case. One such allusion is memorable; three is
decoration.

And in 〈Leibniz 如何想出微積分?〉 ([PDF](https://www.math.sinica.edu.tw/media/pdf/d183/18301.pdf)):

> 微積分若少了差和分就好像 「Hamlet」 劇本少了丹麥王子一樣。

**Actionable**: budget 3–4 四字格 for the whole Chinese essay, and one allusion. Candidates
that fit the content: 削足適履 (for removing candy in the wrong place), 積少成多 (for the
accumulation of tiny transports into a finite holonomy — 張海潮 uses the same idea as
「正是這樣微小變化的積累」), 事倍功半 (for the wrong-orientation lick), 無功而返 (for the 60°
case, where the frame does a full half-turn and achieves nothing).

Ban: 至關重要, 不可或缺, 值得深思, 錯綜複雜, 舉足輕重, 一言以蔽之, 不言而喻 — these are the
Chinese equivalents of *crucial* and *pivotal*.

### 3.7 The local concrete anchor

蔡聰明 does not ask for the area of "a closed curve in the plane". He asks:

> 問題1: 在平面上, 一條封閉曲線所圍成的領域, 例如台大的醉月湖, 如何求它的面積呢?

醉月湖 is a specific lake on a specific campus that his readers have walked past. Note
also the 問題1: label and the 呢 ending.

He also opens with etymology as a concrete hook: Geometry ← geometrein, geo = 土地,
metrein = 測量, 故幾何學的原意是測量土地.

**Actionable**: give the Chinese version an anchor the English version does not have.
Options: a named Taiwanese sweet; the globe in a school geography classroom; 地球儀 with
its axis tilted in the stand; a stone-polishing or jade-grinding shop (the polishing
literature is already cited in the bibliography, so this doubles as a real connection).
This is also the easiest way to make the Chinese stop reading as a translation — an
example the English does not contain cannot have been translated from it.

### 3.8 Discourse markers of turn

Ranked by how much the current draft needs them:

| Marker | Function | Example from sources |
|---|---|---|
| 至於 | topic shift to the next case | 「至於一般的緯圓, 它的單位切向量經過微分之後, 指向緯圓的圓心」(張海潮) |
| 倒是 | "as it happens, the interesting thing is" | 「倒是球面三角還有一個角餘弦律」(張海潮) |
| 卻 | frustrated expectation | 「但是在文獻上卻一直看不到」(張海潮) |
| 其實 | correction of the reader's likely view | 「其實, 若從「畢氏定理」出發也可以得到…」(張海潮) |
| 不過 / 可是 | concession then rescue | 「直接計算有點困難。 不過, 因為球的特殊形狀…」(張海潮) |
| 才 | "only then" | 「只有在特定的理論架構中，我們才能決定何種物理量是可以解釋的」(高涌泉) |
| 就 | immediate consequence | 「錐面攤開就是一個平面」(張海潮) |
| 剛好 / 恰好 | a coincidence worth noticing | 「剛好 24 小時轉一圈」(張海潮) |
| 起碼 | minimum requirement | 「起碼我們要能說明對於直角三角形是對的」(張海潮) |
| 說不定 | speculative hedge (not 或許) | 「說不定標準模型中的未定參數正是和行星軌道半徑一樣」(高涌泉) |
| 根本 | flat dismissal | 「從柏拉圖立體所推論出的行星半徑根本與真實的觀測結果不符」(高涌泉) |
| 究竟 | "just exactly" in a question | 「這個方向差究竟是多少呢?」(張海潮) |

### 3.9 Scare quotes 「」 for words you distrust

高涌泉, 〈人本原理〉 (from 《武士與旅人》, reprinted at
[CASE 報科學](https://case.ntu.edu.tw/blog/?p=7744)) uses 「」 to hold a word at arm's
length: 克普勒不知道古典力學，當然就不知道他問「錯」了問題 — the 錯 is quoted because
"wrong" is itself the thing in question. Also 這樣的「解釋」、「這哪算是科學原理？」、
「巧合」.

**Actionable**: this is exactly the tool for the essay's honest problems:
「這算不算一個「策略」呢?」 / 「所謂的「最佳」，只是在一個很小的選單裡最佳。」

### 3.10 Endings

Three model endings, all better than a recap:

- 張海潮, Foucault article: names the gap in the literature, then turns to the reader:
  「親愛的讀者, 你想, Levi-Civita 會受到佛科擺的啟發嗎?」 An open question, second person,
  and a slightly old-fashioned vocative.
- 高涌泉, 人本原理: ends in the *opponents'* voice, unrebutted:
  「我們不要用人本主義來掩飾自己缺乏想像力。」
- 張海潮, Foucault article, one paragraph earlier: a single metaphor, hedged with 可說是:
  「平移可說是從極微小的幾何到大域幾何的橋樑。」

The current Chinese draft's last line, 「棒棒糖沒有抗議，但幾何先提出了條件。」, is already
in the right family — keep that instinct and build the preceding paragraph to earn it.
Consider adding the 張海潮 move before it: address the reader with an open question.

### 3.11 Numerals and punctuation (Taiwan conventions)

- **Punctuation**: full-width ，。；：、「」（）—— throughout Chinese text. The current
  draft mixes 26 half-width `(` against 6 full-width `（`. Rule: half-width parentheses
  only inside `$...$` math; everything else full-width.
- **、 vs ，**: 、 joins items in a list of nouns (方向、寬窄、強度); ，joins clauses.
  Never use ，inside a noun list, never 、between clauses.
- **Measured and computed values**: Arabic numerals. 0.471593, 298.257223563, 20,000 步,
  $1.3\times10^{-14}$, 45°.
- **Narrative years, ages, small round counts**: Chinese numerals are the more literary
  choice and both model authors use them — 張海潮 writes 一八五四年、年僅二十八歲的黎曼;
  高涌泉 writes 一五九五年、約有二十個參數. If you adopt this, be consistent: dates and
  ages in Chinese numerals, physics in Arabic.
- **Degrees**: 餘緯 45°, 轉 180° — the degree sign, not 度, when paired with a numeral in
  a technical context; 張海潮 writes 北緯 λ 度 when λ is a symbol.
- **Space around Latin/math**: 數學傳播 sets a thin space around inline Latin and math.
  Match whatever `global.css` already does; do not hand-insert full-width spaces.

---

## 4. Traditional Chinese: banned constructions, with rewrites

The canonical Taiwan authority on most of these is 余光中,
〈怎樣改進英式中文？──論中文的常態與變態〉, 《明報月刊》 1987;
full text mirrored at [open.leancloud.cn/improve-chinese](https://open.leancloud.cn/improve-chinese/)
(read via [this mirror](https://www.cnblogs.com/poterliu/p/12131998.html); note both
mirrors are in Simplified — the examples below are re-set in Traditional).
Supplementary: Chinese Wikipedia's [歐化中文](https://zh.wikipedia.org/wiki/歐化中文) and
[Wikipedia:翻譯腔](https://zh.wikipedia.org/zh-hant/Wikipedia:翻譯腔).

### 4.1 弱動詞: 進行、作出、加以、予以、給予

余光中 calls 作出 and 進行 the two most fashionable 萬能動詞 and says their power is such
that they threaten to eat half of all real verbs. His own before/after pairs:

- 「本校的校友對社會作出了重大的貢獻」→「本校的校友對社會貢獻很大」
- 「心理學家在老鼠的身上進行試驗」→「心理學家用老鼠做試驗」
- 「我們對國際貿易的問題已經進行了詳細的研究」→「我們對國際貿易的問題已經詳加研究」

For this essay:

| Before | After |
|---|---|
| 對平行移動方程進行積分 | 把平行移動方程積出來 |
| 對兩種網格進行比較 | 比較兩種網格 |
| 對誤差進行分析 | 看誤差 / 算誤差 |
| 加以歸一化 | 歸一 |
| 給予非負限制 | 要求非負 |

### 4.2 使得 (and 由於…使得…)

余光中's example: 「由於他的家境貧窮，使得他只好休學」→「他家境貧窮，只好休學」, with the
comment that dropping 由於 and 使得 leaves the sentence 眉清目秀 (clear-featured).

| Before | After |
|---|---|
| 曲率使得箭頭無法指回原處 | 曲率一來，箭頭就指不回原處 |
| 非負限制使得問題成為凸優化 | 因為強度非負，這就是一個凸優化問題 |
| 由於橢圓有 180° 對稱，使得旋轉後的舔痕相同 | 橢圓轉 180° 本來就一樣，舔痕自然沒變 |

### 4.3 透過 / 通過 as a bare instrumental

Fine when it means literally "pass through"; a calque of English *through/via* otherwise.

| Before | After |
|---|---|
| 透過對數映射把區域攤平 | 用對數映射把區域攤平 |
| 通過兩條獨立路徑計算 | 我用兩條路各算一次 |
| 透過球諧分解可以看出 | 拆成球諧就看得出來 |

### 4.4 的-chains

余光中's showcase specimen, from a canonical modern essayist:
「彎彎的楊柳的稀疏的倩影」 — three 的 in eight characters. He also notes that when Chinese
meets an adjective it reaches reflexively for 的, 簡直無「的」不成句.

Rule: **one 的 per noun phrase.** Fixes in order of preference: (a) delete it; (b) turn
the modifier into a verb; (c) split into two clauses.

| Before | After |
|---|---|
| 球面上的每一點的切平面的一組正交基底 | 球面上每一點，切平面都有一組正交基底 |
| 旋轉後的舔痕與原來的舔痕的差異 | 舔痕轉過之後，和原來差多少 |
| 非負最小平方的最優條件的檢查 | 我檢查了非負最小平方的最優條件 |
| 一個固定的、不隨移除演化的球面 | 一個固定的球面，不隨移除而變 |

Also from 余光中: the adverbial 地 attached to a 四字格 should usually be deleted and
replaced by a comma. 「他知其不可為而為之地還是去赴了約」 is his example of how bad it gets.
And 「成功地」 is almost always redundant — 「國父成功地推翻了滿清」: 既然推而翻之, 就是成功了.

### 4.5 被 passives

Chinese 被 carries an adversative flavour; use it when something bad happens to the
subject and almost never otherwise. 余光中 notes two faults: stiff passives displacing
natural actives, and over-reliance on 被 where Chinese has 受、遭、給、讓、由、為…所, or
simply a topic-comment sentence with no passive marker at all.

Wikipedia:翻譯腔's example: 「這種植物能在叢林裡被發現」→「你能在叢林裡發現這種植物」.

| Before | After |
|---|---|
| 核函數被歸一化為 1 | 核函數歸一成 1 |
| 這個事實已經被引用了 | 這個事實已經悄悄用上了 (張海潮's own phrasing: 被悄悄地引用了 — the 被 is defensible here precisely because it is a complaint) |
| 高次球諧成分必須被控制 | 高次的球諧成分要壓下來 |
| 方向被記錄在標架裡 | 方向就記在標架裡 |

### 4.6 Subject repetition where Chinese drops the subject

Chinese is topic-comment. Once the topic is set, drop it.

**Before**: 「這個答案只告訴我們總共要移除多少糖。它沒有告訴我們位置。」
**After**: 「這只告訴我們總量，沒告訴我們位置。」

**Before**: 「$\chi(r)$ 是平滑截斷，它避免模型跨到球面正對面的點，因為那裡的最短方向不唯一。」
**After**: 「$\chi(r)$ 是平滑截斷，把核函數關在一頂小帽子裡，不讓它碰到正對面那一點——那裡最短方向不唯一。」

余光中 additionally warns against 他/她/它 proliferation and against 人們, which he calls
an ugly Westernism and notes 林語堂 never used; prefer 大家、眾人、人人.

### 4.7 並且 / 而且 / 以及 overuse

Chinese coordinates by juxtaposition. Wikipedia:翻譯腔's example deletes the connective
outright: 「羅馬夏季炎熱乾燥，而冬季溫和多雨」→「羅馬夏季炎熱乾燥，冬季溫和多雨」.

**Before**: 「第一項懲罰形狀誤差，第二項可用來懲罰總移除量。並且這是一個凸優化問題，而且最小值一定存在。」
**After**: 「第一項罰形狀誤差，第二項罰總移除量。問題是凸的，最小值一定存在。」

Budget for the whole essay: 而且 ×1, 並且 ×0, 以及 ×1 (only when 、and ，are both already
in use in the same list and a final item needs marking).

### 4.8 首先 / 其次 / 再者 / 最後 as paragraph scaffolding

The draft uses 最後 five times. Enumeration in the model authors happens *inside* a
sentence after a colon, not as paragraph headers: 高涌泉 writes
「克普勒的問題與答案都是沒有意義的：第一，…。第二，…。第三，…。」— three reasons, one
sentence's worth of scaffolding, then gone.

**Before** (three paragraphs opening 第一、第二、第三 under a header 「我實際檢查了什麼？」):
keep the numbers but make them unequal, and put them inside prose.
**After**: 「我做了三件檢查。前兩件是例行公事：Runge–Kutta 步長減半，誤差按四次方掉；貝塞爾
公式和直接積分對到 $10^{-14}$。第三件才是我真正在意的——把同一組強度搬到更細的網格上，看改善會不會消失。」

The 才 there is doing the work that 最後 was failing to do.

### 4.9 值得注意的是 / 換句話說 / 需要指出的是

These are direct translations of English discourse markers and are the loudest
machine-translation signal in Chinese technical prose.

| Banned | Replacement |
|---|---|
| 值得注意的是 | delete; or 有趣的是; or 「這裡有個例外：」 |
| 需要指出的是 | delete |
| 換句話說 (as filler) | delete. Keep it only after a genuine reformulation — 張海潮 uses 換句話說 exactly twice in two articles, both after a real restatement |
| 總而言之 / 綜上所述 | delete; end on content |
| 由此可見 | 可見 (shorter), or nothing |
| 在某種意義上 | say which sense, or delete |
| 眾所皆知 | delete (if everyone knows it, don't say it); or 大家都知道, which 張海潮 does use: 「大家都知道經線是球面上的測地線」 |

### 4.10 Nominalisation and 性/化 suffixes

| Before | After |
|---|---|
| 方向的敏感性 | 對方向有多敏感 |
| 移除的可加性 | 移除可以直接相加 |
| 對稱性的存在 | 有這個對稱 |
| 進行線性化處理 | 線性化 / 取一階 |
| 具有非負性 | 非負 |
| 唯一性與存在性 | 解存在，而且唯一 |

### 4.11 之一 and 最…之一

余光中 devotes a long passage to this: Chinese originally had no …之一 construction, and
「作為竹林七賢之一的劉伶…」 he calls 惡性西化的畸嬰 — the malignant-Westernisation deformed
infant — because 作為 is pure surplus, 之一的 mixes registers, and the real subject gets
buried. His preferred repairs include 劉伶乃竹林七賢之同儕 / 劉伶列於竹林七賢 /
劉伶躋身竹林七賢.

**Before**: 「平行移動是微分幾何中最基本的概念之一。」
**After** (張海潮's actual phrasing of the same idea keeps 之一 and it is fine because the
set is genuinely plural and unnumbered): 「平移理論是微分幾何中最基本的概念之一。」
**Banned form**: 「作為微分幾何最基本概念之一的平行移動…」 → 「平行移動是微分幾何最基本的概念之一，」
or better 「微分幾何離不開平行移動。」

### 4.12 有關 / 關於 as padding

余光中's parody of translationese —
「歡迎王教授今天來到我們的中間，在有關環境污染的各種問題上，為我們作一次學術性的演講」 —
and his real example: 「今天我們討論有關台灣交通的問題」, where 有關 does nothing.

| Before | After |
|---|---|
| 關於核函數的歸一化問題 | 核函數怎麼歸一 |
| 有關方向的資訊 | 方向的資訊 |
| 對於這個模型而言 | 這個模型 |
| 在…的情況下 | …時 |
| 就…而言 | delete |

### 4.13 是…的 copula padding

「他是很聰明的」→「他很聰明」.

| Before | After |
|---|---|
| 這個結果是成立的 | 這個結果成立 |
| 兩個舔痕是相同的 | 兩個舔痕一樣 |
| 這個限制是物理性的 | 這是物理限制 |

### 4.14 Even sentence length

The draft's sentences cluster at 30–35 characters. Fix the same way as English: put a
very short sentence in every paragraph. Chinese tolerates extremely short sentences
better than English does — 「不可能。」「這就完了。」「當然不對。」「我不知道。」 are all
publishable sentences in this register.

### 4.15 The overall test: does it read as an original?

The honest diagnostic: cover the English version, read the Chinese aloud, and ask
whether any sentence could only have been arrived at by translating. Typical giveaways
in the current draft:

- 「這個看似玩笑的問題，最後帶我走到球面上的平行移動、完整的方向資料，以及一條能準確計算橢圓
  舔痕旋轉後差異的公式。」 — a 30-character pre-nominal modifier
  (能準確計算橢圓舔痕旋轉後差異的) stacked in front of 公式. English word order survived the
  translation. Rewrite: 「這個玩笑問題，最後把我帶到平行移動，帶到標架，也帶到一條公式：橢圓
  舔痕轉過之後，差多少，它算得出來。」
- Section headers that are word-for-word the English headers.
- 「先說清楚模型的邊界。」 — a translated scope-disclaimer opener. Chinese would more likely
  put the caveat in a 註 or fold it into a sentence with 不過.

---

## 5. Bilingual parity

### 5.1 Verdict: two independently written essays over the same mathematics

Not a translation, and not two unrelated essays. Write them as **siblings** — same
theorems, same numbers, same figures and components, deliberately different prose
architecture.

Reasons:

1. The Chinese draft's fatal tell is structural isomorphism with the English. No amount
   of sentence-level polish removes it. A reader who has both open sees twelve sections
   matched to twelve sections and concludes, correctly, that one was produced from the
   other.
2. The two traditions have genuinely different defaults, and honouring both requires
   different structures. English expository maths of the Baez/Nielsen kind runs on
   narrated first-person discovery. 數學傳播 prose runs on compressed clauses, a named
   colleague, an anecdote from school, and an unanswered question at the end. These are
   not the same essay with different words.
3. The Chinese version can be *better* at parts of this material. It already is: the
   Chinese draft's 「先猜一猜：哪一條緯線會讓橢圓舔痕改變最多？」 before the interactive
   component is a move the English version does not make and should steal.

### 5.2 What must be identical

- Every mathematical claim, formula, and definition.
- Every number: 298.257223563, 105.44°, 1.840302369021, 0.999973, 0.471593, 0.436528,
  $1.3\times10^{-14}$, 12 and 48 candidate atoms, 20 active strengths, $a=16$, $r_c=1.2$.
- The bibliography and all DOIs/links.
- The figure, both interactive components, and the two tables.
- The scope limitation (fixed sphere, additive removal, no dissolution) — stated once in
  each, in each language's natural place.
- The final answer to the joke question: no practical route yet.

### 5.3 What must differ

| Dimension | English | Chinese |
|---|---|---|
| Section count | 12 → aim for 9–10 | aim for 7–8, merged differently |
| Order | keep flattening → harmonics → frame → kernel → transport → mismatch → weak-anisotropy → one-lick → strategy → checks → prior work | move 平行移動 earlier (it is the hook for a Chinese reader who has met 傅科擺 in school physics); merge 「一口」 and 「一套策略」 |
| A section the other lacks | a footnoted aside on why WGS84 quotes twelve significant figures for a number nobody measures that well | 一節談傅科擺：張海潮 already established the 佛科擺 / Levi-Civita link for this readership, and Taiwanese readers meet 傅科擺 in high school. Free concrete anchor the English does not get. |
| Anecdote | your own wrong first guess | a schoolroom / a named local object (地球儀, 玉石加工, a night-market sweet) |
| Opening | the bolded joke question | 蔡聰明's move — a specific local object, then the question |
| Ending | a forward edge | an open question to the reader (張海潮's 親愛的讀者…嗎?) |
| Register | slightly warmer, more self-deprecating | slightly drier, more compressed, 文言-flavoured at the punch lines |
| Formality | contractions allowed ("doesn't", "I'd") | no 口語 particles like 啦/耶/囉; 呢/嘛 in questions only |
| Humour | in the asides | in the deflations (不過是…罷了) and the scare quotes |

### 5.4 Terminology policy

**Chinese-first with English in full-width parentheses, once, at first use only:**

平行移動（parallel transport）、和樂／完整群（holonomy）、標架叢（frame bundle）、
切向量（tangent vector）、對數映射（logarithm map）、球諧函數（spherical harmonics）、
非負最小平方（non-negative least squares）、共變微分（covariant differentiation）、
測地線（geodesic）、凸優化（convex optimization）

This is exactly 張海潮's and 高涌泉's practice: 共變微分 (covariant differentiation),
柯里歐力 (Coriolis force), 「人本原理」（anthropic principle）,
起始條件（initial condition）.

**Latin script, never translated:** personal names (Gauss, Bonnet, Levi-Civita, Foucault
— though 張海潮 does gloss 佛科 once and then uses the Chinese; either is fine if
consistent), Bessel, Legendre, Runge–Kutta, WGS84, GPS, SO(3), $S^2$, $L^2$,
Cauchy–Schwarz.

**Symbols stay symbols in both languages.** Do not write 「貝塞爾函數 $I_0$」 more than
once; after that it is $I_0$.

**Do not put the English term in parentheses twice**, and do not put it in parentheses in
a section header.

### 5.5 Retained-English budget

Roughly 12–18 parenthetical English glosses in the Chinese essay. Fewer and a reader
cannot follow the literature; more and the page looks like a glossary. The current
Chinese draft is close to right on this — keep it.

### 5.6 Cross-linking

The frontmatter already links the two via `translation:`. Given that the two will
diverge structurally, consider softening the label from 中文/English (which implies
translation) — but that is a site-wide decision, not a prose one, and the current labels
are honest enough.

---

## 6. Checklist for the rewriting agent

Run this against the finished draft. Every item is mechanically checkable.

### English — structure

- [ ] Sentence-length standard deviation ≥ 11 words. (Measure it. The current draft is 6.6.)
- [ ] No more than 45% of sentences in the 7–14 word band. (Currently 55%.)
- [ ] At least 8 sentences under 7 words; at least 12 over 25 words.
- [ ] At least two single-sentence paragraphs.
- [ ] At least one paragraph over nine sentences.
- [ ] Paragraph line-counts within a section are not all 3–5.
- [ ] Section headers: ≥5 flat noun phrases, ≤2 questions, ≤1 witty thesis, 0 em dashes.
- [ ] Section openers: at most 4 begin with an imperative.
- [ ] No more than 22 sentences begin with "The". (Currently 30.)
- [ ] 2–3 footnotes, each carrying content not needed by the body.

### English — voice

- [ ] ≥5 first-person sentences, of which ≥1 admits a wrong first attempt, ≥1 admits
      ignorance, ≥1 states an aesthetic preference, ≥1 names a real person.
- [ ] ≥1 rhetorical question left unanswered for more than a paragraph.
- [ ] ≥1 question never answered in the essay.
- [ ] ≥1 place where a result is called ugly, arbitrary, or a fudge.
- [ ] ≥1 numerical result that the text reacts to rather than merely reports.
- [ ] ≥1 reference with a page number.
- [ ] Exactly one surprise, structured as an expectation stated then broken (the 60° case).
- [ ] The title's promise ("Taught Me") is cashed in the first 200 words.

### English — banned

- [ ] ≤3 instances of the negation-contrast frame (`is not X; it is Y` / `rather than` /
      `not just` / `cannot tell us` / `does not claim`). Count them.
- [ ] 0 instances of `not only … but also`.
- [ ] ≤2 em dashes total; 0 in headers.
- [ ] 0 occurrences of: delve, underscore, crucial, nuanced, landscape, testament,
      intricate, meticulous, pivotal, realm, foster, showcase, align with, robust,
      leverage (v.), seamless, comprehensive, holistic, paramount, compelling, resonate,
      tapestry, vibrant.
- [ ] 0 occurrences of: "It is worth noting", "Importantly", "Notably", "In this section
      we will", "It should be emphasised".
- [ ] ≤1 rule-of-three list with parallel resolution.
- [ ] Exactly one scope-disclaimer paragraph, placed early; no section ends on a caveat.
- [ ] No section ends by restating the section.
- [ ] All mathematics that is shorter in symbols is written in symbols. Grep for
      "times ten to the", "divided by", "to the fourth power", "equal to".
- [ ] Bold used only for the opening hook; no bolded mid-paragraph phrases.
- [ ] ≤2 one-shot analogies; the primary analogy is used at least three times and then
      explicitly retired.

### Chinese — structure

- [ ] Section count and order differ from the English version.
- [ ] ≥1 section exists that the English version does not have.
- [ ] Section headers are not translations of the English headers. Check each one.
- [ ] Clause length (between ，。；：) median 8–12 characters.
- [ ] ≥8 sentences under 15 characters.
- [ ] ≥2 sentences under 8 characters.
- [ ] Paragraphs vary; ≥1 single-sentence paragraph.

### Chinese — particles and markers (count them)

- [ ] 呢 ≥3 (currently 0)
- [ ] 才 ≥4 (currently 0)
- [ ] 就 ≥10 (currently 7)
- [ ] 卻 ≥3 (currently 1)
- [ ] 其實 ≥2 (currently 1)
- [ ] 至於 ≥2 (currently 0)
- [ ] 倒是 ≥1 (currently 0)
- [ ] 不過 + 可是 ≥4 (currently 0)
- [ ] 究竟 ≥1 (currently 0)
- [ ] 反而 ≥1 (currently 1)
- [ ] 剛好 / 恰好 ≥1
- [ ] 說不定 or 起碼 ≥1
- [ ] ≥1 instance of 看似…其實不過是…罷了 or a close variant
- [ ] ≥1 bare 為何如此? or 為什麼呢? followed by 因為

### Chinese — voice

- [ ] ≥5 uses of 我 that carry judgement, preference, or ignorance (not 我用/我把/我算).
- [ ] ≥1 named person (a colleague, a teacher, a shopkeeper).
- [ ] ≥1 local Taiwanese concrete anchor absent from the English version.
- [ ] ≥3 homely physical verbs (躺、貼、套、攤、疊、關、逼、管、爬).
- [ ] ≥1 乾脆 or equivalent admitting a definition is a convenience.
- [ ] 3–4 四字格 total, each doing compression or evaluation work.
- [ ] ≤1 literary allusion.
- [ ] ≥1 scare-quoted 「」 word the author distrusts.
- [ ] Ends on an open question to the reader, or on someone else's sharp sentence — not
      a recap.

### Chinese — banned (grep for each)

- [ ] 0 × 進行, 作出, 加以, 予以, 使得
- [ ] ≤1 × 透過 / 通過 (and only if literal)
- [ ] No noun phrase with 3+ 的; ≤5 noun phrases with 2 的
- [ ] 被 ≤2, and each one adversative or a complaint
- [ ] 而且 ≤1, 並且 = 0, 以及 ≤1
- [ ] 0 × 值得注意的是, 需要指出的是, 總而言之, 綜上所述, 眾所皆知
- [ ] 換句話說 ≤2, each after a genuine reformulation
- [ ] 最後 ≤1 (currently 5); 首先 = 0, 其次 = 0
- [ ] 0 × 至關重要, 不可或缺, 值得深思, 錯綜複雜, 舉足輕重
- [ ] 0 × 作為…之一的 construction; …之一 ≤2
- [ ] 0 × 有關 / 關於 as padding; 0 × 對於…而言
- [ ] 0 × 是…的 copula padding
- [ ] 0 × 人們
- [ ] No 性 / 化 nominalisation where a verb or adjective works
- [ ] No 它 / 這個 as subject where the topic is already established. Check every 它.
- [ ] No pre-nominal modifier longer than about 12 characters
- [ ] Half-width `(` appears only inside `$...$`; all prose parentheses are （）
- [ ] 、only inside noun lists; ，only between clauses
- [ ] Numeral convention consistent: measured values Arabic, narrative years/ages in one
      chosen style throughout

### Both — final read

- [ ] Read each version aloud. Mark every sentence where you can predict the second half
      from the first. Rewrite those.
- [ ] Cover the English; read the Chinese. Could any sentence only have been produced by
      translating? Rewrite it.
- [ ] Name the one surprise in each version. If you cannot, there isn't one.

---

## 7. Sources

### Fetched and read

- Terence Tao, *There's more to mathematics than rigour and proofs* —
  https://terrytao.wordpress.com/career-advice/theres-more-to-mathematics-than-rigour-and-proofs/
- Timothy Gowers, *How to work out proofs in Analysis I* (2014) —
  https://gowers.wordpress.com/2014/02/03/how-to-work-out-proofs-in-analysis-i/
- John Baez, *This Week's Finds in Mathematical Physics*, week 300 —
  https://math.ucr.edu/home/baez/week300.html
- Andy Matuschak & Michael Nielsen, *Quantum Computing for the Very Curious* —
  https://quantum.country/qcvc
- V. I. Arnold, *On teaching mathematics* (1997) —
  https://www.karlin.mff.cuni.cz/~spurny/doc/articles/arnold.htm
- Barry Mazur, *When is one thing equal to some other thing?* (2007), read as extracted
  text — https://people.math.osu.edu/cogdell.1/6112-Mazur-www.pdf
- Sanjoy Mahajan, *Street-Fighting Mathematics*, ch. 1 (MIT OCW / CC BY-NC-SA), read as
  extracted text —
  https://engineering.purdue.edu/~ce474/Docs/Street-fighting%20mathematics.pdf
- Grant Sanderson, *The Essence of Calculus* lesson text —
  https://www.3blue1brown.com/lessons/essence-of-calculus/
- Wikipedia, *Wikipedia:Signs of AI writing* —
  https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
- 張海潮, 〈Foucault(1819-1868) 和 Levi-Civita(1873-1941)〉, 《數學傳播》 23:4 (1999) —
  https://www.math.sinica.edu.tw/media/pdf/d234/23401.pdf
- 張海潮, 〈球面上的測地線和一個平面幾何的問題〉, 《數學傳播》 23:2 (1999) —
  https://www.math.sinica.edu.tw/media/pdf/d232/23203.pdf
- 張海潮, 〈球面三角形的 AAA 定理〉, 《數學傳播》 28:1 —
  https://www.math.sinica.edu.tw/media/pdf/d281/28104.pdf
- 張海潮、王彩蓮, 〈三角形內角和等於 180° 與畢氏定理〉, 《數學傳播》 27:2 —
  https://www.math.sinica.edu.tw/media/pdf/d272/27206.pdf
- 蔡聰明, 〈從醉月湖的面積談起: 向量微積分簡介〉, 《數學傳播》 21:2 (1997) —
  https://www.math.sinica.edu.tw/media/pdf/d212/21201.pdf
- 蔡聰明, 〈Leibniz 如何想出微積分?〉, 《數學傳播》 18:3 (1994) —
  https://www.math.sinica.edu.tw/media/pdf/d183/18301.pdf
- 高涌泉, 〈人本原理〉 (from 《武士與旅人》, 三民 2008), reprinted at CASE 報科學 —
  https://case.ntu.edu.tw/blog/?p=7744
- 余光中, 〈怎樣改進英式中文？──論中文的常態與變態〉, 《明報月刊》 1987, read via mirror
  (Simplified) — https://www.cnblogs.com/poterliu/p/12131998.html
  (canonical mirror: https://open.leancloud.cn/improve-chinese/)
- 喻平, 〈論數學解題教學的現代理論基礎〉, 《數學傳播》 26:4 — used as a **negative** exemplar
  of nominalised academic register —
  https://www.math.sinica.edu.tw/media/pdf/d264/26406.pdf
- Chinese Wikipedia, 歐化中文 — https://zh.wikipedia.org/wiki/歐化中文
- Chinese Wikipedia, Wikipedia:翻譯腔 —
  https://zh.wikipedia.org/zh-hant/Wikipedia:翻譯腔
- 數學傳播 index (for locating the above) —
  https://www.math.sinica.edu.tw/mathmedia/

### Wanted but not fetched — do not attribute quotations to these

- **Feynman, *Lectures on Physics*** — feynmanlectures.caltech.edu returned 403.
  Everything commonly said about his style (homely analogy, "I think I can safely say
  nobody understands quantum mechanics", digression as structure) is real but I did not
  verify wording here. **(unverified)**
- **Steven Strogatz, NYT *Elements of Math* / *Math Revealed* columns** — nytimes.com is
  not fetchable from this environment. Essay index confirmed at
  https://www.stevenstrogatz.com/essays with live 2025 column URLs; the style
  description in secondary sources (personal-anecdote opening, one idea per column,
  short paragraphs, second person) is plausible but I did not read the text.
  **(unverified)**
- **Gowers, *Mathematics: A Very Short Introduction*** — not available online; not read.
  **(unverified)**
- **Mahajan, chapters beyond ch. 1** — only the first chapter's body text extracted
  cleanly. **(unverified beyond ch. 1)**
- **《數理人文》 (Mathmedia's sister magazine)** — no freely accessible full-text articles
  found. Its house style is reported to be closer to 科學人 than to 數學傳播 but I could
  not verify. **(unverified)**
- **《科學人》 (Scientific American Traditional Chinese)** — paywalled. The 高涌泉 essay
  above, from a 三民 collection reprinted by NTU CASE, serves as the physics-magazine
  register proxy.
