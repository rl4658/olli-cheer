import React from "react";
import "../../../CSS/NewsLetter/NewsLetterSection.css"
import PdfLoader from "./PDFLoader";


export default function NewsLetterSection(){

    return(
        
        <div className="news">
            <div data-aos="fade-right" data-aos-once="true"
>
                <h1>O.L.L.I News</h1>
            </div>
            <div data-aos="fade-left" data-aos-once="true"
>
                <PdfLoader fileName={require("./pdfsample.pdf")}></PdfLoader>
            </div>

        <div className="pdfSection">
           
        </div>
        </div>
    )
}