import { Component, Input, OnInit } from '@angular/core';

declare var echarts: any;

@Component({
  selector: 'app-visitors-analytics-chart',
  template: `
    <div echarts
         [options]="option"
         [merge]="option"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
  styleUrls: ['./visitors-analytics-chart.component.scss']
})
export class VisitorsAnalyticsChartComponent {
  private alive = true;

  @Input() chartData = {
    innerLine: [3, 5, 2, 5, 6, 2, 7],
    outerLine: [
      { label: '22 Дек', value: 6 },
      { label: '23 Дек', value: 4 },
      { label: '24 Дек', value: 3 },
      { label: '25 Дек', value: 7 },
      { label: '26 Дек', value: 8 },
      { label: '27 Дек', value: 3 },
      { label: '28 Дек', value: 4 },
    ]
  }

  option: any;
  themeSubscription: any;
  echartsIntance: any;

  ngAfterViewInit() {
    this.setOptions({});
  }

  setOptions(eTheme) {
    this.option = {
      grid: {
        left: 40,
        top: 20,
        right: 0,
        bottom: 60,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: `rgba(0, 0, 0, 0)`,
            width: `1`,
          },
        },
        textStyle: {
          color: `#8f9bb3`,
          fontSize: 20,
          fontWeight: `normal`,
        },
        position: 'top',
        backgroundColor: `white`,
        borderColor: `#8f9bb3`,
        borderWidth: 1,
        formatter: (params) => {
          return Math.round(parseInt(params[0].value, 10));
        },
        extraCssText: 'border-radius: 10px; padding: 4px 16px;',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        offset: 25,
        data: this.chartData.outerLine.map(i => i.label),
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: `#8f9bb3`,
          fontSize: `14px`,
        },
        axisLine: {
          lineStyle: {
            color: `#8f9bb3`,
            width: '2',
          },
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: `#8f9bb3`,
            width: '1',
          },
        },
        axisLabel: {
          color: `#8f9bb3`,
          fontSize: `14px`,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: `white`,
            width: '1',
          },
        },
      },
      series: [
        this.getInnerLine(eTheme),
        this.getOuterLine(eTheme),
      ],
    };
  }

  getOuterLine(eTheme) {
    return {
      type: 'line',
      smooth: true,
      symbolSize: 20,
      itemStyle: {
        normal: {
          opacity: 0,
        },
        emphasis: {
          color: '#ffffff',
          borderColor: `#36f`,
          borderWidth: 2,
          opacity: 1,
        },
      },
      lineStyle: {
        normal: {
          width: 0,
          type: 'solid',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: `#36f`,
          }, {
            offset: 1,
            color: `#36f`,
          }]),
          shadowColor: 'rgba(0, 0, 0, 0)',
          shadowBlur: 6,
          shadowOffsetY: 12,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: `#36f`,
          }, {
            offset: 1,
            color: `#36f`,
          }]),
        },
      },
      data: this.chartData.outerLine.map(i => i.value),
    };
  }

  getInnerLine(eTheme) {
    return {
      type: 'line',
      smooth: true,
      symbolSize: 20,
      tooltip: {
        show: false,
        extraCssText: '',
      },
      itemStyle: {
        normal: {
          opacity: 0,
        },
        emphasis: {
          opacity: 0,
        },
      },
      lineStyle: {
        normal: {
          width: '1',
          type: 'solid',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1),
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: `#00d68f`,
          }, {
            offset: 1,
            color: `#00d68f`,
          }]),
          opacity: 1,
        },
      },
      data: this.chartData.innerLine,
    };
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
