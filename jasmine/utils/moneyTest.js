import {priceFormatting} from "../../scripts/utils/money.js";

describe("Test suite:PriceFormatting!!!",()=>
{
  it("Convert cents into currency",()=>
  {
    expect(priceFormatting(2095)).toEqual('20.95');
  });

  it("Convert zero into currency",()=>
  {
    expect(priceFormatting(0)).toEqual('0.00');
  });
  it("Rounds to nearest cent",()=>
  {
    expect(priceFormatting(2000.5)).toEqual('20.01');
  });
});