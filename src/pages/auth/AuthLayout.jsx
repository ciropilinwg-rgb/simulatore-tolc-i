import './AuthPages.css';

export default function AuthLayout({
  eyebrow,
  title,
  subtitle,
  children,
  sideContent,
  footer,
  variant = 'split',
  titleClassName = '',
  subtitleClassName = '',
  panelClassName = ''
}) {
  const hasHeroContent = Boolean(eyebrow || title || subtitle || sideContent);

  return (
    <div className={`auth-layout auth-layout--${variant}`}>
      <section className={`auth-layout__hero auth-layout__hero--${variant}`}>
        {hasHeroContent ? (
          <div className={`auth-layout__copy auth-layout__copy--${variant}`}>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h1 className={`auth-layout__title ${titleClassName}`.trim()}>{title}</h1> : null}
            {subtitle ? <p className={`auth-layout__subtitle ${subtitleClassName}`.trim()}>{subtitle}</p> : null}
            {sideContent ? <div className="auth-layout__side">{sideContent}</div> : null}
          </div>
        ) : null}

        <div className={`auth-layout__panel page-card ${panelClassName}`.trim()}>
          {children}
        </div>
      </section>

      {footer ? <footer className="auth-layout__footer">{footer}</footer> : null}
    </div>
  );
}
