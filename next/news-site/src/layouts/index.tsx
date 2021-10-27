import Header from "../components/header"
import styles from "./index.module.scss"

interface LayoutProps {
    children: React.ReactNode
}

const MainLayout = ({children}: LayoutProps): JSX.Element =>  {
    return (
        <div>
            <Header />
            <main className={styles.main}>{children}</main>
        </div>
    )
}

export default MainLayout;