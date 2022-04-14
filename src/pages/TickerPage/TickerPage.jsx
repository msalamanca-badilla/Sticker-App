import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './TickerPage.css'


// export default function TickerPage(props) {

//   const [watchlistData, setWatchlistData] = useState({
//     ticker: '',
//     displayName:'',
//     tickerSymbol:'',
//     regularMarketDayHigh:0,
//     regularMarketDayLow:0,
//   })
  
//   //API CALL HANDLE CHANGE
//   handleChange = (evt) => {
//     this.setState({
//       ticker: evt.target.value,
//       err:''
//     });
//   };

//   //API CALL HANDLESUBMIT
//   handleSubmit = async (evt) => {
//     evt.preventDefault(); 
//       const ticker = watchlistData.ticker//input for 'Enter Stock Ticker'
//       const options = {
//       method: 'GET',
//       url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${ticker}`,
//       headers: {
//         'X-API-KEY':'02KaHo3SM77gxqvnJQC7w8cSAj2iTUQO6CXKntuT'
//       }
//     };
//     const response = await axios.request(options)
//     const data = response.data.quoteResponse.result[0]
//     this.setState({
//       displayName: data.displayName,
//       tickerSymbol: data.symbol,
//       regularMarketDayHigh: data.regularMarketDayHigh,
//       regularMarketDayLow: data.regularMarketDayLow
//     })
//   };

//   //ADD TO WATCHLIST HANDLE SUBMIT
//   handleWatchlistSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       let jwt = localStorage.getItem('token')
//       const fetchResponse = await fetch('/api/tickers/addToWatchlist', {
//         method: 'POST',
//         headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + jwt},
//         body: JSON.stringify({
//           tickerSymbol: watchlistData.tickerSymbol,
//           displayName: watchlistData.displayName,
//           regularMarketDayHigh: watchlistData.regularMarketDayHigh,
//           regularMarketDayLow: watchlistData.regularMarketDayLow,
//         })
//       })

//       let serverResponse = await fetchResponse.json()
//       console.log('Success: ', serverResponse)

//       this.setState({
//         ticker: '',
//         displayName:'',
//         tickerSymbol:'',
//         regularMarketDayHigh:0,
//         regularMarketDayLow:0
//         })
//         this.props.history.push('/watchlist');
//     } catch (err) {
//       console.log("error")
//       this.setState({ error:  'Try Again' });
//     }
//   }


//     return (
//       <main className="TickerPage">
//           <h3 className = 'titleFont'>Enter Stock Symbol</h3>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="exampleInputEmail1"></label>
//                     <input 
//                       placeholder='i.e. AAPL'
//                       type="text" 
//                       className="form-control" 
//                       value={watchlistData.ticker} 
//                       onChange={(evt)=>this.handleChange(evt)} 
//                     />
//                 </div>
//                     <button type="submit" className="btn btn-dark">Search</button>
//             </form>
//             <br/>
            
//       {this.state.displayName? (
//             <>
//             <hr/>
//               <div className='stockData'>
//                 <div>
//                   <h2>{this.state.displayName} ({this.state.tickerSymbol})</h2>
//                   <p>Market Day
//                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" className="bi bi-arrow-up-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
//                     </svg>: ${this.state.regularMarketDayHigh}
//                   </p>                  
//                   <p>Market Day
//                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-arrow-down-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
//                     </svg>: ${this.state.regularMarketDayLow}
//                   </p>
//                 </div>
//               </div>
//               <form onSubmit={(evt) => this.handleWatchlistSubmit(evt)} >
//                   <button type="submit" className="btn btn-dark">Add to Watchlist</button>                
//               </form>
//             </>
//       ):(
//         <div>Please enter a valid Stock Symbol</div>
//       )}
//       </main>
//     );
//   }




export default class TickerPage extends React.Component {

  state={
    ticker: '',
    displayName:'',
    tickerSymbol:'',
    regularMarketDayHigh:0,
    regularMarketDayLow:0,
  }
  
  //API CALL HANDLE CHANGE
  handleChange = (evt) => {
    this.setState({
      ticker: evt.target.value,
      err:''
    });
  };

  //API CALL HANDLESUBMIT
    //Understand that API calls shouldn't be ran on the front-end and API Keys shouldn't be exposed. This was done for React practice and will eventually move this call to the backend
  handleSubmit = async (evt) => {
    evt.preventDefault(); 
      const ticker = this.state.ticker//input for 'Enter Stock Ticker'
      const options = {
      method: 'GET',
      url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${ticker}`,
      headers: {
        'X-API-KEY':'02KaHo3SM77gxqvnJQC7w8cSAj2iTUQO6CXKntuT'
      }
    };
    const response = await axios.request(options)
    const data = response.data.quoteResponse.result[0]
    this.setState({
      displayName: data.displayName,
      tickerSymbol: data.symbol,
      regularMarketDayHigh: data.regularMarketDayHigh,
      regularMarketDayLow: data.regularMarketDayLow
    })
  };

  //ADD TO WATCHLIST HANDLE SUBMIT
  handleWatchlistSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let jwt = localStorage.getItem('token')
      const fetchResponse = await fetch('/api/tickers/addToWatchlist', {
        method: 'POST',
        headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + jwt},
        body: JSON.stringify({
          tickerSymbol: this.state.tickerSymbol,
          displayName: this.state.displayName,
          regularMarketDayHigh: this.state.regularMarketDayHigh,
          regularMarketDayLow: this.state.regularMarketDayLow,
        })
      })

      let serverResponse = await fetchResponse.json()
      console.log('Success: ', serverResponse)

      this.setState({
        ticker: '',
        displayName:'',
        tickerSymbol:'',
        regularMarketDayHigh:0,
        regularMarketDayLow:0
        })
        this.props.history.push('/watchlist');
    } catch (err) {
      console.log("error")
      this.setState({ error:  'Try Again' });
    }
  }

  render() {
    return (
      <main className="TickerPage">
          <h3 className = 'titleFont'>Enter Stock Symbol</h3>
            <form onSubmit={(evt)=>this.handleSubmit(evt)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"></label>
                    <input 
                      placeholder='i.e. AAPL'
                      type="text" 
                      className="form-control" 
                      value={this.state.ticker} 
                      onChange={(evt)=>this.handleChange(evt)} 
                    />
                </div>
                    <button type="submit" className="btn btn-dark">Search</button>
            </form>
            <br/>
            
      {this.state.displayName? (
            <>
            <hr/>
              <div className='stockData'>
                <div>
                  <h2>{this.state.displayName} ({this.state.tickerSymbol})</h2>
                  <p>Market Day
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" className="bi bi-arrow-up-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                    </svg>: ${this.state.regularMarketDayHigh}
                  </p>                  
                  <p>Market Day
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-arrow-down-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                    </svg>: ${this.state.regularMarketDayLow}
                  </p>
                </div>
              </div>
              <form onSubmit={(evt) => this.handleWatchlistSubmit(evt)} >
                  <button type="submit" className="btn btn-dark">Add to Watchlist</button>                
              </form>
            </>
      ):(
        <div>Please enter a valid Stock Symbol</div>
      )}
      </main>
    );
  }
}