import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill'; // Import ReactQuill component
import 'react-quill/dist/quill.snow.css'; // Import the CSS for Quill
import '../App.css'

function Body() {
  const [editorContent, setEditorContent] = useState(''); // State to hold the content

  // Load content from localStorage when the component mounts
  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setEditorContent(savedContent); // If content is found in localStorage, load it
    }
  }, []);

  // Handle editor content change and save to localStorage
  const handleChange = (value) => {
    setEditorContent(value); // Update state with content from editor
    localStorage.setItem('editorContent', value); // Save content in localStorage
  };

  return (
    <div className="h-full w-full text-black mt-2">
      <ReactQuill
        value={editorContent} // Bind editor value to state
        onChange={handleChange} // Set the change handler to update the state
        className="h-[700px] w-full rounded-xl bg-white"
        theme="snow"
      />
    </div>
  );
}

export default Body;
