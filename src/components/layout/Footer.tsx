type FooterProps = {
  className?: string;
};

export const Footer = (props: FooterProps) => {
  return (
    <div className={props.className}>
      <div>this is the Footer</div>
    </div>
  );
};
