import React from 'react';

class RiverCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      river:[],
      isLoading: false
    };
  }

  componentDidMount() {
    let newArray = []
    this.setState({ isLoading: true });
    fetch(this.props.url, {   //period = is equivalent to 3 day time period-should be able to edit
      method: 'GET'
    })
    .then((res) => res.json())
    .then( results => {
        let riverResults = results.value.timeSeries
        riverResults = riverResults.map( river => {
          newArray.push({
            current_date_time: river.values[0].value[0].dateTime,
            station_name:river.sourceInfo.siteName,
            current_amount_cfs: parseFloat(river.values[0].value[0].value),
            usgs_station_id:river.sourceInfo.siteCode[0].value,
          })
          return newArray;
        })
      },
      fetch('https://dwr.state.co.us/Rest/GET/api/v2/telemetrystations/telemetrystation/?abbrev=PLACHECO%2C+BCRMORCO%2C+BOCMIDCO%2C+PLADENCO%2C+PLACHACO%2C+PLAHARCO%2C+SVCLYOCO%2C+BTCANYCO%2C+CLAFTCCO%2C+BOCBGRCO', {
        method: 'GET'
      })
      .then((res) => res.json())
      .then(result => {
        let riverResults = result.ResultList
        riverResults = riverResults.map( river => {
          newArray.push({
            current_date_time: river.measDateTime,
            station_name: river.stationName,
            current_amount_cfs: river.measValue,
            usgs_station_id: river.usgsStationId,
          })
        })
        this.setState({
          river: this.state.river.concat(newArray),
          isLoading: false
        })
      })
    )
  }

  render() {
    const {error, river, isLoading} = this.state;
    if (error) {
      return <div>Error</div>
    } else if (isLoading) {
      return <div>Loading...</div>
    } else {
      let test = new Date().toLocaleString('en-US', {timeZone: 'America/Denver', hour12: true}).slice(12)
      // let foo = test.slice(2,5)
      test = test.replace(test.slice(2,5), "")
      console.log(test)
      return [
        <div>
          {river.map((x) => {
            let foo = new Date(x.current_date_time).toLocaleString('en-US', {timeZone: 'America/Denver', hour12: true}).slice(12)
            foo = foo.replace(foo.slice(5,8),"")
            console.log(foo)
            return [
              <div>
                <div>{x.station_name}</div>
                <div>current CFS: {x.current_amount_cfs}</div>
                <div>taken on {new Date(x.current_date_time).toGMTString().slice(0,16)} at {foo} </div><br></br>
              </div>
            ]
          })}
        </div>
      ]
    }
  }
}


export default RiverCard;
