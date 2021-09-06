function Product({ product }) {
    let possibleStates = ["No", "Yes"];
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.supplier}</td>
            <td>{possibleStates[+product.scalable]}</td>
            <td>{possibleStates[+product.scalable]}</td>
            <td>{possibleStates[+product.scalable]}</td>
        </tr>
    )
}

export default Product;