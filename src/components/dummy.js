import {React,useState} from 'react';
import axios from "axios";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Dummy = () => {

    //set datapdf
    const[dataPdf, setDataPdf] = useState([]);

    //click on fetch api button
    const fetchApi =() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((response) =>{
            const dataPdf = response.data;
            setDataPdf(dataPdf);
        }
        ) 
    }

    const downloadData = () =>{
        const pdf = new jsPDF();
        pdf.autoTable({html: '#table'});
        pdf.save('dataPdf.pdf')
    }

  return(
    <>
        
    <div className="container">

        <button onClick={fetchApi} className="btn btn-success btn-md"> 
            FetchApi
        </button>

        {dataPdf.length >0 &&(<div className="table-responsive" style={{marginTop: 30 + 'px'}}></div>)}

            <div className="download-data-div">
                <button className="btn btn-primary btn-md" onClick={downloadData}> 
                    Download Data
                </button>

            </div>
            
            <table className="table table-borderless" id ='table'>
                <thead>
                    <tr>
                        <th scope = 'col'>
                            ID 
                        </th>
                        <th scope = 'col'>
                            TITLE
                        </th>
                        <th scope = 'col'>
                            Completed
                        </th>
                    </tr>
                </thead>

                {dataPdf.map((individualData) =>(
                <tbody key={individualData.id}>
                    <tr>
                        <td> {individualData.id} </td>
                        <td> {individualData.title} </td>
                        <td> {String(individualData.completed)} </td>
                    </tr>
                </tbody>
                ))}
            </table>
    </div> 
    </>
  )
}

export default Dummy;