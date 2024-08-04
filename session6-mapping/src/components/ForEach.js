function ForEach() {
    const data = [
        { id: 1, name: 'headphones', price: 499 },
        { id: 2, name: 'laptop', price: 45000 },
        { id: 3, name: "tablet", price: 55000 }
    ]
    const tbody = []
    data.forEach(product => {
        tbody.push(<tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>)
    })
    return (
        <div>
            <h3 className="text-bg-danger">Product data</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tbody}
                </tbody>
            </table>
        </div>
    );
}

export default ForEach;