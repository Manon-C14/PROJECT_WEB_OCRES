import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  FlexibleXYPlot
} from 'react-vis';
import API_OpenWeatherMap from "../APIs/API_OpenWeatherMap";


var myDATA = [
    {id: 'J', y: 5, x: 'Ja'},
    {id: 'F', y: 5, x: 'F'},
    {id: 'M', y: 5, x: 'Ma'},
    {id: 'A', y: 5, x: 'Av'},
    {id: 'M', y: 5, x: 'Mai'},
    {id: 'J', y: 5, x: 'Jui'},
    {id: 'J', y: 5, x: 'Ju'},
    {id: 'A', y: 5, x: 'Ao'},
    {id: 'S', y: 5, x: 'S'},
    {id: 'O', y: 5, x: 'O'},
    {id: 'N', y: 5, x: 'N'},
    {id: 'D', y: 5, x: 'D'},
];


/*var yDom = myDATA.reduce(
    (res, row) => {
        return {
        max: Math.max(res.max, row.y),
        min: Math.min(res.min, row.y)
        };
    },
    {max: -Infinity, min: Infinity}
);*/


async function getTempJanvier(){
    const apiweather= new API_OpenWeatherMap();
    let response = await apiweather.fetchWeatherJanvier()
    {
        const data = response.data;
        var tjanvier = data.result.temp.mean;
        tjanvier = tjanvier-273.15;
        return tjanvier;
    }
}

async function getTempFevrier(){
    const apiweather= new API_OpenWeatherMap();
    let response = await apiweather.fetchWeatherFevrier()
    {
        const data = response.data;
        var tfevrier = data.result.temp.mean;
        tfevrier = tfevrier-273.15;
        return tfevrier;
    }
}

async function getTempMars(){
    const apiweather= new API_OpenWeatherMap();
    let response = await apiweather.fetchWeatherMars()
    {
        const data = response.data;
        var tmars = data.result.temp.mean;
        tmars = tmars-273.15;
        return tmars;
    }
}

async function getTempAvril(){
    const apiweather= new API_OpenWeatherMap();
    let response = await apiweather.fetchWeatherAvril()
    {
        const data = response.data;
        var tavril = data.result.temp.mean;
        tavril = tavril-273.15;
        return tavril;
    }
}

async function getTempMai(){
    const apiweather= new API_OpenWeatherMap();
    let response = await apiweather.fetchWeatherMai()
    {
        const data = response.data;
        var tmai = data.result.temp.mean;
        tmai = tmai-273.15;
        return tmai;
    }
}

async function getTempJuin(){
    const apiweather= new API_OpenWeatherMap();
    let response = await apiweather.fetchWeatherJuin()
    {
        const data = response.data;
        var tjuin = data.result.temp.mean;
        tjuin = tjuin-273.15;
        return tjuin;
    }
}

async function getTempJuillet(){
    const apiweather= new API_OpenWeatherMap();
    let response = await apiweather.fetchWeatherJuillet()
    {
        const data = response.data;
        var tjuillet = data.result.temp.mean;
        tjuillet = tjuillet-273.15;
        return tjuillet;
    }
}

async function getTempAout(){
    const apiweather= new API_OpenWeatherMap();
    let response = await apiweather.fetchWeatherAout()
    {
        const data = response.data;
        var taout = data.result.temp.mean;
        taout = taout-273.15;
        return taout;
    }
}

async function getTempSeptembre(){
    const apiweather= new API_OpenWeatherMap();
    let response = await apiweather.fetchWeatherSeptembre()
    {
        const data = response.data;
        var tseptembre = data.result.temp.mean;
        tseptembre = tseptembre-273.15;
        return tseptembre;
    }
}

async function getTempOctobre(){
    const apiweather= new API_OpenWeatherMap();
    let response = await apiweather.fetchWeatherOctobre()
    {
        const data = response.data;
        var toctobre = data.result.temp.mean;
        toctobre = toctobre-273.15;
        return toctobre;
    }
}

async function getTempNovembre(){
    const apiweather= new API_OpenWeatherMap();
    let response = await apiweather.fetchWeatherNovembre()
    {
        const data = response.data;
        var tnovembre = data.result.temp.mean;
        tnovembre = tnovembre-273.15;
        return tnovembre;
    }
}

async function getTempDecembre(){
    const apiweather= new API_OpenWeatherMap();
    let response = await apiweather.fetchWeatherDecembre()
    {
        const data = response.data;
        var tdecembre = data.result.temp.mean;
        tdecembre = tdecembre-273.15;
        return tdecembre;
    }
}




async function updateData(){
    myDATA[0].y = await getTempJanvier();
    myDATA[1].y = await getTempFevrier();
    myDATA[2].y = await getTempMars();
    myDATA[3].y = await getTempAvril();
    myDATA[4].y = await getTempMai();
    myDATA[5].y = await getTempJuin();
    myDATA[6].y = await getTempJuillet();
    myDATA[7].y = await getTempAout();
    myDATA[8].y = await getTempSeptembre();
    myDATA[9].y = await getTempOctobre();
    myDATA[10].y = await getTempNovembre();
    myDATA[11].y = await getTempDecembre();

    return myDATA;
}


/*function updateYDom(){
    var update = myDATA.reduce(
        (res, row) => {
            //console.log("row : " + row.y + "    max1 : " + Math.max(res.max, row.y));
            return {
                max: Math.max(res.max, row.y),
                min: Math.min(res.min, row.y)
            };
        },
        { max: -Infinity, min: Infinity }
    );
    return update;
}*/


export default class Example extends React.Component {
    state = {
      useCanvas: false,
      data: updateData(),
      //yDom: updateYDom()
    };
    
    render() {
      const {useCanvas} = this.state;
      const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
      //console.log("maxY fonction : " + updateYDom().max);
      //console.log("maxY variable : " + yDom.max);
      return (
        <div className="GrapheArea">
            <button className="Input-button"
                onClick={() =>
                    this.setState({
                      data: updateData(),
                      //yDom: updateYDom()
                    })
                  }      
            >
                Actualiser
            </button>
            <FlexibleXYPlot className="Graphe"
                xType="ordinal"
                //yDomain={[yDom.min-3, yDom.max+3]}
            >
                <VerticalBarSeries className="vertical-bar-series-example" data={myDATA} />
                <XAxis />
                <YAxis />
            </FlexibleXYPlot>
        </div> 
      );
    }
}
