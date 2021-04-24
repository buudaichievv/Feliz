import React, { Component } from 'react';

import Chart from './Chart';

class Chart_App extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        // this.getchartData(); // this should be this.getChartData();
        this.getChartData();
    }

    getChartData() {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: ['1990-году в мире', '1995-году в мире', '2000-году в мире', '2010-году в мире', '2015-году в мире', '2020-году в мире'],
                datasets: [
                    {
                        label: 'Потребление кофе в мире',
                        data: [
                            1996,
                            20300,
                            40300,
                            60300,
                            80300,
                            95072
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div>

                <Chart chartData={this.state.chartData} location="в мире" legendPosition="bottom" />
            </div>
        );
    }
}

export default Chart_App;