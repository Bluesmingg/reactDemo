import React, { useEffect } from 'react';
// @ts-ignore
import { mapdata } from '../utils/map';
import * as echarts from 'echarts';

const Map: React.FC = () => {
  const option = {
    backgroundColor: '#404a59',
    tooltip: {
      show: true
    },
    geo: {
      map: 'china',
      roam: true,
      label: {
        show: false
      }
    },
    series: [
      {
        name: '数量',
        type: 'map',
        zoom: 1.2,
        data: [
          {
            name: '新疆维吾尔自治区',
            value: 31,
            selected: true,
            select: {
              itemStyle: {
                areaColor: 'red'
              }
            }
          }
        ],

        geoIndex: 0
      }
    ]
  };
  // echarts地图加载
  useEffect(() => {
    const charts = echarts.init(document.getElementById('map'));
    echarts.registerMap('china', mapdata as any);
    charts.setOption(option);
    charts.on('click', (params: any) => {
      console.log(params, 'params');
      charts.dispatchAction({
        type: 'showTip',
        dataIndex: params.dataIndex,
        seriesIndex: 0
      }) as any;
    });
  }, [option]);
  return (
    <>
      <div id="map" style={{ width: '50%', height: '50vh' }}></div>
    </>
  );
};
export default Map;
