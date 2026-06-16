import ScrollRail from '@/components/ScrollRail';
import SparkCanvas from '@/components/SparkCanvas';
import Ticker from '@/components/Ticker';
import GsapAnimations from '@/components/GsapAnimations';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <>
      <ScrollRail />
      <div className="bar" aria-hidden="true"><i id="barFill"></i></div>

      <div className="shell">
        <nav>
          <div className="nav-in">
            <a className="brand" href="#top">M<span>/</span>LEAHY</a>
            <ul className="nav-links">
              <li><a href="#work">Build record</a></li>
              <li><a href="#materials">Materials</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* HERO */}
        <header className="hero" id="top">
          <SparkCanvas />
          <div className="hero-grid" />
          <div className="wrap hero-in">
            <p className="eyebrow" id="eyebrow">Frontend developer — Barstow, CA</p>
            <h1 aria-label="Built to spec. Shipped to production.">
              <span className="h-line"><span className="h-inner">Built to spec.</span></span>
              <span className="h-line"><span className="h-inner">Shipped to</span></span>
              <span className="h-line"><span className="h-inner"><em>production.</em></span></span>
            </h1>
            <p className="hero-sub" id="heroSub">
              I came to software from <strong>construction and industrial automation</strong>
              , fields where you learn fast that every system has a root cause worth finding.
              Now I build React and Next.js products the same way: measured twice, deployed live.
            </p>
            <div className="hero-cta" id="heroCta">
              <a className="btn btn-fill" href="#work">Inspect the work</a>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>
          </div>
          <div className="hero-spec">
            <b>SPEC</b> REACT / NEXT.JS / TS<br />
            <b>TOLERANCE</b> ZERO UNHANDLED STATES<br />
            <b>STATUS</b> OPEN TO WORK
          </div>
        </header>

        {/* TICKER */}
        <Ticker />

        {/* PROJECTS */}
        <section id="work">
          <div className="wrap">
            <div className="sec-head rv">
              <p className="eyebrow">Work orders</p>
              <h2>The build record</h2>
              <p>Every job below is deployed and live, not a tutorial, not a mockup. Open them. Break them if you can.</p>
            </div>

            <article className="order rv">
              <div className="order-tab">
                <div className="order-no">JOB NO.<b>WO-004</b></div>
                <div className="stamp">● LIVE</div>
              </div>
              <div className="order-body">
                <h3>Vestige</h3>
                <p className="order-role">Founder / sole builder, decision archaeology for codebases</p>
                <p>A Git history analysis tool that reads repositories instead of measuring them.
                It reconstructs the <em>why</em> behind undocumented changes, tiered High / Medium / Low
                confidence findings, inference flags, and blast-radius scoping, so the first answer a
                new engineer gets isn&apos;t &ldquo;ask whoever wrote it.&rdquo;</p>
                <div className="spec-row">
                  <span className="spec">Next.js</span>
                  <span className="spec">TypeScript</span>
                  <span className="spec">RAG pipeline</span>
                  <span className="spec">Claude API</span>
                  <span className="spec">GSAP</span>
                </div>
                <div className="order-links">
                  <a href="https://vestige-azure.vercel.app" target="_blank" rel="noopener">Visit site ↗</a>
                  <a href="https://github.com/mleahy79/vestige" target="_blank" rel="noopener">Source ↗</a>
                </div>
              </div>
            </article>

            <article className="order rv">
              <div className="order-tab">
                <div className="order-no">JOB NO.<b>WO-003</b></div>
                <div className="stamp">● LIVE</div>
              </div>
              <div className="order-body">
                <h3>Summarist</h3>
                <p className="order-role">Full-stack build, subscription book-summary platform</p>
                <p>A complete Blinkist-class product: Firebase auth, Redux Toolkit state, Stripe
                subscriptions with tier detection, audio player, skeleton loading on every page.
                The whole revenue loop works — sign up, subscribe, consume content.</p>
                <div className="spec-row">
                  <span className="spec">Next.js App Router</span>
                  <span className="spec">TypeScript</span>
                  <span className="spec">Firebase</span>
                  <span className="spec">Redux Toolkit</span>
                  <span className="spec">Stripe</span>
                </div>
                <div className="order-links">
                  <a href="https://summarist-coral.vercel.app" target="_blank" rel="noopener">Visit site ↗</a>
                  <a href="https://github.com/mleahy79/summarist" target="_blank" rel="noopener">Source ↗</a>
                </div>
              </div>
            </article>

            <article className="order rv">
              <div className="order-tab">
                <div className="order-no">JOB NO.<b>WO-002</b></div>
                <div className="stamp">● LIVE</div>
              </div>
              <div className="order-body">
                <h3>SustainRx</h3>
                <p className="order-role">Solo build, codebase health diagnostics</p>
                <p>Point it at a repository and it writes the chart: a diagnostic read of codebase
                health behind a GitHub OAuth gate, with hard cost controls, token caps and
                concurrency limits, because shipping an AI product means engineering the bill, too.</p>
                <div className="spec-row">
                  <span className="spec">React</span>
                  <span className="spec">GitHub OAuth</span>
                  <span className="spec">Serverless</span>
                  <span className="spec">LLM cost controls</span>
                </div>
                <div className="order-links">
                  <a href="https://git-story-nine.vercel.app" target="_blank" rel="noopener">Visit site ↗</a>
                  <a href="https://github.com/mleahy79/gitstory" target="_blank" rel="noopener">Source ↗</a>
                </div>
              </div>
            </article>

            <article className="order rv">
              <div className="order-tab">
                <div className="order-no">JOB NO.<b>WO-001</b></div>
                <div className="stamp amber">● CONCEPT</div>
              </div>
              <div className="order-body">
                <h3>CareerSwift Redesign</h3>
                <p className="order-role">Unsolicited redesign, shipped before being asked</p>
                <p>A speculative landing-page rebuild for a real startup, matching their brand voice
                their own website was missing. Built, deployed, and sent straight to the founder
                because showing value beats describing it.</p>
                <div className="spec-row">
                  <span className="spec">React</span>
                  <span className="spec">TypeScript</span>
                  <span className="spec">Vite</span>
                  <span className="spec">Tailwind</span>
                  <span className="spec">GitHub Pages CI</span>
                </div>
                <div className="order-links">
                  <a href="https://mleahy79.github.io/careerswift-project" target="_blank" rel="noopener">Visit site ↗</a>
                  <a href="https://github.com/mleahy79" target="_blank" rel="noopener">Source ↗</a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* MATERIALS */}
        <section id="materials" style={{ background: 'var(--gunmetal)', borderTop: '1px solid var(--seam)', borderBottom: '1px solid var(--seam)' }}>
          <div className="wrap">
            <div className="sec-head rv">
              <p className="eyebrow">Materials &amp; methods</p>
              <h2>What I build with</h2>
              <p>The same rule as the fabrication shop: know your materials, or they&apos;ll surprise you on install day.</p>
            </div>
            <div className="mat-grid rv" id="matGrid">
              <div className="mat"><b>React</b><span>Component systems</span></div>
              <div className="mat"><b>Next.js</b><span>App Router / SSR</span></div>
              <div className="mat"><b>TypeScript</b><span>Typed contracts</span></div>
              <div className="mat"><b>JavaScript</b><span>Logic / DOM manipulation</span></div>
              <div className="mat"><b>Firebase</b><span>Auth / Firestore</span></div>
              <div className="mat"><b>Redux Toolkit</b><span>State management</span></div>
              <div className="mat"><b>Stripe</b><span>Payments / tiers</span></div>
              <div className="mat"><b>Tailwind</b><span>Design systems</span></div>
              <div className="mat"><b>GSAP</b><span>Motion / ScrollTrigger</span></div>
              <div className="mat"><b>Git</b><span>Multi-remote workflows</span></div>
              <div className="mat"><b>REST APIs</b><span>Integration / cost control</span></div>
              <div className="mat"><b>Vercel</b><span>CI / deployment</span></div>
              <div className="mat"><b>Jest</b><span>Testing</span></div>
              <div className="mat"><b>CSS3</b><span>Styling</span></div>
              <div className="mat"><b>HTML5</b><span>Markup</span></div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="wrap">
            <div className="sec-head rv">
              <p className="eyebrow">Background</p>
              <h2>From the trades to the terminal</h2>
            </div>
            <div className="about-grid">
              <div className="rv">
                <p>Before software, I built things you could stand on. <strong>Construction, tile and
                granite fabrication, industrial automation and maintenance</strong>, work where a
                measurement error doesn&apos;t throw a console warning, it costs material and time.</p>
                <p>That background didn&apos;t get left behind; it became the method. I trace problems to
                root causes instead of patching symptoms. I check the wiring before blaming the
                component. I treat a messy commit history the way I&apos;d treat an old job site as
                evidence of how the thing was really built.</p>
                <p>Trained at <strong>FES Institute</strong>, now shipping production React with live
                users, live payments, and live consequences. Off the clock: composing in GarageBand,
                drawing pixel-art sprites for a Python space shooter, and riding motorcycles through
                the desert.</p>
              </div>
              <div className="pull rv">
                &ldquo;Every system has a root cause worth finding.&rdquo;
                <small>The rule that transferred from automation to software</small>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="wrap rv">
            <p className="eyebrow">Next job</p>
            <h2>Your team needs a builder.<br /><em>I&apos;m taking work orders.</em></h2>
            <p style={{ color: 'var(--dust)', maxWidth: '34rem', marginTop: '1.2rem' }}>
              Looking for a frontend role where shipped products count for more than years on a résumé.
              If that&apos;s your team, let&apos;s talk.
            </p>
            <div className="contact-links">
              <a className="btn btn-fill" href="mailto:mitchellleahy046@gmail.com">Email me</a>
              <a className="btn btn-ghost" href="https://www.linkedin.com/in/mitchell-leahy-6aa7093b8" target="_blank" rel="noopener">LinkedIn</a>
              <a className="btn btn-ghost" href="https://github.com/mleahy79" target="_blank" rel="noopener">GitHub</a>
            </div>
          </div>
        </section>

        <footer>
          <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem', width: '100%' }}>
            <span>© 2026 MITCHELL LEAHY</span>
            <span>MEASURED TWICE · DEPLOYED ONCE</span>
          </div>
        </footer>
      </div>

      <GsapAnimations />
      <ChatWidget />
    </>
  );
}
