import  { useState } from 'react';
import './App.css'; // Import the CSS file

const Embed = () => {
  const [url, setUrl] = useState('');
   // You'll need to define the actual structure of SEO data

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const redirectToLink = () => {
    // Redirect to a link (e.g., https://example.com)
    window.location.href = 'https://theblueprint.training/wp-content/uploads/2019/02/The-Blueprint-__-Monthly-SEO-Report-TEMPLATE-%E2%80%BA-ALL-Live-Links-and-Content-Live-Data.pdf'; // Replace with your desired URL
  };
  

//   const fetchDataForSEO = async () => {
//     try {
//       // Make an API request to your backend to fetch SEO data based on the 'url' input
//       const response = await fetch('/api/fetchSEOData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ url }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setSeoData(data);
        
//         // Redirect to a link (for example, https://example.com) after data is fetched
//         window.location.href = 'https://example.com';
//       } else {
//         console.error('Error fetching SEO data');
//       }
//     } catch (error) {
//       console.error('Error fetching SEO data', error);
//     }
//   };

  return (
    <div className="embed-container">
      <div className="embed-content">
        <h1>SEO Widget</h1>
        <div className="input-container">
          <label htmlFor="urlInput">Enter URL:</label>
          <input
            type="text"
            id="urlInput"
            value={url}
            onChange={handleUrlChange}
            placeholder="https://example.com"
          />
         <button onClick={redirectToLink}>SEO Data and Redirect</button>

        </div>
        
      </div>
    </div>
  );
};

export default Embed;
