import React,{useState} from 'react';
import axios from 'axios';
function App() {
  let [InputURL,setURL] = useState("");
  let [Output,setOutput]= useState("");
  const handleChange = (value,set)=>{set(value);}
  const ShortURL =(event)=>{
    event.preventDefault();
    axios.post('http://localhost:4000/api',{
      inputurl:InputURL
    })
    .then((res)=>{
      
      if(res.data.status==="success"){
        setOutput(res.data.output);
        window.alert("URL success");
      }
      else{window.alert("URL fail");}
      
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  const Coppy=()=> {
    navigator.clipboard.writeText(Output);
    alert("Copied the text: " + Output);
  }

  return (
    <div className="Auth-form-container">
 <form className="Auth-form" onSubmit={ShortURL}>
        
        
            <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Short your URL</h3>
                    <div className="mb-3">
                    
                        <input
                            type="url"
                            className="form-control"
                            placeholder="Enter Your URL"
                            onChange={e => handleChange(e.target.value, setURL)}
                            required
                        />
                            <div className="d-grid">
                                 <button type="submit" className="btn btn-primary">Submit</button>
                           </div>
                           <label>Your short url</label>
                            <div className='Output'>
                                <input type="text" value={Output}/>
                                <button type="button" className="btn btn-success" onClick={Coppy}>Coppy</button>
                            </div>
                   
                    </div>
            </div>
      </form>

      
    </div>
  );
}

export default App;
