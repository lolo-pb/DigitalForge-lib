import {
  FormEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";
import {
  domAnimation,
  LazyMotion,
  m,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import campusImage from "./assets/campus-source.jpg";
import proofNine from "./assets/proof-09.jpg";
import proofTen from "./assets/proof-10.jpg";
import proofEleven from "./assets/proof-11.jpg";
import stadiumImage from "./assets/stadium-source.jpg";
import styles from "./AthletesUsa.module.css";

type SectionProps = {
  art: (progress: ReturnType<typeof useScroll>["scrollYProgress"]) => ReactNode;
  children: ReactNode;
  className?: string;
  id: string;
  image?: string;
  imageAlt?: string;
  theme: "dark" | "light" | "navy";
};

type EvaluationData = {
  academicStage: string;
  age: string;
  athleticLevel: string;
  email: string;
  englishLevel: string;
  goal: string;
  graduationYear: string;
  location: string;
  name: string;
  sport: string;
  whatsapp: string;
};

const initialEvaluation: EvaluationData = {
  academicStage: "",
  age: "",
  athleticLevel: "",
  email: "",
  englishLevel: "",
  goal: "",
  graduationYear: "",
  location: "",
  name: "",
  sport: "",
  whatsapp: "",
};

function Brand() {
  return (
    <span className={styles.brand} aria-label="Athletes USA">
      <span>ATHLETES</span>
      <strong>USA</strong>
      <svg viewBox="0 0 58 18" aria-hidden="true">
        <path d="M2 13c17-2 27-12 45-10-8 1-14 5-20 8-7 3-15 5-25 2Z" />
        <path d="M9 17c15-1 25-7 40-12-8 8-20 13-40 12Z" />
      </svg>
    </span>
  );
}

function ArrowLink({ children, to }: { children: ReactNode; to: string }) {
  return (
    <Link className={styles.arrowLink} to={to}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

function Section({
  art,
  children,
  className = "",
  id,
  image,
  imageAlt = "",
  theme,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(
    scrollYProgress,
    [0.05, 0.28, 0.72, 0.95],
    shouldReduceMotion ? [0, 0, 0, 0] : [36, 0, 0, -20],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.25, 0.78, 0.98],
    [0.2, 1, 1, 0.35],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1.08, 1],
  );

  return (
    <section
      className={`${styles.section} ${styles[theme]} ${className}`}
      id={id}
      ref={ref}
    >
      {image ? (
        <div className={styles.media} aria-hidden={imageAlt === ""}>
          <m.img src={image} alt={imageAlt} style={{ scale: imageScale }} />
          <div className={styles.mediaScrim} />
        </div>
      ) : null}
      <div className={styles.artLayer}>{art(scrollYProgress)}</div>
      <m.div
        className={styles.sectionContent}
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {children}
      </m.div>
    </section>
  );
}

function OutcomeOrbit() {
  return (
    <div className={styles.outcomeOrbit} aria-hidden="true">
      <span>ESTUDIO</span>
      <span>DEPORTE</span>
      <span>FUTURO</span>
      <div className={styles.orbitCore}>USA</div>
    </div>
  );
}

function JourneyPath({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const pathLength = useTransform(progress, [0.08, 0.78], [0, 1]);
  const steps = ["Evaluación", "Perfil", "Becas", "Admisión", "Soporte"];

  return (
    <div className={styles.journeyArt} aria-hidden="true">
      <svg viewBox="0 0 220 660" preserveAspectRatio="none">
        <path className={styles.journeyTrack} d="M110 20V640" />
        <m.path
          className={styles.journeyProgress}
          d="M110 20V640"
          style={{ pathLength }}
        />
      </svg>
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

function OpportunityNetwork({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const profileScale = useTransform(progress, [0.1, 0.55], [0.82, 1]);
  const networkOpacity = useTransform(progress, [0.35, 0.7], [0, 1]);

  return (
    <div className={styles.networkArt} aria-hidden="true">
      <m.div className={styles.profileCard} style={{ scale: profileScale }}>
        <div className={styles.profileAvatar}>10</div>
        <div>
          <span>PERFIL DEPORTIVO</span>
          <strong>LISTO PARA COMPETIR</strong>
        </div>
        <i />
        <i />
        <i />
      </m.div>
      <m.div className={styles.networkNodes} style={{ opacity: networkOpacity }}>
        <span>COACH</span>
        <span>UNIVERSITY</span>
        <span>TEAM</span>
        <span>COACH</span>
      </m.div>
    </div>
  );
}

function CampusDocuments({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const documentY = useTransform(progress, [0.18, 0.62], [80, 0]);
  const documentRotate = useTransform(progress, [0.18, 0.62], [-7, 0]);

  return (
    <div className={styles.campusArt} aria-hidden="true">
      <m.div
        className={styles.offerCard}
        style={{ rotate: documentRotate, y: documentY }}
      >
        <span>UNIVERSITY OFFER</span>
        <strong>ADMITTED</strong>
        <div>
          <i>BECA</i>
          <i>VISA</i>
          <i>CAMPUS</i>
        </div>
      </m.div>
    </div>
  );
}

function SupportProof({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const proofY = useTransform(progress, [0.2, 0.72], [60, 0]);

  return (
    <m.div className={styles.proofStrip} style={{ y: proofY }}>
      <figure>
        <img src={proofNine} alt="Equipo de Athletes USA Argentina" loading="lazy" />
        <figcaption>Experiencia de ambos lados</figcaption>
      </figure>
      <figure>
        <img src={proofTen} alt="Casos de éxito de Athletes USA" loading="lazy" />
        <figcaption>Historias que llegaron más lejos</figcaption>
      </figure>
      <figure>
        <img src={proofEleven} alt="Estudiantes-atletas de Athletes USA" loading="lazy" />
        <figcaption>Atletas de distintos deportes</figcaption>
      </figure>
    </m.div>
  );
}

function FieldError({ message }: { message?: string }) {
  return message ? <span className={styles.fieldError}>{message}</span> : null;
}

function EvaluationForm() {
  const [data, setData] = useState(initialEvaluation);
  const [errors, setErrors] = useState<Partial<Record<keyof EvaluationData, string>>>({});
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof EvaluationData, value: string) => {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validateStepOne = () => {
    const nextErrors: typeof errors = {};
    if (!data.name.trim()) nextErrors.name = "Ingresá tu nombre.";
    if (!data.age.trim() || Number(data.age) <= 0) nextErrors.age = "Ingresá una edad válida.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) nextErrors.email = "Ingresá un email válido.";
    if (!data.sport.trim()) nextErrors.sport = "Contanos qué deporte practicás.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateStepTwo = () => {
    const required: Array<keyof EvaluationData> = [
      "academicStage",
      "graduationYear",
      "athleticLevel",
      "englishLevel",
      "location",
    ];
    const nextErrors: typeof errors = {};
    required.forEach((field) => {
      if (!data[field].trim()) nextErrors[field] = "Completá este campo.";
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step === 1 && validateStepOne()) {
      setStep(2);
      return;
    }
    if (step === 2 && validateStepTwo()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <span aria-hidden="true">✓</span>
        <p>Demo completada</p>
        <h2>Tu camino ya tiene un primer paso.</h2>
        <p>
          En una versión conectada, el equipo recibiría estos datos para evaluar tu perfil.
        </p>
        <button
          type="button"
          onClick={() => {
            setData(initialEvaluation);
            setErrors({});
            setStep(1);
            setSubmitted(false);
          }}
        >
          Completar otra evaluación
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formProgress} aria-label={`Paso ${step} de 2`}>
        <span>PASO {step} DE 2</span>
        <div><i className={step >= 1 ? styles.activeStep : ""} /><i className={step === 2 ? styles.activeStep : ""} /></div>
      </div>

      {step === 1 ? (
        <div className={styles.formFields}>
          <label>
            Nombre y apellido
            <input value={data.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" />
            <FieldError message={errors.name} />
          </label>
          <div className={styles.fieldRow}>
            <label>
              Edad
              <input type="number" min="1" inputMode="numeric" value={data.age} onChange={(event) => update("age", event.target.value)} />
              <FieldError message={errors.age} />
            </label>
            <label>
              Deporte
              <input value={data.sport} onChange={(event) => update("sport", event.target.value)} />
              <FieldError message={errors.sport} />
            </label>
          </div>
          <label>
            Email
            <input type="email" value={data.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" />
            <FieldError message={errors.email} />
          </label>
          <label>
            WhatsApp <span>Opcional</span>
            <input type="tel" value={data.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} autoComplete="tel" />
          </label>
        </div>
      ) : (
        <div className={styles.formFields}>
          <label>
            Etapa académica
            <select value={data.academicStage} onChange={(event) => update("academicStage", event.target.value)}>
              <option value="">Seleccioná una opción</option>
              <option>Secundaria en curso</option>
              <option>Secundaria finalizada</option>
              <option>Universidad en curso</option>
            </select>
            <FieldError message={errors.academicStage} />
          </label>
          <div className={styles.fieldRow}>
            <label>
              Año de egreso
              <input inputMode="numeric" value={data.graduationYear} onChange={(event) => update("graduationYear", event.target.value)} />
              <FieldError message={errors.graduationYear} />
            </label>
            <label>
              Nivel deportivo
              <select value={data.athleticLevel} onChange={(event) => update("athleticLevel", event.target.value)}>
                <option value="">Seleccioná</option>
                <option>Club / escolar</option>
                <option>Regional</option>
                <option>Nacional</option>
                <option>Internacional</option>
              </select>
              <FieldError message={errors.athleticLevel} />
            </label>
          </div>
          <label>
            Nivel de inglés
            <select value={data.englishLevel} onChange={(event) => update("englishLevel", event.target.value)}>
              <option value="">Seleccioná una opción</option>
              <option>Inicial</option>
              <option>Intermedio</option>
              <option>Avanzado</option>
              <option>Bilingüe</option>
            </select>
            <FieldError message={errors.englishLevel} />
          </label>
          <label>
            Ciudad y país
            <input value={data.location} onChange={(event) => update("location", event.target.value)} autoComplete="country-name" />
            <FieldError message={errors.location} />
          </label>
          <label>
            ¿Qué te gustaría conseguir? <span>Opcional</span>
            <textarea rows={3} value={data.goal} onChange={(event) => update("goal", event.target.value)} />
          </label>
        </div>
      )}

      <div className={styles.formActions}>
        {step === 2 ? <button type="button" className={styles.secondaryButton} onClick={() => setStep(1)}>Atrás</button> : null}
        <button type="submit">{step === 1 ? "Continuar" : "Finalizar demo"}</button>
      </div>
      <p className={styles.demoNotice}>Demo interactiva: tus datos no se envían ni se guardan.</p>
    </form>
  );
}

export default function AthletesUsa() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#evaluation") {
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
    }
  }, [location.hash]);

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <div className={styles.page} id="athletes-usa">
          <header className={styles.nav}>
            <Link to="/showcases/athletes-usa"><Brand /></Link>
            <Link className={styles.navCta} to="#evaluation">Evaluá tu perfil</Link>
          </header>

          <main>
            <Section
              id="dream"
              theme="dark"
              image={stadiumImage}
              imageAlt="Estadio de fútbol iluminado durante la noche"
              art={() => <OutcomeOrbit />}
            >
              <p className={styles.eyebrow}>TU FUTURO PUEDE EMPEZAR ACÁ</p>
              <h1>Estudiá. Competí. Crecé en Estados Unidos.</h1>
              <p className={styles.lede}>Una carrera universitaria y tu deporte al máximo nivel.</p>
              <ArrowLink to="/showcases/athletes-usa/dream">Ver la experiencia</ArrowLink>
            </Section>

            <Section
              id="path"
              theme="light"
              className={styles.pathSection}
              art={(progress) => <JourneyPath progress={progress} />}
            >
              <p className={styles.eyebrow}>ACOMPAÑAMIENTO COMPLETO</p>
              <h2>Todo tu camino. Un solo equipo.</h2>
              <p className={styles.lede}>Cinco etapas conectadas para que siempre sepas cuál es el próximo paso.</p>
              <ArrowLink to="/showcases/athletes-usa/path">Conocé el proceso</ArrowLink>
            </Section>

            <Section
              id="opportunity"
              theme="navy"
              className={styles.opportunitySection}
              art={(progress) => <OpportunityNetwork progress={progress} />}
            >
              <p className={styles.eyebrow}>TU OPORTUNIDAD</p>
              <h2>Convertimos tu potencial en un perfil que abre oportunidades.</h2>
              <p className={styles.lede}>Tu historia deportiva y académica, lista para llegar a las universidades correctas.</p>
              <ArrowLink to="/showcases/athletes-usa/opportunity">Ver cómo lo hacemos</ArrowLink>
            </Section>

            <Section
              id="campus"
              theme="dark"
              image={campusImage}
              imageAlt="Campus universitario y estadio deportivo en Estados Unidos"
              art={(progress) => <CampusDocuments progress={progress} />}
            >
              <p className={styles.eyebrow}>DE TALENTO A CAMPUS</p>
              <h2>Conectamos tu talento con la oportunidad correcta.</h2>
              <p className={styles.lede}>Beca, admisión y visa coordinadas hasta tu primer día en la universidad.</p>
              <ArrowLink to="/showcases/athletes-usa/campus">Conocé el camino</ArrowLink>
            </Section>

            <Section id="support" theme="light" art={(progress) => <SupportProof progress={progress} />}>
              <p className={styles.eyebrow}>ACOMPAÑAMIENTO 360°</p>
              <h2>Antes, durante y después.</h2>
              <p className={styles.lede}>Una red que sigue con vos durante tu carrera universitaria y profesional.</p>
              <div className={styles.metrics} aria-label="Datos de Athletes USA">
                <span><strong>2008</strong>Desde</span>
                <span><strong>3.000+</strong>Estudiantes-atletas</span>
                <span><strong>20.000+</strong>Entrenadores</span>
              </div>
              <ArrowLink to="/showcases/athletes-usa/support">Ver el acompañamiento</ArrowLink>
            </Section>

            <section className={`${styles.section} ${styles.evaluation}`} id="evaluation">
              <div className={styles.evaluationIntro}>
                <p className={styles.eyebrow}>TU PRIMER PASO</p>
                <h2>Ahora descubramos tu camino.</h2>
                <p className={styles.lede}>Contanos un poco sobre vos y armá una primera fotografía de tu perfil.</p>
              </div>
              <EvaluationForm />
            </section>
          </main>

          <footer className={styles.footer}>
            <Brand />
            <span>Showcase conceptual · Buenos Aires · 2026</span>
            <Link to="/showcases">Volver a DigitalForge</Link>
          </footer>
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}
