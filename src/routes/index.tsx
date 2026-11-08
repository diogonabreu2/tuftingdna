import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

type Lang = 'fr' | 'pt' | 'en'

const projects = [
  { src: '/img/projects/rose.jpg', title: { fr: 'Rose', pt: 'Rosa', en: 'Rose' }, tag: { fr: 'Pièce florale', pt: 'Peça floral', en: 'Floral piece' } },
  { src: '/img/projects/colombe.jpg', title: { fr: 'Colombe', pt: 'Pomba', en: 'Dove' }, tag: { fr: 'Création murale', pt: 'Criação de parede', en: 'Wall piece' } },
  { src: '/img/projects/nuage.jpg', title: { fr: 'Explosion', pt: 'Explosão', en: 'Explosion' }, tag: { fr: 'Forme libre', pt: 'Forma livre', en: 'Free-form' } },
  { src: '/img/projects/20260622_191744.webp', title: { fr: 'Alice', pt: 'Alice', en: 'Alice' }, tag: { fr: 'Pièce personnalisée', pt: 'Peça personalizada', en: 'Custom piece' } },
  { src: '/img/projects/mci.jpg', title: { fr: 'Cube', pt: 'Cubo', en: 'Cube' }, tag: { fr: 'Déco', pt: 'Decoração', en: 'Decor' } },
  { src: '/img/projects/etoile.jpg', title: { fr: 'Étoile', pt: 'Estrela', en: 'Star' }, tag: { fr: 'Petite pièce', pt: 'Peça pequena', en: 'Small piece' } },
  { src: '/img/projects/vague.jpg', title: { fr: 'Vague', pt: 'Onda', en: 'Wave' }, tag: { fr: 'Forme graphique', pt: 'Forma gráfica', en: 'Graphic shape' } },
  { src: '/img/projects/vague2.jpg', title: { fr: 'Vague — extérieur', pt: 'Onda — exterior', en: 'Wave — outdoor' }, tag: { fr: 'Vue du projet', pt: 'Vista do projeto', en: 'Project view' } },
  { src: '/img/projects/superman.jpg', title: { fr: 'Super-héros', pt: 'Super-herói', en: 'Superhero' }, tag: { fr: 'Création sur mesure', pt: 'Criação por medida', en: 'Custom creation' } },
  { src: '/img/projects/basket.jpg', title: { fr: 'Basket', pt: 'Basquetebol', en: 'Basketball' }, tag: { fr: 'Pièce sportive', pt: 'Peça desportiva', en: 'Sports piece' } },
  { src: '/img/projects/basket2.jpg', title: { fr: 'Basket — détail', pt: 'Basquetebol — detalhe', en: 'Basketball — detail' }, tag: { fr: 'Détail', pt: 'Detalhe', en: 'Detail' } },
]

const copy = {
  fr: {
    navProjects: 'Créations',
    navProcess: 'Le tufting',
    navEstimate: 'Simulateur',
    navContact: 'Parler de votre projet',
    eyebrow: 'Atelier de tufting · pièces uniques',
    heroTitle: <>Des idées<br />qui prennent<br /><em>du relief.</em></>,
    heroText: 'Je transforme vos dessins, souvenirs et idées en pièces tuftées faites main. Une création unique, pensée avec vous et réalisée fil après fil.',
    estimate: 'Estimer mon projet',
    viewProjects: 'Voir les créations',
    handmade: '100% fait main',
    unique: 'pièce unique',
    marquee: 'IMAGINÉ AVEC VOUS ✳ TUFTÉ À LA MAIN ✳ CRÉATION SUR MESURE ✳ DES COULEURS QUI RESTENT EN TÊTE ✳',
    projectsEyebrow: 'Projets réalisés',
    projectsTitle: <>Quelques créations<br /><em>Tufting DNA.</em></>,
    projectsText: 'Une sélection de pièces déjà réalisées. Chaque projet peut servir de point de départ : envoyez votre idée et nous imaginons ensemble la prochaine.',
    processEyebrow: 'Le savoir-faire',
    processTitle: <>Du dessin<br /><em>au tapis.</em></>,
    steps: [
      ['01', 'Votre idée', 'Un dessin, une photo, un logo ou simplement une envie.'],
      ['02', 'La création', 'Je prépare le design, les couleurs et les dimensions avec vous.'],
      ['03', 'Le tufting', 'Chaque pièce est tuftée, découpée, collée et finie à la main.'],
    ],
    calcEyebrow: 'Une première idée du budget',
    calcTitle: <>Votre tapis,<br /><em>votre estimation.</em></>,
    calcText: 'Choisissez les grandes lignes de votre projet. Le prix affiché est indicatif : chaque création fait ensuite l’objet d’un devis précis.',
    note: 'La matière, le niveau de détail et les finitions peuvent faire évoluer le tarif final.',
    shape: 'La forme',
    size: 'La taille',
    complexity: 'La complexité',
    estimateLabel: 'Estimation indicative',
    quote: 'Recevoir un devis',
    shopEyebrow: 'Pièces disponibles',
    shopTitle: <>Une pièce déjà<br /><em>tuftée.</em></>,
    shopText: 'Des créations originales peuvent aussi être disponibles à l’achat. Contactez-moi pour connaître les pièces actuellement disponibles.',
    shopButton: 'Voir les disponibilités',
    contactEyebrow: 'Une idée en tête ?',
    contactTitle: <>Parlons-en<br /><em>fil à fil.</em></>,
    contactText: 'Envoyez-moi votre idée, même si elle n’est encore qu’une esquisse. Je vous réponds pour discuter du projet, des dimensions et du budget.',
    socialTitle: 'Suivez l’atelier',
    formName: 'Votre nom',
    formEmail: 'Votre email',
    formType: 'Type de demande',
    formBudget: 'Budget indicatif',
    formMessage: 'Parlez-moi de votre idée',
    placeholderName: 'Prénom Nom',
    placeholderEmail: 'vous@email.com',
    placeholderMessage: 'Dimensions, couleurs, usage, date souhaitée…',
    send: 'Envoyer ma demande',
    sending: 'Envoi en cours…',
    privacy: 'Vos informations servent uniquement à répondre à votre demande.',
    successTitle: 'Votre message est parti !',
    successText: 'Merci pour votre confiance. Je reviens vers vous rapidement pour donner forme à votre idée.',
    another: 'Envoyer un autre message',
    error: 'L’envoi n’a pas abouti. Écrivez-nous directement à tuftingdna@gmail.com.',
    footer: 'Des pièces tuftées faites main pour des intérieurs qui ne ressemblent qu’à vous.',
    contact: 'Contact',
    project: 'Projet',
    question: 'Question',
    available: 'Pièce disponible',
    collaboration: 'Collaboration',
    toDefine: 'À définir',
    less300: 'Moins de 300 €',
    from300: '300 € — 600 €',
    from600: '600 € — 1 000 €',
    more1000: 'Plus de 1 000 €',
    lightboxClose: 'Fermer',
  },
  pt: {
    navProjects: 'Criações',
    navProcess: 'O tufting',
    navEstimate: 'Simulador',
    navContact: 'Falar sobre o seu projeto',
    eyebrow: 'Atelier de tufting · peças únicas',
    heroTitle: <>Ideias que<br />ganham<br /><em>relevo.</em></>,
    heroText: 'Transformo desenhos, memórias e ideias em peças de tufting feitas à mão. Uma criação única, pensada consigo e construída fio a fio.',
    estimate: 'Estimar o meu projeto',
    viewProjects: 'Ver criações',
    handmade: '100% feito à mão',
    unique: 'peça única',
    marquee: 'IMAGINADO CONSIGO ✳ FEITO À MÃO ✳ CRIAÇÃO POR MEDIDA ✳ CORES QUE FICAM NA MEMÓRIA ✳',
    projectsEyebrow: 'Projetos realizados',
    projectsTitle: <>Algumas criações<br /><em>Tufting DNA.</em></>,
    projectsText: 'Uma seleção de peças já realizadas. Cada projeto pode ser um ponto de partida: envie a sua ideia e imaginamos juntos a próxima.',
    processEyebrow: 'O saber-fazer',
    processTitle: <>Do desenho<br /><em>ao tapete.</em></>,
    steps: [
      ['01', 'A sua ideia', 'Um desenho, uma fotografia, um logótipo ou simplesmente uma vontade.'],
      ['02', 'A criação', 'Preparo o design, as cores e as dimensões consigo.'],
      ['03', 'O tufting', 'Cada peça é tufada, recortada, colada e acabada à mão.'],
    ],
    calcEyebrow: 'Uma primeira ideia do orçamento',
    calcTitle: <>O seu tapete,<br /><em>a sua estimativa.</em></>,
    calcText: 'Escolha as características principais do projeto. O preço é indicativo: cada criação recebe depois um orçamento preciso.',
    note: 'O material, o nível de detalhe e os acabamentos podem alterar o preço final.',
    shape: 'A forma',
    size: 'O tamanho',
    complexity: 'A complexidade',
    estimateLabel: 'Estimativa indicativa',
    quote: 'Receber orçamento',
    shopEyebrow: 'Peças disponíveis',
    shopTitle: <>Uma peça já<br /><em>tufada.</em></>,
    shopText: 'Algumas criações originais também podem estar disponíveis para compra. Contacte-me para conhecer as peças disponíveis.',
    shopButton: 'Ver disponibilidades',
    contactEyebrow: 'Tem uma ideia?',
    contactTitle: <>Vamos falar<br /><em>fio a fio.</em></>,
    contactText: 'Envie a sua ideia, mesmo que ainda seja apenas um esboço. Respondo para falarmos do projeto, dimensões e orçamento.',
    socialTitle: 'Siga o atelier',
    formName: 'O seu nome',
    formEmail: 'O seu email',
    formType: 'Tipo de pedido',
    formBudget: 'Orçamento indicativo',
    formMessage: 'Fale-me da sua ideia',
    placeholderName: 'Nome completo',
    placeholderEmail: 'voce@email.com',
    placeholderMessage: 'Dimensões, cores, utilização, data pretendida…',
    send: 'Enviar pedido',
    sending: 'A enviar…',
    privacy: 'Os seus dados são utilizados apenas para responder ao seu pedido.',
    successTitle: 'A sua mensagem foi enviada!',
    successText: 'Obrigado pela confiança. Responderei rapidamente para dar forma à sua ideia.',
    another: 'Enviar outra mensagem',
    error: 'O envio falhou. Escreva diretamente para tuftingdna@gmail.com.',
    footer: 'Peças de tufting feitas à mão para interiores que são só seus.',
    contact: 'Contacto',
    question: 'Pergunta',
    available: 'Peça disponível',
    collaboration: 'Colaboração',
    toDefine: 'A definir',
    less300: 'Menos de 300 €',
    from300: '300 € — 600 €',
    from600: '600 € — 1 000 €',
    more1000: 'Mais de 1 000 €',
    lightboxClose: 'Fechar',
  },
  en: {
    navProjects: 'Projects',
    navProcess: 'The craft',
    navEstimate: 'Estimator',
    navContact: 'Talk about your project',
    eyebrow: 'Tufting studio · one-of-a-kind pieces',
    heroTitle: <>Ideas that<br />take<br /><em>shape.</em></>,
    heroText: 'I turn drawings, memories and ideas into handmade tufted pieces. A unique creation, designed with you and built one thread at a time.',
    estimate: 'Estimate my project',
    viewProjects: 'View projects',
    handmade: '100% handmade',
    unique: 'one of a kind',
    marquee: 'DESIGNED WITH YOU ✳ HAND TUFTED ✳ MADE TO ORDER ✳ COLOURS THAT STAND OUT ✳',
    projectsEyebrow: 'Selected projects',
    projectsTitle: <>A few Tufting DNA<br /><em>creations.</em></>,
    projectsText: 'A selection of completed pieces. Let one of these projects inspire yours: send your idea and let’s create the next one together.',
    processEyebrow: 'The craft',
    processTitle: <>From sketch<br /><em>to rug.</em></>,
    steps: [
      ['01', 'Your idea', 'A drawing, photo, logo or simply an idea you want to bring to life.'],
      ['02', 'The design', 'We work together on the design, colours and dimensions.'],
      ['03', 'The tufting', 'Every piece is tufted, trimmed, glued and finished by hand.'],
    ],
    calcEyebrow: 'A first budget estimate',
    calcTitle: <>Your rug,<br /><em>your estimate.</em></>,
    calcText: 'Choose the main characteristics of your project. The displayed price is indicative; every creation receives a detailed quote.',
    note: 'Materials, level of detail and finishing can affect the final price.',
    shape: 'Shape',
    size: 'Size',
    complexity: 'Complexity',
    estimateLabel: 'Indicative estimate',
    quote: 'Get a quote',
    shopEyebrow: 'Available pieces',
    shopTitle: <>A piece already<br /><em>tufted.</em></>,
    shopText: 'Original pieces may also be available to buy. Get in touch to see what is currently available.',
    shopButton: 'Check availability',
    contactEyebrow: 'Have an idea?',
    contactTitle: <>Let’s talk<br /><em>thread by thread.</em></>,
    contactText: 'Send your idea, even if it is only a rough sketch. We can discuss the project, dimensions and budget.',
    socialTitle: 'Follow the studio',
    formName: 'Your name',
    formEmail: 'Your email',
    formType: 'Request type',
    formBudget: 'Indicative budget',
    formMessage: 'Tell me about your idea',
    placeholderName: 'First name Last name',
    placeholderEmail: 'you@email.com',
    placeholderMessage: 'Dimensions, colours, use, desired date…',
    send: 'Send my request',
    sending: 'Sending…',
    privacy: 'Your information is only used to answer your request.',
    successTitle: 'Your message has been sent!',
    successText: 'Thank you for getting in touch. I’ll get back to you shortly to shape your idea.',
    another: 'Send another message',
    error: 'The message could not be sent. Email us directly at tuftingdna@gmail.com.',
    footer: 'Handmade tufted pieces for interiors that feel uniquely yours.',
    contact: 'Contact',
    question: 'Question',
    available: 'Available piece',
    collaboration: 'Collaboration',
    toDefine: 'To be defined',
    less300: 'Under €300',
    from300: '€300 — €600',
    from600: '€600 — €1,000',
    more1000: 'Over €1,000',
    lightboxClose: 'Close',
  },
} as const

const sizes = [
  { fr: 'Petit', pt: 'Pequeno', en: 'Small', detail: { fr: '40 × 40 cm', pt: '40 × 40 cm', en: '40 × 40 cm' }, area: 0.16 },
  { fr: 'Moyen', pt: 'Médio', en: 'Medium', detail: { fr: '70 × 70 cm', pt: '70 × 70 cm', en: '70 × 70 cm' }, area: 0.49 },
  { fr: 'Grand', pt: 'Grande', en: 'Large', detail: { fr: '100 × 100 cm', pt: '100 × 100 cm', en: '100 × 100 cm' }, area: 1 },
  { fr: 'XL', pt: 'XL', en: 'XL', detail: { fr: '140 × 140 cm', pt: '140 × 140 cm', en: '140 × 140 cm' }, area: 1.96 },
]
const shapes = [
  { fr: 'Rectangle', pt: 'Retângulo', en: 'Rectangle', value: 1 },
  { fr: 'Rond', pt: 'Redondo', en: 'Round', value: 1.08 },
  { fr: 'Forme libre', pt: 'Forma livre', en: 'Free-form', value: 1.22 },
]
const complexities = [
  { fr: 'Épuré', pt: 'Simples', en: 'Clean', detail: { fr: '1–3 couleurs', pt: '1–3 cores', en: '1–3 colours' }, value: 1 },
  { fr: 'Graphique', pt: 'Gráfico', en: 'Graphic', detail: { fr: '4–6 couleurs', pt: '4–6 cores', en: '4–6 colours' }, value: 1.28 },
  { fr: 'Détaillé', pt: 'Detalhado', en: 'Detailed', detail: { fr: 'Finitions fines', pt: 'Acabamentos finos', en: 'Fine finishing' }, value: 1.62 },
]

function Home() {
  const [lang, setLang] = useState<Lang>('fr')
  const [menuOpen, setMenuOpen] = useState(false)
  const [shape, setShape] = useState(2)
  const [size, setSize] = useState(1)
  const [complexity, setComplexity] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [formError, setFormError] = useState('')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  const estimate = useMemo(
    () => Math.round(((155 + sizes[size].area * 335) * shapes[shape].value * complexities[complexity].value) / 10) * 10,
    [shape, size, complexity],
  )

  const closeMenu = () => setMenuOpen(false)

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSending(true)
    setFormError('')
    try {
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(event.currentTarget) as unknown as Record<string, string>).toString(),
      })
      if (!response.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setFormError(t.error)
    } finally {
      setSending(false)
    }
  }

  return (
    <main>
      <header className="nav-wrap">
        <a href="#top" className="brand" aria-label="Tufting DNA">
          <span>TUFTING</span><span>DNA</span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#portfolio" onClick={closeMenu}>{t.navProjects}</a>
          <a href="#process" onClick={closeMenu}>{t.navProcess}</a>
          <a href="#simulateur" onClick={closeMenu}>{t.navEstimate}</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>{t.navContact} <ArrowRight size={15} /></a>
        </nav>
        <div className="nav-right">
          <div className="language-switcher" aria-label="Language">
            {(['fr', 'pt', 'en'] as Lang[]).map((item) => (
              <button key={item} className={lang === item ? 'language active' : 'language'} onClick={() => setLang(item)}>
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-intro">{t.heroText}</p>
          <div className="hero-actions">
            <a href="#simulateur" className="button button-dark">{t.estimate} <ArrowDown size={17} /></a>
            <a href="#portfolio" className="text-link">{t.viewProjects} <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/img/projects/superman.jpg" alt={projects[0].title[lang]} />
          <div className="hero-sticker"><span>{t.handmade.split(' ')[0]}</span>{t.handmade.split(' ').slice(1).join(' ')}</div>
          <span className="scribble">{t.unique}</span>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><div>{t.marquee} {t.marquee}</div></div>

      <section className="portfolio section" id="portfolio">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.projectsEyebrow}</p>
            <h2>{t.projectsTitle}</h2>
          </div>
          <p>{t.projectsText}</p>
        </div>
        <div className="works-grid">
          {projects.map((project, index) => (
            <article className={`work work-${index === 0 ? 'hero' : index % 4 === 0 ? 'wide' : 'standard'}`} key={project.src}>
              <button className="work-image" onClick={() => setSelectedProject(index)} aria-label={`${project.title[lang]} — ${t.projectsEyebrow}`}>
                <img src={project.src} alt={project.title[lang]} loading={index > 2 ? 'lazy' : 'eager'} />
                <span className="zoom-hint">+</span>
              </button>
              <div className="work-caption">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{project.title[lang]}</h3><p>{project.tag[lang]}</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading">
          <div><p className="eyebrow">{t.processEyebrow}</p><h2>{t.processTitle}</h2></div>
        </div>
        <div className="steps-grid">
          {t.steps.map(([number, title, text]) => (
            <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="calculator section" id="simulateur">
        <div className="calculator-intro">
          <p className="eyebrow light">{t.calcEyebrow}</p>
          <h2>{t.calcTitle}</h2>
          <p>{t.calcText}</p>
          <div className="calc-note"><Sparkles size={22} /><span>{t.note}</span></div>
        </div>
        <div className="calculator-panel">
          <fieldset><legend><span>01</span>{t.shape}</legend><div className="choice-grid three">
            {shapes.map((item, i) => <button type="button" className={shape === i ? 'choice active' : 'choice'} onClick={() => setShape(i)} key={item.fr}>{item[lang]}{shape === i && <Check size={15} />}</button>)}
          </div></fieldset>
          <fieldset><legend><span>02</span>{t.size}</legend><div className="choice-grid four">
            {sizes.map((item, i) => <button type="button" className={size === i ? 'choice active' : 'choice'} onClick={() => setSize(i)} key={item.fr}><strong>{item[lang]}</strong><small>{item.detail[lang]}</small></button>)}
          </div></fieldset>
          <fieldset><legend><span>03</span>{t.complexity}</legend><div className="choice-grid three">
            {complexities.map((item, i) => <button type="button" className={complexity === i ? 'choice active' : 'choice'} onClick={() => setComplexity(i)} key={item.fr}><strong>{item[lang]}</strong><small>{item.detail[lang]}</small></button>)}
          </div></fieldset>
          <div className="estimate">
            <div><span>{t.estimateLabel}</span><strong>{estimate} € <small>— {estimate + 90} €</small></strong></div>
            <a href="#contact" className="button button-coral">{t.quote} <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="shop section" id="boutique">
        <div className="shop-copy">
          <p className="eyebrow">{t.shopEyebrow}</p>
          <h2>{t.shopTitle}</h2>
          <p>{t.shopText}</p>
          <a href="#contact" className="button button-outline">{t.shopButton} <ArrowRight size={17} /></a>
        </div>
        <div className="shop-card">
          <div className="shop-art"><img src="/img/projects/rose.jpg" alt={projects[9].title[lang]} /><span className="status">Tufting DNA</span></div>
          <div><span>{lang === 'fr' ? 'Création' : lang === 'pt' ? 'Criação' : 'Creation'}</span><strong>{projects[9].title[lang]}<br />100% handmade.</strong></div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-side">
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <a className="mail-link" href="mailto:tuftingdna@gmail.com"><Mail size={18} /> tuftingdna@gmail.com</a>
          <p className="social-title">{t.socialTitle}</p>
          <div className="socials">
            <a href="https://www.instagram.com/tuftingdna/" target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a>
            <a href="https://www.tiktok.com/@tuftingdna_" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
        <div className="form-wrap">
          {submitted ? (
            <div className="success">
              <span><Check size={30} /></span><h3>{t.successTitle}</h3><p>{t.successText}</p>
              <button onClick={() => setSubmitted(false)} className="text-link">{t.another}</button>
            </div>
          ) : (
            <form name="projet-tufting" method="POST" data-netlify="true" onSubmit={submit}>
              <input type="hidden" name="form-name" value="projet-tufting" />
              <input type="hidden" name="subject" value="Nouvelle demande Tufting DNA" />
              <p className="hidden-field"><label>Ne pas remplir <input name="bot-field" /></label></p>
              <div className="field-row">
                <label>{t.formName}<input name="name" required placeholder={t.placeholderName} /></label>
                <label>{t.formEmail}<input name="email" type="email" required placeholder={t.placeholderEmail} /></label>
              </div>
              <div className="field-row">
                <label>{t.formType}<select name="requestType" defaultValue={t.project}><option>{t.project}</option><option>{t.question}</option><option>{t.available}</option><option>{t.collaboration}</option></select></label>
                <label>{t.formBudget}<select name="budget" defaultValue={t.toDefine}><option>{t.toDefine}</option><option>{t.less300}</option><option>{t.from300}</option><option>{t.from600}</option><option>{t.more1000}</option></select></label>
              </div>
              <label>{t.formMessage}<textarea name="message" required rows={5} placeholder={t.placeholderMessage} /></label>
              {formError && <p className="form-error" role="alert">{formError}</p>}
              <button className="button button-dark submit" type="submit" disabled={sending}>{sending ? t.sending : t.send} <ArrowRight size={17} /></button>
              <p className="privacy">{t.privacy}</p>
            </form>
          )}
        </div>
      </section>

      <footer>
        <a href="#top" className="brand"><span>TUFTING</span><span>DNA</span></a>
        <p>{t.footer}</p>
        <div><a href="https://www.instagram.com/tuftingdna/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.tiktok.com/@tuftingdna_" target="_blank" rel="noreferrer">TikTok</a><a href="mailto:tuftingdna@gmail.com">{t.contact}</a></div>
      </footer>

      {selectedProject !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={projects[selectedProject].title[lang]}>
          <button className="lightbox-close" onClick={() => setSelectedProject(null)} aria-label={t.lightboxClose}><X /></button>
          <button className="lightbox-arrow left" onClick={() => setSelectedProject((selectedProject - 1 + projects.length) % projects.length)} aria-label="Previous"><ChevronLeft /></button>
          <div className="lightbox-content">
            <img src={projects[selectedProject].src} alt={projects[selectedProject].title[lang]} />
            <div><span>{String(selectedProject + 1).padStart(2, '0')}</span><strong>{projects[selectedProject].title[lang]}</strong><small>{projects[selectedProject].tag[lang]}</small></div>
          </div>
          <button className="lightbox-arrow right" onClick={() => setSelectedProject((selectedProject + 1) % projects.length)} aria-label="Next"><ChevronRight /></button>
        </div>
      )}
    </main>
  )
}
