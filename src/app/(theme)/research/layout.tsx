import '@/styles/md-styles.scss';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <article>{children}</article>;
}
