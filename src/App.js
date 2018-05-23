import React, { Component } from 'react';
import './App.css';
import ReactEcharts from 'echarts-for-react'

class App extends Component {
    constructor(props,context){
        super(props,context)
        this.state={
            a:["0930", "0931", "0932", "0933", "0934", "0935", "0936", "0937", "0938", "0939", "0940", "0941", "0942", "0943", "0944", "0945", "0946", "0947", "0948", "0949", "0950", "0951", "0952", "0953", "0954", "0955", "0956", "0957", "0958", "0959", "1000", "1001", "1002", "1003", "1004", "1005", "1006", "1007", "1008", "1009", "1010", "1011", "1012", "1013", "1014", "1015", "1016", "1017", "1018", "1019", "1020", "1021", "1022", "1023", "1024", "1025", "1026", "1027", "1028", "1029", "1030", "1031", "1032", "1033", "1034", "1035", "1036", "1037", "1038", "1039", "1040", "1041", "1042", "1043", "1044", "1045", "1046", "1047", "1048", "1049", "1050", "1051", "1052", "1053", "1054", "1055", "1056", "1057", "1058", "1059", "1100", "1101", "1102", "1103", "1104", "1105", "1106", "1107", "1108", "1109","1110", "1111", "1112", "1113", "1114", "1115", "1116", "1117", "1118", "1119", "1120", "1121", "1122", "1123", "1124", "1125", "1126", "1127", "1128", "1129", "1130", "1300", "1301", "1302", "1303", "1304", "1305", "1306", "1307", "1308", "1309", "1310", "1311", "1312", "1313", "1314", "1315", "1316", "1317", "1318", "1319", "1320","1321", "1322", "1323", "1324", "1325", "1326", "1327", "1328", "1329", "1330", "1331", "1332", "1333", "1334", "1335", "1336", "1337", "1338", "1339", "1340", "1341", "1342", "1343", "1344", "1345", "1346", "1347", "1348", "1349", "1350", "1351", "1352", "1353", "1354", "1355", "1356", "1357", "1358", "1359", "1400", "1401", "1402", "1403", "1404", "1405", "1406", "1407", "1408", "1409", "1410", "1411", "1412", "1413", "1414", "1415", "1416", "1417", "1418", "1419", "1420", "1421", "1422", "1423", "1424", "1425", "1426", "1427", "1428", "1429", "1430", "1431", "1432", "1433", "1434", "1435", "1436", "1437", "1438", "1439", "1440", "1441", "1442", "1443", "1444", "1445", "1446", "1447", "1448", "1449", "1450", "1451", "1452", "1453", "1454", "1455", "1456", "1457", "1458", "1459", "1500"],
            b:[1,2,3,4,5],
            c:[6,7,8,9,0],
        }
    }

    componentDidMount(){

    }

    getOption = () => {
        // let bsmall = Math.min.apply(null,this.state.b)
        // let bmax = Math.max.apply(null, this.state.b)
        // let alpha = bsmall
        // let beta = bmax
        let noun = {
            name:'平安投顾',
            type:'line',
            stack: '总量',
            symbol:'none',
            symbolSize: 6,
            smooth: true,
            lineStyle: {
                normal: {
                    color: 'blue',
                    width: 1,
                    type: 'solid',
                    opacity: 1,
                },
            },
            itemStyle: {
                normal: {
                    color: 'blue',
                }
            },
            data:this.state.b,
        }
        let shanghai = {
            name:'天天基金',
            type:'line',
            symbol:'none',
            stack: '分量',
            smooth: true,
            lineStyle: {
                normal: {
                    color: '#EB6897',
                    width: 1,
                    type: 'solid',
                    opacity: 1,
                },
            },
            itemStyle: {
                normal: {
                    color: '#EB6897',
                }
            },
            data:this.state.c,
        }
        let series = [noun,shanghai]
        return {
            title: {
                text: '堆叠区域图',
                show:false
            },
            tooltip : {
                trigger: 'axis',
                show:false,
            },
            legend: {
                data:['国债','沪深','推荐组合']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : this.state.d,
                    show:false,
                }
            ],
            yAxis: {
                type: 'value',
                // min:alpha,
                // max:beta,
                // axisLabel:{
                //     formatter:'{value}%'
                // },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#333',
                    },
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['#EFF3F7'],
                    },
                },

                axisLine: {
                    lineStyle: {
                        color: '#52627A',
                        width: 0,
                        opacity: 0.5
                    }
                },
                axisTick: {
                    show: false,
                },

            },
            series: series,
        };
    };
  render() {
    return (
      <div className="App">
          <ReactEcharts
            option={this.getOption()}
          />
      </div>
    );
  }
}

export default App;
