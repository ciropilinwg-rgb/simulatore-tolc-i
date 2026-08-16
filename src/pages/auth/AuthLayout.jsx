import './AuthPages.css';

export default function AuthLayout({
  eyebrow,
  title,
  subtitle,
  children,
  sideContent,
  footer
}) {
  return (
    <div className="auth-layout">
      <section className="auth-layout__hero">
        <div className="auth-layout__copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="auth-layout__title">{title}</h1>
          {subtitle ? <p className="auth-layout__subtitle">{subtitle}</p> : null}
          {sideContent ? <div className="auth-layout__side">{sideContent}</div> : null}
        </div>

        <div className="auth-layout__panel page-card">
          {children}
        </div>
      </section>

      {footer ? <footer className="auth-layout__footer">{footer}</footer> : null}
    </div>
  );
}
