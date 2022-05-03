import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        if (newText === '') {
            setTimeout(() => {
                props.showAlert("Please enter something ", "danger");
            }, 500);
            setText(newText);
        } else {
            props.showAlert("Converted to Uppercase", "success");
            setText(newText);
        }
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        if (newText === '') {
            props.showAlert("Please enter something ", "danger");
            setText(newText);
        } else {
            props.showAlert("Converted to Lowercase", "success");
            setText(newText);
        }
    }
    const handleClearClick = () => {
        let newText = '';
        if (newText === '') {
            props.showAlert("Successfully cleared", "success")
            setText(newText);
        }
    }
    const handleInverseClick = () => {
        let newText = reverseTexting(text);
        if (newText === '') {
            props.showAlert("Please enter something ", "danger");
            setText(newText);
        } else {
            props.showAlert("Reversed ", "success")
            setText(newText);
        }
    }
    function reverseTexting(text) {
        var newString = "";
        for (var i = text.length - 1; i >= 0; i--) {
            newString += text[i];
        }
        return newString;
    }
    const handleCopyClick = () => {
        var text = document.getElementById('myBox');
        if (text.value === '') {
            props.showAlert("Please enter something ", "danger");
        } else {
            props.showAlert("Copied ", "success")
            text.select();
            navigator.clipboard.writeText(text.value);
        }
    }
    const handleSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        if (newText === '') {
            props.showAlert("Please enter something ", "danger");
            setText(newText.join(" "));
        } else {
            props.showAlert("Removed Spaces ", "success")
            setText(newText.join(" "));
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick} >Convert To Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleDownClick} >Convert To Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleClearClick} >Clear All</button>
                <button className="btn btn-primary mx-3" onClick={handleInverseClick} >Reverse & Normal</button>
                <button className="btn btn-primary mx-3" onClick={handleCopyClick} >Copy All</button>
                <button className="btn btn-primary mx-3" onClick={handleSpacesClick} >Remove Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
