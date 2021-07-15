type DLogoProps = {
  src?: string;
};

const LogoLink = (props: DLogoProps) => {
  return (
    <div className="w-36">
      <img className="object-contain" src={props.src} alt="ADA Logo" />
    </div>
  );
};

export { LogoLink };
