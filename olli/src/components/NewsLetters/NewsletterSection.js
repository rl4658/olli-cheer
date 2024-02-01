import React from "react";
import "../../CSS/NewsLetter/NewsLetterSection.css"
import PdfLoader from "./PDFLoader";


export default function NewsLetterSection(){

    return(
        
        <div className="news">
        <h1>O.L.L.I News</h1>
        <PdfLoader fileName={require("./pdfsample.pdf")}></PdfLoader>

        <div className="pdfSection">
           
        </div>
        </div>
    )
}