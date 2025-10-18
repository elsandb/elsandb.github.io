import React from "react";

const xmlExample = `
<orders>
    <order id="1">
        <customer>
            <name>John Doe</name>
            <email>john@example.com</email>
        </customer>
        <items>
            <item>
                <product>Widget A</product>
                <quantity>2</quantity>
                <price>19.99</price>
            </item>
            <item>
                <product>Widget B</product>
                <quantity>1</quantity>
                <price>29.99</price>
            </item>
        </items>
        <date>2024-06-01</date>
    </order>
    <order id="2">
        <customer>
            <name>Jane Smith</name>
            <email>jane@example.com</email>
        </customer>
        <items>
            <item>
                <product>Widget C</product>
                <quantity>3</quantity>
                <price>9.99</price>
            </item>
        </items>
        <date>2024-06-02</date>
    </order>
</orders>
`;

const ordersTable = [
    { id: "1", customer_name: "John Doe", customer_email: "john@example.com", date: "2024-06-01" },
    { id: "2", customer_name: "Jane Smith", customer_email: "jane@example.com", date: "2024-06-02" },
];

const itemsTable = [
    { order_id: "1", product: "Widget A", quantity: "2", price: "19.99" },
    { order_id: "1", product: "Widget B", quantity: "1", price: "29.99" },
    { order_id: "2", product: "Widget C", quantity: "3", price: "9.99" },
];

export default function XmlToCsvConversionProjectPage() {
    return (
        <main className="prose mx-auto px-4 py-8">
            <h1>XML to CSV Conversion Algorithm</h1>
            <p>
                Here I will demonstrates a robust algorithm for converting deeply nested XML data into a set of normalized CSV tables. The solution is designed to handle complex relationships and preserve referential integrity.
            </p>
            <h2>Problem Statement</h2>
            <p>
                XML is a flexible format for representing hierarchical data, but it is not ideal for tabular analysis or relational databases. Converting nested XML to CSV requires flattening the structure and, when necessary, generating multiple tables to represent one-to-many relationships.
            </p>
            <h2>Algorithm Overview</h2>
            <ul>
                <li>Recursively traverse the XML tree.</li>
                <li>Identify entities and relationships.</li>
                <li>Generate separate CSV tables for each entity type.</li>
                <li>Preserve foreign key references to maintain data integrity.</li>
            </ul>
            <h2>Example Input XML</h2>
            <pre className="overflow-x-auto bg-gray-100 p-4 rounded text-sm">{xmlExample}</pre>
            <h2>Generated CSV Tables</h2>
            <h3>Orders</h3>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border px-2 py-1">id</th>
                            <th className="border px-2 py-1">customer_name</th>
                            <th className="border px-2 py-1">customer_email</th>
                            <th className="border px-2 py-1">date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersTable.map((row) => (
                            <tr key={row.id}>
                                <td className="border px-2 py-1">{row.id}</td>
                                <td className="border px-2 py-1">{row.customer_name}</td>
                                <td className="border px-2 py-1">{row.customer_email}</td>
                                <td className="border px-2 py-1">{row.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h3>Order Items</h3>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border px-2 py-1">order_id</th>
                            <th className="border px-2 py-1">product</th>
                            <th className="border px-2 py-1">quantity</th>
                            <th className="border px-2 py-1">price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsTable.map((row, idx) => (
                            <tr key={idx}>
                                <td className="border px-2 py-1">{row.order_id}</td>
                                <td className="border px-2 py-1">{row.product}</td>
                                <td className="border px-2 py-1">{row.quantity}</td>
                                <td className="border px-2 py-1">{row.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h2>Key Features</h2>
            <ul>
                <li>Handles arbitrary nesting and complex relationships.</li>
                <li>Produces normalized CSV tables suitable for relational databases.</li>
                <li>Extensible for custom XML schemas.</li>
            </ul>
            <h2>Applications</h2>
            <ul>
                <li>Data migration from legacy systems.</li>
                <li>Integration with analytics platforms.</li>
                <li>ETL pipelines for business intelligence.</li>
            </ul>
            <h2>Source Code &amp; Documentation</h2>
            <p>
                The full algorithm implementation and usage instructions are available on request or via the project repository.
            </p>
        </main>
    );
}