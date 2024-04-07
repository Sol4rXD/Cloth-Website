const products = [
    {
        id: 1,
        name: 'MEN',
        header: 'MEN',
        inform: 'MEN Cloth for children and all ages',
    },
    {
        id: 2,
        name: 'SS24',
        header: 'SS24',
        inform: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias ipsa officiis inventore aut laboriosam nam debitis distinctio assumenda neque eos quo fugiat beatae maiores, saepe est totam nihil ipsum ullam. Libero, vero. At cum corrupti exercitationem doloremque nisi. At dolorem quis recusandae doloremque hic minus, obcaecati illum repellat harum.',
    },
];

const productById = id => products.find(product => product.id === id);
export { products, productById };
