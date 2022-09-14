import "./New.css";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import React, { useState } from 'react';
import samplePDF from './pdfSample.pdf';
import { Link, Route, Routes, BrowserRouter} from "react-router-dom";



function New(){

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log(numPages);
  }

  // function showFile(){


    return(
      
      <>
    {/* <div className="new"> */}
    <div className="last"> הועלו לאחרונה</div>
        <div class="product">
        <div className = "image-box">
      <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess} className = "pdf-file">
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
    <div class="text-box">
      <h2 class="item">בראשית</h2>
      <h3 class="price">תשפ"ב</h3>
      <p class="description">תיאור קצר</p>
      {/* <label for="item-1-quantity">Quantity:</label>
      <input type="text" name="item-1-quantity" id="item-1-quantity" value="1"/> */}
      
      <button className="addToCart" type="button" name="item-1-button" id="item-1-button">
        <Link to = "File_page">תצוגה</Link>
      </button>
      <button className="addToCart" type="button" name="item-1-button" id="item-1-button">
      <a href={samplePDF} download>הורדה</a>
      </button>
    </div>
    </div>
    <div class="product">
    <div class="image-box">
    <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess} className = "pdf-file">
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
    <div class="text-box">
      <h2 class="item">נח</h2>
      <h3 class="price">תשפ"ב</h3>
      <p class="description">תיאור קצר</p>
      {/* <label for="item-1-quantity">Quantity:</label>
      <input type="text" name="item-1-quantity" id="item-1-quantity" value="1"/> */}
      <button className="addToCart" type="button" name="item-1-button" id="item-1-button">הורדה</button>
    </div>
    </div>

    <div class="product">
    <div class="image-box">
    <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess} className = "pdf-file">
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
    <div class="text-box">
      <h2 class="item">לך לך</h2>
      <h3 class="price">תשפ"ב</h3>
      <p class="description">תיאור קצר</p>
      {/* <label for="item-1-quantity">Quantity:</label>
      <input type="text" name="item-1-quantity" id="item-1-quantity" value="1"/> */}
      <button className="addToCart" type="button" name="item-1-button" id="item-1-button">הורדה</button>
    </div>
    </div>

    <div class="product">
    <div class="image-box">
    <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess} className = "pdf-file">
        <Page pageNumber={pageNumber} />
      </Document>
    </div> 
    <div class="text-box">
      <h2 class="item">בראשית</h2>
      <h3 class="price">תשפ"ב</h3>
      <p class="description">תיאור קצר</p>
      {/* <label for="item-1-quantity">Quantity:</label>
      <input type="text" name="item-1-quantity" id="item-1-quantity" value="1"/> */}
      <button className="addToCart" type="button" name="item-1-button" id="item-1-button">הורדה</button>
    </div>
    </div>

    {/* <body>s
      <object data="C:\Users\nSohlberg\fullstack\LessonsWeb\halacha\src\view\pdfSample.pdf" 
              width="800" 
              height="500"> 
      </object>
    </body> */}
    

      </>
    );
    
}

export default New;