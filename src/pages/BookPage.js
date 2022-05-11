import React, { useState } from "react";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { ReadProgress } from "../components/ReadProgress/ReadProgress.js";

export const BookPage = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  // * тут будет метод для получения книги и отображения на экран

  // todo: предоставить возможность выбора способа рендеринга
  // todo: сделать удобную gui/таблицу для выполнения действий на этой странице

  return (
    <>
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
      <ReadProgress />
    </>
  );
};
