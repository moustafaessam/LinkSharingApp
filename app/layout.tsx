
type HomeLayoutProps = {
  children:React.ReactNode;
}

export default function layout({children}:HomeLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
