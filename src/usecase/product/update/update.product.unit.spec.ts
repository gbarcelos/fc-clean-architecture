import ProductFactory from "../../../domain/product/factory/product.factory";
import UpdateProductUseCase from "./update.product.usecase";

const priduct = ProductFactory.create("a", "Product a", 100);
  
  const input = {
    id: priduct.id,
    name: "Product a updated",
    price: 105
  };
  
  const MockRepository = () => {
    return {
      create: jest.fn(),
      findAll: jest.fn(),
      find: jest.fn().mockReturnValue(Promise.resolve(priduct)),
      update: jest.fn(),
    };
  };

describe("Unit test update product use case", () => {

  it("should update a product", async () => {

    const productRepository = MockRepository();
    const updateProductUseCase = new UpdateProductUseCase(productRepository);

    const output = await updateProductUseCase.execute(input);

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      price: input.price,
    });
  });

});