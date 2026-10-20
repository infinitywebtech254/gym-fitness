import React, { useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Dumbbell,
  Flame,
  HeartPulse,
  Clock3,
  MapPin,
  Phone,
  Mail,
  Check,
  CalendarDays,
  Users,
  Zap,
  ShieldCheck,
  MessageCircle,
  Share2,
  Globe
} from 'lucide-react';

const PHONE = '0792356421',
  PHONE_LINK = 'tel:0792356421',
  WA = 'https://wa.me/254792356421';

// Custom SVG Social Icons to prevent lucide-react brand icon export errors
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const services = [
  ['Strength Training', 'Build strength with a plan that grows with you.', Dumbbell],
  ['Personal Training', 'One-on-one coaching tailored to your goals.', Users],
  ['Group Fitness Classes', 'Train together. Push further. Stay consistent.', Flame],
  ['Cardio & Conditioning', 'Improve endurance, stamina and overall fitness.', HeartPulse],
  ['Weight Management', 'Build sustainable habits with practical guidance.', Zap],
  ['Mobility & Recovery', 'Move better and recover smarter between sessions.', ShieldCheck]
];

const plans = [
  {
    name: 'STARTER',
    price: '3,000',
    desc: 'For building a consistent routine.',
    features: ['Gym floor access', 'Fitness orientation', 'Locker room access']
  },
  {
    name: 'ALL ACCESS',
    price: '5,000',
    desc: 'For members ready to level up.',
    features: [
      'All Starter benefits',
      'Group fitness classes',
      'Monthly progress check-in',
      'Flexible training hours'
    ],
    featured: true
  },
  {
    name: 'COACHED',
    price: '8,500',
    desc: 'Extra guidance and accountability.',
    features: [
      'All Access benefits',
      'Personal training sessions',
      'Individual goal plan',
      'Progress reviews'
    ]
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false),
    [servicesOpen, setServicesOpen] = useState(false),
    [formSent, setFormSent] = useState(false),
    [active, setActive] = useState('Home');
  const [form, setForm] = useState({ name: '', phone: '', interest: 'Gym membership', message: '' });

  const go = (id, label = id) => {
    setActive(label);
    setMenuOpen(false);
    setServicesOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const submit = e => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="site">
      <div className="topbar">
        <div className="container topinner">
          <a href={PHONE_LINK}>
            <Phone size={13} />
            {PHONE}
          </a>
          <span>
            <MapPin size={13} /> Train with purpose. Every day.
          </span>
          <span>
            <Clock3 size={13} /> Mon–Sat · 5:00 AM–10:00 PM
          </span>
        </div>
      </div>
      <header className="header">
        <div className="container navwrap">
          <button className="brand" onClick={() => go('home', 'Home')}>
            <span className="brandmark">
              <Dumbbell />
            </span>
            <span>
              <b>
                IRON<span>FORGE</span>
              </b>
              <small>FITNESS CLUB</small>
            </span>
          </button>
          <button
            className="mobiletoggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'nav open' : 'nav'}>
            <button
              className={active === 'Home' ? 'navitem active' : 'navitem'}
              onClick={() => go('home', 'Home')}
            >
              Home
            </button>
            <div className="dropdown">
              <button className="navitem" onClick={() => setServicesOpen(!servicesOpen)}>
                Services <ChevronDown size={15} />
              </button>
              {servicesOpen && (
                <div className="dropmenu">
                  <b>TRAIN YOUR WAY</b>
                  <small>OUR SERVICES</small>
                  {services.map(([title, , Icon]) => (
                    <button key={title} onClick={() => go('services', 'Services')}>
                      <Icon size={16} />
                      {title}
                      <ArrowUpRight size={14} />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="navitem" onClick={() => go('about', 'About Us')}>
              About Us
            </button>
            <button className="navitem" onClick={() => go('membership', 'Membership')}>
              Membership
            </button>
            <button className="navitem" onClick={() => go('contact', 'Contact Us')}>
              Contact Us
            </button>
            <button className="navcta" onClick={() => go('contact', 'Contact Us')}>
              JOIN THE GYM <ArrowUpRight size={15} />
            </button>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="heroimg" />
          <div className="herooverlay" />
          <div className="container herocontent">
            <div className="eyebrow">
              <i /> YOUR WORK. YOUR POWER. YOUR PROGRESS.
            </div>
            <h1>
              BUILT BY
              <br />
              DISCIPLINE.
              <br />
              DEFINED BY
              <br />
              <em>STRENGTH.</em>
            </h1>
            <p>
              A space to challenge your limits, build lasting habits, and become stronger — one
              session at a time.
            </p>
            <div className="actions">
              <button className="btn red" onClick={() => go('membership', 'Membership')}>
                EXPLORE MEMBERSHIP <ArrowRight size={17} />
              </button>
              <button className="btn ghost" onClick={() => go('services', 'Services')}>
                EXPLORE SERVICES <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="proof">
              <div>
                <b>01</b>
                <span>TRAIN WITH PURPOSE</span>
              </div>
              <div>
                <b>02</b>
                <span>SHOW UP CONSISTENTLY</span>
              </div>
              <div>
                <b>03</b>
                <span>OWN YOUR PROGRESS</span>
              </div>
            </div>
          </div>
          <div className="stamp">
            <small>NO EXCUSES</small>
            <b>
              JUST
              <br />
              PROGRESS
            </b>
            <span>IRONFORGE FITNESS</span>
          </div>
          <div className="vertical">
            STRENGTH IS BUILT HERE — MADE FOR YOUR NEXT LEVEL
          </div>
        </section>
        <div className="ticker">
          <div>
            {[
              'STRENGTH',
              'DISCIPLINE',
              'CONSISTENCY',
              'PROGRESS',
              'STRENGTH',
              'DISCIPLINE',
              'CONSISTENCY',
              'PROGRESS'
            ].map((x, i) => (
              <span key={i}>
                {x}
                <b>✳</b>
              </span>
            ))}
          </div>
        </div>
        <section className="intro section" id="about">
          <div className="container introgrid">
            <div>
              <small className="index">01 / WHO WE ARE</small>
              <div className="outline">
                FORGE
                <br />
                YOURSELF.
              </div>
            </div>
            <div className="introcopy">
              <small className="redtext">MORE THAN A WORKOUT</small>
              <h2>
                YOUR NEXT LEVEL
                <br />
                STARTS <em>HERE.</em>
              </h2>
              <p>
                IronForge Fitness is built for people who want to feel stronger, move better and
                show up for themselves. Whether you are taking your first step or chasing a new
                personal best, we give you the space and support to keep going.
              </p>
              <button className="textlink" onClick={() => go('services', 'Services')}>
                FIND YOUR TRAINING STYLE <ArrowRight size={17} />
              </button>
              <div className="stats">
                <div>
                  <b>01</b>
                  <span>YOUR GOALS</span>
                </div>
                <div>
                  <b>100%</b>
                  <span>YOUR EFFORT</span>
                </div>
                <div>
                  <b>EVERY DAY</b>
                  <span>YOUR CHOICE</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services section" id="services">
          <div className="container">
            <div className="sectionhead">
              <div>
                <small className="index">02 / WHAT WE DO</small>
                <h2>
                  FIND YOUR
                  <br />
                  <em>STRONG.</em>
                </h2>
              </div>
              <p>
                Different goals. Different starting points. One place to work towards the strongest
                version of you.
              </p>
            </div>
            <div className="servicegrid">
              {services.map(([title, desc, Icon], i) => (
                <article className="servicecard" key={title}>
                  <div className="servicetop">
                    <small>0{i + 1} / SERVICE</small>
                    <Icon size={27} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <button
                    onClick={() => {
                      setForm(f => ({ ...f, interest: title }));
                      go('contact', 'Contact Us');
                    }}
                  >
                    ENQUIRE <ArrowUpRight size={15} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="feature">
          <div className="featureimg" />
          <div className="container featurecopy">
            <small className="index">03 / THE IRONFORGE MINDSET</small>
            <h2>
              NO SHORTCUTS.
              <br />
              <em>JUST WORK.</em>
            </h2>
            <p>
              Real progress comes from showing up, putting in the work, and getting back to it
              tomorrow.
            </p>
            <button className="btn red" onClick={() => go('membership', 'Membership')}>
              FIND YOUR PLAN <ArrowRight size={16} />
            </button>
          </div>
        </section>
        <section className="membership section" id="membership">
          <div className="container">
            <div className="sectionhead">
              <div>
                <small className="index">04 / MEMBERSHIP</small>
                <h2>
                  MAKE ROOM
                  <br />
                  FOR <em>PROGRESS.</em>
                </h2>
              </div>
              <p>
                Choose a starting point. Build your routine. Contact us to confirm current
                availability and membership details.
              </p>
            </div>
            <div className="plangrid">
              {plans.map(p => (
                <article key={p.name} className={p.featured ? 'plan featured' : 'plan'}>
                  {p.featured && <span className="popular">MOST POPULAR</span>}
                  <b className="planname">{p.name}</b>
                  <p>{p.desc}</p>
                  <div className="price">
                    <small>KES</small> {p.price}
                    <span>/ month</span>
                  </div>
                  <ul>
                    {p.features.map(f => (
                      <li key={f}>
                        <Check size={15} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={p.featured ? 'btn red full' : 'btn outline full'}
                    onClick={() => {
                      setForm(f => ({ ...f, interest: p.name + ' membership' }));
                      go('contact', 'Contact Us');
                    }}
                  >
                    ENQUIRE NOW <ArrowRight size={15} />
                  </button>
                </article>
              ))}
            </div>
            <p className="note">
              Demo pricing for layout purposes — confirm actual membership rates before publishing.
            </p>
          </div>
        </section>
        <section className="schedule">
          <div className="container schedulegrid">
            <div>
              <CalendarDays />
              <span>HOURS THAT FIT YOUR ROUTINE</span>
              <b>MON – SAT</b>
            </div>
            <div>
              <Clock3 />
              <span>EARLY STARTS. LATE FINISHES.</span>
              <b>5 AM – 10 PM</b>
            </div>
            <div>
              <MapPin />
              <span>COME TRAIN WITH US</span>
              <b>VISIT THE CLUB</b>
            </div>
          </div>
        </section>
        <section className="contact section" id="contact">
          <div className="container contactgrid">
            <div className="contactcopy">
              <small className="index">05 / LET'S GET STARTED</small>
              <h2>
                YOUR NEXT
                <br />
                CHAPTER <em>STARTS NOW.</em>
              </h2>
              <p>Tell us what you are working towards. We'll help you find the right way to start.</p>
              <div className="contactdetail">
                <span>
                  <Phone />
                </span>
                <div>
                  <small>CALL US</small>
                  <a href={PHONE_LINK}>{PHONE}</a>
                </div>
              </div>
              <div className="contactdetail">
                <span>
                  <Clock3 />
                </span>
                <div>
                  <small>OPENING HOURS</small>
                  <b>Mon–Sat, 5:00 AM–10:00 PM</b>
                </div>
              </div>
              <div className="contactdetail">
                <span>
                  <MapPin />
                </span>
                <div>
                  <small>LOCATION</small>
                  <b>Visit us at the gym</b>
                </div>
              </div>
            </div>
            <div className="formwrap">
              {formSent ? (
                <div className="success">
                  <span>
                    <Check />
                  </span>
                  <h3>YOU'RE ON YOUR WAY.</h3>
                  <p>
                    Thanks, {form.name || 'there'}! This demo form shows the enquiry flow. Connect a
                    form backend to receive real submissions.
                  </p>
                  <button className="btn outline" onClick={() => setFormSent(false)}>
                    SEND ANOTHER ENQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <small className="redtext">ENQUIRY FORM</small>
                  <h3>LET'S TALK GOALS.</h3>
                  <label>
                    Your name
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Full name"
                    />
                  </label>
                  <label>
                    Phone number
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="Your phone number"
                    />
                  </label>
                  <label>
                    I'm interested in
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={e => setForm({ ...form, interest: e.target.value })}
                    >
                      <option>Gym membership</option>
                      {services.map(([s]) => (
                        <option key={s}>{s}</option>
                      ))}
                      {plans.map(p => (
                        <option key={p.name}>{p.name} membership</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Tell us a little more
                    <textarea
                      rows="3"
                      name="message"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Your goals or questions..."
                    />
                  </label>
                  <button className="btn red full" type="submit">
                    SEND ENQUIRY <ArrowRight size={16} />
                  </button>
                  <small className="formnote">Demo form — connect a backend to receive submissions.</small>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footermain">
          <div className="footerbrand">
            <button className="brand" onClick={() => go('home', 'Home')}>
              <span className="brandmark">
                <Dumbbell />
              </span>
              <span>
                <b>
                  IRON<span>FORGE</span>
                </b>
                <small>FITNESS CLUB</small>
              </span>
            </button>
            <p>Train with purpose. Build your strength. Keep your promises to yourself.</p>
            <div className="socials">
              <a href="#instagram" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#share" aria-label="Share">
                <Share2 />
              </a>
              <a href="#youtube" aria-label="YouTube">
                <YoutubeIcon />
              </a>
              <a href="#website" aria-label="Website">
                <Globe />
              </a>
            </div>
          </div>
          <div className="footercol">
            <h4>EXPLORE</h4>
            <button onClick={() => go('home', 'Home')}>Home</button>
            <button onClick={() => go('about', 'About Us')}>About Us</button>
            <button onClick={() => go('membership', 'Membership')}>Membership</button>
            <button onClick={() => go('services', 'Services')}>Services & Classes</button>
          </div>
          <div className="footercol">
            <h4>OUR SERVICES</h4>
            {services.slice(0, 5).map(([s]) => (
              <button key={s} onClick={() => go('services', 'Services')}>
                {s}
              </button>
            ))}
          </div>
          <div className="footercol footcontact">
            <h4>CONTACT</h4>
            <a href={PHONE_LINK}>
              <Phone />
              {PHONE}
            </a>
            <a href={WA} target="_blank" rel="noreferrer">
              <MessageCircle />
              WhatsApp enquiries
            </a>
            <p>
              <Clock3 />
              Mon–Sat · 5:00 AM–10:00 PM
            </p>
            <p>
              <MapPin />
              Visit us at the gym
            </p>
            <button className="footercta" onClick={() => go('contact', 'Contact Us')}>
              GET IN TOUCH <ArrowRight />
            </button>
          </div>
        </div>
        <div className="container footerbottom">
          <span>© {new Date().getFullYear()} IronForge Fitness. All rights reserved.</span>
          <span>BUILT ON DISCIPLINE. MADE FOR PROGRESS.</span>
        </div>
      </footer>
      <a
        className="whatsapp"
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle />
        <b>CHAT WITH US</b>
      </a>
    </div>
  );
}