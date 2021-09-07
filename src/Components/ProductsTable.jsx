import React from 'react';
import { Spinner, Table } from 'react-bootstrap';
import api from '../API';
import auth from '../API/auth';
import notify from '../utils/notify';
import SearchField from './SearchField';
import Product from './Product';

class ProductsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            page: 1,
            size: 20,
            products: [],
            filteredProducts: [],
        };
    }

    componentDidMount() {
        this.getProducts();
    }

    async getProducts() {
        try {
            this.setState({ loading: true });
            const result = await api.get(`/variations?size=${this.state.size}&page=${this.state.page}`, auth.getAuthHeader());
            this.setState({
                products: result?.data?.items,
                filteredProducts: result?.data?.items,
                page: result?.data?.page
            });
        }
        catch (err) {
            notify({
                icon: 'error',
                title: err?.response?.statusText || "Something went wrong!"
            })
        }
        this.setState({ loading: false });
    }

    filterProducts(search) {
        let query = search?.toLowerCase();
        let filteredProducts = this.state.products?.filter(
            product => new RegExp(query, "ig").test(product?.name)
        );
        filteredProducts.sort((a,b) => {
            return a?.name?.toLowerCase().indexOf(query) > b?.name?.toLowerCase().indexOf(query)
        });
        this.setState({ filteredProducts, loading: false });
    }

    handleSearch = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        let data = new FormData(event.target);
        this.filterProducts(data.get("search"));
    }

    render() {
        return this.state.loading
            ?
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" />
            </div>
            :
            <div className={'p-4 mt-4 text-center'}>
                <SearchField onSearch={this.handleSearch} />
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Supplier</th>
                            <th>Scalable</th>
                            <th>Sellable</th>
                            <th>Shippable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.filteredProducts?.map(
                                product => <Product key={product.id} product={product} />
                            )
                        }
                    </tbody>
                </Table>
            </div>
    }
};

export default ProductsTable;