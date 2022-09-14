import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
// import path from '../components/long_pdf.pdf';
import path from '../components/pdfSample.pdf' ;
// import path from 'https://drive.google.com/file/d/1qxGtPCR1pTda97cdIOEE0daNiJ6Oh521/view?usp=sharing';





function File_page(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
  
    function previousPage() {
      changePage(-1);
    }
  
    function nextPage() {
      changePage(1);
    }

  return (
    <div className = 'file'>
      <Document
        file={path}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default File_page;