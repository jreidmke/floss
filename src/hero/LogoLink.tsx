type DLogoProps = {
  src?: string;
};

const LogoLink = (props: DLogoProps) => {
  return (
    <div className="w-36 bg-blue-300 bg-opacity-50 rounded-md p-3 h-20">
      <img className="object-contain" src={props.src} alt="Logo" />
    </div>
  );
};

export { LogoLink };
