import React, { ReactElement, useRef, useState } from "react";
import parse from "html-react-parser";
import {options} from './data'

import "../../App.css";
import {
    FaBootstrap,
    FaItalic,
    FaUnderline,
    FaAlignCenter,
    FaAlignJustify,
    FaAlignLeft,
    FaAlignRight,
    FaExpandArrowsAlt,
    FaLink,
    FaListOl,
    FaListUl,
    FaCamera,
    FaCut,
    FaQuoteRight,
    FaUndo,
    FaRedo,
    FaSubscript,
    FaSuperscript,
} from "react-icons/fa";
export function Editcom({ data }: any) {
    let editable = useRef(null);

    useLayoutEffect(() => {
        console.log("editable",editable.current);
      },[])
    
    function handleEditedata(event: any) {
        const data = event.target.value
        console.log("data", data);

    }

    const handlebold = () => {
        document.execCommand("bold");
    };

    const handleitalic = () => {
        document.execCommand("italic");
    };

    function handleunderline() {
        document.execCommand("underline");
    }

    const handleOlClick = () => {
        document.execCommand("insertOrderedList");
    };
    const handleulClick = () => {
        document.execCommand("insertUnorderedList");
    };

    function handleredo() {
        document.execCommand("redo");
    }
    function handleundo() {
        document.execCommand("undo");
    }
    function handlecreateLink() {
        document.execCommand("createLink");
    }
    function handleParagraphk() {
        document.execCommand("insertParagraph");
    }
    function handlejustifyCenter() {
        document.execCommand("justifyCenter");
    }
    function handlejustifyLeft() {
        document.execCommand("justifyLeft");
    }
    function handlejustifyRight() {
        document.execCommand("justifyRight");
    }
    function handleInsertImage() {
        document.execCommand("inserImage", false, "<img src={} alt='image'>");
    }
    function handleSave() {

    }
    return (
        <>
            <div className="container">
                <div className="options">
                    {/*  Text Format */}
                    <button onClick={handlebold} > <FaBootstrap /> </button>
                    <button onClick={handleitalic}><FaItalic /></button>
                    <button onClick={handleunderline} ><FaUnderline /></button>

                    {/*  List */}
                    <button onClick={handleOlClick}><FaListOl /></button>
                    <button onClick={handleulClick}><FaListUl /></button>
                    {/*  Undo/Redo */}
                    <button onClick={handleundo}><FaUndo /></button>
                    <button onClick={handleredo}><FaRedo /></button>

                    {/*  Link */}
                    <button onClick={handlecreateLink}><FaLink /></button>
                    <button onClick={handleInsertImage}><FaCamera /></button>

                    {/* <!-- Link --> */}
                    <button
                        id="createLink"
                        className="adv-option-button"
                        onClick={handlecreateLink}
                    >
                        <FaLink />
                    </button>
                    <button
                        id="unlink"
                        className="option-button"
                        onClick={handleInsertImage}
                    >
                        <FaCamera />
                    </button>

                    {/* <!-- Alignment --> */}
                    <button
                        id="justifyLeft"
                        className="option-button align"
                        onClick={handlejustifyCenter}
                    >
                        <FaAlignCenter />
                    </button>
                    <button
                        id="justifyCenter"
                        className="option-button align"
                        onClick={handlejustifyFull}
                    >
                        <FaAlignJustify />
                    </button>
                    <button
                        id="justifyRight"
                        className="option-button align"
                        onClick={handlejustifyLeft}
                    >
                        <FaAlignLeft />
                    </button>
                    <button
                        id="justifyFull"
                        className="option-button align"
                        onClick={handlejustifyRight}
                    >
                        <FaAlignRight />
                    </button>
                    <button id="indent" className="option-button spacing">
                        <FaExpandArrowsAlt />
                    </button>
                </div>
                <div ref={myDivElement} className="text-input" contentEditable={true} suppressContentEditableWarning={true} onMouseEnter={handlechange}>
                    {parse(data)}
                </div>
            </div>
        </>
    );
}
