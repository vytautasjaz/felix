import React from 'react';
import './index.css';

function LanguageSelector() {
  const [lang, setLang] = React.useState(0);

  const language = (e) => {
    setLang(e.target.value);
    console.log(lang);
  };

  return (
    <div className='LanguageSelector'>
      <select id='LangaugeSelector' onChange={language}>
        <option value='en'>English</option>
        <option value='lt'>Lietuviškai</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
