
import Product from "../../../domain/product/entity/product";
import FindProductUseCase from "./find.product.usecase";

const product = new Product("123", "Product 123", 100)

const MockRepository = () => {
    return {
        create: jest.fn(),
        findAll: jest.fn(),
        find: jest.fn().mockReturnValue(Promise.resolve(product)),
        update: jest.fn(),
    };
};

describe("Unit test find product use case", () => {

    it("should find a product", async () => {

        const productRepository = MockRepository();
        const findProductUseCase = new FindProductUseCase(productRepository);

        const input = {
            id: "123",
        };

        const output = {
            id: "123",
            name: "Product 123",
            price: 100
        };

        const result = await findProductUseCase.execute(input);

        expect(result).toEqual(output);
    });

});