function NestedArray() {
    const categories = [
        { id: 1, name: 'fruits', products: ['apple', 'banana', 'charry'] },
        { id: 2, name: 'vegrtables', products: ['carrot', 'Broccoli', 'Spinach'] },
        { id: 3, name: 'Electronics', products: ["phone", "tablet", 'laptop'] },
        { id: 4, name: 'Stationary', products: ['books', "pen", "pencil"] }
    ]
    return (
        <div>
            <h3 className="mt-3 p-2 text-bg-secondary">
                Categories
            </h3>
            {
                categories.map(category => (
                    <div key={category.id}>
                        <h4 className="text-bg-primary p-2">{category.name}</h4>
                        <ul className="list-group">
                            {
                                category.products.map((product, index) => (
                                    <li className="list-group-item" key={index}>{product}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}

export default NestedArray;