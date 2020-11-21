import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function WysiwygForm(props) {
	return (
		<div className="container py-5">
			<Editor wrapperClassName="wrapper-class" editorClassName="editor-class" toolbarClassName="toolbar-class" />
		</div>
	);
}

export default WysiwygForm;
