import { Form, Button } from "react-bootstrap";

function SearchField({ onSearch }) {
    return (
        <Form className="d-flex mb-4" onSubmit={onSearch}>
            <Form.Control
                type="search"
                name="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
            />
            <Button variant="outline-primary" type="submit">Search</Button>
        </Form>
    )
}

export default SearchField;