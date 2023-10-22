import FormCreate from "./FormCreate";

export default function AdminJournalCategoriesLayout({
  children,
}: {
  children: React.ReactElement<"section">;
}) {
  return (
    <section>
      <FormCreate />
      {children}
    </section>
  );
}
