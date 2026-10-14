# Portfolio playbook: ship, promote, learn

A plan for getting every project public, getting it seen, and understanding it well enough to rebuild it and talk about it in interviews.

Work top to bottom. Each step is small enough for one sitting.

---

## 1. Where every project stands

### Already on GitHub

| Repo | Live? | What's needed | Effort |
| --- | --- | --- | --- |
| **developer-portfolio** (this repo) | Not yet | Merge the PR, turn on Pages (2.1) | 5 min |
| **unused-and-looking** | Demo URL is in the README | Confirm Pages, publish to npm, record the GIF (its `LAUNCH.md`) | 1 hour |
| **dhruva** | Yes, on Streamlit Community Cloud | Add a screenshot to the README | 15 min |
| **skyrealm** | Ready to push | Create the empty repo, then turn on Pages (2.4) | 5 min |
| **CelebalTechAssignments** (cancer classifier) | No | One-line fix, then Streamlit deploy (2.5) | 30 min |
| **Machine_Learning_Projects** | Notebooks only | Colab badges and results in the README (2.6) | 45 min |
| **CS50W-Projects**, **DjangoApp** | – | Fine as "learning" repos | – |
| **RAG_QnA_Chatbot**, **FER_with_TrfLrn** | – | Dropped from the portfolio. Archive them or leave them unpinned | 2 min |
| **wofwebsite**, **learning**, **github-pages-with-jekyll** | – | Archive them so they don't dilute your profile | 2 min |

### Built with Claude, not on GitHub yet

These live in Claude Code sessions on your computer. Section 3 is the step-by-step to get each one up.

| Project | Where it goes | Notes |
| --- | --- | --- |
| **Haunted README** | Public repo | Launch before Halloween, see section 5 |
| **Git Obituary** | Public repo | |
| **Dungeons & Directories** | Public repo | |
| **Bug Smuggler** | Public repo | |
| **Premortem** | Public repo | |
| **Keystroke** | Public repo | |
| **Unhooked** | **Private** repo + public landing page | Going to the Play Store, see section 4 |
| **Astro app (Jyotish Darpan)** | **Private** repo + public landing page | Going to the Play Store; the prototype contains your real birth details |

---

## 2. Ship each project

### 2.1 This portfolio

1. Merge the pull request into `master`.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The **Deploy to GitHub Pages** workflow runs on the next push (or run it from the **Actions** tab). The site appears at `https://andy7204.github.io/developer-portfolio/`.
4. In `index.html`, search for `TODO` and fill in your LinkedIn URL.
5. As each new project goes public, add a card for it: copy one `<article class="card">` block and edit it.

**Want the shorter `andy7204.github.io`?** That repo holds an empty template. Copy `index.html` and `assets/` from here into it and push. Project sites like `/unused-and-looking/` and `/skyrealm/` keep working either way.

### 2.2 Unused & Looking

Everything is in that repo's `LAUNCH.md`: turn on Pages, `npm publish`, record the 10–15 second demo GIF. **The GIF matters more than anything else on this list**: it's what makes people stop scrolling.

### 2.3 Dhruva

Already live. Open the app before you share it: Community Cloud puts apps to sleep after a few days without visitors. Add a dashboard screenshot near the top of the README.

### 2.4 Skyrealm

The repo is prepared: the game, a README with a screenshot, and a Pages workflow.
1. Create an **empty** public repo named `skyrealm` at https://github.com/new (no README, no license, no .gitignore).
2. Tell Claude it's created; it pushes the prepared commit.
3. **Settings → Pages → Source: GitHub Actions**. The game goes live at `https://andy7204.github.io/skyrealm/`.

### 2.5 Cancer Cell Classifier (CelebalTechAssignments)

1. `st.experimental_rerun()` was removed in recent Streamlit versions. Change it to `st.rerun()`.
2. https://share.streamlit.io → **Create app → From GitHub** → this repo, branch `main`, file `streamlit_app.py`.
3. Put the URL in the repo's About box and in this portfolio (the `TODO` on its card).

### 2.6 Machine_Learning_Projects

For each notebook, add to the README an **Open in Colab** badge, one line each on the data and the approach, **the result as a number**, and one chart:

```md
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Andy7204/Machine_Learning_Projects/blob/main/<notebook>.ipynb)
```

---

## 3. Publish the projects from your local Claude sessions

GitHub lets anyone open your public repos, so check each project before it goes up. The quickest way is to let the Claude session that built it do the work.

**Once per computer:** install the GitHub CLI (https://cli.github.com), then run `gh auth login`.

**Then, in each project's Claude Code session, paste this** (change the name):

> Publish this project to GitHub as a **public** repo `Andy7204/<repo-name>`. Before pushing:
> 1. Make sure no secrets, API keys, `.env` files, personal data or large build output are committed. Add a `.gitignore`, and `.env.example` if config is needed.
> 2. Write a README: a one-line pitch, a screenshot or GIF, a "Try it" section (live link or install command), "How it works" in 3–5 bullets, and how to run it locally.
> 3. Add an MIT `LICENSE` (ask me first if you think another license fits better).
> 4. If it's a web app, add a GitHub Pages workflow (or tell me which free host fits better) so it has a live URL.
> 5. Run the tests and make sure it starts from a clean clone.
>
> Then run `gh repo create Andy7204/<repo-name> --public --source . --push`, set the description, homepage and 4–8 topics with `gh repo edit`, and give me the URLs.

For **Unhooked** and **Jyotish Darpan**, use `--private` instead, and skip the license.

When they're up, tell this session the repo names. Claude can then add them to the portfolio, write their posts, and keep the playbook current.

---

## 4. Play Store apps: do they need to be on GitHub?

**No.** Google Play never looks at GitHub. What it needs is a signed app bundle (`.aab`), a store listing, and a **privacy policy at a public URL**.

For apps you plan to put on the store:

| What | Public or private | Why |
| --- | --- | --- |
| Source code | **Private** GitHub repo | Backup, history, and CI to build signed releases. A public copy makes it easy to clone your app and republish it. |
| Signing keystore, `google-services.json`, API keys | **Never in Git**, even private | If your upload key leaks, someone could sign updates. Keep it in a password manager, and use GitHub Actions secrets for CI. |
| Landing page + privacy policy | **Public** | Play requires the policy URL. The landing page is what you share on LinkedIn, and it gives recruiters something to see. |

**The pattern:** a private repo for the code, plus a small public page at `andy7204.github.io/<app>/` with screenshots, a "Get it on Google Play" badge, the privacy policy and a contact email. The portfolio card links to that page and the store listing. In interviews you can still show the code on screen.

**Before you upload**, check the current requirements in Play Console. As of the last check:
- A one-time $25 developer registration and identity verification.
- New personal developer accounts must run a closed test with a minimum number of testers for 14 days before production. Line up friends and classmates early.
- A recent target API level, plus a completed Data safety form describing what data the app collects.

**Jyotish Darpan specifically:** the prototype has your own birth date, time and place hard-coded as the sample chart. Keep the repo private, and switch the sample to a fictional person before any screenshot, landing page or store listing goes public.

---

## 5. Haunted README: launch for Halloween

Halloween is **Saturday, October 31**. A spooky dev tool launched in the week before it rides a wave of themed posts, and people are actively looking for fun things to share. After November 1 the same post is worth a fraction as much. **Target launch: Tuesday, October 27**, with follow-ups through Halloween.

### Timeline

| When | What |
| --- | --- |
| By Wed Oct 21 | Repo public, live demo working, README with a demo GIF. Run it on 3–5 famous repos and save the funniest outputs as images |
| Oct 22–26 | Make a 15–30 s screen recording (vertical for Threads/Instagram, horizontal for LinkedIn/X). Line up 5 friends to try it and comment on launch day |
| **Tue Oct 27**, morning IST | LinkedIn post + Threads + X thread |
| Tue Oct 27, ~7 pm IST (morning in the US) | Show HN, and r/programming or the subreddit that fits best |
| Wed Oct 28 | dev.to article: "How I built Haunted README" |
| Fri Oct 30 or Sat Oct 31 | "Happy Halloween" follow-up: the spookiest result a user sent you, plus a usage number (stars, runs) |

### Channel by channel

- **LinkedIn:** a hook line, 3 short lines on what it does, one line on how it's built, and a call to try it. Attach the video; put the link in the first comment. Reply to every comment in the first hour.
- **Threads:** casual and short. Lead with the video. Use one topic tag (e.g. *Programming*) instead of a hashtag pile. Post 2–3 times over the week with different outputs; Threads rewards conversation, so ask people to reply with their repo.
- **X:** a 4–6 post thread: video first, then the funniest outputs as images, then how it works, then the link.
- **Hacker News:** "Show HN: Haunted README – [what it does in under 10 words]". Plain title, no emoji. Post a first comment saying why you built it and how it works technically. HN loves the technical honesty.
- **Reddit:** read each subreddit's self-promotion rules first. Post as "I made this", engage in the comments, and don't cross-post the same text everywhere.
- **dev.to / Hashnode:** "How I built…" with the interesting technical decisions. Tag `#halloween` and `#showdev`.
- **Product Hunt:** optional. Launches go live at 12:01 am Pacific (12:31 pm IST) and need people upvoting that day.
- **GitHub:** topics (`halloween`, `readme`, `cli`, plus the language), a repo social preview image (Settings → Social preview), and a PR to an "awesome" list that fits.

**Exact post drafts:** share the repo with this session once it's on GitHub and Claude will write them from the real features and outputs. Generic drafts written before seeing the tool would undersell it.

---

## 6. Make your GitHub profile do the selling

Recruiters spend about 30 seconds on a GitHub profile.

1. **Pin 6 repos.** Today: unused-and-looking, dhruva, skyrealm, developer-portfolio, Machine_Learning_Projects, CelebalTechAssignments. Swap in Haunted README and the other new projects as they go public; your most fun and most finished work goes first.
2. **Fill the About box** of each pinned repo: a one-line description, the live URL under *Website*, and 3–6 topics.
3. **Add a profile README**: create a public repo named exactly `Andy7204`. Its README shows at the top of your profile:
   ```md
   ### Hi, I'm Anand 👋
   I build developer tools, data apps and games.

   - 💔 [Unused & Looking](https://andy7204.github.io/unused-and-looking/): swipe through your dead code like a dating app
   - 📈 [Dhruva](https://dhruva-andy7204.streamlit.app/): a self-updating paper-trading lab for Indian index strategies
   - ☁️ [Skyrealm](https://andy7204.github.io/skyrealm/): an idle kingdom-builder in one HTML file

   🌐 [Portfolio](https://andy7204.github.io/developer-portfolio/) · 💼 [LinkedIn](YOUR-LINKEDIN-URL)
   ```
4. **Every README** gets: what it does in one sentence, a screenshot or GIF, the live link, how to run it, and what you learned.
5. **Archive** the repos marked for it in section 1 (Settings → Danger Zone → Archive).

---

## 7. LinkedIn

### 7.1 Profile (before posting anything)

- **Headline:** `Software Engineer | Building developer tools, data apps and games | COEP Tech` (target role first)
- **About:** 3 short paragraphs: what you build, two projects with a number each, what you're looking for.
- **Featured:** the portfolio, Unused & Looking, Skyrealm and Dhruva as links.
- **Projects section:** each live project with its URL.
- **Custom URL:** set `linkedin.com/in/anand-panajkar` (or similar) under *Edit public profile & URL*, then add it to the portfolio and your GitHub profile.

### 7.2 Posting plan

Post Tuesday–Thursday, 8–10 am IST. Put the **link in the first comment**. Always attach an image, GIF or video. Reply to every comment in the first hour. **Cross-post the same project to Threads** in a shorter, more casual version.

| Week of | Post |
| --- | --- |
| Oct 19 | Unused & Looking (with the GIF) |
| **Oct 26** | **Haunted README launch (Tue Oct 27)**, Halloween follow-up on Fri Oct 30 |
| Nov 2 | Skyrealm: "I built a whole game in one HTML file" |
| Nov 9 | Dhruva: "my strategy lost to the index, so I killed it" |
| Nov 16 | Portfolio launch: "everything I've built, in one place" |
| Then weekly | One new Claude-built project per week (Git Obituary, Dungeons & Directories, Bug Smuggler, Premortem, Keystroke), then the Play Store apps when they're live |

**Your angle:** you ship a lot of small, fun, finished projects with AI as a collaborator. That's a story in itself. A post like "8 projects in 8 weeks, built with Claude: what worked and what didn't" will get attention, and it shows how you work, which is what hiring managers want to know.

### 7.3 Drafts, ready to edit

**Unused & Looking**

> Every codebase has lonely functions. Written once, never called again.
>
> So I built a dating app for them. 💔
>
> Unused & Looking scans JS/TS, Python, Go and Ruby, finds functions nobody calls, and gives each one a dating profile: an avatar, its "age" (days since git last touched it), and red flags like "has 5 parameters".
>
> 👈 Swipe left: it goes on a Breakup List you can paste into a cleanup PR
> 👉 Swipe right: it shows where the same logic already exists elsewhere
>
> The hard part wasn't the swiping. It was *not* flagging code that's actually used: JSX components, Next.js routes, Python decorators, Go interfaces. Every result gets a confidence score instead of a yes/no.
>
> Zero dependencies. The same analyser runs in your terminal (`npx unused-and-looking`) and in the browser.
>
> Try it on your repo and tell me what it got wrong. Link in the comments 👇
>
> #javascript #python #opensource #developertools

**Skyrealm**

> I built a whole game in a single HTML file. ☁️
>
> Skyrealm is a cozy idle kingdom-builder: tap a floating island for gold, build homes, farms, temples and wonders, and grow from a Tribal Camp to a Celestial Realm across six eras.
>
> Along the way: dragons, sky pirates and storms that make you choose between safe and risky, pirate raids to defend against, and rival realms to duel.
>
> No engine, no framework, no image files, no audio files. Every building is drawn in code on a canvas, and every sound is synthesized live with the Web Audio API.
>
> Play it on your phone in 10 seconds. Link in the comments 👇
>
> #gamedev #javascript #indiedev #webdev

**Dhruva**

> I built a stock-picking strategy. It beat the market in my backtest.
>
> Then I fixed my data errors and backtest bias, and it lost to simply buying Nifty 50.
>
> So I deleted it, and built something more honest.
>
> Dhruva is a public, paper-only forward test of three index strategies against holding Nifty 50, using official NSE Total Return data, ETF costs and Indian capital-gains tax. A GitHub Action runs every trading day: it fetches the data, replays each strategy and commits the result to an append-only log. A watchdog opens an issue if the data ever goes stale.
>
> What I learned:
> • Survivorship and look-ahead bias are easy to add and hard to notice
> • Write down your pass/fail test *before* you see the results
> • Automation you can't see failing is worse than none
>
> No real money and no advice. Just a lab. Live dashboard in the comments 👇
>
> #python #datascience #quant #githubactions

**Portfolio launch**

> Over the last few months I've shipped a dead-code finder on npm, a dashboard that updates itself every trading day, a browser game, and [N] more projects.
>
> They were scattered across GitHub, so I put them in one place, with live demos.
>
> I'm currently looking for [internship / full-time] roles in [software engineering]. If your team is hiring, or you know someone who is, I'd love to talk.
>
> Portfolio in the comments 👇
>
> #opentowork #softwareengineering #webdev

---

## 8. Get the most out of these projects

- **Resume bullets** (action + what + measurable result):
  - *Built and published Unused & Looking, a zero-dependency dead-code finder for 4 languages with an npm CLI and an in-browser web app; cut false positives with framework-aware rules and per-result confidence scores.*
  - *Automated a daily data pipeline with GitHub Actions that ingests official NSE index data, replays 3 strategies and appends to an immutable log, with a watchdog that raises issues on stale data.*
  - *Built Skyrealm, a canvas-rendered idle game in a single dependency-free HTML file with procedural art, synthesized audio, offline progress and YouTube Playables integration.*
  - Add one bullet per new project as it ships, and for the Play Store apps include installs or ratings once you have them.
- **Interview stories.** For each project, prepare: the problem, one hard decision and its trade-off, one bug you're proud of finding, and what you'd do next. The Dhruva "my strategy lost" story and the Unused & Looking false-positive work are both strong answers to "tell me about a challenge".
- **Be open about building with Claude.** Interviewers will ask. The strong answer shows judgment: what you decided, what you rejected, what you tested, and what you'd now be able to build without help. Section 9 gets you there.
- **Write once, post three times.** Each project becomes a LinkedIn post, a Threads/X post and a dev.to article.
- **Invite contributions.** Add 3–5 `good first issue`s to your most popular repos.
- **Watch the numbers.** *Insights → Traffic* on each repo shows visitors and where they came from. Do more of what works.

---

## 9. Learn to build them yourself

Rebuilding is the fastest way to own a project. Go in this order; each stage adds a skill the next one needs. Type the code yourself, and keep a short `LEARNINGS.md` in each repo.

### Stage 1: The web (1–2 weeks) → this portfolio
- **Learn:** HTML structure, CSS flexbox/grid, CSS variables, media queries, DOM events.
- **Exercise:** Delete `assets/js/app.js` and rewrite it from its comments alone. Then add a feature: a scroll progress bar, or a "copy email" button.
- **Resources:** MDN *Learn web development*; freeCodeCamp *Responsive Web Design*; CSS-Tricks guides to Flexbox and Grid.

### Stage 2: Canvas and game loops (2 weeks) → Skyrealm
- **Learn:** `requestAnimationFrame`, delta time, drawing with Canvas 2D, a simple particle system, saving state to `localStorage`, the Web Audio API.
- **Exercise:** Build a 100-line clicker: a circle you tap for gold, a "buy farm" button that adds gold per second, and a save that survives a reload. Then read how Skyrealm's `calc()` and `save()` do the same thing at scale.
- **Resources:** MDN *Canvas tutorial* and *Anatomy of a video game*; *Game Programming Patterns* by Robert Nystrom (free online), chapters "Game Loop" and "Update Method".

### Stage 3: Python data apps (1–2 weeks) → Cancer Cell Classifier
- **Learn:** pandas, a scikit-learn pipeline (`train_test_split` → `fit` → `predict` → metrics), `joblib`, Streamlit.
- **Exercise:** Retrain the model on `sklearn.datasets.load_breast_cancer` in under 50 lines, then build the Streamlit form with real feature names.
- **Resources:** Kaggle Learn *Intro to ML* and *Intermediate ML*; Streamlit *Get started*.

### Stage 4: Automation and reliability (2 weeks) → Dhruva
- **Learn:** GitHub Actions (cron, secrets, committing from a workflow), unit tests, idempotent pipelines, Docker basics.
- **Exercise:** Write a workflow that fetches one public dataset daily, appends a row to a CSV, commits it, and opens an issue if the fetch fails. That's Dhruva's skeleton in about 60 lines.
- **Resources:** GitHub Actions docs (*Quickstart*, then *Events that trigger workflows → schedule*); *Python Testing with pytest* by Brian Okken.

### Stage 5: Developer tools and CLIs (3–4 weeks) → Unused & Looking, then Haunted README / Git Obituary
- **Learn:** reading files and git history from code, tokenising source, Node CLIs (`bin` in `package.json`), publishing to npm.
- **Exercise:** Write a 100-line script that finds unused functions in one Python file: collect `def` names, collect every identifier used elsewhere, print the difference. Then handle decorators, then multiple files. Next, run `git log --format` from a script and print each file's last-touched date. That's the core of anything git-history-based, like Git Obituary.
- **Resources:** *Crafting Interpreters* by Robert Nystrom (free online), chapters on scanning; Node.js docs on CLI apps; Pro Git book (free), chapter "Git Internals".

### Stage 6: Mobile apps (4–6 weeks) → Unhooked and the astro app
- **Learn:** the framework your apps use (ask their Claude sessions which one), app lifecycle, local storage, signing a release build, Play Console.
- **Exercise:** Ship a tiny app (a counter, or a habit tracker) through Play's closed testing track before you ship Unhooked. Then you'll know the whole release process before it matters.
- **Resources:** Android Developers *Basics* course (Kotlin), or the Flutter / React Native docs if your apps use those; Play Console Help, *Prepare your app for release*.

### How to use Claude while learning
Ask it to **explain, quiz and review**, not to write the code: "Explain this function line by line", "Give me 5 questions to check I understand the game loop", "Review my version against the original: what did I miss?"

---

## 10. Checklist

- [ ] Merge the portfolio PR, turn on Pages, fill in the LinkedIn `TODO`
- [ ] Create the empty `skyrealm` repo → Claude pushes → turn on Pages
- [ ] Unused & Looking: Pages, npm publish, demo GIF
- [ ] Install `gh`, then publish Haunted README (**by Oct 21**), Git Obituary, Dungeons & Directories, Bug Smuggler, Premortem, Keystroke from their sessions
- [ ] Unhooked and Jyotish Darpan: private repos, landing pages with privacy policies, swap out your birth details
- [ ] Haunted README launch, **Tue Oct 27**
- [ ] Deploy the Cancer Cell Classifier (after the `st.rerun()` fix)
- [ ] Colab badges and results in Machine_Learning_Projects
- [ ] Pin 6 repos, fill About boxes, create the `Andy7204` profile README, archive old repos
- [ ] LinkedIn headline, About and Featured; then the weekly posts
- [ ] Start Stage 1 of the learning path
