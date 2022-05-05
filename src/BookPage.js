import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

export const BookPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);
  const goToPrevPage = () => setPageNumber(pageNumber - 1);
  const goToNextPage = () => setPageNumber(pageNumber + 1);

  // todo: предоставить возможность выбора способа рендеринга
  // todo: сделать удобную gui/таблицу для выполнения действий на этой странице

  return (
    <>
      {/* <div>
        <div style={{ width: 1200 }}>
          <Document file="/lr4wad.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={1200} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
        <nav>
          {pageNumber > 1 && (
            <Button className="me-1" variant="dark" onClick={goToPrevPage}>
              &lt;
            </Button>
          )}
          {pageNumber < numPages && (
            <Button variant="dark" onClick={goToNextPage}>
              &gt;
            </Button>
          )}
        </nav>
      </div> */}
      <div>
        <center>
          <div>
            <Document file="/lr4wad.pdf" onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </center>
      </div>
    </>
  );
};
