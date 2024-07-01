export interface LinkProps {
  type: "internal" | "external";
  href: string;
  target: "_self" | "_blank";
}

export interface CTAProps {
  label: string;
  variant: "primary" | "secondary" | "phone";
  link?: LinkProps;
  function?: string;
}

export interface CTAsProps {
  ctas?: CTAProps[];
}

const styles = {
  primary: {
    cta: "btn btn-lg btn-primary",
  },
  secondary: {
    cta: "btn btn-lg btn-accent",
  },
  phone: {
    cta:
      "text-center cursor-pointer text-black text-xl md:text-2xl font-semibold font-open-sans",
  },
};

export function CTAs(props: CTAsProps) {
  return (
    <>
      {props.ctas?.map((cta) => {
        if (!cta.link) return <></>;

        return (
          <a
            href={cta.link.href}
            target={cta.link.target}
            key={cta.label}
            className={styles[cta.variant].cta}
          >
            {cta.label}
          </a>
        );
      })}
    </>
  );
}
