import { Redirect } from "react-router";
import auth from "../API/auth";
import Layout from "../Components/Layout";
import ProductsTable from "../Components/ProductsTable";

function HomePage() {
    const authToken = auth.getAuthToken();
    return (
        authToken
            ?
            <Layout title="Products">
                <ProductsTable />
            </Layout>
            :
            <Redirect to={'/auth'} />
    )
};

export default HomePage;