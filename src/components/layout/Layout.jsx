export const Layout = ({children}) => {
    return (<div className={"container"}>
        <header>Very useful header</header>
        <main>{children}</main>
        <footer>Very useful footer</footer>
    </div>)
}