import "../styles/fonts.css";
import "../styles/colors.css";
import "./globals.css";

export const metadata = {
  title: "Sujita Kumari - Portfolio",
  description: "Full Stack Developer Portfolio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', (event) => {
                if (event.filename && event.filename.startsWith('chrome-extension://')) {
                  event.stopImmediatePropagation();
                }
              }, true);
              window.addEventListener('unhandledrejection', (event) => {
                const stack = event.reason && event.reason.stack;
                if (stack && stack.includes('chrome-extension://')) {
                  event.stopImmediatePropagation();
                }
              }, true);
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
