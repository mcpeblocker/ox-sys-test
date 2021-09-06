import { Container } from "react-bootstrap";
import Helmet from 'react-helmet';

function Layout({ title = "Ox Sys", children }) {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Layout;