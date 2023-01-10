import React, { ReactElement, useRef, useState } from "react";
import parse from "html-react-parser";

import "../../App.css";
import {FaBootstrap,FaItalic,FaUnderline,FaAlignCenter,FaAlignJustify,FaAlignLeft,FaAlignRight,FaLink,
FaListOl,FaListUl,FaCamera,FaUndo,FaRedo,} from "react-icons/fa";

export function Editcom({ data }: any): ReactElement {
    const [first, setfirst] = useState<any[]>([])
    console.log("first", first);

    let myDivElement = useRef(null);

    const handlechange = (event: any) => {
        // console.log("editable", event.relatedTarget);
        setfirst(event.relatedTarget)
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
    function handlejustifyCenter() {
        document.execCommand("justifyCenter");
    }
    function handlejustifyFull() {
        document.execCommand("justifyFull");
    }
    function handlejustifyLeft() {
        document.execCommand("justifyLeft");
    }
    function handlejustifyRight() {
        document.execCommand("justifyRight");
    }
    function handleInsertImage() {
        document.execCommand("inserImage");
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

                    {/*  Alignment */}
                    <button onClick={handlejustifyCenter}><FaAlignCenter /></button>
                    <button onClick={handlejustifyFull}><FaAlignJustify /></button>
                    <button onClick={handlejustifyLeft}><FaAlignLeft /></button>
                    <button onClick={handlejustifyRight}><FaAlignRight /></button>
                    {/*  Selection */}
                    <select>
                        <option value="H1">H1</option>
                        <option value="H2">H2</option>
                        <option value="H3">H3</option>
                        <option value="H4">H4</option>
                        <option value="H5">H5</option>
                        <option value="H6">H6</option>
                    </select>
                    <button className="option-button spacing" onClick={handleSave}>Save</button>
                </div>
                <div ref={myDivElement} className="text-input" contentEditable={true} suppressContentEditableWarning={true} onMouseEnter={handlechange}>
                    {parse(data)}
                </div>
            </div>
        </>
    );
}
