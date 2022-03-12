import {
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  CheckboxGroup,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import {
  getProducts,
  highPrice,
  lowPrice,
  fastestShipping,
  brandFn,
  UnderOrAbove,
  discount,
} from "../Redux/ProductsList/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
// import axios from "axios"
export const ProductsSort = () => {
  const [radio, setRadio] = useState("Relevance");
  const [check, setCheck] = useState([]);
  const [price, setPrice] = useState([]);
  const [style, setStyle] = useState("");
  const [material, setMaterial] = useState([]);
  const [discountP, setDiscount] = useState("");

  const {brands } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductsData();
  }, []);
  
  const getProductsData = () => {
    dispatch(getProducts());
  };



  // For Brands Checks
   useEffect(() => {
     BrandSorting();
   }, [check]);


  // For  Pice Range
  useEffect(() => {
    PriceRange();
  }, [price]);


  // For Discount
  useEffect(() => {
    DiscountFn()
  }, [discountP]);

  const Higher_Price = (value) => {
    if (value === "Highest"){
      dispatch(highPrice());
    }else if(value==="Lowest"){
      dispatch(lowPrice());
    }else if(value==="Fastest"){
        dispatch(fastestShipping())
    }else if(value==="Newest"){

    }
  }


  const BrandSorting = () => {
      dispatch(brandFn(check));
  }


  const PriceRange = () => {
      dispatch(UnderOrAbove(price))
  }

  const DiscountFn = () => {
    dispatch(discount(discountP));
  }


  return (
    <div className="sortDiv">
      <RadioGroup
        className="sortRadioDiv"
        defaultValue="Relevance"
        onChange={setRadio}
        onClick={(e) => {
          Higher_Price(e.target.value);
        }}
        value={radio}
        colorScheme="orange"
      >
        <Stack spacing={[1, 5]}>
          <h2 className="heroSortName">Sort by</h2>
          <Radio size="lg" value="Relevance" borderColor="black">
            <p className="sortNames">Relevance</p>
          </Radio>
          <Radio size="lg" value="Highest" borderColor="black">
            <p className="sortNames">Highest Priced First</p>
          </Radio>
          <Radio size="lg" value="Lowest" borderColor="black">
            <p className="sortNames">Lowest Priced First</p>
          </Radio>
          <Radio size="lg" value="Fastest" borderColor="black">
            <p className="sortNames">Fastest Shipping</p>
          </Radio>
          <Radio size="lg" value="Newest" borderColor="black">
            <p className="sortNames">Newest</p>
          </Radio>
        </Stack>
      </RadioGroup>
      <div className="checkBoxDiv">
        <CheckboxGroup
          colorScheme="orange"
          defaultValue={[]}
          onChange={setCheck}
          value={check}
        >
          <Stack spacing={[1, 5]} direction="column">
            <h2 className="heroSortName">Brand</h2>
            {brands.map((item) => {
              return (
                <Checkbox
                  key={item.id}
                  value={item.brand}
                  size="md"
                  borderColor="black"
                >
                  <p className="sortNames" >{item.brand}</p>
                </Checkbox>
              );
            })}
          </Stack>
        </CheckboxGroup>
      </div>
      <div className="checkBoxDiv">
        <CheckboxGroup
          colorScheme="orange"
          defaultValue={[]}
          onChange={setPrice}
          value={price}
        >
          <Stack spacing={[1, 5]} direction="column">
            <h2 className="heroSortName">Price</h2>
            <Checkbox value="Under" size="md" borderColor="black">
              <p className="sortNames">Under ₹ 10,000 </p>
            </Checkbox>
            <Checkbox value="Over" size="md" borderColor="black">
              <p className="sortNames">Over ₹ 10,000</p>
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </div>
      <div className="checkBoxDiv">
        <h2 className="heroSortName">Dimensions</h2>
        <h3>Height</h3>
        <RangeSlider
          aria-label={["min", "max"]}
          colorScheme="orange"
          defaultValue={[10, 30]}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <h3>Width</h3>
        <RangeSlider
          aria-label={["min", "max"]}
          colorScheme="orange"
          defaultValue={[10, 30]}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <h3>Depth</h3>
        <RangeSlider
          aria-label={["min", "max"]}
          colorScheme="orange"
          defaultValue={[10, 30]}
          minW="32"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </div>
      <div className="checkBoxDiv">
        <CheckboxGroup
          colorScheme="orange"
          defaultValue={[]}
          onChange={setStyle}
          value={style}
        >
          <Stack spacing={[1, 5]} direction="column">
            <h2 className="heroSortName">Style</h2>
            <Checkbox value="Indian Ethnic" size="md" borderColor="black">
              <p className="sortNames">Indian Ethnic</p>
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </div>
      <div className="checkBoxDiv">
        <CheckboxGroup
          colorScheme="orange"
          defaultValue={[]}
          onChange={setMaterial}
          value={material}
        >
          <Stack spacing={[1, 5]} direction="column">
            <h2 className="heroSortName">Primary Meterial</h2>
            <Checkbox value="Iron" size="md" borderColor="black">
              <p className="sortNames">Iron</p>
            </Checkbox>
            <Checkbox value="Mango Wood" size="md" borderColor="black">
              <p className="sortNames">Mango Wood</p>
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </div>
      <div className="checkBoxDiv">
        <RadioGroup
          colorScheme="orange"
          defaultValue=""
          onChange={setDiscount}
          value={discountP}
        >
          <Stack spacing={[1, 5]} direction="column">
            <h2 className="heroSortName">Discount</h2>
            <Radio value="10" size="lg" borderColor="black">
              <p className="sortNames">10% and Above</p>
            </Radio>
            <Radio value="20" size="lg" borderColor="black">
              <p className="sortNames">20% and Above</p>
            </Radio>
            <Radio value="30" size="lg" borderColor="black">
              <p className="sortNames">30% and Above</p>
            </Radio>
            <Radio value="40" size="lg" borderColor="black">
              <p className="sortNames">40% and Above</p>
            </Radio>
            <Radio value="50" size="lg" borderColor="black">
              <p className="sortNames">50% and Above</p>
            </Radio>
            <Radio value="60" size="lg" borderColor="black">
              <p className="sortNames">60% and Above</p>
            </Radio>
            <Radio value="70" size="lg" borderColor="black">
              <p className="sortNames">70% and Above</p>
            </Radio>
          </Stack>
        </RadioGroup>
      </div>
    </div>
  );
};
