interface PageTitleProps {
  title: string;
  description: string;
}

export function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
