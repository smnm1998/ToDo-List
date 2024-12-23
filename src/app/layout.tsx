import Header from '@/components/Header';
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en&ko-KR">
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}