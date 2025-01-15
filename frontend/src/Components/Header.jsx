import React from 'react';
import 'boxicons';
import PizZip from 'pizzip'; // Import PizZip
import Docxtemplater from 'docxtemplater'; // Import docxtemplater
import FileDownload from 'js-file-download'; // To download the file

function Header() {
  // Handle print functionality
  const handlePrint = () => {
    window.print(); // Triggers print functionality
  };

  // Handle document export functionality
  const handleExport = () => {
    const docTemplate = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <w:body>
            <w:p>
                <w:r>
                    <w:t>Exported Content</w:t>
                </w:r>
            </w:p>
        </w:body>
    </w:document>`;

    const zip = new PizZip(docTemplate);
    const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

    // Replace with the actual content you want to export
    doc.setData({
      content: 'This is the exported document content',
    });

    try {
      doc.render();
    } catch (error) {
      console.error("Error rendering document:", error);
      return;
    }

    // Generate the .docx file and trigger the download
    const generatedDoc = doc.getZip().generate({ type: 'blob' });
    FileDownload(generatedDoc, 'exportedDocument.docx');
  };

  return (
    <div className="bg-blue-800"> {/* Dark Blue header background */}
      <div className="bg-blue-900 p-2 w-full rounded-t-md rounded-r-lg flex justify-between items-center">
        {/* Left Section - File Name */}
        <div className="flex items-center text-white">
          <span className="mr-4">File Name: <b>Document 1</b></span>
        </div>

        {/* Right Section - Import, Export, and Print */}
        <div className="flex items-center gap-x-4 mr-4">
          {/* Import Section */}
          <div className="flex flex-col items-center hover:cursor-pointer hover:text-blue-400 transition-all">
            <box-icon type="solid" color="white" name="file-import" size="md"></box-icon>
            <span className="text-white">Import</span>
          </div>

          {/* Thin Vertical Line */}
          <div className="border-l border-blue-500 h-8 mx-4"></div>

          {/* Export Section */}
          <div
            className="flex flex-col items-center hover:cursor-pointer hover:text-blue-400 transition-all"
            onClick={handleExport} // Make the Export icon clickable
          >
            <box-icon type="solid" name="file-export" color="white" size="md"></box-icon>
            <span className="text-white">Export</span>
          </div>

          {/* Thin Vertical Line */}
          <div className="border-l border-blue-500 h-8 mx-4"></div>

          {/* Print Section */}
          <div
            className="flex flex-col items-center hover:cursor-pointer hover:text-blue-400 transition-all"
            onClick={handlePrint} // Make the Print icon clickable
          >
            <box-icon name="printer" type="solid" color="white" size="md"></box-icon>
            <button
              onClick={handlePrint}
              className="text-white rounded mt-1"
            >
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
