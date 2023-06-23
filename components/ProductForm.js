import { useState, useContext } from "react";
import { formmatter } from "@/utils/helpers";
import ProductOptions from "./ProductOptions";

export default function ProductForm({ product }) {

    const allVariantOptions = product.variants.edges?.map(variant => {
        const allOptions = {};

        variant.node.selectedOptions.map(item => {
            allOptions[item.name] = item.value;
        });

        return {
            id: variant.node.id,
            title: product.title,
            handle: product.handle,
            image: variant.node.image?.url,
            options: allOptions,
            variantTitle: variant.node.title,
            variantPrice: variant.node.price.amount,
            variantQuantity: 1
        }
    });

    const defaultValues = {};
    product.options.map(item => {
        defaultValues[item.name] = item.values[0];
    });

    const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
    const [selectedOptions, setSelectedOptions] = useState(defaultValues);

    function setOptions(name, value) {
        setSelectedOptions(prevState => {
            return {...prevState, [name]: value}
        })
    }

    return (
        <div className="rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3">
            <h2 className="text-2xl font-bold">{product.title.split(' ').slice(0, 2).join(' ')}</h2>
            <span className="pb-6">{formmatter.format(product.variants.edges[0].node.price.amount)}</span>
            {product.options.map(({ name, values}) => (
                <ProductOptions key={`key-${name}`} name={name} values={values} selectedOptions={selectedOptions} setOptions={setOptions} />
            ))}
            <button className="bg-yellow-500 rounded-lg text-black px-2 py-3 transition duration-150 hover:bg-yellow-600 font-bold text-base">Add To Cart</button>
        </div>
    )
}
