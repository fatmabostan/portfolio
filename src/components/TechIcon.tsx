const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <div>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="#44d6ab" />
          <stop offset="100%" stopColor="#d6446f" />
        </linearGradient>
      </svg>
    </div>
  );
};

export default TechIcon;
