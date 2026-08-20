# CLI Agent Prompt: Build *What Is It Then Between Us?*

You are a senior frontend engineer, interaction designer, and careful digital-humanities collaborator. Build a polished, responsive website for a college literature final project about Walt Whitman, New York, reincarnation/rebirth, and interpersonal connection across time.

## First Actions

1. Inspect the current repository and read any `AGENTS.md`, README, package manifest, and existing design or hosting configuration before making changes.
2. Preserve any useful existing structure and follow the repository's conventions.
3. If there is no existing application, create a maintainable static frontend using a lightweight modern stack appropriate to the available environment. Prefer React + TypeScript + Vite unless the repository clearly indicates another stack.
4. Write a concise implementation plan, then build the site. Do not stop after producing a plan or wireframe.
5. Run the relevant formatter, linter, tests, and production build. Resolve errors before completing the task.

## Course and Assignment Context

This is the final project for **ENGL 3273: Walt Whitman and New York**. The course examines how nineteenth-century New York shaped Whitman's life, writing, public identity, and continuing cultural presence.

The syllabus permits either a traditional academic essay or a creative response. A mixed-media project should be equivalent in substance to **5-7 pages or approximately 1,400-1,800 words**. The project should emerge from the meeting of the student's interests with course readings, discussions, presentations, and workshops. The instructor encourages projects with significance beyond the classroom, including artistic or community-minded work intended for a broader audience.

The website must therefore be both:

- A compelling public-facing creative experience.
- A serious work of literary interpretation grounded in Whitman's texts and New York history.

## Working Title

**What Is It Then Between Us? Whitman's New York Across Lives**

The title may be refined if a better version emerges, but preserve Whitman's question and the project's focus on connection across time.

## Central Concept

Build an interactive website in which a map of Whitman's New York introduces historically significant locations from his life and writing. The map leads visitors toward Fulton Ferry, where the site's central narrative begins: three fictional passengers cross the same water during Whitman's past, the present day, and an imagined future.

Recurring details connect the passengers without definitively confirming whether they are reincarnations of one another. The site should leave open several possibilities:

- They are connected through literal past and future lives.
- They are connected through shared human experience.
- They continue through language, memory, influence, and place rather than through a permanent individual soul.

New York should feel like more than a setting. It functions as a living archive that holds traces of encounters, bodies, language, and relationships across generations.

## Central Interpretive Question

> How does "Crossing Brooklyn Ferry" imagine intimacy between people separated by time, and what becomes visible when that connection is considered alongside Buddhist ideas of rebirth and dependent origination?

## Provisional Argument

Whitman's New York operates as a living archive in which places preserve encounters between people separated by time. Read alongside Buddhist ideas of rebirth and dependent origination, "Crossing Brooklyn Ferry" suggests that human continuity may reside not in an isolated, permanent self, but in the words, sensations, relationships, and environments through which lives remain connected.

Treat this as a provisional scholarly direction, not an unquestionable fact. The site must **not** claim that Whitman was Buddhist, that he believed in reincarnation, or that his poetry directly expresses Buddhist doctrine without reliable historical evidence. Present Buddhism as a comparative interpretive lens. Preserve the productive tension between Whitman's expansive poetic "I" and the Buddhist rejection of a permanent, unchanging self.

## Relationship Between the Map and Main Narrative

The ferry narrative is the emotional and interpretive heart of the website. The map is a supplementary historical framework and navigation device, not a separate project of equal size.

Use the map twice:

1. **As a prologue:** visitors explore Whitman's real connections to New York before arriving at Fulton Ferry.
2. **As an epilogue:** visitors return to the map after the ferry narrative and see the locations connected by threads, routes, ripples, or other visual traces. The changed map should suggest that history becomes newly legible after experiencing the three lives.

## Two Clearly Distinguished Content Layers

Every map location should offer two visibly distinct layers:

1. **Whitman's New York** - documented history, dates, places, quotations, and primary-source context.
2. **Echoes Across Lives** - fictional narrative fragments that connect the location to the three passengers.

Implement a toggle, tabs, or another unambiguous visual system for moving between these layers. Never present fictional writing as historical fact. Label creative passages clearly.

## Map Locations

Limit the initial experience to approximately five locations so the project remains focused. Use these as the working set:

### 1. Fulton Ferry Landing - Crossing and Return

- Central location and gateway to the main narrative.
- Connect to "Crossing Brooklyn Ferry."
- Themes: movement, water, crowds, strangers, repetition, temporal distance, and recognition.

### 2. 99 Ryerson Street - Home and Identity

- Whitman's only surviving New York residence.
- Themes: home, embodiment, personal identity, memory, and what remains after a resident is gone.

### 3. Fort Greene Park - Continuity and Public Life

- Introduce Whitman's connection to Brooklyn civic life and his advocacy for public space, subject to source verification.
- Themes: regeneration, public memory, common ground, and generations unknowingly occupying the same place.

### 4. Pfaff's Cellar - Encounter and Chosen Community

- Connect to Whitman's artistic, social, and queer New York.
- Themes: intimacy, recognition, artistic community, strangers becoming companions, and lives changed by brief encounters.

### 5. South Street Seaport / Printer's Row - Transmission

- Connect to Whitman as a printer, journalist, editor, and observer of the city.
- Themes: words moving between people, print as an afterlife, circulation, and literature as a form of rebirth.

Before publishing exact addresses, dates, or biographical assertions, verify them using reliable sources. If verification is not possible during implementation, insert a clearly marked content TODO rather than inventing information.

## Primary Whitman Texts

Center the project on texts assigned in the course:

- "Crossing Brooklyn Ferry" - primary text and structural center.
- "Song of Myself" - the expansive self, the body, death, soil, grass, recurrence, and the future reader.
- "The Sleepers" - shared consciousness, porous identities, dreaming, and movement among lives.

Additional Whitman writing may be used only when relevant and properly cited, including his journalism or writing about Brooklyn and New York.

Whitman's writing is in the public domain, but every quotation must still identify the poem or source. Do not invent, paraphrase as quotation, or use unattributed lines.

## Main Ferry Narrative

Create three distinct but connected narrative chapters. The initial implementation may use polished placeholder copy where the student's final prose has not yet been supplied, but label all placeholder writing so it can be replaced easily.

### Passenger One: Whitman's Past

- A fictional passenger crossing between Brooklyn and Manhattan during Whitman's lifetime.
- Establish historically plausible sensory details without pretending the character is real.
- Show the material city: water, ferry machinery, crowds, paper, voices, clothing, labor, and skyline.

### Passenger Two: The Present

- A contemporary passenger crossing the East River.
- The passenger may be a student, immigrant, traveler, or New Yorker who experiences unexplained familiarity with the water, skyline, another traveler, or an object.
- Do not overdefine the passenger if ambiguity makes it easier for visitors to identify with them.

### Passenger Three: The Future

- A passenger crossing through a transformed but still recognizable New York.
- Avoid generic science-fiction spectacle. Focus on how the city and climate may change while recurring human gestures and relationships remain.

### Recurring Motifs

Use a restrained set of recurring details to connect the three passengers:

- Water or ripples.
- A folded newspaper or piece of printed paper.
- A thread, ribbon, or line on a map.
- A repeated gesture, expression, or melody.
- A face that feels familiar in a crowd.
- The sensation of having crossed the water before.
- A Whitman line encountered in different contexts.

Never definitively announce, "These are the same soul." Let visitors decide whether the connection is metaphysical, psychological, poetic, historical, or coincidental.

## Required Site Structure

### 1. Opening / Landing

- Begin with a quiet, visually striking river or map-based scene.
- Introduce Whitman's question: "What is it then between us?"
- Provide a clear invitation such as **Begin the crossing** or **Enter the map**.
- Include an obvious way to skip animation and proceed directly to the content.

### 2. Whitman's New York Map

- Create a stylized map rather than relying on a paid or API-key-dependent map service.
- Prefer an accessible SVG or similarly controllable implementation.
- Display the five locations as interactive markers.
- Each marker should open a concise card or panel containing the historical layer, relevant Whitman text, thematic meaning, and fictional echo.
- Make the map fully usable with keyboard navigation and on small screens.
- Guide visitors naturally toward Fulton Ferry without requiring that every location be opened first.

### 3. Transition to Fulton Ferry

- Clicking the ferry location launches the central scroll-based narrative.
- Use water, movement, or changing cartography to make the transition feel purposeful.
- Avoid a long loading-style animation or interaction that obscures navigation.

### 4. Three Crossings

- Present past, present, and future as three chapters of the same journey.
- Use recurring visual motifs and subtle transitions rather than heavy effects.
- Insert brief close-reading moments between creative scenes. These should connect specific Whitman language to the narrative and philosophical questions.
- Make the critical commentary visually distinct from the fictional story.

### 5. Threads Between Lives

- After the third crossing, reveal how recurring objects, sensations, places, and language connect the passengers.
- Allow visitors to select a motif and trace it across all three chapters.
- Use meaningful interaction; do not add controls that are merely decorative.

### 6. Return to the Map

- Return visitors to a transformed version of the opening map.
- Connect the locations with routes, threads, typographic fragments, or ripples.
- Show how homes, parks, meeting places, printing spaces, and crossings participate in a network of continuity.

### 7. Critical Reflection

- Include a concise essay section comparing Whitman's treatment of time, selfhood, death, and connection with Buddhist rebirth and dependent origination.
- Define philosophical terms carefully and avoid treating "Eastern philosophy" as a single homogeneous tradition.
- Distinguish rebirth from the transfer of a permanent soul where relevant.
- Make clear where the comparison illuminates Whitman and where the traditions remain different.

### 8. Visitor Reflection

- End with a question such as: **Is a person preserved through the soul, through memory, or through their effect on other lives?**
- Let the visitor type a private response or choose among reflective prompts.
- Do not collect, transmit, or publicly display personal responses. Store them only in local component state or `localStorage`, with a clear option to delete them.
- The experience must remain complete if the visitor chooses not to respond.

### 9. Artist's Statement and Works Cited

- Explain the creative and scholarly purpose of the project.
- Credit all quotations, scholarship, historical information, maps, images, audio, and archival materials.
- Provide working links where appropriate.
- Clearly mark any sources or details that still require student verification.

## Approximate Content Distribution

The completed website should contain approximately 1,400-1,800 substantive words, distributed naturally rather than presented as one long essay:

- Introduction: 150-200 words.
- Three creative vignettes: 600-700 words total.
- Close readings and philosophical comparison: 450-550 words.
- Conclusion and artist's statement: 200-300 words.

Do not pad the site with repetitive text merely to reach the target. The student's final prose may be added after the initial implementation, so centralize editable content in data files or content modules rather than scattering it throughout components.

## Visual Direction

The design should combine nineteenth-century print culture with the atmosphere of moving water and contemporary digital cartography.

Aim for:

- Editorial, literary, atmospheric, and historically aware.
- A restrained palette based on ink, aged paper, river blue, fog, charcoal, and one muted accent such as oxidized copper or faded red.
- Typography inspired by nineteenth-century books and newspapers, paired with a highly legible contemporary body face.
- Fine map lines, typesetting marks, paper textures, water ripples, and subtle layering.
- A sense of temporal overlap rather than fantasy mysticism.

Avoid:

- Cliched "mystical Eastern" imagery.
- Buddhist or Hindu religious symbols used as decoration.
- Generic AI-generated spiritual imagery.
- Excessive sepia, ornamental clutter, or an imitation-antique theme that harms readability.
- Neon cyberpunk treatment of the future.
- Constant parallax, scroll hijacking, or motion that competes with the writing.

Use CSS-created textures, open-license archival materials, or clearly labeled placeholders. Do not download or include imagery whose reuse rights are unclear.

## Interaction and Motion

- Use subtle movement to support meaning: slow water motion, marker pulses, line drawing, soft crossfades, or type appearing in measured fragments.
- Motion should help communicate recurrence and connection.
- Respect `prefers-reduced-motion` and provide equivalent static states.
- Do not require precise pointer movement, hover, audio, or animation to understand the content.
- If ambient sound is included, it must be optional, muted by default, captioned or described, and controlled by an obvious button.

## Accessibility Requirements

- Use semantic HTML and a logical heading hierarchy.
- Meet WCAG AA color contrast.
- Provide visible focus states and full keyboard navigation.
- Include a skip link.
- Ensure all map markers, tabs, toggles, and narrative controls are screen-reader accessible.
- Provide meaningful alternative text for content images and empty alt text for decorative images.
- Do not encode the historical/fictional distinction through color alone.
- Avoid text embedded in raster images.
- Ensure touch targets are comfortably sized.
- Test at approximately 320 px mobile width as well as tablet and desktop sizes.

## Technical Requirements

- The site must be responsive and deployable as a static website.
- Do not require a paid service, API key, database, authentication, or backend.
- Prefer local structured data for map locations, citations, quotations, motifs, and narrative chapters.
- Build reusable components for map markers, information panels, quotations, chapter sections, scholarly notes, motifs, and citations.
- Keep content separate from presentation so the student can revise prose without rewriting components.
- Use optimized images, lazy loading where appropriate, and minimal dependencies.
- Preserve reasonable performance on mobile and slower connections.
- Provide useful page metadata, a descriptive title, social sharing metadata, and a simple favicon treatment if feasible.
- Internal navigation and browser back behavior should remain understandable.
- If routing is used, make it compatible with static hosting and direct URLs; otherwise use accessible in-page navigation.

## Content Integrity and Citation Rules

- Never fabricate a Whitman quotation, address, date, source, or historical claim.
- Never fabricate Buddhist teachings or collapse Buddhist, Hindu, Daoist, and East Asian folk traditions into one category.
- Use primary sources and reliable scholarship where possible.
- Treat the three passengers and their connections as clearly labeled creative writing.
- Use citation placeholders such as `[SOURCE TO VERIFY]` when the needed source has not been supplied.
- Do not silently fill scholarly gaps with plausible-sounding claims.
- Keep the factual map layer, fictional narrative layer, and critical interpretation visually and semantically distinct.

## Suggested Content Architecture

Use a structure similar to the following, adapting it to the existing project:

```text
src/
  components/
    map/
    narrative/
    interpretation/
    ui/
  content/
    locations.ts
    chapters.ts
    motifs.ts
    quotations.ts
    sources.ts
  pages-or-sections/
  styles/
  assets/
```

This is a conceptual suggestion, not a requirement to overwrite a well-organized existing architecture.

## Deliverables

Complete all of the following:

1. A working responsive website, not merely a mockup.
2. The historical map with approximately five interactive locations.
3. The past, present, and future ferry narrative structure.
4. Clearly separated historical, creative, and interpretive content layers.
5. The transformed-map epilogue and visitor reflection.
6. An artist's statement and works-cited area.
7. Centralized, easily editable content modules.
8. A concise README explaining:
   - How to install and run the project.
   - How to build it for production.
   - Where to edit narrative, map, quotation, and citation content.
   - Which factual claims, assets, or passages remain placeholders requiring verification.
9. Successful linting, testing where available, and production build.

## Acceptance Criteria

The project is complete only when:

- A new visitor can understand the central question without prior course knowledge.
- The map provides genuine historical orientation but does not overwhelm the ferry narrative.
- The site makes clear what is historical fact, creative fiction, and interpretive analysis.
- The three crossings feel connected without explicitly resolving whether reincarnation is literal.
- Whitman's language and New York geography are essential to the experience rather than decorative additions.
- The philosophical comparison is respectful, specific, and does not claim that Whitman followed a tradition without evidence.
- The entire experience works on mobile and desktop and remains understandable with animation disabled.
- All major interactions work with a keyboard.
- No citation, quotation, or factual claim has been invented.
- The production build completes without errors.

## Final Handoff

At the end, report:

1. What you implemented.
2. The principal design and technical decisions.
3. Commands used to validate the project and their results.
4. Any remaining content placeholders or facts the student must verify.
5. The exact files where the student should revise the three vignettes, critical interpretation, map entries, and citations.

The goal is a website that feels contemplative, emotionally resonant, historically grounded, and intellectually honest: a digital crossing through Whitman's New York in which place, poetry, and human connection continue across time.
