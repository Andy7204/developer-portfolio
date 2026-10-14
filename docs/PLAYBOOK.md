# Portfolio playbook: ship, promote, learn

A plan for getting every project live, getting it seen, and understanding it well enough to rebuild it and talk about it in interviews.

Work top to bottom. Each step is small enough for one sitting.

---

## 1. Where every project stands

| Repo | Live today? | What's needed | Effort |
| --- | --- | --- | --- |
| **developer-portfolio** (this repo) | Not yet | Merge the PR, turn on Pages (step 2.1) | 5 min |
| **unused-and-looking** | Demo URL is in the README | Confirm Pages is on, publish to npm, record the GIF (see its `LAUNCH.md`) | 1 hour |
| **dhruva** | Yes, on Streamlit Community Cloud | Check the app wakes up; add a screenshot to the README | 15 min |
| **CelebalTechAssignments** (cancer classifier) | No | Deploy `streamlit_app.py`; one-line fix first | 30 min |
| **RAG_QnA_Chatbot** | No | Add a document upload/ingest step, then deploy to Hugging Face Spaces | 2–3 hours |
| **FER_with_TrfLrn** | No | Trained weights aren't in the repo; publish them to the Hugging Face Hub, add a Gradio app | 3–4 hours |
| **Machine_Learning_Projects** | Notebooks only | Add "Open in Colab" badges and results to the README | 45 min |
| **CS50W-Projects**, **DjangoApp** | No | Optional. Fine as "learning" repos | – |
| **wofwebsite**, **learning**, **github-pages-with-jekyll** | – | Archive them so they don't dilute your profile | 2 min |

---

## 2. Ship each project

### 2.1 This portfolio

1. Merge the pull request into `master`.
2. Open **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The **Deploy to GitHub Pages** workflow runs on the next push (or run it by hand from the **Actions** tab). The site appears at `https://andy7204.github.io/developer-portfolio/`.
4. In `index.html`, search for `TODO` and fill in your LinkedIn URL and anything else you want to change.

**Want the shorter URL `andy7204.github.io`?** Your `Andy7204.github.io` repo currently holds an empty template. Copy `index.html` and `assets/` from this repo into it and push. GitHub serves that repo at the root domain. Your `unused-and-looking` demo keeps working at `/unused-and-looking/` either way.

### 2.2 Unused & Looking

Everything is in that repo's `LAUNCH.md`. In short:

1. **Settings → Pages → Source: GitHub Actions**, then confirm `https://andy7204.github.io/unused-and-looking/` loads.
2. `npm login`, then `npm publish`. Test with `npx unused-and-looking --demo` from an empty folder.
3. Record the 10–15 second demo GIF from the shot list and put it in the README. **The GIF does more for you than anything else on this list**: it's what people stop scrolling for.

### 2.3 Dhruva

It's already live. Open the app once so it's awake before you share it; Community Cloud puts apps to sleep after a few days without visitors. Add a screenshot of the dashboard near the top of the README.

### 2.4 Cancer Cell Classifier (CelebalTechAssignments)

1. Fix one line first: `st.experimental_rerun()` was removed in recent Streamlit versions. Change it to `st.rerun()`.
2. Go to https://share.streamlit.io, choose **Create app → From GitHub**, pick the repo, branch `main`, file `streamlit_app.py`.
3. Pick a custom subdomain, e.g. `cancer-classifier-andy7204`.
4. Put the URL into the repo's About box (gear icon on the repo page) and into this portfolio (the `TODO` on the Cancer Cell Classifier card).

Nice upgrade: replace "Feature 1…Feature N" with the real feature names and add a "load a sample" button, so a visitor can get a prediction in one click.

### 2.5 RAG Q&A Chatbot

As written, the app only reads from a local `./rag_db` folder. On a fresh server that folder is empty, so every answer would be empty too. Before deploying:

1. Add `st.file_uploader` (PDF/TXT) to the app. On upload: split the text into ~500-character chunks, embed them with the MiniLM model already in the app, and `collection.add(...)` them.
2. Add `transformers`, `torch` and `pypdf` to `requirements.txt`. Remove `openai` and `langchain` if they're no longer used.
3. Show the retrieved passages under each answer (an `st.expander`). It proves the answer is grounded, and it's the first thing a technical viewer looks for.
4. **Deploy on Hugging Face Spaces** (https://huggingface.co/new-space → SDK: Streamlit, hardware: free CPU). FLAN-T5 plus the embedder need more memory than Streamlit Cloud's free tier comfortably gives you.
5. Write a real README: a diagram (question → embed → top-3 passages → FLAN-T5 → answer), a screenshot and the live link.

### 2.6 Facial Emotion Recognition

The README lists `vgg19.h5` and `resnet_model.h5`, but they aren't in the repo (too large for Git). To make a live demo:

1. Re-run the notebook on Kaggle or Colab (GPU) and save the best model.
2. Upload it to the Hugging Face Hub: `huggingface-cli upload Andy7204/fer-resnet50 resnet_model.h5`.
3. Make a new **Gradio** Space with an `app.py` that downloads the model with `hf_hub_download`, runs the existing `detect_face` and returns the label with its confidence. Gradio gives you webcam and image upload for free.
4. Be upfront about accuracy: ~52% across 6 classes. That's normal for FER2013 (human accuracy is ~65%). Saying so is a sign of maturity, not weakness.

### 2.7 Machine_Learning_Projects

Notebooks are hard to browse on GitHub. In the README, for each project add:
- an **Open in Colab** badge: `[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Andy7204/Machine_Learning_Projects/blob/main/<notebook>.ipynb)`
- one line on the dataset, one on the approach, and **the result as a number** (accuracy, F1, RMSE)
- one chart image

---

## 3. Make your GitHub profile do the selling

Recruiters spend about 30 seconds on a GitHub profile. Make those seconds count:

1. **Pin 6 repos**, in this order: unused-and-looking, dhruva, RAG_QnA_Chatbot, FER_with_TrfLrn, developer-portfolio, Machine_Learning_Projects.
2. **Fill the About box** of each pinned repo: a one-line description, the live URL in *Website*, and 3–6 topics.
3. **Add a profile README**: create a public repo named exactly `Andy7204`. Its README shows at the top of your profile. Keep it short:
   ```md
   ### Hi, I'm Anand 👋
   I build developer tools, ML models and data apps.

   - 💔 [Unused & Looking](https://andy7204.github.io/unused-and-looking/): swipe through your dead code like a dating app
   - 📈 [Dhruva](https://dhruva-andy7204.streamlit.app/): a self-updating paper-trading lab for Indian index strategies
   - 🧠 [RAG Q&A Chatbot](https://github.com/Andy7204/RAG_QnA_Chatbot): ask questions about your own documents

   🌐 [Portfolio](https://andy7204.github.io/developer-portfolio/) · 💼 [LinkedIn](YOUR-LINKEDIN-URL)
   ```
4. **Every README** gets: what it does in one sentence, a screenshot or GIF, the live link, how to run it, and what you learned.
5. **Archive** wofwebsite, learning and github-pages-with-jekyll (Settings → Danger Zone → Archive).

---

## 4. LinkedIn

### 4.1 Profile (do this before posting anything)

- **Headline:** `Software & ML Engineer | Building developer tools and AI apps | COEP Tech` (put your target role first)
- **About:** 3 short paragraphs. What you build. Two projects, each with a number. What you're looking for.
- **Featured:** add the portfolio, Unused & Looking and Dhruva as links. LinkedIn pulls in the preview image.
- **Projects section:** add each live project with its URL, and link it to your university.
- **Custom URL:** set `linkedin.com/in/anand-panajkar` (or similar) under *Edit public profile & URL*, then put it in this portfolio and your GitHub profile.

### 4.2 Posting plan: one project a week

Post Tuesday–Thursday, 8–10 am IST. Put the **link in the first comment**, not the post (LinkedIn shows posts with outbound links to fewer people). Attach an image or GIF every time. Reply to every comment in the first hour.

| Week | Post |
| --- | --- |
| 1 | Unused & Looking (with the GIF) |
| 2 | Dhruva: "my strategy lost to the index, so I killed it" |
| 3 | RAG chatbot, once it's live |
| 4 | Portfolio launch: "everything I've built, in one place" |
| 5 | FER: what 52% accuracy taught me |
| 6+ | Lessons learned, a bug story, a "how it works" carousel per project |

### 4.3 Drafts, ready to edit

Rewrite these in your own voice. They're a starting point, not a script.

**Week 1: Unused & Looking**

> Every codebase has lonely functions. Written once, never called again.
>
> So I built a dating app for them. 💔
>
> Unused & Looking scans JS/TS, Python, Go and Ruby, finds functions nobody calls, and gives each one a dating profile: an avatar, its "age" (days since git last touched it), and red flags like "has 5 parameters".
>
> 👈 Swipe left: it goes on a Breakup List you can paste into a cleanup PR
> 👉 Swipe right: it shows where the same logic already exists elsewhere
>
> The hard part wasn't the swiping. It was *not* flagging code that's actually used: JSX components, Next.js routes, Python decorators, Go interfaces, names built at runtime. Every result gets a confidence score instead of a yes/no.
>
> Zero dependencies. The same analyser runs in your terminal (`npx unused-and-looking`) and in the browser.
>
> Try it on your own repo and tell me what it got wrong. Link in the comments 👇
>
> #javascript #python #opensource #developertools

**Week 2: Dhruva**

> I built a stock-picking strategy. It beat the market in my backtest.
>
> Then I fixed my data errors and backtest bias, and it lost to simply buying Nifty 50.
>
> So I deleted it, and built something more honest instead.
>
> Dhruva is a public, paper-only forward test of three index strategies against holding Nifty 50, using official NSE Total Return data, ETF costs and Indian capital-gains tax. A GitHub Action runs every trading day: it fetches the data, replays each strategy, and commits the result to an append-only log. A watchdog opens an issue if the data ever goes stale.
>
> What I learned:
> • Survivorship bias and look-ahead bias are easy to add and hard to notice
> • Write down your pass/fail test *before* you see the results
> • Automation you can't see failing is worse than none
>
> No real money and no advice. Just a lab. Live dashboard in the comments 👇
>
> #python #datascience #quant #githubactions

**Week 3: RAG chatbot**

> LLMs are confident. Not always right.
>
> Retrieval-augmented generation (RAG) is one fix: before answering, find the passages that matter and make the model answer from those.
>
> I built a small one, end to end:
> 1️⃣ Split documents into chunks
> 2️⃣ Embed them with MiniLM and store them in ChromaDB
> 3️⃣ Embed the question, fetch the 3 closest chunks
> 4️⃣ Give them to FLAN-T5 to write the answer, and show the sources
>
> Fully open-source models, runs on a free CPU. Upload a PDF and ask it anything. Link in the comments 👇
>
> #AI #LLM #RAG #machinelearning #python

**Week 4: Portfolio launch**

> Over the last few years I've built a CLI on npm, a dashboard that updates itself every trading day, a RAG chatbot and a few computer-vision models.
>
> They were scattered across GitHub, so I put them in one place, with live demos where possible.
>
> Built with plain HTML, CSS and JavaScript. No framework, loads fast, dark mode included.
>
> I'm currently looking for [internship / full-time] roles in [software / ML engineering]. If your team is hiring, or you know someone who is, I'd love to talk.
>
> Portfolio in the comments 👇
>
> #opentowork #softwareengineering #machinelearning

---

## 5. Get the most out of these projects

- **Resume bullets** (action + what + measurable result):
  - *Built and published Unused & Looking, a zero-dependency dead-code finder for 4 languages with an npm CLI and an in-browser web app; cut false positives with framework-aware rules and per-result confidence scores.*
  - *Automated a daily data pipeline with GitHub Actions that ingests official NSE index data, replays 3 strategies and appends to an immutable log, with a watchdog that raises issues on stale data.*
  - *Built a RAG question-answering app (MiniLM embeddings, ChromaDB, FLAN-T5) deployed on Hugging Face Spaces.*
  - *Fine-tuned VGG19 and ResNet50 on a class-balanced FER2013 for 6-class emotion recognition (52% validation accuracy).*
- **Interview stories.** For each project, prepare: the problem, one hard decision and its trade-off, one bug you're proud of finding, and what you'd do next. The Dhruva "my strategy lost" story and the Unused & Looking false-positive work are both excellent answers to "tell me about a challenge".
- **Write once, post three times.** Each project becomes a LinkedIn post, a dev.to/Hashnode article ("How I built…") and a short X/Reddit post. `unused-and-looking/LAUNCH.md` already has Show HN, Reddit and dev.to drafts.
- **Invite contributions.** Add 3–5 issues labelled `good first issue` to Unused & Looking (new language support, new framework rules). Contributors bring stars and give you collaboration experience to talk about.
- **Watch the numbers.** GitHub *Insights → Traffic* shows visitors and referrers for each repo. Note which posts send people, and do more of that.

---

## 6. Learn to build them yourself

Rebuilding is the fastest way to own a project. Go in this order. Each one adds a skill the next one needs. Type the code yourself instead of copying it, and keep a short `LEARNINGS.md` in each repo.

### Stage 1: The web (1–2 weeks) → this portfolio
- **Learn:** HTML structure, CSS flexbox/grid, CSS variables, media queries, DOM events.
- **Exercise:** Delete `assets/js/app.js` and write it again from the comments alone. Then add one feature: a "copy email" button or a scroll progress bar.
- **Resources:** MDN's *Learn web development* track; freeCodeCamp *Responsive Web Design*; CSS-Tricks guides to Flexbox and Grid.

### Stage 2: Python data apps (1–2 weeks) → Cancer Cell Classifier
- **Learn:** pandas, a scikit-learn pipeline (`train_test_split` → `fit` → `predict` → metrics), `joblib`, Streamlit.
- **Exercise:** Retrain the model from the Breast Cancer Wisconsin dataset (`sklearn.datasets.load_breast_cancer`) in under 50 lines, then build the Streamlit form with real feature names.
- **Resources:** Kaggle Learn: *Intro to ML* and *Intermediate ML*; Streamlit's *Get started* tutorial.

### Stage 3: Deep learning (3–4 weeks) → ML projects, then FER
- **Learn:** neural nets, CNNs, transfer learning, overfitting and early stopping, confusion matrices.
- **Exercise:** Train a small CNN on FER2013 from scratch first, then swap in a pretrained ResNet50 and compare. Add class weights and data augmentation. Can you beat 52%?
- **Resources:** fast.ai *Practical Deep Learning for Coders* (free); Andrew Ng's *Deep Learning Specialization*; TensorFlow's *Transfer learning* tutorial.

### Stage 4: LLM apps (2–3 weeks) → RAG chatbot
- **Learn:** embeddings and cosine similarity, chunking, vector databases, prompt design, evaluation.
- **Exercise:** Build RAG with no framework first: NumPy for similarity, a list for storage. Then swap in ChromaDB. Then write 20 question/answer pairs and measure how often the right chunk lands in the top 3.
- **Resources:** Hugging Face *NLP Course*; ChromaDB docs; DeepLearning.AI short courses on RAG and embeddings (free).

### Stage 5: Automation and reliability (2 weeks) → Dhruva
- **Learn:** GitHub Actions (cron schedules, secrets, committing from a workflow), unit tests with `unittest`/`pytest`, idempotent pipelines, Docker basics.
- **Exercise:** Write a workflow that fetches one public dataset daily, appends a row to a CSV, commits it, and opens an issue if the fetch fails. That's Dhruva's skeleton in about 60 lines.
- **Resources:** GitHub Actions docs (*Quickstart*, then *Events that trigger workflows → schedule*); *Python Testing with pytest* by Brian Okken.

### Stage 6: Developer tools (3–4 weeks) → Unused & Looking
- **Learn:** tokenising source code, building a symbol table, a call graph, Node CLIs (`bin` in `package.json`), publishing to npm.
- **Exercise:** Write a 100-line script that finds unused functions in a single Python file: collect `def` names, collect every identifier used elsewhere, print the difference. Then handle decorators. Then multiple files. You'll rediscover every problem the real tool solves.
- **Resources:** *Crafting Interpreters* by Robert Nystrom (free online), chapters on scanning; Node.js docs on CLI apps; npm docs on `npm publish`.

### How to use Claude while learning
Ask it to **explain, quiz and review**, not to write the code: "Explain what this function does line by line", "Give me 5 questions to check I understand embeddings", "Review my version against the original and tell me what I missed".

---

## 7. Checklist

- [ ] Merge the portfolio PR and turn on Pages
- [ ] Fill in the `TODO`s (LinkedIn URL, live app URLs)
- [ ] Unused & Looking: Pages on, npm published, demo GIF recorded
- [ ] Deploy the Cancer Cell Classifier (after the `st.rerun()` fix)
- [ ] RAG chatbot: add upload, deploy to HF Spaces
- [ ] FER: publish weights, Gradio Space
- [ ] Colab badges and results in Machine_Learning_Projects
- [ ] Pin 6 repos, fill About boxes, create the `Andy7204` profile README
- [ ] Archive 3 old repos
- [ ] Update the LinkedIn headline, About and Featured
- [ ] Weeks 1–5 of LinkedIn posts
- [ ] Start Stage 1 of the learning path
