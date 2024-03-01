import React, { useState, useRef } from 'react';
import CupboardDisplay from './CupboardDisplay';

const ProductStorageForm = () => {
  const [cupboard, setCupboard] = useState('');
  const [rack, setRack] = useState('');
  const [sectionRows, setSectionRows] = useState('');
  const [sectionColumns, setSectionColumns] = useState('');
  const [boxRows, setBoxRows] = useState('');
  const [boxColumns, setBoxColumns] = useState('');
  const [productList, setProductList] = useState([]);
  const [occupiedPositions, setOccupiedPositions] = useState([]);
  let productCounter = useRef(1);

  const storeProduct = () => {
    const identificationNumber = generateIdentificationNumber(
      cupboard,
      rack,
      sectionRows,
      sectionColumns,
      boxRows,
      boxColumns
    );

    // Check if the position is already occupied
    if (occupiedPositions.includes(identificationNumber)) {
      alert('This position is already occupied!');
      return;
    }

    // Add the current position to the list of occupied positions
    setOccupiedPositions([...occupiedPositions, identificationNumber]);

    const productName = `P${productCounter.current++}`;
    const productInfo = `${productName} - ${identificationNumber}`;

    setProductList([...productList, productInfo]);

    // Clear the form fields after submission
    setCupboard('');
    setRack('');
    setSectionRows('');
    setSectionColumns('');
    setBoxRows('');
    setBoxColumns('');
  };
  console.log("this is cupbaord value:",cupboard);

  const generateIdentificationNumber = (
    cupboard,
    rack,
    sectionRows,
    sectionColumns,
    boxRows,
    boxColumns
  ) => {
    // Example: cupboard > rack > section (rows and columns) > box (rows and columns)
    return `${cupboard}-${rack}-${sectionRows}-${sectionColumns}-${boxRows}-${boxColumns}`;
  };

  return (
    <>
      <div className="form-container">
        <h1>Product Storage Form</h1>

        <form className="product-form">
          <div className="form-group">
            <label htmlFor="cupboard">Cupboard:</label>
            <select
              id="cupboard"
              value={cupboard}
              onChange={(e) => setCupboard(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Cupboard
              </option>
              {[...Array(6).keys()].map((value) => (
                <option key={value} value={value + 1}>
                  {value + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="rack">Rack:</label>
            <select
              id="rack"
              value={rack}
              onChange={(e) => setRack(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Rack
              </option>
              {[...Array(7).keys()].map((value) => (
                <option key={value} value={value + 1}>
                  {value + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sectionRows">Section Rows:</label>
            <select
              id="sectionRows"
              value={sectionRows}
              onChange={(e) => setSectionRows(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Section Rows
              </option>
              {[...Array(25).keys()].map((value) => (
                <option key={value} value={value + 1}>
                  {value + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sectionColumns">Section Columns:</label>
            <select
              id="sectionColumns"
              value={sectionColumns}
              onChange={(e) => setSectionColumns(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Section Columns
              </option>
              {[...Array(25).keys()].map((value) => (
                <option key={value} value={value + 1}>
                  {value + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="boxRows">Box Rows:</label>
            <select
              id="boxRows"
              value={boxRows}
              onChange={(e) => setBoxRows(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Box Rows
              </option>
              {[...Array(100).keys()].map((value) => (
                <option key={value} value={value + 1}>
                  {value + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="boxColumns">Box Columns:</label>
            <select
              id="boxColumns"
              value={boxColumns}
              onChange={(e) => setBoxColumns(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Box Columns
              </option>
              {[...Array(100).keys()].map((value) => (
                <option key={value} value={value + 1}>
                  {value + 1}
                </option>
              ))}
            </select>
          </div>

          <button type="button" onClick={storeProduct}>
            Store Product
          </button>
        </form>

        <h2>Product Information</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Identification Number</th>
            </tr>
          </thead>
          <tbody>
            {/* {productList.map((product, index) => (
              <tr key={index}>
                <td>{product.split(' - ')[0]}</td>
                <td>{product.split(' - ')[1]}</td>
              </tr>
            ))} */}
            <CupboardDisplay/>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductStorageForm;

