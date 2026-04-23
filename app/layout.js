export const metadata = {
  title: "Au Phil des Pages",
  description: "Clarté, simplicité, sérénité.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
