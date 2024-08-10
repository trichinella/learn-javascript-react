export const metadata = {
    title: "React course",
    description: "react course description",
};

export default function RootLayout({children}) {
    return (
        <html lang='en'>
        <body>
        <div id='root'>{children}</div>
        </body>
        </html>
    );
}